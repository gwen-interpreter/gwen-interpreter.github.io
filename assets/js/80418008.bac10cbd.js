"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6293],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(a),m=r,v=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return a?n.createElement(v,i(i({ref:t},u),{},{components:a})):n.createElement(v,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(6010),l="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(3117),r=a(7294),l=a(6010),i=a(2389),o=a(7392),p=a(7094),s=a(2466),u="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,a,i=e.lazy,c=e.block,m=e.defaultValue,v=e.values,h=e.groupId,f=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=v?v:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,o.l)(g,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===m?m:null!=(t=null!=m?m:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:k[0].props.value;if(null!==w&&!g.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,p.U)(),y=b.tabGroupChoices,x=b.setTabGroupChoices,T=(0,r.useState)(w),M=T[0],E=T[1],O=[],C=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var L=y[h];null!=L&&L!==M&&g.some((function(e){return e.value===L}))&&E(L)}var I=function(e){var t=e.currentTarget,a=O.indexOf(t),n=g[a].value;n!==M&&(C(t),E(n),null!=h&&x(h,String(n)))},Z=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=O.indexOf(e.currentTarget)+1;a=null!=(n=O[r])?n:O[0];break;case"ArrowLeft":var l,i=O.indexOf(e.currentTarget)-1;a=null!=(l=O[i])?l:O[O.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},f)},g.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:M===t?0:-1,"aria-selected":M===t,key:t,ref:function(e){return O.push(e)},onKeyDown:Z,onFocus:I,onClick:I},i,{className:(0,l.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":M===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(k.filter((function(e){return e.props.value===M}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==M})}))))}function m(e){var t=(0,i.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},7941:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),i=(a(9960),a(5488)),o=a(5162),p=["components"],s={toc_min_heading_level:2,toc_max_heading_level:2},u="HTML Reports",d={unversionedId:"reports/html",id:"reports/html",title:"HTML Reports",description:"Since v1.0.0",source:"@site/docs/10-reports/02-html.mdx",sourceDirName:"10-reports",slug:"/reports/html",permalink:"/docs/reports/html",draft:!1,editUrl:"https://github.com/gwen-interpreter/gwen-interpreter.github.io/edit/master/docs/10-reports/02-html.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"Console Reports",permalink:"/docs/reports/console"},next:{title:"Screenshots",permalink:"/docs/reports/screenshots"}},c={},m=[{value:"Generate reports",id:"generate-reports",level:2},{value:"Output",id:"output",level:3},{value:"Output",id:"output-1",level:3},{value:"View report",id:"view-report",level:2},{value:"Expand Step Defs",id:"expand-step-defs",level:3}],v={toc:m};function h(e){var t=e.components,s=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,n.Z)({},v,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"html-reports"},"HTML Reports"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Since ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v1.0.0"},"v1.0.0"))),(0,l.kt)("p",null,"Pretty HTML reports capture evaluated results and statistics."),(0,l.kt)("h2",{id:"generate-reports"},"Generate reports"),(0,l.kt)(i.Z,{groupId:"setup",defaultValue:"project",values:[{label:"Project",value:"project"},{label:"Standalone",value:"standalone"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"project",mdxType:"TabItem"},(0,l.kt)("p",null,"Launch Gwen with the ",(0,l.kt)("inlineCode",{parentName:"p"},"-f html")," option to generate HTML reports when executing your features."),(0,l.kt)(i.Z,{groupId:"jstool",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Example")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Execute features in the ",(0,l.kt)("em",{parentName:"p"},"gwen/features/todo")," folder and generate HTML reports."),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn gwen -b -f html gwen/features/todo\n")),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("a",{parentName:"p",href:"/docs/cli"},"Gwen CLI"))))),(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Example")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Execute features in the ",(0,l.kt)("em",{parentName:"p"},"gwen/features/todo")," folder and generate HTML reports."),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm run gwen -- -b -f html gwen/features/todo\n")),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("a",{parentName:"p",href:"/docs/cli"},"Gwen CLI"))))),(0,l.kt)(o.Z,{value:"pnpm",mdxType:"TabItem"},(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Example")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Execute features in the ",(0,l.kt)("em",{parentName:"p"},"gwen/features/todo")," folder and generate HTML reports."),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pnpm gwen -b -f html gwen/features/todo\n")),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("a",{parentName:"p",href:"/docs/cli"},"Gwen CLI")))))),(0,l.kt)("h3",{id:"output"},"Output"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Reports will be generated in the ",(0,l.kt)("inlineCode",{parentName:"li"},"gwen/output/reports")," directory as per the default ",(0,l.kt)("a",{parentName:"li",href:"/docs/settings/reference#gwen-cli-options-report"},(0,l.kt)("inlineCode",{parentName:"a"},"gwen.cli.options.report"))," setting",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The HTML index page will be generated at ",(0,l.kt)("inlineCode",{parentName:"li"},"gwen/output/reports/index.html"),"."),(0,l.kt)("li",{parentName:"ul"},"If you want reports generated in a different directory, you can either:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Amend the above setting to change the default"),(0,l.kt)("li",{parentName:"ul"},"Or include the ",(0,l.kt)("inlineCode",{parentName:"li"},"-r|--report")," CLI option and specify a directory on every launch"))))))),(0,l.kt)(o.Z,{value:"standalone",mdxType:"TabItem"},(0,l.kt)("p",null,"Launch Gwen with the ",(0,l.kt)("inlineCode",{parentName:"p"},"-f html")," option to generate HTML reports when executing your features."),(0,l.kt)(i.Z,{groupId:"os",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Example")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Execute features in the ",(0,l.kt)("em",{parentName:"p"},"features/todo")," folder and generate HTML reports."),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"gwen -b -f html features/todo\n")),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("a",{parentName:"p",href:"/docs/cli"},"Gwen CLI"))))),(0,l.kt)(o.Z,{value:"windows",mdxType:"TabItem"},(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Example")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Execute features in the ",(0,l.kt)("em",{parentName:"p"},"features/todo")," folder and generate HTML reports."),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"gwen -b -f html features\\todo\n")),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("a",{parentName:"p",href:"/docs/cli"},"Gwen CLI")))))),(0,l.kt)("h3",{id:"output-1"},"Output"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Since ",(0,l.kt)("a",{parentName:"li",href:"/docs/gwen3"},"Gwen 3"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Reports will be generated in the ",(0,l.kt)("inlineCode",{parentName:"li"},"output/reports")," directory as per the default ",(0,l.kt)("a",{parentName:"li",href:"/docs/settings/reference#gwen-cli-options-report"},(0,l.kt)("inlineCode",{parentName:"a"},"gwen.cli.options.report"))," setting",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The HTML index page will be generated at ",(0,l.kt)("inlineCode",{parentName:"li"},"gwen/output/reports/index.html"),"."),(0,l.kt)("li",{parentName:"ul"},"If you want reports generated in a different directory, you can either:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Amend the above setting to change the default"),(0,l.kt)("li",{parentName:"ul"},"Or include the ",(0,l.kt)("inlineCode",{parentName:"li"},"-r|--report")," CLI option to specify a directory on every launch"))))))),(0,l.kt)("li",{parentName:"ul"},"For prior versions",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Include the ",(0,l.kt)("inlineCode",{parentName:"li"},"-r|--report")," CLI option and specify a directory on every launch")))))),(0,l.kt)("h2",{id:"view-report"},"View report"),(0,l.kt)("p",null,"Opening the generated HTML report in your browser will display the summary."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Example HTML report",src:a(3182).Z,width:"1736",height:"978"})),(0,l.kt)("p",null,"Clicking the feature link in the summary will open the feature detail."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Example HTML report",src:a(6754).Z,width:"1676",height:"1430"})),(0,l.kt)("h3",{id:"expand-step-defs"},"Expand Step Defs"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/meta#stepdefs"},"StepDefs")," are inlined and can be expanded by hovering over steps with the mouse and clicking them in the report."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Example HTML report",src:a(7359).Z,width:"1672",height:"978"})))}h.isMDXComponent=!0},6754:function(e,t,a){t.Z=a.p+"assets/images/sample-html-report-detail-328df7ded0e6d5dfe2a14edc8c0b81d6.png"},7359:function(e,t,a){t.Z=a.p+"assets/images/sample-html-report-expanded-06951577bf780705e047670ee54f2847.png"},3182:function(e,t,a){t.Z=a.p+"assets/images/sample-html-report-summary-5dbd6d31971cfdf75495b412b05cc11a.png"}}]);