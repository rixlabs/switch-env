#!/usr/bin/env node
import * as program from "commander";

program
.version('0.1.0')
.command('use [env]', 'use the Environment specific settings')
.parse(process.argv);

