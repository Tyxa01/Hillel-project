import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "https://qauto.forstudy.space/",
    specPattern: "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}",
  },
  video: false,
});
