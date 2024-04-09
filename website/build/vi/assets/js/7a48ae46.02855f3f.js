"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9767],{18545:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(85893),o=n(11151);const a={id:"whatisacontract",title:"What is a Smart Contract?",sidebar_label:"What is a Contract?"},s=void 0,i={id:"develop/contracts/whatisacontract",title:"What is a Smart Contract?",description:"Smart contracts are pieces of executable code that live in a NEAR account. They can store data, perform transactions in the account\u2019s name, and expose methods so other accounts can interact with them.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/2.develop/contracts/whatiscontract.md",sourceDirName:"2.develop/contracts",slug:"/develop/contracts/whatisacontract",permalink:"/vi/develop/contracts/whatisacontract",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/contracts/whatiscontract.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1711465748e3,frontMatter:{id:"whatisacontract",title:"What is a Smart Contract?",sidebar_label:"What is a Contract?"},sidebar:"build",previous:{title:"Rollup Data Availability",permalink:"/vi/build/chain-abstraction/data-availability"},next:{title:"Quickstart \u2728",permalink:"/vi/develop/contracts/quickstart"}},c={},l=[{value:"Where do contracts live?",id:"where-do-contracts-live",level:2},{value:"Development flow",id:"development-flow",level:2},{value:"Supported Languages",id:"supported-languages",level:4},{value:"Contract primitives",id:"contract-primitives",level:2}];function d(e){const t={a:"a",admonition:"admonition",h2:"h2",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{Details:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Smart contracts are pieces of ",(0,r.jsx)(t.strong,{children:"executable code"})," that live in a NEAR account. They can ",(0,r.jsx)(t.strong,{children:"store data"}),", ",(0,r.jsx)(t.strong,{children:"perform transactions"})," in the account\u2019s name, and ",(0,r.jsx)(t.strong,{children:"expose methods"})," so other accounts can interact with them."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"img",src:n(41499).Z+"",width:"1282",height:"470"})}),"\n",(0,r.jsx)(t.p,{children:"Do not worry if you don't know how smart-contract blockchains work. As a developer, it is sufficient to understand that NEAR smart-contracts:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Have ",(0,r.jsx)(t.strong,{children:"limited"})," computational resources."]}),"\n",(0,r.jsxs)(t.li,{children:["Interact with other contracts in an ",(0,r.jsx)(t.strong,{children:"asynchronous"})," way."]}),"\n",(0,r.jsxs)(t.li,{children:["Deal with ",(0,r.jsx)(t.strong,{children:"real money"}),", for which security must be a top concern."]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{title:"HTTP Requests and Smart Contracts",type:"info",children:(0,r.jsxs)(t.p,{children:["Smart contracts ",(0,r.jsx)(t.strong,{children:"cannot perform HTTP requests"}),", meaning they can't fetch data from outside the NEAR network."]})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"where-do-contracts-live",children:"Where do contracts live?"}),"\n",(0,r.jsxs)(t.p,{children:["Smart Contracts are deployed into ",(0,r.jsx)(t.a,{href:"/vi/concepts/protocol/account-model",children:(0,r.jsx)(t.strong,{children:"NEAR accounts"})}),". Any NEAR account can hold a contract, needing to pay for the ",(0,r.jsx)(t.strong,{children:"contract's code"})," and the ",(0,r.jsx)(t.strong,{children:"data it stores"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Once in an account, anyone can interact with the contract. Thanks to the underlying network structure, executing code from a contract is both ",(0,r.jsx)(t.strong,{children:"fast"})," (avg. 1.4s finality) and ",(0,r.jsx)(t.strong,{children:"cheap"}),". Moreover, ",(0,r.jsx)(t.strong,{children:"read-only"})," operations are ",(0,r.jsx)(t.strong,{children:"free for everyone"}),"."]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"Storing 100kb costs 1\u24c3, so deploying a contract generally costs only a few $NEARs."})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"development-flow",children:"Development flow"}),"\n",(0,r.jsx)(t.p,{children:"Just like any piece of software, smart contracts have a development flow - starting with its creation and ending with monitoring it, all of which we cover in our documentation."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"img",src:n(39310).Z+"",width:"2079",height:"854"})}),"\n",(0,r.jsx)(t.p,{children:"The development flow can be summarized as follows:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/vi/develop/contracts/quickstart",children:(0,r.jsx)(t.strong,{children:"Scaffold"})}),": The simplest way to create a project is by starting from a template."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/vi/develop/contracts/welcome",children:(0,r.jsx)(t.strong,{children:"Build"})}),": To write a contract developers can choose between Javascript and Rust."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/vi/develop/testing/introduction",children:(0,r.jsx)(t.strong,{children:"Test"})}),": Our Sandbox enables to simulate interactions with one or multiple contracts in a realistic environment."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/vi/develop/deploy",children:(0,r.jsx)(t.strong,{children:"Deploy"})}),": After making sure the contract is secure, developers can deploy the contract into their accounts."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://mynearwallet.com",children:(0,r.jsx)(t.strong,{children:"Use"})}),": Any user can interact with the contract through their NEAR Wallet."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/vi/develop/monitor",children:(0,r.jsx)(t.strong,{children:"Monitor"})}),": The contract's activity can be monitored through simple APIs."]}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"supported-languages",children:"Supported Languages"}),"\n",(0,r.jsxs)(t.p,{children:["During the whole cycle, developers can choose between ",(0,r.jsx)(t.a,{href:"https://www.learn-js.org/",children:"JavaScript"})," and ",(0,r.jsx)(t.a,{href:"https://www.rust-lang.org/",children:"Rust"}),", allowing them to use their favorite language at each step of their journey."]}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)("summary",{children:" Other languages "}),"\nTheoretically, you can use any language that compiles to Wasm for developing NEAR smart contract. However, in order to have a user-friendly experience we would need to provide a library that wraps around low-level runtime APIs, while also offering other high-level functionalities."]}),(0,r.jsx)(t.p,{children:"We envision that in the future, more languages will be supported and the support will be done through the effort from the wider community, not just NEAR alone."})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"contract-primitives",children:"Contract primitives"}),"\n",(0,r.jsx)(t.p,{children:"Contract primitives such as FT, NFT, and DAOs are fundamental building blocks that can be combined to create awesome user experiences such as reward tokens, decision-making tools, and marketplaces."}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Check our section on ",(0,r.jsx)(t.a,{href:"/vi/primitives/whatareprimitives",children:"primitives"})," to learn more about them"]})})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},39310:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/contract-lifecycle-a3a6ba952950687087bf1420180053bc.png"},41499:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/contracts-landing-5a9c76a78e71b0e5f9a96033f1f23d23.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var r=n(67294);const o={},a=r.createContext(o);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);