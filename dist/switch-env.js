#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const program = require("commander");
program
    .version('0.1.0')
    .command('use [env]', 'use the Environment specific settings')
    .parse(process.argv);
//# sourceMappingURL=switch-env.js.map