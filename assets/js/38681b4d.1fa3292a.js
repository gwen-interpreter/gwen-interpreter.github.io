"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2150],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,f=d["".concat(u,".").concat(c)]||d[c]||m[c]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),r=n(4334),o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(3117),r=n(7294),o=n(4334),i=n(2389),l=n(7392),u=n(7094),p=n(2466),s="tabList__CuJ",m="tabItem_LNqP";function d(e){var t,n,i=e.lazy,d=e.block,c=e.defaultValue,f=e.values,g=e.groupId,k=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,l.l)(v,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(t=null!=c?c:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,u.U)(),w=y.tabGroupChoices,x=y.setTabGroupChoices,T=(0,r.useState)(b),j=T[0],E=T[1],L=[],O=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var C=w[g];null!=C&&C!==j&&v.some((function(e){return e.value===C}))&&E(C)}var M=function(e){var t=e.currentTarget,n=L.indexOf(t),a=v[n].value;a!==j&&(O(t),E(a),null!=g&&x(g,String(a)))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=L.indexOf(e.currentTarget)+1;n=null!=(a=L[r])?a:L[0];break;case"ArrowLeft":var o,i=L.indexOf(e.currentTarget)-1;n=null!=(o=L[i])?o:L[L.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},k)},v.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return L.push(e)},onKeyDown:I,onFocus:M,onClick:M},i,{className:(0,o.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(h.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function c(e){var t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},5974:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return c}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=(n(9960),n(5488)),l=n(5162),u=["components"],p={toc_min_heading_level:2,toc_max_heading_level:2},s="JUnit-XML Reports",m={unversionedId:"reports/junit-xml",id:"reports/junit-xml",title:"JUnit-XML Reports",description:"Gwen can generete JUnit-XML reports enabling you to integrate evaluation results with build servers (such as Jenkins) and other tools.",source:"@site/docs/10-reports/06-junit-xml.mdx",sourceDirName:"10-reports",slug:"/reports/junit-xml",permalink:"/docs/reports/junit-xml",draft:!1,editUrl:"https://github.com/gwen-interpreter/gwen-interpreter.github.io/edit/master/docs/10-reports/06-junit-xml.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"Video Recordings",permalink:"/docs/reports/video-recordings"},next:{title:"JSON Reports",permalink:"/docs/reports/json"}},d={},c=[{value:"Generate reports",id:"generate-reports",level:2},{value:"Output",id:"output",level:3},{value:"Output",id:"output-1",level:3},{value:"Sample output",id:"sample-output",level:2}],f={toc:c};function g(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"junit-xml-reports"},"JUnit-XML Reports"),(0,o.kt)("p",null,"Gwen can generete JUnit-XML reports enabling you to integrate evaluation results with build servers (such as ",(0,o.kt)("a",{parentName:"p",href:"https://www.jenkins.io/"},"Jenkins"),") and other tools."),(0,o.kt)("h2",{id:"generate-reports"},"Generate reports"),(0,o.kt)(i.Z,{groupId:"setup",defaultValue:"project",values:[{label:"Project",value:"project"},{label:"Standalone",value:"standalone"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"project",mdxType:"TabItem"},(0,o.kt)("p",null,"Launch Gwen with the ",(0,o.kt)("inlineCode",{parentName:"p"},"-f junit")," option to generate JUnit-XML reports when executing your features."),(0,o.kt)(i.Z,{groupId:"jstool",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("admonition",{title:"Example",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Execute features in the ",(0,o.kt)("em",{parentName:"p"},"gwen/features/todo")," folder and generate JUnit-XML reports only."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn gwen -b -f junit gwen/features/todo\n")),(0,o.kt)("p",{parentName:"admonition"},"Execute features in the ",(0,o.kt)("em",{parentName:"p"},"gwen/features/todo")," folder and generate HTML and JUnit-XML reports."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn gwen -b -f html,junit gwen/features/todo\n")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"/docs/cli"},"Gwen CLI")))),(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("admonition",{title:"Example",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Execute features in the ",(0,o.kt)("em",{parentName:"p"},"gwen/features/todo")," folder and generate JUnit-XML reports only."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm run gwen -- -b -f junit gwen/features/todo\n")),(0,o.kt)("p",{parentName:"admonition"},"Execute features in the ",(0,o.kt)("em",{parentName:"p"},"gwen/features/todo")," folder and generate HTML and JUnit-XML reports."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm run gwen -- -b -f html,junit gwen/features/todo\n")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"/docs/cli"},"Gwen CLI")))),(0,o.kt)(l.Z,{value:"pnpm",mdxType:"TabItem"},(0,o.kt)("admonition",{title:"Example",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Execute features in the ",(0,o.kt)("em",{parentName:"p"},"gwen/features/todo")," folder and generate JUnit-XML reports only."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"pnpm gwen -b -f junit gwen/features/todo\n")),(0,o.kt)("p",{parentName:"admonition"},"Execute features in the ",(0,o.kt)("em",{parentName:"p"},"gwen/features/todo")," folder and generate HTML and JUnit-XML reports."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"pnpm gwen -b -f html,junit gwen/features/todo\n")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"/docs/cli"},"Gwen CLI"))))),(0,o.kt)("h3",{id:"output"},"Output"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reports will be generated in the ",(0,o.kt)("inlineCode",{parentName:"li"},"gwen/output/reports")," directory as per the default ",(0,o.kt)("a",{parentName:"li",href:"/docs/settings/reference#gwen-cli-options-report"},(0,o.kt)("inlineCode",{parentName:"a"},"gwen.cli.options.report"))," setting",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The JUnit-XML report files will be generated at ",(0,o.kt)("inlineCode",{parentName:"li"},"gwen/output/reports/junit/TEST-*.xml"),". You can set this path in your Jenkins reporting configuration for example."),(0,o.kt)("li",{parentName:"ul"},"The HTML report will be generated at ",(0,o.kt)("inlineCode",{parentName:"li"},"gwen/output/reports/index.html"),"."),(0,o.kt)("li",{parentName:"ul"},"If you want reports generated in a different directory, you can either:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Amend the above setting to change the default"),(0,o.kt)("li",{parentName:"ul"},"Or include the ",(0,o.kt)("inlineCode",{parentName:"li"},"-r|--report")," CLI option and specify a directory on every launch"))))))),(0,o.kt)(l.Z,{value:"standalone",mdxType:"TabItem"},(0,o.kt)("p",null,"Launch Gwen with the ",(0,o.kt)("inlineCode",{parentName:"p"},"-f junit")," option to generate JUnit-XML reports when executing your features."),(0,o.kt)(i.Z,{groupId:"os",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("admonition",{title:"Example",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Execute features in the ",(0,o.kt)("em",{parentName:"p"},"features/todo")," folder and generate JUnit-XML reports only."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gwen -b -f junit features/todo\n")),(0,o.kt)("p",{parentName:"admonition"},"Execute features in the ",(0,o.kt)("em",{parentName:"p"},"features/todo")," folder and generate HTML and JUnit-XML reports."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gwen -b -f html,junit features/todo\n")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"/docs/cli"},"Gwen CLI")))),(0,o.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("admonition",{title:"Example",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Execute features in the ",(0,o.kt)("em",{parentName:"p"},"features/todo")," folder and generate JUnit-XML reports only."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gwen -b -f junit features\\todo\n")),(0,o.kt)("p",{parentName:"admonition"},"Execute features in the ",(0,o.kt)("em",{parentName:"p"},"features/todo")," folder and generate HTML and JUnit-XML reports."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gwen -b -f html,junit features\\todo\n")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"/docs/cli"},"Gwen CLI"))))),(0,o.kt)("h3",{id:"output-1"},"Output"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Since ",(0,o.kt)("a",{parentName:"li",href:"/docs/gwen3"},"Gwen 3"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Reports will be generated by default to the ",(0,o.kt)("inlineCode",{parentName:"li"},"output/reports")," directory",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The JUnit-XML report files will be generated at ",(0,o.kt)("inlineCode",{parentName:"li"},"output/reports/junit/TEST-*.xml"),". You can set this path in your Jenkins reporting configuration for example."),(0,o.kt)("li",{parentName:"ul"},"The HTML report will be generated at ",(0,o.kt)("inlineCode",{parentName:"li"},"output/reports/index.html"),"."))))),(0,o.kt)("li",{parentName:"ul"},"In prior versions",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You will need to specify ",(0,o.kt)("inlineCode",{parentName:"li"},"-r outdir")," on the CLI to generate reports in a desired directory.")))))),(0,o.kt)("h2",{id:"sample-output"},"Sample output"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"File: junit/TEST-features-todo-Todo.feature.xml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<testsuite hostname="machine-hostname" \n           name="features/todo/Todo.feature.Feature: Add todo items" \n           package="features/todo/Todo.feature" \n           tests="1" \n           errors="0" \n           failures="0" \n           skipped="0" \n           time="8.320" \n           timestamp="2021-10-09T01:48:54.888Z">\n  <properties>\n    ..\n  </properties>\n  <testcase name="Scenario 0001: Create todo list" \n            time="8.153601684" \n            status="Passed"/>\n</testsuite>\n')))}g.isMDXComponent=!0}}]);