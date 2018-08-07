const util = require('util');
const fs = require('fs');
const path = require('path');

const readFSAsync = util.promisify(fs.readFile);
const writeFSAsync = util.promisify(fs.writeFile);
const existFSAsnyc = util.promisify(fs.access);


/**
 * @param {string} file
 * @throws {Error}
 */
function fileExists(file) {
    return existFSAsnyc(file, fs.constants.W_OK);
}

module.exports = {
    fileExists,
    readFSAsync,
    writeFSAsync,
};
