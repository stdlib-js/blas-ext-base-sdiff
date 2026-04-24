"use strict";var I=function(n,q){return function(){return q||n((q={exports:{}}).exports,q),q.exports}};var S=I(function(e,Q){
function w(n,q,g,h,j,z,C,_,m,E,B,R,l,i,b){var D,a,r,c,v,F,G,y;if(D=n+j+m,D<=1)return l;if(j===0&&m===0){for(c=h,v=b,a=q[c],y=1;y<n;y++)c+=g,r=q[c],l[v]=r-a,a=r,v+=i;return l}if(j>0){for(v=b,F=_,a=z[F],y=1;y<j;y++)F+=C,r=z[F],l[v]=r-a,a=r,v+=i;n>0?(r=q[h],l[v]=r-a,a=r,v+=i):m>0&&(r=E[R],l[v]=r-a,a=r,v+=i)}else n>0?(a=q[h],v=b):(a=E[R],v=b);if(n>0){if(c=h,j===0)for(a=q[c],c+=g,y=1;y<n;y++)r=q[c],l[v]=r-a,a=r,v+=i,c+=g;else for(c+=g,y=1;y<n;y++)r=q[c],l[v]=r-a,a=r,v+=i,c+=g;m>0&&(r=E[R],l[v]=r-a,a=r,v+=i)}if(m>0)for(G=R+B,y=1;y<m;y++)r=E[G],l[v]=r-a,a=r,v+=i,G+=B;return l}Q.exports=w
});var L=I(function(s,T){
var K=require('@stdlib/blas-base-scopy/dist').ndarray,J=S();function k(n,q,g,h,j,z,C,_,m,E,B,R,l,i,b,D,a,r,c){var v,F,G,y;if(v=n+z+E,v<=1||q>=v)return i;if(q===0)return K(z,C,_,m,i,b,D),F=D+z*b,K(n,g,h,j,i,b,F),F=D+(z+n)*b,K(E,B,R,l,i,b,F),i;if(q===1)return J(n,g,h,j,z,C,_,m,E,B,R,l,i,b,D),i;for(J(n,g,h,j,z,C,_,m,E,B,R,l,a,r,c),G=v-1,y=1;y<q-1;y++)J(G,a,r,c,0,C,_,m,0,B,R,l,a,r,c),G-=1;return J(G,a,r,c,0,C,_,m,0,B,R,l,i,b,D),i}T.exports=k
});var V=I(function(N,U){
var H=require('@stdlib/strided-base-stride2offset/dist'),W=L();function P(n,q,g,h,j,z,C,_,m,E,B,R,l,i){var b=H(n,h),D=H(j,C),a=H(_,E),r=H(n+j+_-q,R),c=H(n+j+_-1,i);return W(n,q,g,h,b,j,z,C,D,_,m,E,a,B,R,r,l,i,c),B}U.exports=P
});var $=I(function(d,Z){
var u=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),Y=V(),X=L();u(Y,"ndarray",X);Z.exports=Y
});var A=require("path").join,p=require('@stdlib/utils-try-require/dist'),f=require('@stdlib/assert-is-error/dist'),o=$(),M,x=p(A(__dirname,"./native.js"));f(x)?M=o:M=x;module.exports=M;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
