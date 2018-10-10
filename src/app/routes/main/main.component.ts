
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BaseComponent } from './../../core/BaseComponent';
import { LegendClass } from './../../shared/models/legend.model';
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
  legends: LegendClass[];
  mainFormGroup: FormGroup;
  private defaultAmountOfMarkers: number = 200;

  constructor(
    private coorditaneService: CoorditanesService,
  ){
    super();
  }

  private getRandomLongitude() {
    return this.coorditaneService.generateRandomWithinRange(-180, 180);
  }

  private getRandomLatitude() {
    return this.coorditaneService.generateRandomWithinRange();
  }

  private setFormGroup() {
    this.mainFormGroup = new FormGroup({
      'amountOfMarkers': new FormControl(this.defaultAmountOfMarkers),
    });
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
          color = MarkerColorsEnum.Northwest;
          break;
        case MarkerColorsEnum.Southeast:
          title = "Southeast";
          color = MarkerColorsEnum.Southeast;
          break;
        default:
          title = "Southwest";
          color = MarkerColorsEnum.Southwest;
          break;
      }
      labels.push(new LegendClass(title, color, countByColor[color]));
    }

    this.legends = labels;
  }

  private setCoordinates(quantity: number) {
    let coordinates = [];
    let countByColor = [];

    for(let i=0; i<quantity; i++){
      let longitude = this.getRandomLongitude();
      let latitude = this.getRandomLatitude();
      let markerColor = this.coorditaneService.getMarkerColor(longitude, latitude);
      // add to coordinates
      coordinates.push(new CoordinateClass(longitude, latitude, markerColor));
      // add to countByColor, example: [{green: 2}, {red: 8}]
      countByColor[markerColor] = (countByColor[markerColor]) ? countByColor[markerColor]+1 : 1;
    }
    this.coordinates = coordinates;
    this.setLabels(countByColor);
    console.log(coordinates);
  }

  onSubmit() {
    let amountOfMarkers = this.mainFormGroup.value['amountOfMarkers'];
    if (Number.isInteger(amountOfMarkers) && amountOfMarkers>0){
      this.setCoordinates(amountOfMarkers);
    }
  }

  ngOnInit() {
    this.setFormGroup();
    this.setCoordinates(this.defaultAmountOfMarkers);
  }

}
