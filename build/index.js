var L = Object.defineProperty;
var w = (e, t, i) => t in e ? L(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var p = (e, t, i) => (w(e, typeof t != "symbol" ? t + "" : t, i), i);
function S(e) {
  return (Math.exp(e) - Math.exp(-e)) / 2;
}
class c {
  constructor(t, i) {
    p(this, "levelMax");
    p(this, "levelMin");
    this.levelMax = t, this.levelMin = i;
  }
  /*
   * 某一瓦片等级下瓦片地图X轴(Y轴)上的瓦片数目
   */
  _getMapSize(t) {
    return Math.pow(2, t);
  }
  /*
   * 分辨率，表示水平方向上一个像素点代表的真实距离(m)
   */
  getResolution(t, i) {
    return 12756274 * Math.PI * Math.cos(t) / 256 / this._getMapSize(i);
  }
  _lngToTileX(t, i) {
    let n = (t + 180) / 360, l = Math.floor(n * this._getMapSize(i));
    return l = Math.min(l, Math.pow(2, i) - 1), l;
  }
  _latToTileY(t, i) {
    let n = t * Math.PI / 180, l = (1 - Math.log(Math.tan(n) + 1 / Math.cos(n)) / Math.PI) / 2;
    return Math.floor(l * this._getMapSize(i));
  }
  /*
   * 从经纬度获取某一级别瓦片坐标编号
   */
  lnglatToTile(t, i, n) {
    let l = this._lngToTileX(t, n), o = this._latToTileY(i, n);
    return {
      tileX: l,
      tileY: o
    };
  }
  _lngToPixelX(t, i) {
    let n = (t + 180) / 360;
    return Math.floor(n * this._getMapSize(i) * 256 % 256);
  }
  _latToPixelY(t, i) {
    let n = Math.sin(t * Math.PI / 180), l = 0.5 - Math.log((1 + n) / (1 - n)) / (4 * Math.PI);
    return Math.floor(l * this._getMapSize(i) * 256 % 256);
  }
  /*
   * 从经纬度获取点在某一级别瓦片中的像素坐标
   */
  lnglatToPixel(t, i, n) {
    let l = this._lngToPixelX(t, n), o = this._latToPixelY(i, n);
    return {
      pixelX: l,
      pixelY: o
    };
  }
  _pixelXTolng(t, i, n) {
    let l = t / 256;
    return (i + l) / this._getMapSize(n) * 360 - 180;
  }
  _pixelYToLat(t, i, n) {
    let l = t / 256;
    return Math.atan(S(Math.PI * (1 - 2 * (i + l) / this._getMapSize(n)))) * 180 / Math.PI;
  }
  /*
   * 从某一瓦片的某一像素点到经纬度
   */
  pixelToLnglat(t, i, n, l, o) {
    let a = this._pixelXTolng(t, n, o), T = this._pixelYToLat(i, l, o);
    return {
      lng: a,
      lat: T
    };
  }
}
function y(e, t) {
  for (var i in t)
    t.hasOwnProperty(i) && (e[i] = t[i]);
  return e;
}
function I(e, t) {
  for (var i in t)
    e[i] = t[i];
}
function X(e) {
  return typeof e == "string";
}
var Y = void 0, M = null;
function h(e, t) {
  isNaN(e) && (e = Ib(e), e = isNaN(e) ? 0 : e), X(e) && (e = parseFloat(e)), isNaN(t) && (t = Ib(t), t = isNaN(t) ? 0 : t), X(t) && (t = parseFloat(t)), this.lng = e, this.lat = t;
}
h.TL = function(e) {
  return e && 180 >= e.lng && -180 <= e.lng && 74 >= e.lat && -74 <= e.lat;
};
h.prototype.lb = function(e) {
  return e && this.lat == e.lat && this.lng == e.lng;
};
function x(e, t) {
  this.x = e || 0, this.y = t || 0, this.x = this.x, this.y = this.y;
}
x.prototype.lb = function(e) {
  return e && e.x == this.x && e.y == this.y;
};
function P() {
}
P.prototype.nh = function() {
  aa("lngLatToPoint方法未实现");
};
P.prototype.wi = function() {
  aa("pointToLngLat方法未实现");
};
function u() {
}
u.prototype = new P();
y(u, {
  $O: 637099681e-2,
  lG: [1289059486e-2, 836237787e-2, 5591021, 348198983e-2, 167804312e-2, 0],
  Au: [75, 60, 45, 30, 15, 0],
  fP: [
    [
      1410526172116255e-23,
      898305509648872e-20,
      -1.9939833816331,
      200.9824383106796,
      -187.2403703815547,
      91.6087516669843,
      -23.38765649603339,
      2.57121317296198,
      -0.03801003308653,
      173379812e-1
    ],
    [
      -7435856389565537e-24,
      8983055097726239e-21,
      -0.78625201886289,
      96.32687599759846,
      -1.85204757529826,
      -59.36935905485877,
      47.40033549296737,
      -16.50741931063887,
      2.28786674699375,
      1026014486e-2
    ],
    [
      -3030883460898826e-23,
      898305509983578e-20,
      0.30071316287616,
      59.74293618442277,
      7.357984074871,
      -25.38371002664745,
      13.45380521110908,
      -3.29883767235584,
      0.32710905363475,
      685681737e-2
    ],
    [
      -1981981304930552e-23,
      8983055099779535e-21,
      0.03278182852591,
      40.31678527705744,
      0.65659298677277,
      -4.44255534477492,
      0.85341911805263,
      0.12923347998204,
      -0.04625736007561,
      448277706e-2
    ],
    [
      309191371068437e-23,
      8983055096812155e-21,
      6995724062e-14,
      23.10934304144901,
      -23663490511e-14,
      -0.6321817810242,
      -0.00663494467273,
      0.03430082397953,
      -0.00466043876332,
      25551644e-1
    ],
    [
      2890871144776878e-24,
      8983055095805407e-21,
      -3068298e-14,
      7.47137025468032,
      -353937994e-14,
      -0.02145144861037,
      -1234426596e-14,
      10322952773e-14,
      -323890364e-14,
      826088.5
    ]
  ],
  iG: [
    [
      -0.0015702102444,
      111320.7020616939,
      1704480524535203,
      -10338987376042340,
      26112667856603880,
      -35149669176653700,
      26595700718403920,
      -10725012454188240,
      1800819912950474,
      82.5
    ],
    [
      8277824516172526e-19,
      111320.7020463578,
      6477955746671607e-7,
      -4082003173641316e-6,
      1077490566351142e-5,
      -1517187553151559e-5,
      1205306533862167e-5,
      -5124939663577472e-6,
      9133119359512032e-7,
      67.5
    ],
    [
      0.00337398766765,
      111320.7020202162,
      4481351045890365e-9,
      -2339375119931662e-8,
      7968221547186455e-8,
      -1159649932797253e-7,
      9723671115602145e-8,
      -4366194633752821e-8,
      8477230501135234e-9,
      52.5
    ],
    [
      0.00220636496208,
      111320.7020209128,
      51751.86112841131,
      3796837749470245e-9,
      992013.7397791013,
      -122195221711287e-8,
      1340652697009075e-9,
      -620943.6990984312,
      144416.9293806241,
      37.5
    ],
    [
      -3441963504368392e-19,
      111320.7020576856,
      278.2353980772752,
      2485758690035394e-9,
      6070.750963243378,
      54821.18345352118,
      9540.606633304236,
      -2710.55326746645,
      1405.483844121726,
      22.5
    ],
    [
      -3218135878613132e-19,
      111320.7020701615,
      0.00369383431289,
      823725.6402795718,
      0.46104986909093,
      2351.343141331292,
      1.58060784298199,
      8.77738589078284,
      0.37238884252424,
      7.45
    ]
  ],
  Z1: function(l, t) {
    if (!l || !t)
      return 0;
    var i, n, l = this.Fb(l);
    return l ? (i = this.Tk(l.lng), n = this.Tk(l.lat), t = this.Fb(t), t ? this.Pe(i, this.Tk(t.lng), n, this.Tk(t.lat)) : 0) : 0;
  },
  Vo: function(e, t) {
    return !e || !t ? 0 : (e.lng = this.JD(e.lng, -180, 180), e.lat = this.ND(e.lat, -74, 74), t.lng = this.JD(t.lng, -180, 180), t.lat = this.ND(t.lat, -74, 74), this.Pe(this.Tk(e.lng), this.Tk(t.lng), this.Tk(e.lat), this.Tk(t.lat)));
  },
  Fb: function(e) {
    if (e === M || e === Y)
      return new h(0, 0);
    var t, i;
    t = new h(Math.abs(e.lng), Math.abs(e.lat));
    for (var n = 0; n < this.lG.length; n++)
      if (t.lat >= this.lG[n]) {
        i = this.fP[n];
        break;
      }
    return e = this.gK(e, i), e = new h(e.lng.toFixed(6), e.lat.toFixed(6));
  },
  Eb: function(e) {
    if (e === M || e === Y || 180 < e.lng || -180 > e.lng || 90 < e.lat || -90 > e.lat)
      return new h(0, 0);
    var t, i;
    e.lng = this.JD(e.lng, -180, 180), e.lat = this.ND(e.lat, -74, 74), t = new h(e.lng, e.lat);
    for (var n = 0; n < this.Au.length; n++)
      if (t.lat >= this.Au[n]) {
        i = this.iG[n];
        break;
      }
    if (!i) {
      for (n = 0; n < this.Au.length; n++)
        if (t.lat <= -this.Au[n]) {
          i = this.iG[n];
          break;
        }
    }
    return e = this.gK(e, i), e = new h(e.lng.toFixed(2), e.lat.toFixed(2));
  },
  gK: function(e, t) {
    if (e && t) {
      var i = t[0] + t[1] * Math.abs(e.lng), n = Math.abs(e.lat) / t[9], n = t[2] + t[3] * n + t[4] * n * n + t[5] * n * n * n + t[6] * n * n * n * n + t[7] * n * n * n * n * n + t[8] * n * n * n * n * n * n, i = i * (0 > e.lng ? -1 : 1), n = n * (0 > e.lat ? -1 : 1);
      return new h(i, n);
    }
  },
  Pe: function(e, t, i, n) {
    return this.$O * Math.acos(Math.sin(i) * Math.sin(n) + Math.cos(i) * Math.cos(n) * Math.cos(t - e));
  },
  Tk: function(e) {
    return Math.PI * e / 180;
  },
  Z3: function(e) {
    return 180 * e / Math.PI;
  },
  ND: function(e, t, i) {
    return t != M && (e = Math.max(e, t)), i != M && (e = Math.min(e, i)), e;
  },
  JD: function(e, t, i) {
    for (; e > i; )
      e -= i - t;
    for (; e < t; )
      e += i - t;
    return e;
  }
});
y(u.prototype, {
  Jm: function(e) {
    return u.Eb(e);
  },
  nh: function(e) {
    return e = u.Eb(e), new x(e.lng, e.lat);
  },
  qh: function(e) {
    return u.Fb(e);
  },
  wi: function(e) {
    return e = new h(e.x, e.y), u.Fb(e);
  },
  fc: function(e, t, i, n, l) {
    if (e)
      return e = this.Jm(e, l), t = this.Lc(t), new x(Math.round((e.lng - i.lng) / t + n.width / 2), Math.round((i.lat - e.lat) / t + n.height / 2));
  },
  zb: function(e, t, i, n, l) {
    if (e)
      return t = this.Lc(t), this.qh(new h(i.lng + t * (e.x - n.width / 2), i.lat - t * (e.y - n.height / 2)), l);
  },
  Lc: function(e) {
    return Math.pow(2, 18 - e);
  }
});
var f = u.prototype;
I(f, {
  lngLatToPoint: f.nh,
  pointToLngLat: f.wi
});
let _ = {
  Point: h,
  Pixel: x,
  MercatorProjection: u
};
class k {
  constructor(t, i) {
    p(this, "levelMax");
    p(this, "levelMin");
    p(this, "projection");
    this.levelMax = t, this.levelMin = i, this.projection = new _.MercatorProjection();
  }
  _getRetain(t) {
    return Math.pow(2, t - 18);
  }
  /*
   * 分辨率，表示水平方向上一个像素点代表的真实距离(m)
   * 百度地图18级时的平面坐标就是地图距离原点的距离(m)
   * 使用{lng:180, lat:0}时候的pointX是否等于地球赤道长一半来验证
   */
  getResolution(t, i) {
    return Math.pow(2, 18 - i) * Math.cos(t);
  }
  /*
   * 从经纬度到百度平面坐标
   */
  lnglatToPoint(t, i) {
    let n = new _.Point(t, i), l = this.projection.lngLatToPoint(n);
    return {
      pointX: l.x,
      pointY: l.y
    };
  }
  /*
   * 从百度平面坐标到经纬度
   */
  pointToLnglat(t, i) {
    let n = new _.Pixel(t, i), l = this.projection.pointToLngLat(n);
    return {
      lng: l.lng,
      lat: l.lat
    };
  }
  _lngToTileX(t, i) {
    let n = this.lnglatToPoint(t, 0);
    return Math.floor(n.pointX * this._getRetain(i) / 256);
  }
  _latToTileY(t, i) {
    let n = this.lnglatToPoint(0, t);
    return Math.floor(n.pointY * this._getRetain(i) / 256);
  }
  /*
   * 从经纬度获取某一级别瓦片编号
   */
  lnglatToTile(t, i, n) {
    let l = this._lngToTileX(t, n), o = this._latToTileY(i, n);
    return {
      tileX: l,
      tileY: o
    };
  }
  _lngToPixelX(t, i) {
    let n = this._lngToTileX(t, i), l = this.lnglatToPoint(t, 0);
    return Math.floor(l.pointX * this._getRetain(i) - n * 256);
  }
  _latToPixelY(t, i) {
    let n = this._latToTileY(t, i), l = this.lnglatToPoint(0, t);
    return Math.floor(l.pointY * this._getRetain(i) - n * 256);
  }
  /*
   * 从经纬度到瓦片的像素坐标
   */
  lnglatToPixel(t, i, n) {
    let l = this._lngToPixelX(t, n), o = this._latToPixelY(i, n);
    return {
      pixelX: l,
      pixelY: o
    };
  }
  _pixelXToLng(t, i, n) {
    let l = (i * 256 + t) / this._getRetain(n);
    return this.pointToLnglat(l, 0).lng;
  }
  _pixelYToLat(t, i, n) {
    let l = (i * 256 + t) / this._getRetain(n);
    return this.pointToLnglat(0, l).lat;
  }
  /*
   * 从某一瓦片的某一像素点到经纬度
   */
  pixelToLnglat(t, i, n, l, o) {
    let a = (n * 256 + t) / this._getRetain(o), T = (l * 256 + i) / this._getRetain(o);
    return this.pointToLnglat(a, T);
  }
}
function d(e) {
  return (Math.exp(e) - Math.exp(-e)) / 2;
}
class G {
  constructor(t, i) {
    p(this, "levelMax");
    p(this, "levelMin");
    this.levelMax = t, this.levelMin = i;
  }
  /*
   * 某一瓦片等级下瓦片地图X轴(Y轴)上的瓦片数目
   */
  _getMapSize(t) {
    return Math.pow(2, t);
  }
  /*
   * 分辨率，表示水平方向上一个像素点代表的真实距离(m)
   */
  getResolution(t, i) {
    return 12756274 * Math.PI * Math.cos(t) / 256 / this._getMapSize(i);
  }
  _lngToTileX(t, i) {
    let n = (t + 180) / 360, l = Math.floor(n * this._getMapSize(i));
    return l = Math.min(l, Math.pow(2, i) - 1), l;
  }
  _latToTileY(t, i) {
    let n = t * Math.PI / 180, l = (1 + Math.log(Math.tan(n) + 1 / Math.cos(n)) / Math.PI) / 2;
    return Math.floor(l * this._getMapSize(i));
  }
  /*
   * 从经纬度获取某一级别瓦片坐标编号
   */
  lnglatToTile(t, i, n) {
    let l = this._lngToTileX(t, n), o = this._latToTileY(i, n);
    return {
      tileX: l,
      tileY: o
    };
  }
  _lngToPixelX(t, i) {
    let n = (t + 180) / 360;
    return Math.floor(n * this._getMapSize(i) * 256 % 256);
  }
  _latToPixelY(t, i) {
    let n = Math.sin(t * Math.PI / 180), l = 0.5 + Math.log((1 + n) / (1 - n)) / (4 * Math.PI);
    return 255 - Math.floor(l * this._getMapSize(i) * 256 % 256);
  }
  /*
   * 从经纬度获取点在某一级别瓦片中的像素坐标
   */
  lnglatToPixel(t, i, n) {
    let l = this._lngToPixelX(t, n), o = this._latToPixelY(i, n);
    return {
      pixelX: l,
      pixelY: o
    };
  }
  _pixelXTolng(t, i, n) {
    let l = t / 256;
    return (i + l) / this._getMapSize(n) * 360 - 180;
  }
  _pixelYToLat(t, i, n) {
    let l = t / 256;
    return Math.atan(d(Math.PI * (-1 + 2 * (i + 1 - l) / this._getMapSize(n)))) * 180 / Math.PI;
  }
  /*
   * 从某一瓦片的某一像素点到经纬度
   */
  pixelToLnglat(t, i, n, l, o) {
    let a = this._pixelXTolng(t, n, o), T = this._pixelYToLat(i, l, o);
    return {
      lng: a,
      lat: T
    };
  }
}
class z extends c {
  constructor(t, i) {
    super(t, i);
  }
  lnglatToQuadkey(t, i, n) {
    let l = t.toString(2), o = i.toString(2);
    l = "0".repeat(n - l.length) + l, o = "0".repeat(n - o.length) + o;
    let a = "";
    for (let g = 0; g < n; g++)
      a = a + o[g] + l[g];
    return a = a.replace(/^0*/, ""), Number.parseInt(a, 2).toString(4);
  }
  quadkeyToLnglat(t) {
    const i = t.length;
    let l = Number.parseInt(t, 4).toString(2);
    l.length % 2 != 0 && (l = "0" + l);
    let o = "", a = "";
    for (let g = 0; g < l.length; g++)
      g % 2 === 0 ? o = o + l[g] : a = a + l[g];
    const T = Number.parseInt(o, 2);
    return {
      tileX: Number.parseInt(a, 2),
      tileY: T,
      level: i
    };
  }
}
const r = {
  Gaode: "Gaode",
  Google: "Google",
  Baidu: "Baidu",
  OSM: "OSM",
  Tencent: "Tencent",
  Bing: "Bing"
}, s = {
  [r.Gaode]: {
    min: 1,
    max: 19
  },
  [r.Google]: {
    min: 0,
    max: 21
  },
  [r.OSM]: {
    min: 0,
    max: 19
  },
  [r.Baidu]: {
    min: 3,
    max: 18
  },
  [r.Tencent]: {
    min: 3,
    max: 19
  },
  [r.Bing]: {
    min: 3,
    max: 19
  }
}, N = new c(
  s[r.Gaode].max,
  s[r.Gaode].min
), B = new c(
  s[r.Google].max,
  s[r.Google].min
), R = new c(
  s[r.OSM].max,
  s[r.OSM].min
), F = new k(
  s[r.Baidu].max,
  s[r.Baidu].min
), v = new G(
  s[r.Tencent].max,
  s[r.Tencent].min
), A = new z(
  s[r.Bing].max,
  s[r.Bing].min
), D = {
  TileLnglatTransformGaode: N,
  TileLnglatTransformGoogle: B,
  TileLnglatTransformOSM: R,
  TileLnglatTransformBaidu: F,
  TileLnglatTransformTencent: v,
  TileLnglatTransformBing: A
};
export {
  D as default
};
