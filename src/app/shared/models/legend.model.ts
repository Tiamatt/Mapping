import { MarkerColorsEnum } from '../enums/marker-colors.enum';

export class LegendClass {    
    constructor(
        public title: string,
        public color: MarkerColorsEnum,
        public count: number,
    ){}
}