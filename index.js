#!/usr/bin/env node
const program = require('commander');

const packageJsonFile = require('./package.json');
const packageJson = require('./lib/files/packageJson');
const dockerfile = require('./lib/files/dockerfile');
const version = require('./lib/version');

§
module.exports = {
    getVersionOfPackageJson: version.getVersion,
    json: packageJson.increaseVersion,
    dockerfile: dockerfile.increaseVersion,
};
