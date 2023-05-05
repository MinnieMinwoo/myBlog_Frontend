import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    experimentalStudio: true,
    defaultCommandTimeout: 20000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
