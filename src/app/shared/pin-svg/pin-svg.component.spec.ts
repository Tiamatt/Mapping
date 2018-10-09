import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinSvgComponent } from './pin-svg.component';

describe('PinSvgComponent', () => {
  let component: PinSvgComponent;
  let fixture: ComponentFixture<PinSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
