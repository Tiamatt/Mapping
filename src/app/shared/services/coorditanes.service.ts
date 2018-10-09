import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoorditanesService {

  constructor() { }

  getRandomMarkers(quantity: number){
    let arr = [];
    for(let i=0; i<quantity; i++){
      let latitude = this.generateRandomWithinRange();
      let longitude = this.generateRandomWithinRange(); 
      arr.push([latitude, longitude]);
    }
    return arr;
  }

  generateRandomWithinRange( from:number = -90, to:number = 90, fixed: number = 3) : number {
    let test = (Math.random() * (to-from) + from);
    return +test.toFixed(fixed);
  }
}
