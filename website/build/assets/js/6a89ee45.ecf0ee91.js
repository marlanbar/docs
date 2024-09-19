"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5021],{70496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(85893),a=n(11151),i=n(74866),u=n(85162);const s={id:"execution-outcome",sidebar_position:6,sidebar_label:"ExecutionOutcome"},o="ExecutionOutcome Structure",c={id:"build/data-infrastructure/lake-data-structures/execution-outcome",title:"ExecutionOutcome Structure",description:"Definition",source:"@site/../docs/2.build/6.data-infrastructure/lake-data-structures/execution_outcome.mdx",sourceDirName:"2.build/6.data-infrastructure/lake-data-structures",slug:"/build/data-infrastructure/lake-data-structures/execution-outcome",permalink:"/build/data-infrastructure/lake-data-structures/execution-outcome",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/6.data-infrastructure/lake-data-structures/execution_outcome.mdx",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1712759479e3,sidebarPosition:6,frontMatter:{id:"execution-outcome",sidebar_position:6,sidebar_label:"ExecutionOutcome"},sidebar:"build",previous:{title:"Receipt",permalink:"/build/data-infrastructure/lake-data-structures/receipt"},next:{title:"StateChange",permalink:"/build/data-infrastructure/lake-data-structures/state-change"}},l={},d=[{value:"Definition",id:"definition",level:2},{value:"<code>ExecutionOutcomeWithIdView</code>",id:"executionoutcomewithidview",level:2},{value:"<code>ExecutionOutcomeView</code>",id:"executionoutcomeview",level:2},{value:"<code>ExecutionStatusView</code>",id:"executionstatusview",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsxs)(t.h1,{id:"executionoutcome-structure",children:[(0,r.jsx)(t.code,{children:"ExecutionOutcome"})," Structure"]})}),"\n",(0,r.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsxs)(t.p,{children:["ExecutionOutcome is the result of execution of ",(0,r.jsx)(t.a,{href:"/build/data-infrastructure/lake-data-structures/transaction",children:"Transaction"})," or ",(0,r.jsx)(t.a,{href:"/build/data-infrastructure/lake-data-structures/receipt",children:"Receipt"})]}),"\n",(0,r.jsx)(t.admonition,{title:"Transaction's ExecutionOutcome",type:"info",children:(0,r.jsx)(t.p,{children:"In the result of the Transaction execution will always be a Receipt."})}),"\n",(0,r.jsx)(t.h2,{id:"executionoutcomewithidview",children:(0,r.jsx)(t.code,{children:"ExecutionOutcomeWithIdView"})}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(u.Z,{value:"rust",label:"Rust",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",metastring:"links=1",children:"pub struct ExecutionOutcomeWithIdView {\n    pub proof: MerklePath,\n    pub block_hash: CryptoHash,\n    pub id: CryptoHash,\n    pub outcome: ExecutionOutcomeView,\n}\n"})})}),(0,r.jsx)(u.Z,{value:"typescript",label:"TypeScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:"links=1",children:"export type ExecutionOutcomeWithReceipt = {\n  executionOutcome: {\n    blockHash: string;\n    id: string;\n    outcome: {\n      executorId: string,\n      gasBurnt: number,\n      logs: string[],\n      metadata: {\n        gasProfile: string | null;\n        version: number;\n      };\n      receiptIds: string[],\n      status: ExecutionStatus,\n      tokensBurnt: string\n    };\n    proof: ExecutionProof[];\n  };\n  receipt: Receipt | null;\n};\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"executionoutcomeview",children:(0,r.jsx)(t.code,{children:"ExecutionOutcomeView"})}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(u.Z,{value:"rust",label:"Rust",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",metastring:"links=1",children:'pub struct ExecutionOutcomeView {\n    /// Logs from this transaction or receipt.\n    pub logs: Vec<String>,\n    /// Receipt IDs generated by this transaction or receipt.\n    pub receipt_ids: Vec<CryptoHash>,\n    /// The amount of the gas burnt by the given transaction or receipt.\n    pub gas_burnt: Gas,\n    /// The amount of tokens burnt corresponding to the burnt gas amount.\n    /// This value doesn\'t always equal to the `gas_burnt` multiplied by the gas price, because\n    /// the prepaid gas price might be lower than the actual gas price and it creates a deficit.\n    #[serde(with = "u128_dec_format")]\n    pub tokens_burnt: Balance,\n    /// The id of the account on which the execution happens. For transaction this is signer_id,\n    /// for receipt this is receiver_id.\n    pub executor_id: AccountId,\n    /// Execution status. Contains the result in case of successful execution.\n    pub status: ExecutionStatusView,\n    /// Execution metadata, versioned\n    #[serde(default)]\n    pub metadata: ExecutionMetadataView,\n}\n'})})}),(0,r.jsx)(u.Z,{value:"typescript",label:"TypeScript",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"#executionoutcomewithidview",children:"ExecutionOutcomeWithIdView TypeScript"})," defines this structure already an nested"]})})]}),"\n",(0,r.jsx)(t.h2,{id:"executionstatusview",children:(0,r.jsx)(t.code,{children:"ExecutionStatusView"})}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(u.Z,{value:"rust",label:"Rust",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",metastring:"links=1",children:"pub enum ExecutionStatusView {\n    /// The execution is pending or unknown.\n    Unknown,\n    /// The execution has failed.\n    Failure(TxExecutionError),\n    /// The final action succeeded and returned some value or an empty vec encoded in base64.\n    SuccessValue(String),\n    /// The final action of the receipt returned a promise or the signed transaction was converted\n    /// to a receipt. Contains the receipt_id of the generated receipt.\n    SuccessReceiptId(CryptoHash),\n}\n"})})}),(0,r.jsx)(u.Z,{value:"typescript",label:"TypeScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:"links=1",children:"export type ExecutionStatus =\n  | { Unknown: unknown }\n  | { Failure: unknown }\n  | { SuccessValue: string }\n  | { SuccessReceiptId: string };\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>u});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var i=n(85893);function u(e){var t=e.children,n=e.hidden,u=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,u),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(67294),a=n(36905),i=n(12466),u=n(16550),s=n(20469),o=n(91980),c=n(67392),l=n(20812);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.lx)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,u.k6)(),s=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,o._X)(s),(0,r.useCallback)((function(e){if(s){var t=new URLSearchParams(i.location.search);t.set(s,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[s,i])]}function m(e){var t,n,a,i,u=e.defaultValue,o=e.queryString,c=void 0!==o&&o,d=e.groupId,m=h(e),b=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:u,tabValues:m})})),x=b[0],v=b[1],g=f({queryString:c,groupId:d}),w=g[0],j=g[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,l.Nk)(t),a=n[0],i=n[1],[a,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),k=y[0],E=y[1],V=function(){var e=null!=w?w:k;return p({value:e,tabValues:m})?e:null}();return(0,s.Z)((function(){V&&v(V)}),[V]),{selectedValue:x,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);v(e),j(e),E(e)}),[j,E,m]),tabValues:m}}var b=n(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(85893);function g(e){var t=e.className,n=e.block,r=e.selectedValue,u=e.selectValue,s=e.tabValues,o=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,l=function(e){var t=e.currentTarget,n=o.indexOf(t),a=s[n].value;a!==r&&(c(t),u(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":var r,a=o.indexOf(e.currentTarget)+1;n=null!=(r=o[a])?r:o[0];break;case"ArrowLeft":var i,u=o.indexOf(e.currentTarget)-1;n=null!=(i=o[u])?i:o[o.length-1]}null==(t=n)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:s.map((function(e){var t=e.value,n=e.label,i=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return o.push(e)},onKeyDown:d,onClick:l},i,{className:(0,a.Z)("tabs__item",x.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function w(e){var t=e.lazy,n=e.children,i=e.selectedValue,u=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var s=u.find((function(e){return e.props.value===i}));return s?(0,r.cloneElement)(s,{className:(0,a.Z)("margin-top--md",s.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:u.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})}))})}function j(e){var t=m(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,v.jsx)(g,Object.assign({},t,e)),(0,v.jsx)(w,Object.assign({},t,e))]})}function y(e){var t=(0,b.Z)();return(0,v.jsx)(j,Object.assign({},e,{children:d(e.children)}),String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>u});var r=n(67294);const a={},i=r.createContext(a);function u(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:u(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);