import { CoorditanesService } from '../../shared/services/coorditanes.service';
import { BaseComponent } from './../../core/BaseComponent';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends BaseComponent implements OnInit {
  coordinates: any;
  
  constructor(
    private coorditaneService: CoorditanesService,
  ) {
    super();
   }

  private setCoordinates() {
    this.coordinates = this.coorditaneService.getRandomMarkers(5);
  }

  ngOnInit() {
    this.setCoordinates();
  }

}
