const utils = require('../utils');
const versionUtils = require('../version');


/**
 * Increase version number in package.json
 *
 * @param {string} file
 * @param {{old: string, new: string}} version
 * @param {?object} keyValues, replace from template key with values
 * @returns {Promise}
 */
async function increaseVersion(template, file, version, keyValues = {}) {
    try {
        const content = await utils.readFSAsync(template);
        let contentAsText = content.toString();

        contentAsText = contentAsText.replace('{{version}}', version.new);

        for (const key in keyValues) {
            const regExp = new RegExp(`{{${key}}}`, 'g');

            contentAsText = contentAsText.replace(regExp, keyValues[key]);
        }

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
