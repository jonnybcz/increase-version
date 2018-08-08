# increase-version

Automaticaly increase version in

 * package.json
 * Dockerfile
 * service.yaml

Script find in package.json property version.

## params

* --package-json=./package.json
* --dockerfile=./Dockerfile
* --template-yaml=./template.yaml
* --yaml=./service-name.yaml
* --version-up=major ... (2🔺).1.0
* --version-up=minor ... 2.(1🔺).0
* --version-up=build ... 2.1.(0🔺) default

## examples js
```javascript
const increaseVersion = require('increase-version');

async function increase() {
    const oldVersion = await version.getVersion(pathOfPackageJson);
    const newVersion = version.changeVersion(oldVersion, program.versionUp);
    const versions = { old: oldVersion, new: newVersion };
    
    increaseVersion.json(pathOfPackageJson, versions);
    increaseVersion.dockerfile(pathOfDockerfile, versions);    
} 

```  

## examples bash
```bash 
# only package.json
increase-version --package-json=./package.json
```  

```bash 
# package.json with Dockerfile
increase-version \ 
--package-json=./package.json.example \
--dockerfile=./Dockerfile 
```  

