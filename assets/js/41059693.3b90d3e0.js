"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2394],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return c}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(t),c=r,f=p["".concat(s,".").concat(c)]||p[c]||m[c]||i;return t?a.createElement(f,o(o({ref:n},u),{},{components:t})):a.createElement(f,o({ref:n},u))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(7294),r=t(4334),i="tabItem_Ymn6";function o(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:t},n)}},5488:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(3117),r=t(7294),i=t(4334),o=t(2389),l=t(7392),s=t(7094),d=t(2466),u="tabList__CuJ",m="tabItem_LNqP";function p(e){var n,t,o=e.lazy,p=e.block,c=e.defaultValue,f=e.values,b=e.groupId,h=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,l.l)(y,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(n=null!=c?c:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:v[0].props.value;if(null!==g&&!y.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),w=N.tabGroupChoices,x=N.setTabGroupChoices,C=(0,r.useState)(g),E=C[0],T=C[1],j=[],O=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var z=w[b];null!=z&&z!==E&&y.some((function(e){return e.value===z}))&&T(z)}var D=function(e){var n=e.currentTarget,t=j.indexOf(n),a=y[t].value;a!==E&&(O(n),T(a),null!=b&&x(b,String(a)))},_=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,r=j.indexOf(e.currentTarget)+1;t=null!=(a=j[r])?a:j[0];break;case"ArrowLeft":var i,o=j.indexOf(e.currentTarget)-1;t=null!=(i=j[o])?i:j[j.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},h)},y.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,key:n,ref:function(e){return j.push(e)},onKeyDown:_,onFocus:D,onClick:D},o,{className:(0,i.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":E===n})}),null!=t?t:n)}))),o?(0,r.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function c(e){var n=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(n)},e))}},8068:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=t(3117),r=t(102),i=(t(7294),t(3905)),o=t(9960),l=(t(5488),t(5162),t(4996),["components"]),s={toc_min_heading_level:2,toc_max_heading_level:3},d="Eager or Lazy Bindings",u={unversionedId:"advanced/eager-or-lazy",id:"advanced/eager-or-lazy",title:"Eager or Lazy Bindings",description:"@Eager and @Lazy annotations can be used on the following DSL steps to control when expressions are evaluated and bound to names. In the absence of either annotation, expressions will be evaluated every time they are referenced by name.",source:"@site/docs/11-advanced/09-eager-or-lazy.mdx",sourceDirName:"11-advanced",slug:"/advanced/eager-or-lazy",permalink:"/docs/advanced/eager-or-lazy",draft:!1,editUrl:"https://github.com/gwen-interpreter/gwen-interpreter.github.io/edit/master/docs/11-advanced/09-eager-or-lazy.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{toc_min_heading_level:2,toc_max_heading_level:3},sidebar:"tutorialSidebar",previous:{title:"Finally Steps",permalink:"/docs/advanced/finally-steps"},next:{title:"Context Sensative Actions",permalink:"/docs/advanced/context-sensative-actions"}},m={},p=[{value:"@Eager",id:"eager",level:2},{value:"@Lazy",id:"lazy",level:2},{value:"Default (ephemeral)",id:"default-ephemeral",level:2}],c={toc:p};function f(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"eager-or-lazy-bindings"},"Eager or Lazy Bindings"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@Eager")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@Lazy")," annotations can be used on the following DSL steps to control when expressions are evaluated and bound to names. In the absence of either annotation, expressions will be evaluated every time they are referenced by name."),(0,i.kt)("h2",{id:"eager"},"@Eager"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Since ",(0,i.kt)(o.Z,{to:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v3.9.0",mdxType:"Link"},"v3.9.0"))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@Eager")," annotation can be used to immediately evaluate and bind the result an expression to a name. The eagerly bound value is instantly returned whenever the name is referenced."),(0,i.kt)("admonition",{title:"Eager example",type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-gherkin",metastring:"{1}","{1}":!0},'  Given @Eager time is defined by js "new Date().getTime()"\n   When I capture time as time 1\n    And I capture time as time 2 \n   Then time 1 should be "${time 2}"\n')),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"time 1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"time 2")," will have the same value since ",(0,i.kt)("inlineCode",{parentName:"p"},"time")," is evaluated and bound immediately at step 1.")),(0,i.kt)("h2",{id:"lazy"},"@Lazy"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Since ",(0,i.kt)(o.Z,{to:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v3.9.0",mdxType:"Link"},"v3.9.0"))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@Lazy")," annotation can be used to evaluate and bind the result an expression to a name when that name is first referenced. The lazily bound value is returned whenever the name is referenced thereafter."),(0,i.kt)("admonition",{title:"Eager example",type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-gherkin",metastring:"{1,2}","{1,2}":!0},'  Given @Lazy time is defined by js "new Date().getTime()"\n   When I capture time as time 1\n    And I capture time as time 2 \n   Then time 1 should be "${time 2}"\n')),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"time 1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"time 2")," will have the same value since ",(0,i.kt)("inlineCode",{parentName:"p"},"time")," is bound and evaluated when it is first referenced.")),(0,i.kt)("h2",{id:"default-ephemeral"},"Default (ephemeral)"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Since ",(0,i.kt)(o.Z,{to:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v1.0.0",mdxType:"Link"},"v1.0.0"))),(0,i.kt)("p",null,"In the absence of either annoation, the expression will be unconditionally evaluated every time the name is referenced. This is the default behavior."),(0,i.kt)("admonition",{title:"Eager example",type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-gherkin",metastring:"{2-3}","{2-3}":!0},'  Given time is defined by js "new Date().getTime()"\n   When I capture time as time 1\n    And I capture time as time 2 \n   Then time 1 should not be "${time 2}"\n')),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"time 1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"time 2")," will have different values since ",(0,i.kt)("inlineCode",{parentName:"p"},"time")," is evaluated, bound and discarded at steps 2 and 3."),(0,i.kt)("h2",{parentName:"admonition",id:"dsls"},"DSLs"),(0,i.kt)("p",{parentName:"admonition"},"The following DSLs support eager or lazy bindngs:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/dsl/reference#name-is-defined-by-javascript-expression"},(0,i.kt)("inlineCode",{parentName:"a"},'<name> is defined by <javascript|js> "<expression>"'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/dsl/reference#name-is-defined-by-js-function-applied-to-arg"},(0,i.kt)("inlineCode",{parentName:"a"},'<name> is defined by <javascriptRef> applied to "<argument>"'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/dsl/reference#name-is-defined-by-js-function-applied-to-args-delimited-by"},(0,i.kt)("inlineCode",{parentName:"a"},'<name> is defined by <javascriptRef> applied to "<arguments>" delimited by "<delimiter>"'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/dsl/reference#name-is-defined-in-text-ref-by-regex-expression"},(0,i.kt)("inlineCode",{parentName:"a"},'<name> is defined in <textRef> by regex "<expression>"'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/dsl/reference#name-is-defined-by-the-node-type-in-xml-ref-by-xpath-expression"},(0,i.kt)("inlineCode",{parentName:"a"},'<name> is defined by the <nodeType> in <xmlRef> by xpath "<expression>"'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/dsl/reference#name-is-defined-in-json-ref-by-json-path-expression"},(0,i.kt)("inlineCode",{parentName:"a"},'<name> is defined in <jsonRef> by json path "<expression>"'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/dsl/reference#name-is-defined-by-system-process-expression"},(0,i.kt)("inlineCode",{parentName:"a"},'<name> is defined by system process "<expression>"'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/dsl/reference#name-is-defined-by-system-process-expression-delimited-by-delimiters"},(0,i.kt)("inlineCode",{parentName:"a"},'<name> is defined by system process "<expression>" delimited by "<delimiters>"'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/dsl/reference#name-is-defined-by-unix-system-process-expression"},(0,i.kt)("inlineCode",{parentName:"a"},'<name> is defined by unix system process "<expression>"'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/dsl/reference#name-is-defined-by-file"},(0,i.kt)("inlineCode",{parentName:"a"},'<name> is defined by file "<filepath>"'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/dsl/reference#name-is-defined-by-database-select-statement"},(0,i.kt)("inlineCode",{parentName:"a"},'<name> is defined in the <dbName> database by sql "<selectStmt>"'))))))}f.isMDXComponent=!0}}]);