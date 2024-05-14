"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1469],{92791:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=o(85893),r=o(11151);const a={},c=void 0,s={id:"build/primitives/dao/smart-contract/vote-for-proposal",title:"vote-for-proposal",description:"",source:"@site/../docs/2.build/5.primitives/dao/smart-contract/vote-for-proposal.md",sourceDirName:"2.build/5.primitives/dao/smart-contract",slug:"/build/primitives/dao/smart-contract/vote-for-proposal",permalink:"/build/primitives/dao/smart-contract/vote-for-proposal",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/5.primitives/dao/smart-contract/vote-for-proposal.md",tags:[],version:"current",lastUpdatedBy:"Lyudmil Ivanov",lastUpdatedAt:1715700006e3,frontMatter:{}},i={},l=[];function p(t){const e={code:"code",pre:"pre",...(0,r.a)(),...t.components};return(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-rust",children:"// Set of possible action to take\n#[near(serializers = [json, borsh])]\n#[derive(Debug)]\npub enum Action {\n  // Action to add proposal. Used internally.\n  AddProposal,\n  // Action to remove given proposal. Used for immediate deletion in special cases.\n  RemoveProposal,\n  // Vote to approve given proposal or bounty.\n  VoteApprove,\n  // Vote to reject given proposal or bounty.\n  VoteReject,\n  // Vote to remove given proposal or bounty (because it's spam).\n  VoteRemove,\n  // Finalize proposal, called when it's expired to return the funds\n  // (or in the future can be used for early proposal closure).\n  Finalize,\n  // Move a proposal to the hub to shift into another DAO.\n  MoveToHub,\n}\n\n// Validator interface, for cross-contract calls\n#[ext_contract(ext_dao_contract)]\ntrait ExternalDaoContract {\n  fn act_proposal(&mut self, id: u64, action: Action, memo: Option<String>) -> Promise;\n}\n\n// Implement the contract structure\n#[near]\nimpl Contract {\n  #[payable]\n  pub fn act_proposal(&mut self, id: u64, action: Action, memo: Option<String>) -> Promise {\n    let promise = ext_dao_contract::ext(self.dao_contract.clone())\n      .with_attached_deposit(env::attached_deposit())\n      .with_static_gas(Gas(10*TGAS))\n      .act_proposal(id, action, memo);\n\n    return promise.then( // Create a promise to callback query_greeting_callback\n      Self::ext(env::current_account_id())\n      .external_common_callback()\n    )\n  }\n\n  #[private] // Public - but only callable by env::current_account_id()\n  pub fn external_common_callback(&self, #[callback_result] call_result: Result<(), PromiseError>) {\n    // Check if the promise succeeded\n    if call_result.is_err() {\n      log!(\"There was an error contacting external contract\")\n    }\n  }\n}\n"})})}function u(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(p,{...t})}):p(t)}},11151:(t,e,o)=>{o.d(e,{Z:()=>s,a:()=>c});var n=o(67294);const r={},a=n.createContext(r);function c(t){const e=n.useContext(a);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:c(t.components),n.createElement(a.Provider,{value:e},t.children)}}}]);