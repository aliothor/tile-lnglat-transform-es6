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
