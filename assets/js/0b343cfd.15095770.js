"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2407],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<s;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(3117),r=n(7294),s=n(2389),i=n(662),o=n(6010),l="tabItem_LplD";function u(e){var t,n,s,u=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(t=null!=p?p:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(s=g[0])?void 0:s.props.value;if(null!==h&&!v.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,i.UB)(),y=b.tabGroupChoices,w=b.setTabGroupChoices,N=(0,r.useState)(h),T=N[0],x=N[1],O=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=y[m];null!=j&&j!==T&&v.some((function(e){return e.value===j}))&&x(j)}var C=function(e){var t=e.currentTarget,n=O.indexOf(t),a=v[n].value;a!==T&&(E(t),x(a),null!=m&&w(m,a))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},f)},v.map((function(e){var t=e.value,n=e.label,s=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return O.push(e)},onKeyDown:I,onFocus:C,onClick:C},s,{className:(0,o.Z)("tabs__item",l,null==s?void 0:s.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(g.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function c(e){var t=(0,s.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},9734:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var a=n(3117),r=n(102),s=(n(7294),n(3905)),i=n(9877),o=n(8215),l=["components"],u={toc_min_heading_level:2,toc_max_heading_level:2},c="Masked Settings",p={unversionedId:"settings/masked",id:"settings/masked",title:"Masked Settings",description:'It is a common security practice to never log sensitive data. To support this practice, Gwen will hide all settings that you flag as "masked" by logging their values as * in all logs, reports, error messages and console outputs.',source:"@site/docs/07-settings/03-masked.mdx",sourceDirName:"07-settings",slug:"/settings/masked",permalink:"/docs/settings/masked",editUrl:"https://github.com/gwen-interpreter/gwen-interpreter.github.io/edit/master/docs/07-settings/03-masked.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"Settings Reference",permalink:"/docs/settings/reference"},next:{title:"Gwen CLI",permalink:"/docs/cli"}},d={},m=[{value:"Flagging masked settings",id:"flagging-masked-settings",level:2},{value:"Using masked settings",id:"using-masked-settings",level:2},{value:"Custom mask character",id:"custom-mask-character",level:2}],f={toc:m};function g(e){var t=e.components,n=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"masked-settings"},"Masked Settings"),(0,s.kt)("p",null,"It is a common security practice to never log sensitive data. To support this practice, Gwen will hide all ",(0,s.kt)("a",{parentName:"p",href:"/docs/settings/reference"},"settings"),' that you flag as "masked" by logging their values as ',(0,s.kt)("inlineCode",{parentName:"p"},"*****")," in all logs, reports, error messages and console outputs."),(0,s.kt)("h2",{id:"flagging-masked-settings"},"Flagging masked settings"),(0,s.kt)("p",null,"To flag a setting as masked, append ",(0,s.kt)("inlineCode",{parentName:"p"},":masked")," to its defined name."),(0,s.kt)("p",null,"For example, to mask a custom property named ",(0,s.kt)("inlineCode",{parentName:"p"},"user.password"),", define it as follows in your settings file:"),(0,s.kt)(i.Z,{groupId:"settings",defaultValue:"conf",values:[{label:".conf",value:"conf"},{label:".json",value:"json"},{label:".properties",value:"properties"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"conf",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'  user {\n    "password:masked" = "secret"\n  }\n'))),(0,s.kt)(o.Z,{value:"json",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "user": {\n      "password:masked": "secret"\n    }\n  }\n'))),(0,s.kt)(o.Z,{value:"properties",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-properties"},"  user.password\\:masked = secret\n")),(0,s.kt)("p",null,"  ",(0,s.kt)("em",{parentName:"p"},"Note"),": You will need to escape ",(0,s.kt)("inlineCode",{parentName:"p"},":")," as ",(0,s.kt)("inlineCode",{parentName:"p"},"\\:")," in properties files"))),(0,s.kt)("p",null,"Alternatively, you can pass a masked setting directly to the ",(0,s.kt)("a",{parentName:"p",href:"/docs/cli"},"Gwen CLI")," as a system property if you don't wish to store it in a file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"-Duser.password:masked=secret\n")),(0,s.kt)("h2",{id:"using-masked-settings"},"Using masked settings"),(0,s.kt)("p",null,"To use a masked setting, just reference it anywhere you need to using it's name (excluding the ",(0,s.kt)("inlineCode",{parentName:"p"},":masked")," suffix)."),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-gherkin"},'  When I enter "${user.password}" in the password field\n')),(0,s.kt)("p",null,"When evaluated, the above will be logged as follows in all outputs:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-gherkin"},'  When I enter "*****" in the password field\n')),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"It is your resposibility to enter sensitive data such as passwords into password protected fields to prevent them from being displayed in the browser."))),(0,s.kt)("h2",{id:"custom-mask-character"},"Custom mask character"),(0,s.kt)("p",null,"You can change the default mask character from ",(0,s.kt)("inlineCode",{parentName:"p"},"*")," to another character of your choice by assigning it to the ",(0,s.kt)("a",{parentName:"p",href:"/docs/settings/reference#gwen-mask-char"},(0,s.kt)("inlineCode",{parentName:"a"},"gwen.mask.char"))," setting."))}g.isMDXComponent=!0}}]);