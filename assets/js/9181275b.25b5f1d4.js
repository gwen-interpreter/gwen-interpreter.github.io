"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5272],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(4334),o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return E}});var r=n(3117),a=n(7294),o=n(4334),i=n(6775),l=n(1980),u=n(7392),c=n(12);function s(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:s(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,i.k6)(),u=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,l._X)(u),(0,a.useCallback)((function(e){if(u){var t=new URLSearchParams(o.location.search);t.set(u,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[u,o])]}function f(e){var t,n,r,o,i=e.defaultValue,l=e.queryString,u=void 0!==l&&l,s=e.groupId,f=p(e),v=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:f})})),b=v[0],y=v[1],h=m({queryString:u,groupId:s}),g=h[0],k=h[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),E=w[0],N=w[1],S=function(){var e=null!=g?g:E;return d({value:e,tabValues:f})?e:null}();return(0,a.useLayoutEffect)((function(){S&&y(S)}),[S]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!d({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);y(e),k(e),N(e)}),[k,N,f]),tabValues:f}}var v=n(2466),b=n(2389),y="tabList__CuJ",h="tabItem_LNqP";function g(e){var t=e.className,n=e.block,i=e.selectedValue,l=e.selectValue,u=e.tabValues,c=[],s=(0,v.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==i&&(s(t),l(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;n=null!=(o=c[i])?o:c[c.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return c.push(e)},onKeyDown:d,onClick:p},l,{className:(0,o.Z)("tabs__item",h,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function k(e){var t=e.lazy,n=e.children,r=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var o=n.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function w(e){var t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",y)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function E(e){var t=(0,b.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},5599:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return d}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=n(9960),l=(n(4866),n(5162),n(4996),["components"]),u={toc_min_heading_level:2,toc_max_heading_level:3},c="String Interpolation",s={unversionedId:"advanced/string-interpolation",id:"advanced/string-interpolation",title:"String Interpolation",description:"Since v1.0.0",source:"@site/docs/11-advanced/01-string-interpolation.mdx",sourceDirName:"11-advanced",slug:"/advanced/string-interpolation",permalink:"/docs/advanced/string-interpolation",draft:!1,editUrl:"https://github.com/gwen-interpreter/gwen-interpreter.github.io/edit/master/docs/11-advanced/01-string-interpolation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{toc_min_heading_level:2,toc_max_heading_level:3},sidebar:"tutorialSidebar",previous:{title:"Report Portal",permalink:"/docs/reports/portal"},next:{title:"Doc Strings",permalink:"/docs/advanced/doc-strings"}},p={},d=[{value:"Placeholders",id:"placeholders",level:4},{value:"Examples",id:"examples",level:2},{value:"Interpolation by Substitution",id:"interpolation-by-substitution",level:3},{value:"Interpolation by Concatenation",id:"interpolation-by-concatenation",level:3}],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"string-interpolation"},"String Interpolation"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Since ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v1.0.0"},"v1.0.0"))),(0,o.kt)("p",null,"It is often useful to reference settings, captured values and other text throughout your feature and meta files. To support this, Gwen provides a placholder substitution mechanism."),(0,o.kt)("h4",{id:"placeholders"},"Placeholders"),(0,o.kt)("p",null,"A placeholder can be:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An environment variable name (since gwen-web 2.36.0)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"example: ",(0,o.kt)("inlineCode",{parentName:"li"},"${env.USER}")," for the ",(0,o.kt)("inlineCode",{parentName:"li"},"USER")," variable"))),(0,o.kt)("li",{parentName:"ul"},"A system property name"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("a",{parentName:"li",href:"/docs/settings"},"Gwen setting")," name"),(0,o.kt)("li",{parentName:"ul"},"A named attribute bound to an accessible scope")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"interpolation-by-substitution"},"Interpolation by Substitution"),(0,o.kt)("p",null,"Substitution involves replacing named placeholders with their values."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gherkin"},' Feature: String Interpolation\n\nScenario: By Substitution\n    \n    Given my mechanism is "substitution"\n      And my value is "${my.property}"\n      And my proposition is "By ${my mechanism}, my value will be ${my value}"\n     Then my proposition should be "By substitution, my value will be ${my.property}"\n')),(0,o.kt)("h3",{id:"interpolation-by-concatenation"},"Interpolation by Concatenation"),(0,o.kt)("admonition",{title:"Deprecated",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The concatentation method has been deprecated in favor of substitition since ",(0,o.kt)("a",{parentName:"p",href:"/docs/gwen3"},"Gwen 3")," (dropped in ",(0,o.kt)(i.Z,{to:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v3.14.0",mdxType:"Link"},"v3.14.0"),")")),(0,o.kt)("p",null,"Concatenation involves joining string literals and named values together."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gherkin"},' Feature: String Interpolation\n\nScenario: By Concatenation\n    \n    Given my mechanism is "concatenation"\n      And my value is "" + my.property\n      And my proposition is "By " + my mechanism + ", my value will be " + my value\n     Then my proposition should be "By concatenation, my value will be " + my.property\n')))}f.isMDXComponent=!0}}]);