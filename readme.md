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
    const versions = await version.getVersion(pathOfPackageJson);
    
    increaseVersion.json(pathOfPackageJson, versions);
    increaseVersion.dockerfile(pathOfDockerfile, versions);    
} 

```  

## examples bash
```bash 
# only package.json
node invcreaseVersion.js --package-json=./package.json
```  

```bash 
# package.json with Dockerfile
node invcreaseVersion.js \ 
--package-json=./package.json.example \
--dockerfile=./Dockerfile 
```  

