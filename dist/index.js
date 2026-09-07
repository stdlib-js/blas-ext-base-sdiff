"use strict";var I=function(q,i){return function(){try{return i||q((i={exports:{}}).exports,i),i.exports}catch(R){throw (i=0, R)}};};var S=I(function(e,Q){
function w(q,i,R,h,j,z,C,E,m,g,B,_,l,n,b){var D,a,r,c,v,F,G,y;if(D=q+j+m,D<=1)return l;if(j===0&&m===0){for(c=h,v=b,a=i[c],y=1;y<q;y++)c+=R,r=i[c],l[v]=r-a,a=r,v+=n;return l}if(j>0){for(v=b,F=E,a=z[F],y=1;y<j;y++)F+=C,r=z[F],l[v]=r-a,a=r,v+=n;q>0?(r=i[h],l[v]=r-a,a=r,v+=n):m>0&&(r=g[_],l[v]=r-a,a=r,v+=n)}else q>0?(a=i[h],v=b):(a=g[_],v=b);if(q>0){if(c=h,j===0)for(a=i[c],c+=R,y=1;y<q;y++)r=i[c],l[v]=r-a,a=r,v+=n,c+=R;else for(c+=R,y=1;y<q;y++)r=i[c],l[v]=r-a,a=r,v+=n,c+=R;m>0&&(r=g[_],l[v]=r-a,a=r,v+=n)}if(m>0)for(G=_+B,y=1;y<m;y++)r=g[G],l[v]=r-a,a=r,v+=n,G+=B;return l}Q.exports=w
});var L=I(function(s,T){
var K=require('@stdlib/blas-base-scopy/dist').ndarray,J=S();function k(q,i,R,h,j,z,C,E,m,g,B,_,l,n,b,D,a,r,c){var v,F,G,y;if(v=q+z+g,v<=1||i>=v)return n;if(i===0)return K(z,C,E,m,n,b,D),F=D+z*b,K(q,R,h,j,n,b,F),F=D+(z+q)*b,K(g,B,_,l,n,b,F),n;if(i===1)return J(q,R,h,j,z,C,E,m,g,B,_,l,n,b,D),n;for(J(q,R,h,j,z,C,E,m,g,B,_,l,a,r,c),G=v-1,y=1;y<i-1;y++)J(G,a,r,c,0,C,E,m,0,B,_,l,a,r,c),G-=1;return J(G,a,r,c,0,C,E,m,0,B,_,l,n,b,D),n}T.exports=k
});var V=I(function(N,U){
var H=require('@stdlib/strided-base-stride2offset/dist'),W=L();function P(q,i,R,h,j,z,C,E,m,g,B,_,l,n){var b=H(q,h),D=H(j,C),a=H(E,g),r=H(q+j+E-i,_),c=H(q+j+E-1,n);return W(q,i,R,h,b,j,z,C,D,E,m,g,a,B,_,r,l,n,c),B}U.exports=P
});var $=I(function(d,Z){
var u=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),Y=V(),X=L();u(Y,"ndarray",X);Z.exports=Y
});var A=require("path").join,p=require('@stdlib/utils-try-require/dist'),f=require('@stdlib/assert-is-error/dist'),o=$(),M,x=p(A(__dirname,"./native.js"));f(x)?M=o:M=x;module.exports=M;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
