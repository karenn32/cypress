const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "45czi2",
  e2e: {
    baseUrl: 'https://demo.realworld.io',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
