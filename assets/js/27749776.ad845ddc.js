"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9273],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=o(n),m=a,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),a=n(4334),i="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,l),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(3117),a=n(7294),i=n(4334),l=n(2389),u=n(7392),s=n(7094),o=n(2466),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n,l=e.lazy,p=e.block,m=e.defaultValue,g=e.values,k=e.groupId,v=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=g?g:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,u.l)(b,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===m?m:null!=(t=null!=m?m:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:f[0].props.value;if(null!==w&&!b.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.U)(),T=y.tabGroupChoices,x=y.setTabGroupChoices,N=(0,a.useState)(w),O=N[0],L=N[1],Z=[],E=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var S=T[k];null!=S&&S!==O&&b.some((function(e){return e.value===S}))&&L(S)}var _=function(e){var t=e.currentTarget,n=Z.indexOf(t),r=b[n].value;r!==O&&(E(t),L(r),null!=k&&x(k,String(r)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=Z.indexOf(e.currentTarget)+1;n=null!=(r=Z[a])?r:Z[0];break;case"ArrowLeft":var i,l=Z.indexOf(e.currentTarget)-1;n=null!=(i=Z[l])?i:Z[Z.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},v)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return Z.push(e)},onKeyDown:P,onFocus:_,onClick:_},l,{className:(0,i.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(f.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,l.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},5023:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),l=n(9960),u=(n(5488),n(5162),n(4996),["components"]),s={toc_min_heading_level:2,toc_max_heading_level:3},o="Implicit Attributes",c={unversionedId:"advanced/implicit-attributes",id:"advanced/implicit-attributes",title:"Implicit Attributes",description:"The following attributes are implicitly available to all feature and meta files at runtime by reference or interpolation.",source:"@site/docs/11-advanced/06-implicit-attributes.mdx",sourceDirName:"11-advanced",slug:"/advanced/implicit-attributes",permalink:"/docs/advanced/implicit-attributes",draft:!1,editUrl:"https://github.com/gwen-interpreter/gwen-interpreter.github.io/edit/master/docs/11-advanced/06-implicit-attributes.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{toc_min_heading_level:2,toc_max_heading_level:3},sidebar:"tutorialSidebar",previous:{title:"Assertion Modes",permalink:"/docs/advanced/assertion"},next:{title:"Try Steps",permalink:"/docs/advanced/try-steps"}},d={},p=[],m={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"implicit-attributes"},"Implicit Attributes"),(0,i.kt)("p",null,"The following attributes are implicitly available to all feature and meta files at runtime by reference or ",(0,i.kt)("a",{parentName:"p",href:"/docs/advanced/string-interpolation"},"interpolation"),"."),(0,i.kt)("details",{id:"gwen-feature-file-name"},(0,i.kt)("summary",{class:"setting"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"gwen.feature.file.name\n")),(0,i.kt)("p",null,"The current feature file name.")),(0,i.kt)("div",{class:"grid-3"},(0,i.kt)("div",null,(0,i.kt)(l.Z,{to:"#gwen-feature-file-name",mdxType:"Link"},"Link")),(0,i.kt)("div",{align:"center"}),(0,i.kt)("div",{align:"right"},"Since ",(0,i.kt)(l.Z,{to:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v2.12.0",mdxType:"Link"},"v2.12.0")))),(0,i.kt)("details",{id:"gwen-feature-file-path"},(0,i.kt)("summary",{class:"setting"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"gwen.feature.file.path\n")),(0,i.kt)("p",null,"The current feature file path (as provided to Gwen on command line).")),(0,i.kt)("div",{class:"grid-3"},(0,i.kt)("div",null,(0,i.kt)(l.Z,{to:"#gwen-feature-file-path",mdxType:"Link"},"Link")),(0,i.kt)("div",{align:"center"}),(0,i.kt)("div",{align:"right"},"Since ",(0,i.kt)(l.Z,{to:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v2.12.0",mdxType:"Link"},"v2.12.0")))),(0,i.kt)("details",{id:"gwen-feature-file-absolutePath"},(0,i.kt)("summary",{class:"setting"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"gwen.feature.file.absolutePath\n")),(0,i.kt)("p",null,"The current absolute feature file path.")),(0,i.kt)("div",{class:"grid-3"},(0,i.kt)("div",null,(0,i.kt)(l.Z,{to:"#gwen-feature-file-absolutePath",mdxType:"Link"},"Link")),(0,i.kt)("div",{align:"center"}),(0,i.kt)("div",{align:"right"},"Since ",(0,i.kt)(l.Z,{to:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v2.12.0",mdxType:"Link"},"v2.12.0")))),(0,i.kt)("details",{id:"gwen-feature-name"},(0,i.kt)("summary",{class:"setting"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"gwen.feature.name\n")),(0,i.kt)("p",null,"The current feature name (as specified in Feature clause).")),(0,i.kt)("div",{class:"grid-3"},(0,i.kt)("div",null,(0,i.kt)(l.Z,{to:"#gwen-feature-name",mdxType:"Link"},"Link")),(0,i.kt)("div",{align:"center"}),(0,i.kt)("div",{align:"right"},"Since ",(0,i.kt)(l.Z,{to:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v2.12.0",mdxType:"Link"},"v2.12.0")))),(0,i.kt)("details",{id:"gwen-scenario-name"},(0,i.kt)("summary",{class:"setting"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"gwen.scenario.name\n")),(0,i.kt)("p",null,"The current scenario name (as specified in Scenario clause).")),(0,i.kt)("div",{class:"grid-3"},(0,i.kt)("div",null,(0,i.kt)(l.Z,{to:"#gwen-scenario-name",mdxType:"Link"},"Link")),(0,i.kt)("div",{align:"center"}),(0,i.kt)("div",{align:"right"},"Since ",(0,i.kt)(l.Z,{to:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v2.12.0",mdxType:"Link"},"v2.12.0")))),(0,i.kt)("details",{id:"gwen-rule-name"},(0,i.kt)("summary",{class:"setting"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"gwen.rule.name\n")),(0,i.kt)("p",null,"The current rule name (as specified in Rule clause).")),(0,i.kt)("div",{class:"grid-3"},(0,i.kt)("div",null,(0,i.kt)(l.Z,{to:"#gwen-rule-name",mdxType:"Link"},"Link")),(0,i.kt)("div",{align:"center"}),(0,i.kt)("div",{align:"right"},"Since ",(0,i.kt)(l.Z,{to:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v2.21.0",mdxType:"Link"},"v2.21.0")))),(0,i.kt)("details",{id:"gwen-eval-status-keyword"},(0,i.kt)("summary",{class:"setting"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"gwen.eval.status.keyword\n")),(0,i.kt)("p",null,"The current evaluation status (",(0,i.kt)("code",null,"Pending"),", ",(0,i.kt)("code",null,"Failed"),"  or ",(0,i.kt)("code",null,"Sustained"),".")),(0,i.kt)("div",{class:"grid-3"},(0,i.kt)("div",null,(0,i.kt)(l.Z,{to:"#gwen-eval-status-keyword",mdxType:"Link"},"Link")),(0,i.kt)("div",{align:"center"}),(0,i.kt)("div",{align:"right"},"Since ",(0,i.kt)(l.Z,{to:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v3.3.0",mdxType:"Link"},"v3.3.0")))),(0,i.kt)("details",{id:"gwen-eval-status-message"},(0,i.kt)("summary",{class:"setting"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"gwen.eval.status.message\n")),(0,i.kt)("p",null,"The current evaluation status message if the evaluation status is ",(0,i.kt)("code",null,"Failed")," or ",(0,i.kt)("code",null,"Sustained"),", blank otherwise.")),(0,i.kt)("div",{class:"grid-3"},(0,i.kt)("div",null,(0,i.kt)(l.Z,{to:"#gwen-eval-status-message",mdxType:"Link"},"Link")),(0,i.kt)("div",{align:"center"}),(0,i.kt)("div",{align:"right"},"Since ",(0,i.kt)(l.Z,{to:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v3.3.0",mdxType:"Link"},"v3.3.0")))),(0,i.kt)("admonition",{title:"See also",type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Implicit attributes for ",(0,i.kt)("a",{parentName:"li",href:"/docs/advanced/data-tables#implicit-attributes"},"data tables")))))}g.isMDXComponent=!0}}]);