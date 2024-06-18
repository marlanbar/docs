"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4742],{8848:(t,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var e=n(85893),r=n(11151);const i={id:"introduction",title:"JavaScript SDK\uc5d0 \ub300\ud574"},o=void 0,a={id:"sdk/js/introduction",title:"JavaScript SDK\uc5d0 \ub300\ud574",description:"JavaScript\ub294 \uc804 \uc138\uacc4\uc801\uc73c\ub85c \uc57d 1,400\ub9cc \uba85\uc758 \uac1c\ubc1c\uc790\uac00 \uc0ac\uc6a9\ud558\ub294 \uac00\uc7a5 \uc778\uae30 \uc788\ub294 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\uc785\ub2c8\ub2e4. NEAR\uc5d0\uc11c\ub294 JavaScript \ub610\ub294 Typescript\ub85c \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud560 \uc218 \uc788\uc73c\uba70, SDK\ub294 \uacbd\ub7c9 \ub7f0\ud0c0\uc784\uc73c\ub85c \uc774\ub97c \ud328\ud0b9\ud569\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c, \uc774\ub97c NEAR \ub124\ud2b8\uc6cc\ud06c\uc5d0 \ubc30\ud3ec\ud560 \uc218 \uc788\ub294 \ub2e8\uc77c Wasm \ud30c\uc77c\ub85c \ucef4\ud30c\uc77c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/sdk/js/js-sdk.md",sourceDirName:"sdk/js",slug:"/sdk/js/introduction",permalink:"/ko/sdk/js/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/js/js-sdk.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1718378911e3,frontMatter:{id:"introduction",title:"JavaScript SDK\uc5d0 \ub300\ud574"},sidebar:"tools",previous:{title:"\ucee8\ud2b8\ub799\ud2b8 \ud06c\uae30 \ucd95\uc18c",permalink:"/ko/sdk/rust/contract-size"},next:{title:"\uc2dc\uc791\ud558\uae30",permalink:"/ko/sdk/js/get-started"}},c={},d=[{value:"Create Your First Javascript Contract",id:"create-your-first-javascript-contract",level:2}];function l(t){const s={a:"a",admonition:"admonition",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...t.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(s.p,{children:"JavaScript\ub294 \uc804 \uc138\uacc4\uc801\uc73c\ub85c \uc57d 1,400\ub9cc \uba85\uc758 \uac1c\ubc1c\uc790\uac00 \uc0ac\uc6a9\ud558\ub294 \uac00\uc7a5 \uc778\uae30 \uc788\ub294 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\uc785\ub2c8\ub2e4. NEAR\uc5d0\uc11c\ub294 JavaScript \ub610\ub294 Typescript\ub85c \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud560 \uc218 \uc788\uc73c\uba70, SDK\ub294 \uacbd\ub7c9 \ub7f0\ud0c0\uc784\uc73c\ub85c \uc774\ub97c \ud328\ud0b9\ud569\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c, \uc774\ub97c NEAR \ub124\ud2b8\uc6cc\ud06c\uc5d0 \ubc30\ud3ec\ud560 \uc218 \uc788\ub294 \ub2e8\uc77c Wasm \ud30c\uc77c\ub85c \ucef4\ud30c\uc77c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,e.jsxs)(s.admonition,{title:"Help contribute!",type:"info",children:[(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.a,{href:"https://github.com/near/near-sdk-js/issues",children:"\ubc1c\uc0dd\ud55c \ubb38\uc81c \ubcf4\uace0"})," \ud83d\udc1e"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.a,{href:"https://github.com/near/near-sdk-js/discussions",children:"\uc81c\uc548 / \ud53c\ub4dc\ubc31 \uc81c\uacf5"})," \ud83d\udca1"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.a,{href:"https://github.com/near/near-sdk-js/discussions/categories/show-and-tell",children:"Show us what you've built!"})," \ud83d\udcaa"]}),"\n"]}),(0,e.jsx)(s.hr,{}),(0,e.jsx)(s.h2,{id:"create-your-first-javascript-contract",children:"Create Your First Javascript Contract"}),(0,e.jsxs)(s.p,{children:["\uba87 \ubd84 \uc548\uc5d0 \uccab \ubc88\uc9f8 ",(0,e.jsx)(s.strong,{children:"Javascript \ucee8\ud2b8\ub799\ud2b8"}),"\ub97c \uc0dd\uc131\ud574 \ubcf4\uc138\uc694."]}),(0,e.jsxs)(s.ol,{children:["\n",(0,e.jsxs)(s.li,{children:["Download and install ",(0,e.jsx)(s.a,{href:"https://nodejs.org/en/download/",children:"Node.js"}),"."]}),"\n",(0,e.jsxs)(s.li,{children:["Create a new ",(0,e.jsx)(s.strong,{children:"javascript"})," project using our ",(0,e.jsx)(s.a,{href:"/ko/build/smart-contracts/quickstart",children:"quickstart guide"}),"."]}),"\n",(0,e.jsxs)(s.li,{children:["Read our docs on ",(0,e.jsx)(s.strong,{children:(0,e.jsx)(s.a,{href:"/ko/build/smart-contracts/anatomy/",children:"how to write smart contract"})}),"."]}),"\n"]})]})]})}function u(t={}){const{wrapper:s}={...(0,r.a)(),...t.components};return s?(0,e.jsx)(s,{...t,children:(0,e.jsx)(l,{...t})}):l(t)}},11151:(t,s,n)=>{n.d(s,{Z:()=>a,a:()=>o});var e=n(67294);const r={},i=e.createContext(r);function o(t){const s=e.useContext(i);return e.useMemo((function(){return"function"==typeof t?t(s):{...s,...t}}),[s,t])}function a(t){let s;return s=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:o(t.components),e.createElement(i.Provider,{value:s},t.children)}}}]);