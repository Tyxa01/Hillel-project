import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    baseUrl: "http://localhost:4200/pages",
    specPattern: "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}",
  },
  video: false,
});
