const program = require('commander');

const packageJsonFile = require('./package.json');
const packageJson = require('./lib/files/packageJson');
const dockerfile = require('./lib/files/dockerfile');
const version = require('./lib/version');

program
    .version(packageJsonFile.version)
    .option('-p, --package-json <file>', 'File package.json')
    .option('-d, --dockerfile [file]', 'File Dockerfile')
    .option('-y, --yaml', 'File yaml')
    .option('-t, --template-yaml', 'File template for yaml')
    .option('-u, --version-up [type]', 'Increase number in version [major, minor, build]', /^(major|minor|build)$/i, 'build')
    .parse(process.argv);

(async function run() {
    try {
        const oldVersion = await version.getVersion(program.packageJson);
        const newVersion = version.changeVersion(oldVersion, program.versionUp);
        const versions = { old: oldVersion, new: newVersion };

        await packageJson.increaseVersion(program.packageJson, versions);

        if (program.dockerfile) {
            await dockerfile.increaseVersion(program.dockerfile, versions);

        }
    } catch (err) {
        console.log(err.toString());
        process.exit(1);
    }
})();

module.exports = {
    getVersionOfPackageJson: version.getVersion,
    json: packageJson.increaseVersion,
    dockerfile: dockerfile.increaseVersion,
};
