"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4005],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(6010),i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),r=n(7294),i=n(6010),o=n(2389),s=n(7392),l=n(7094),c=n(2466),p="tabList__CuJ",d="tabItem_LNqP";function u(e){var t,n,o=e.lazy,u=e.block,m=e.defaultValue,h=e.values,f=e.groupId,v=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,s.l)(g,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),y=w.tabGroupChoices,x=w.setTabGroupChoices,S=(0,r.useState)(b),D=S[0],C=S[1],M=[],O=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var T=y[f];null!=T&&T!==D&&g.some((function(e){return e.value===T}))&&C(T)}var z=function(e){var t=e.currentTarget,n=M.indexOf(t),a=g[n].value;a!==D&&(O(t),C(a),null!=f&&x(f,String(a)))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=M.indexOf(e.currentTarget)+1;n=null!=(a=M[r])?a:M[0];break;case"ArrowLeft":var i,o=M.indexOf(e.currentTarget)-1;n=null!=(i=M[o])?i:M[M.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},v)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:function(e){return M.push(e)},onKeyDown:E,onFocus:z,onClick:z},o,{className:(0,i.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":D===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(k.filter((function(e){return e.props.value===D}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==D})}))))}function m(e){var t=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},9557:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=(n(9960),n(5488),n(5162),n(4996),["components"]),s={slug:"/meta",toc_min_heading_level:2,toc_max_heading_level:3},l="Gwen Meta",c={unversionedId:"meta/meta",id:"meta/meta",title:"Gwen Meta",description:"Meta specs",source:"@site/docs/05-meta/01-meta.mdx",sourceDirName:"05-meta",slug:"/meta",permalink:"/docs/meta",draft:!1,editUrl:"https://github.com/gwen-interpreter/gwen-interpreter.github.io/edit/master/docs/05-meta/01-meta.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/meta",toc_min_heading_level:2,toc_max_heading_level:3},sidebar:"tutorialSidebar",previous:{title:"Get Started",permalink:"/docs/get-started"},next:{title:"Load Strategies",permalink:"/docs/meta/load-strategies"}},p={},d=[{value:"Meta specs",id:"meta-specs",level:2},{value:"StepDefs",id:"stepdefs",level:2},{value:"Composable step definitions",id:"composable-step-definitions",level:3},{value:"StepDefs with parameters",id:"stepdefs-with-parameters",level:3},{value:"Synchronized StepDefs",id:"synchronized-stepdefs",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gwen-meta"},"Gwen Meta"),(0,i.kt)("h2",{id:"meta-specs"},"Meta specs"),(0,i.kt)("p",null,"Meta specs are ",(0,i.kt)("a",{parentName:"p",href:"https://cucumber.io/docs/gherkin/reference/"},"Gherkin")," specifications that describe what steps in features will execute and are the automation glue in Gwen. They define all the step definitions and bindings required for automation and attach to features at runtime."),(0,i.kt)("h2",{id:"stepdefs"},"StepDefs"),(0,i.kt)("h3",{id:"composable-step-definitions"},"Composable step definitions"),(0,i.kt)("p",null,"Step definitions are defined as ",(0,i.kt)("code",null,"@StepDef")," annotated ",(0,i.kt)("a",{parentName:"p",href:"https://cucumber.io/docs/gherkin/reference/#example"},"Scenarios")," with names that match feature steps and bodies that call out to one or many ",(0,i.kt)("a",{parentName:"p",href:"/docs/dsl/reference"},"DSL steps")," to perform operations."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Put all your step definitions in meta to keep your features clean and free of automation concerns."))),(0,i.kt)("p",null,"Consider the following feature step:"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Feature Step")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("em",{parentName:"p"},"File: features/todo.feature")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-gherkin"},"  Given a new todo list\n")))),(0,i.kt)("p",null,"A step definition for executing this step could be defined in meta as follows:"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"StepDef")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("em",{parentName:"p"},"File: features/todo.meta")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-gherkin",metastring:"{2-3}","{2-3}":!0},'  @Context\n  @StepDef\n  Scenario: a new todo list\n    Given my todo list can be located by css ".todo-list"\n     When I navigate to "${todo.page.url}"\n     Then the page title should contain "TodoMVC"\n      And my todo list should be hidden\n')),(0,i.kt)("p",{parentName:"div"},"Calls DSL steps:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/dsl/reference#element-can-be-located-by-selector-expression"},(0,i.kt)("inlineCode",{parentName:"a"},'<element> can be located by <selector> "<expression>"'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/dsl/reference#i-navigate-to-url"},(0,i.kt)("inlineCode",{parentName:"a"},'I navigate to "<url>"'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/dsl/reference#the-page-title-should-match-expression"},(0,i.kt)("inlineCode",{parentName:"a"},'the page title should[ not] <match> "<expression>"'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/dsl/reference#element-should-be-state"},(0,i.kt)("inlineCode",{parentName:"a"},"<element> should[ not] be <state>")))))),(0,i.kt)("p",null,"Notice how the name of the StepDef matches the name of the feature step (excluding the leading ",(0,i.kt)("em",{parentName:"p"},"Given")," keyword). This is how step definitions bind to feature steps in Gwen; by name. Notice also that the body calls out to several DSL steps to perform the desired operations. Composing StepDefs in meta is all you need to do to make your features executable."),(0,i.kt)("h3",{id:"stepdefs-with-parameters"},"StepDefs with parameters"),(0,i.kt)("p",null,"StepDefs can also be declared to accept parameters using one or more ",(0,i.kt)("inlineCode",{parentName:"p"},"<param-name>")," placeholders in the declared name as follows:"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Feature Step")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-gherkin"},"  Then the list will contain 2 items\n")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"StepDef with a parameter")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-gherkin",metastring:"{2-3,5}","{2-3,5}":!0},'  @Assertion\n  @StepDef\n  Scenario: the list will contain <expected-count> items\n    Given the displayed count can be located by css ".todo-count strong"\n     Then the displayed count should be "$<expected-count>"\n')),(0,i.kt)("p",{parentName:"div"},"Calls DSL steps:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/dsl/reference#element-can-be-located-by-selector-expression"},(0,i.kt)("inlineCode",{parentName:"a"},'<element> can be located by <selector> "<expression>"'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/dsl/reference#text-ref-should-match-expression"},(0,i.kt)("inlineCode",{parentName:"a"},'<textRef> should[ not] <match> "<expression>"')))))),(0,i.kt)("p",null,"Here the name of the StepDef matches the feature step when the value ",(0,i.kt)("code",null,"2")," (in the feature step) is substituted in place of ",(0,i.kt)("inlineCode",{parentName:"p"},"<expected-count>")," in the StepDef name. This is how parameters are passed to StepDefs in Gwen; by substitution. The last step in the body extracts the parameter value with ",(0,i.kt)("inlineCode",{parentName:"p"},"$<expected-count>"),"."),(0,i.kt)("h3",{id:"synchronized-stepdefs"},"Synchronized StepDefs"),(0,i.kt)("p",null,"In the rare case where you might need to synchronize the execution of your StepDef to a single thread (due to resource contention or a conflict for example), you can do so by tagging it with the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Synchronized")," annotation. Gwen will then guarantee that only one thread will execute your StepDef at any given time when multiple features or scenarios are executed in ",(0,i.kt)("a",{parentName:"p",href:"/docs/modes/parallel"},"parallel mode")," by concurrent threads."))}m.isMDXComponent=!0}}]);