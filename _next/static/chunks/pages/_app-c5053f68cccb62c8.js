(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1722)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,u=(o=n(7294))&&o.__esModule?o:{default:o},a=n(1003),l=n(4465),s=n(2692),i=n(8245),c=n(9246),d=n(227),f=n(3468);function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var h="undefined"!==typeof u.default.useTransition,v={};function j(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;v[t+"%"+n+(o?"%"+o:"")]=!0}}var y=u.default.forwardRef((function(e,t){var n,o=e.href,y=e.as,b=e.children,x=e.prefetch,m=e.passHref,g=e.replace,_=e.shallow,C=e.scroll,L=e.locale,M=e.onClick,O=e.onMouseEnter,E=e.legacyBehavior,k=void 0===E?!0!==Boolean(!1):E,T=p(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);n=b,k&&"string"===typeof n&&(n=u.default.createElement("a",null,n));var S=!1!==x,U=r(h?u.default.useTransition():[],2)[1],w=u.default.useContext(s.RouterContext),P=u.default.useContext(i.AppRouterContext);P&&(w=P);var R,B=u.default.useMemo((function(){var e=r(a.resolveHref(w,o,!0),2),t=e[0],n=e[1];return{href:t,as:y?a.resolveHref(w,y):n||t}}),[w,o,y]),I=B.href,N=B.as,Z=u.default.useRef(I),D=u.default.useRef(N);k&&(R=u.default.Children.only(n));var G=k?R&&"object"===typeof R&&R.ref:t,A=r(c.useIntersection({rootMargin:"200px"}),3),H=A[0],K=A[1],F=A[2],X=u.default.useCallback((function(e){D.current===N&&Z.current===I||(F(),D.current=N,Z.current=I),H(e),G&&("function"===typeof G?G(e):"object"===typeof G&&(G.current=e))}),[N,G,I,F,H]);u.default.useEffect((function(){var e=K&&S&&a.isLocalURL(I),t="undefined"!==typeof L?L:w&&w.locale,n=v[I+"%"+N+(t?"%"+t:"")];e&&!n&&j(w,I,N,{locale:t})}),[N,I,K,L,S,w]);var q={ref:X,onClick:function(e){k||"function"!==typeof M||M(e),k&&R.props&&"function"===typeof R.props.onClick&&R.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,u,l,s,i){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n)){e.preventDefault();var c=function(){t[o?"replace":"push"](n,r,{shallow:u,locale:s,scroll:l})};i?i(c):c()}}(e,w,I,N,g,_,C,L,P?U:void 0)},onMouseEnter:function(e){k||"function"!==typeof O||O(e),k&&R.props&&"function"===typeof R.props.onMouseEnter&&R.props.onMouseEnter(e),a.isLocalURL(I)&&j(w,I,N,{priority:!0})}};if(!k||m||"a"===R.type&&!("href"in R.props)){var z="undefined"!==typeof L?L:w&&w.locale,J=w&&w.isLocaleDomain&&d.getDomainLocale(N,z,w.locales,w.domainLocales);q.href=J||f.addBasePath(l.addLocale(N,z,w&&w.defaultLocale))}return k?u.default.cloneElement(R,q):u.default.createElement("a",Object.assign({},T,q),n)}));t.default=y,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,i=e.disabled||!a,c=o.useRef(),d=r(o.useState(!1),2),f=d[0],p=d[1],h=r(o.useState(t?t.current:null),2),v=h[0],j=h[1],y=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),i||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=s.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=l.get(r):(t=l.get(n),s.push(n));if(t)return t;var o=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(n,t={id:n,observer:u,elements:o}),t}(n),o=r.id,u=r.observer,a=r.elements;return a.set(e,t),u.observe(e),function(){if(a.delete(e),u.unobserve(e),0===a.size){u.disconnect(),l.delete(o);var t=s.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&s.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:v,rootMargin:n}))}),[i,v,n,f]),b=o.useCallback((function(){p(!1)}),[]);return o.useEffect((function(){if(!a&&!f){var e=u.requestIdleCallback((function(){return p(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[f]),o.useEffect((function(){t&&j(t.current)}),[t]),[y,f,b]};var o=n(7294),u=n(4686),a="undefined"!==typeof IntersectionObserver;var l=new Map,s=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8245:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AppRouterContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.AppRouterContext=o},1722:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(337),o=n(5893),u=(n(6774),n(1664)),a=n.n(u);function l(){return(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(a(),{href:"/",children:(0,o.jsx)("a",{children:"Home"})})}),(0,o.jsx)("li",{children:(0,o.jsx)(a(),{href:"/about",children:(0,o.jsx)("a",{children:"About"})})})]})}var s=n(7294);function i(){var e=(0,s.useState)(0),t=e[0],n=e[1],r=(0,s.useState)([]),u=r[0],a=r[1],l=[{id:5426,slug:"solana",name:"Solana",symbol:"SOL",jpy:4083.0337971780245,usd:30.24637514806663,dtLastUpdated:"2022-06-18T11:47:00.000Z"},{id:16352,slug:"green-satoshi-token",name:"Green Satoshi Token (SOL)",symbol:"GST",jpy:31.612645873589393,usd:.2341807572536915,dtLastUpdated:"2022-06-18T11:47:00.000Z"},{id:1839,slug:"bnb",name:"BNB",symbol:"BNB",jpy:27535.4961977997,usd:203.97797061156655,dtLastUpdated:"2022-06-18T11:48:00.000Z"},{id:20236,slug:"green-satoshi-token-bsc",name:"Green Satoshi Token (BSC)",symbol:"GST",jpy:44.268858588599045,usd:.327935689675874,dtLastUpdated:"2022-06-18T11:48:00.000Z"},{id:18069,slug:"green-metaverse-token",name:"STEPN",symbol:"GMT",jpy:77.52521173067161,usd:.5742927327860546,dtLastUpdated:"2022-06-18T11:48:00.000Z"},{id:1,slug:"bitcoin",name:"Bitcoin",symbol:"BTC",jpy:212557.762321872,usd:19353.35490727398,dtLastUpdated:"2022-06-18T11:49:00.000Z"},{id:3408,slug:"usd-coin",name:"USD Coin",symbol:"USDC",jpy:135.0464530316707,usd:1.00039967428993,dtLastUpdated:"2022-06-18T11:47:00.000Z"}];return(0,s.useEffect)((function(){a(l)}),[t]),(0,o.jsxs)("div",{children:[(0,o.jsxs)("table",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"ID"}),(0,o.jsx)("th",{children:"SLUG"}),(0,o.jsx)("th",{children:"name"}),(0,o.jsx)("th",{children:"symbol"}),(0,o.jsx)("th",{children:"jpy"}),(0,o.jsx)("th",{children:"usd"}),(0,o.jsx)("th",{children:"dtLastUpdated"})]}),u.map((function(e){return(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:e.id}),(0,o.jsx)("td",{children:e.slug}),(0,o.jsx)("td",{children:e.name}),(0,o.jsx)("td",{children:e.symbol}),(0,o.jsx)("td",{children:e.jpy}),(0,o.jsx)("td",{children:e.usd}),(0,o.jsx)("td",{children:e.dtLastUpdated})]},e.id)}))]}),(0,o.jsx)("p",{children:t}),(0,o.jsx)("div",{children:(0,o.jsx)("button",{onClick:function(){return n(t+1)},children:"Count+"})}),(0,o.jsx)("p",{children:"Footer\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})]})}function c(e){var t=e.children;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l,{}),(0,o.jsx)("main",{children:t}),(0,o.jsx)(i,{})]})}var d=function(e){var t=e.pageProps,n=e.Component;return(0,o.jsx)(c,{children:(0,o.jsx)(n,(0,r.Z)({},t))})}},6774:function(){},1664:function(e,t,n){e.exports=n(1551)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6840),t(880)}));var n=e.O();_N_E=n}]);