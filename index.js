const fs = require("fs");
const ROOT_PATH = fs.realpathSync(".");
require("dotenv").config({
  path: ROOT_PATH + "/.env"
});
require("dotenv").config();
const passel = require("passeljs");

// Import top level components
const Lights = require("./app/components/Lights");

// Start application
passel.setGlobalDefaults({});

passel.use(Lights);

passel.mountComponents();

console.log(new Date() + ": application started");
