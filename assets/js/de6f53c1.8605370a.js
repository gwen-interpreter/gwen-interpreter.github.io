"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5485],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(a),c=r,f=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),r=a(4334),i="tabItem_Ymn6";function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(3117),r=a(7294),i=a(4334),l=a(2389),o=a(7392),s=a(7094),u=a(2466),p="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,a,l=e.lazy,m=e.block,c=e.defaultValue,f=e.values,h=e.groupId,g=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.l)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===c?c:null!=(t=null!=c?c:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:k[0].props.value;if(null!==N&&!v.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),S=w.tabGroupChoices,y=w.setTabGroupChoices,x=(0,r.useState)(N),I=x[0],C=x[1],T=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var _=S[h];null!=_&&_!==I&&v.some((function(e){return e.value===_}))&&C(_)}var O=function(e){var t=e.currentTarget,a=T.indexOf(t),n=v[a].value;n!==I&&(E(t),C(n),null!=h&&y(h,String(n)))},V=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=T.indexOf(e.currentTarget)+1;a=null!=(n=T[r])?n:T[0];break;case"ArrowLeft":var i,l=T.indexOf(e.currentTarget)-1;a=null!=(i=T[l])?i:T[T.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},g)},v.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:function(e){return T.push(e)},onKeyDown:V,onFocus:O,onClick:O},l,{className:(0,i.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":I===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(k.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==I})}))))}function c(e){var t=(0,l.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},965:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return f}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),l=a(9960),o=a(5488),s=a(5162),u=(a(4996),["components"]),p={toc_min_heading_level:2,toc_max_heading_level:3},d="Data Driven",m={unversionedId:"modes/data-driven",id:"modes/data-driven",title:"Data Driven",description:"CSV data feeds",source:"@site/docs/09-modes/06-data-driven.mdx",sourceDirName:"09-modes",slug:"/modes/data-driven",permalink:"/docs/modes/data-driven",draft:!1,editUrl:"https://github.com/gwen-interpreter/gwen-interpreter.github.io/edit/master/docs/09-modes/06-data-driven.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{toc_min_heading_level:2,toc_max_heading_level:3},sidebar:"tutorialSidebar",previous:{title:"Dry Runs",permalink:"/docs/modes/dry-runs"},next:{title:"Console Reports",permalink:"/docs/reports/console"}},c={},f=[{value:"CSV data feeds",id:"csv-data-feeds",level:2},{value:"Examples",id:"examples",level:4},{value:"@Examples annotation",id:"examples-annotation",level:2},{value:"Where filter",id:"where-filter",level:3},{value:"Name prefix",id:"name-prefix",level:3},{value:"Required flag",id:"required-flag",level:3}],h={toc:f};function g(e){var t=e.components,a=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"data-driven"},"Data Driven"),(0,i.kt)("h2",{id:"csv-data-feeds"},"CSV data feeds"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Since ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v1.0.0"},"v1.0.0"))),(0,i.kt)("p",null,"CSV data files can be passed into the interpreter to perform feature execution over multiple data sets. The first row in a CSV data file must be a list of column names for the contained data that follows. The values in each record will be bound to attributes in the feature scope having these same names. Feature steps can reference the bound data using these names."),(0,i.kt)("p",null,"Say you have a ",(0,i.kt)("inlineCode",{parentName:"p"},"users.csv")," file containing following user records."),(0,i.kt)("admonition",{title:"CSV",type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("em",{parentName:"p"},"File: data/users.csv")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"FIRST_NAME,LAST_NAME,JOB\nGwen,Stefani,Pop Singer\nGwyneth,Paltrow,Actress\nGwen,Cooper,Torchwood Agent\n"))),(0,i.kt)("p",null,"The first row in this file specifies a comma separated list of column names. The remaining rows specify the comma separated lists of values for each record. Now say you wanted to submit the details for each user to a web page through a single ",(0,i.kt)("inlineCode",{parentName:"p"},"submit-user.feature")," file that accepts all the user data as input one at a time. You can do this in the feature by referencing CSV data values by their column names as follows:"),(0,i.kt)("admonition",{title:"Feature",type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("em",{parentName:"p"},"File: features/submit-user.feature")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-gherkin"},'Feature: Submit user ${FIRST_NAME} ${LAST_NAME}\n\n  Scenario: submit user details\n    Given I navigate to the user details page\n     When I type FIRST_NAME in the first name field\n      And I type LAST_NAME in the last name field\n      And I type JOB in the job field\n      And I click the save button\n     Then the alert msg should be "User ${FIRST_NAME} saved"\n')),(0,i.kt)("p",{parentName:"admonition"},"Note: Interpolation of CSV fields ",(0,i.kt)("inlineCode",{parentName:"p"},"${FIRST_NAME} ${LAST_NAME}")," in the feature name and description is supported since ",(0,i.kt)(l.Z,{to:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v3.12.1",mdxType:"Link"},"v3.12.1"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The current CSV record number (starting at 1) is available as an implicit attribute named ",(0,i.kt)("inlineCode",{parentName:"p"},"data record number")," and can be accessed by reference or ",(0,i.kt)("a",{parentName:"p",href:"/docs/advanced/string-interpolation"},"interpolation"),".")),(0,i.kt)("p",null,"You can execute this feature for all users in the CSV file by launching Gwen with the ",(0,i.kt)("a",{parentName:"p",href:"/docs/cli#gwen-cli-options-input-data"},(0,i.kt)("inlineCode",{parentName:"a"},"-i|--input-data"))," CLI option."),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)(o.Z,{groupId:"setup",defaultValue:"project",values:[{label:"Project",value:"project"},{label:"Standalone",value:"standalone"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"project",mdxType:"TabItem"},(0,i.kt)(o.Z,{groupId:"jstool",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn gwen -b -i gwen/data/users.csv gwen/features/submit-user.feature\n")),(0,i.kt)("p",null,"  or "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn gwen -b --input-data gwen/data/users.csv gwen/features/submit-user.feature\n"))),(0,i.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm run gwen -- -b -i gwen/data/users.csv gwen/features/submit-user.feature\n")),(0,i.kt)("p",null,"  or "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm run gwen -- -b --input-data gwen/data/users.csv gwen/features/submit-user.feature\n"))),(0,i.kt)(s.Z,{value:"pnpm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pnpm gwen -b -i gwen/data/users.csv gwen/features/submit-user.feature\n")),(0,i.kt)("p",null,"  or "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pnpm gwen -b --input-data gwen/data/users.csv gwen/features/submit-user.feature\n"))))),(0,i.kt)(s.Z,{value:"standalone",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"gwen -b -i data/users.csv features/submit-user.feature\n")),(0,i.kt)("p",null,"  or "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"gwen -b --input-data data/users.csv features/submit-user.feature\n")))),(0,i.kt)("p",null,"Gwen will read in the CSV file, and for each record will:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bind the data to the feature"),(0,i.kt)("li",{parentName:"ul"},"And execute the feature")),(0,i.kt)("p",null,"A feature detail report will be generated for each data record. If you specify the ",(0,i.kt)("a",{parentName:"p",href:"/docs/cli#gwen-cli-options-parallel"},(0,i.kt)("inlineCode",{parentName:"a"},"--parallel"))," CLI option, the feature will execute all records in parallel."),(0,i.kt)("h2",{id:"examples-annotation"},"@Examples annotation"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Since ",(0,i.kt)(l.Z,{to:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v2.10.0",mdxType:"Link"},"v2.10.0"))),(0,i.kt)("p",null,"Consider the following scenario outline with an examples table"),(0,i.kt)("admonition",{title:"Example",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Scenario outline with inlined data"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-gherkin"},'  Scenario Outline: I load items from CSV files\n    When I add a <Status> "<Item>" item\n    \n    Examples:\n      | Item         | Status  |\n      | Walk the dog | pending |\n      | Get the milk | done    |\n      | Feed the cat | pending |\n'))),(0,i.kt)("p",null,"The data table in the examples clause can be externalised to a CSV file and imported using the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Examples")," annotation as follows:"),(0,i.kt)("admonition",{title:"Example",type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("em",{parentName:"p"},"CSV File: data/items.csv")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Item,Status\nWalk the dog,pending\nGet the milk,done\nTake out trash,pending\n")),(0,i.kt)("p",{parentName:"admonition"},"Scenario outline with externalised data"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-gherkin",metastring:"{1}","{1}":!0},'  @Examples("data/items.csv")\n  Scenario Outline: I load items from CSV files\n    When I add a <Status> "<Item>" item\n')),(0,i.kt)("p",{parentName:"admonition"},"This will resolve to an identical outline when expanded at runtime:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-gherkin"},'  Scenario Outline: I load items from CSV files\n    When I add a <Status> "<Item>" item\n    \n    Examples: Data file: data/items.csv\n      | Item         | Status  |\n      | Walk the dog | pending |\n      | Get the milk | done    |\n      | Feed the cat | pending |\n'))),(0,i.kt)("h3",{id:"where-filter"},"Where filter"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Since ",(0,i.kt)(l.Z,{to:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v3.27.0",mdxType:"Link"},"v3.27.0"))),(0,i.kt)("p",null,"The data can also be filtered using a ",(0,i.kt)("inlineCode",{parentName:"p"},"where")," JavaScript expression filter. For example, to get all the records where the data in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Status")," column matches ",(0,i.kt)("inlineCode",{parentName:"p"},"pending"),":"),(0,i.kt)("admonition",{title:"Example",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Scenario outline with externalised and filtered data"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-gherkin",metastring:"{1}","{1}":!0},'  @Examples(file="data/items.csv",where="\'${Status}\'==\'pending\'")\n  Scenario Outline: I load items from CSV files\n    When I add a <Status> "<Item>" item\n')),(0,i.kt)("p",{parentName:"admonition"},"Will resolve to the following containing ",(0,i.kt)("inlineCode",{parentName:"p"},"pending")," Status records only:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-gherkin",metastring:"{6,7}","{6,7}":!0},"  Scenario Outline: I load items from CSV files\n    When I add a <Status> \"<Item>\" item\n    \n    Examples: Data file: data/items.csv, where: '${Status}'=='pending'\n      | Item         | Status  |\n      | Walk the dog | pending |\n      | Feed the cat | pending |\n"))),(0,i.kt)("p",null,"String interpolation syntax can also be used to reference a value in the CSV record or current scope. For example, to get all the records where the ",(0,i.kt)("inlineCode",{parentName:"p"},"Status")," column matches the value bound to an in-memory attribute named ",(0,i.kt)("inlineCode",{parentName:"p"},"SelectedStatus"),":"),(0,i.kt)("admonition",{title:"Example",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Scenario outline with externalised and filtered data"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-gherkin",metastring:"{1}","{1}":!0},'  @Examples(file="data/items.csv",where="\'${Status}\'==\'${SelectedStatus}\'")\n  Scenario Outline: I load items from CSV files\n    When I add a <Status> "<Item>" item\n'))),(0,i.kt)("h3",{id:"name-prefix"},"Name prefix"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Since ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v3.20.0"},"v3.20.0"))),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},'prefix="string"')," attribute can be added to prepend a prefix to each column name in the CSV heaader record. This is useful for avoiding any potential name clashes with existing data in the current scope."),(0,i.kt)("admonition",{title:"Example",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Scenario outline sourced from CSV file having column names ",(0,i.kt)("inlineCode",{parentName:"p"},"Status, Item")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-gherkin",metastring:"{1}","{1}":!0},'  @Examples(file="data/items.csv",prefix="todo_",where="\'${todo_Status}\'==\'pending\'")\n  Scenario Outline: I load items from CSV files\n    When I add a <todo_Status> "<todo_Item>" item\n')),(0,i.kt)("p",{parentName:"admonition"},"Will result in the column names ",(0,i.kt)("inlineCode",{parentName:"p"},"todo_Status, todo_Item")," when ",(0,i.kt)("inlineCode",{parentName:"p"},"todo_")," prefix is applied at runtime"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-gherkin",metastring:"{5}","{5}":!0},"  Scenario Outline: I load items from CSV files\n    When I add a <todo_Status> \"<todo_Item>\" item\n    \n    Examples: Data file: data/items.csv, prefix: todo_, where: '${todo_Status}'=='pending'\n      | todo_Item    | todo_Status |\n      | Walk the dog | pending     |\n      | Feed the cat | pending     |\n"))),(0,i.kt)("h3",{id:"required-flag"},"Required flag"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Since ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v3.20.0"},"v3.20.0"))),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"required=true")," attribute can be added to raise an error if no data is returned by the ",(0,i.kt)("inlineCode",{parentName:"p"},"where")," clause filter."),(0,i.kt)("admonition",{title:"Example",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Scenario outline which raises an error if externalised and filtered data is empty"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-gherkin",metastring:"{1}","{1}":!0},'  @Examples(file="data/items.csv",where="\'${Status}\'==\'${SelectedStatus}\'",required=true)\n  Scenario Outline: I load items from CSV files\n    When I add a <Status> "<Item>" item\n'))))}g.isMDXComponent=!0}}]);