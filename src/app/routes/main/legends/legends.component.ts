import { Component, OnInit, Input } from '@angular/core';
import { LegendClass } from './../../../shared/models/legend.model';

@Component({
  selector: 'app-legends',
  templateUrl: './legends.component.html',
  styleUrls: ['./legends.component.css']
})
export class LegendsComponent implements OnInit {
  @Input() legends: LegendClass[];
  
  constructor() { }

  ngOnInit() {
  }

}
