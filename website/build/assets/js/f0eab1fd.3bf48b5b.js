"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7654],{69508:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=t(85893),r=t(11151),s=t(71183),c=t(74866),i=t(85162);const l={id:"crosscontract",title:"Cross-Contract Calls"},o=void 0,u={id:"build/smart-contracts/anatomy/crosscontract",title:"Cross-Contract Calls",description:"Your contract can interact with other deployed contracts, querying information and executing functions on them.",source:"@site/../docs/2.build/2.smart-contracts/anatomy/crosscontract.md",sourceDirName:"2.build/2.smart-contracts/anatomy",slug:"/build/smart-contracts/anatomy/crosscontract",permalink:"/build/smart-contracts/anatomy/crosscontract",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/2.smart-contracts/anatomy/crosscontract.md",tags:[],version:"current",lastUpdatedBy:"Guille",lastUpdatedAt:1719586643e3,frontMatter:{id:"crosscontract",title:"Cross-Contract Calls"},sidebar:"build",previous:{title:"Transfers & Actions",permalink:"/build/smart-contracts/anatomy/actions"},next:{title:"Yield and Resume",permalink:"/build/smart-contracts/anatomy/yield-resume"}},h={},d=[{value:"Snippet: Querying Information",id:"snippet-querying-information",level:2},{value:"Snippet: Sending Information",id:"snippet-sending-information",level:2},{value:"Promises",id:"promises",level:2},{value:"Creating a Cross Contract Call",id:"creating-a-cross-contract-call",level:3},{value:"Callback Function",id:"callback-function",level:2},{value:"What happens if the function I call fails?",id:"what-happens-if-the-function-i-call-fails",level:3},{value:"Concatenating Functions and Promises",id:"concatenating-functions-and-promises",level:2},{value:"Multiple Functions, Same Contract",id:"multiple-functions-same-contract",level:3},{value:"Multiple Functions: Different Contracts",id:"multiple-functions-different-contracts",level:3},{value:"Security Concerns",id:"security-concerns",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Your contract can interact with other deployed contracts, ",(0,a.jsx)(n.strong,{children:"querying"})," information and ",(0,a.jsx)(n.strong,{children:"executing functions"})," on them."]}),"\n",(0,a.jsx)(n.p,{children:"Since NEAR is a sharded blockchain, its cross-contract calls behave differently than calls do in other chains. In NEAR. cross-contract calls are asynchronous and independent."}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.mdxAdmonitionTitle,{children:["Cross-Contract Calls are ",(0,a.jsx)(n.strong,{children:"Independent"})]}),(0,a.jsx)(n.p,{children:"You will need two independent functions: one to make the call, and another to receive the result"})]}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.mdxAdmonitionTitle,{children:["Cross-Contract Calls are ",(0,a.jsx)(n.strong,{children:"Asynchronous"})]}),(0,a.jsxs)(n.p,{children:["There is a delay between the call and the callback execution, usually of ",(0,a.jsx)(n.strong,{children:"1 or 2 blocks"}),". During this time, the contract is still active and can receive other calls."]})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"snippet-querying-information",children:"Snippet: Querying Information"}),"\n",(0,a.jsxs)(n.p,{children:["While making your contract, it is likely that you will want to query information from another contract. Below, you can see a basic example in which we query the greeting message from our ",(0,a.jsx)(n.a,{href:"/build/smart-contracts/quickstart",children:"Hello NEAR"})," example."]}),"\n",(0,a.jsxs)(s.O2,{children:[(0,a.jsx)(s.SQ,{value:"js",language:"ts",children:(0,a.jsx)(s.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-simple-ts/src/contract.ts",start:"18",end:"52"})}),(0,a.jsxs)(s.SQ,{value:"rust",language:"rust",children:[(0,a.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-simple-rs/src/lib.rs",start:"22",end:"51"}),(0,a.jsx)(s.Ey,{fname:"external.rs",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-simple-rs/src/external.rs",start:"2",end:"12"})]})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"snippet-sending-information",children:"Snippet: Sending Information"}),"\n",(0,a.jsxs)(n.p,{children:["Calling another contract passing information is also a common scenario. Below you can see a function that interacts with the ",(0,a.jsx)(n.a,{href:"/build/smart-contracts/quickstart",children:"Hello NEAR"})," example to change its greeting message."]}),"\n",(0,a.jsxs)(s.O2,{children:[(0,a.jsx)(s.SQ,{value:"js",language:"ts",children:(0,a.jsx)(s.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-simple-ts/src/contract.ts",start:"54",end:"87"})}),(0,a.jsxs)(s.SQ,{value:"rust",language:"rust",children:[(0,a.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-simple-rs/src/lib.rs",start:"53",end:"80"}),(0,a.jsx)(s.Ey,{fname:"external.rs",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-simple-rs/src/external.rs",start:"2",end:"12"})]})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"promises",children:"Promises"}),"\n",(0,a.jsx)(n.p,{children:"Cross-contract calls work by creating two promises in the network:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["A promise to execute code in the external contract (",(0,a.jsx)(n.code,{children:"Promise.create"}),")"]}),"\n",(0,a.jsxs)(n.li,{children:["Optional: A promise to call another function with the result (",(0,a.jsx)(n.code,{children:"Promise.then"}),")"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Both promises will contain the following information:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The address of the contract you want to interact with"}),"\n",(0,a.jsx)(n.li,{children:"The function that you want to execute"}),"\n",(0,a.jsxs)(n.li,{children:["The (",(0,a.jsx)(n.strong,{children:"encoded"}),") arguments to pass to the function"]}),"\n",(0,a.jsxs)(n.li,{children:["The amount of GAS to use (deducted from the ",(0,a.jsx)(n.strong,{children:"attached Gas"}),")"]}),"\n",(0,a.jsxs)(n.li,{children:["The amount of NEAR to attach (deducted from ",(0,a.jsx)(n.strong,{children:"your contract\u2019s balance"}),")"]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["The callback can be made to ",(0,a.jsx)(n.strong,{children:"any"})," contract. Meaning that the result could potentially be handled by another contract"]})}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"creating-a-cross-contract-call",children:"Creating a Cross Contract Call"}),"\n",(0,a.jsxs)(n.p,{children:["To create a cross-contract call with a callback, create two promises and use the ",(0,a.jsx)(n.code,{children:".then"})," method to link them:"]}),"\n",(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(i.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'NearPromise.new("external_address").functionCall("function_name", JSON.stringify(arguments), DEPOSIT, GAS)\n.then(\n  // this function is the callback\n  NearPromise.new(near.currentAccountId()).functionCall("callback_name", JSON.stringify(arguments), DEPOSIT, GAS)\n);\n'})})}),(0,a.jsxs)(i.Z,{value:"rs",label:"\ud83e\udd80 Rust",children:[(0,a.jsxs)(n.p,{children:["There is a helper macro that allows you to make cross-contract calls with the syntax ",(0,a.jsx)(n.code,{children:"#[ext_contract(...)]"}),". It takes a Rust Trait and converts it to a module with static methods. Each of these static methods takes positional arguments defined by the Trait, then the ",(0,a.jsx)(n.code,{children:"receiver_id"}),", the attached deposit and the amount of gas and returns a new ",(0,a.jsx)(n.code,{children:"Promise"}),"."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:'#[ext_contract(external_trait)]\ntrait Contract {\n    fn function_name(&self, param1: T, param2: T) -> T;\n}\n\nexternal_trait::ext("external_address")\n.with_attached_deposit(DEPOSIT)\n.with_static_gas(GAS)\n.function_name(arguments)\n.then(\n  // this is the callback\n  Self::ext(env::current_account_id())\n  .with_attached_deposit(DEPOSIT)\n  .with_static_gas(GAS)\n  .callback_name(arguments)\n);\n\n'})}),(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:" Gas "}),(0,a.jsxs)(n.p,{children:["You can attach an unused GAS weight by specifying the ",(0,a.jsx)(n.code,{children:".with_unused_gas_weight()"})," method but it is defaulted to 1. The unused GAS will be split amongst all the functions in the current execution depending on their weights. If there is only 1 function, any weight above 1 will result in all the unused GAS being attached to that function. If you specify a weight of 0, however, the unused GAS will ",(0,a.jsx)(n.strong,{children:"not"})," be attached to that function. If you have two functions, one with a weight of 3, and one with a weight of 1, the first function will get ",(0,a.jsx)(n.code,{children:"3/4"})," of the unused GAS and the other function will get ",(0,a.jsx)(n.code,{children:"1/4"})," of the unused GAS."]})]})]})]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["If a function returns a promise, then it will delegate the return value and status of transaction execution, but if you return a value or nothing, then the ",(0,a.jsx)(n.code,{children:"Promise"})," result will not influence the transaction status"]})}),"\n",(0,a.jsxs)(n.admonition,{type:"caution",children:[(0,a.jsxs)(n.p,{children:["The Promises you are creating will ",(0,a.jsx)(n.strong,{children:"not execute immediately"}),". In fact, they will be queued in the network an:"]}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["The cross-contract call will execute 1 or 2 blocks after your function finishes ",(0,a.jsx)(n.strong,{children:"correctly"}),"."]}),"\n"]})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"callback-function",children:"Callback Function"}),"\n",(0,a.jsxs)(n.p,{children:["If your function finishes correctly, then eventually your callback function will execute. This will happen whether the ",(0,a.jsx)(n.strong,{children:"external contract fails or not"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"In the callback function you will have access to the result, which will contain the status of the external function (if it worked or not), and the values in case of success."}),"\n",(0,a.jsxs)(s.O2,{children:[(0,a.jsx)(s.SQ,{value:"js",language:"ts",children:(0,a.jsx)(s.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-simple-ts/src/contract.ts",start:"42",end:"53"})}),(0,a.jsx)(s.SQ,{value:"rust",language:"rust",children:(0,a.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-simple-rs/src/lib.rs",start:"37",end:"51"})})]}),"\n",(0,a.jsx)(n.admonition,{title:"Callback with always execute",type:"info",children:(0,a.jsxs)(n.p,{children:["We repeat, if your function finishes correctly, then your callback will ",(0,a.jsx)(n.strong,{children:"always execute"}),". This will happen no matter if the external function finished correctly or not"]})}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"Always make sure to have enough Gas for your callback function to execute"})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"Remember to mark your callback function as private using macros/decorators, so it can only be called by the contract itself"})}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"what-happens-if-the-function-i-call-fails",children:"What happens if the function I call fails?"}),"\n",(0,a.jsxs)(n.p,{children:["If the external function fails (i.e. it panics), then your callback will be ",(0,a.jsx)(n.strong,{children:"executed anyway"}),". Here you need to ",(0,a.jsx)(n.strong,{children:"manually rollback"})," any changes made in your\ncontract during the original call. Particularly:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Refund the predecessor"})," if needed: If the contract attached NEAR to the call, the funds are now back in ",(0,a.jsx)(n.strong,{children:"the contract's account"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Revert any state changes"}),": If the original function made any state changes (i.e. changed or stored data), you need to manually roll them back. ",(0,a.jsx)(n.strong,{children:"They won't revert automatically"})]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:["If your original function finishes correctly then the callback executes ",(0,a.jsx)(n.strong,{children:"even if the external function panics"}),". Your state will ",(0,a.jsx)(n.strong,{children:"not"})," rollback automatically,\nand $NEAR will ",(0,a.jsx)(n.strong,{children:"not"})," be returned to the signer automatically. Always make sure to check in the callback if the external function failed, and manually rollback any\noperation if necessary."]})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"concatenating-functions-and-promises",children:"Concatenating Functions and Promises"}),"\n",(0,a.jsxs)(n.p,{children:["\u2705 Promises can be concatenate using the ",(0,a.jsx)(n.code,{children:".and"})," operator: ",(0,a.jsx)(n.code,{children:"P1.and(P2).and(P3).then(P4)"}),": ",(0,a.jsx)(n.code,{children:"P1"}),", ",(0,a.jsx)(n.code,{children:"P2"}),", and ",(0,a.jsx)(n.code,{children:"P3"})," execute in parallel, after they finish, ",(0,a.jsx)(n.code,{children:"P4"})," will execute and have access to all their results"]}),"\n",(0,a.jsxs)(n.p,{children:["\u26d4 You cannot ",(0,a.jsx)(n.strong,{children:"return"})," a joint promise without a callback: ",(0,a.jsx)(n.code,{children:"return P1.and(P2)"})," is invalid since it misses the ",(0,a.jsx)(n.code,{children:"then"})]}),"\n",(0,a.jsxs)(n.p,{children:["\u2705 You can concatenate ",(0,a.jsx)(n.code,{children:"then"})," promises: ",(0,a.jsx)(n.code,{children:"P1.then(P2).then(P3)"}),": ",(0,a.jsx)(n.code,{children:"P1"})," executes, then ",(0,a.jsx)(n.code,{children:"P2"})," executes with the result of ",(0,a.jsx)(n.code,{children:"P1"}),", then ",(0,a.jsx)(n.code,{children:"P3"})," executes with the result of ",(0,a.jsx)(n.code,{children:"P2"})]}),"\n",(0,a.jsxs)(n.p,{children:["\u26d4 You cannot use an ",(0,a.jsx)(n.code,{children:"and"})," within a ",(0,a.jsx)(n.code,{children:"then"}),": ",(0,a.jsx)(n.code,{children:"P1.then(P2.and(P3))"})," is invalid"]}),"\n",(0,a.jsxs)(n.p,{children:["\u26d4 You cannot use a ",(0,a.jsx)(n.code,{children:"then"})," within a ",(0,a.jsx)(n.code,{children:"then"}),": ",(0,a.jsx)(n.code,{children:"P1.then(P2.then(P3))"})," is invalid"]}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"multiple-functions-same-contract",children:"Multiple Functions, Same Contract"}),"\n",(0,a.jsxs)(n.p,{children:["You can call multiple functions in the same external contract, which is known as a ",(0,a.jsx)(n.strong,{children:"batch call"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["An important property of batch calls is that they ",(0,a.jsx)(n.strong,{children:"act as a unit"}),": they execute in the same ",(0,a.jsx)(n.a,{href:"/concepts/protocol/transactions#receipt-receipt",children:"receipt"}),", and if ",(0,a.jsx)(n.strong,{children:"any function fails"}),", then they ",(0,a.jsx)(n.strong,{children:"all get reverted"}),"."]}),"\n",(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(i.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(s.Ey,{fname:"batch_actions",language:"js",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-advanced-ts/src/internal/batch_actions.ts",start:"7",end:"17"})}),(0,a.jsx)(i.Z,{value:"rs",label:"\ud83e\udd80 Rust",children:(0,a.jsx)(s.Ey,{fname:"lib.ts",language:"rust",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-advanced-rs/src/batch_actions.rs",start:"14",end:"19"})})]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Callbacks only have access to the result of the ",(0,a.jsx)(n.strong,{children:"last function"})," in a batch call"]})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"multiple-functions-different-contracts",children:"Multiple Functions: Different Contracts"}),"\n",(0,a.jsxs)(n.p,{children:["You can also call multiple functions in ",(0,a.jsx)(n.strong,{children:"different contracts"}),". These functions will be executed in parallel, and do not impact each other. This means that, if one fails, the others ",(0,a.jsx)(n.strong,{children:"will execute, and NOT be reverted"}),"."]}),"\n",(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(i.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(s.Ey,{fname:"lib.ts",language:"js",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-advanced-ts/src/internal/multiple_contracts.ts",start:"6",end:"21"})}),(0,a.jsx)(i.Z,{value:"rs",label:"\ud83e\udd80 Rust",children:(0,a.jsx)(s.Ey,{fname:"lib.rs",language:"rust",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-advanced-rs/src/multiple_contracts.rs",start:"17",end:"55"})})]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Callbacks have access to the result of ",(0,a.jsx)(n.strong,{children:"all functions"})," in a parallel call"]})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"security-concerns",children:"Security Concerns"}),"\n",(0,a.jsxs)(n.p,{children:["While writing cross-contract calls there is a significant aspect to keep in mind: all the calls are ",(0,a.jsx)(n.strong,{children:"independent"})," and ",(0,a.jsx)(n.strong,{children:"asynchronous"}),". In other words:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["The function in which you make the call and function for the callback are ",(0,a.jsx)(n.strong,{children:"independent"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["There is a ",(0,a.jsx)(n.strong,{children:"delay between the call and the callback"}),", in which people can still interact with the contract"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"This has important implications on how you should handle the callbacks. Particularly:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Make sure you don't leave the contract in a exploitable state between the call and the callback."}),"\n",(0,a.jsx)(n.li,{children:"Manually rollback any changes to the state in the callback if the external call failed."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["We have a whole ",(0,a.jsx)(n.a,{href:"/build/smart-contracts/security/callbacks",children:"security section"})," dedicated to these specific errors, so please go and check it."]}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:["Not following these basic security guidelines could expose your contract to exploits. Please check the ",(0,a.jsx)(n.a,{href:"/build/smart-contracts/security/callbacks",children:"security section"}),", and if still in doubt, ",(0,a.jsx)(n.a,{href:"https://near.chat",children:"join us in Discord"}),"."]})})]})}function f(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>c});t(67294);var a=t(36905);const r={tabItem:"tabItem_Ymn6"};var s=t(85893);function c(e){var n=e.children,t=e.hidden,c=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,c),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(67294),r=t(36905),s=t(12466),c=t(16550),i=t(20469),l=t(91980),o=t(67392),u=t(20812);function h(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function d(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return h(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,o.lx)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,s=(0,c.k6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:r});return[(0,l._X)(i),(0,a.useCallback)((function(e){if(i){var n=new URLSearchParams(s.location.search);n.set(i,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[i,s])]}function p(e){var n,t,r,s,c=e.defaultValue,l=e.queryString,o=void 0!==l&&l,h=e.groupId,p=d(e),x=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:c,tabValues:p})})),j=x[0],g=x[1],b=f({queryString:o,groupId:h}),y=b[0],v=b[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),t=(0,u.Nk)(n),r=t[0],s=t[1],[r,(0,a.useCallback)((function(e){n&&s.set(e)}),[n,s])]),k=w[0],S=w[1],T=function(){var e=null!=y?y:k;return m({value:e,tabValues:p})?e:null}();return(0,i.Z)((function(){T&&g(T)}),[T]),{selectedValue:j,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);g(e),v(e),S(e)}),[v,S,p]),tabValues:p}}var x=t(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function b(e){var n=e.className,t=e.block,a=e.selectedValue,c=e.selectValue,i=e.tabValues,l=[],o=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=l.indexOf(n),r=i[t].value;r!==a&&(o(n),c(r))},h=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,r=l.indexOf(e.currentTarget)+1;t=null!=(a=l[r])?a:l[0];break;case"ArrowLeft":var s,c=l.indexOf(e.currentTarget)-1;t=null!=(s=l[c])?s:l[l.length-1]}null==(n=t)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:i.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return l.push(e)},onKeyDown:h,onClick:u},s,{className:(0,r.Z)("tabs__item",j.tabItem,null==s?void 0:s.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)}))})}function y(e){var n=e.lazy,t=e.children,s=e.selectedValue,c=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var i=c.find((function(e){return e.props.value===s}));return i?(0,a.cloneElement)(i,{className:(0,r.Z)("margin-top--md",i.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:c.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})}))})}function v(e){var n=p(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",j.tabList),children:[(0,g.jsx)(b,Object.assign({},n,e)),(0,g.jsx)(y,Object.assign({},n,e))]})}function w(e){var n=(0,x.Z)();return(0,g.jsx)(v,Object.assign({},e,{children:h(e.children)}),String(n))}},71183:(e,n,t)=>{t.d(n,{O2:()=>f,Ey:()=>x,SQ:()=>p});var a=t(67294),r=t(74866),s=t(85162),c=t(74165),i=t(15861),l=t(1841),o=t.n(l),u=t(85893);function h(){return(h=(0,i.Z)((0,c.Z)().mark((function e(n,t,a){var r,s,i,l;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((s=localStorage.getItem(n+"-until"))&&s>Date.now())){e.next=5;break}r=localStorage.getItem(n),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(n);case 8:return e.next=10,e.sent.text();case 10:r=e.sent,localStorage.setItem(n,r),localStorage.setItem(n+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return i=r.split("\n"),t=t?Number(t)-1:0,a=a?Number(a):i.length,i=i.slice(t,a),l=i.reduce((function(e,n){if(0===n.length)return e;var t=n.match(/^\s+/);return t?Math.min(e,t[0].length):0}),1/0),e.abrupt("return",i.map((function(e){return e.slice(l)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const d=function(e){var n=e.url,t=e.start,r=e.end,s=e.language,c=e.fname,i=e.metastring,l=(0,a.useState)("Loading..."),d=l[0],m=l[1];return(0,a.useEffect)((function(){var e=function(e){var n=e.slice(e.indexOf("https")).split("#"),t=n[0],a=(n[1],new URL(t).pathname.split("/").slice(1)),r=a[0],s=a[1];return a[2],"https://raw.githubusercontent.com/"+r+"/"+s+"/"+a[3]+"/"+a.slice(4).join("/")}(n),a=function(e,n,t){return h.apply(this,arguments)}(e,t,r);a.then((function(e){return m(e)}))})),(0,u.jsxs)("div",{fname:c,children:[(0,u.jsx)(o(),{language:s,metastring:i+" showLineNumbers",children:d}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:n,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var m={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function f(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,u.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,u.jsx)(s.Z,{value:e.props.value,label:m[e.props.value],children:e})}))})}function p(e){var n=e.children,t=e.language,a=e.showSingleFName;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var t=e.props,a=(t.children,t.url),r=t.start,s=t.end,c=t.fname;if(e.type===x)return x({url:a,start:r,end:s,language:n,fname:c});return e}(e,t)})),1!=n.length||a?(0,u.jsx)(r.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,u.jsx)(s.Z,{value:n,label:e.props.fname,children:e})}))}):(0,u.jsx)(s.Z,{value:0,label:n[0].props.fname,children:n[0]})}function x(e){var n=e.url,t=e.start,a=e.end,r=e.language,s=e.fname,c=e.metastring;return d({url:n,start:t,end:a,language:r,fname:s,metastring:c})}}}]);