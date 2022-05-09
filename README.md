# cypress-cucumber-ci
## Init Project
### - Generate an empty npm project
```
npm init -y
```
### - Cypress
#### Install
```
npm i --save-dev cypress
```
#### Open
```
npx cypress open
```
### - cypress-cucumber-preprocessor
#### Install
```
npm i --save-dev cypress-cucumber-preprocessor
```
#### Configuration
Add it to your plugins: ``cypress/plugins/index.js``
```
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
```
Add support for feature files to your Cypress configuration: ``cypress.json``
```
{
  "testFiles": "**/*.{feature,features}"
}
```
Add this section to your ``package.json``
```
"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true
}
```
### - multiple-cucumber-html-reporter
#### Install
```
npm i --save-dev multiple-cucumber-html-reporter
```
## Go to https://github.com/qaboxletstest/cypress-cucumber-demo to improve documentation
