"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const program = require("commander");
const os_1 = require("os");
program
    .version('0.1.0')
    .parse(process.argv);
var environment = program.args[0];
console.log('ciao -> ' + os_1.homedir());
//# sourceMappingURL=switch-env-play.js.map