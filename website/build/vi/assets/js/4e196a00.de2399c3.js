"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8214],{55316:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var n=s(85893),i=s(11151);const c={id:"one-yocto",title:"Ensure it is the User (1y\u24c3)"},a=void 0,o={id:"build/smart-contracts/security/one-yocto",title:"Ensure it is the User (1y\u24c3)",description:"NEAR uses a system of Access Keys to simplify handling accounts.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/2.build/2.smart-contracts/security/one_yocto.md",sourceDirName:"2.build/2.smart-contracts/security",slug:"/build/smart-contracts/security/one-yocto",permalink:"/vi/build/smart-contracts/security/one-yocto",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/2.smart-contracts/security/one_yocto.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1712954223e3,frontMatter:{id:"one-yocto",title:"Ensure it is the User (1y\u24c3)"},sidebar:"build",previous:{title:"Cross-Contract Calls",permalink:"/vi/build/smart-contracts/security/callbacks"},next:{title:"Sybil Attacks",permalink:"/vi/build/smart-contracts/security/sybil"}},r={},l=[];function u(e){const t={a:"a",code:"code",em:"em",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["NEAR uses a system of ",(0,n.jsx)(t.a,{href:"/vi/concepts/protocol/access-keys",children:"Access Keys"})," to simplify handling accounts.\nThere are basically two type of keys: ",(0,n.jsx)(t.code,{children:"Full Access"}),", that have full control over an account (i.e. can perform all ",(0,n.jsx)(t.a,{href:"/vi/build/smart-contracts/anatomy/actions",children:"actions"}),"), and\n",(0,n.jsx)(t.code,{children:"Function Call"}),", that only have permission to call a specified smart contract's method(s) that ",(0,n.jsx)(t.em,{children:"do not"})," attach \u24c3 as a deposit."]}),"\n",(0,n.jsxs)(t.p,{children:["When a user ",(0,n.jsx)(t.a,{href:"/vi/build/web3-apps/integrate-contracts#user-sign-in--sign-out",children:"signs in on a website"})," to interact with your contract, what actually happens is\nthat a ",(0,n.jsx)(t.code,{children:"Function Call"})," key is created and stored in the website. Since the website has access to the ",(0,n.jsx)(t.code,{children:"Function Call"})," key, it can use it to\ncall the authorized methods as it pleases. While this is very user friendly for most cases, it is important to be careful in scenarios involving\ntransferring of valuable assets like ",(0,n.jsx)(t.a,{href:"/vi/build/primitives/nft",children:"NFTs"})," or ",(0,n.jsx)(t.a,{href:"/vi/build/primitives/ft",children:"FTs"}),". In such cases, you need to ensure that\nthe person asking for the asset to be transfer is ",(0,n.jsx)(t.strong,{children:"actually the user"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["One direct and inexpensive way to ensure that the user is the one calling is by requiring to attach ",(0,n.jsx)(t.code,{children:"1 y\u24c3"}),". In this case, the user will be\nredirected to the wallet and be asked to accept the transaction. This is because, once again, only the ",(0,n.jsx)(t.code,{children:"Full Access"})," key can be used to send NEAR.\nSince the ",(0,n.jsx)(t.code,{children:"Full Access"})," key is only in the user's wallet, you can trust that a transaction with ",(0,n.jsx)(t.code,{children:"1 y\u24c3"})," was made by the user."]})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>a});var n=s(67294);const i={},c=n.createContext(i);function a(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);