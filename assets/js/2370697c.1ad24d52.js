"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[559],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,f=m["".concat(u,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(4334),i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(3117),a=n(7294),i=n(4334),o=n(6775),l=n(1980),u=n(7392),c=n(12);function s(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:s(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,i=(0,o.k6)(),u=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,l._X)(u),(0,a.useCallback)((function(e){if(u){var t=new URLSearchParams(i.location.search);t.set(u,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[u,i])]}function f(e){var t,n,r,i,o=e.defaultValue,l=e.queryString,u=void 0!==l&&l,s=e.groupId,f=d(e),v=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:f})})),b=v[0],h=v[1],g=p({queryString:u,groupId:s}),y=g[0],k=g[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Nk)(t),r=n[0],i=n[1],[r,(0,a.useCallback)((function(e){t&&i.set(e)}),[t,i])]),N=w[0],E=w[1],T=function(){var e=null!=y?y:N;return m({value:e,tabValues:f})?e:null}();return(0,a.useLayoutEffect)((function(){T&&h(T)}),[T]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);h(e),k(e),E(e)}),[k,E,f]),tabValues:f}}var v=n(2466),b=n(2389),h="tabList__CuJ",g="tabItem_LNqP";function y(e){var t=e.className,n=e.block,o=e.selectedValue,l=e.selectValue,u=e.tabValues,c=[],s=(0,v.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==o&&(s(t),l(r))},m=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var i,o=c.indexOf(e.currentTarget)-1;n=null!=(i=c[o])?i:c[c.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},l,{className:(0,i.Z)("tabs__item",g,null==l?void 0:l.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function k(e){var t=e.lazy,n=e.children,r=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=i.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function w(e){var t=f(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",h)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function N(e){var t=(0,b.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},2094:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return m}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=n(9960),l=(n(4866),n(5162),n(4996),["components"]),u={toc_min_heading_level:2,toc_max_heading_level:3},c="Eager or Lazy Bindings",s={unversionedId:"eager-or-lazy",id:"eager-or-lazy",title:"Eager or Lazy Bindings",description:"@Eager and @Lazy annotations can be used to control when bindings are evaluated. In the absence of either annotation, bindings will be evaluated every time they are referenced and discarded once used.",source:"@site/docs/22-eager-or-lazy.mdx",sourceDirName:".",slug:"/eager-or-lazy",permalink:"/docs/eager-or-lazy",draft:!1,editUrl:"https://github.com/gwen-interpreter/gwen-interpreter.github.io/edit/master/docs/22-eager-or-lazy.mdx",tags:[],version:"current",sidebarPosition:22,frontMatter:{toc_min_heading_level:2,toc_max_heading_level:3},sidebar:"tutorialSidebar",previous:{title:"Finally Steps",permalink:"/docs/finally-steps"},next:{title:"Locator Chaining",permalink:"/docs/locator-chaining"}},d={},m=[{value:"@Eager",id:"eager",level:2},{value:"@Lazy",id:"lazy",level:2},{value:"Default (ephemeral)",id:"default-ephemeral",level:2}],p={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"eager-or-lazy-bindings"},"Eager or Lazy Bindings"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@Eager")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@Lazy")," annotations can be used to control when ",(0,i.kt)("a",{parentName:"p",href:"/docs/dsl#bindings"},"bindings")," are evaluated. In the absence of either annotation, bindings will be evaluated every time they are referenced and discarded once used."),(0,i.kt)("h2",{id:"eager"},"@Eager"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Since ",(0,i.kt)(o.Z,{to:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v3.9.0",mdxType:"Link"},"v3.9.0"))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@Eager")," annotation can be used to immediately evaluate a binding. The eagerly bound value is instantly returned whenever the name is referenced."),(0,i.kt)("admonition",{title:"Eager example",type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-gherkin",metastring:"{1}","{1}":!0},'  Given @Eager time is defined by js "new Date().getTime()"\n   When I capture time as time 1\n    And I capture time as time 2 \n   Then time 1 should be "${time 2}"\n')),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"time 1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"time 2")," will have the same value since ",(0,i.kt)("inlineCode",{parentName:"p"},"time")," is evaluated and bound immediately at step 1.")),(0,i.kt)("h2",{id:"lazy"},"@Lazy"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Since ",(0,i.kt)(o.Z,{to:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v3.9.0",mdxType:"Link"},"v3.9.0"))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@Lazy")," annotation can be used to evaluate bindings when they are first referenced. The lazily bound value is returned whenever the name is referenced thereafter."),(0,i.kt)("admonition",{title:"Eager example",type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-gherkin",metastring:"{1,2}","{1,2}":!0},'  Given @Lazy time is defined by js "new Date().getTime()"\n   When I capture time as time 1\n    And I capture time as time 2 \n   Then time 1 should be "${time 2}"\n')),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"time 1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"time 2")," will have the same value since ",(0,i.kt)("inlineCode",{parentName:"p"},"time")," is bound and evaluated when it is first referenced.")),(0,i.kt)("h2",{id:"default-ephemeral"},"Default (ephemeral)"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Since ",(0,i.kt)(o.Z,{to:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v1.0.0",mdxType:"Link"},"v1.0.0"))),(0,i.kt)("p",null,"In the absence of either annoation, the bindings will be unconditionally evaluated every time the name is referenced without being saved to memory. This is the default behaviour."),(0,i.kt)("admonition",{title:"Eager example",type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-gherkin",metastring:"{2-3}","{2-3}":!0},'  Given time is defined by js "new Date().getTime()"\n   When I capture time as time 1\n    And I capture time as time 2 \n   Then time 1 should not be "${time 2}"\n')),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"time 1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"time 2")," will have different values since ",(0,i.kt)("inlineCode",{parentName:"p"},"time")," is evaluated, bound and discarded at steps 2 and 3.")))}f.isMDXComponent=!0}}]);