const utils = require('../utils');
const versionUtils = require('../version');

/**
 * Increase version number in Dockerfile
 *
 * @param {string} file
 * @param {{old: string, new: string}} version
 * @returns {Promise}
 */
async function increaseVersion(file, version) {
    try {
        const content = await utils.readFSAsync(file);
        let contentAsText = content.toString();
        contentAsText = contentAsText.replace(/^LABEL version.+/m, `LABEL version="${version.new}"`);
        await utils.writeFSAsync(file, contentAsText);
        versionUtils.successMessage(file, version.old, version.new);
    } catch (error) {
        versionUtils.warnMessage(file, version.new);
        console.log(error);
    }
}

module.exports = {
    increaseVersion,
};
