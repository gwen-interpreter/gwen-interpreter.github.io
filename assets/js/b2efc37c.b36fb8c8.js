"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4957],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,h=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(h,u(u({ref:t},c),{},{components:r})):n.createElement(h,u({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var s=2;s<o;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(7294),a=r(4334),o="tabItem_Ymn6";function u(e){var t=e.children,r=e.hidden,u=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,u),hidden:r},t)}},4866:function(e,t,r){r.d(t,{Z:function(){return E}});var n=r(3117),a=r(7294),o=r(4334),u=r(6775),l=r(1980),i=r(7392),s=r(12);function c(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:c(r);return function(e){var t=(0,i.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId,o=(0,u.k6)(),i=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,l._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function h(e){var t,r,n,o,u=e.defaultValue,l=e.queryString,i=void 0!==l&&l,c=e.groupId,h=p(e),m=(0,a.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!d({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:u,tabValues:h})})),v=m[0],b=m[1],g=f({queryString:i,groupId:c}),w=g[0],y=g[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),r=(0,s.Nk)(t),n=r[0],o=r[1],[n,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),E=k[0],O=k[1],T=function(){var e=null!=w?w:E;return d({value:e,tabValues:h})?e:null}();return(0,a.useLayoutEffect)((function(){T&&b(T)}),[T]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!d({value:e,tabValues:h}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),O(e)}),[y,O,h]),tabValues:h}}var m=r(2466),v=r(2389),b="tabList__CuJ",g="tabItem_LNqP";function w(e){var t=e.className,r=e.block,u=e.selectedValue,l=e.selectValue,i=e.tabValues,s=[],c=(0,m.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,r=s.indexOf(t),n=i[r].value;n!==u&&(c(t),l(n))},d=function(e){var t,r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var n,a=s.indexOf(e.currentTarget)+1;r=null!=(n=s[a])?n:s[0];break;case"ArrowLeft":var o,u=s.indexOf(e.currentTarget)-1;r=null!=(o=s[u])?o:s[s.length-1]}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},i.map((function(e){var t=e.value,r=e.label,l=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return s.push(e)},onKeyDown:d,onClick:p},l,{className:(0,o.Z)("tabs__item",g,null==l?void 0:l.className,{"tabs__item--active":u===t})}),null!=r?r:t)})))}function y(e){var t=e.lazy,r=e.children,n=e.selectedValue;if(r=Array.isArray(r)?r:[r],t){var o=r.find((function(e){return e.props.value===n}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function k(e){var t=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b)},a.createElement(w,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function E(e){var t=(0,v.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}},492:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),u=(r(9960),r(4866),r(5162),["components"]),l={toc_min_heading_level:2,toc_max_heading_level:2},i="Slideshows",s={unversionedId:"reports/slideshows",id:"reports/slideshows",title:"Slideshows",description:"Gwen can capture screenshots and generate slideshows in HTML reports to create the illusion of video. To get slideshows in your reports, you will need to enable screenshot capture.",source:"@site/docs/10-reports/04-slideshows.mdx",sourceDirName:"10-reports",slug:"/reports/slideshows",permalink:"/docs/reports/slideshows",draft:!1,editUrl:"https://github.com/gwen-interpreter/gwen-interpreter.github.io/edit/master/docs/10-reports/04-slideshows.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"Screenshots",permalink:"/docs/reports/screenshots"},next:{title:"Video Recordings",permalink:"/docs/reports/video-recordings"}},c={},p=[],d={toc:p};function f(e){var t=e.components,l=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"slideshows"},"Slideshows"),(0,o.kt)("p",null,"Gwen can capture screenshots and generate slideshows in ",(0,o.kt)("a",{parentName:"p",href:"/docs/reports/html"},"HTML reports")," to create the illusion of video. To get slideshows in your reports, you will need to enable ",(0,o.kt)("a",{parentName:"p",href:"/docs/reports/screenshots"},"screenshot capture"),"."),(0,o.kt)("p",null,"With screenshot capture enabled, each generated HTML feature report will contain links to screenshot attachments next to various steps and a ",(0,o.kt)("em",{parentName:"p"},"Slideshow")," button in the status header bar at the top."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Example HTML report",src:r(7900).Z,width:"1716",height:"106"})),(0,o.kt)("p",null,"Clicking the ",(0,o.kt)("em",{parentName:"p"},"Slideshow")," button will open the slideshow in a popup box enabling you to navigate and playback screenshots at different speeds."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Example HTML report",src:r(4239).Z,width:"1776",height:"1144"})),(0,o.kt)("p",null,"Clicking the ",(0,o.kt)("em",{parentName:"p"},"Full Screen")," link will pull the slideshow out of the popup enabling you to view it in full size."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Example HTML report",src:r(1878).Z,width:"1760",height:"1546"})))}f.isMDXComponent=!0},7900:function(e,t,r){t.Z=r.p+"assets/images/sample-html-slideshow-1-nav-3c4a491d3a45f54efedcc91777256e32.png"},4239:function(e,t,r){t.Z=r.p+"assets/images/sample-html-slideshow-2-popup-20d57890743070286e409433dffe318a.png"},1878:function(e,t,r){t.Z=r.p+"assets/images/sample-html-slideshow-3-fullscreen-10e47906d3b17bd90f220d7c32cdd08a.png"}}]);