"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UseSetting_1 = require("./UseSetting");
const program = require("commander");
function list(val) {
    return val.split(',');
}
program
    .version('0.1.0')
    .option('-s, --skip-tools <tool>', 'Skip specific tools', list)
    .parse(process.argv);
var environment = program.args[0];
console.log("USE --> " + environment);
console.log('use skipparoo: %j', program.skipTools);
var skipTools = new Array();
if (program.skipTools != undefined) {
    skipTools = program.skipTools;
}
var toolsSettings = new Array();
toolsSettings.push({
    tool: 'mvn',
    setting: new UseSetting_1.UseSetting('C:\\Users\\rica\\.m2\\', 'settings.xml')
});
toolsSettings.push({
    tool: 'npm',
    setting: new UseSetting_1.UseSetting('C:\\Users\\rica\\', '.npmrc')
});
for (var toolSetting of toolsSettings) {
    if (skipTools.indexOf(toolSetting.tool) > -1) {
        console.log(`${toolSetting.tool} skipped`);
    }
    else {
        toolSetting.setting.changeSetting(environment);
    }
}
// TODO: implement an array of settings and if one is not there ask if they want to skip it. changeSetting must return an error code if the env setting are not found
//# sourceMappingURL=switch-env-use.js.map