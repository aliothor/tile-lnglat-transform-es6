declare class TransformClassNormal {
    levelMax: number;
    levelMin: number;
    constructor(levelRange_max: number, LevelRange_min: number);
    _getMapSize(level: number): number;
    getResolution(latitude: number, level: number): number;
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
    _pixelXTolng(pixelX: number, tileX: number, level: number): number;
    _pixelYToLat(pixelY: number, tileY: number, level: number): number;
    pixelToLnglat(pixelX: number, pixelY: number, tileX: number, tileY: number, level: number): {
        lng: number;
        lat: number;
    };
}
export default TransformClassNormal;
