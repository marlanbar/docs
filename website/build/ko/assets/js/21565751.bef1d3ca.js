"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5070],{4946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(85893),a=n(11151),i=n(71183);const s={id:"push-notifications",title:"Push Notifications"},o=void 0,l={id:"tutorials/near-components/push-notifications",title:"Push Notifications",description:"Push messages enable your gateway to send notifications on desktop and mobile devices even when the users are not active.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/3.tutorials/near-components/push-notifications.md",sourceDirName:"3.tutorials/near-components",slug:"/tutorials/near-components/push-notifications",permalink:"/ko/tutorials/near-components/push-notifications",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/near-components/push-notifications.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1712954223e3,frontMatter:{id:"push-notifications",title:"Push Notifications"},sidebar:"tutorials",previous:{title:"Blog Posts",permalink:"/ko/tutorials/near-components/blog-posts"},next:{title:"NEAR for Ethereum developers",permalink:"/ko/tutorials/near-components/ethers-js"}},u={},c=[{value:"Create the Service Worker",id:"create-the-service-worker",level:2},{value:"Subscribe to our Notifications",id:"subscribe-to-our-notifications",level:2},{value:"Create a Stream in our Server",id:"create-a-stream-in-our-server",level:2},{value:"Handle Notifications",id:"handle-notifications",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Push messages enable your gateway to send notifications on desktop and mobile devices even when the users are not active."}),"\n",(0,r.jsx)(t.p,{children:"To implement push notifications, you need to:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Create a Service Worker"}),"\n",(0,r.jsx)(t.li,{children:"Ask the user for permission to send push notifications"}),"\n",(0,r.jsxs)(t.li,{children:["Send the ",(0,r.jsx)(t.code,{children:"client identifier"})," information to our notification server"]}),"\n",(0,r.jsx)(t.li,{children:"Add logic to display the notifications"}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{title:"Example",type:"tip",children:(0,r.jsxs)(t.p,{children:["Check our working example at ",(0,r.jsx)(t.a,{href:"https://github.com/near-examples/BOS-notifications",children:"https://github.com/near-examples/BOS-notifications"})]})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"create-the-service-worker",children:"Create the Service Worker"}),"\n",(0,r.jsxs)(t.p,{children:["Push notifications work by having a ",(0,r.jsx)(t.a,{href:"https://codelabs.developers.google.com/codelabs/push-notifications#2",children:"service worker"})," on the client side that listens for messages from the NEAR notifications server."]}),"\n",(0,r.jsx)(i.O2,{children:(0,r.jsx)(i.Ey,{fname:"main.js",language:"js",value:"Create",url:"https://github.com/near-examples/BOS-notifications/blob/main/app/scripts/main.js",start:"16",end:"22"})}),"\n",(0,r.jsx)(t.p,{children:"Browsers readily provide native support for service workers, so you can easily check if a service worker exists, and create one if not."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"subscribe-to-our-notifications",children:"Subscribe to our Notifications"}),"\n",(0,r.jsxs)(t.p,{children:["In order to have the ",(0,r.jsx)(t.code,{children:"service worker"})," display notifications, you need to subscribe it to a notifications server."]}),"\n",(0,r.jsxs)(t.p,{children:["A notification server is identified by its ",(0,r.jsx)(t.code,{children:"public key"}),", constraining that only the server holding the ",(0,r.jsx)(t.code,{children:"private"})," counterpart can push notifications to the user."]}),"\n",(0,r.jsx)(i.O2,{children:(0,r.jsx)(i.Ey,{fname:"main.js",language:"js",value:"Subscribe",url:"https://github.com/near-examples/BOS-notifications/blob/main/app/scripts/main.js",start:"44",end:"50"})}),"\n",(0,r.jsx)(t.admonition,{title:"Permission",type:"tip",children:(0,r.jsx)(t.p,{children:"When you subscribe to the service, the user will be asked for permission to be sent notifications."})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"create-a-stream-in-our-server",children:"Create a Stream in our Server"}),"\n",(0,r.jsx)(t.p,{children:"After you subscribe the user to a notifications server, share it with us so we can start sending you notifications!"}),"\n",(0,r.jsxs)(t.p,{children:["For this, make a ",(0,r.jsx)(t.code,{children:"post"})," request to our server, add which account you want to be notified for, and a URL identifying your gateway."]}),"\n",(0,r.jsx)(i.O2,{children:(0,r.jsx)(i.Ey,{fname:"main.js",language:"js",value:"Stream",url:"https://github.com/near-examples/BOS-notifications/blob/main/app/scripts/main.js",start:"52",end:"64"})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"gateway"})," parameter is there just to help us keep track of who receives notifications."]})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"handle-notifications",children:"Handle Notifications"}),"\n",(0,r.jsxs)(t.p,{children:["When the user receives a notification, the ",(0,r.jsx)(t.code,{children:"service worker"})," will be triggered, and you can add logic to display the notification."]}),"\n",(0,r.jsx)(i.O2,{children:(0,r.jsx)(i.Ey,{fname:"sw.js",language:"js",value:"Notifications",url:"https://github.com/near-examples/BOS-notifications/blob/main/app/scripts/sw.js",start:"20",end:"37"})}),"\n",(0,r.jsx)(t.p,{children:"Feel free to personalize the notification as you wish, and to add logic on what to do once the notification is clicked. In our example, we just open the Post page."}),"\n",(0,r.jsx)(i.O2,{children:(0,r.jsx)(i.Ey,{fname:"sw.js",language:"js",value:"Notifications",url:"https://github.com/near-examples/BOS-notifications/blob/main/app/scripts/sw.js",start:"39",end:"51"})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var i=n(85893);function s(e){var t=e.children,n=e.hidden,s=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(67294),a=n(36905),i=n(12466),s=n(16550),o=n(20469),l=n(91980),u=n(67392),c=n(20812);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,u.lx)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,s.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function m(e){var t,n,a,i,s=e.defaultValue,l=e.queryString,u=void 0!==l&&l,d=e.groupId,m=h(e),v=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:m})})),b=v[0],g=v[1],x=f({queryString:u,groupId:d}),j=x[0],y=x[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,c.Nk)(t),a=n[0],i=n[1],[a,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),k=w[0],S=w[1],N=function(){var e=null!=j?j:k;return p({value:e,tabValues:m})?e:null}();return(0,o.Z)((function(){N&&g(N)}),[N]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),S(e)}),[y,S,m]),tabValues:m}}var v=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(85893);function x(e){var t=e.className,n=e.block,r=e.selectedValue,s=e.selectValue,o=e.tabValues,l=[],u=(0,i.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=l.indexOf(t),a=o[n].value;a!==r&&(u(t),s(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=l.indexOf(e.currentTarget)+1;n=null!=(r=l[a])?r:l[0];break;case"ArrowLeft":var i,s=l.indexOf(e.currentTarget)-1;n=null!=(i=l[s])?i:l[l.length-1]}null==(t=n)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:o.map((function(e){var t=e.value,n=e.label,i=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return l.push(e)},onKeyDown:d,onClick:c},i,{className:(0,a.Z)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function j(e){var t=e.lazy,n=e.children,i=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=s.find((function(e){return e.props.value===i}));return o?(0,r.cloneElement)(o,{className:(0,a.Z)("margin-top--md",o.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})}))})}function y(e){var t=m(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(x,Object.assign({},t,e)),(0,g.jsx)(j,Object.assign({},t,e))]})}function w(e){var t=(0,v.Z)();return(0,g.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(t))}},71183:(e,t,n)=>{n.d(t,{O2:()=>f,Ey:()=>v,SQ:()=>m});var r=n(67294),a=n(74866),i=n(85162),s=n(74165),o=n(15861),l=n(1841),u=n.n(l),c=n(85893);function d(){return(d=(0,o.Z)((0,s.Z)().mark((function e(t,n,r){var a,i,o,l;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((i=localStorage.getItem(t+"-until"))&&i>Date.now())){e.next=5;break}a=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:a=e.sent,localStorage.setItem(t,a),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return o=a.split("\n"),n=n?Number(n)-1:0,r=r?Number(r):o.length,o=o.slice(n,r),l=o.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",o.map((function(e){return e.slice(l)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var t=e.url,n=e.start,a=e.end,i=e.language,s=e.fname,o=e.metastring,l=(0,r.useState)("Loading..."),h=l[0],p=l[1];return(0,r.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],r=(t[1],new URL(n).pathname.split("/").slice(1)),a=r[0],i=r[1];return r[2],"https://raw.githubusercontent.com/"+a+"/"+i+"/"+r[3]+"/"+r.slice(4).join("/")}(t),r=function(e,t,n){return d.apply(this,arguments)}(e,n,a);r.then((function(e){return p(e)}))})),(0,c.jsxs)("div",{fname:s,children:[(0,c.jsx)(u(),{language:i,metastring:o+" showLineNumbers",children:h}),(0,c.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,c.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var p={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function f(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,c.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,c.jsx)(i.Z,{value:e.props.value,label:p[e.props.value],children:e})}))})}function m(e){var t=e.children,n=e.language,r=e.showSingleFName;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=(n.children,n.url),a=n.start,i=n.end,s=n.fname;if(e.type===v)return v({url:r,start:a,end:i,language:t,fname:s});return e}(e,n)})),1!=t.length||r?(0,c.jsx)(a.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,c.jsx)(i.Z,{value:t,label:e.props.fname,children:e})}))}):(0,c.jsx)(i.Z,{value:0,label:t[0].props.fname,children:t[0]})}function v(e){var t=e.url,n=e.start,r=e.end,a=e.language,i=e.fname,s=e.metastring;return h({url:t,start:n,end:r,language:a,fname:i,metastring:s})}}}]);