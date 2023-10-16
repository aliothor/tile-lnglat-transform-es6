declare function H(a: any, b: any): void;
declare namespace H {
    var TL: (a: any) => any;
}
declare function Q(a: any, b: any): void;
declare function R(): void;
declare namespace R {
    var prototype: any;
}
declare let BMap: {
    Point: typeof H;
    Pixel: typeof Q;
    MercatorProjection: typeof R;
};
export default BMap;
