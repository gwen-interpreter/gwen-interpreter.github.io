"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7300],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(7294),a=t(4334),o="tabItem_Ymn6";function l(e){var n=e.children,t=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:t},n)}},5488:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(3117),a=t(7294),o=t(4334),l=t(2389),i=t(7392),u=t(7094),s=t(2466),c="tabList__CuJ",p="tabItem_LNqP";function m(e){var n,t,l=e.lazy,m=e.block,d=e.defaultValue,f=e.values,b=e.groupId,k=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:h.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,i.l)(v,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===d?d:null!=(n=null!=d?d:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:h[0].props.value;if(null!==w&&!v.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,u.U)(),j=y.tabGroupChoices,N=y.setTabGroupChoices,E=(0,a.useState)(w),T=E[0],O=E[1],_=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var P=j[b];null!=P&&P!==T&&v.some((function(e){return e.value===P}))&&O(P)}var D=function(e){var n=e.currentTarget,t=_.indexOf(n),r=v[t].value;r!==T&&(x(n),O(r),null!=b&&N(b,String(r)))},G=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r,a=_.indexOf(e.currentTarget)+1;t=null!=(r=_[a])?r:_[0];break;case"ArrowLeft":var o,l=_.indexOf(e.currentTarget)-1;t=null!=(o=_[l])?o:_[_.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},k)},v.map((function(e){var n=e.value,t=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return _.push(e)},onKeyDown:G,onFocus:D,onClick:D},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),l?(0,a.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function d(e){var n=(0,l.Z)();return a.createElement(m,(0,r.Z)({key:String(n)},e))}},9593:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),l=(t(9960),t(5488)),i=t(5162),u=(t(4996),["components"]),s={title:"Jenkins",toc_min_heading_level:2,toc_max_heading_level:3},c="Running Gwen on Jenkins",p={unversionedId:"jenkins",id:"jenkins",title:"Jenkins",description:"Jenkins job",source:"@site/docs/13-jenkins.mdx",sourceDirName:".",slug:"/jenkins",permalink:"/docs/jenkins",draft:!1,editUrl:"https://github.com/gwen-interpreter/gwen-interpreter.github.io/edit/master/docs/13-jenkins.mdx",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Jenkins",toc_min_heading_level:2,toc_max_heading_level:3},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/docs/docker"},next:{title:"BrowserStack",permalink:"/docs/browserstack"}},m={},d=[{value:"Jenkins job",id:"jenkins-job",level:2}],f={toc:d};function b(e){var n=e.components,t=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"running-gwen-on-jenkins"},"Running Gwen on Jenkins"),(0,o.kt)("h2",{id:"jenkins-job"},"Jenkins job"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Since ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v3.16.0"},"v3.16.0"),", the ",(0,o.kt)("a",{parentName:"p",href:"/docs/cli#gwen-cli-options-init-jenkins"},(0,o.kt)("inlineCode",{parentName:"a"},"init --jenkins"))," command was introduced to generate a Jenkins file in your project. You will need to create the file manually if you are using an older version.")),(0,o.kt)("p",null,"To run your Gwen project in Jenkins, get your Gwen project ",(0,o.kt)("a",{parentName:"p",href:"/docs/docker"},"running in Docker")," first. Then create a Jenkins pipeline file in your project as shown below."),(0,o.kt)(l.Z,{groupId:"jstool",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("p",null,"  Run the following command in the root of your project to generate a Jenkins pipeline file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn gwen init --jenkins\n"))),(0,o.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("p",null,"  Run the following command in the root of your project to generate a Jenkins pipeline file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm run gwen init --jenkins\n"))),(0,o.kt)(i.Z,{value:"pnpm",mdxType:"TabItem"},(0,o.kt)("p",null,"  Run the following command in the root of your project to generate a Jenkins pipeline file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"pnpm gwen init --jenkins\n")))),(0,o.kt)("p",null,"The following file will be created"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"{3}","{3}":!0},"./project                    # Your project root\n\u2514\u2500\u2500 /gwen\n    \u2514\u2500\u2500Jenkinsfile           # Jenkins pipeline script file\n")),(0,o.kt)("p",null,"With the following content"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"pipeline {\n  agent {\n      // replace with an agent that has docker installed\n      label 'docker-agent'\n  }\n  parameters { \n    choice(name: 'env', choices: ['dev', 'test', 'staging', 'prod'], description: 'Target environment')\n    choice(name: 'browser', choices: ['chrome', 'firefox', 'edge'], description: 'Target web browser')\n    booleanParam(name: 'dry_run', defaultValue: false, description: 'Validate without executing')\n    booleanParam(name: 'parallel', defaultValue: false, description: 'Enable parallel execution') \n    choice(name: 'threads', choices: ['auto', '2', '4', '8', '12', '16', '24', '32', '48', '64'], description: 'Number of parallel threads (auto = one thread per available core)')\n    booleanParam(name: 'headless', defaultValue: false, description: 'Enable headless browser') \n    booleanParam(name: 'video', defaultValue: true, description: 'Enable video capture (not available with parallel or headless)')\n  }\n  environment {\n    GWEN_ENV = ${params.env}\n    GWEN_BROWSER = \"${params.browser}\"\n    GWEN_DRY_RUN = \"${params.dry_run}\"\n    GWEN_PARALLEL = \"${params.parallel}\"\n    GWEN_THREADS = \"${params.threads}\"\n    GWEN_HEADLESS = \"${params.headless}\"\n    GWEN_VIDEO = \"${params.video}\"\n  }\n  stages {\n    stage(\"Prepare\") {\n      steps {\n        script {\n          // Create output dir to avoid potential permission issues in docker\n          sh 'mkdir -p gwen/output'\n        }\n      }\n    }\n    stage(\"Gwen\") {\n      steps {\n        script {\n          // Spin up environment and execute Gwen in docker\n          sh \"docker-compose -f gwen/docker-compose.yml run gwen\"\n        }\n      }\n      post {\n        always {\n          sh \"docker-compose -f gwen/docker-compose.yml down\"\n          archiveArtifacts artifacts: 'gwen/output/reports/**'\n          publishHTML(target: [\n                        allowMissing          : false,\n                        alwaysLinkToLastBuild : true,\n                        keepAll               : true,\n                        reportDir             : \"gwen/output/reports/html\",\n                        reportFiles           : 'index.html',\n                        reportName            : \"Gwen-Report\"\n          ])\n        }\n      }\n    }\n  }\n}\n")),(0,o.kt)("p",null,"Push or commit your project to a Git repostitory"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Checkout your Gwen project from Git"),(0,o.kt)("li",{parentName:"ul"},"Specify the ",(0,o.kt)("inlineCode",{parentName:"li"},"gwen/Jenkinsfile")," above as the script"),(0,o.kt)("li",{parentName:"ul"},"Save the job")),(0,o.kt)("p",null,"Schedule or manually trigger your Jenkins job"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Evaluation reports will be generated and published on each run (Gwen-Report links)")))}b.isMDXComponent=!0}}]);