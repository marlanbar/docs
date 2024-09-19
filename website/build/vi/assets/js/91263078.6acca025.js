"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7636],{66748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(85893),a=n(11151),i=n(74866),o=n(85162);const s={id:"introduction",title:"A Step-by-Step Guide to Mastering NEAR",sidebar_label:"Introduction"},l=void 0,c={id:"tutorials/auction/introduction",title:"A Step-by-Step Guide to Mastering NEAR",description:"Welcome! In this guide we will help you navigate NEAR tech stack, so you can build Web3 applications from start to finish in no-time.",source:"@site/../docs/3.tutorials/auction/0-intro.md",sourceDirName:"3.tutorials/auction",slug:"/tutorials/auction/introduction",permalink:"/vi/tutorials/auction/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/auction/0-intro.md",tags:[],version:"current",lastUpdatedBy:"Owen",lastUpdatedAt:1726751498e3,sidebarPosition:0,frontMatter:{id:"introduction",title:"A Step-by-Step Guide to Mastering NEAR",sidebar_label:"Introduction"},sidebar:"tutorials",previous:{title:"Onchain Blog",permalink:"/vi/tutorials/templates/blog"},next:{title:"Basic Auction",permalink:"/vi/tutorials/auction/basic-auction"}},u={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Overview",id:"overview",level:2},{value:"1. Smart Contract",id:"1-smart-contract",level:4},{value:"2. Frontend",id:"2-frontend",level:4},{value:"3. Factory",id:"3-factory",level:4},{value:"Next steps",id:"next-steps",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Welcome! In this guide we will help you navigate NEAR tech stack, so you can build Web3 applications from start to finish in no-time."}),"\n",(0,r.jsx)(t.p,{children:"We'll start from a simple auction contract and slowly build on top of it to create a full Web3 application to carry out on-chain auctions."}),"\n",(0,r.jsx)(t.p,{children:"By the time you finish this tutorial, you will have learned several key concepts:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/vi/tutorials/auction/basic-auction",children:"Creating a simple smart contract"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/vi/tutorials/auction/sandbox-testing",children:"Writing tests for a contract"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/vi/tutorials/auction/deploy",children:"Deploying a contract to testnet"})}),"\n"]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(t.p,{children:"Before starting, make sure to set up your development environment!"}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Working on Windows?"}),(0,r.jsxs)(t.p,{children:["See our blog post ",(0,r.jsx)(t.a,{href:"/blog/getting-started-on-windows",children:"getting started on NEAR using Windows"})," for a step-by-step guide on how to setup WSL and your environment"]})]}),"\n",(0,r.jsxs)(i.Z,{groupId:"code-tabs",children:[(0,r.jsx)(o.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# Install Node.js using nvm (more option in: https://nodejs.org/en/download)\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash\nnvm install latest\n\n# Install the NEAR CLI to deploy and interact with the contract\ncurl --proto '=https' --tlsv1.2 -LsSf https://github.com/near/near-cli-rs/releases/latest/download/near-cli-rs-installer.sh | sh\n"})})}),(0,r.jsx)(o.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# Install Rust: https://www.rust-lang.org/tools/install\ncurl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n\n# Contracts will be compiled to wasm, so we need to add the wasm target\nrustup target add wasm32-unknown-unknown\n\n# Install the NEAR CLI to deploy and interact with the contract\ncurl --proto '=https' --tlsv1.2 -LsSf https://github.com/near/near-cli-rs/releases/latest/download/near-cli-rs-installer.sh | sh\n\n# Install cargo near to help building the contract\ncurl --proto '=https' --tlsv1.2 -LsSf https://github.com/near/cargo-near/releases/latest/download/cargo-near-installer.sh | sh\n"})})})]}),"\n",(0,r.jsxs)(t.p,{children:["We will use ",(0,r.jsx)(t.a,{href:"../../4.tools/cli.md",children:"NEAR CLI"})," to interact with the blockchain through the terminal, and you can choose between JavaScript and Rust to write the contract."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(t.p,{children:"This series will touch on different level of the NEAR tech stack. Each section will be independent of the previous one, so feel free to jump into the section that interests you the most."}),"\n",(0,r.jsx)(t.h4,{id:"1-smart-contract",children:"1. Smart Contract"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/vi/tutorials/auction/basic-auction",children:"The Auction Contract"}),": We cover a simple auction smart contract"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/vi/tutorials/auction/sandbox-testing",children:"Testing the Contract"}),": Learn how to test your contract in a realistic environment"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/vi/tutorials/auction/deploy",children:"Deploying the Contract"}),": Deploy your contract to the NEAR blockchain"]}),"\n",(0,r.jsx)(t.li,{children:"Updating and Locking a Contract (soon): Discover what it means to lock a contract"}),"\n",(0,r.jsx)(t.li,{children:"Giving an NFT to the Winner (soon) : Give the highest bidder an NFT to signal their win"}),"\n",(0,r.jsx)(t.li,{children:"Integrating Fungible Tokens (soon) : Allow people to use fungible tokens to bid (e.g. stable coins)"}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"2-frontend",children:"2. Frontend"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Creating the frontend (soon): Lets learn how to connect a frontend with your smart contract"}),"\n",(0,r.jsx)(t.li,{children:"Easily query on-chain data (soon): Use open APIs to keep track of the users and their bidding price"}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"3-factory",children:"3. Factory"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Creating a factory (soon): Allow users to easily deploy and initialize their own auction contracts"}),"\n"]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,r.jsxs)(t.p,{children:["Ready to start? Let's jump to the ",(0,r.jsx)(t.a,{href:"/vi/tutorials/auction/basic-auction",children:"The Auction Contract"})," and begin your learning journey!"]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.admonition,{title:"Versioning for this article",type:"note",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["near-cli: ",(0,r.jsx)(t.code,{children:"0.12.0"})]}),"\n",(0,r.jsxs)(t.li,{children:["rustc: ",(0,r.jsx)(t.code,{children:"1.78.0"})]}),"\n",(0,r.jsxs)(t.li,{children:["cargo: ",(0,r.jsx)(t.code,{children:"1.80.1"})]}),"\n",(0,r.jsxs)(t.li,{children:["cargo-near: ",(0,r.jsx)(t.code,{children:"0.6.2"})]}),"\n",(0,r.jsxs)(t.li,{children:["rustc: ",(0,r.jsx)(t.code,{children:"1.78.0"})]}),"\n",(0,r.jsxs)(t.li,{children:["node: ",(0,r.jsx)(t.code,{children:"21.6.1"})]}),"\n"]})})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var i=n(85893);function o(e){var t=e.children,n=e.hidden,o=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(67294),a=n(36905),i=n(12466),o=n(16550),s=n(20469),l=n(91980),c=n(67392),u=n(20812);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.lx)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function v(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,o.k6)(),s=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,l._X)(s),(0,r.useCallback)((function(e){if(s){var t=new URLSearchParams(i.location.search);t.set(s,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[s,i])]}function f(e){var t,n,a,i,o=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,f=h(e),b=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:f})})),m=b[0],g=b[1],x=v({queryString:c,groupId:d}),j=x[0],w=x[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(t),a=n[0],i=n[1],[a,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),k=y[0],I=y[1],N=function(){var e=null!=j?j:k;return p({value:e,tabValues:f})?e:null}();return(0,s.Z)((function(){N&&g(N)}),[N]),{selectedValue:m,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);g(e),w(e),I(e)}),[w,I,f]),tabValues:f}}var b=n(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(85893);function x(e){var t=e.className,n=e.block,r=e.selectedValue,o=e.selectValue,s=e.tabValues,l=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=l.indexOf(t),a=s[n].value;a!==r&&(c(t),o(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=l.indexOf(e.currentTarget)+1;n=null!=(r=l[a])?r:l[0];break;case"ArrowLeft":var i,o=l.indexOf(e.currentTarget)-1;n=null!=(i=l[o])?i:l[l.length-1]}null==(t=n)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:s.map((function(e){var t=e.value,n=e.label,i=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},i,{className:(0,a.Z)("tabs__item",m.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function j(e){var t=e.lazy,n=e.children,i=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var s=o.find((function(e){return e.props.value===i}));return s?(0,r.cloneElement)(s,{className:(0,a.Z)("margin-top--md",s.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})}))})}function w(e){var t=f(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",m.tabList),children:[(0,g.jsx)(x,Object.assign({},t,e)),(0,g.jsx)(j,Object.assign({},t,e))]})}function y(e){var t=(0,b.Z)();return(0,g.jsx)(w,Object.assign({},e,{children:d(e.children)}),String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var r=n(67294);const a={},i=r.createContext(a);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);