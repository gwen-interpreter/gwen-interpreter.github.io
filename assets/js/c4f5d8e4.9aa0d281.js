"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4195,7956],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=i,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3612:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(7294),i=n(4334),o=n(5281),r=n(5999),l="admonition_LlT9",s="admonitionHeading_tbUL",d="admonitionIcon_kALy",p="admonitionContent_S0QG";var c={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(r.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(r.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(r.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(r.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(r.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},m={secondary:"note",important:"info",success:"tip",warning:"danger"};function u(e){var t,n=function(e){var t=a.Children.toArray(e),n=t.find((function(e){var t;return a.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),i=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return{mdxAdmonitionTitle:n,rest:i}}(e.children),i=n.mdxAdmonitionTitle,o=n.rest;return Object.assign({},e,{title:null!=(t=e.title)?t:i,children:o})}function h(e){var t=u(e),n=t.children,r=t.type,h=t.title,f=t.icon,g=function(e){var t,n=null!=(t=m[e])?t:e;return c[n]||(console.warn('No admonition config found for admonition type "'+n+'". Using Info as fallback.'),c.info)}(r),k=null!=h?h:g.label,v=g.iconComponent,b=null!=f?f:a.createElement(v,null);return a.createElement("div",{className:(0,i.Z)(o.k.common.admonition,o.k.common.admonitionType(e.type),"alert","alert--"+g.infimaClassName,l)},a.createElement("div",{className:s},a.createElement("span",{className:d},b),k),a.createElement("div",{className:p},n))}},5162:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294),i=n(4334),o="tabItem_Ymn6";function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,r),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(3117),i=n(7294),o=n(4334),r=n(2389),l=n(7392),s=n(7094),d=n(2466),p="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,n,r=e.lazy,m=e.block,u=e.defaultValue,h=e.values,f=e.groupId,g=e.className,k=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===u?u:null!=(t=null!=u?u:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==w&&!v.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),y=N.tabGroupChoices,x=N.setTabGroupChoices,T=(0,i.useState)(w),C=T[0],E=T[1],S=[],I=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var D=y[f];null!=D&&D!==C&&v.some((function(e){return e.value===D}))&&E(D)}var G=function(e){var t=e.currentTarget,n=S.indexOf(t),a=v[n].value;a!==C&&(I(t),E(a),null!=f&&x(f,String(a)))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,i=S.indexOf(e.currentTarget)+1;n=null!=(a=S[i])?a:S[0];break;case"ArrowLeft":var o,r=S.indexOf(e.currentTarget)-1;n=null!=(o=S[r])?o:S[S.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",p)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},g)},v.map((function(e){var t=e.value,n=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return S.push(e)},onKeyDown:Z,onFocus:G,onClick:G},r,{className:(0,o.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),r?(0,i.cloneElement)(k.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function u(e){var t=(0,r.Z)();return i.createElement(m,(0,a.Z)({key:String(t)},e))}},2198:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(7294);function i(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function o(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(a&&(a+=" "),a+=t);return a}var r=n(7753),l=n(9960),s=n(2263),d="heroBanner_qdFl",p="buttons_AeoN",c=n(3117),m="features_xdhU",u=n(941),h=n(4996),f=[{title:"Declare Features",imageLight:"/img/icon-feature.svg",imageDark:"/img/icon-feature.svg",linkRef:"/docs#declare-features",description:"to describe scenarios"},{title:"Compose Meta",imageLight:"/img/icon-meta.svg",imageDark:"/img/icon-meta.svg",linkRef:"/docs#compose-meta",description:"to formulate execution"},{title:"Launch Gwen",imageLight:"/img/icon-gwen-color.svg",imageDark:"/img/icon-gwen-white.svg",linkRef:"/docs#launch-gwen",description:"to execute and automate"}];function g(e){var t=e.title,n=e.imageLight,i=e.imageDark,r=e.linkRef,s=e.description;return a.createElement("div",{className:o("col col--4")},a.createElement("div",{className:"text--center"},a.createElement(u.Z,{alt:t,sources:{light:(0,h.Z)(n),dark:(0,h.Z)(i)},width:"200px",height:"200px"})),a.createElement("div",{className:"text--center padding-horiz--md"},a.createElement("h3",null,t),a.createElement("p",null,a.createElement(l.Z,{to:r},t)," ",s)))}function k(){return a.createElement("section",{className:m,style:{paddingTop:"20px",paddingBottom:"5px"}},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},f.map((function(e,t){return a.createElement(g,(0,c.Z)({key:t},e))})))))}var v=n(5742);n(3612),n(5593);function b(){var e=(0,s.Z)().siteConfig;return a.createElement("header",{className:o("hero hero--primary",d),style:{paddingTop:"55px",paddingBottom:"55px"}},a.createElement(v.Z,null,a.createElement("title",null,e.title," | ",e.tagline),a.createElement("meta",{property:"og:title",content:e.title+" | "+e.tagline,"data-react-helmet":"true"})),a.createElement("div",{className:"container container_title"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--12"},a.createElement("h1",{className:"hero__title"},a.createElement("span",{className:"highlight"},"Gwen")," web automation and robotics"))),a.createElement("div",{className:p},a.createElement(l.Z,{className:"button banner-button button--lg",to:"/docs/get-started"},"Get Started"))))}function w(){var e=(0,s.Z)().siteConfig;return a.createElement(r.Z,{title:""+e.title,description:""+e.tagline},a.createElement(b,null),a.createElement("main",null,a.createElement(k,null),a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--12"},a.createElement("div",{className:p,style:{"padding-top":"10px","padding-bottom":"40px"}},a.createElement(l.Z,{className:"button banner-button button--lg",to:"/docs/introduction"},"Learn More")))))))}},5593:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return g}});var a=n(3117),i=n(102),o=(n(7294),n(3905)),r=n(9960),l=n(5488),s=n(5162),d=n(4996),p=n(941),c=["components"],m={slug:"/",toc_min_heading_level:2,toc_max_heading_level:3},u="Introduction",h={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"<ThemedImage",source:"@site/docs/01-introduction.mdx",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/gwen-interpreter/gwen-interpreter.github.io/edit/master/docs/01-introduction.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/",toc_min_heading_level:2,toc_max_heading_level:3},sidebar:"tutorialSidebar",next:{title:"Get Started",permalink:"/docs/get-started"}},f={},g=[{value:"Declare features",id:"declare-features",level:2},{value:"Compose meta",id:"compose-meta",level:2},{value:"Declaring step definitions",id:"declaring-step-definitions",level:3},{value:"Web elements selectors",id:"web-elements-selectors",level:3},{value:"Navigating to a web page",id:"navigating-to-a-web-page",level:3},{value:"Accessing externalised properties",id:"accessing-externalised-properties",level:3},{value:"Checking the page title",id:"checking-the-page-title",level:3},{value:"Verifying that an element is hidden from view",id:"verifying-that-an-element-is-hidden-from-view",level:3},{value:"Processing records in data tables",id:"processing-records-in-data-tables",level:3},{value:"Passing parameters to StepDefs",id:"passing-parameters-to-stepdefs",level:3},{value:"Behavioural rules and semantics",id:"behavioural-rules-and-semantics",level:3},{value:"Associative meta",id:"associative-meta",level:3},{value:"Launch Gwen",id:"launch-gwen",level:2},{value:"Invoke the CLI to execute",id:"invoke-the-cli-to-execute",level:3}],k={toc:g};function v(e){var t=e.components,n=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)(p.Z,{alt:"Gwen logo",sources:{light:(0,d.Z)("/img/gwen-logo-c.svg"),dark:(0,d.Z)("/img/gwen-logo-w.svg")},width:"250px",mdxType:"ThemedImage"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Gwen = ","[G]","iven ","[W]","hen Th","[en]")),(0,o.kt)("p",null,"Gwen is a ",(0,o.kt)(r.Z,{href:"https://cucumber.io/docs/gherkin/reference/",mdxType:"Link"},"Gherkin")," interpreter that helps teams automate end-to-end web testing and robotic processing with behaviour described in feature specifications.\nAutomation is achieved through Gherkin bindings called ",(0,o.kt)("a",{parentName:"p",href:"/docs/meta"},"meta specs"),", composed with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/dsl"},"Gwen DSL")," and maintained alongside feature files. An embedded ",(0,o.kt)("a",{parentName:"p",href:"https://www.selenium.dev/"},"Selenium")," engine executes each step in every scenario according to the meta provided to perform operations in browsers for you."),(0,o.kt)("h2",{id:"declare-features"},"Declare features"),(0,o.kt)("p",null,(0,o.kt)("img",{src:"/img/icon-feature.svg",width:"200px",height:"200px"})),(0,o.kt)("p",null,"Declare ",(0,o.kt)("a",{parentName:"p",href:"https://cucumber.io/docs/gherkin/reference/"},"feature specs")," to describe how scenarios should behave."),(0,o.kt)("p",null,"Feature specs are used to communicate scenarios in the language of your domain. They should be clear, concise and declarative."),(0,o.kt)("admonition",{type:"tip"},"  ",(0,o.kt)("p",null,"Write feature specs without giving any thought to automation.")),(0,o.kt)("p",null,"For example, the following describes how adding items to a todo list should behave."),(0,o.kt)("admonition",{title:"Feature Spec",type:"note"},(0,o.kt)("p",null,(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("em",{parentName:"p"},"File: features/todo.feature")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-gherkin"},"Feature: Add todo items\n \n  Scenario: Create todo list\n    Given a new todo list\n     When the following items are added\n          | Item          |\n          | Get the milk  |\n          | Walk the dog  |\n     Then the list will contain 2 items\n")))),(0,o.kt)("h2",{id:"compose-meta"},"Compose meta"),(0,o.kt)("p",null,(0,o.kt)("img",{src:"/img/icon-meta.svg",width:"200px",height:"200px"})),(0,o.kt)("p",null,"Compose ",(0,o.kt)("a",{parentName:"p",href:"/docs/meta"},"meta specs")," to formulate how scenarios will execute."),(0,o.kt)("p",null,"Meta specs are used to describe execution and are written in Gherkin too. ",(0,o.kt)("a",{parentName:"p",href:"/docs/meta#stepdefs"},"Step definitions")," and bindings are defined in meta so your features remain clean and unconcerned with automation details."),(0,o.kt)("admonition",{type:"tip"},"  ",(0,o.kt)("p",null,"Write meta specs with automation in mind (as if you were a robot).")),(0,o.kt)("p",null,"For example, the following meta describes how each step in the scenario above can be executed to automate a test against a running ",(0,o.kt)("a",{parentName:"p",href:"https://todomvc.com/examples/react"},"todo application"),"."),(0,o.kt)("admonition",{title:"Meta Spec",type:"note"},(0,o.kt)("p",null,(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("em",{parentName:"p"},"File: features/todo.meta")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-gherkin"},'Feature: Todo Meta\n  \n  @Context\n  @StepDef\n  Scenario: a new todo list\n    Given my todo list can be located by css ".todo-list"\n     When I navigate to "${todo.page.url}"\n     Then the page title should contain "TodoMVC"\n      And my todo list should be hidden\n  \n  @Action\n  @StepDef\n  @DataTable\n  @ForEach\n  Scenario: the following items are added\n    Given the todo field can be located by class "new-todo"\n     When I enter Item in the todo field\n     Then my todo list should contain Item\n  \n  @Assertion\n  @StepDef\n  Scenario: the list will contain <expected-count> items\n    Given the displayed count can be located by css ".todo-count strong"\n     Then the displayed count should be "$<expected-count>"\n')))),(0,o.kt)("h3",{id:"declaring-step-definitions"},"Declaring step definitions"),(0,o.kt)("p",null,"Each step definition is declared as a ",(0,o.kt)("inlineCode",{parentName:"p"},"@StepDef")," annotated scenario with a name that matches that of the step in the feature it binds to. Each one calls out to one or more ",(0,o.kt)("a",{parentName:"p",href:"/docs/dsl/reference"},"DSL Steps")," (or potentially other StepDefs) in its body to perform the specified operations at run time."),(0,o.kt)("p",null,"The first StepDef in our meta example binds to the first step in the feature and will only execute when it is interpreted for execution by Gwen."),(0,o.kt)("admonition",{title:"Feature Step 1",type:"note"},(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-gherkin"},"  Given a new todo list\n")))),(0,o.kt)("admonition",{title:"StepDef 1",type:"note"},(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-gherkin",metastring:"{2-3}","{2-3}":!0},'  @Context\n  @StepDef\n  Scenario: a new todo list\n    Given my todo list can be located by css ".todo-list"\n     When I navigate to "${todo.page.url}"\n     Then the page title should contain "TodoMVC"\n      And my todo list should be hidden\n')))),(0,o.kt)("h3",{id:"web-elements-selectors"},"Web elements selectors"),(0,o.kt)("p",null,"The first thing the above will do is bind the selector for locating the todo list element on the web page to the name ",(0,o.kt)("inlineCode",{parentName:"p"},"my todo list"),". Later steps can then reference that element using this name to interact with it and Gwen will locate it dynamically."),(0,o.kt)("admonition",{title:"StepDef 1, Step 1",type:"note"},(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-gherkin"},'  Given my todo list can be located by css ".todo-list"\n')),(0,o.kt)("p",{parentName:"admonition"},"Calls DSL step:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/dsl/reference#element-can-be-located-by-selector-expression"},(0,o.kt)("inlineCode",{parentName:"a"},'<element> can be located by <selector> "<expression>"')))))),(0,o.kt)("p",null," "),(0,o.kt)("h3",{id:"navigating-to-a-web-page"},"Navigating to a web page"),(0,o.kt)("p",null,"The next step in this StepDef will open a new browser window and navigate to the URL in the ",(0,o.kt)("inlineCode",{parentName:"p"},"todo.page.url")," property."),(0,o.kt)("admonition",{title:"StepDef 1, Step 2",type:"note"},(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-gherkin"},'  When I navigate to "${todo.page.url}"\n')),(0,o.kt)("p",{parentName:"admonition"},"Calls DSL step:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/dsl/reference#i-navigate-to-url"},(0,o.kt)("inlineCode",{parentName:"a"},'I navigate to "<url>"')))))),(0,o.kt)("p",null," "),(0,o.kt)("h3",{id:"accessing-externalised-properties"},"Accessing externalised properties"),(0,o.kt)("p",null,"We could have just hard coded the ",(0,o.kt)("a",{parentName:"p",href:"https://todomvc.com/examples/react"},"https://todomvc.com/examples/react")," URL in the above step, but externalising it enables us to target different environments through ",(0,o.kt)("a",{parentName:"p",href:"/docs/advanced/string-interpolation"},"string interpolation")," without changing our meta. This is useful during development when you want to execute against a locally running instance of the application or during testing when it is running on a different host or port. With this approach you can define a ",(0,o.kt)("a",{parentName:"p",href:"/docs/settings"},"settings")," file per environment and assign the URL for that environment to the ",(0,o.kt)("inlineCode",{parentName:"p"},"todo.page.url")," property in each file. Then when you want to target an environment, you pass the settings file for that environment to Gwen and the URL will be resolved accordingly."),(0,o.kt)(l.Z,{groupId:"settings",defaultValue:"conf",values:[{label:".conf",value:"conf"},{label:".json",value:"json"},{label:".properties",value:"properties"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"conf",mdxType:"TabItem"},(0,o.kt)("admonition",{title:"Conf",type:"note"},(0,o.kt)("p",null,(0,o.kt)("p",{parentName:"admonition"},"  ",(0,o.kt)("em",{parentName:"p"},"File: gwen/env/test.conf")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'todo {\n  page {\n    url = "https://todomvc.com/examples/react"\n  }\n}\n'))))),(0,o.kt)(s.Z,{value:"json",mdxType:"TabItem"},(0,o.kt)("admonition",{title:"Json",type:"note"},(0,o.kt)("p",null,(0,o.kt)("p",{parentName:"admonition"}," ",(0,o.kt)("em",{parentName:"p"},"File: gwen/env/test.json")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "todo": {\n    "page": {\n      "url": "https://todomvc.com/examples/react"\n    }\n  }\n}\n'))))),(0,o.kt)(s.Z,{value:"properties",mdxType:"TabItem"},(0,o.kt)("admonition",{title:"Properties",type:"note"},(0,o.kt)("p",null,(0,o.kt)("p",{parentName:"admonition"},"  ",(0,o.kt)("em",{parentName:"p"},"File: gwen/env/test.properties")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"  todo.page.url = https://todomvc.com/examples/react\n")))))),(0,o.kt)("h3",{id:"checking-the-page-title"},"Checking the page title"),(0,o.kt)("p",null,'The next step in the same StepDef checks that the page title in the browser window contains the string literal "TodoMVC" in it. If it doesn\'t then an assertion error will be raised, otherwise execution will resume to the next step. It is generally a good idea when navigating to a page to verify that you did indeed land on that page before proceeding to interact with it. Checking the title is one way to do it which will suffice in this case.'),(0,o.kt)("admonition",{title:"StepDef 1, Step 3",type:"note"},(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-gherkin"},'  Then the page title should contain "TodoMVC"\n')),(0,o.kt)("p",{parentName:"admonition"},"Calls DSL step:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/dsl/reference#the-page-title-should-match-expression"},(0,o.kt)("inlineCode",{parentName:"a"},'the page title should[ not] <match> "<expression>"')))))),(0,o.kt)("p",null," "),(0,o.kt)("h3",{id:"verifying-that-an-element-is-hidden-from-view"},"Verifying that an element is hidden from view"),(0,o.kt)("p",null,"The last step in this StepDef verifies that the web element containing the current list of todo items is hidden from view. We expect it to not be displayed because we haven't added any items to it yet. Recall that we bound this element in the first step earlier to the name ",(0,o.kt)("inlineCode",{parentName:"p"},"my todo list"),". So here we reference it by that name and if Gwen cannot see it on the page then execution will resume, otherwise an assertion error will be raised. "),(0,o.kt)("admonition",{title:"StepDef 1, Step 4",type:"note"},(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-gherkin"},"  And my todo list should be hidden\n")),(0,o.kt)("p",{parentName:"admonition"},"Calls DSL step:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/dsl/reference#element-should-be-state"},(0,o.kt)("inlineCode",{parentName:"a"},"<element> should[ not] be <state>")))))),(0,o.kt)("p",null," "),(0,o.kt)("h3",{id:"processing-records-in-data-tables"},"Processing records in data tables"),(0,o.kt)("p",null,"The second StepDef uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"@DataTable")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@ForEach")," annotations which work together to process each record in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/advanced/data-tables"},"data table")," of the second step in the feature."),(0,o.kt)("admonition",{title:"Feature Step 2",type:"note"},(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-gherkin"},"  When the following items are added\n       | Item          |\n       | Get the milk  |\n       | Walk the dog  |\n")))),(0,o.kt)("admonition",{title:"StepDef 2",type:"note"},(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-gherkin",metastring:"{2-5}","{2-5}":!0},'  @Action\n  @StepDef\n  @DataTable\n  @ForEach\n  Scenario: the following items are added\n    Given the todo field can be located by class "new-todo"\n     When I enter Item in the todo field\n     Then my todo list should contain Item\n')))),(0,o.kt)("p",null,"Gwen will call the StepDef for each record in the table and bind each field value to its declared name in the header record. The second and third steps in this StepDef will enter each ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," into the ",(0,o.kt)("inlineCode",{parentName:"p"},"todo field")," and check that it was added to ",(0,o.kt)("inlineCode",{parentName:"p"},"my todo list"),". This is the same ",(0,o.kt)("inlineCode",{parentName:"p"},"my todo list")," that we earlier confirmed was absent when we opened the page in the browser. We reuse it here to check that it now contains and displays each item. If it does not, then an assertion error will be raised. "),(0,o.kt)("admonition",{title:"StepDef 2, Steps 2 and 3",type:"note"},(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-gherkin"},"  When I enter Item in the todo field\n  Then my todo list should contain Item\n")),(0,o.kt)("p",{parentName:"admonition"},"Calls DSL steps:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/dsl/reference#i-enter-or-type-text-ref-in-element"},(0,o.kt)("inlineCode",{parentName:"a"},"I <enter|type> <textRef> in <element>"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/dsl/reference#element-should-match-expression-ref"},(0,o.kt)("inlineCode",{parentName:"a"},"<element> should[ not] <match> <expressionRef>")))))),(0,o.kt)("p",null," "),(0,o.kt)("h3",{id:"passing-parameters-to-stepdefs"},"Passing parameters to StepDefs"),(0,o.kt)("p",null,"The last StepDef accepts the number of expected items from the last step in the feature into a parameter placeholder named ",(0,o.kt)("inlineCode",{parentName:"p"},"expected-count")," and then uses that to assert its value against ",(0,o.kt)("inlineCode",{parentName:"p"},"the displayed count")," on the page. In this example, the value 2 will be passed as the parameter."),(0,o.kt)("admonition",{title:"Feature Step 3",type:"note"},(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-gherkin"},"  Then the list will contain 2 items\n")))),(0,o.kt)("admonition",{title:"StepDef 3",type:"note"},(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-gherkin",metastring:"{2-3,5}","{2-3,5}":!0},'  @Assertion\n  @StepDef\n  Scenario: the list will contain <expected-count> items\n    Given the displayed count can be located by css ".todo-count strong"\n     Then the displayed count should be "$<expected-count>"\n')))),(0,o.kt)("h3",{id:"behavioural-rules-and-semantics"},"Behavioural rules and semantics"),(0,o.kt)("p",null,"The following annotations on StepDefs are used to associate behaviour types and enforce the following rules when the ",(0,o.kt)("a",{parentName:"p",href:"/docs/settings/reference#gwen-behavior-rules"},(0,o.kt)("inlineCode",{parentName:"a"},"gwen.behavior.rules"))," setting is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"strict"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"StepDefs annotated with.."),(0,o.kt)("th",{parentName:"tr",align:"center"},"can only bind steps tied to keyword.."),(0,o.kt)("th",{parentName:"tr",align:"left"},"because.."))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"@Context ")),(0,o.kt)("td",{parentName:"tr",align:"center"},"Given"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Givens imply context")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"@Action")),(0,o.kt)("td",{parentName:"tr",align:"center"},"When"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Whens imply actions")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"@Assertion")),(0,o.kt)("td",{parentName:"tr",align:"center"},"Then"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Thens imply assertions")))),(0,o.kt)("hr",null),(0,o.kt)("p",null,"When binding to a step declared with ",(0,o.kt)("inlineCode",{parentName:"p"},"And"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"But"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"*"),", then the keyword in the first step in the chain of preceeding steps declared with either ",(0,o.kt)("inlineCode",{parentName:"p"},"Given"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"When")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Then")," will become the tying keyword. Should the topmost step in a chain be declared with ",(0,o.kt)("inlineCode",{parentName:"p"},"*"),", then the tying keyword will be ",(0,o.kt)("inlineCode",{parentName:"p"},"Given"),"."),(0,o.kt)("p",null,"For example, the following binding will be permitted since the feature step is declared with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Then")," keyword and the StepDef is annotated with ",(0,o.kt)("inlineCode",{parentName:"p"},"@Assertion"),"."),(0,o.kt)("admonition",{title:"Feature Step 3",type:"note"},(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-gherkin"},"  Then the list will contain 2 items\n")))),(0,o.kt)("admonition",{title:"StepDef 3",type:"note"},(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-gherkin",metastring:"{1}","{1}":!0},'  @Assertion\n  @StepDef\n  Scenario: the list will contain <expected-count> items\n    Given the displayed count can be located by css ".todo-count strong"\n     Then the displayed count should be "$<expected-count>"\n')))),(0,o.kt)("p",null,"If we were to change the keyword in the feature step to ",(0,o.kt)("inlineCode",{parentName:"p"},"When")," however, it would not only read poorly but would no longer imply ",(0,o.kt)("inlineCode",{parentName:"p"},"@Assertion")," behaviour and Gwen would report the violation. Similarly, if we were to change the behaviour annotation on the StepDef to ",(0,o.kt)("inlineCode",{parentName:"p"},"@Context"),", then that behaviour would not be implied by the ",(0,o.kt)("inlineCode",{parentName:"p"},"Then")," keyword declared in the feature step."),(0,o.kt)("admonition",{title:"Strict by default",type:"info"},(0,o.kt)("p",null,"Strict rules are enabled by default since ",(0,o.kt)(r.Z,{to:"/docs/gwen3",mdxType:"Link"},"Gwen 3"),". In prior versions, lenient was the default, meaning that these and other rules like ",(0,o.kt)("b",null,"Given-When-Then")," order were not enforced.")),(0,o.kt)("h3",{id:"associative-meta"},"Associative meta"),(0,o.kt)("p",null,"When the ",(0,o.kt)("a",{parentName:"p",href:"/docs/settings/reference#gwen-associative-meta"},(0,o.kt)("inlineCode",{parentName:"a"},"gwen.associative.meta"))," setting is enabled, Gwen will automatically associate and bind all same named feature and meta files discovered in a directory with each other. In the following case, the meta would be considered associative."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"features/todo.feature\nfeatures/todo.meta\n")),(0,o.kt)("admonition",{title:"Associative by default",type:"info"},(0,o.kt)("p",null,"Associative meta is enabled by default since ",(0,o.kt)(r.Z,{to:"/docs/gwen3",mdxType:"Link"},"Gwen 3"),". In prior versions, all meta files discovered in a directory were unconditionally bound to all features in that directory and it's subdirectories.")),(0,o.kt)("h2",{id:"launch-gwen"},"Launch Gwen"),(0,o.kt)("p",null,"\xa0 \xa0 \xa0 \xa0 ",(0,o.kt)(p.Z,{alt:"Gwen attractor",sources:{light:(0,d.Z)("/img/gwen-attractor-color.svg"),dark:(0,d.Z)("/img/gwen-attractor-white.svg")},width:"135px",height:"135px",mdxType:"ThemedImage"})),(0,o.kt)("p",null,"Launch Gwen to bind your meta and execute your features to automate."),(0,o.kt)("h3",{id:"invoke-the-cli-to-execute"},"Invoke the CLI to execute"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/cli"},"CLI")," is used to launch Gwen and execute features. When launched on a directory, it will recursively discover and bind all meta and feature files in that directory and execute all the features. Any ",(0,o.kt)("a",{parentName:"p",href:"/docs/settings"},"settings files")," passed in will be loaded and all ",(0,o.kt)("inlineCode",{parentName:"p"},"${prop.name}")," placeholder references throughout the meta and feature files will resolve during execution."),(0,o.kt)(l.Z,{groupId:"setup",defaultValue:"project",values:[{label:"Project",value:"project"},{label:"Standalone",value:"standalone"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"project",mdxType:"TabItem"},(0,o.kt)(l.Z,{groupId:"jstool",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("admonition",{title:'Invoking Gwen"',type:"note"},(0,o.kt)("p",null,(0,o.kt)("p",{parentName:"admonition"},"  Execute feature in test environment (passing in test environment settings):"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"  yarn gwen -b -c gwen/env/test.conf gwen/features/todo.feature\n")),(0,o.kt)("p",{parentName:"admonition"},"  ",(0,o.kt)("a",{parentName:"p",href:"/docs/cli"},"Gwen CLI"))))),(0,o.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("admonition",{title:"Invoking Gwen",type:"note"},(0,o.kt)("p",null,(0,o.kt)("p",{parentName:"admonition"},"  Execute feature in test environment (passing in test environment settings):"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"  npm run gwen -- -b -c gwen/env/test.conf gwen/features/todo.feature\n")),(0,o.kt)("p",{parentName:"admonition"},"  ",(0,o.kt)("a",{parentName:"p",href:"/docs/cli"},"Gwen CLI"))))),(0,o.kt)(s.Z,{value:"pnpm",mdxType:"TabItem"},(0,o.kt)("admonition",{title:"Invoking Gwen",type:"note"},(0,o.kt)("p",null,(0,o.kt)("p",{parentName:"admonition"},"  Execute feature in test environment (passing in test environment settings):"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"  pnpm gwen -b -c gwen/env/test.conf gwen/features/todo.feature\n")),(0,o.kt)("p",{parentName:"admonition"},"  ",(0,o.kt)("a",{parentName:"p",href:"/docs/cli"},"Gwen CLI"))))))),(0,o.kt)(s.Z,{value:"standalone",mdxType:"TabItem"},(0,o.kt)("admonition",{title:"Invoking Gwen",type:"note"},(0,o.kt)("p",null,"Execute feature in test environment (passing in test environment settings):",(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"  gwen -b -c env/test.conf features/todo.feature\n")),(0,o.kt)("p",{parentName:"admonition"},"  ",(0,o.kt)("a",{parentName:"p",href:"/docs/cli"},"Gwen CLI")))))),(0,o.kt)("admonition",{title:"Testing & Robotics",type:"tip"},(0,o.kt)("p",null,"Your Gwen usage need not be confined to just testing. You can automate manually intensive and repetitive processes too!")))}v.isMDXComponent=!0}}]);