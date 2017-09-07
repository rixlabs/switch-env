"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class UseSetting {
    constructor(basePath, settingFile) {
        this.basePath = basePath;
        this.settingFile = settingFile;
        this.baseSettingFile = `${this.basePath}${this.settingFile}`;
    }
    changeSetting(environment) {
        var envSetting = `${this.baseSettingFile}.${environment}`;
        if (this.isValidEnvironment(environment)) {
            fs.renameSync(this.baseSettingFile, this.baseSettingFile + '.BCK');
            console.debug(`${this.settingFile} rename complete`);
            fs.createReadStream(envSetting).pipe(fs.createWriteStream(this.baseSettingFile));
        }
        else {
            console.log(`${envSetting} not found`);
        }
    }
    isValidEnvironment(environment) {
        var envSetting = `${this.baseSettingFile}.${environment}`;
        return fs.existsSync(envSetting);
    }
    dryRun(whatever) {
        var envSetting = `${this.baseSettingFile}.${whatever}`;
        console.log(this.baseSettingFile);
        console.log(envSetting);
        console.log(whatever);
    }
}
exports.UseSetting = UseSetting;
//# sourceMappingURL=UseSetting.js.map