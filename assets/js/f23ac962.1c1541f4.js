"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4143],{6947:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"template-matching","title":"Template Matching","description":"Since v2.16.0","source":"@site/docs/28-template-matching.mdx","sourceDirName":".","slug":"/template-matching","permalink":"/docs/template-matching","draft":false,"unlisted":false,"editUrl":"https://github.com/gwen-interpreter/gwen-interpreter.github.io/edit/master/docs/28-template-matching.mdx","tags":[],"version":"current","sidebarPosition":28,"frontMatter":{"toc_min_heading_level":2,"toc_max_heading_level":3},"sidebar":"tutorialSidebar","previous":{"title":"Named Browser Sessions","permalink":"/docs/named-browser-sessions"},"next":{"title":"Mobile Emulation","permalink":"/docs/mobile-emulatioin"}}');var r=t(4848),l=t(8453);t(8774),t(1470),t(9365),t(6025);const s={toc_min_heading_level:2,toc_max_heading_level:3},i="Template Matching",c={},o=[{value:"Examples",id:"examples",level:2},{value:"Match and Ignore",id:"match-and-ignore",level:2},{value:"Match, Ignore, and Capture",id:"match-ignore-and-capture",level:2},{value:"Match, Ignore, Capture, and Inject",id:"match-ignore-capture-and-inject",level:2},{value:"Ignore Multiple Lines",id:"ignore-multiple-lines",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"template-matching",children:"Template Matching"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Since ",(0,r.jsx)(n.a,{href:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v2.16.0",children:"v2.16.0"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Template matching allow users to compare any source content with a target template that can either be specified as a text literal or text stored in a file, and perform capture, ignore, and inject operations at the same time."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.p,{children:["The following examples assume that the following JSON value is bound to an attribute named ",(0,r.jsx)(n.code,{children:"my value"})," in the currently available scope:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:'{"id":42,"category":{"name":"pet"},"name":"tiger","status":"available"}'})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Templates can contain JSON, XML, HTML, or any type of text and can also have multiple lines. The examples below use single-line JSON only."}),"\n",(0,r.jsx)(n.h2,{id:"match-and-ignore",children:"Match and Ignore"}),"\n",(0,r.jsxs)(n.p,{children:["The following example will successfully match ",(0,r.jsx)(n.code,{children:"my value"})," and:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Ignore the ",(0,r.jsx)(n.code,{children:"id"})," value where ",(0,r.jsx)(n.code,{children:"@{*}"})," appears"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-gherkin",children:'  Then my value should match template\n       """\n       {"id":@{*},"category":{"name":"pet"},"name":"tiger","status":"available"}\n       """\n'})}),"\n",(0,r.jsx)(n.h2,{id:"match-ignore-and-capture",children:"Match, Ignore, and Capture"}),"\n",(0,r.jsxs)(n.p,{children:["The following example will successfully match ",(0,r.jsx)(n.code,{children:"my value"})," and:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Ignore the ",(0,r.jsx)(n.code,{children:"id"})," value where ",(0,r.jsx)(n.code,{children:"@{*}"})," appears"]}),"\n",(0,r.jsxs)(n.li,{children:["Capture the ",(0,r.jsx)(n.code,{children:"tiger"})," value where ",(0,r.jsx)(n.code,{children:"@{pet name}"})," appears and bind it to the attribute named ",(0,r.jsx)(n.code,{children:"pet name"})," in the feature scope"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-gherkin",children:'  Then my value should match template\n       """\n       {"id":@{*},"category":{"name":"pet"},"name":"@{pet name}","status":"available"}\n       """\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Subsequent steps can access the captured ",(0,r.jsx)(n.code,{children:"pet name"})," attribute like any other Gwen binding. For example, the following checks it's value:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-gherkin",children:'  And pet name should be "tiger"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"match-ignore-capture-and-inject",children:"Match, Ignore, Capture, and Inject"}),"\n",(0,r.jsxs)(n.p,{children:["The following example will successfully match ",(0,r.jsx)(n.code,{children:"my value"})," and:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Ignore the ",(0,r.jsx)(n.code,{children:"id"})," value where ",(0,r.jsx)(n.code,{children:"@{*}"})," appears"]}),"\n",(0,r.jsxs)(n.li,{children:["Caputre the ",(0,r.jsx)(n.code,{children:"tiger"})," value where ",(0,r.jsx)(n.code,{children:"@{pet name}"})," appears and bind it to the attribute named ",(0,r.jsx)(n.code,{children:"pet name"})," in the feature scope"]}),"\n",(0,r.jsxs)(n.li,{children:["Inject the value bound to the ",(0,r.jsx)(n.code,{children:"my status"})," attribute into the template where ",(0,r.jsx)(n.code,{children:"${my status}"})," appears."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-gherkin",children:'  Given my status is "available"\n   Then my value should match template\n        """\n        {"id":@{*},"category":{"name":"pet"},"name":"@{pet name}","status":"${my status}"}\n        """\n    And pet name should be "tiger"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ignore-multiple-lines",children:"Ignore Multiple Lines"}),"\n",(0,r.jsxs)(n.p,{children:["Multiple lines can be ignored anywhere in a template by specifying ",(0,r.jsx)(n.code,{children:"@{**}"})]})]})}function d(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var a=t(4164);const r={tabItem:"tabItem_Ymn6"};var l=t(4848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(6540),r=t(4164),l=t(3104),s=t(6347),i=t(205),c=t(7485),o=t(1682),u=t(679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=h(e),[s,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[o,d]=m({queryString:t,groupId:r}),[g,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,u.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),x=(()=>{const e=o??g;return p({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{x&&c(x)}),[x]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=t(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(4848);function v(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),r=i[t].value;r!==a&&(o(n),s(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...l,className:(0,r.A)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:l}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=g(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,f.jsx)(v,{...n,...e}),(0,f.jsx)(j,{...n,...e})]})}function w(e){const n=(0,b.A)();return(0,f.jsx)(y,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var a=t(6540);const r={},l=a.createContext(r);function s(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);