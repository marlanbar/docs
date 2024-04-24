"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3580],{17762:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=e(85893),r=e(11151);const i={},c=void 0,s={id:"build/primitives/linkdrop/bos/create-function-call-drop",title:"create-function-call-drop",description:"",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/2.build/5.primitives/linkdrop/bos/create-function-call-drop.md",sourceDirName:"2.build/5.primitives/linkdrop/bos",slug:"/build/primitives/linkdrop/bos/create-function-call-drop",permalink:"/vi/build/primitives/linkdrop/bos/create-function-call-drop",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/5.primitives/linkdrop/bos/create-function-call-drop.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1712954223e3,frontMatter:{}},a={},d=[];function l(n){const t={code:"code",pre:"pre",...(0,r.a)(),...n.components};return(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'const accountId = context.accountId ?? props.accountId;\nconst keypomContract = "v2.keypom.near";\nconst nftContract = "nft.primitives.near";\nconst nftTokenId = "1";\nconst dropAmount = "10000000000000000000000";\n\nNear.call([\n  {\n    contractName: keypomContract,\n    methodName: "create_drop",\n    args: {\n      public_keys: state.publicKeys,\n      deposit_per_use: dropAmount,\n      fcData: {\n        // 2D array of function calls. In this case, there is 1 function call to make for a key use\n        // By default, if only one array of methods is present, this array of function calls will be used for all key uses\n        methods: [\n          // Array of functions for Key use 1. \n            [{\n              receiverId: nftContract,\n              methodName: "nft_mint",\n              args: JSON.stringify({\n              // Change this token_id if it already exists -> check explorer transaction\n                  token_id: nftTokenId,\n                  metadata: {\n                    title: "My NFT drop",\n                    description: "",\n                    media: "",\n                  }\n              }),\n              accountIdField: "receiver_id",\n              // Attached deposit for when the receiver makes this function call\n              attachedDeposit: "10000000000000000000000"\n            }]\n        ]\n      }\n    },\n    deposit: "23000000000000000000000", // state.publicKeys.length * dropAmount + 3000000000000000000000,\n    gas: "100000000000000",\n  },\n]);\n'})})}function u(n={}){const{wrapper:t}={...(0,r.a)(),...n.components};return t?(0,o.jsx)(t,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},11151:(n,t,e)=>{e.d(t,{Z:()=>s,a:()=>c});var o=e(67294);const r={},i=o.createContext(r);function c(n){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function s(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),o.createElement(i.Provider,{value:t},n.children)}}}]);