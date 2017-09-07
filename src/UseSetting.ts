import * as fs from 'fs';

export class UseSetting{
   private basePath: string;
   private settingFile: string;

   private baseSettingFile: string;

   constructor(basePath: string, settingFile: string){
       this.basePath = basePath;
       this.settingFile = settingFile;
       this.baseSettingFile = `${this.basePath}${this.settingFile}`;
   }

   public changeSetting(environment: string): void {
       
       var envSetting = `${this.baseSettingFile}.${environment}`;

       if(this.isValidEnvironment(environment)){
        fs.renameSync(this.baseSettingFile, this.baseSettingFile+'.BCK');
        console.debug(`${this.settingFile} rename complete`);
 
        fs.createReadStream(envSetting).pipe(fs.createWriteStream(this.baseSettingFile));
       } else{
           console.log(`${envSetting} not found`);
       }
   }

   private isValidEnvironment(environment: string): boolean{
       var envSetting = `${this.baseSettingFile}.${environment}`;
       return fs.existsSync(envSetting);
   }

   public dryRun(whatever: string): void {
       var envSetting = `${this.baseSettingFile}.${whatever}`;
       console.log(this.baseSettingFile);
       console.log(envSetting);
       console.log(whatever);
   }
}