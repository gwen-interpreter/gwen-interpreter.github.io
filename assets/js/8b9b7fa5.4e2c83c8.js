"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6293],{4476:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"locator-level-timeouts","title":"Locator Level Timeouts","description":"Since v2.19.0","source":"@site/docs/25-locator-level-timeouts.mdx","sourceDirName":".","slug":"/locator-level-timeouts","permalink":"/docs/locator-level-timeouts","draft":false,"unlisted":false,"editUrl":"https://github.com/gwen-interpreter/gwen-interpreter.github.io/edit/master/docs/25-locator-level-timeouts.mdx","tags":[],"version":"current","sidebarPosition":25,"frontMatter":{"toc_min_heading_level":2,"toc_max_heading_level":3},"sidebar":"tutorialSidebar","previous":{"title":"Locator Chaining","permalink":"/docs/locator-chaining"},"next":{"title":"Context Sensative Actions","permalink":"/docs/context-sensative-actions"}}');var o=t(4848),r=t(8453);t(8774),t(1470),t(9365),t(6025);const l={toc_min_heading_level:2,toc_max_heading_level:3},a="Locator Level Timeouts",i={},c=[{value:"Timeout Annotations",id:"timeout-annotations",level:3},{value:"Delay Annotation",id:"delay-annotation",level:4},{value:"Examples",id:"examples",level:4}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"locator-level-timeouts",children:"Locator Level Timeouts"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Since ",(0,o.jsx)(n.a,{href:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v2.19.0",children:"v2.19.0"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Gwen supports specifying ",(0,o.jsx)(n.a,{href:"/docs/dsl#element-locators",children:"locator"})," level timeouts for overriding the default timeout ",(0,o.jsx)(n.a,{href:"/docs/settings#gwen-web-locator-wait-seconds",children:(0,o.jsx)(n.code,{children:"gwen.web.locator.wait.seconds"})}),". This is useful for cases where you may want to increase the locator timeout period for some web elements without impacting others. A web element that takes a long time to load for example can have a higher locator timeout  without slowing down the rest of your locators."]}),"\n",(0,o.jsx)(n.h3,{id:"timeout-annotations",children:"Timeout Annotations"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Since ",(0,o.jsx)(n.a,{href:"https://github.com/gwen-interpreter/gwen-web/releases/tag/v2.73.0",children:"v2.73.0"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Syntax"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-gherkin",children:"@Timeout('<duration>')\n"})}),"\n",(0,o.jsx)(n.p,{children:"Where:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<duration>"})," can be any of:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"#h#m#s#ms"})," for a number of hours, minutes, seconds and milliseconds - example: ",(0,o.jsx)(n.code,{children:"@Timeout('1h2m30s100ms')"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"#h#m#s"})," for a number of hours, minutes and seconds - example: ",(0,o.jsx)(n.code,{children:"@Timeout('1h2m30s')"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"#h#m#ms"})," for a number of hours, minutes and milliseconds - example: ",(0,o.jsx)(n.code,{children:"@Timeout('1h2m100ms')"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"#h#ms"})," for a number of hours and milliseconds - example: ",(0,o.jsx)(n.code,{children:"@Timeout('1h100ms')"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"#h"})," for a number of hours - example: ",(0,o.jsx)(n.code,{children:"@Timeout('1h')"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"#m#s#ms"})," for a number of minutes, seconds and milliseconds - example: ",(0,o.jsx)(n.code,{children:"@Timeout('2m30s100ms')"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"#m#s"})," for a number of minutes and seconds - example: ",(0,o.jsx)(n.code,{children:"@Timeout('2m30s')"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"#m#ms"})," for a number of minutes and milliseconds - example: ",(0,o.jsx)(n.code,{children:"@Timeout('2m100ms')"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"#m"})," for a number of minutes - example: ",(0,o.jsx)(n.code,{children:"@Timeout('2m')"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"#s#ms"})," for a number of seconds and milliseconds - example: ",(0,o.jsx)(n.code,{children:"@Timeout('30s100ms')"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"#s"})," for a number of seconds - example: ",(0,o.jsx)(n.code,{children:"@Timeout('30s')"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"#ms"})," for a number of milliseconds - example: ",(0,o.jsx)(n.code,{children:"@Timeout('100ms')"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"0h"})," for no timeout period - example: ",(0,o.jsx)(n.code,{children:"@Timeout('0h')"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"0m"})," for no timeout period - example: ",(0,o.jsx)(n.code,{children:"@Timeout('0m')"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"0s"})," for no timeout period - example: ",(0,o.jsx)(n.code,{children:"@Timeout('0s')"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"0ms"})," for no timeout period - example: ",(0,o.jsx)(n.code,{children:"@Timeout('0ms')"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The timeout annotation can be used used on various ",(0,o.jsx)(n.a,{href:"/docs/dsl#sleeps-and-waits",children:"wait"}),", ",(0,o.jsx)(n.a,{href:"/docs/dsl#untilwhile",children:"until/while"}),", ",(0,o.jsx)(n.a,{href:"/docs/dsl#foreach",children:"for each"}),", ",(0,o.jsx)(n.a,{href:"/docs/dsl#assertions",children:"assertion"})," or ",(0,o.jsx)(n.a,{href:"/docs/dsl#element-locators",children:"locator"})," steps."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.h4,{id:"delay-annotation",children:"Delay Annotation"}),"\n",(0,o.jsxs)(n.p,{children:["The same duration patterns also apply to ",(0,o.jsx)(n.code,{children:"@Delay"})," annotations used to control the delay time between repeated operations in the various ",(0,o.jsx)(n.a,{href:"/docs/dsl#sleeps-and-waits",children:"wait"}),", ",(0,o.jsx)(n.a,{href:"/docs/dsl#untilwhile",children:"until/while"})," loops."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-gherkin",children:"  # will cause lookup to fail immediately if username is not present on the page\n  And @Timeout('0s') the username can be located by id \"username\"\n\n  # will cause lookup to fail if the username is not available on the page after waiting 20 seconds\n  And @Timeout('20s') the username can be located by id \"username\"\n\n  # will cause lookup to fail if the username is not available on the page after waiting 1 minute and 30 seconds\n  And @Timeout('1m30s') the username can be located by id \"username\"\n\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var s=t(4164);const o={tabItem:"tabItem_Ymn6"};var r=t(4848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(o.tabItem,l),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>y});var s=t(6540),o=t(4164),r=t(3104),l=t(6347),a=t(205),i=t(7485),c=t(1682),u=t(679);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:o}}=e;return{value:n,label:t,attributes:s,default:o}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const o=(0,l.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,r=h(e),[l,i]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[c,d]=p({queryString:t,groupId:o}),[x,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,u.Dv)(t);return[o,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:o}),b=(()=>{const e=c??x;return m({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var f=t(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(4848);function v(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:a}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),o=a[t].value;o!==s&&(c(n),l(o))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...r,className:(0,o.A)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,o.A)("tabs-container",b.tabList),children:[(0,j.jsx)(v,{...n,...e}),(0,j.jsx)(g,{...n,...e})]})}function y(e){const n=(0,f.A)();return(0,j.jsx)(w,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var s=t(6540);const o={},r=s.createContext(o);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);