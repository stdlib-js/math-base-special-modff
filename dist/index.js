"use strict";var A=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var O=A(function(X,F){
var G=require('@stdlib/math-base-assert-is-nanf/dist'),H=require('@stdlib/number-float32-base-to-word/dist'),R=require('@stdlib/number-float32-base-from-word/dist'),e=require('@stdlib/number-float64-base-to-float32/dist'),E=require('@stdlib/constants-float32-pinf/dist'),S=require('@stdlib/constants-float32-exponent-bias/dist'),W=require('@stdlib/constants-float32-exponent-mask/dist'),D=require('@stdlib/constants-float32-significand-mask/dist'),_=e(0),I=e(-1);function c(a,r,n,i){var N,q,v;if(a=e(a),a<1)return a<0?(c(-a,r,n,i),r[i]=e(r[i]*I),r[i+n]=e(r[i+n]*I),r):a===0?(r[i]=a,r[i+n]=a,r):(r[i]=_,r[i+n]=a,r);if(G(a))return r[i]=NaN,r[i+n]=NaN,r;if(a===E)return r[i]=E,r[i+n]=_,r;if(N=H(a),q=(N&W)>>23|0,q-=S|0,q<23)return v=D>>q|0,(N&v)===0?(r[i]=a,r[i+n]=_,r):(N&=~v,v=R(N),r[i]=v,r[i+n]=e(a-v),r);if(q>=23)return r[i]=a,r[i+n]=_,r}F.exports=c
});var m=A(function(l,T){
var L=O();function P(a){return L(a,[0,0],1,0)}T.exports=P
});var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=m(),K=O();g(p,"assign",K);module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
