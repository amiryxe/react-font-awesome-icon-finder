(this["webpackJsonpreact-font-awesome-icon-finder"]=this["webpackJsonpreact-font-awesome-icon-finder"]||[]).push([[4],{130:function(e,t,n){"use strict";n.r(t);var c=n(81),i=n(0),r=n(129),a=n(124),s=n(123),o=n(127),l=n(12);s.b.add(o.a);var j=function(e){var t=e.icon;return Object(l.jsx)(r.a,{size:"small",title:t,extra:Object(l.jsx)("a",{href:"#",children:"copy"}),style:{width:"100%",display:"inline-block"},children:Object(l.jsx)("h2",{style:{textAlign:"center",fontSize:"3rem",margin:0},children:Object(l.jsx)(a.a,{icon:t})})})},u=n(115),b=n(116),h=n(44),d=n(128);t.default=function(e){var t=e.filter,n=Object(i.useContext)(h.a).iconList.filter((function(e){return e.match(t)})),r=Object(i.useState)({prev:0,next:10}),a=Object(c.a)(r,2),s=a[0],o=a[1],x=Object(i.useState)(!0),f=Object(c.a)(x,2),O=f[0],p=f[1],m=Object(i.useState)(n.slice(s.prev,s.next)),v=Object(c.a)(m,2),g=v[0],w=v[1];return Object(l.jsx)(d.a,{dataLength:g.length,next:function(){g.length!==n.length?(setTimeout((function(){w(g.concat(n.slice(s.prev+10,s.next+10)))}),1e3),o((function(e){return{prev:e.prev+10,next:e.next+10}}))):p(!1)},hasMore:O,loader:Object(l.jsx)("h4",{children:"Loading..."}),children:Object(l.jsx)(u.a,{children:g&&g.map((function(e,t){return Object(l.jsx)(b.a,{span:4,style:{padding:"1rem"},children:Object(l.jsx)(j,{icon:e})},t)}))})})}}}]);
//# sourceMappingURL=4.50180df5.chunk.js.map