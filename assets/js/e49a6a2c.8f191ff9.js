"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5341],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(4334),i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return S}});var r=n(3117),a=n(7294),i=n(4334),o=n(6775),u=n(1980),l=n(7392),s=n(12);function c(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:c(n);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,i=(0,o.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,u._X)(l),(0,a.useCallback)((function(e){if(l){var t=new URLSearchParams(i.location.search);t.set(l,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[l,i])]}function m(e){var t,n,r,i,o=e.defaultValue,u=e.queryString,l=void 0!==u&&u,c=e.groupId,m=d(e),v=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:m})})),h=v[0],g=v[1],b=f({queryString:l,groupId:c}),y=b[0],w=b[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,s.Nk)(t),r=n[0],i=n[1],[r,(0,a.useCallback)((function(e){t&&i.set(e)}),[t,i])]),S=k[0],D=k[1],x=function(){var e=null!=y?y:S;return p({value:e,tabValues:m})?e:null}();return(0,a.useLayoutEffect)((function(){x&&g(x)}),[x]),{selectedValue:h,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);g(e),w(e),D(e)}),[w,D,m]),tabValues:m}}var v=n(2466),h=n(2389),g="tabList__CuJ",b="tabItem_LNqP";function y(e){var t=e.className,n=e.block,o=e.selectedValue,u=e.selectValue,l=e.tabValues,s=[],c=(0,v.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=s.indexOf(t),r=l[n].value;r!==o&&(c(t),u(r))},p=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=s.indexOf(e.currentTarget)+1;n=null!=(r=s[a])?r:s[0];break;case"ArrowLeft":var i,o=s.indexOf(e.currentTarget)-1;n=null!=(i=s[o])?i:s[s.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},l.map((function(e){var t=e.value,n=e.label,u=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return s.push(e)},onKeyDown:p,onClick:d},u,{className:(0,i.Z)("tabs__item",b,null==u?void 0:u.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function w(e){var t=e.lazy,n=e.children,r=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var i=n.find((function(e){return e.props.value===r}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function k(e){var t=m(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",g)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(w,(0,r.Z)({},e,t)))}function S(e){var t=(0,h.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},8915:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return d}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=(n(9960),n(4866),n(5162),n(4996),["components"]),u={toc_min_heading_level:2,toc_max_heading_level:3},l="Doc Strings",s={unversionedId:"advanced/doc-strings",id:"advanced/doc-strings",title:"Doc Strings",description:"Since v2.9.0",source:"@site/docs/11-advanced/02-doc-strings.mdx",sourceDirName:"11-advanced",slug:"/advanced/doc-strings",permalink:"/docs/advanced/doc-strings",draft:!1,editUrl:"https://github.com/gwen-interpreter/gwen-interpreter.github.io/edit/master/docs/11-advanced/02-doc-strings.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{toc_min_heading_level:2,toc_max_heading_level:3},sidebar:"tutorialSidebar",previous:{title:"String Interpolation",permalink:"/docs/advanced/string-interpolation"},next:{title:"Data Tables",permalink:"/docs/advanced/data-tables"}},c={},d=[{value:"Doc Strings as parameters to StepDefs",id:"doc-strings-as-parameters-to-stepdefs",level:4},{value:"Multiline Text",id:"multiline-text",level:2},{value:"JavaScript Function Bindings",id:"javascript-function-bindings",level:2},{value:"Sample Reports",id:"sample-reports",level:2}],p={toc:d};function f(e){var t=e.components,u=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"doc-strings"},"Doc Strings"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Since ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v2.0.0"},"v2.9.0"))),(0,i.kt)("p",null,"Every step in the Gwen DSL that includes a string literal parameter surrounded by quotes at the end of the step expression can accept a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cucumber.io/gherkin/reference/#doc-strings"},"Doc String")," value."),(0,i.kt)("h4",{id:"doc-strings-as-parameters-to-stepdefs"},"Doc Strings as parameters to StepDefs"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"As of gwen-web v2.53.0 (gwen core v2.34.0), Doc strings can also be passed as parameters to DSL steps and StepDefs too. If the Doc String contains a multi-line value then it can only be passed to parameters that are declared in the Doc-string-able position (that is: string parameters surrounded by quotes declared at the end of the step expression).")),(0,i.kt)("p",null,"This is handy when you want to specify a multiline string literal as the last parameter to a step."),(0,i.kt)("p",null,"Some examples follow.."),(0,i.kt)("h2",{id:"multiline-text"},"Multiline Text"),(0,i.kt)("p",null,"One use case is multiline strings. In the absence of Doc Strings there was no way to pass in multiline strings or paragraphs of text. You can now do this as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gherkin"},'  Given my paragraph is\n       """\n       Gwen is a Gherkin interpreter that turns Given-When-Then steps into automation instructions and executes\n       them for you so you don\'t have to do all the programming work. It has an abstracted evaluation engine\n       allowing any type of automation capability to be built and mixed in. Meta specifications (also expressed\n       in Gherkin) are used to capture automation bindings and allow you to compose step definitions by mapping\n       \'declarative\' steps in features to \'imperative\' steps in engines that perform operations.\n       """\n')),(0,i.kt)("h2",{id:"javascript-function-bindings"},"JavaScript Function Bindings"),(0,i.kt)("p",null,"Another use case is JavaScript bindings. In Gwen, they are limited to one-liner expressions. A work around for working with multiline javascript functions is to wrap the entire script in the body of an anonymous function and invoke it inline."),(0,i.kt)("p",null,"For example, consider the following script that returns the current date in yyyy-mm-dd format."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"(function() {\n  var d = new Date();\n  var year = d.getFullYear();\n  var month = ('0' + (d.getMonth() + 1)).slice(-2);\n  var day = ('0' + d.getDate()).slice(-2);\n  return year + '-' + month + '-' + day;\n})();\n")),(0,i.kt)("p",null,"In the absence of Doc Strings, you would have to compact this to a one-liner expression and use it as follows (which is inelegant and hard to read):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Given the current date is defined by javascript \"(function() {var d = new Date(); var year = d.getFullYear(); var month = ('0' + (d.getMonth() + 1)).slice(-2); var day = ('0' + d.getDate()).slice(-2); return year + '-' + month + '-' + day; })();\"\n")),(0,i.kt)("p",null,"With Doc Strings, you can now do this as follows instead:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gherkin"},"  Given the current date is defined by javascript\n        \"\"\"\n        (function() {\n          var d = new Date();\n          var year = d.getFullYear();\n          var month = ('0' + (d.getMonth() + 1)).slice(-2);\n          var day = ('0' + d.getDate()).slice(-2);\n          return year + '-' + month + '-' + day;\n        })();\n        \"\"\"\n")),(0,i.kt)("h2",{id:"sample-reports"},"Sample Reports"),(0,i.kt)("p",null,"The javascript Doc String in this report includes the optional ",(0,i.kt)("inlineCode",{parentName:"p"},"JavaScript")," content type annotation at the opening triple quotes",(0,i.kt)("inlineCode",{parentName:"p"},'"""'),". Currently, Gwen just renders this literal in grey, but could in future use it for syntax highlighting."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Doc Strings in reports",src:n(5168).Z,width:"1890",height:"1686"})))}f.isMDXComponent=!0},5168:function(e,t,n){t.Z=n.p+"assets/images/doc-strings-in-reports-02b6e2e8ba99f1089f67b5ac69ac3ad0.png"}}]);