/**
 * Created by CntChen 2016.04.30
 * 提供了百度地图、高德地图、谷歌地图经纬度坐标与瓦片坐标的相互转换
 */
import TransformClassSlippy from './transform-class-slippy';
import TransformClassBaidu from './transform-class-baidu';
import TransformClassTMS from './transform-class-osgeo-tms';
import TransformClassBing from './transform-class-bing';
declare const TileLnglatTransform: {
    TileLnglatTransformGaode: TransformClassSlippy;
    TileLnglatTransformGoogle: TransformClassSlippy;
    TileLnglatTransformOSM: TransformClassSlippy;
    TileLnglatTransformBaidu: TransformClassBaidu;
    TileLnglatTransformTencent: TransformClassTMS;
    TileLnglatTransformBing: TransformClassBing;
};
export default TileLnglatTransform;
