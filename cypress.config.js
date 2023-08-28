const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
    "baseUrl": "https://demohms.candelatech.in/",
    "chromeWebSecurity": false,
    "userName": "Superadmin@candelatech.in",
    "password": "secret123"
  },
});
