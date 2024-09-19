"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9293],{47338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>h});var a=n(85893),r=n(11151),s=n(74866),i=n(85162),l=n(71183);const o={id:"serialization-protocols",title:"Serialization Protocols"},c=void 0,u={id:"build/smart-contracts/anatomy/serialization-protocols",title:"Serialization Protocols",description:"Serialization formats within the SDK define how data structures are translated into bytes which are needed for passing data into methods of the smart contract or storing data in state. For the case of method parameters, JSON (default) and Borsh are supported with the SDK and for storing data on-chain Borsh is used.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/2.build/2.smart-contracts/anatomy/serialization-interface.md",sourceDirName:"2.build/2.smart-contracts/anatomy",slug:"/build/smart-contracts/anatomy/serialization-protocols",permalink:"/vi/build/smart-contracts/anatomy/serialization-protocols",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/2.smart-contracts/anatomy/serialization-interface.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1719825734e3,frontMatter:{id:"serialization-protocols",title:"Serialization Protocols"},sidebar:"build",previous:{title:"Notes on Serialization",permalink:"/vi/build/smart-contracts/anatomy/serialization"},next:{title:"Reducing Contract Size",permalink:"/vi/build/smart-contracts/anatomy/reduce-size"}},d={},h=[{value:"Overriding Serialization Protocol Default",id:"overriding-serialization-protocol-default",level:3},{value:"Example",id:"example",level:4},{value:"JSON wrapper types",id:"json-wrapper-types",level:3},{value:"Base64VecU8",id:"base64vecu8",level:3}];function p(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Serialization formats within the SDK define how data structures are translated into bytes which are needed for passing data into methods of the smart contract or storing data in state. For the case of method parameters, ",(0,a.jsx)(t.a,{href:"https://www.json.org/json-en.html",children:"JSON"})," (default) and ",(0,a.jsx)(t.a,{href:"https://borsh.io/",children:"Borsh"})," are supported with the SDK and for storing data on-chain Borsh is used."]}),"\n",(0,a.jsx)(t.p,{children:"The qualities of JSON and Borsh are as follows:"}),"\n",(0,a.jsx)(t.p,{children:"JSON:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Human-readable"}),"\n",(0,a.jsx)(t.li,{children:"Self-describing format (don't need to know the underlying type)"}),"\n",(0,a.jsx)(t.li,{children:"Easy interop with JavaScript"}),"\n",(0,a.jsx)(t.li,{children:"Less efficient size and (de)serialization"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Borsh:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Compact, binary format that's efficient for serialized data size"}),"\n",(0,a.jsx)(t.li,{children:"Need to know data format or have a schema to deserialize data"}),"\n",(0,a.jsx)(t.li,{children:"Strict and canonical binary representation"}),"\n",(0,a.jsx)(t.li,{children:"Fast and less overhead in most cases"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"In general, JSON will be used for contract calls and cross-contract calls for a better DevX, where Borsh can be used to optimize using less gas by having smaller parameter serialization and less deserialization computation within the contract."}),"\n",(0,a.jsx)(t.h3,{id:"overriding-serialization-protocol-default",children:"Overriding Serialization Protocol Default"}),"\n",(0,a.jsx)(t.p,{children:"The result and parameter serialization can be opted into separately, but all parameters must be of the same format (can't serialize some parameters as borsh and others as JSON). An example of switching both the result and parameters to borsh is as follows:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:"#[result_serializer(borsh)]\npub fn sum_borsh(#[serializer(borsh)] a: u32, #[serializer(borsh)] b: u32) -> u32 {\n    a + b\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Where the ",(0,a.jsx)(t.code,{children:"result_serializer(borsh)"})," annotation will override the default result serialization protocol from JSON to borsh and the ",(0,a.jsx)(t.code,{children:"serializer(borsh)"})," annotations will override the parameter serialization."]}),"\n",(0,a.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(t.p,{children:["A simple demonstration of getting a ",(0,a.jsx)(t.a,{href:"https://borsh.io",children:"Borsh-serialized"}),", base64-encoded value from a unit test:"]}),"\n",(0,a.jsx)(l.Ey,{language:"rust",start:"93",end:"104",url:"https://github.com/mikedotexe/rust-status-message/blob/b83c5126fdbe0f19bc904e547fda0bb12c2ea133/src/lib.rs"}),"\n",(0,a.jsxs)(t.p,{children:["The following snippet shows a simple function that takes this value from a frontend or CLI. Note: this method doesn't have a return value, so the ",(0,a.jsx)(t.code,{children:"#[result_serializer(borsh)]"})," isn't needed."]}),"\n",(0,a.jsx)(l.Ey,{language:"rust",start:"40",end:"42",url:"https://github.com/mikedotexe/rust-status-message/blob/b83c5126fdbe0f19bc904e547fda0bb12c2ea133/src/lib.rs"}),"\n",(0,a.jsx)(t.p,{children:"Note that this is using this simple struct:"}),"\n",(0,a.jsx)(l.Ey,{language:"rust",start:"13",end:"17",url:"https://github.com/mikedotexe/rust-status-message/blob/b83c5126fdbe0f19bc904e547fda0bb12c2ea133/src/lib.rs"}),"\n",(0,a.jsx)(t.p,{children:"To call this with NEAR CLI, use a command similar to this:"}),"\n",(0,a.jsxs)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(i.Z,{value:"near-cli",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near call rust-status-message.demo.testnet set_status_borsh --base64 'DAAAAEFsb2hhIGhvbnVhIQ==' --accountId demo.testnet\n"})})}),(0,a.jsx)(i.Z,{value:"near-cli-rs",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near contract call-function as-transaction rust-status-message.demo.testnet set_status_borsh base64-args 'DAAAAEFsb2hhIGhvbnVhIQ==' prepaid-gas '30 TeraGas' attached-deposit '0 NEAR' sign-as demo.testnet network-config testnet sign-with-keychain send\n"})})})]}),"\n",(0,a.jsxs)(t.p,{children:["See more details in ",(0,a.jsx)(t.a,{href:"https://gist.github.com/mfornet/d8a94af333a68d67affd8cb78464c7c0",children:"this GitHub gist"})," from ",(0,a.jsx)(t.a,{href:"https://gist.github.com/mfornet",children:"Marcelo"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"json-wrapper-types",children:"JSON wrapper types"}),"\n",(0,a.jsxs)(t.p,{children:["To help with serializing certain types to JSON which have unexpected or inefficient default formats, there are some wrapper types in ",(0,a.jsx)(t.a,{href:"https://docs.rs/near-sdk/3.1.0/near_sdk/json_types/index.html",children:(0,a.jsx)(t.code,{children:"near_sdk::json_types"})})," that can be used."]}),"\n",(0,a.jsxs)(t.p,{children:["Because JavaScript only supports integers to value ",(0,a.jsx)(t.code,{children:"2^53 - 1"}),", you will lose precision if deserializing the JSON integer is above this range. To counteract this, you can use the ",(0,a.jsx)(t.code,{children:"I64"}),", ",(0,a.jsx)(t.code,{children:"U64"}),", ",(0,a.jsx)(t.code,{children:"I128"}),", and ",(0,a.jsx)(t.code,{children:"U128"})," in place of the native types for these parameters or result to serialize the value as a string. By default, all integer types will serialize as an integer in JSON."]}),"\n",(0,a.jsxs)(t.p,{children:["You can convert from ",(0,a.jsx)(t.code,{children:"U64"})," to ",(0,a.jsx)(t.code,{children:"u64"})," and back using ",(0,a.jsx)(t.code,{children:"std::convert::Into"}),", e.g."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:"#[near]\nimpl Contract {\n    pub fn mult(&self, a: U64, b: U64) -> U128 {\n        let a: u64 = a.into();\n        let b: u64 = b.into();\n        let product = u128::from(a) * u128::from(b);\n        product.into()\n    }\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["You can also access inner values and using ",(0,a.jsx)(t.code,{children:".0"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-diff",children:" #[near]\n impl Contract {\n     pub fn mult(&self, a: U64, b: U64) -> U128 {\n-        let a: u64 = a.into();\n+        let a = a.0;\n-        let b: u64 = b.into();\n+        let b = b.0;\n         let product = u128::from(a) * u128::from(b);\n         product.into()\n     }\n }\n"})}),"\n",(0,a.jsxs)(t.p,{children:["And you can cast the lower-case ",(0,a.jsx)(t.code,{children:"u"})," variants to upper-case ",(0,a.jsx)(t.code,{children:"U"})," variants using ",(0,a.jsx)(t.code,{children:"U64(...)"})," and ",(0,a.jsx)(t.code,{children:"U128(...)"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-diff",children:" #[near]\n impl Contract {\n     pub fn mult(&self, a: U64, b: U64) -> U128 {\n         let a = a.0;\n         let b = b.0;\n         let product = u128::from(a) * u128::from(b);\n-        product.into()\n+        U128(product)\n     }\n }\n"})}),"\n",(0,a.jsx)(t.p,{children:"Combining it all:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:"#[near]\nimpl Contract {\n    pub fn mult(&self, a: U64, b: U64) -> U128 {\n        U128(u128::from(a.0) * u128::from(b.0))\n    }\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Although there are these JSON wrapper types included with the SDK, any custom type can be used, as long as it implements ",(0,a.jsx)(t.a,{href:"https://serde.rs/",children:(0,a.jsx)(t.code,{children:"serde"})})," serialize and deserialize respectively. All of these types just override the JSON format and will have a consistent ",(0,a.jsx)(t.code,{children:"borsh"})," serialization and deserialization as the inner types."]}),"\n",(0,a.jsx)(t.h3,{id:"base64vecu8",children:"Base64VecU8"}),"\n",(0,a.jsxs)(t.p,{children:["Another example of a type you may want to override the default serialization of is ",(0,a.jsx)(t.code,{children:"Vec<u8>"})," which represents bytes in Rust. By default, this will serialize as an array of integers, which is not compact and very hard to use. There is a wrapper type ",(0,a.jsx)(t.a,{href:"https://docs.rs/near-sdk/3.1.0/near_sdk/json_types/struct.Base64VecU8.html",children:(0,a.jsx)(t.code,{children:"Base64VecU8"})})," which serializes and deserializes to a ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Base64",children:"Base-64"})," string for more compact JSON serialization."]}),"\n",(0,a.jsx)(t.p,{children:"Example here:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:"#[near(contract_state)]\n#[derive(PanicOnDefault)]\npub struct Contract {\n    // Notice, internally we store `Vec<u8>` \n    pub data: Vec<u8>,\n}\n\n#[near]\nimpl Contract {\n    #[init]\n    pub fn new(data: Base64VecU8) -> Self {\n        Self {\n            data: data.into(),\n        }\n    }\n    pub fn get_data(self) -> Base64VecU8 {\n        self.data.into()\n    }\n}\n"})})]})}function f(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var a=n(36905);const r={tabItem:"tabItem_Ymn6"};var s=n(85893);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(67294),r=n(36905),s=n(12466),i=n(16550),l=n(20469),o=n(91980),c=n(67392),u=n(20812);function d(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.lx)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,s=(0,i.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:r});return[(0,o._X)(l),(0,a.useCallback)((function(e){if(l){var t=new URLSearchParams(s.location.search);t.set(l,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[l,s])]}function m(e){var t,n,r,s,i=e.defaultValue,o=e.queryString,c=void 0!==o&&o,d=e.groupId,m=h(e),b=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:m})})),g=b[0],v=b[1],x=f({queryString:c,groupId:d}),j=x[0],y=x[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(t),r=n[0],s=n[1],[r,(0,a.useCallback)((function(e){t&&s.set(e)}),[t,s])]),S=w[0],z=w[1],N=function(){var e=null!=j?j:S;return p({value:e,tabValues:m})?e:null}();return(0,l.Z)((function(){N&&v(N)}),[N]),{selectedValue:g,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),z(e)}),[y,z,m]),tabValues:m}}var b=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(85893);function x(e){var t=e.className,n=e.block,a=e.selectedValue,i=e.selectValue,l=e.tabValues,o=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=o.indexOf(t),r=l[n].value;r!==a&&(c(t),i(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,r=o.indexOf(e.currentTarget)+1;n=null!=(a=o[r])?a:o[0];break;case"ArrowLeft":var s,i=o.indexOf(e.currentTarget)-1;n=null!=(s=o[i])?s:o[o.length-1]}null==(t=n)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:l.map((function(e){var t=e.value,n=e.label,s=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return o.push(e)},onKeyDown:d,onClick:u},s,{className:(0,r.Z)("tabs__item",g.tabItem,null==s?void 0:s.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function j(e){var t=e.lazy,n=e.children,s=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=i.find((function(e){return e.props.value===s}));return l?(0,a.cloneElement)(l,{className:(0,r.Z)("margin-top--md",l.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})}))})}function y(e){var t=m(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(x,Object.assign({},t,e)),(0,v.jsx)(j,Object.assign({},t,e))]})}function w(e){var t=(0,b.Z)();return(0,v.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(t))}},71183:(e,t,n)=>{n.d(t,{O2:()=>f,Ey:()=>b,SQ:()=>m});var a=n(67294),r=n(74866),s=n(85162),i=n(74165),l=n(15861),o=n(1841),c=n.n(o),u=n(85893);function d(){return(d=(0,l.Z)((0,i.Z)().mark((function e(t,n,a){var r,s,l,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((s=localStorage.getItem(t+"-until"))&&s>Date.now())){e.next=5;break}r=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:r=e.sent,localStorage.setItem(t,r),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return l=r.split("\n"),n=n?Number(n)-1:0,a=a?Number(a):l.length,l=l.slice(n,a),o=l.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",l.map((function(e){return e.slice(o)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var t=e.url,n=e.start,r=e.end,s=e.language,i=e.fname,l=e.metastring,o=(0,a.useState)("Loading..."),h=o[0],p=o[1];return(0,a.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],a=(t[1],new URL(n).pathname.split("/").slice(1)),r=a[0],s=a[1];return a[2],"https://raw.githubusercontent.com/"+r+"/"+s+"/"+a[3]+"/"+a.slice(4).join("/")}(t),a=function(e,t,n){return d.apply(this,arguments)}(e,n,r);a.then((function(e){return p(e)}))})),(0,u.jsxs)("div",{fname:i,children:[(0,u.jsx)(c(),{language:s,metastring:l+" showLineNumbers",children:h}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var p={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function f(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,u.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,u.jsx)(s.Z,{value:e.props.value,label:p[e.props.value],children:e})}))})}function m(e){var t=e.children,n=e.language,a=e.showSingleFName;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,a=(n.children,n.url),r=n.start,s=n.end,i=n.fname;if(e.type===b)return b({url:a,start:r,end:s,language:t,fname:i});return e}(e,n)})),1!=t.length||a?(0,u.jsx)(r.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,u.jsx)(s.Z,{value:t,label:e.props.fname,children:e})}))}):(0,u.jsx)(s.Z,{value:0,label:t[0].props.fname,children:t[0]})}function b(e){var t=e.url,n=e.start,a=e.end,r=e.language,s=e.fname,i=e.metastring;return h({url:t,start:n,end:a,language:r,fname:s,metastring:i})}}}]);