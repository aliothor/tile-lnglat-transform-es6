import TransformClassSlippy from './transform-class-slippy';
declare class TransformClassBing extends TransformClassSlippy {
    constructor(levelRange_max: number, LevelRange_min: number);
    lnglatToQuadkey(tileX: number, tileY: number, level: number): string;
    quadkeyToLnglat(quadkey: string): {
        tileX: number;
        tileY: number;
        level: number;
    };
}
export default TransformClassBing;
