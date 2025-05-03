const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "u6ompt",

  env: {
    apiUrl: "http://localhost:8080/api-docs/",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
