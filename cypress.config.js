// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     watchForFileChanges: false,
//     defaultCommandTimeout: 5000,
//     baseUrl: 'https://www.bstackdemo.com',
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//       const { MochawesomeReporter } = require('cypress-mochawesome-reporter/plugin');
//       MochawesomeReporter(on);
//     },
//   },
//   reporter: 'mochawesome',
//   reporterOptions: {
//     reportDir: 'cypress/reports',
//     reportFilename: 'report',
//     overwrite: false,
//     html: true,
//     json: false
//   }
// });
const { defineConfig } = require('cypress');
const MochawesomeReporter = require('cypress-mochawesome-reporter/plugin');

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 5000,
    baseUrl: 'https://www.bstackdemo.com',
    setupNodeEvents(on, config) {
      MochawesomeReporter(on);
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      reportFilename: 'report',
      overwrite: false,
      html: true,
      json: false
    }
  }
});

