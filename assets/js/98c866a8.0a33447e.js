"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1158],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,v=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(v,o(o({ref:t},s),{},{components:n})):a.createElement(v,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(6010),i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),r=n(7294),i=n(6010),o=n(2389),l=n(7392),c=n(7094),u=n(2466),s="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,o=e.lazy,d=e.block,m=e.defaultValue,v=e.values,f=e.groupId,h=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=v?v:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,l.l)(g,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,c.U)(),N=k.tabGroupChoices,O=k.setTabGroupChoices,j=(0,r.useState)(y),x=j[0],E=j[1],C=[],S=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var T=N[f];null!=T&&T!==x&&g.some((function(e){return e.value===T}))&&E(T)}var _=function(e){var t=e.currentTarget,n=C.indexOf(t),a=g[n].value;a!==x&&(S(t),E(a),null!=f&&O(f,String(a)))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=C.indexOf(e.currentTarget)+1;n=null!=(a=C[r])?a:C[0];break;case"ArrowLeft":var i,o=C.indexOf(e.currentTarget)-1;n=null!=(i=C[o])?i:C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},h)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return C.push(e)},onKeyDown:I,onFocus:_,onClick:_},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(b.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},9818:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=(n(9960),n(5488),n(5162),n(4996),["components"]),l={toc_min_heading_level:2,toc_max_heading_level:3},c="Implicit JavaScript Locators",u={unversionedId:"advanced/implicit-js-locators",id:"advanced/implicit-js-locators",title:"Implicit JavaScript Locators",description:"Since v2.19.0",source:"@site/docs/11-advanced/13-implicit-js-locators.mdx",sourceDirName:"11-advanced",slug:"/advanced/implicit-js-locators",permalink:"/docs/advanced/implicit-js-locators",draft:!1,editUrl:"https://github.com/gwen-interpreter/gwen-interpreter.github.io/edit/master/docs/11-advanced/13-implicit-js-locators.mdx",tags:[],version:"current",sidebarPosition:13,frontMatter:{toc_min_heading_level:2,toc_max_heading_level:3},sidebar:"tutorialSidebar",previous:{title:"Locator Level Timeouts",permalink:"/docs/advanced/locator-level-timeouts"},next:{title:"Mobile Emulation",permalink:"/docs/advanced/mobile-emulatioin"}},s={},p=[{value:"How it works",id:"how-it-works",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"implicit-javascript-locators"},"Implicit JavaScript Locators"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Since ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v2.19.0"},"v2.19.0"))),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/settings/reference#gwen-web-implicit-js-locators"},(0,i.kt)("inlineCode",{parentName:"a"},"gwen.web.implicit.js.locators"))," setting to enable Gwen to implicitly convert all locator bindings to their JavaScript equivalents and force all elements to be located by executing a script on the page instead of looking them up using standard web driver locator mechanism. Enabling this is useful when dealing with web sites that dynamically render or change the visibility of elements on pages or manipulate the DOM."),(0,i.kt)("p",null,"Value values are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"false")," to disable (default)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"true")," to enable")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Dyncamicaly rendered elements are best located by JavaScript. Consider enabling this mechanism if your locators are intermittently failing with what appears to be random hit-and-miss behavior."))),(0,i.kt)("h3",{id:"how-it-works"},"How it works"),(0,i.kt)("p",null,"Say you define a locator in Gwen to lookup a user name field by ID as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gherkin"},'  Given user name can be located by id "username"\n')),(0,i.kt)("p",null,'Gwen will normally lookup this field using the "By.Id locator" mechanism of web driver. This is the default Gwen behaviour when the ',(0,i.kt)("inlineCode",{parentName:"p"},"gwen.web.implicit.js.locators")," setting is ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,"If you set the ",(0,i.kt)("inlineCode",{parentName:"p"},"gwen.web.implicit.js.locators")," setting to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," however, Gwen will internally create a JavaScript equivalent locator for the above (and all other locator bindings you have defined) and execute that script on the page to locate the element instead of performing the standard web driver lookup. In the case of the above example, it would run ",(0,i.kt)("inlineCode",{parentName:"p"},'document.getElementById("username")')," on the web page."),(0,i.kt)("p",null,"All the standard locators (id, name, css selector, class name, tag name, xpath, etc..) will be implicity converted to their JavaScript equivalents when this setting is enabled. So you don't have to rewrite your existing locator binding definitions if you decide that you want to locate all elements with JavaScript. Any explicitly defined JavaScript bindings you may have will not be affected."))}m.isMDXComponent=!0}}]);