"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5341],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(6010),i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(3117),a=n(7294),i=n(6010),o=n(2389),s=n(7392),l=n(7094),u=n(2466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,o=e.lazy,d=e.block,m=e.defaultValue,f=e.values,v=e.groupId,h=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,s.l)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),D=w.tabGroupChoices,S=w.setTabGroupChoices,x=(0,a.useState)(k),O=x[0],N=x[1],j=[],T=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var E=D[v];null!=E&&E!==O&&b.some((function(e){return e.value===E}))&&N(E)}var _=function(e){var t=e.currentTarget,n=j.indexOf(t),r=b[n].value;r!==O&&(T(t),N(r),null!=v&&S(v,String(r)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=j.indexOf(e.currentTarget)+1;n=null!=(r=j[a])?r:j[0];break;case"ArrowLeft":var i,o=j.indexOf(e.currentTarget)-1;n=null!=(i=j[o])?i:j[j.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},h)},b.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return j.push(e)},onKeyDown:P,onFocus:_,onClick:_},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},8915:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=(n(9960),n(5488),n(5162),n(4996),["components"]),s={toc_min_heading_level:2,toc_max_heading_level:3},l="Doc Strings",u={unversionedId:"advanced/doc-strings",id:"advanced/doc-strings",title:"Doc Strings",description:"Since v2.9.0",source:"@site/docs/11-advanced/02-doc-strings.mdx",sourceDirName:"11-advanced",slug:"/advanced/doc-strings",permalink:"/docs/advanced/doc-strings",draft:!1,editUrl:"https://github.com/gwen-interpreter/gwen-interpreter.github.io/edit/master/docs/11-advanced/02-doc-strings.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{toc_min_heading_level:2,toc_max_heading_level:3},sidebar:"tutorialSidebar",previous:{title:"String Interpolation",permalink:"/docs/advanced/string-interpolation"},next:{title:"Data Tables",permalink:"/docs/advanced/data-tables"}},c={},p=[{value:"Doc Strings as parameters to StepDefs",id:"doc-strings-as-parameters-to-stepdefs",level:4},{value:"Multiline Text",id:"multiline-text",level:2},{value:"JavaScript Function Bindings",id:"javascript-function-bindings",level:2},{value:"Sample Reports",id:"sample-reports",level:2}],d={toc:p};function m(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"doc-strings"},"Doc Strings"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Since ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v2.0.0"},"v2.9.0"))),(0,i.kt)("p",null,"Every step in the Gwen DSL that includes a string literal parameter surrounded by quotes at the end of the step expression can accept a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cucumber.io/gherkin/reference/#doc-strings"},"Doc String")," value."),(0,i.kt)("h4",{id:"doc-strings-as-parameters-to-stepdefs"},"Doc Strings as parameters to StepDefs"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"As of gwen-web v2.53.0 (gwen core v2.34.0), Doc strings can also be passed as parameters to DSL steps and StepDefs too. If the Doc String contains a multi-line value then it can only be passed to parameters that are declared in the Doc-string-able position (that is: string parameters surrounded by quotes declared at the end of the step expression).")),(0,i.kt)("p",null,"This is handy when you want to specify a multiline string literal as the last parameter to a step."),(0,i.kt)("p",null,"Some examples follow.."),(0,i.kt)("h2",{id:"multiline-text"},"Multiline Text"),(0,i.kt)("p",null,"One use case is multiline strings. In the absence of Doc Strings there was no way to pass in multiline strings or paragraphs of text. You can now do this as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gherkin"},'  Given my paragraph is\n       """\n       Gwen is a Gherkin interpreter that turns Given-When-Then steps into automation instructions and executes\n       them for you so you don\'t have to do all the programming work. It has an abstracted evaluation engine\n       allowing any type of automation capability to be built and mixed in. Meta specifications (also expressed\n       in Gherkin) are used to capture automation bindings and allow you to compose step definitions by mapping\n       \'declarative\' steps in features to \'imperative\' steps in engines that perform operations.\n       """\n')),(0,i.kt)("h2",{id:"javascript-function-bindings"},"JavaScript Function Bindings"),(0,i.kt)("p",null,"Another use case is JavaScript bindings. In Gwen, they are limited to one-liner expressions. A work around for working with multiline javascript functions is to wrap the entire script in the body of an anonymous function and invoke it inline."),(0,i.kt)("p",null,"For example, consider the following script that returns the current date in yyyy-mm-dd format."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"(function() {\n  var d = new Date();\n  var year = d.getFullYear();\n  var month = ('0' + (d.getMonth() + 1)).slice(-2);\n  var day = ('0' + d.getDate()).slice(-2);\n  return year + '-' + month + '-' + day;\n})();\n")),(0,i.kt)("p",null,"In the absence of Doc Strings, you would have to compact this to a one-liner expression and use it as follows (which is inelegant and hard to read):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Given the current date is defined by javascript \"(function() {var d = new Date(); var year = d.getFullYear(); var month = ('0' + (d.getMonth() + 1)).slice(-2); var day = ('0' + d.getDate()).slice(-2); return year + '-' + month + '-' + day; })();\"\n")),(0,i.kt)("p",null,"With Doc Strings, you can now do this as follows instead:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gherkin"},"  Given the current date is defined by javascript\n        \"\"\"\n        (function() {\n          var d = new Date();\n          var year = d.getFullYear();\n          var month = ('0' + (d.getMonth() + 1)).slice(-2);\n          var day = ('0' + d.getDate()).slice(-2);\n          return year + '-' + month + '-' + day;\n        })();\n        \"\"\"\n")),(0,i.kt)("h2",{id:"sample-reports"},"Sample Reports"),(0,i.kt)("p",null,"The javascript Doc String in this report includes the optional ",(0,i.kt)("inlineCode",{parentName:"p"},"JavaScript")," content type annotation at the opening triple quotes",(0,i.kt)("inlineCode",{parentName:"p"},'"""'),". Currently, Gwen just renders this literal in grey, but could in future use it for syntax highlighting."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Doc Strings in reports",src:n(5168).Z,width:"1890",height:"1686"})))}m.isMDXComponent=!0},5168:function(e,t,n){t.Z=n.p+"assets/images/doc-strings-in-reports-02b6e2e8ba99f1089f67b5ac69ac3ad0.png"}}]);