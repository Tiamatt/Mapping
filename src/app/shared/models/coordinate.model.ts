import { MarkerColorsEnum } from './../enums/marker-colors.enum';

export class CoordinateClass {    
    constructor(
        public longitude: number,
        public latitude: number,
        public markerColor: MarkerColorsEnum,
    ){}
}