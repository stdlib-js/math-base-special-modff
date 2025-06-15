"use strict";var O=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var I=O(function(K,c){
var p=require('@stdlib/math-base-assert-is-nanf/dist'),D=require('@stdlib/number-float32-base-to-word/dist'),H=require('@stdlib/number-float32-base-from-word/dist'),e=require('@stdlib/number-float64-base-to-float32/dist'),A=require('@stdlib/constants-float32-pinf/dist'),L=require('@stdlib/constants-float32-exponent-bias/dist'),E=require('@stdlib/constants-float32-num-significand-bits/dist'),R=require('@stdlib/constants-float32-exponent-mask/dist'),W=require('@stdlib/constants-float32-significand-mask/dist'),q=e(0),F=e(-1);function T(a,r,n,i){var N,_,v;return a=e(a),a<1?a<0?(T(-a,r,n,i),r[i]=e(r[i]*F),r[i+n]=e(r[i+n]*F),r):a===0?(r[i]=a,r[i+n]=a,r):(r[i]=q,r[i+n]=a,r):p(a)?(r[i]=NaN,r[i+n]=NaN,r):a===A?(r[i]=A,r[i+n]=q,r):(N=D(a),_=(N&R)>>E|0,_-=L|0,_<E?(v=W>>_|0,(N&v)===0?(r[i]=a,r[i+n]=q,r):(N&=~v,v=H(N),r[i]=v,r[i+n]=e(a-v),r)):(r[i]=a,r[i+n]=q,r))}c.exports=T
});var G=O(function(X,S){
var M=I();function P(a){return M(a,[0,0],1,0)}S.exports=P
});var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=G(),B=I();g(m,"assign",B);module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
