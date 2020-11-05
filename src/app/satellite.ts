export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
        this.name = name;
        this.orbitType = orbitType;
        this.operational = operational;
        this.type = type;
        this.launchDate = launchDate;
    }
    shouldShowWarning():boolean{
      if(this.type==="Space Debris"){
          return true;
      }
      return false;
    }
}
