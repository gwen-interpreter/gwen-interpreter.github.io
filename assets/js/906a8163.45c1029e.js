"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2048],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(3117),a=n(7294),o=n(2389),i=n(662),l=n(6010),u="tabItem_LplD";function s(e){var t,n,o,s=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=g[0])?void 0:o.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,i.UB)(),k=w.tabGroupChoices,y=w.setTabGroupChoices,N=(0,a.useState)(b),O=N[0],j=N[1],C=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=k[m];null!=T&&T!==O&&v.some((function(e){return e.value===T}))&&j(T)}var x=function(e){var t=e.currentTarget,n=C.indexOf(t),r=v[n].value;r!==O&&(E(t),j(r),null!=m&&y(m,r))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=C.indexOf(e.currentTarget)+1;n=C[r]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.currentTarget)-1;n=C[a]||C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},f)},v.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return C.push(e)},onKeyDown:S,onFocus:x,onClick:x},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function c(e){var t=(0,o.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},7835:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=(n(9960),n(9877),n(8215),n(4996),["components"]),l={slug:"/gwen3",toc_min_heading_level:2,toc_max_heading_level:3},u="Gwen 3 Release",s={unversionedId:"gwen3/gwen3",id:"gwen3/gwen3",title:"Gwen 3 Release",description:"What's New",source:"@site/docs/14-gwen3/01-gwen3.mdx",sourceDirName:"14-gwen3",slug:"/gwen3",permalink:"/docs/gwen3",editUrl:"https://github.com/gwen-interpreter/gwen-interpreter.github.io/edit/master/docs/14-gwen3/01-gwen3.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/gwen3",toc_min_heading_level:2,toc_max_heading_level:3},sidebar:"tutorialSidebar",previous:{title:"Jenkins",permalink:"/docs/jenkins"},next:{title:"Migration",permalink:"/docs/gwen3/migration"}},c={},p=[{value:"What&#39;s New",id:"whats-new",level:2},{value:"Add Gwen to JS projects and shift left",id:"add-gwen-to-js-projects-and-shift-left",level:3},{value:"<code>Init</code> project command",id:"init-project-command",level:3},{value:"HOCON and JSON settings",id:"hocon-and-json-settings",level:3},{value:"Better defaults for better Gherkin",id:"better-defaults-for-better-gherkin",level:3},{value:"Pretty logging",id:"pretty-logging",level:3},{value:"New CLI option for verbose logging",id:"new-cli-option-for-verbose-logging",level:4},{value:"Configurable CLI options",id:"configurable-cli-options",level:3},{value:"Selenium 4",id:"selenium-4",level:3},{value:"What&#39;s dropped",id:"whats-dropped",level:2},{value:"Migration guide",id:"migration-guide",level:2}],d={toc:p};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gwen-3-release"},"Gwen 3 Release"),(0,o.kt)("h2",{id:"whats-new"},"What's New"),(0,o.kt)("h3",{id:"add-gwen-to-js-projects-and-shift-left"},"Add Gwen to JS projects and shift left"),(0,o.kt)("p",null,"You can now ",(0,o.kt)("a",{parentName:"p",href:"/docs/get-started"},"add Gwen to JS projects")," using npm and have all your executable Gherkin living next to your code and integrated into your development and testing process."),(0,o.kt)("p",null,"Thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Sorixelle"},"Jacob Juric")," for building ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gwen-interpreter/gwen-web-npm"},"gwen-web-npm"),"."),(0,o.kt)("h3",{id:"init-project-command"},(0,o.kt)("inlineCode",{parentName:"h3"},"Init")," project command"),(0,o.kt)("p",null,"A new ",(0,o.kt)("a",{parentName:"p",href:"/docs/cli#init-command"},(0,o.kt)("inlineCode",{parentName:"a"},"gwen init"))," command initialises Gwen in your project directory by creating the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Project, browser, and environment level settings files"),(0,o.kt)("li",{parentName:"ul"},"Feature and meta subdirectories"),(0,o.kt)("li",{parentName:"ul"},"Sample feature and meta files")),(0,o.kt)("h3",{id:"hocon-and-json-settings"},"HOCON and JSON settings"),(0,o.kt)("p",null,"Two new ",(0,o.kt)("a",{parentName:"p",href:"/docs/settings"},"settings")," formats are now supported in addition to properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lightbend/config/blob/master/HOCON.md#hocon-human-optimized-config-object-notation"},"HOCON")," (Human-Optimized Config Object Notation)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"A superset of JSON"))),(0,o.kt)("li",{parentName:"ul"},"JSON",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Pure JSON format")))),(0,o.kt)("h3",{id:"better-defaults-for-better-gherkin"},"Better defaults for better Gherkin"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/settings/reference#gwen-feature-mode"},(0,o.kt)("inlineCode",{parentName:"a"},"gwen.feature.mode"))," setting now defaults to ",(0,o.kt)("em",{parentName:"p"},"declarative")," instead of ",(0,o.kt)("em",{parentName:"p"},"imperative")," to keep DSL steps confined to meta and out of feature specifications."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/settings/reference#gwen-behavior-rules"},(0,o.kt)("inlineCode",{parentName:"a"},"gwen.behavior.rules"))," setting now defaults to ",(0,o.kt)("em",{parentName:"p"},"strict")," instead of ",(0,o.kt)("em",{parentName:"p"},"lenient")," to enforce correct behavioral semantics and Given-When-Then order in all feature scenarios."),(0,o.kt)("h3",{id:"pretty-logging"},"Pretty logging"),(0,o.kt)("p",null,"Gwen now logs pretty execution results to the console."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Example pretty log",src:n(7461).Z,width:"1654",height:"654"})),(0,o.kt)("h4",{id:"new-cli-option-for-verbose-logging"},"New CLI option for verbose logging"),(0,o.kt)("p",null,"Use the new ",(0,o.kt)("inlineCode",{parentName:"p"},"-v|--verbose")," CLI option for verbose logging instead (equivalent to Gwen 2 logging)."),(0,o.kt)("h3",{id:"configurable-cli-options"},"Configurable CLI options"),(0,o.kt)("p",null,"CLI options are now ",(0,o.kt)("a",{parentName:"p",href:"/docs/settings/reference#cli-settings"},"configurable")," enabling you to customize your own Gwen launch profile."),(0,o.kt)("h3",{id:"selenium-4"},"Selenium 4"),(0,o.kt)("p",null,"The embedded web engine now  uses Selenium 4 and new DSLs have been added to support:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/dsl/reference#relative-locators"},"Relative locators")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/dsl/reference#windows-and-tabs"},"Windows and tabs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/dsl/reference#element-level-screenshots"},"Element level screenshots"))),(0,o.kt)("h2",{id:"whats-dropped"},"What's dropped"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Gwen workspaces have been deprecated in favor of JS projects"),(0,o.kt)("li",{parentName:"ul"},"Applitools integration has been removed")),(0,o.kt)("h2",{id:"migration-guide"},"Migration guide"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/gwen3/migration"},"Migrate to Gwen 3"))))}m.isMDXComponent=!0},7461:function(e,t,n){t.Z=n.p+"assets/images/gwen-pretty-log-ffc6a25e9f7e9dac6981b86801dedb53.png"}}]);