import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pin-svg',
  templateUrl: './pin-svg.component.html',
  styleUrls: ['./pin-svg.component.css']
})
export class PinSvgComponent implements OnInit {
  @Input() iconColor: string = 'red'; // default
  @Input() iconSize: number = 20; // default
  constructor() { }

  ngOnInit() {
  }

}
