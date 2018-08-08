#!/usr/bin/env node
const packageJson = require('./lib/files/packageJson');
const dockerfile = require('./lib/files/dockerfile');
const yaml = require('./lib/files/yaml');
const version = require('./lib/version');

module.exports = {
    constants: version.constants,
    getVersionOfPackageJson: version.getVersion,
    changeVersion: version.changeVersion,
    json: packageJson.increaseVersion,
    dockerfile: dockerfile.increaseVersion,
    yaml: yaml.increaseVersion,
};
