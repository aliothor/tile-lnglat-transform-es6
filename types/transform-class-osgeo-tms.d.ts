declare class TransformClassTMS {
    levelMax: any;
    levelMin: any;
    constructor(levelRange_max: any, LevelRange_min: any);
    _getMapSize(level: any): number;
    getResolution(latitude: any, level: any): number;
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
    _pixelXTolng(pixelX: any, tileX: any, level: any): number;
    _pixelYToLat(pixelY: any, tileY: any, level: any): number;
    pixelToLnglat(pixelX: any, pixelY: any, tileX: any, tileY: any, level: any): {
        lng: number;
        lat: number;
    };
}
export default TransformClassTMS;
