"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7506],{47306:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>u,metadata:()=>l,toc:()=>d});var r=t(85893),a=t(11151),i=t(74866),s=t(85162);const u={sidebar_position:5,sidebar_label:"Transaction"},c="Transaction Structure",l={id:"build/data-infrastructure/lake-data-structures/transaction",title:"Transaction Structure",description:"Definition",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/2.build/6.data-infrastructure/lake-data-structures/transaction.mdx",sourceDirName:"2.build/6.data-infrastructure/lake-data-structures",slug:"/build/data-infrastructure/lake-data-structures/transaction",permalink:"/zh-CN/build/data-infrastructure/lake-data-structures/transaction",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/6.data-infrastructure/lake-data-structures/transaction.mdx",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1724058724e3,sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Transaction"},sidebar:"build",previous:{title:"Shard",permalink:"/zh-CN/build/data-infrastructure/lake-data-structures/shard"},next:{title:"Receipt",permalink:"/zh-CN/build/data-infrastructure/lake-data-structures/receipt"}},o={},d=[{value:"Definition",id:"definition",level:2},{value:"<code>SignedTransactionView</code>",id:"signedtransactionview",level:2},{value:"<code>ActionView</code>",id:"actionview",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsxs)(n.h1,{id:"transaction-structure",children:[(0,r.jsx)(n.code,{children:"Transaction"})," Structure"]})}),"\n",(0,r.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(n.p,{children:"Transaction is the main way of interaction between a user and a blockchain. Transaction contains:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Signer account ID"}),"\n",(0,r.jsx)(n.li,{children:"Receiver account ID"}),"\n",(0,r.jsx)(n.li,{children:"Actions"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"signedtransactionview",children:(0,r.jsx)(n.code,{children:"SignedTransactionView"})}),"\n",(0,r.jsx)(n.p,{children:"Transaction might be unsigned but from the indexer perspective when we think about Transaction we think about signed one"}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(s.Z,{value:"rust",label:"Rust",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:"links=1",children:"pub struct SignedTransactionView {\n    pub signer_id: AccountId,\n    pub public_key: PublicKey,\n    pub nonce: Nonce,\n    pub receiver_id: AccountId,\n    pub actions: Vec<ActionView>,\n    pub signature: Signature,\n    pub hash: CryptoHash,\n}\n"})})}),(0,r.jsx)(s.Z,{value:"typescript",label:"TypeScript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:"links=1",children:"export type Transaction = {\n  signerId: string;\n  publicKey: string;\n  nonce: number;\n  receiverId: string;\n  actions: Action[];\n  signature: string;\n  hash: string;\n};\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"actionview",children:(0,r.jsx)(n.code,{children:"ActionView"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ActionView"})," is an Enum with possible actions along with parameters. This structure is used in Transactions and in ",(0,r.jsx)(n.a,{href:"/zh-CN/build/data-infrastructure/lake-data-structures/receipt",children:"Receipts"})]}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(s.Z,{value:"rust",label:"Rust",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:"links=1",children:'pub enum ActionView {\n    CreateAccount,\n    DeployContract {\n        code: String,\n    },\n    FunctionCall {\n        method_name: String,\n        args: String,\n        gas: Gas,\n        #[serde(with = "u128_dec_format")]\n        deposit: Balance,\n    },\n    Transfer {\n        #[serde(with = "u128_dec_format")]\n        deposit: Balance,\n    },\n    Stake {\n        #[serde(with = "u128_dec_format")]\n        stake: Balance,\n        public_key: PublicKey,\n    },\n    AddKey {\n        public_key: PublicKey,\n        access_key: AccessKeyView,\n    },\n    DeleteKey {\n        public_key: PublicKey,\n    },\n    DeleteAccount {\n        beneficiary_id: AccountId,\n    },\n}\n'})})}),(0,r.jsx)(s.Z,{value:"typescript",label:"TypeScript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:"links=1",children:'export type Action =\n  | "CreateAccount"\n  | DeployContractAction\n  | FunctionCallAction\n  | TransferAction\n  | StakeAction\n  | AddKeyAction\n  | DeleteKeyAction\n  | DeleteAccountAction;\n\nexport type DeployContractAction = {\n  DeployContract: {\n    code: string;\n  };\n};\n\nexport type FunctionCallAction= {\n  FunctionCall: {\n    methodName: string;\n    args: string;\n    gas: number;\n    deposit: string;\n  };\n};\n\nexport type TransferAction = {\n  Transfer: {\n    deposit: string;\n  };\n};\n\nexport type StakeAction = {\n  Stake: {\n    stake: number;\n    publicKey: string;\n  };\n};\n\nexport type AddKeyAction = {\n  AddKey: {\n    publicKey: string;\n    accessKey: AccessKey;\n  };\n};\n\nexport type DeleteKeyAction = {\n  DeleteKey: {\n    publicKey: string;\n  };\n};\n\nexport type DeleteAccountAction = {\n  DeleteAccount: {\n    beneficiaryId: string;\n  };\n};\n'})})})]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var i=t(85893);function s(e){var n=e.children,t=e.hidden,s=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(67294),a=t(36905),i=t(12466),s=t(16550),u=t(20469),c=t(91980),l=t(67392),o=t(20812);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function p(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,l.lx)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function b(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,i=(0,s.k6)(),u=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,c._X)(u),(0,r.useCallback)((function(e){if(u){var n=new URLSearchParams(i.location.search);n.set(u,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[u,i])]}function f(e){var n,t,a,i,s=e.defaultValue,c=e.queryString,l=void 0!==c&&c,d=e.groupId,f=p(e),v=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:f})})),m=v[0],g=v[1],y=b({queryString:l,groupId:d}),x=y[0],j=y[1],k=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,o.Nk)(n),a=t[0],i=t[1],[a,(0,r.useCallback)((function(e){n&&i.set(e)}),[n,i])]),w=k[0],A=k[1],T=function(){var e=null!=x?x:w;return h({value:e,tabValues:f})?e:null}();return(0,u.Z)((function(){T&&g(T)}),[T]),{selectedValue:m,selectValue:(0,r.useCallback)((function(e){if(!h({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);g(e),j(e),A(e)}),[j,A,f]),tabValues:f}}var v=t(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function y(e){var n=e.className,t=e.block,r=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],l=(0,i.o5)().blockElementScrollPositionUntilNextRender,o=function(e){var n=e.currentTarget,t=c.indexOf(n),a=u[t].value;a!==r&&(l(n),s(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;t=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var i,s=c.indexOf(e.currentTarget)-1;t=null!=(i=c[s])?i:c[c.length-1]}null==(n=t)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:u.map((function(e){var n=e.value,t=e.label,i=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return c.push(e)},onKeyDown:d,onClick:o},i,{className:(0,a.Z)("tabs__item",m.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function x(e){var n=e.lazy,t=e.children,i=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var u=s.find((function(e){return e.props.value===i}));return u?(0,r.cloneElement)(u,{className:(0,a.Z)("margin-top--md",u.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})}))})}function j(e){var n=f(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",m.tabList),children:[(0,g.jsx)(y,Object.assign({},n,e)),(0,g.jsx)(x,Object.assign({},n,e))]})}function k(e){var n=(0,v.Z)();return(0,g.jsx)(j,Object.assign({},e,{children:d(e.children)}),String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>u,a:()=>s});var r=t(67294);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);