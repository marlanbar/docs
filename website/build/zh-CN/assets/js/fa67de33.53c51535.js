"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[408],{10851:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var n=s(85893),o=s(11151);const c={id:"one-yocto",title:"Ensure it is the User (1y\u24c3)"},a=void 0,r={id:"develop/contracts/security/one-yocto",title:"Ensure it is the User (1y\u24c3)",description:"NEAR uses a system of Access Keys to simplify handling accounts. There are basically two type of keys: Full Access, that have full control over an account (i.e. can perform all actions), and Function Call, that only have permission to call a specified smart contract's method(s) that do not attach \u24c3 as a deposit.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/2.develop/contracts/security/one_yocto.md",sourceDirName:"2.develop/contracts/security",slug:"/develop/contracts/security/one-yocto",permalink:"/zh-CN/develop/contracts/security/one-yocto",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/contracts/security/one_yocto.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1711465748,formattedLastUpdatedAt:"2024\u5e743\u670826\u65e5",frontMatter:{id:"one-yocto",title:"Ensure it is the User (1y\u24c3)"},sidebar:"build",previous:{title:"Cross-Contract Calls",permalink:"/zh-CN/develop/contracts/security/callbacks"},next:{title:"Sybil Attacks",permalink:"/zh-CN/develop/contracts/security/sybil"}},i={},l=[];function d(e){const t={a:"a",code:"code",em:"em",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["NEAR uses a system of ",(0,n.jsx)(t.a,{href:"/zh-CN/concepts/protocol/access-keys",children:"Access Keys"})," to simplify handling accounts. There are basically two type of keys: ",(0,n.jsx)(t.code,{children:"Full Access"}),", that have full control over an account (i.e. can perform all ",(0,n.jsx)(t.a,{href:"/zh-CN/develop/contracts/actions",children:"actions"}),"), and ",(0,n.jsx)(t.code,{children:"Function Call"}),", that only have permission to call a specified smart contract's method(s) that ",(0,n.jsx)(t.em,{children:"do not"})," attach \u24c3 as a deposit."]}),"\n",(0,n.jsxs)(t.p,{children:["When a user ",(0,n.jsx)(t.a,{href:"/zh-CN/develop/integrate/frontend#user-sign-in",children:"signs in on a website"})," to interact with your contract, what actually happens is that a ",(0,n.jsx)(t.code,{children:"Function Call"})," key is created and stored in the website. Since the website has access to the ",(0,n.jsx)(t.code,{children:"Function Call"})," key, it can use it to call the authorized methods as it pleases. While this is very user friendly for most cases, it is important to be careful in scenarios involving transferring of valuable assets like ",(0,n.jsx)(t.a,{href:"/zh-CN/develop/relevant-contracts/nft",children:"NFTs"})," or ",(0,n.jsx)(t.a,{href:"/zh-CN/develop/relevant-contracts/ft",children:"FTs"}),". In such cases, you need to ensure that the person asking for the asset to be transfer is ",(0,n.jsx)(t.strong,{children:"actually the user"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["One direct and inexpensive way to ensure that the user is the one calling is by requiring to attach ",(0,n.jsx)(t.code,{children:"1 y\u24c3"}),". In this case, the user will be redirected to the wallet and be asked to accept the transaction. This is because, once again, only the ",(0,n.jsx)(t.code,{children:"Full Access"})," key can be used to send NEAR. Since the ",(0,n.jsx)(t.code,{children:"Full Access"})," key is only in the user's wallet, you can trust that a transaction with ",(0,n.jsx)(t.code,{children:"1 y\u24c3"})," was made by the user."]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>a});var n=s(67294);const o={},c=n.createContext(o);function a(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);