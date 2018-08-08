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

## example js
```javascript
const increaseVersion = require('increase-version');

async function increase() {
    const pathOfPackageJson = './package.json';
    const oldVersion = await increaseVersion.getVersionOfPackageJson(pathOfPackageJson);
    const newVersion = increaseVersion.changeVersion(oldVersion, increaseVersion.constants.type.BUILD);
    const versions = { old: oldVersion, new: newVersion };

    increaseVersion.json(pathOfPackageJson, versions);

    // Optional ...
    const pathOfDockerfile = './Dockerfile';
    increaseVersion.dockerfile(pathOfDockerfile, versions);

    // Optional ...
    const pathOfTemplateYaml = './kubernetes/dev/template/prototyp-homepage-deployment.yaml';
    const pathOfGeneratedYaml = './kubernetes/dev/prototyp-homepage-deployment.yaml';
    const yamlProps = {
        name: 'my-service-name',
        containerPort: 80,
    };
    increaseVersion.yaml(pathOfTemplateYaml, pathOfGeneratedYaml, versions, yamlProps);
}

increase();


```  

## examples bash
```bash 
# only package.json
increase-version --package-json=./package.json
```  

```bash 
# package.json with Dockerfile
increase-version \
    --package-json=./package.json \
    --dockerfile=./Dockerfile \
    --version-up=major
```  

## examples yaml template
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: {{name}}
spec:
  selector:
    matchLabels:
      app: {{name}}
  template:
    metadata:
      labels:
        app: {{name}}
    spec:
      containers:
        - name: {{name}}
          image: my-domain.dev/{{name}}:{{version}}
          ports:
            - containerPort: {{containerPort}}
          env:
            - name: NODE_ENV
              value: "production"
            - name: DB_HOST
              value: "xxxx"
            - name: DB_NAME
              value: "xxxx"



```

