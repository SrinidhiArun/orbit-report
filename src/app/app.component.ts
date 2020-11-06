import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];
  displayList: Satellite[];
  constructor() {
    this.sourceList = [];
    this.displayList = [];
   let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';

   window.fetch(satellitesUrl).then(function(response) {
      response.json().then(function(data) {

         let fetchedSatellites = data.satellites;
         // TODO: loop over satellites
         for(let i=0; i<fetchedSatellites.length; i++){
          this.sourceList.push(new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational));
         }
         // TODO: create a Satellite object using new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
         // TODO: add the new Satellite object to sourceList using: this.sourceList.push(satellite);
         this.displayList = this.sourceList.slice(0);
      }.bind(this));
   }.bind(this));

 }
 search(searchTerm: string): void {
  let matchingSatellites: Satellite[] = [];  
  searchTerm = searchTerm.toLowerCase();
  matchingSatellites= this.findMatchingSatellites(searchTerm, "name");
  if(matchingSatellites.length === 0){
    matchingSatellites= this.findMatchingSatellites(searchTerm, "type");
  }
  if(matchingSatellites.length === 0){
    matchingSatellites= this.findMatchingSatellites(searchTerm, "orbitType");
  }  
  // assign this.displayList to be the array of matching satellites
  // this will cause Angular to re-make the table, but now only containing matches
  this.displayList = matchingSatellites;  
}
 findMatchingSatellites(searchTerm: string, searchType: string): Satellite[]{
  let matchingSatellites: Satellite[] = [];  
  for(let i=0; i < this.sourceList.length; i++) {
    let value = this.sourceList[i][searchType].toLowerCase();
    if (value.indexOf(searchTerm) >= 0) {
       matchingSatellites.push(this.sourceList[i]);
    }
 }
 return matchingSatellites;
 }
}
