"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4053],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,v=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(v,o(o({ref:t},p),{},{components:n})):r.createElement(v,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2360:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(6010),i="tabItem_OmH5";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(3117),a=n(7294),i=n(2389),o=n(7392),l=n(7094),u=n(2466),s=n(6010),p="tabList_uSqn",c="tabItem_LplD";function m(e){var t,n,i,m=e.lazy,d=e.block,v=e.defaultValue,f=e.values,b=e.groupId,y=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,o.l)(g,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===v?v:null!=(t=null!=v?v:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=h[0])?void 0:i.props.value;if(null!==N&&!g.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),O=w.tabGroupChoices,E=w.setTabGroupChoices,x=(0,a.useState)(N),S=x[0],T=x[1],I=[],C=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var _=O[b];null!=_&&_!==S&&g.some((function(e){return e.value===_}))&&T(_)}var j=function(e){var t=e.currentTarget,n=I.indexOf(t),r=g[n].value;r!==S&&(C(t),T(r),null!=b&&E(b,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=I.indexOf(e.currentTarget)+1;n=I[r]||I[0];break;case"ArrowLeft":var a=I.indexOf(e.currentTarget)-1;n=I[a]||I[I.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},y)},g.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return I.push(e)},onKeyDown:P,onFocus:j,onClick:j},i,{className:(0,s.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),m?(0,a.cloneElement)(h.filter((function(e){return e.props.value===S}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function d(e){var t=(0,i.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},3876:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=(n(9960),n(9877),n(2360),n(4996),["components"]),l={toc_min_heading_level:2,toc_max_heading_level:3},u="String Interpolation",s={unversionedId:"advanced/string-interpolation",id:"advanced/string-interpolation",title:"String Interpolation",description:"It is often useful to reference provided properties, captured values, and string literals throughout your features. Gwen provides two interpolation mechanisms for doing this:",source:"@site/docs/11-advanced/08-string-interpolation.mdx",sourceDirName:"11-advanced",slug:"/advanced/string-interpolation",permalink:"/docs/advanced/string-interpolation",draft:!1,editUrl:"https://github.com/gwen-interpreter/gwen-interpreter.github.io/edit/master/docs/11-advanced/08-string-interpolation.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{toc_min_heading_level:2,toc_max_heading_level:3},sidebar:"tutorialSidebar",previous:{title:"State Levels",permalink:"/docs/advanced/state-levels"},next:{title:"Template Matching",permalink:"/docs/advanced/template-matching"}},p={},c=[{value:"Named Values",id:"named-values",level:4},{value:"Examples",id:"examples",level:2},{value:"Interpolation by Substitution",id:"interpolation-by-substitution",level:3},{value:"Interpolation by Concatenation",id:"interpolation-by-concatenation",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"string-interpolation"},"String Interpolation"),(0,i.kt)("p",null,"It is often useful to reference provided properties, captured values, and string literals throughout your features. Gwen provides two interpolation mechanisms for doing this:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#interpolation-by-substitution"},"Substitution")," (recommended approach)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#interpolation-by-concatenation"},"Concatenation"))),(0,i.kt)("p",null,"Interpolation occurs in the interpreter on every step in a feature before it is passed to Gwen for execution."),(0,i.kt)("h4",{id:"named-values"},"Named Values"),(0,i.kt)("p",null,"For interpolation purposes, a named value can be any one of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An environment variable (since gwen-web 2.36.0)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"example: ",(0,i.kt)("inlineCode",{parentName:"li"},"${env.USER}")," for the ",(0,i.kt)("inlineCode",{parentName:"li"},"USER")," variable"))),(0,i.kt)("li",{parentName:"ul"},"A system property",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Passed to Gwen through a ",(0,i.kt)("inlineCode",{parentName:"li"},"-D")," ",(0,i.kt)("a",{parentName:"li",href:"/docs/cli#system-properties-and-jvm-options"},"JVM argument")))),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("a",{parentName:"li",href:"/docs/settings"},"Gwen setting")),(0,i.kt)("li",{parentName:"ul"},"A launch property",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A property in a properties file passed to Gwen through the ",(0,i.kt)("a",{parentName:"li",href:"/docs/cli#gwen-cli-options-conf"},"config launch option")))),(0,i.kt)("li",{parentName:"ul"},"A bound attribute",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"An attribute bound in the local, global, or current data scope")))),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"In the examples below.."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"my.property")," is a property"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"my mechanism")," is an attribute assigned to a literal")),(0,i.kt)("h3",{id:"interpolation-by-substitution"},"Interpolation by Substitution"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This is the recommended interpolation approach")),(0,i.kt)("p",null,"Substitution involves replacing named value placeholders with their values."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gherkin"},' Feature: String Interpolation\n\nScenario: By Substitution\n    \n    Given my mechanism is "substitution"\n      And my value is "${my.property}"\n      And my proposition is "By ${my mechanism}, my value is ${my value}"\n     Then my proposition should be "By substitution, my value is ${my.property}"\n')),(0,i.kt)("h3",{id:"interpolation-by-concatenation"},"Interpolation by Concatenation"),(0,i.kt)("p",null,"Concatenation involves joining string literals and named values together."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gherkin"},' Feature: String Interpolation\n\nScenario: By Concatenation\n    \n    Given my mechanism is "concatenation"\n      And my value is "" + my.property\n      And my proposition is "By " + my mechanism + ", my value is " + my value\n     Then my proposition should be "By concatenation, my value is " + my.property\n')))}d.isMDXComponent=!0}}]);