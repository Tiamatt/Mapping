import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LegendClass } from './../../../shared/models/legend.model';

@Component({
  selector: 'app-legends',
  templateUrl: './legends.component.html',
  styleUrls: ['./legends.component.css']
})
export class LegendsComponent implements OnInit {
  @Input() legends: LegendClass[];
  @Output() checkedLegends = new EventEmitter<LegendClass[]>();

  onLegendChecked(legend: LegendClass, $event: any){
    legend.isChecked = $event.target.checked; // reference type
    this.checkedLegends.emit(this.legends);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
