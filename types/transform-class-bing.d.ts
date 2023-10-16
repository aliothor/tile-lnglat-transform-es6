import TransformClassSlippy from './transform-class-slippy';
declare class TransformClassBing extends TransformClassSlippy {
    constructor(levelRange_max: any, LevelRange_min: any);
    lnglatToQuadkey(tileX: any, tileY: any, level: any): string;
    quadkeyToLnglat(quadkey: any): {
        tileX: number;
        tileY: number;
        level: any;
    };
}
export default TransformClassBing;
