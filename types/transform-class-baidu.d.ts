declare class TransformClassBaidu {
    levelMax: any;
    levelMin: any;
    projection: any;
    constructor(levelRange_max: any, LevelRange_min: any);
    _getRetain(level: any): number;
    getResolution(latitude: any, level: any): number;
    lnglatToPoint(longitude: any, latitude: any): {
        pointX: any;
        pointY: any;
    };
    pointToLnglat(pointX: any, pointY: any): {
        lng: any;
        lat: any;
    };
    _lngToTileX(longitude: any, level: any): number;
    _latToTileY(latitude: any, level: any): number;
    lnglatToTile(longitude: any, latitude: any, level: any): {
        tileX: number;
        tileY: number;
    };
    _lngToPixelX(longitude: any, level: any): number;
    _latToPixelY(latitude: any, level: any): number;
    lnglatToPixel(longitude: any, latitude: any, level: any): {
        pixelX: number;
        pixelY: number;
    };
    _pixelXToLng(pixelX: any, tileX: any, level: any): any;
    _pixelYToLat(pixelY: any, tileY: any, level: any): any;
    pixelToLnglat(pixelX: any, pixelY: any, tileX: any, tileY: any, level: any): {
        lng: any;
        lat: any;
    };
}
export default TransformClassBaidu;
