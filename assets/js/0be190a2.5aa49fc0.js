"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[61],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,v=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return a?n.createElement(v,l(l({ref:t},d),{},{components:a})):n.createElement(v,l({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8215:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294);function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(3117),r=a(7294),i=a(2389),l=a(662),o=a(6010),c="tabItem_LplD";function s(e){var t,a,i,s=e.lazy,d=e.block,u=e.defaultValue,p=e.values,m=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.lx)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===u?u:null!=(t=null!=u?u:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(i=f[0])?void 0:i.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,l.UB)(),w=k.tabGroupChoices,y=k.setTabGroupChoices,N=(0,r.useState)(g),T=N[0],x=N[1],O=[],E=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var D=w[m];null!=D&&D!==T&&h.some((function(e){return e.value===D}))&&x(D)}var S=function(e){var t=e.currentTarget,a=O.indexOf(t),n=h[a].value;n!==T&&(E(t),x(n),null!=m&&y(m,n))},_=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=O.indexOf(e.currentTarget)+1;a=O[n]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;a=O[r]||O[O.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},v)},h.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return O.push(e)},onKeyDown:_,onFocus:S,onClick:S},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),s?(0,r.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,i.Z)();return r.createElement(s,(0,n.Z)({key:String(t)},e))}},6667:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return p}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),l=a(9960),o=(a(9877),a(8215),a(4996),["components"]),c={toc_min_heading_level:2,toc_max_heading_level:3},s="Data Tables",d={unversionedId:"advanced/data-tables",id:"advanced/data-tables",title:"Data Tables",description:"@DataTable and @ForEach",source:"@site/docs/11-advanced/01-data-tables.mdx",sourceDirName:"11-advanced",slug:"/advanced/data-tables",permalink:"/docs/advanced/data-tables",editUrl:"https://github.com/gwen-interpreter/gwen-interpreter.github.io/edit/master/docs/11-advanced/01-data-tables.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{toc_min_heading_level:2,toc_max_heading_level:3},sidebar:"tutorialSidebar",previous:{title:"Report Portal",permalink:"/docs/reports/portal"},next:{title:"Finally Steps",permalink:"/docs/advanced/finally-steps"}},u={},p=[{value:"@DataTable and @ForEach",id:"datatable-and-foreach",level:2},{value:"Implicit attributes",id:"implicit-attributes",level:3}],m={toc:p};function v(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"data-tables"},"Data Tables"),(0,i.kt)("h2",{id:"datatable-and-foreach"},"@DataTable and @ForEach"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Since ",(0,i.kt)(l.Z,{to:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v2.47.0",mdxType:"Link"},"v2.47.0"))),(0,i.kt)("p",null,"Consider the following example step containing a ",(0,i.kt)("a",{parentName:"p",href:"https://cucumber.io/docs/gherkin/reference#data-tables"},"data table"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Feature step with data table")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-gherkin"},"  When the following items are added\n       | Item          |\n       | Get the milk  |\n       | Walk the dog  |\n")),(0,i.kt)("p",{parentName:"div"},"This example defines a single column table containing a header followed by two entries."))),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"/docs/meta#stepdefs"},"StepDef")," could be defined to process each row of data in the table as follows:"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"StepDef for processing data table")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-gherkin",metastring:"{2-3,7-8}","{2-3,7-8}":!0},'  @StepDef\n  @DataTable\n  @ForEach\n  Scenario: the following items are added\n    Given the todo field can be located by class "new-todo"\n      And my todo list can be located by css ".todo-list"\n     When I enter Item in the todo field\n     Then my todo list should contain Item\n')),(0,i.kt)("p",{parentName:"div"},"This ",(0,i.kt)("inlineCode",{parentName:"p"},"StepDef")," will be executed for each row of data in the table (2 times in this example)"))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@DataTable")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@ForEach")," annotations work together to process each record in the data table. When the feature step is evaluated, Gwen will call the StepDef for each record in the table and bind each field value to its declared name in the header record. The last two steps in this example will enter each ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," into a ",(0,i.kt)("inlineCode",{parentName:"p"},"todo field")," and check that it was added to ",(0,i.kt)("inlineCode",{parentName:"p"},"my todo list"),". "),(0,i.kt)("h3",{id:"implicit-attributes"},"Implicit attributes"),(0,i.kt)("p",null,"The following attributes are also implicitly available to data table StepDefs:"),(0,i.kt)("details",{id:"record-number"},(0,i.kt)("summary",{class:"setting"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"record.number\n")),(0,i.kt)("p",null,"The current record number (first is 1)")),(0,i.kt)("div",{class:"grid-3"},(0,i.kt)("div",null,(0,i.kt)(l.Z,{to:"#record-number",mdxType:"Link"},"Link")),(0,i.kt)("div",{align:"center"}),(0,i.kt)("div",{align:"right"},"Since ",(0,i.kt)(l.Z,{to:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v2.47.0",mdxType:"Link"},"v2.47.0")))),(0,i.kt)("details",{id:"record-index"},(0,i.kt)("summary",{class:"setting"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"record.index\n")),(0,i.kt)("p",null,"The current record index (first is 0)")),(0,i.kt)("div",{class:"grid-3"},(0,i.kt)("div",null,(0,i.kt)(l.Z,{to:"#record-index",mdxType:"Link"},"Link")),(0,i.kt)("div",{align:"center"}),(0,i.kt)("div",{align:"right"},"Since ",(0,i.kt)(l.Z,{to:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v2.30.1",mdxType:"Link"},"v2.30.1")))))}v.isMDXComponent=!0}}]);