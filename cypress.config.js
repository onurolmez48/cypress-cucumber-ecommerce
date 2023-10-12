const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor',cucumber());
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    testIsolation: false,
    specPattern: "**/*.feature"
  },
});