"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[461],{8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),i=n(9443);var o=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=n(6010),s="tabItem_1uMI",l="tabItemActive_2DSg";var p=function(e){var t,n=e.lazy,i=e.block,p=e.defaultValue,d=e.values,m=e.groupId,c=e.className,u=a.Children.toArray(e.children),h=null!=d?d:u.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=p?p:null==(t=u.find((function(e){return e.props.default})))?void 0:t.props.value,k=o(),g=k.tabGroupChoices,w=k.setTabGroupChoices,N=(0,a.useState)(v),f=N[0],b=N[1],y=[];if(null!=m){var x=g[m];null!=x&&x!==f&&h.some((function(e){return e.value===x}))&&b(x)}var E=function(e){var t=e.currentTarget,n=y.indexOf(t),a=h[n].value;b(a),null!=m&&(w(m,a),setTimeout((function(){var e,n,a,i,o,r,s,p;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,o=e.right,r=window,s=r.innerHeight,p=r.innerWidth,n>=0&&o<=p&&i<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},L=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case"ArrowLeft":var i=y.indexOf(e.target)-1;n=y[i]||y[y.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},c)},h.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,r.Z)("tabs__item",s,{"tabs__item--active":f===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:L,onFocus:E,onClick:E},null!=n?n:t)}))),n?(0,a.cloneElement)(u.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},u.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},5417:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return c},default:function(){return h}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=n(5064),s=n(8215),l=["components"],p={},d="REPL Console",m={unversionedId:"cli/repl",id:"cli/repl",isDocsHomePage:!1,title:"REPL Console",description:"Gwen comes with a REPL (Read-Eval-Print-Loop) console. This is a command line shell that prompts you for steps, evaluates them, and outputs their status in real time. It enables you to experiment and observe the execution of steps as you enter (or paste) them which is very useful for debugging and analysis. Everything you enter is stored in a local history file and you can use the up and down arrow keys to recall previous inputs.",source:"@site/docs/04-cli/02-repl.mdx",sourceDirName:"04-cli",slug:"/cli/repl",permalink:"/docs/cli/repl",editUrl:"https://github.com/gwen-interpreter/gwen-interpreter.github.io/edit/master/docs/04-cli/02-repl.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gwen CLI",permalink:"/docs/cli/gwen-cli"}},c=[{value:"Starting the REPL",id:"starting-the-repl",children:[]},{value:"REPL Commands",id:"repl-commands",children:[]},{value:"Tab Completion",id:"tab-completion",children:[]},{value:"Paste Mode",id:"paste-mode",children:[]},{value:"Exiting the REPL",id:"exiting-the-repl",children:[]}],u={toc:c};function h(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"repl-console"},"REPL Console"),(0,o.kt)("p",null,"Gwen comes with a REPL (Read-Eval-Print-Loop) console. This is a command line shell that prompts you for steps, evaluates them, and outputs their status in real time. It enables you to experiment and observe the execution of steps as you enter (or paste) them which is very useful for debugging and analysis. Everything you enter is stored in a local history file and you can use the up and down arrow keys to recall previous inputs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"   __ ___      _____ _ __     _    \n  / _` \\ \\ /\\ / / _ \\ '_ \\   { \\,\" \n | (_| |\\ V  V /  __/ | | | {_`/   \n  \\__, | \\_/\\_/ \\___|_| |_|   `    \n  |___/                            \n                                   \nWelcome to gwen-web v<version>\ngweninterpreter.org\n\nINFO - Default Gherkin feature dialect is: en\nINFO - Environment context initialised\nINFO - gwen-web.sh \n\nREPL Console\n\nEnter steps to evaluate or type exit to quit..\n\ngwen>\n")),(0,o.kt)("h2",{id:"starting-the-repl"},"Starting the REPL"),(0,o.kt)("p",null,"To start a REPL session, invoke the ",(0,o.kt)("a",{parentName:"p",href:"/docs/cli/gwen-cli"},"Gwen CLI")," without specifying the ",(0,o.kt)("inlineCode",{parentName:"p"},"-b")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"--batch"),") switch."),(0,o.kt)(r.Z,{groupId:"setup",defaultValue:"standalone",values:[{label:"Standalone",value:"standalone"},{label:"Gwen Workspace",value:"workspace"},{label:"JS Project",value:"js"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"standalone",mdxType:"TabItem"},(0,o.kt)(r.Z,{groupId:"os",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Open REPL")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To open a new REPL session:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gwen\n")),(0,o.kt)("p",{parentName:"div"},"To load meta and open the REPL:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gwen -m path/to/file.meta\n")),(0,o.kt)("p",{parentName:"div"},"To execute a feature and open the REPL:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gwen path/to/file.feature\n"))))),(0,o.kt)(s.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Open REPL")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To open a new REPL session:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gwen\n")),(0,o.kt)("p",{parentName:"div"},"To load meta and open the REPL:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gwen -m path\\to\\file.meta\n")),(0,o.kt)("p",{parentName:"div"},"To execute a feature and open the REPL:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gwen path\\to\\file.feature\n"))))))),(0,o.kt)(s.Z,{value:"workspace",mdxType:"TabItem"},(0,o.kt)(r.Z,{groupId:"os",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Open REPL")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To open a new REPL session:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./gwen\n")),(0,o.kt)("p",{parentName:"div"},"To load meta and open the REPL:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./gwen -m path/to/file.meta\n")),(0,o.kt)("p",{parentName:"div"},"To execute a feature and open the REPL:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./gwen path/to/file.feature\n"))))),(0,o.kt)(s.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Open REPL")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To open a new REPL session:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gwen\n")),(0,o.kt)("p",{parentName:"div"},"To load meta and open the REPL:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gwen -m path\\to\\file.meta\n")),(0,o.kt)("p",{parentName:"div"},"To execute a feature and open the REPL:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gwen path\\to\\file.feature\n"))))))),(0,o.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Coming to Gwen 3")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Support for JS projects is coming soon to Gwen 3."))))),(0,o.kt)("h2",{id:"repl-commands"},"REPL Commands"),(0,o.kt)("p",null,"Once in the REPL, you can type ",(0,o.kt)("inlineCode",{parentName:"p"},"help")," at the ",(0,o.kt)("inlineCode",{parentName:"p"},"gwen>")," prompt to list the available commands."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Gwen REPL commands:\n\nhelp\n  Displays this help text\n\nenv [switch] ["filter"]\n  Lists attributes in the current environment\n    Only lists visible attributes if no options are specified\n    switch : (optional)\n      -a : to list all attributes in all scopes\n      -f : to list all attributes in the feature (global) scope\n    filter : (optional) literal string or regex filter expression\n\n:paste|paste\n   Enters paste mode (for evaluating multiline steps)\n\nhistory\n  Lists all previously entered commands\n\n!#\n  Executes a previously entered command (history bang operator)\n    # : the history command number\n\nGiven|When|Then|And|But step-expression\n  Evaluates a step\n    step-expression : the step expression\n\nexit|quit|bye\n  Closes the REPL session and exits\n\nctrl-D\n   If in paste mode: exits paste mode and interprets provided steps\n   Otherwise: Closes REPL session and exits\n\ntab\n  Press the tab key for tab completion\n')),(0,o.kt)("h2",{id:"tab-completion"},"Tab Completion"),(0,o.kt)("p",null,"You can press the tab key at any time to lookup and select available commands, ",(0,o.kt)("a",{parentName:"p",href:"/docs/dsl/gwen-dsl"},"DSL steps")," and custom StepDefs."),(0,o.kt)("h2",{id:"paste-mode"},"Paste Mode"),(0,o.kt)("p",null,"Should you attempt to enter a multiline step into the REPL, you will quickly discover that the first line will execute and fail as soon as you enter it without waiting for you to enter the remaining lines first. To address this, we have introduced a ",(0,o.kt)("em",{parentName:"p"},"paste")," mode. "),(0,o.kt)("p",null,"To enable paste mode, type ",(0,o.kt)("inlineCode",{parentName:"p"},":paste")," into the REPL prompt. The following will appear.."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gwen> :paste\n\nREPL Console (paste mode)\n\nEnter or paste steps and press ctrl-D to evaluate..\n\n")),(0,o.kt)("p",null,"You will then be able to enter or paste a multiple step without anything being executed when you press the enter key for each new line. For example, you could enter the following without any lines being executed prematurely:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," When the following items are added\n      | Item          |\n      | Get the milk  |\n      | Walk the dog  |\n\n")),(0,o.kt)("p",null,"Then when you're ready to execute or want to exit the ",(0,o.kt)("em",{parentName:"p"},"paste")," mode, insert a new empty line at the end and press press ",(0,o.kt)("inlineCode",{parentName:"p"},"cntl-D"),". The REPL will then evaluate the step you entered before the empty line and return to the standard prompt when done."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Exiting paste mode, interpreting now..\n\ngwen>  When the following items are added\n            | Item          |\n            | Get the milk  |\n            | Walk the dog  |\n\nINFO - Evaluating Step: When the following items are added\n..\nREPL Console\n\nEnter steps to evaluate or type exit to quit..\n\ngwen>\n")),(0,o.kt)("h2",{id:"exiting-the-repl"},"Exiting the REPL"),(0,o.kt)("p",null,"To exit the REPL, enter ",(0,o.kt)("inlineCode",{parentName:"p"},"exit"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"quit"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"bye")," or press ",(0,o.kt)("inlineCode",{parentName:"p"},"ctrl-D")," at the gwen prompt."))}h.isMDXComponent=!0}}]);