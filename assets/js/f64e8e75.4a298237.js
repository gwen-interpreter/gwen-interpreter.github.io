"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2475],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2360:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),a=n(6010),o="tabItem_OmH5";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(3117),a=n(7294),o=n(2389),l=n(7392),i=n(7094),u=n(2466),c=n(6010),s="tabList_uSqn",d="tabItem_LplD";function p(e){var t,n,o,p=e.lazy,f=e.block,m=e.defaultValue,v=e.values,b=e.groupId,y=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=v?v:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,l.l)(g,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=h[0])?void 0:o.props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var O=(0,i.U)(),x=O.tabGroupChoices,E=O.setTabGroupChoices,T=(0,a.useState)(k),_=T[0],D=T[1],j=[],N=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var P=x[b];null!=P&&P!==_&&g.some((function(e){return e.value===P}))&&D(P)}var C=function(e){var t=e.currentTarget,n=j.indexOf(t),r=g[n].value;r!==_&&(N(t),D(r),null!=b&&E(b,r))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=j.indexOf(e.currentTarget)+1;n=j[r]||j[0];break;case"ArrowLeft":var a=j.indexOf(e.currentTarget)-1;n=j[a]||j[j.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,c.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":f},y)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:function(e){return j.push(e)},onKeyDown:Z,onFocus:C,onClick:C},o,{className:(0,c.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":_===t})}),null!=n?n:t)}))),p?(0,a.cloneElement)(h.filter((function(e){return e.props.value===_}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}function f(e){var t=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},6208:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),l=n(9960),i=(n(9877),n(2360),n(4996),["components"]),u={toc_min_heading_level:2,toc_max_heading_level:3},c="Dry Runs",s={unversionedId:"modes/dry-runs",id:"modes/dry-runs",title:"Dry Runs",description:"Since v1.0.0",source:"@site/docs/09-modes/05-dry-runs.mdx",sourceDirName:"09-modes",slug:"/modes/dry-runs",permalink:"/docs/modes/dry-runs",draft:!1,editUrl:"https://github.com/gwen-interpreter/gwen-interpreter.github.io/edit/master/docs/09-modes/05-dry-runs.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{toc_min_heading_level:2,toc_max_heading_level:3},sidebar:"tutorialSidebar",previous:{title:"Parallel",permalink:"/docs/modes/parallel"},next:{title:"Data Driven",permalink:"/docs/modes/data-driven"}},d={},p=[{value:"Catch syntax and binding errors",id:"catch-syntax-and-binding-errors",level:2},{value:"Example",id:"example",level:4}],f={toc:p};function m(e){var t=e.components,u=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dry-runs"},"Dry Runs"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Since ",(0,o.kt)(l.Z,{to:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v1.0.0",mdxType:"Link"},"v1.0.0"))),(0,o.kt)("h2",{id:"catch-syntax-and-binding-errors"},"Catch syntax and binding errors"),(0,o.kt)("p",null,"Dry runs can be performed on features to verify that they are syntactically correct and that all references have bindings that will resolve at runtime. This allows you to quickly validate features and catch potential errors before committing them to an execution cycle. The ",(0,o.kt)("a",{parentName:"p",href:"/docs/cli#gwen-cli-options-dry-run"},(0,o.kt)("inlineCode",{parentName:"a"},"-n|--dry-run"))," CLI option is used to launch Gwen in this mode."),(0,o.kt)("p",null,"Results will be logged to the console and in ",(0,o.kt)("a",{parentName:"p",href:"/docs/reports/html"},"HTML reports")," that you can open to quickly find any issues."),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("p",null,"If you leave out or forget to define a selector for an input field, it would be reported in the HTML report as follows:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Example dry run with error",src:n(4314).Z,width:"1588",height:"1118"})))}m.isMDXComponent=!0},4314:function(e,t,n){t.Z=n.p+"assets/images/sample-html-dry-run-error-58c7602e7bc964072748e8be38799f33.png"}}]);