"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4245],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,h=u["".concat(s,".").concat(c)]||u[c]||d[c]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(4334),i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(3117),r=n(7294),i=n(4334),o=n(2389),l=n(7392),s=n(7094),p=n(2466),m="tabList__CuJ",d="tabItem_LNqP";function u(e){var t,n,o=e.lazy,u=e.block,c=e.defaultValue,h=e.values,g=e.groupId,f=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),w=null!=h?h:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.l)(w,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(t=null!=c?c:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==b&&!w.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+w.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.U)(),N=y.tabGroupChoices,x=y.setTabGroupChoices,T=(0,r.useState)(b),C=T[0],j=T[1],G=[],E=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var I=N[g];null!=I&&I!==C&&w.some((function(e){return e.value===I}))&&j(I)}var O=function(e){var t=e.currentTarget,n=G.indexOf(t),a=w[n].value;a!==C&&(E(t),j(a),null!=g&&x(g,String(a)))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=G.indexOf(e.currentTarget)+1;n=null!=(a=G[r])?a:G[0];break;case"ArrowLeft":var i,o=G.indexOf(e.currentTarget)-1;n=null!=(i=G[o])?i:G[G.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},f)},w.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return G.push(e)},onKeyDown:D,onFocus:O,onClick:O},o,{className:(0,i.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(k.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function c(e){var t=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},44:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return c}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=n(5488),l=n(5162),s=(n(9960),["components"]),p={toc_min_heading_level:2,toc_max_heading_level:2},m="Get Started",d={unversionedId:"get-started",id:"get-started",title:"Get Started",description:"See the introduction to learn more about Gwen before getting started.",source:"@site/docs/02-get-started.mdx",sourceDirName:".",slug:"/get-started",permalink:"/docs/get-started",draft:!1,editUrl:"https://github.com/gwen-interpreter/gwen-interpreter.github.io/edit/master/docs/02-get-started.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Gwen Meta",permalink:"/docs/meta"}},u={},c=[{value:"Setup",id:"setup",level:2},{value:"Choose a setup option",id:"choose-a-setup-option",level:4},{value:"System requirements",id:"system-requirements",level:3},{value:"Open a terminal session",id:"open-a-terminal-session",level:3},{value:"Add Gwen and initialise",id:"add-gwen-and-initialise",level:3},{value:"Review default settings",id:"review-default-settings",level:3},{value:"Default web browser and target environment",id:"default-web-browser-and-target-environment",level:4},{value:"Gherkin style",id:"gherkin-style",level:4},{value:"Web driver settings",id:"web-driver-settings",level:4},{value:"Execute the samples",id:"execute-the-samples",level:3},{value:"System requirements",id:"system-requirements-1",level:3},{value:"Download and install Gwen",id:"download-and-install-gwen",level:3},{value:"Add Gwen to your system path",id:"add-gwen-to-your-system-path",level:3},{value:"Inititialise a project directory",id:"inititialise-a-project-directory",level:3},{value:"Review default settings",id:"review-default-settings-1",level:3},{value:"Default web browser and target environment",id:"default-web-browser-and-target-environment-1",level:4},{value:"Gherkin style",id:"gherkin-style-1",level:4},{value:"Web driver settings",id:"web-driver-settings-1",level:4},{value:"Execute the samples",id:"execute-the-samples-1",level:3}],h={toc:c};function g(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"get-started"},"Get Started"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"See the ",(0,i.kt)("a",{parentName:"p",href:"/docs"},"introduction")," to learn more about Gwen before getting started.")),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("h4",{id:"choose-a-setup-option"},"Choose a setup option"),(0,i.kt)("p",null,"The Project option is recommended since everything will be self contained and ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"Git")," ready."),(0,i.kt)(o.Z,{groupId:"setup",defaultValue:"project",values:[{label:"Project",value:"project"},{label:"Standalone",value:"standalone"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"project",mdxType:"TabItem"},(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Since ",(0,i.kt)("a",{parentName:"p",href:"/docs/gwen3"},"Gwen 3"))),(0,i.kt)("p",null,"Use this option to start a new project or add Gwen to an existing one."),(0,i.kt)("h3",{id:"system-requirements"},"System requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Linux, Mac or Windows OS"),(0,i.kt)("li",{parentName:"ul"},"Before you can start, you will need to have the following installed:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.google.com/intl/en_au/chrome/"},"Chrome"),", ",(0,i.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-us/edge"},"Edge"),", ",(0,i.kt)("a",{parentName:"li",href:"https://www.mozilla.org/en-US/firefox/new/"},"Firefox"),", or ",(0,i.kt)("a",{parentName:"li",href:"https://www.apple.com/au/safari/"},"Safari")," browser"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://java.com"},"Java 8+")," JRE (no need for JDK unless you really want it)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager"},"node 12+"))))),(0,i.kt)("h3",{id:"open-a-terminal-session"},"Open a terminal session"),(0,i.kt)(o.Z,{groupId:"jstool",defaultValue:"new",values:[{label:"New project",value:"new"},{label:"Existing project",value:"existing"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"new",mdxType:"TabItem"},"To start a new project, create a new directory and open a terminal window in that."),(0,i.kt)(l.Z,{value:"existing",mdxType:"TabItem"},"To add Gwen to an existing project, open a terminal window in the root of that project.")),(0,i.kt)("h3",{id:"add-gwen-and-initialise"},"Add Gwen and initialise"),(0,i.kt)("p",null,"Add Gwen using one of the following tools (",(0,i.kt)("a",{parentName:"p",href:"https://yarnpkg.com/"},"Yarn")," is recommended for ease of use)."),(0,i.kt)(o.Z,{groupId:"jstool",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("p",null,"Install the gwen-web package as a dev dependency:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add -D @gweninterpreter/gwen-web\n")),(0,i.kt)("p",null,"Then, initialize Gwen in the project by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn gwen init\n"))),(0,i.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("p",null,"Install the gwen-web package as a dev dependency in your project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm i --save-dev @gweninterpreter/gwen-web\n")),(0,i.kt)("p",null,"Then, initialize Gwen in the project by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm run gwen init\n"))),(0,i.kt)(l.Z,{value:"pnpm",mdxType:"TabItem"},(0,i.kt)("p",null,"Install the gwen-web package as a dev dependency in your project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pnpm add -D @gweninterpreter/gwen-web\n")),(0,i.kt)("p",null,"Then, initialize Gwen in the project by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pnpm gwen init\n")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," command will generate the following files and subdirectories in your project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  ./                           # Project root\n   \u251c\u2500\u2500 gwen.conf               # Gwen settings file\n   \u2514\u2500\u2500 /gwen\n       \u251c\u2500\u2500 README.md\n       \u251c\u2500\u2500 .gitignore          # Git ignore file\n       \u251c\u2500\u2500 /browsers           # Browser settings\n       \u2502   \u251c\u2500\u2500 chrome.conf\n       \u2502   \u251c\u2500\u2500 edge.conf\n       \u2502   \u251c\u2500\u2500 firefox.conf\n       \u2502   \u251c\u2500\u2500 ie.conf\n       \u2502   \u251c\u2500\u2500 README.md\n       \u2502   \u2514\u2500\u2500 safari.conf\n       \u251c\u2500\u2500 /env                # Environment settings\n       \u2502   \u251c\u2500\u2500 dev.conf\n       \u2502   \u251c\u2500\u2500 local.conf\n       \u2502   \u251c\u2500\u2500 prod.conf\n       \u2502   \u251c\u2500\u2500 README.md\n       \u2502   \u251c\u2500\u2500 staging.conf\n       \u2502   \u2514\u2500\u2500 test.conf\n       \u251c\u2500\u2500 /features           # Features and associative meta\n       \u2502   \u2514\u2500\u2500 README.md\n       \u251c\u2500\u2500 /meta               # Optional common/reusable meta\n       \u2502   \u2514\u2500\u2500 README.md\n       \u2514\u2500\u2500 /samples            # Sample features and meta\n")),(0,i.kt)("admonition",{title:"Automatic Updates",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Automatic installs and updates to the latest version of Gwen are enabled by default for projects. You can disable them by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," field in the ",(0,i.kt)("inlineCode",{parentName:"p"},"gwenWeb")," section of your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file to a specific version."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"gwenWeb": {\n  "version": "X.Y.Z"\n}\n')),(0,i.kt)("p",{parentName:"admonition"},"Omitting or setting it to ",(0,i.kt)("inlineCode",{parentName:"p"},"latest")," will re-enable automatic updates.")),(0,i.kt)("h3",{id:"review-default-settings"},"Review default settings"),(0,i.kt)("p",null,"All the default ",(0,i.kt)("a",{parentName:"p",href:"/docs/settings"},"settings")," for your project are pre-configured in the ",(0,i.kt)("inlineCode",{parentName:"p"},"gwen.conf")," file in the root of your project (created by the ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," command). You can change any of them at any time to suit your needs. "),(0,i.kt)("h4",{id:"default-web-browser-and-target-environment"},"Default web browser and target environment"),(0,i.kt)("p",null,"Gwen is configured to target the Chrome browser and your ",(0,i.kt)("em",{parentName:"p"},"local")," environment by default. To change these, amend the  ",(0,i.kt)("a",{parentName:"p",href:"/docs/settings/reference#gwen-target-browser"},(0,i.kt)("code",null,"gwen.target.browser"))," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/settings/reference#gwen-target-env"},(0,i.kt)("code",null,"gwen.target.env"))," settings to your preferred values."),(0,i.kt)("admonition",{title:"Amend settings",type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("em",{parentName:"p"},"File: /project/gwen.conf")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{3, 4}","{3,":!0,"4}":!0},'gwen {\n  target {\n    browser = "chrome"            # chrome|firefox|safari|edge|ie\n    env = "local"                 # local|dev|test|staging|prod|..\n  }\n}\n'))),(0,i.kt)("h4",{id:"gherkin-style"},"Gherkin style"),(0,i.kt)("p",null,"The following defaults are pre-configured to help promote ",(0,i.kt)("a",{parentName:"p",href:"https://gweninterpreter.wordpress.com/2020/03/09/strictly-good-gherkin-with-gwen/"},"good Gherkin")," practice:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/settings/reference#gwen-feature-mode"},(0,i.kt)("inlineCode",{parentName:"a"},"gwen.feature.mode"))," is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"declarative")," to confine your ",(0,i.kt)("a",{parentName:"li",href:"/docs/dsl"},"DSL")," usage to ",(0,i.kt)("a",{parentName:"li",href:"/docs/meta"},"meta")," and keep your features clean"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/settings/reference#gwen-behavior-rules"},(0,i.kt)("inlineCode",{parentName:"a"},"gwen.behavior.rules"))," is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"strict")," to enforce proper ",(0,i.kt)("a",{parentName:"li",href:"/docs#behavioural-rules-and-semantics"},"behavioural rules")," and ",(0,i.kt)("em",{parentName:"li"},"Given-When-Then")," order")),(0,i.kt)("p",null,"You can relax these by setting them to ",(0,i.kt)("inlineCode",{parentName:"p"},"imperative")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"lenient")," (respectively) if you find them too rigid."),(0,i.kt)("h4",{id:"web-driver-settings"},"Web driver settings"),(0,i.kt)("p",null,"Gwen has an embedded web driver manager which automatically downloads and installs native web drivers for you on most platforms. If however you need to manage this manually, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/advanced/web-driver-management"},"Web Driver Management")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/settings/reference#web-settings"},"Web Settings")," for options."),(0,i.kt)("h3",{id:"execute-the-samples"},"Execute the samples"),(0,i.kt)("p",null,"To confirm your setup, execute the samples in the ",(0,i.kt)("inlineCode",{parentName:"p"},"gwen/samples")," directory and delete (or keep) them when done."),(0,i.kt)(o.Z,{groupId:"jstool",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("admonition",{title:"Launch Gwen",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Run the following command in your project to execute the samples."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn gwen -b gwen/samples\n")),(0,i.kt)("p",{parentName:"admonition"},"Where:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"-b")," switch instructs Gwen to exit immediately after executing the samples. Omitting it will open the ",(0,i.kt)("a",{parentName:"li",href:"/docs/cli/repl"},"REPL Console")," instead of exiting."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"samples")," is the directory containing the meta and feature samples to execute ")),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"/docs/cli"},"Gwen CLI")))),(0,i.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("admonition",{title:"Launch Gwen",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Run the following command in your project to execute the samples."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm run gwen -- -b gwen/samples\n")),(0,i.kt)("p",{parentName:"admonition"},"Where:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"-b")," switch instructs Gwen to exit immediately after executing the samples. Omitting it will open the ",(0,i.kt)("a",{parentName:"li",href:"/docs/cli/repl"},"REPL Console")," instead of exiting."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"samples")," is the directory containing the meta and feature samples to execute ")),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"/docs/cli"},"Gwen CLI")))),(0,i.kt)(l.Z,{value:"pnpm",mdxType:"TabItem"},(0,i.kt)("admonition",{title:"Launch Gwen",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Run the following command in your project to execute the samples."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pnpm gwen -b gwen/samples\n")),(0,i.kt)("p",{parentName:"admonition"},"Where:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"-b")," switch instructs Gwen to exit immediately after executing the samples. Omitting it will open the ",(0,i.kt)("a",{parentName:"li",href:"/docs/cli/repl"},"REPL Console")," instead of exiting."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"samples")," is the directory containing the meta and feature samples to execute ")),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"/docs/cli"},"Gwen CLI"))))),(0,i.kt)("p",null,"The sample features will execute and a ",(0,i.kt)("a",{parentName:"p",href:"/docs/reports/html"},"HTML evaluation report")," will be generated at ",(0,i.kt)("inlineCode",{parentName:"p"},"gwen/output/reports/index.html")," in your project.")),(0,i.kt)(l.Z,{value:"standalone",mdxType:"TabItem"},(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Since ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v1.0.0"},"v1.0.0"))),(0,i.kt)("p",null,"Use this option to set up Gwen as a once-off standalone installation on your machine."),(0,i.kt)("h3",{id:"system-requirements-1"},"System requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Linux, Mac or Windows OS"),(0,i.kt)("li",{parentName:"ul"},"Before you can start, you will need to have the following installed:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.google.com/intl/en_au/chrome/"},"Chrome"),", ",(0,i.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-us/edge"},"Edge"),", ",(0,i.kt)("a",{parentName:"li",href:"https://www.mozilla.org/en-US/firefox/new/"},"Firefox")," or ",(0,i.kt)("a",{parentName:"li",href:"https://www.apple.com/au/safari/"},"Safari")," browser"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://java.com"},"Java 8+")," JRE (no need for JDK unless you really want it)")))),(0,i.kt)("h3",{id:"download-and-install-gwen"},"Download and install Gwen"),(0,i.kt)("p",null,"Browse the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gwen-interpreter/gwen-web/releases"},"releases")," and download the binary package of the version you want to install and use. The donwloaded zip will have a name that matches ",(0,i.kt)("em",{parentName:"p"},"gwen-web-","<","version",">",".zip"),". Extract the downloaded ZIP into a dedicated applications directory on your machine. This will give you the following Gwen insallation on your file system:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," /applications             # Your top level applications directory\n \u2514\u2500\u2500/gwen-web-<version>    # Your Gwen install\n    \u251c\u2500\u2500 gwen               # Linux launch script\n    \u251c\u2500\u2500 gwen.bat           # Windows launch script\n    \u251c\u2500\u2500 /bin               # Gwen scripts\n    \u2514\u2500\u2500 /lib               # Gwen binaries\n")),(0,i.kt)("h3",{id:"add-gwen-to-your-system-path"},"Add Gwen to your system path"),(0,i.kt)("p",null,"Add the absolute location of your ",(0,i.kt)("inlineCode",{parentName:"p"},"/applications/gwen-web-<version>/bin")," directory to your system ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," variable to make Gwen accessible in any directory on your machine."),(0,i.kt)(o.Z,{groupId:"os",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,i.kt)("admonition",{title:"set PATH variable",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Run the following command to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," in your current session temporarily or consult your OS manual to make it permanent:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"export PATH=$PATH:/absolute/path/to/applications/gwen-web-<version>/bin\n")),(0,i.kt)("p",{parentName:"admonition"},"Replace:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/absolute/path/to")," with the absolute path to the location where you extracted the ZIP in step 1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<version>")," with the Gwen version you installed")))),(0,i.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,i.kt)("admonition",{title:"set PATH variable",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Go to ",(0,i.kt)("em",{parentName:"p"},"Environment Variables")," on your Windows system, and find and edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," variable to include the following."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"C:\\absolute\\path\\to\\applications\\gwen-web-<version>\\bin\n")),(0,i.kt)("p",{parentName:"admonition"},"Replace:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"C:\\absolute\\path\\to")," with the absolute path to the location where you extracted the ZIP in step 1 (your drive letter may differ)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<version>")," with the Gwen version you installed"))))),(0,i.kt)("admonition",{title:"No automatic updates",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"You will need to repeat the above to udpate.")),(0,i.kt)("h3",{id:"inititialise-a-project-directory"},"Inititialise a project directory"),(0,i.kt)("p",null,"Create a new directory (called ",(0,i.kt)("inlineCode",{parentName:"p"},"gwen-project")," for example) somewhere on your machine that will serve as your working Gwen project directory. It should be outside of the ",(0,i.kt)("inlineCode",{parentName:"p"},"/applications")," directory where you installed Gwen earlier. Open a terminal and run the following command in your ",(0,i.kt)("inlineCode",{parentName:"p"},"gwen-project")," directory to initialise it:"),(0,i.kt)("admonition",{title:"Launch Gwen",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Be sure to include the trailing dot"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"gwen init .\n")),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"/docs/cli"},"Gwen CLI"))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," command will generate the following files and subdirectorie in your project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  ./                       # Project root\n   \u251c\u2500\u2500 gwen.conf           # Gwen settings file\n   \u251c\u2500\u2500 README.md\n   \u251c\u2500\u2500 .gitignore          # Git ignore file\n   \u251c\u2500\u2500 /browsers           # Browser settings\n   \u2502   \u251c\u2500\u2500 chrome.conf\n   \u2502   \u251c\u2500\u2500 edge.conf\n   \u2502   \u251c\u2500\u2500 firefox.conf\n   \u2502   \u251c\u2500\u2500 ie.conf\n   \u2502   \u251c\u2500\u2500 README.md\n   \u2502   \u2514\u2500\u2500 safari.conf\n   \u251c\u2500\u2500 /env                # Environment settings\n   \u2502   \u251c\u2500\u2500 dev.conf\n   \u2502   \u251c\u2500\u2500 local.conf\n   \u2502   \u251c\u2500\u2500 prod.conf\n   \u2502   \u251c\u2500\u2500 README.md\n   \u2502   \u2514\u2500\u2500 test.conf\n   \u251c\u2500\u2500 /features           # Features and associative meta\n   \u2502   \u2514\u2500\u2500 README.md\n   \u251c\u2500\u2500 /meta               # Optional common/reusable meta\n   \u2502   \u2514\u2500\u2500 README.md\n   \u2514\u2500\u2500 /samples            # Sample features and meta\n")),(0,i.kt)("h3",{id:"review-default-settings-1"},"Review default settings"),(0,i.kt)("p",null,"All the default ",(0,i.kt)("a",{parentName:"p",href:"/docs/settings"},"settings")," for your project are pre-configured in the ",(0,i.kt)("inlineCode",{parentName:"p"},"gwen.conf")," file in the root of your project (created by the ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," command). You can change any of them at any time to suit your needs. "),(0,i.kt)("h4",{id:"default-web-browser-and-target-environment-1"},"Default web browser and target environment"),(0,i.kt)("p",null,"Gwen is configured to target the Chrome browser and your ",(0,i.kt)("em",{parentName:"p"},"local")," environment by default. To change these, amend the  ",(0,i.kt)("a",{parentName:"p",href:"/docs/settings/reference#gwen-target-browser"},(0,i.kt)("code",null,"gwen.target.browser"))," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/settings/reference#gwen-target-env"},(0,i.kt)("code",null,"gwen.target.env"))," settings to your preferred values."),(0,i.kt)("admonition",{title:"Amend settings",type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("em",{parentName:"p"},"File: /project/gwen.conf")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{3, 4}","{3,":!0,"4}":!0},'gwen {\n  target {\n    browser = "chrome"            # chrome|firefox|safari|edge|ie\n    env = "local"                 # local|dev|test|staging|prod|..\n  }\n}\n'))),(0,i.kt)("h4",{id:"gherkin-style-1"},"Gherkin style"),(0,i.kt)("p",null,"The following settings are pre-configured with ",(0,i.kt)("a",{parentName:"p",href:"https://gweninterpreter.wordpress.com/2020/03/09/strictly-good-gherkin-with-gwen/"},"strictly good Gherkin")," in mind:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/settings/reference#gwen-feature-mode"},(0,i.kt)("inlineCode",{parentName:"a"},"gwen.feature.mode"))," is set to ",(0,i.kt)("em",{parentName:"li"},"declarative")," to help keep your features high level and declarative"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/settings/reference#gwen-behavior-rules"},(0,i.kt)("inlineCode",{parentName:"a"},"gwen.behavior.rules"))," is set to ",(0,i.kt)("em",{parentName:"li"},"strict")," to enforce proper behavioural semantics and Given-When-Then order")),(0,i.kt)("p",null,"You can relax these by setting them to ",(0,i.kt)("em",{parentName:"p"},"imperative")," and ",(0,i.kt)("em",{parentName:"p"},"lenient")," instead if you find them too rigid."),(0,i.kt)("h4",{id:"web-driver-settings-1"},"Web driver settings"),(0,i.kt)("p",null,"Gwen has an embedded web driver manager which automatically downloads and installs native web drivers for you on most platforms. If however you need to manage this manually, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/advanced/web-driver-management"},"Web Driver Management")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/settings/reference#web-settings"},"Web Settings")," for options."),(0,i.kt)("h3",{id:"execute-the-samples-1"},"Execute the samples"),(0,i.kt)("p",null,"To confirm your setup, execute the samples in the ",(0,i.kt)("inlineCode",{parentName:"p"},"samples")," directory and delete (or keep) them when done."),(0,i.kt)("admonition",{title:"Launch Gwen",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Run the following command in your project to execute the samples."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"gwen -b samples\n")),(0,i.kt)("p",{parentName:"admonition"},"Where:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"-b")," switch instructs Gwen to exit immediately after executing the samples. Omitting it will open the ",(0,i.kt)("a",{parentName:"li",href:"/docs/cli/repl"},"REPL Console")," instead of exiting."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"samples")," is the directory containing the meta and feature samples to execute ")),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"/docs/cli"},"Gwen CLI"))),(0,i.kt)("p",null,"The sample features will execute and a ",(0,i.kt)("a",{parentName:"p",href:"/docs/reports/html"},"HTML evaluation report")," will be generated at ",(0,i.kt)("inlineCode",{parentName:"p"},"output/reports/index.html")," in your project."))))}g.isMDXComponent=!0}}]);