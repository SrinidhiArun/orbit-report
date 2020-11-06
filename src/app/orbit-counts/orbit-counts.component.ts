import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  total: number = 0;
  spaceDebris: number = 0;
  communication: number = 0;
  probe: number= 0;
  positioning: number= 0;
  spaceStation: number= 0;
  telescope: number= 0;
  constructor() { 
    console.log("im");
    

  }

  ngOnInit() {
  }
  
  findingOrbitCount(): number{
    console.log("inside 1");
    this.total = this.satellites.length;
    this.spaceDebris = this.countBasedOnType("Space Debris");
    this.communication = this.countBasedOnType("Communication");
    this.probe = this.countBasedOnType("Probe");
    this.positioning = this.countBasedOnType("Positioning");
    this.spaceStation = this.countBasedOnType("Space Station");
    this.telescope = this.countBasedOnType("Telescope");
    return this.total;
  }

 countBasedOnType(type: string): number{
  console.log("inside", type);
  let count = 0; 
  for(let i=0; i<this.total; i++){
    if(this.satellites[i].type === type){
     count++;
    }
  }
  return count;
 }
}
