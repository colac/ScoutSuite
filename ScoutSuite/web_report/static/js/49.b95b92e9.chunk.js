(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[49],{634:function(e,t,n){"use strict";n.r(t);var a=n(1),r=(n(0),n(742)),c=n(739),i=n(91);t.default=function(e){var t=e.data;return t?Object(a.jsx)(c.a,{data:t,children:Object(a.jsxs)(r.a,{children:[Object(a.jsx)(c.c,{label:"ID",valuePath:"id"}),Object(a.jsx)(c.c,{label:"Location",valuePath:"location",renderValue:i.q}),Object(a.jsx)(c.c,{label:"Public Access",valuePath:"public_access_allowed",renderValue:i.c}),Object(a.jsx)(c.c,{label:"Vault Recoverable",valuePath:"recovery_protection_enabled"}),Object(a.jsx)(c.c,{label:"Tags",valuePath:"tags",renderValue:function(e){return Object(i.l)(e,i.q)}}),Object(a.jsx)(c.c,{label:"Resource group",valuePath:"resource_group_name",renderValue:i.q})]})}):null}},736:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return l}));var a=n(0),r=n.n(a),c={path_to_issue:[],item:{}},i=r.a.createContext(c),o=r.a.createContext(""),l=r.a.createContext((function(){}))},737:function(e,t,n){"use strict";var a=n(1),r=n(0),c=n(736),i=n(91);t.a=function(e){var t=e.path,n=e.children,o=Object(r.useContext)(c.b);return Object(a.jsx)(c.b.Provider,{value:Object(i.a)(o,t),children:n})}},738:function(e,t,n){"use strict";var a=n(13),r=n(1),c=n(0),i=n(732),o=n(9),l=n.n(o),u=n(16),s=n.n(u),b=n(14),d=n.n(b),j=n(736),v=n(91),f=n(71),p=(n(740),n(723)),h=n(216),x=n.n(h),O=n(741),m=n.n(O),P=n(217),g=n(151),_=function(e){var t=e.service,n=e.finding,a=e.path,o=Object(c.useContext)(g.a),l=o.exceptions,u=o.addException,b=o.removeException,d=Object(P.b)().enqueueSnackbar,j=s()(l,[t,n],[]).includes(a);return Object(r.jsx)(i.a,{title:j?"Remove finding from exceptions list":"Add finding to exceptions list",placement:"top",arrow:!0,children:Object(r.jsx)(p.a,{size:"small",className:"exception-btn",onClick:j?function(){b(t,n,a),d("Exception removed.",{variant:"error",anchorOrigin:{vertical:"bottom",horizontal:"right"}})}:function(){u(t,n,a),d("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:j?Object(r.jsx)(m.a,{}):Object(r.jsx)(x.a,{})})})},C=n(34),V=function(e){var t,n=e.label,o=e.separator,u=e.valuePath,b=e.errorPath,p=e.className,h=e.inline,x=e.tooltip,O=e.tooltipProps,m=e.renderValue,P=e.basePathOverwrite,g=Object(C.g)(),V=Object(c.useContext)(j.a),w=Object(c.useContext)(j.b),A=Object(c.useContext)(j.c),E=Object(v.a)(P||w,u),N=m(e.value||s()(V.item,E,e.value));("boolean"===typeof N&&(N=String(N)),b)?t=(d()(b)?b:[b]).map((function(e){return Object(v.a)(P||w,e)})):t=[E];var R=t.some((function(e){return V.path_to_issues.includes(e)})),k=V.level;if(Object(c.useEffect)((function(){R&&A(k)}),[k]),void 0===N||null===N)return null;var q=Object(r.jsx)(_,{service:g.service,finding:g.finding,path:"".concat(V.path,".").concat(t[0])}),y=Object(r.jsxs)("span",{className:l()(R&&l()("issue",k)),children:[N,R&&q]});return Object(r.jsx)(f.a,{className:l()(p,"partial-value",{inline:h}),label:n,separator:o,value:x?Object(r.jsx)(i.a,Object(a.a)(Object(a.a)({title:N},O),{},{children:y})):y})};V.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=V},739:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i.a})),n.d(t,"c",(function(){return o.a}));var a=n(1),r=(n(0),n(736)),c=(n(91),function(e){var t=e.data,n=e.children;return console.info("PARTIAL DATA",t),Object(a.jsx)(r.a.Provider,{value:t,children:n})}),i=n(737),o=n(738)},740:function(e,t,n){},741:function(e,t,n){"use strict";var a=n(36),r=n(38);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(0)),i=(0,a(n(39)).default)(c.createElement("path",{d:"M19 13H5v-2h14v2z"}),"Remove");t.default=i},742:function(e,t,n){"use strict";var a=n(1);n(0),n(743);t.a=function(e){var t=e.children;return Object(a.jsxs)("div",{className:"informations-wrapper",children:[Object(a.jsx)("h4",{className:"title",children:"Informations"}),t]})}},743:function(e,t,n){}}]);
//# sourceMappingURL=49.b95b92e9.chunk.js.map