"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7965],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||l;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(4334),l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(3117),a=n(7294),l=n(4334),o=n(2389),i=n(7392),u=n(7094),s=n(2466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,o=e.lazy,d=e.block,f=e.defaultValue,m=e.values,v=e.groupId,y=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.l)(h,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===f?f:null!=(t=null!=f?f:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==w&&!h.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,u.U)(),O=k.tabGroupChoices,x=k.setTabGroupChoices,E=(0,a.useState)(w),N=E[0],T=E[1],_=[],j=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var S=O[v];null!=S&&S!==N&&h.some((function(e){return e.value===S}))&&T(S)}var C=function(e){var t=e.currentTarget,n=_.indexOf(t),r=h[n].value;r!==N&&(j(t),T(r),null!=v&&x(v,String(r)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=_.indexOf(e.currentTarget)+1;n=null!=(r=_[a])?r:_[0];break;case"ArrowLeft":var l,o=_.indexOf(e.currentTarget)-1;n=null!=(l=_[o])?l:_[_.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},y)},h.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return _.push(e)},onKeyDown:P,onFocus:C,onClick:C},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(b.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function f(e){var t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},3968:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=n(3117),a=n(102),l=(n(7294),n(3905)),o=(n(9960),n(5488),n(5162),n(4996),["components"]),i={toc_min_heading_level:2,toc_max_heading_level:3},u="Finally Steps",s={unversionedId:"advanced/finally-steps",id:"advanced/finally-steps",title:"Finally Steps",description:"Since v3.3.0",source:"@site/docs/11-advanced/08-finally-steps.mdx",sourceDirName:"11-advanced",slug:"/advanced/finally-steps",permalink:"/docs/advanced/finally-steps",draft:!1,editUrl:"https://github.com/gwen-interpreter/gwen-interpreter.github.io/edit/master/docs/11-advanced/08-finally-steps.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{toc_min_heading_level:2,toc_max_heading_level:3},sidebar:"tutorialSidebar",previous:{title:"Try Steps",permalink:"/docs/advanced/try-steps"},next:{title:"Eager or Lazy Bindings",permalink:"/docs/advanced/eager-or-lazy"}},c={},p=[{value:"@Finally",id:"finally",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"finally-steps"},"Finally Steps"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Since ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v3.3.0"},"v3.3.0"))),(0,l.kt)("h2",{id:"finally"},"@Finally"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"@Finally")," annotation can be used to define steps that should always execute regardless of the current execution status. For example, a step that could potentially be skipped due to an earier step failing can be instructed to execute unconditionally with this annotation."),(0,l.kt)("p",null,"Consider the following example."),(0,l.kt)("admonition",{title:"Finally example",type:"note"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-gherkin",metastring:"{5}","{5}":!0},"  Scenario: Onboard a new user\n    Given I am logged in as administator\n     When I register a new user\n     Then the new user should be able to login\n      And @Finally I log out as administrator\n")),(0,l.kt)("p",{parentName:"admonition"},"The last step in this example is annotated with ",(0,l.kt)("inlineCode",{parentName:"p"},"@Finally")," and will therefore always execute")),(0,l.kt)("p",null,"If any of the preceeding steps (1 to 3) in this example fail or are skipped for whatever reason, then the last step will still execute!"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Only the last step in a parent node (Background, Scenario, Outline, or ",(0,l.kt)("inlineCode",{parentName:"p"},"StepDef"),") can have this annotation.")))}f.isMDXComponent=!0}}]);