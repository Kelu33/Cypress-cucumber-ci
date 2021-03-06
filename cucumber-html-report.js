const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "cypress/cucumber-json",  // ** Path of .json file **//
    reportPath: "cypress/reports", // ** Path of .html file **//
    metadata: {
        browser: {
            name: "chrome"
        },
        device: "Local test machine",
        platform: {
            name: "ubuntu"
        },
    },
});
