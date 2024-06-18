"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7673],{70750:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var t=n(85893),a=n(11151),s=n(71183);const i={id:"contract-size",title:"Reducing Contract Size"},o="Reducing a contract's size",l={id:"sdk/rust/contract-size",title:"Reducing Contract Size",description:"Advice & examples",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sdk/rust/reduce-size.md",sourceDirName:"sdk/rust",slug:"/sdk/rust/contract-size",permalink:"/zh-CN/sdk/rust/contract-size",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/reduce-size.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1718378911e3,frontMatter:{id:"contract-size",title:"Reducing Contract Size"},sidebar:"tools",previous:{title:"Best Practices",permalink:"/zh-CN/sdk/rust/best-practices"},next:{title:"About JS SDK",permalink:"/zh-CN/sdk/js/introduction"}},c={},u=[{value:"Advice &amp; examples",id:"advice--examples",level:2},{value:"Small wins",id:"small-wins",level:2},{value:"Using flags",id:"using-flags",level:3},{value:"Removing <code>rlib</code> from the manifest",id:"removing-rlib-from-the-manifest",level:3},{value:"Lower-level approach",id:"lower-level-approach",level:2}];function d(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components},{Details:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"reducing-a-contracts-size",children:"Reducing a contract's size"}),"\n",(0,t.jsx)(r.h2,{id:"advice--examples",children:"Advice & examples"}),"\n",(0,t.jsx)(r.p,{children:"This page is made for developers familiar with lower-level concepts who wish to reduce their contract size significantly, perhaps at the expense of code readability."}),"\n",(0,t.jsx)(r.p,{children:"Some common scenarios where this approach may be helpful:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"contracts intended to be tied to one's account management"}),"\n",(0,t.jsx)(r.li,{children:"contracts deployed using a factory"}),"\n",(0,t.jsx)(r.li,{children:"future advancements similar to the EVM on NEAR"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"There have been a few items that may add unwanted bytes to a contract's size when compiled. Some of these may be more easily swapped for other approaches while others require more internal knowledge about system calls. Some of these may be more easily swapped for other approaches while others require more internal knowledge about system calls."}),"\n",(0,t.jsx)(r.h2,{id:"small-wins",children:"Small wins"}),"\n",(0,t.jsx)(r.h3,{id:"using-flags",children:"Using flags"}),"\n",(0,t.jsxs)(r.p,{children:["When compiling a contract make sure to pass flag ",(0,t.jsx)(r.code,{children:"-C link-arg=-s"})," to the rust compiler:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"RUSTFLAGS='-C link-arg=-s' cargo build --target wasm32-unknown-unknown --release\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Here is the parameters we use for the most examples in ",(0,t.jsx)(r.code,{children:"Cargo.toml"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-toml",children:'[profile.release]\ncodegen-units = 1\nopt-level = "s"\nlto = true\ndebug = false\npanic = "abort"\noverflow-checks = true\n'})}),"\n",(0,t.jsxs)(r.p,{children:["You may want to experiment with using ",(0,t.jsx)(r.code,{children:'opt-level = "z"'})," instead of ",(0,t.jsx)(r.code,{children:'opt-level = "s"'})," to see if generates a smaller binary. See more details on this in ",(0,t.jsx)(r.a,{href:"https://doc.rust-lang.org/cargo/reference/profiles.html#opt-level",children:"The Cargo Book Profiles section"}),". You may also reference this ",(0,t.jsx)(r.a,{href:"https://rustwasm.github.io/book/reference/code-size.html#tell-llvm-to-optimize-for-size-instead-of-speed",children:"Shrinking .wasm Size"})," resource. See more details on this in ",(0,t.jsx)(r.a,{href:"https://doc.rust-lang.org/cargo/reference/profiles.html#opt-level",children:"The Cargo Book Profiles section"}),". You may also reference this ",(0,t.jsx)(r.a,{href:"https://rustwasm.github.io/book/reference/code-size.html#tell-llvm-to-optimize-for-size-instead-of-speed",children:"Shrinking .wasm Size"})," resource."]}),"\n",(0,t.jsxs)(r.h3,{id:"removing-rlib-from-the-manifest",children:["Removing ",(0,t.jsx)(r.code,{children:"rlib"})," from the manifest"]}),"\n",(0,t.jsxs)(r.p,{children:["Ensure that your manifest (",(0,t.jsx)(r.code,{children:"Cargo.toml"}),") doesn't contain ",(0,t.jsx)(r.code,{children:"rlib"})," unless it needs to. Some NEAR examples have included this: Some NEAR examples have included this:"]}),"\n",(0,t.jsx)(r.admonition,{title:"Adds unnecessary bloat",type:"caution",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-toml",children:'[lib]\ncrate-type = ["cdylib", "rlib"]\n'})})}),"\n",(0,t.jsx)(r.p,{children:"when it could be:"}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-toml",children:'[lib]\ncrate-type = ["cdylib"]\n'})})}),"\n",(0,t.jsxs)(r.ol,{start:"3",children:["\n",(0,t.jsxs)(r.li,{children:["When using the Rust SDK, you may override the default JSON serialization to use ",(0,t.jsx)(r.a,{href:"https://borsh.io",children:"Borsh"})," instead. ",(0,t.jsx)(r.a,{href:"/zh-CN/sdk/rust/contract-interface/serialization-interface#overriding-serialization-protocol-default",children:"See this page"})," for more information and an example. ",(0,t.jsx)(r.a,{href:"/zh-CN/sdk/rust/contract-interface/serialization-interface#overriding-serialization-protocol-default",children:"See this page"})," for more information and an example."]}),"\n",(0,t.jsxs)(r.li,{children:["When using assertions or guards, avoid using the standard ",(0,t.jsx)(r.code,{children:"assert"})," macros like ",(0,t.jsx)(r.a,{href:"https://doc.rust-lang.org/std/macro.assert.html",children:(0,t.jsx)(r.code,{children:"assert!"})}),", ",(0,t.jsx)(r.a,{href:"https://doc.rust-lang.org/std/macro.assert_eq.html",children:(0,t.jsx)(r.code,{children:"assert_eq!"})}),", or ",(0,t.jsx)(r.a,{href:"https://doc.rust-lang.org/std/macro.assert_ne.html",children:(0,t.jsx)(r.code,{children:"assert_ne!"})})," as these may add bloat for information regarding the line number of the error. There are similar issues with ",(0,t.jsx)(r.code,{children:"unwrap"}),", ",(0,t.jsx)(r.code,{children:"expect"}),", and Rust's ",(0,t.jsx)(r.code,{children:"panic!()"})," macro. There are similar issues with ",(0,t.jsx)(r.code,{children:"unwrap"}),", ",(0,t.jsx)(r.code,{children:"expect"}),", and Rust's ",(0,t.jsx)(r.code,{children:"panic!()"})," macro."]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Example of a standard assertion:"}),"\n",(0,t.jsx)(r.admonition,{title:"Adds unnecessary bloat",type:"caution",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-rust",children:'assert_eq!(contract_owner, predecessor_account, "ERR_NOT_OWNER");\n'})})}),"\n",(0,t.jsx)(r.p,{children:"when it could be:"}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-rust",children:'if contract_owner != predecessor_account {\n  env::panic(b"ERR_NOT_OWNER");\n}\n'})})}),"\n",(0,t.jsxs)(r.p,{children:["Example of removing ",(0,t.jsx)(r.code,{children:"expect"}),":"]}),"\n",(0,t.jsx)(r.admonition,{title:"Adds unnecessary bloat",type:"caution",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-rust",children:'let owner_id = self.owner_by_id.get(&token_id).expect("Token not found");\n'})})}),"\n",(0,t.jsx)(r.p,{children:"when it could be:"}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-rust",children:'fn expect_token_found<T>(option: Option<T>) -> T {\n  option.unwrap_or_else(|| env::panic_str("Token not found"))\n}\nlet owner_id = expect_token_found(self.owner_by_id.get(&token_id));  \n'})})}),"\n",(0,t.jsxs)(r.p,{children:["Example of changing standard ",(0,t.jsx)(r.code,{children:"panic!()"}),":"]}),"\n",(0,t.jsx)(r.admonition,{title:"Adds unnecessary bloat",type:"caution",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-rust",children:'panic!("ERR_MSG_HERE"); \n'})})}),"\n",(0,t.jsx)(r.p,{children:"when it could be:"}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-rust",children:'env::panic_str("ERR_MSG_HERE");  \n'})})}),"\n",(0,t.jsx)(r.h2,{id:"lower-level-approach",children:"Lower-level approach"}),"\n",(0,t.jsxs)(r.p,{children:["For a ",(0,t.jsx)(r.code,{children:"no_std"})," approach to minimal contracts, observe the following examples:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://github.com/near/nearcore/tree/1e7c6613f65c23f87adf2c92e3d877f4ffe666ea/runtime/near-test-contracts/tiny-contract-rs",children:"Tiny contract"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://github.com/ilblackdragon/near-eth-gateway/blob/master/proxy/src/lib.rs",children:"NEAR ETH Gateway"})}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://youtu.be/Hy4VBSCqnsE",children:"This YouTube video"})," where Eugene demonstrates a fungible token in ",(0,t.jsx)(r.code,{children:"no_std"})," mode. The code for this ",(0,t.jsx)(r.a,{href:"https://github.com/near/core-contracts/pull/88",children:"example lives here"}),". The code for this ",(0,t.jsx)(r.a,{href:"https://github.com/near/core-contracts/pull/88",children:"example lives here"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsxs)(r.a,{href:"https://github.com/austinabell/nesdie/tree/main/examples",children:["Examples using a project called ",(0,t.jsx)(r.code,{children:"nesdie"})]}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["Note that Aurora has found success using ",(0,t.jsx)(r.a,{href:"https://crates.io/crates/rjson",children:"rjson"})," as a lightweight JSON serialization crate. It has a smaller footprint than ",(0,t.jsx)(r.a,{href:"https://crates.io/crates/serde",children:"serde"})," which is currently packaged with the Rust SDK. See ",(0,t.jsx)(r.a,{href:"https://github.com/aurora-is-near/aurora-engine/blob/65a1d11fcd16192cc1bda886c62005c603189a24/src/json.rs#L254",children:"this example of rjson"})," in an Aurora repository, although implementation details will have to be gleaned by the reader and won't be expanded upon here. Note that Aurora has found success using ",(0,t.jsx)(r.a,{href:"https://crates.io/crates/rjson",children:"rjson"})," as a lightweight JSON serialization crate. It has a smaller footprint than ",(0,t.jsx)(r.a,{href:"https://crates.io/crates/serde",children:"serde"})," which is currently packaged with the Rust SDK. See ",(0,t.jsx)(r.a,{href:"https://github.com/aurora-is-near/aurora-engine/blob/65a1d11fcd16192cc1bda886c62005c603189a24/src/json.rs#L254",children:"this example of rjson"})," in an Aurora repository, although implementation details will have to be gleaned by the reader and won't be expanded upon here. ",(0,t.jsx)(r.a,{href:"https://github.com/austinabell/nesdie/blob/bb6beb77e32cd54077ac54bf028f262a9dfb6ad0/examples/multisig/src/utils/json/vector.rs#L26-L30",children:"This nesdie example"})," also uses the ",(0,t.jsx)(r.a,{href:"https://crates.io/crates/miniserde",children:"miniserde crate"}),", which is another option to consider for folks who choose to avoid using the Rust SDK."]}),"\n"]}),"\n",(0,t.jsx)(r.admonition,{title:"Information on system calls",type:"note",children:(0,t.jsxs)(n,{children:[(0,t.jsxs)("summary",{children:["Expand to see what's available from ",(0,t.jsx)("code",{children:"sys.rs"})]}),(0,t.jsx)(s.Ey,{language:"rust",start:"",end:"",url:"https://github.com/near/near-sdk-rs/blob/master/near-sdk/src/environment/sys.rs"})]})})]})}function h(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},85162:(e,r,n)=>{n.d(r,{Z:()=>i});n(67294);var t=n(36905);const a={tabItem:"tabItem_Ymn6"};var s=n(85893);function i(e){var r=e.children,n=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,i),hidden:n,children:r})}},74866:(e,r,n)=>{n.d(r,{Z:()=>y});var t=n(67294),a=n(36905),s=n(12466),i=n(16550),o=n(20469),l=n(91980),c=n(67392),u=n(50012);function d(e){var r,n;return null!=(r=null==(n=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((r=e.props)&&"object"==typeof r&&"value"in r))return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?r:[]}function h(e){var r=e.values,n=e.children;return(0,t.useMemo)((function(){var e=null!=r?r:function(e){return d(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}(n);return function(e){var r=(0,c.l)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,n])}function p(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function m(e){var r=e.queryString,n=void 0!==r&&r,a=e.groupId,s=(0,i.k6)(),o=function(e){var r=e.queryString,n=void 0!==r&&r,t=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:a});return[(0,l._X)(o),(0,t.useCallback)((function(e){if(o){var r=new URLSearchParams(s.location.search);r.set(o,e),s.replace(Object.assign({},s.location,{search:r.toString()}))}}),[o,s])]}function f(e){var r,n,a,s,i=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,f=h(e),g=(0,t.useState)((function(){return function(e){var r,n=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(r=t.find((function(e){return e.default})))?r:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:f})})),x=g[0],b=g[1],j=m({queryString:c,groupId:d}),v=j[0],w=j[1],y=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(r),a=n[0],s=n[1],[a,(0,t.useCallback)((function(e){r&&s.set(e)}),[r,s])]),k=y[0],S=y[1],N=function(){var e=null!=v?v:k;return p({value:e,tabValues:f})?e:null}();return(0,o.Z)((function(){N&&b(N)}),[N]),{selectedValue:x,selectValue:(0,t.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);b(e),w(e),S(e)}),[w,S,f]),tabValues:f}}var g=n(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(85893);function j(e){var r=e.className,n=e.block,t=e.selectedValue,i=e.selectValue,o=e.tabValues,l=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var r=e.currentTarget,n=l.indexOf(r),a=o[n].value;a!==t&&(c(r),i(a))},d=function(e){var r,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var t,a=l.indexOf(e.currentTarget)+1;n=null!=(t=l[a])?t:l[0];break;case"ArrowLeft":var s,i=l.indexOf(e.currentTarget)-1;n=null!=(s=l[i])?s:l[l.length-1]}null==(r=n)||r.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},r),children:o.map((function(e){var r=e.value,n=e.label,s=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},s,{className:(0,a.Z)("tabs__item",x.tabItem,null==s?void 0:s.className,{"tabs__item--active":t===r}),children:null!=n?n:r}),r)}))})}function v(e){var r=e.lazy,n=e.children,a=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){var i=s.find((function(e){return e.props.value===a}));return i?(0,t.cloneElement)(i,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map((function(e,r){return(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==a})}))})}function w(e){var r=f(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,b.jsx)(j,Object.assign({},r,e)),(0,b.jsx)(v,Object.assign({},r,e))]})}function y(e){var r=(0,g.Z)();return(0,b.jsx)(w,Object.assign({},e,{children:d(e.children)}),String(r))}},71183:(e,r,n)=>{n.d(r,{O2:()=>m,Ey:()=>g,SQ:()=>f});var t=n(67294),a=n(74866),s=n(85162),i=n(74165),o=n(15861),l=n(1841),c=n.n(l),u=n(85893);function d(){return(d=(0,o.Z)((0,i.Z)().mark((function e(r,n,t){var a,s,o,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((s=localStorage.getItem(r+"-until"))&&s>Date.now())){e.next=5;break}a=localStorage.getItem(r),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(r);case 8:return e.next=10,e.sent.text();case 10:a=e.sent,localStorage.setItem(r,a),localStorage.setItem(r+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return o=a.split("\n"),n=n?Number(n)-1:0,t=t?Number(t):o.length,o=o.slice(n,t),l=o.reduce((function(e,r){if(0===r.length)return e;var n=r.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",o.map((function(e){return e.slice(l)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var r=e.url,n=e.start,a=e.end,s=e.language,i=e.fname,o=e.metastring,l=(0,t.useState)("Loading..."),h=l[0],p=l[1];return(0,t.useEffect)((function(){var e=function(e){var r=e.slice(e.indexOf("https")).split("#"),n=r[0],t=(r[1],new URL(n).pathname.split("/").slice(1)),a=t[0],s=t[1];return t[2],"https://raw.githubusercontent.com/"+a+"/"+s+"/"+t[3]+"/"+t.slice(4).join("/")}(r),t=function(e,r,n){return d.apply(this,arguments)}(e,n,a);t.then((function(e){return p(e)}))})),(0,u.jsxs)("div",{fname:i,children:[(0,u.jsx)(c(),{language:s,metastring:o+" showLineNumbers",children:h}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:r,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var p={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function m(e){var r=e.children;return Array.isArray(r)||(r=[r]),(0,u.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:r.map((function(e,r){return(0,u.jsx)(s.Z,{value:e.props.value,label:p[e.props.value],children:e})}))})}function f(e){var r=e.children,n=e.language;return Array.isArray(r)||(r=[r]),r=r.map((function(e){return function(e,r){var n=e.props,t=(n.children,n.url),a=n.start,s=n.end,i=n.fname;if(e.type===g)return g({url:t,start:a,end:s,language:r,fname:i});return e}(e,n)})),1==r.length?(0,u.jsx)(s.Z,{value:0,label:r[0].props.fname,children:r[0]}):(0,u.jsx)(a.Z,{className:"file-tabs",children:r.map((function(e,r){return(0,u.jsx)(s.Z,{value:r,label:e.props.fname,children:e})}))})}function g(e){var r=e.url,n=e.start,t=e.end,a=e.language,s=e.fname,i=e.metastring;return h({url:r,start:n,end:t,language:a,fname:s,metastring:i})}}}]);