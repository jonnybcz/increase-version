const utils = require('./utils');

const constants = {
    type: {
        MAJOR: 'major', // (1^).0.0
        MINOR: 'minor', // 1.(0^).0
        BUILD: 'build', // 1.0.(0^)
    },
};


/**
 * @param {string} version
 * @returns {boolean}
 */
function checkVersion(version) {
    return /\d+\.\d+\.\d+/.test(version);
}

/**
 * Parse version '1.0.0' and increase it.
 *
 * @param {string} version
 * @param {string} type [major, minor, build]
 * @throws {Error}
 * @returns {*}
 */
function changeVersion(version, type = constants.type.BUILD) {
    if (checkVersion(version)) {
        const versionArr = version.trim().split('.');

        switch (type) {
            case constants.type.BUILD:
                versionArr[2] = parseInt(versionArr[2], 10) + 1;
                break;
            case constants.type.MINOR:
                versionArr[1] = parseInt(versionArr[1], 10) + 1;
                break;
            case constants.type.MAJOR:
                versionArr[0] = parseInt(versionArr[0], 10) + 1;
                break;
        }

        return versionArr.join('.');
    } else {
        throw new Error(`Version ${version} is not valid, valid format is \\d+.\\d+.\\d+`);
    }
}

/**
 * Parse json and returns property version.
 *
 * @param {string} packageJsonFile
 * @throws {Error}
 * @returns {Promise}
 */
async function getVersion(packageJsonFile) {
    const content = await utils.readFSAsync(packageJsonFile);

    return JSON.parse(content.toString()).version;
}

/**
 * @param {string} file
 * @param {string} oldVersion
 * @param {string} newVersion
 */
function successMessage(file, oldVersion, newVersion) {
    console.log(`Version changed in file ${file} from ${oldVersion} to ${newVersion}`);
}

/**
 * @param {string} file
 * @param {string} newVersion
 */
function warnMessage(file, newVersion) {
    console.log(`FAILED ! Version change in file ${file} to ${newVersion}`);
}

module.exports = {
    constants,
    changeVersion,
    checkVersion,
    getVersion,
    successMessage,
    warnMessage,
};
