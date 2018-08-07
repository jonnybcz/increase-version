// 1. npm i js-yaml --save-dev
// 2. set FILES
// 3. set YAML_NAME

const util = require('util');
const fs = require('fs');
const path = require('path');

// change for other CI
const FILES = {
    DOCKERFILE: path.join(__dirname, '../Dockerfile'),
    KUBERNET_DEV: {
        TEMPLATE: path.join(__dirname, '../kubernetes/dev/template/prototyp-homepage-deployment.yaml'),
        GENERATED: path.join(__dirname, '../kubernetes/dev/prototyp-homepage-deployment.yaml'),
    },
    //PACKAGE_JSON: path.join(__dirname, '../package.json'),
};

async function changeVersionInKubernetYaml() {
    try {
        const content = await readFSAsync(FILES.KUBERNET_DEV.TEMPLATE);
        let contentAsText = content.toString();

        contentAsText = contentAsText.replace('{{version}}', NEW_VERSION);
        contentAsText = contentAsText.replace(/{{name}}/g, YAML_NAME);


        await writeFSAsync(FILES.KUBERNET_DEV.GENERATED, contentAsText);
        console.log(`Version changed in file ${FILES.KUBERNET_DEV.GENERATED} from ${OLD_VERSION} to ${NEW_VERSION}`);
    } catch (error) {
        console.log(`FAILED ! Version change in file ${FILES.KUBERNET_DEV.GENERATED} to ${NEW_VERSION}`);
        console.log(error);
    }
}

module.exports = {
    increaseVersionInPackageJson,
};
