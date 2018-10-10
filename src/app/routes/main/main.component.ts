import { LegendClass } from './../../shared/models/legend.model';
import { BaseComponent } from './../../core/BaseComponent';
import { Component, OnInit } from '@angular/core';
import { CoordinateClass } from './../../shared/models/coordinate.model';
import { CoorditanesService } from '../../shared/services/coorditanes.service';
import { MarkerColorsEnum } from '../../shared/enums/marker-colors.enum';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends BaseComponent implements OnInit {
  coordinates: CoordinateClass[];
  labels: LegendClass[];

  constructor(
    private coorditaneService: CoorditanesService,
  ){
    super();
  }

  private setLabels(countByColor: object) {
    let labels = [];
    for(let item in countByColor) {      
      let title = '';
      let color;
      // Typescript doesn't support reverse mapping for string enum 
      // (i.e. we can get value by its key, but we cannot get key by its value)  
      switch(item){
        case MarkerColorsEnum.Northeast:
          title = "Northeast";
          color = MarkerColorsEnum.Northeast;
          break;
        case MarkerColorsEnum.Northwest:
          title = "Northwest";
          color = MarkerColorsEnum.Northeast;
          break;
        case MarkerColorsEnum.Southeast:
          title = "Southeast";
          color = MarkerColorsEnum.Northeast;
          break;
        default:
          title = "Southwest";
          color = MarkerColorsEnum.Northeast;
          break;
      }
      labels.push(new LegendClass(title, color, countByColor[color]));
    }

    this.labels = labels;
  }

  private setCoordinates(quantity: number) {
    let coordinates = [];
    let countByColor = [];

    for(let i=0; i<quantity; i++){
      let longitude = this.coorditaneService.generateRandomWithinRange();
      let latitude = this.coorditaneService.generateRandomWithinRange();
      let markerColor = this.coorditaneService.getMarkerColor(longitude, latitude);
      // add to coordinates
      coordinates.push(new CoordinateClass(latitude, longitude, markerColor));
      // add to countByColor, example: [{green: 2}, {red: 8}]
      countByColor[markerColor] = (countByColor[markerColor]) ? countByColor[markerColor]+1 : 1;
    }
    this.coordinates = coordinates;
    this.setLabels(countByColor);
  }

  ngOnInit() {
    this.setCoordinates(10);
  }

}
