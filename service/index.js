const crudBaseService = require("./crudBaseService");
const userService = require("./userService");
const employeeService = require("./employeeService");
const authService = require("./authService");
const settingService = require("./settingService");
const logService = require("./logService");

module.exports = {
  crudBaseService,
  userService,
  employeeService,
  logService,
  settingService,
  authService
};
