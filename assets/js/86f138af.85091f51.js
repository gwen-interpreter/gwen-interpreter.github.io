"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9530],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294);function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(3117),i=n(7294),a=n(2389),o=n(662),l=n(6010),s="tabItem_LplD";function u(e){var t,n,a,u=e.lazy,p=e.block,c=e.defaultValue,d=e.values,m=e.groupId,f=e.className,g=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,o.lx)(v,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===c?c:null!=(t=null!=c?c:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=g[0])?void 0:a.props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.UB)(),N=y.tabGroupChoices,w=y.setTabGroupChoices,b=(0,i.useState)(k),C=b[0],j=b[1],O=[],x=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=N[m];null!=T&&T!==C&&v.some((function(e){return e.value===T}))&&j(T)}var E=function(e){var t=e.currentTarget,n=O.indexOf(t),r=v[n].value;r!==C&&(x(t),j(r),null!=m&&w(m,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var i=O.indexOf(e.currentTarget)-1;n=O[i]||O[O.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},f)},v.map((function(e){var t=e.value,n=e.label,a=e.attributes;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return O.push(e)},onKeyDown:P,onFocus:E,onClick:E},a,{className:(0,l.Z)("tabs__item",s,null==a?void 0:a.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),u?(0,i.cloneElement)(g.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function p(e){var t=(0,a.Z)();return i.createElement(u,(0,r.Z)({key:String(t)},e))}},1347:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),o=n(9960),l=(n(9877),n(8215),["components"]),s={slug:"/settings",toc_min_heading_level:2,toc_max_heading_level:3},u="Gwen Settings",p={unversionedId:"settings/settings",id:"settings/settings",title:"Gwen Settings",description:"Settings Files",source:"@site/docs/07-settings/01-settings.mdx",sourceDirName:"07-settings",slug:"/settings",permalink:"/docs/settings",editUrl:"https://github.com/gwen-interpreter/gwen-interpreter.github.io/edit/master/docs/07-settings/01-settings.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/settings",toc_min_heading_level:2,toc_max_heading_level:3},sidebar:"tutorialSidebar",previous:{title:"DSL Reference",permalink:"/docs/dsl/reference"},next:{title:"Settings Reference",permalink:"/docs/settings/reference"}},c={},d=[{value:"Settings Files",id:"settings-files",level:2},{value:"Formats",id:"formats",level:3},{value:"Load order and precedence",id:"load-order-and-precedence",level:2},{value:"Maintaining settings",id:"maintaining-settings",level:2},{value:"User settings",id:"user-settings",level:3},{value:"Launch settings",id:"launch-settings",level:3},{value:"Project settings",id:"project-settings",level:3}],m={toc:d};function f(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gwen-settings"},"Gwen Settings"),(0,a.kt)("h2",{id:"settings-files"},"Settings Files"),(0,a.kt)("p",null,"All Gwen settings and properties are maintained in files in your project."),(0,a.kt)("h3",{id:"formats"},"Formats"),(0,a.kt)("p",null,"The following settings file formats are supported:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/lightbend/config/blob/master/HOCON.md#hocon-human-optimized-config-object-notation"},"HOCON")," (Human-Optimized Config Object Notation), since ",(0,a.kt)(o.Z,{to:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v3.0.0",mdxType:"Link"},"v3.0.0"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The recommended and default format"),(0,a.kt)("li",{parentName:"ul"},"A superset of JSON"),(0,a.kt)("li",{parentName:"ul"},"Maintained in ",(0,a.kt)("inlineCode",{parentName:"li"},".conf")," files"))),(0,a.kt)("li",{parentName:"ul"},"JSON, since ",(0,a.kt)(o.Z,{to:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v3.0.0",mdxType:"Link"},"v3.0.0"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Pure JSON format"),(0,a.kt)("li",{parentName:"ul"},"Maintained in ",(0,a.kt)("inlineCode",{parentName:"li"},".json")," files"))),(0,a.kt)("li",{parentName:"ul"},"Properties, since ",(0,a.kt)(o.Z,{to:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v1.0.0",mdxType:"Link"},"v1.0.0"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Legacy Java properties style format"),(0,a.kt)("li",{parentName:"ul"},"Flat ",(0,a.kt)("inlineCode",{parentName:"li"},"name = value")," pairs"),(0,a.kt)("li",{parentName:"ul"},"Maintained in ",(0,a.kt)("inlineCode",{parentName:"li"},".properties")," files")))),(0,a.kt)("p",null,"Ideally you should use one format for all your settings files, but using combinations of the above is also permitted. Priority will be given in the order shown to same named files in a directory having different formats:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},".conf")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},".json")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},".properties"))),(0,a.kt)("h2",{id:"load-order-and-precedence"},"Load order and precedence"),(0,a.kt)("p",null,"Settings are loaded in the following order of precedence, with those higher in the list overriding the lower."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"System properties",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Passed to the ",(0,a.kt)("a",{parentName:"li",href:"/docs/cli"},"Gwen CLI")," as ",(0,a.kt)("inlineCode",{parentName:"li"},"-Dname=value")," pairs"))),(0,a.kt)("li",{parentName:"ol"},"User settings",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"gwen.conf"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"gwen.json"),", or ",(0,a.kt)("inlineCode",{parentName:"li"},"gwen.properties")," file in your user directory"))),(0,a.kt)("li",{parentName:"ol"},"Launch settings",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Comma separated list of ",(0,a.kt)("inlineCode",{parentName:"li"},"*.conf"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"*.json"),", or ",(0,a.kt)("inlineCode",{parentName:"li"},"*.properies")," files passed to the Gwen CLI via the ",(0,a.kt)("inlineCode",{parentName:"li"},"-c|--conf")," launch option (or ",(0,a.kt)("inlineCode",{parentName:"li"},"-p|--properties")," for Gwen versions prior to v3.0.0). These are loaded in the order given with latter entries overriding the former."))),(0,a.kt)("li",{parentName:"ol"},"Project settings",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"gwen.conf"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"gwen.json")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"gwen.properties")," file in your root project directory"))),(0,a.kt)("li",{parentName:"ol"},"Default settings",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Internal Gwen defaults")))),(0,a.kt)("h2",{id:"maintaining-settings"},"Maintaining settings"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"System properties override all other settings")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"-Dname=value")," pairs passed to the Gwen CLI as system properties have topmost precedence and will always override ALL other settings."))),(0,a.kt)("p",null,"You can maintain settings and override internal defaults at various levels as described here."),(0,a.kt)("h3",{id:"user-settings"},"User settings"),(0,a.kt)("p",null,"User-level settings can optionally be defined in a ",(0,a.kt)("inlineCode",{parentName:"p"},"gwen.conf|json|properties")," file in the root of your user directory on a machine. These are useful when you want to override certain settings on a machine for a user."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," /Users\n \u2514\u2500\u2500 /<username> (~/) \n     \u2514\u2500\u2500 gwen.conf           # User-level overrides\n")),(0,a.kt)("h3",{id:"launch-settings"},"Launch settings"),(0,a.kt)("p",null,"You can maintain any settings and properties (except ",(0,a.kt)("a",{parentName:"p",href:"/docs/settings/reference#cli-settings"},"CLI options"),") in your own files and explicitly pass them to Gwen at launch time using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/cli#gwen-cli-options-conf"},(0,a.kt)("inlineCode",{parentName:"a"},"-c|conf"))," CLI option. For convenience, you would typically store these somewhere within your project where your ",(0,a.kt)("inlineCode",{parentName:"p"},"features")," directory lives however you are free to store them in any location you wish."),(0,a.kt)("h3",{id:"project-settings"},"Project settings"),(0,a.kt)("p",null,"When you ",(0,a.kt)("a",{parentName:"p",href:"/docs/get-started"},"set up")," and initialise your project, all project level settings are stored in a ",(0,a.kt)("inlineCode",{parentName:"p"},"gwen.conf|json|properties")," file in the root of the project. Gwen automatically discovers and loads this file for you, so you don't need to explictly pass it to Gwen when you launch in the project directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," /project                    # Your project root\n \u2514\u2500\u2500 gwen.conf               # Project settings\n")))}f.isMDXComponent=!0}}]);