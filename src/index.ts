/**
 * Created by CntChen 2016.04.30
 * 提供了百度地图、高德地图、谷歌地图经纬度坐标与瓦片坐标的相互转换
 */

import TransformClassSlippy from './transform-class-slippy'
import TransformClassBaidu from './transform-class-baidu'
import TransformClassTMS from './transform-class-osgeo-tms'
import TransformClassBing from './transform-class-bing'

const MapTypes = {
  Gaode: 'Gaode',
  Google: 'Google',
  Baidu: 'Baidu',
  OSM: 'OSM',
  Tencent: 'Tencent',
  Bing: 'Bing',
}

const MapLevelRange = {
  [MapTypes.Gaode]: {
    min: 1,
    max: 19,
  },
  [MapTypes.Google]: {
    min: 0,
    max: 21,
  },
  [MapTypes.OSM]: {
    min: 0,
    max: 19,
  },
  [MapTypes.Baidu]: {
    min: 3,
    max: 18,
  },
  [MapTypes.Tencent]: {
    min: 3,
    max: 19,
  },
  [MapTypes.Bing]: {
    min: 3,
    max: 19,
  },
}

const TileLnglatTransformGaode = new TransformClassSlippy(
  MapLevelRange[MapTypes.Gaode].max,
  MapLevelRange[MapTypes.Gaode].min
)
const TileLnglatTransformGoogle = new TransformClassSlippy(
  MapLevelRange[MapTypes.Google].max,
  MapLevelRange[MapTypes.Google].min
)
const TileLnglatTransformOSM = new TransformClassSlippy(
  MapLevelRange[MapTypes.OSM].max,
  MapLevelRange[MapTypes.OSM].min
)

const TileLnglatTransformBaidu = new TransformClassBaidu(
  MapLevelRange[MapTypes.Baidu].max,
  MapLevelRange[MapTypes.Baidu].min
)

const TileLnglatTransformTencent = new TransformClassTMS(
  MapLevelRange[MapTypes.Tencent].max,
  MapLevelRange[MapTypes.Tencent].min
)

const TileLnglatTransformBing = new TransformClassBing(
  MapLevelRange[MapTypes.Bing].max,
  MapLevelRange[MapTypes.Bing].min
)

const TileLnglatTransform = {
  TileLnglatTransformGaode,
  TileLnglatTransformGoogle,
  TileLnglatTransformOSM,
  TileLnglatTransformBaidu,
  TileLnglatTransformTencent,
  TileLnglatTransformBing,
}

export {
  TileLnglatTransformGoogle,
  TileLnglatTransformOSM,
  TileLnglatTransformGaode,
  TileLnglatTransformBaidu,
  TileLnglatTransformTencent,
  TileLnglatTransformBing,
}

export default TileLnglatTransform
