(this["webpackJsonpreact-mobile-example"]=this["webpackJsonpreact-mobile-example"]||[]).push([[7],{219:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var i=t(75),c=Object(i.b)({key:"userState",default:{name:"",age:null}})},319:function(e,n,t){e.exports={container:"section_container__1d27v"}},320:function(e,n,t){e.exports={imgList:"component_imgList__2elKR",imgBox:"component_imgBox__2dJaK"}},443:function(e,n,t){"use strict";t.r(n);var i=t(2),c=t(0),a=t(319),s=t.n(a),r=t(6),o=function(e){var n=e.children;return Object(r.jsx)("div",{className:s.a.container,children:n})},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object(c.useState)(e),t=Object(i.a)(n,2),a=t[0],s=t[1],r=Object(c.useCallback)((function(e){s((function(n){return Object.assign({},n,e instanceof Function?e(n):e)}))}),[]);return[a,r]},l=t(320),d=t.n(l),j=t(321),b=t.n(j),m=t(75),x=t(219),O=t.p+"static/media/avatar.bbd9a9a2.jpg",p=t.p+"static/media/wxqrcode.b3cd82b8.jpg";n.default=function(){var e=Object(m.d)(x.a),n=u({imags:[O,p],index:0,isOpen:!1}),t=Object(i.a)(n,2),c=t[0],a=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(o,{children:"\u7528\u6237\u72b6\u6001 (\u6765\u81ea recoil )"}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("h2",{children:["\u59d3\u540d\uff1a",e.name]}),Object(r.jsxs)("h2",{children:["\u5e74\u7eaa\uff1a",e.age]})]}),Object(r.jsx)(o,{children:"\u9884\u89c8\u56fe\u7247"}),Object(r.jsx)("div",{className:d.a.imgList,children:c.imags.map((function(e,n){return Object(r.jsx)("div",{onClick:function(){return a({isOpen:!0,index:n})},className:d.a.imgBox,children:Object(r.jsx)("img",{src:e,alt:""})},n)}))}),c.isOpen?Object(r.jsx)(b.a,{onClose:function(){return a({isOpen:!1})},urls:c.imags,index:c.index}):null]})}}}]);
//# sourceMappingURL=7.b2f80800.chunk.js.map