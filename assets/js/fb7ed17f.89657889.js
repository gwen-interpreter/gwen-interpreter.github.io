"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[483],{7218:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return c},default:function(){return h}});var n=t(7462),r=t(3366),i=(t(7294),t(3905)),l=t(5064),o=t(8215),s=["components"],p={},d="Launcher",m={unversionedId:"cli/launcher",id:"cli/launcher",isDocsHomePage:!1,title:"Launcher",description:"Gwen CLI",source:"@site/docs/05-cli/01-launcher.mdx",sourceDirName:"05-cli",slug:"/cli/launcher",permalink:"/docs/cli/launcher",editUrl:"https://github.com/gwen-interpreter/gwen-interpreter.github.io/edit/master/docs/05-cli/01-launcher.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DSL Reference",permalink:"/docs/dsl/reference"},next:{title:"REPL Console",permalink:"/docs/cli/repl"}},c=[{value:"Gwen CLI",id:"gwen-cli",children:[{value:"Options and usage",id:"options-and-usage",children:[]}]},{value:"System properties and JVM options",id:"system-properties-and-jvm-options",children:[]}],u={toc:c};function h(e){var a=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"launcher"},"Launcher"),(0,i.kt)("h2",{id:"gwen-cli"},"Gwen CLI"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You will need to ",(0,i.kt)("a",{parentName:"p",href:"/docs/get-started"},"set up Gwen")," first to have to access the CLI."))),(0,i.kt)("h3",{id:"options-and-usage"},"Options and usage"),(0,i.kt)("p",null,"All launch operations can be invoked using the Gwen CLI. To list the usage and all available options, invoke the Gwen CLI with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--help")," switch:"),(0,i.kt)(l.Z,{groupId:"setup",defaultValue:"standalone",values:[{label:"Standalone",value:"standalone"},{label:"Gwen Workspace",value:"workspace"},{label:"JS Project",value:"js"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"standalone",mdxType:"TabItem"},(0,i.kt)("p",null,"Run the following command in a terminal window in any directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"gwen --help\n")),(0,i.kt)("p",null,"The following output will be displayed describing the usage and options:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Usage: gwen [options] [files/dirs]\n\n  --version               Print Gwen version\n  --help                  Print CLI usage\n  --parallel              Execute features or scenarios in parallel\n                          - depending on gwen.state.level (default is features)\n  --parallel-features     Execute features in parallel (unconditionally)\n  -b, --batch             Exit when execution completes (omit to open REPL)\n  -n, --dry-run           Check all syntax and bindings and report errors\n  -p, --properties files  Properties/settings files to load (comma separated)\n  -r, --report dir        Directory to output generated report(s) to\n  -f, --formats include   Report formats to include in output (comma separated)\n                          - html,junit,json,rp (default is html)\n  -t, --tags filter       Tags to @include or ~@exclude (comma separated)\n  -i, --input-data file   Input data feed (CSV file with column headers)\n  -m, --meta files/dirs   Meta files or directories (comma separated)\n  files/dirs              Feature files or directories (space separated)\n")),(0,i.kt)("h4",{id:"usage-examples"},"Usage examples"),(0,i.kt)(l.Z,{groupId:"os",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"linux",mdxType:"TabItem"},(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"CLI examples")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Execute a singe feature file:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"gwen -b path/to/file.feature\n")),(0,i.kt)("p",{parentName:"div"},"Recursively execute all feature files in a directory:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"gwen -b path/to/directory\n")),(0,i.kt)("p",{parentName:"div"},"Recursively execute all feature files in a directory in parallel:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"gwen -b --parallel path/to/directory\n")),(0,i.kt)("p",{parentName:"div"},"Recursively execute all feature files in a directory passing in a properties file"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"gwen -b -p path/to/file.properties path/to/directory\n")),(0,i.kt)("p",{parentName:"div"},"Check syntax and bindings for all feature and meta files in a directory and report errors"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"gwen -b -n -r output/reports path/to/directory\n")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To generate HTML ",(0,i.kt)("a",{parentName:"li",href:"/docs/reports/html"},"reports"),", add ",(0,i.kt)("inlineCode",{parentName:"li"},"-r output/reports")," to the command"),(0,i.kt)("li",{parentName:"ul"},"To generate HTML and JUnit-XML reports also, add ",(0,i.kt)("inlineCode",{parentName:"li"},"-r output/reports -f html,junit")," to the command"),(0,i.kt)("li",{parentName:"ul"},"Omitting the ",(0,i.kt)("inlineCode",{parentName:"li"},"-b")," switch will open the ",(0,i.kt)("a",{parentName:"li",href:"/docs/cli/repl"},"REPL Console")," when execution completes"))),(0,i.kt)(o.Z,{value:"windows",mdxType:"TabItem"},(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"CLI examples")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Execute a singe feature file:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"gwen -b path\\to\\file.feature\n")),(0,i.kt)("p",{parentName:"div"},"Recursively execute all feature files in a directory:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"gwen -b path\\to\\directory\n")),(0,i.kt)("p",{parentName:"div"},"Recursively execute all feature files in a directory in parallel:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"gwen -b --parallel path\\to\\directory\n")),(0,i.kt)("p",{parentName:"div"},"Recursively execute all feature files in a directory passing in a properties file"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"gwen -b -p path\\to\\file.properties path\\to\\directory\n")),(0,i.kt)("p",{parentName:"div"},"Check syntax and bindings for all feature and meta files in a directory and report errors"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"gwen -b -n -r output\\reports path\\to\\directory\n")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To generate HTML ",(0,i.kt)("a",{parentName:"li",href:"/docs/reports/html"},"reports"),", add ",(0,i.kt)("inlineCode",{parentName:"li"},"-r output\\reports")," to the command"),(0,i.kt)("li",{parentName:"ul"},"To generate HTML and JUnit-XML reports also, add ",(0,i.kt)("inlineCode",{parentName:"li"},"-r output\\reports -f html,junit")," to the command"),(0,i.kt)("li",{parentName:"ul"},"Omitting the ",(0,i.kt)("inlineCode",{parentName:"li"},"-b")," switch will open the ",(0,i.kt)("a",{parentName:"li",href:"/docs/cli/repl"},"REPL Console")," when execution completes"))))),(0,i.kt)(o.Z,{value:"workspace",mdxType:"TabItem"},(0,i.kt)("p",null,"Run the following command in a terminal window in your workspace directory:"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Deprecated")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://gweninterpreter.wordpress.com/2017/12/18/gwen-workspaces/"},"Gwen workspaces")," were introduced in Gwen 2 and will be deprected in Gwen 3+ in favor of JS projects."))),(0,i.kt)(l.Z,{groupId:"os",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"linux",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./gwen --help\n"))),(0,i.kt)(o.Z,{value:"windows",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"gwen --help\n")))),(0,i.kt)("p",null,"The following output will be displayed describing the usage and options:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Usage: gwen [options] [files/dirs]\n\n  --version               Print Gwen version\n  --help                  Print CLI usage\n  --parallel              Execute features or scenarios in parallel\n                          - depending on gwen.state.level (default is features)\n  --parallel-features     Execute features in parallel (unconditionally)\n  -b, --batch             Exit when execution completes (omit to open REPL)\n  -n, --dry-run           Check all syntax and bindings and report errors\n  -p, --properties files  Properties/settings files to load (comma separated)\n  -r, --report dir        Directory to output generated report(s) to\n  -f, --formats include   Report formats to include in output (comma separated)\n                          - html,junit,json,rp (default is html)\n  -t, --tags filter       Tags to @include or ~@exclude (comma separated)\n  -i, --input-data file   Input data feed (CSV file with column headers)\n  -m, --meta files/dirs   Meta files or directories (comma separated)\n  files/dirs              Feature files or directories (space separated)\n")),(0,i.kt)("h4",{id:"usage-examples-1"},"Usage examples"),(0,i.kt)(l.Z,{groupId:"os",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"linux",mdxType:"TabItem"},(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"CLI examples")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Execute a singe feature file:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./gwen -b path/to/file.feature\n")),(0,i.kt)("p",{parentName:"div"},"Recursively execute all feature files in a directory:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./gwen -b path/to/directory\n")),(0,i.kt)("p",{parentName:"div"},"Recursively execute all feature files in a directory in parallel:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./gwen -b --parallel path/to/directory\n")),(0,i.kt)("p",{parentName:"div"},"Recursively execute all feature files in a directory passing in a properties file"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./gwen -b -p path/to/file.properties path/to/directory\n")),(0,i.kt)("p",{parentName:"div"},"Check syntax and bindings for all feature and meta files in a directory and report errors"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./gwen -b -n path/to/directory\n")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The above will all generate HTML ",(0,i.kt)("a",{parentName:"li",href:"/docs/reports/html"},"reports")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"target/reports")),(0,i.kt)("li",{parentName:"ul"},"To generate HTML and JUnit-XML reports also, add ",(0,i.kt)("inlineCode",{parentName:"li"},"-f html,junit")," to the command"),(0,i.kt)("li",{parentName:"ul"},"Omitting the ",(0,i.kt)("inlineCode",{parentName:"li"},"-b")," switch will open the ",(0,i.kt)("a",{parentName:"li",href:"/docs/cli/repl"},"REPL Console")," when execution completes"))),(0,i.kt)(o.Z,{value:"windows",mdxType:"TabItem"},(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"CLI examples")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Execute a singe feature file:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"gwen -b path\\to\\file.feature\n")),(0,i.kt)("p",{parentName:"div"},"Recursively execute all feature files in a directory:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"gwen -b path\\to\\directory\n")),(0,i.kt)("p",{parentName:"div"},"Recursively execute all feature files in a directory in parallel:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"gwen -b --parallel path\\to\\directory\n")),(0,i.kt)("p",{parentName:"div"},"Recursively execute all feature files in a directory passing in a properties file"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"gwen -b -p path\\to\\file.properties path\\to\\directory\n")),(0,i.kt)("p",{parentName:"div"},"Check syntax and bindings for all feature and meta files in a directory and report errors"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"gwen -b -n path\\to\\directory\n")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The above will all generate HTML ",(0,i.kt)("a",{parentName:"li",href:"/docs/reports/html"},"reports")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"target\\reports")),(0,i.kt)("li",{parentName:"ul"},"To generate HTML and JUnit-XML reports also, add ",(0,i.kt)("inlineCode",{parentName:"li"},"-f html,junit")," to the command"),(0,i.kt)("li",{parentName:"ul"},"Omitting the ",(0,i.kt)("inlineCode",{parentName:"li"},"-b")," switch will open the ",(0,i.kt)("a",{parentName:"li",href:"/docs/cli/repl"},"REPL Console")," when execution completes"))))),(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Coming to Gwen 3")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Support for JS projects coming soon to Gwen 3."))))),(0,i.kt)("h2",{id:"system-properties-and-jvm-options"},"System properties and JVM options"),(0,i.kt)("p",null,"In addition to the above, you can also pass any number of Java system properties or JVM options to the CLI:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-Dprop.name=value"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"To pass a system property to the Java process that runs Gwen"),(0,i.kt)("li",{parentName:"ul"},"Will override any same named ",(0,i.kt)("a",{parentName:"li",href:"/docs/settings/reference"},"Gwen setting")),(0,i.kt)("li",{parentName:"ul"},"Will be picked up by ",(0,i.kt)("inlineCode",{parentName:"li"},"${prop.name}")," placeholders in feature and meta specs"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-J<JVM_OPTION>"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"To pass a JVM option to the Java process that runs Gwen"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"-J")," prefix will be stripped and ",(0,i.kt)("inlineCode",{parentName:"li"},"<JVM_OPTION>")," will be passed through")))))}h.isMDXComponent=!0}}]);