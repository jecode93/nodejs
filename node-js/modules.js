const { people, ages } = require('./people');
const os = require("os"); // Built in core module to find info on the operating system.


console.log(people);
console.log(ages);
console.log(os.platform(), os.homedir());