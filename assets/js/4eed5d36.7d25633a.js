"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9973],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(u,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(3117),r=n(7294),l=n(2389),i=n(662),o=n(6010),u="tabItem_LplD";function c(e){var t,n,l,c=e.lazy,s=e.block,p=e.defaultValue,m=e.values,d=e.groupId,h=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.lx)(f,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,i.UB)(),y=k.tabGroupChoices,w=k.setTabGroupChoices,N=(0,r.useState)(b),x=N[0],T=N[1],O=[],C=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var E=y[d];null!=E&&E!==x&&f.some((function(e){return e.value===E}))&&T(E)}var j=function(e){var t=e.currentTarget,n=O.indexOf(t),a=f[n].value;a!==x&&(C(t),T(a),null!=d&&w(d,a))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},h)},f.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return O.push(e)},onKeyDown:I,onFocus:j,onClick:j},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),c?(0,r.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function s(e){var t=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},6098:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),i=(n(9960),n(9877),n(8215),n(4996),["components"]),o={toc_min_heading_level:2,toc_max_heading_level:3},u="Template Matching",c={unversionedId:"advanced/template-matching",id:"advanced/template-matching",title:"Template Matching",description:"Template matching allow users to compare any source content with a target template that can either be specified as a text literal or text stored in a file, and perform extract, ignore, and inject operations at the same time.",source:"@site/docs/11-advanced/09-template-matching.mdx",sourceDirName:"11-advanced",slug:"/advanced/template-matching",permalink:"/docs/advanced/template-matching",editUrl:"https://github.com/gwen-interpreter/gwen-interpreter.github.io/edit/master/docs/11-advanced/09-template-matching.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{toc_min_heading_level:2,toc_max_heading_level:3},sidebar:"tutorialSidebar",previous:{title:"String Interpolation",permalink:"/docs/advanced/string-interpolation"},next:{title:"Context Sensative Actions",permalink:"/docs/advanced/context-sensative-actions"}},s={},p=[{value:"Examples",id:"examples",level:2},{value:"Match and Ignore",id:"match-and-ignore",level:2},{value:"Match, Ignore, and Extract",id:"match-ignore-and-extract",level:2},{value:"Match, Ignore, Extract, and Inject",id:"match-ignore-extract-and-inject",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"template-matching"},"Template Matching"),(0,l.kt)("p",null,"Template matching allow users to compare any source content with a target template that can either be specified as a text literal or text stored in a file, and perform extract, ignore, and inject operations at the same time."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"The following examples assume that the following JSON value is bound to an attribute named ",(0,l.kt)("inlineCode",{parentName:"p"},"my value")," in the currently available scope:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'{"id":42,"category":{"name":"pet"},"name":"tiger","status":"available"}'))),(0,l.kt)("p",null,"Templates can contain JSON, XML, HTML, or any type of text and can also have multiple lines. The examples below use single-line JSON only."),(0,l.kt)("h2",{id:"match-and-ignore"},"Match and Ignore"),(0,l.kt)("p",null,"The following example will successfully match ",(0,l.kt)("inlineCode",{parentName:"p"},"my value")," and:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Ignore the ",(0,l.kt)("inlineCode",{parentName:"li"},"id")," value where ",(0,l.kt)("inlineCode",{parentName:"li"},"!{}")," appears")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-gherkin"},'  Then my value should match template\n       """\n       {"id":!{},"category":{"name":"pet"},"name":"tiger","status":"available"}\n       """\n')),(0,l.kt)("h2",{id:"match-ignore-and-extract"},"Match, Ignore, and Extract"),(0,l.kt)("p",null,"The following example will successfully match ",(0,l.kt)("inlineCode",{parentName:"p"},"my value")," and:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Ignore the ",(0,l.kt)("inlineCode",{parentName:"li"},"id")," value where ",(0,l.kt)("inlineCode",{parentName:"li"},"!{}")," appears"),(0,l.kt)("li",{parentName:"ul"},"Extract the ",(0,l.kt)("inlineCode",{parentName:"li"},"tiger")," value where ",(0,l.kt)("inlineCode",{parentName:"li"},"@{pet name}")," appears and bind it to the attribute named ",(0,l.kt)("inlineCode",{parentName:"li"},"pet name")," in the feature scope")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-gherkin"},'  Then my value should match template\n       """\n       {"id":!{},"category":{"name":"pet"},"name":"@{pet name}","status":"available"}\n       """\n')),(0,l.kt)("p",null,"Subsequent steps can access the extracted ",(0,l.kt)("inlineCode",{parentName:"p"},"pet name")," attribute like any other Gwen binding. For example, the following checks it's value:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-gherkin"},'  And pet name should be "tiger"\n')),(0,l.kt)("h2",{id:"match-ignore-extract-and-inject"},"Match, Ignore, Extract, and Inject"),(0,l.kt)("p",null,"The following example will successfully match ",(0,l.kt)("inlineCode",{parentName:"p"},"my value")," and:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Ignore the ",(0,l.kt)("inlineCode",{parentName:"li"},"id")," value where ",(0,l.kt)("inlineCode",{parentName:"li"},"!{}")," appears"),(0,l.kt)("li",{parentName:"ul"},"Extract the ",(0,l.kt)("inlineCode",{parentName:"li"},"tiger")," value where ",(0,l.kt)("inlineCode",{parentName:"li"},"@{pet name}")," appears and bind it to the attribute named ",(0,l.kt)("inlineCode",{parentName:"li"},"pet name")," in the feature scope"),(0,l.kt)("li",{parentName:"ul"},"Inject the value bound to the ",(0,l.kt)("inlineCode",{parentName:"li"},"my status")," attribute into the template where ",(0,l.kt)("inlineCode",{parentName:"li"},"${my status}")," appears.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-gherkin"},'  Given my status is "available"\n   Then my value should match template\n        """\n        {"id":!{},"category":{"name":"pet"},"name":"@{pet name}","status":"${my status}"}\n        """\n    And pet name should be "tiger"\n')))}d.isMDXComponent=!0}}]);