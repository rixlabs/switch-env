import {UseSetting} from './UseSetting'; 
import * as program from "commander";
import {homedir} from 'os';

function list(val: string) {
    return val.split(',');
}

program
.version('0.1.0')
.option('-s, --skip-tools <tool>', 'Skip specific tools',list)
.parse(process.argv);

var environment = program.args[0];

console.log("USE --> "+environment);

console.log('use skipparoo: %j', program.skipTools);

const homeDir = homedir();

var skipTools: Array<string> = new Array<string>();
if(program.skipTools != undefined){
    skipTools = program.skipTools;
}

interface Tool {
    tool: string,
    setting: UseSetting
}

var toolsSettings:Array<Tool> = new Array<Tool>();

toolsSettings.push({
    tool: 'mvn',
    setting: new UseSetting(`${homeDir}/.m2/`, 'settings.xml')
});

toolsSettings.push({
    tool: 'npm',
    setting: new UseSetting(`${homeDir}/`, '.npmrc')
});

for(var toolSetting of toolsSettings){
    if(skipTools.indexOf(toolSetting.tool) > -1){
        console.log(`${toolSetting.tool} skipped`);
    } else{
        toolSetting.setting.changeSetting(environment);
    }
}


// TODO: implement an array of settings and if one is not there ask if they want to skip it. changeSetting must return an error code if the env setting are not found


