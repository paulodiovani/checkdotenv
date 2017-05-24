'use strict';

const _ = require('lodash');
const dotenv = require('dotenv');
const sep = require("path").sep;
const fs = require('fs');

const NO_DIFFERENCE_FOUND = 0;

const read = (filename) => {

    const filePath = `${process.cwd()}${sep}${filename}`;
    return fs.readFileSync(filePath);
};

const isMissingVariables = (filename) => {

    const parsed = dotenv.parse(read(filename));
    const diff = _.difference(Object.keys(parsed), Object.keys(process.env));
    return _.size(diff) > NO_DIFFERENCE_FOUND ? diff : false;
};

module.exports = { isMissingVariables };
