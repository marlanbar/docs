"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4336],{27859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var s=n(85893),i=n(11151);const a={id:"introduction",title:"Chain Abstraction",sidebar_label:"Introduction"},o=void 0,r={id:"concepts/abstraction/introduction",title:"Chain Abstraction",description:"Do you know how your favorite apps are built and which database they use?. Chances are not, since we choose apps based on their functionality, and not their underlying tech.",source:"@site/../docs/1.concepts/abstraction/what-is.md",sourceDirName:"1.concepts/abstraction",slug:"/concepts/abstraction/introduction",permalink:"/ko/concepts/abstraction/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/abstraction/what-is.md",tags:[],version:"current",lastUpdatedBy:"kualta",lastUpdatedAt:1708965012,formattedLastUpdatedAt:"2024\ub144 2\uc6d4 26\uc77c",frontMatter:{id:"introduction",title:"Chain Abstraction",sidebar_label:"Introduction"},sidebar:"concepts",previous:{title:"\uc5d0\ud3ec\ud06c",permalink:"/ko/concepts/basics/epoch"},next:{title:"Relayers",permalink:"/ko/concepts/abstraction/relayers"}},c={},h=[{value:"Abstraction services",id:"abstraction-services",level:2},{value:"A holistic view",id:"a-holistic-view",level:2}];function l(e){const t={h2:"h2",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Do you know how your favorite apps are built and which database they use?. Chances are not, since we choose apps based on their functionality, and not their underlying tech."}),"\n",(0,s.jsxs)(t.p,{children:["We believe that ",(0,s.jsx)(t.strong,{children:"same should be true for blockchain apps"}),", users should be able to enjoy an application, without the underlying tech hampering their experience. The user experience should be so good, that they don't realize they're using a blockchain."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"img",src:n(63325).Z+"",width:"1282",height:"470"})}),"\n",(0,s.jsxs)(t.p,{children:["To help make this a reality, NEAR provides a set of services that allow to ",(0,s.jsx)(t.strong,{children:"abstract away"})," the blockchain from the user experience. This means that users can use blockchain-based application - both in NEAR and ",(0,s.jsx)(t.strong,{children:"other chains"})," - without needing to understand the technical details."]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"abstraction-services",children:"Abstraction services"}),"\n",(0,s.jsx)(t.p,{children:"Through a combination of multiple technologies, NEAR allows to create a seamless flow, in which users can use their email to create an account, use such account without acquiring funds, and even control accounts across multiple chains."}),"\n",(0,s.jsx)(t.p,{children:"This is achieved through a combination of multiple services:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Relayers"}),": A service that allows developers to subsidize gas fees for their users."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"FastAuth"}),": A service that allows users to create and recover accounts using their email address through multi-party computation (MPC)."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Multi-chain signatures"}),": A service that allows users to use their NEAR account to sign transactions in other chains."]}),"\n"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"a-holistic-view",children:"A holistic view"}),"\n",(0,s.jsxs)(t.p,{children:["The combination of these services allows to create a ",(0,s.jsx)(t.strong,{children:"seamless"})," user experience, in which users can use blockchain-based applications without realizing they are using a blockchain."]}),"\n",(0,s.jsxs)(t.p,{children:["Users will simply login with an email, and a ",(0,s.jsx)(t.strong,{children:"zero-fund"})," account will be created for them. No seed phrases to remember, no private keys to safe keep, and no need to acquire funds."]}),"\n",(0,s.jsx)(t.p,{children:"Once having their account, apps can ask the user to create meta-transactions and send them to any relayer. The relayer will pass the transaction to the network, attaching NEAR to pay for the execution fees. The transaction will then be executed as if the user had sent it, since the relayer is only there to attach NEAR to the submission."}),"\n",(0,s.jsx)(t.p,{children:"If the user wants to interact with other blockchain, they can use their account to interact with a multi-chain signature relayer, which will relay the transaction to the right network, covering GAS fees."}),"\n",(0,s.jsx)(t.p,{children:"As an example, this would allow users to collect NFTs across different chains, without ever needing to explicitly create an account or acquire crypto. All with just a single email login."})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},63325:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/chain-abstraction-landing-6d4641c84ace816727acb447e6880e70.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var s=n(67294);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);