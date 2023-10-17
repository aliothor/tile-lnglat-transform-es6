## tile-lnglat-transform-es6
>提供了高德、百度、谷歌、腾讯和必应地图的经纬度坐标与瓦片坐标的相互转换

## 特点
* 实现了国内常用地图的经纬度坐标与瓦片坐标的相互转换
* 使用 UMD,ESM 模块打包，可以在 node 和 browser 中直接使用
* 支持TypeScript


## 注意
* 请使用支持ES6及以上的浏览器版本

## 转换原理
各地图的瓦片坐标系定义、转换原理和转换公式可以参见博文：[国内主要地图瓦片坐标系定义及计算原理](http://cntchen.github.io/2016/05/09/%E5%9B%BD%E5%86%85%E4%B8%BB%E8%A6%81%E5%9C%B0%E5%9B%BE%E7%93%A6%E7%89%87%E5%9D%90%E6%A0%87%E7%B3%BB%E5%AE%9A%E4%B9%89%E5%8F%8A%E8%AE%A1%E7%AE%97%E5%8E%9F%E7%90%86/)

## 使用方法
*以 node 中使用为例。*

* 安装
```js
$ npm i tile-lnglat-transform-es6
```

* 使用
```ts
// 引入模块
import TileLnglatTransform from 'tile-lnglat-transform-es6'
// 根据地图平台使用转换类
const TileLnglatTransformGaode = TileLnglatTransform.TileLnglatTransformGaode;
const TileLnglatTransformGoogle = TileLnglatTransform.TileLnglatTransformGoogle;
const TileLnglatTransformBaidu = TileLnglatTransform.TileLnglatTransformBaidu;
```

## 文档

### 模块
每个地图平台提供一个转换对象。如：
```ts
const TileLnglatTransformGaode = TileLnglatTransform.TileLnglatTransformGaode;
const TileLnglatTransformGoogle = TileLnglatTransform.TileLnglatTransformGoogle;
const TileLnglatTransformBaidu = TileLnglatTransform.TileLnglatTransformBaidu;
```

### 通用转换函数 

* 经纬度坐标转瓦片坐标 `lnglatToTile`

  @input: `(longitude, latitude, level)`

  @output:`{tileX, tileY}`

* 经纬度坐标转像素坐标 `lnglatToPixel`

  @input: `(longitude, latitude, level)`

  @output:`{pixelX, pixelY}`

* 瓦片的某一像素点坐标转经纬度坐标 `pixelToLnglat`

  @input: `(pixelX, pixelY, tileX, tileY, level)`

  @output:`{lng, lat}`

### 某平台独有函数

#### 高德地图/谷歌地图/腾讯地图
* 无


#### 百度地图

* 经纬度坐标转平面坐标`lnglatToPoint`

  @input: `{lng, lat}`

  @output:`(pointX, pointY)`

* 平面坐标转经纬度坐标`pointToLnglat`

  @input: `(pointX, pointY)`

  @output:`{lng, lat}`

#### Bing 地图
Bing 地图使用 [Slippy](http://wiki.openstreetmap.org/wiki/Slippy_map_tilenames) 方式，经纬度坐标和瓦片坐标转换与 Google 地图相同。
不同的是 Bing 地图使用 quadkey(四叉树编码)来标识瓦片。

* 瓦片坐标转四叉树编码`lnglatToQuadkey`

@input: `tileX, tileY, level`

@output: `quadkey`

* 四叉树编码转瓦片坐标`quadkeyToLnglat`

@input: `quadkey`

@output: `{tileX, tileY, level}`

### 注意点
#### 瓦片中像素坐标的取值
瓦片的大小为 256 * 256，计算得到的瓦片中像素坐标取值为：**0 - 255**。

## 测试代码
代码位于`/test/`中，提供了node和broswer的测试代码

* node中测试
```
$ node test/test_node.js
```

* broswer中测试
浏览器打开`/test/test_broswer.html`或`/test/test_require.html`

## 正确性验证
已经验证高德、百度、谷歌和腾讯地图各转换方法的正确性。

### 验证方法
* 为验证转换代码的正确性，在各地图中将同一经纬度坐标标注出来（使用地图平台提供的 SDK）。
* 计算瓦片坐标和像素坐标，在瓦片中根据像素坐标标注点，与通过经纬度标注的结果做对比。

### 测试数据
使用的瓦片等级为15级，测试经纬度为：
```
const lnglat = {lng: 113.3964152,  lat: 23.0581857};
```

### 经纬度标注结果
在[/test/test_result/][test-result]中，以`13.3964152_23.0581857_XX位置.png`命名的图片。如：
```
113.3964152_23.0581857_高德位置.png
```

### 转换后结果
在`/test/test_result/`文件夹中,以`XX地图_labeled`命名。如：
```
高德地图_labeled.png
```
并在各个瓦片的像素坐标处作红点标记。该红色标记与经纬度标记做比较，可以验证经纬度到瓦片坐标和像素坐标转换的正确性。

### 验证图例
| 类型 | 地图上经纬度标注截图 | 转换后瓦片截图(图中红点标记) |
| :-: | :-: | :-: |
| 高德 | <img src="https://github.com/aliothor/tile-lnglat-transform-es6/blob/main/test/test_result/113.3964152_23.0581857_%E9%AB%98%E5%BE%B7%E4%BD%8D%E7%BD%AE.png?raw=true" height="256"/> | <img src="https://github.com/aliothor/tile-lnglat-transform-es6/blob/main/test/test_result/gaode_map_labeled.png?raw=true" height="256"/> |
| 百度 | <img src="https://github.com/aliothor/tile-lnglat-transform-es6/blob/main/test/test_result/113.3964152_23.0581857_%E7%99%BE%E5%BA%A6%E4%BD%8D%E7%BD%AE.png?raw=true" height="256"/> | <img src="https://github.com/aliothor/tile-lnglat-transform-es6/blob/main/test/test_result/baidu_map_labeled.png?raw=true" height="256"/> |
| google | <img src="https://github.com/aliothor/tile-lnglat-transform-es6/blob/main/test/test_result/113.3964152_23.0581857_Google%E4%BD%8D%E7%BD%AE.png?raw=true" height="256"/> | <img src="https://github.com/aliothor/tile-lnglat-transform-es6/blob/main/test/test_result/google_map_labeled.png?raw=true" height="256"/> |
| 腾讯 | <img src="https://github.com/aliothor/tile-lnglat-transform-es6/blob/main/test/test_result/113.3964152_23.0581857_%E8%85%BE%E8%AE%AF%E4%BD%8D%E7%BD%AE.png?raw=true" height="256"/> | <img src="https://github.com/aliothor/tile-lnglat-transform-es6/blob/main/test/test_result/tencent_map_labeled.png?raw=true" height="256"/> |

### 各地图查询接口示例
* 高德地图
> http://wprd03.is.autonavi.com/appmaptile?style=7&x=26705&y=14226&z=15
* 百度地图
> http://online1.map.bdimg.com/onlinelabel/qt=tile&x=6163&y=1280&z=15 
* 谷歌地图
> http://mt2.google.cn/vt/lyrs=m@167000000&hl=zh-CN&gl=cn&x=26705&y=14226&z=15&s=Galil 
* 腾讯地图
> http://rt1.map.gtimg.com/tile?z=15&x=26705&y=18541&styleid=1&version=117
* 必应地图
> http://dynamic.t2.tiles.ditu.live.com/comp/ch/132122221030021?it=G,OS,L&mkt=en-us&cstl=w4c&ur=cn

## Todo
* ~~Bing Map 的转换~~ `done`
> https://msdn.microsoft.com/en-us/library/bb259689.aspx

* 其他地图的转换

## 为该项目贡献代码
该项目代码使用 ES6 编写，使用 webpack 打包为 UMD 模块。

欢迎改进该项目代码或针对新的瓦片坐标定义方式提供转换代码。

### 修改代码或添加模块流程

1. Fork 并 clone项目

2. 安装依赖
    ```
    $ npm install
    ```

3. 修改代码或添加模块
参考 `/src/`中的代码

4. 打包为UMD模块，打包结果路径为`/builds/index.js`
    ```
    $ npm run build
    ```

5. Pull request

## 参考资料

> [国内主要地图瓦片坐标系定义及计算原理](http://cntchen.github.io/2016/05/09/%E5%9B%BD%E5%86%85%E4%B8%BB%E8%A6%81%E5%9C%B0%E5%9B%BE%E7%93%A6%E7%89%87%E5%9D%90%E6%A0%87%E7%B3%BB%E5%AE%9A%E4%B9%89%E5%8F%8A%E8%AE%A1%E7%AE%97%E5%8E%9F%E7%90%86/)

> [Slippy](http://wiki.openstreetmap.org/wiki/Slippy_map_tilenames)

## 💖 致谢

> [tile-lnglat-transform](https://github.com/CntChen/tile-lnglat-transform)

