(self.webpackChunk=self.webpackChunk||[]).push([[6224],{35557:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(85893),a=n(11151);n(71183),n(2154),n(74866),n(85162);const l={id:"integrate-components",title:"Integrating Components"},s=void 0,i={id:"build/web3-apps/integrate-components",title:"Integrating Components",description:"To integrate Components to your frontend, you will leverage two tools:",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/2.build/4.web3-apps/integrate-components.md",sourceDirName:"2.build/4.web3-apps",slug:"/build/web3-apps/integrate-components",permalink:"/ko/build/web3-apps/integrate-components",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/4.web3-apps/integrate-components.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1718378911e3,frontMatter:{id:"integrate-components",title:"Integrating Components"},sidebar:"build",previous:{title:"Using components on WebApps",permalink:"/ko/build/near-components/bos-gateway"},next:{title:"Authenticate NEAR Users",permalink:"/ko/build/web3-apps/backend/"}},o={},c=[{value:"Adding the VM &amp; Wallet Selector",id:"adding-the-vm--wallet-selector",level:2},{value:"Setup the VM",id:"setup-the-vm",level:2},{value:"Setup the Wallet Selector",id:"setup-the-wallet-selector",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["To integrate ",(0,r.jsx)(t.a,{href:"../../bos/tutorial/quickstart.md",children:"Components"})," to your frontend, you will leverage two tools:"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"Wallet Selector"}),": Enables the user to select their preferred NEAR wallet in your dApp."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"NEAR VM"}),": A package that can retrieve the component's code from the blockchain and execute it in the browser."]}),"\n"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.p,{children:"Using those tools you will implement the following flow:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Setup"})," the VM."]}),"\n",(0,r.jsxs)(t.li,{children:["Render components using the ",(0,r.jsx)(t.code,{children:"Widget"})," component in the VM."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Setup"})," a wallet selector so users can interact with the Menu."]}),"\n"]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"adding-the-vm--wallet-selector",children:"Adding the VM & Wallet Selector"}),"\n",(0,r.jsxs)(t.p,{children:["To use the ",(0,r.jsx)(t.code,{children:"VM"})," and the ",(0,r.jsx)(t.code,{children:"wallet-selector"}),", you must add them to your project first."]}),"\n",(0,r.jsxs)(t.p,{children:["The wallet selector has multiple wallet packages to select from. ",(0,r.jsx)(t.a,{href:"https://github.com/near/wallet-selector#installation-and-usage",children:"Check their website"})," for more information."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install \\\n  @near-wallet-selector/core \\\n  @near-wallet-selector/my-near-wallet \\\n  @near-wallet-selector/modal-ui\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Then, manually add the ",(0,r.jsx)(t.code,{children:"VM"})," to your ",(0,r.jsx)(t.code,{children:"package.json"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'"dependencies": {\n  ...\n  "near-social-vm": "github:NearSocial/VM#2.5.5"\n  ...\n}\n'})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Check the latest released version for the VM ",(0,r.jsx)(t.a,{href:"https://github.com/NearSocial/VM/releases",children:"here"})]})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"setup-the-vm",children:"Setup the VM"}),"\n",(0,r.jsxs)(t.p,{children:["To render components, you need to import the ",(0,r.jsx)(t.code,{children:"useInitNear"})," hook from the ",(0,r.jsx)(t.code,{children:"near-social-vm"})," package, as well as the ",(0,r.jsx)(t.code,{children:"Widget"})," component."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"import { useInitNear, Widget } from 'near-social-vm';\nimport { useEffect } from 'react';\n\nexport default function Component({ src }) {\n  const { initNear } = useInitNear();\n\n  useEffect(() => {\n    initNear && initNear({ networkId: 'testnet', selector: null });\n  }, [initNear]);\n\n  return <Widget src={src} />;\n}\n\nreturn <Component src=\"influencer.testnet/widget/Greeter\" props={{name: \"Anna\", amount: 2}} />\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Notice that the VM is inherently linked to ",(0,r.jsx)(t.code,{children:"React"}),", so you will need to use a reactive framework to take full advantage of the VM."]})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"setup-the-wallet-selector",children:"Setup the Wallet Selector"}),"\n",(0,r.jsx)(t.p,{children:"While the VM allows you to render components, you need to set up a wallet selector to allow users to interact with the components."}),"\n",(0,r.jsxs)(t.p,{children:["To instantiate a ",(0,r.jsx)(t.code,{children:"Wallet Selector"}),", simply import all the wallets you want your users to have access to, and the setup method from the ",(0,r.jsx)(t.code,{children:"near-wallet-selector"})," package."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"import '@near-wallet-selector/modal-ui/styles.css';\nimport { setupModal } from '@near-wallet-selector/modal-ui';\nimport { setupWalletSelector } from '@near-wallet-selector/core';\nimport { setupMyNearWallet } from '@near-wallet-selector/my-near-wallet';\n\nconst selector = setupWalletSelector({\n  network: 'testnet,\n  modules: [setupMyNearWallet()],\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Then use it during the call to ",(0,r.jsx)(t.code,{children:"initNear"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"  useEffect(() => {\n    initNear && initNear({ networkId: 'testnet', selector: selector });\n  }, [initNear]);\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["To learn more about the wallet selector and how it can be used, please see the ",(0,r.jsx)(t.a,{href:"/ko/build/web3-apps/frontend",children:"integrating NEAR to your WebApp tutorial"})]})})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},85162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var l=n(85893);function s(e){var t=e.children,n=e.hidden,s=e.className;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var r=n(67294),a=n(36905),l=n(12466),s=n(16550),i=n(20469),o=n(91980),c=n(67392),u=n(20812);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.lx)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,l=(0,s.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,o._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(l.location.search);t.set(i,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[i,l])]}function f(e){var t,n,a,l,s=e.defaultValue,o=e.queryString,c=void 0!==o&&o,d=e.groupId,f=h(e),g=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:f})})),v=g[0],b=g[1],x=m({queryString:c,groupId:d}),j=x[0],w=x[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(t),a=n[0],l=n[1],[a,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),N=y[0],k=y[1],S=function(){var e=null!=j?j:N;return p({value:e,tabValues:f})?e:null}();return(0,i.Z)((function(){S&&b(S)}),[S]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);b(e),w(e),k(e)}),[w,k,f]),tabValues:f}}var g=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(85893);function x(e){var t=e.className,n=e.block,r=e.selectedValue,s=e.selectValue,i=e.tabValues,o=[],c=(0,l.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=o.indexOf(t),a=i[n].value;a!==r&&(c(t),s(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=o.indexOf(e.currentTarget)+1;n=null!=(r=o[a])?r:o[0];break;case"ArrowLeft":var l,s=o.indexOf(e.currentTarget)-1;n=null!=(l=o[s])?l:o[o.length-1]}null==(t=n)||t.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:i.map((function(e){var t=e.value,n=e.label,l=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return o.push(e)},onKeyDown:d,onClick:u},l,{className:(0,a.Z)("tabs__item",v.tabItem,null==l?void 0:l.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function j(e){var t=e.lazy,n=e.children,l=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=s.find((function(e){return e.props.value===l}));return i?(0,r.cloneElement)(i,{className:(0,a.Z)("margin-top--md",i.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l})}))})}function w(e){var t=f(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,b.jsx)(x,Object.assign({},t,e)),(0,b.jsx)(j,Object.assign({},t,e))]})}function y(e){var t=(0,g.Z)();return(0,b.jsx)(w,Object.assign({},e,{children:d(e.children)}),String(t))}},71183:(e,t,n)=>{"use strict";n.d(t,{O2:()=>m,Ey:()=>g,SQ:()=>f});var r=n(67294),a=n(74866),l=n(85162),s=n(74165),i=n(15861),o=n(1841),c=n.n(o),u=n(85893);function d(){return(d=(0,i.Z)((0,s.Z)().mark((function e(t,n,r){var a,l,i,o;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((l=localStorage.getItem(t+"-until"))&&l>Date.now())){e.next=5;break}a=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:a=e.sent,localStorage.setItem(t,a),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return i=a.split("\n"),n=n?Number(n)-1:0,r=r?Number(r):i.length,i=i.slice(n,r),o=i.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",i.map((function(e){return e.slice(o)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var t=e.url,n=e.start,a=e.end,l=e.language,s=e.fname,i=e.metastring,o=(0,r.useState)("Loading..."),h=o[0],p=o[1];return(0,r.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],r=(t[1],new URL(n).pathname.split("/").slice(1)),a=r[0],l=r[1];return r[2],"https://raw.githubusercontent.com/"+a+"/"+l+"/"+r[3]+"/"+r.slice(4).join("/")}(t),r=function(e,t,n){return d.apply(this,arguments)}(e,n,a);r.then((function(e){return p(e)}))})),(0,u.jsxs)("div",{fname:s,children:[(0,u.jsx)(c(),{language:l,metastring:i+" showLineNumbers",children:h}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var p={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function m(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,u.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,u.jsx)(l.Z,{value:e.props.value,label:p[e.props.value],children:e})}))})}function f(e){var t=e.children,n=e.language,r=e.showSingleFName;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=(n.children,n.url),a=n.start,l=n.end,s=n.fname;if(e.type===g)return g({url:r,start:a,end:l,language:t,fname:s});return e}(e,n)})),1!=t.length||r?(0,u.jsx)(a.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,u.jsx)(l.Z,{value:t,label:e.props.fname,children:e})}))}):(0,u.jsx)(l.Z,{value:0,label:t[0].props.fname,children:t[0]})}function g(e){var t=e.url,n=e.start,r=e.end,a=e.language,l=e.fname,s=e.metastring;return h({url:t,start:n,end:r,language:a,fname:l,metastring:s})}},2154:(e,t,n)=>{"use strict";n.d(t,{W:()=>s});var r=n(67294),a=n(91262),l=n(85893);function s(e){var t=e.children,s=e.id,i=void 0===s?1:s,o=e.networkId,c=void 0===o?"testnet":o,u=e.height,d=void 0===u?"160px":u;return(0,l.jsx)(a.Z,{fallback:(0,l.jsx)("div",{children:" Loading... "}),children:function(){var e="";try{t.length||(t=[t]),e=t[0].props.children.props.children}catch(g){}var a=n(58613),s=a.Widget,o=a.useInitNear,u=n(2302).ZP,h=(0,r.useState)(e),p=h[0],m=h[1],f=o().initNear;return(0,r.useEffect)((function(){f&&f({networkId:c,selector:new Promise((function(){}))})}),[f]),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"monaco",children:(0,l.jsx)(u,{height:d,value:p,options:{minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,fontSize:"14px",renderLineHighlight:!1,hideMargin:!0,glyphMargin:!1,folding:!1,lineNumbers:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,scrollBars:!1},onChange:function(e,t){return m(e)}})}),(0,l.jsx)("div",{className:"code_iframe",children:(0,l.jsx)("div",{className:"bootstrap-scope",children:(0,l.jsx)("div",{className:"vm-widget",children:(0,l.jsx)(s,{code:p},i)})})}),t[1]]})}})}},24654:()=>{},55024:()=>{}}]);