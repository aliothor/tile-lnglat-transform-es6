/*
 * 坐标相关参考文章：
 * http://www.cnblogs.com/jz1108/archive/2011/07/02/2095376.html
 * http://www.cnblogs.com/janehlp/archive/2012/08/27/2658106.html
 * 适用地图：百度
 */

import BMap from './node-baidusdk'

class TransformClassBaidu {
  levelMax
  levelMin
  projection
  constructor(levelRange_max: number, LevelRange_min: number) {
    this.levelMax = levelRange_max
    this.levelMin = LevelRange_min

    this.projection = new BMap.MercatorProjection()
  }

  _getRetain(level: number) {
    return 2 ** (level - 18)
  }

  /*
   * 分辨率，表示水平方向上一个像素点代表的真实距离(m)
   * 百度地图18级时的平面坐标就是地图距离原点的距离(m)
   * 使用{lng:180, lat:0}时候的pointX是否等于地球赤道长一半来验证
   */
  getResolution(latitude: number, level: number) {
    return 2 ** (18 - level) * Math.cos(latitude)
  }

  /*
   * 从经纬度到百度平面坐标
   */
  lnglatToPoint(longitude: number, latitude: number) {
    const lnglat = new BMap.Point(longitude, latitude)
    const point = this.projection.lngLatToPoint(lnglat)

    // 提取对象的字段并返回
    return {
      pointX: point.x,
      pointY: point.y,
    }
  }

  /*
   * 从百度平面坐标到经纬度
   */
  pointToLnglat(pointX: number, pointY: number) {
    const point = new BMap.Pixel(pointX, pointY)
    const lnglat = this.projection.pointToLngLat(point)

    // 不直接返回lnglat对象，因为该对象在百SDK中还有其他属性和方法
    // 提取对象的字段后，与其他地图平台统一Lnglat的格式
    return {
      lng: lnglat.lng,
      lat: lnglat.lat,
    }
  }

  _lngToTileX(longitude: number, level: number) {
    const point = this.lnglatToPoint(longitude, 0)
    const tileX = Math.floor((point.pointX * this._getRetain(level)) / 256)

    return tileX
  }

  _latToTileY(latitude: number, level: number) {
    const point = this.lnglatToPoint(0, latitude)
    const tileY = Math.floor((point.pointY * this._getRetain(level)) / 256)

    return tileY
  }

  /*
   * 从经纬度获取某一级别瓦片编号
   */
  lnglatToTile(longitude: number, latitude: number, level: number) {
    const tileX = this._lngToTileX(longitude, level)
    const tileY = this._latToTileY(latitude, level)

    return {
      tileX,
      tileY,
    }
  }

  _lngToPixelX(longitude: number, level: number) {
    const tileX = this._lngToTileX(longitude, level)
    const point = this.lnglatToPoint(longitude, 0)
    const pixelX = Math.floor(point.pointX * this._getRetain(level) - tileX * 256)

    return pixelX
  }

  _latToPixelY(latitude: number, level: number) {
    const tileY = this._latToTileY(latitude, level)
    const point = this.lnglatToPoint(0, latitude)
    const pixelY = Math.floor(point.pointY * this._getRetain(level) - tileY * 256)

    return pixelY
  }

  /*
   * 从经纬度到瓦片的像素坐标
   */
  lnglatToPixel(longitude: number, latitude: number, level: number) {
    const pixelX = this._lngToPixelX(longitude, level)
    const pixelY = this._latToPixelY(latitude, level)

    return {
      pixelX,
      pixelY,
    }
  }

  _pixelXToLng(pixelX: number, tileX: number, level: number) {
    const pointX = (tileX * 256 + pixelX) / this._getRetain(level)
    const lnglat = this.pointToLnglat(pointX, 0)

    return lnglat.lng
  }

  _pixelYToLat(pixelY: number, tileY: number, level: number) {
    const pointY = (tileY * 256 + pixelY) / this._getRetain(level)
    const lnglat = this.pointToLnglat(0, pointY)

    return lnglat.lat
  }

  /*
   * 从某一瓦片的某一像素点到经纬度
   */
  pixelToLnglat(pixelX: number, pixelY: number, tileX: number, tileY: number, level: number) {
    const pointX = (tileX * 256 + pixelX) / this._getRetain(level)
    const pointY = (tileY * 256 + pixelY) / this._getRetain(level)
    const lnglat = this.pointToLnglat(pointX, pointY)

    return lnglat
  }
}

export default TransformClassBaidu
