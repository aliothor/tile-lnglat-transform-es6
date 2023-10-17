declare class TransformClassBaidu {
    levelMax: number;
    levelMin: number;
    projection: any;
    constructor(levelRange_max: number, LevelRange_min: number);
    _getRetain(level: number): number;
    getResolution(latitude: number, level: number): number;
    lnglatToPoint(longitude: number, latitude: number): {
        pointX: any;
        pointY: any;
    };
    pointToLnglat(pointX: number, pointY: number): {
        lng: any;
        lat: any;
    };
    _lngToTileX(longitude: number, level: number): number;
    _latToTileY(latitude: number, level: number): number;
    lnglatToTile(longitude: number, latitude: number, level: number): {
        tileX: number;
        tileY: number;
    };
    _lngToPixelX(longitude: number, level: number): number;
    _latToPixelY(latitude: number, level: number): number;
    lnglatToPixel(longitude: number, latitude: number, level: number): {
        pixelX: number;
        pixelY: number;
    };
    _pixelXToLng(pixelX: number, tileX: number, level: number): any;
    _pixelYToLat(pixelY: number, tileY: number, level: number): any;
    pixelToLnglat(pixelX: number, pixelY: number, tileX: number, tileY: number, level: number): {
        lng: any;
        lat: any;
    };
}
export default TransformClassBaidu;
