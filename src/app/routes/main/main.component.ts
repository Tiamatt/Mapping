import { BaseComponent } from './../../core/BaseComponent';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends BaseComponent implements OnInit {
  geoArr=[
    [-10, 20],
    [-10, -20],
    [10, 20],
    [10, -20]
  ];
  
  constructor() {
    super();
   }

  ngOnInit() {
  }

}
