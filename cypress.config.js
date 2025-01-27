const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    baseUrl: "https://test.rancher",
    viewportWidth: 1280,
    viewportHeight: 720,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: true,
      html: true,
      json: true,
    },
    env: {
      locale: "en",
    },
    specPattern: "./cypress/e2e/homepage-tests/*.cy.js",
    setupNodeEvents(on, config) {
      // Add any node event logic here if necessary
      return config;
    },
  },
});
