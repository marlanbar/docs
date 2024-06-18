"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4925],{74037:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var s=n(85893),r=n(11151),a=n(71183);const i={sidebar_position:2},o="Integration Tests",l={id:"sdk/rust/testing/integration-tests",title:"Integration Tests",description:"Unit Tests vs. Integration Tests",source:"@site/../docs/sdk/rust/testing/integration-tests.md",sourceDirName:"sdk/rust/testing",slug:"/sdk/rust/testing/integration-tests",permalink:"/sdk/rust/testing/integration-tests",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/testing/integration-tests.md",tags:[],version:"current",lastUpdatedBy:"Lyudmil Ivanov",lastUpdatedAt:1718635108e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tools",previous:{title:"Reproducible Builds",permalink:"/sdk/rust/building/reproducible-builds"},next:{title:"Unit Tests",permalink:"/sdk/rust/testing/unit-tests"}},c={},u=[{value:"Unit Tests vs. Integration Tests",id:"unit-tests-vs-integration-tests",level:2},{value:"When to Use Integration Tests",id:"when-to-use-integration-tests",level:2},{value:"Setup",id:"setup",level:2},{value:"Comparing an Example",id:"comparing-an-example",level:2},{value:"Unit Test",id:"unit-test",level:3},{value:"Workspaces Test",id:"workspaces-test",level:3},{value:"Helpful Snippets",id:"helpful-snippets",level:2},{value:"Create an Account",id:"create-an-account",level:3},{value:"Create Helper Functions",id:"create-helper-functions",level:3},{value:"Spooning - Pulling Existing State and Contracts from Mainnet/Testnet",id:"spooning---pulling-existing-state-and-contracts-from-mainnettestnet",level:3},{value:"Fast Forwarding - Fast Forward to a Future Block",id:"fast-forwarding---fast-forward-to-a-future-block",level:3},{value:"Handle Errors",id:"handle-errors",level:3},{value:"Batch Transactions",id:"batch-transactions",level:3},{value:"Inspecting Logs",id:"inspecting-logs",level:3},{value:"Profiling Gas",id:"profiling-gas",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"integration-tests",children:"Integration Tests"}),"\n",(0,s.jsx)(t.h2,{id:"unit-tests-vs-integration-tests",children:"Unit Tests vs. Integration Tests"}),"\n",(0,s.jsxs)(t.p,{children:["Unit tests are great for ensuring that functionality works as expected at an insolated, functional-level. This might include checking that function ",(0,s.jsx)(t.code,{children:"get_nth_fibonacci(n: u8)"})," works as expected, handles invalid input gracefully, etc. Unit tests in smart contracts might similarly test public functions, but can get unruly if there are several calls between accounts. As mentioned in the ",(0,s.jsx)(t.a,{href:"/sdk/rust/testing/unit-tests",children:"unit tests"})," section, there is a ",(0,s.jsx)(t.code,{children:"VMContext"})," object used by unit tests to mock some aspects of a transaction. One might, for instance, modify the testing context to have the ",(0,s.jsx)(t.code,{children:"predecessor_account_id"})," of ",(0,s.jsx)(t.code,{children:'"bob.near"'}),". The limits of unit tests become obvious with certain interactions, like transferring tokens. Since ",(0,s.jsx)(t.code,{children:'"bob.near"'})," is simply a string and not an account object, there is no way to write a unit test that confirms that Alice sent Bob 6 NEAR (\u24c3). Furthermore, there is no way to write a unit test that executes cross-contract calls. Additionally, there is no way of profiling gas usage and the execution of the call (or set of calls) on the blockchain."]}),"\n",(0,s.jsxs)(t.p,{children:["Integration tests provide the ability to have end-to-end testing that includes cross-contract calls, proper user accounts, access to state, structured execution outcomes, and more. In NEAR, we can make use of the ",(0,s.jsx)(t.code,{children:"workspaces"})," libraries in both ",(0,s.jsx)(t.a,{href:"https://github.com/near/workspaces-rs",children:"Rust"})," and ",(0,s.jsx)(t.a,{href:"https://github.com/near/workspaces-js",children:"JavaScript"})," for this type of testing on a locally-run blockchain or testnet."]}),"\n",(0,s.jsx)(t.h2,{id:"when-to-use-integration-tests",children:"When to Use Integration Tests"}),"\n",(0,s.jsx)(t.p,{children:"You'll probably want to use integration tests when:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"There are cross-contract calls."}),"\n",(0,s.jsx)(t.li,{children:"There are multiple users with balance changes."}),"\n",(0,s.jsx)(t.li,{children:"You'd like to gather information about gas usage and execution outcomes on-chain."}),"\n",(0,s.jsx)(t.li,{children:"You want to assert the use-case execution flow of your smart contract logic works as expected."}),"\n",(0,s.jsx)(t.li,{children:"You want to assert given execution patterns do not work (as expected)."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(t.p,{children:["Unlike unit tests (which would often live in the ",(0,s.jsx)(t.code,{children:"src/lib.rs"})," file of the contract), integration tests in Rust are located in a separate directory at the same level as ",(0,s.jsx)(t.code,{children:"/src"}),", called ",(0,s.jsx)(t.code,{children:"/tests"})," (",(0,s.jsx)(t.a,{href:"https://doc.rust-lang.org/cargo/reference/cargo-targets.html#integration-tests",children:"read more"}),"). Refer to this folder structure below:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"\u251c\u2500\u2500 Cargo.toml                  \u27f5 contains `dependencies` for contract and `dev-dependencies` for workspaces-rs tests\n\u251c\u2500\u2500 src\n\u2502  \u2514\u2500\u2500 lib.rs                   \u27f5 contract code\n\u251c\u2500\u2500 target\n\u2514\u2500\u2500 tests                       \u27f5 integration test directory\n   \u2514\u2500\u2500 integration-tests.rs     \u27f5 integration test file\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["These tests don't have to be placed in their own ",(0,s.jsx)(t.code,{children:"/tests"})," directory. Instead, you can place them in the ",(0,s.jsx)(t.code,{children:"/src"})," directory which can be beneficial since then you can use the non-exported types for serialization within the test case."]})}),"\n",(0,s.jsxs)(t.p,{children:["A sample configuration for this project's ",(0,s.jsx)(t.code,{children:"Cargo.toml"})," is shown below:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-toml",children:'[package]\nname = "fungible-token-wrapper"\nversion = "0.0.2"\nauthors = ["Near Inc <hello@nearprotocol.com>"]\nedition = "2021"\n\n[dev-dependencies]\nanyhow = "1.0"\nnear-primitives = "0.5.0"\nnear-sdk = "4.0.0"\nnear-units = "0.2.0"\nserde_json = "1.0"\ntokio = { version = "1.14", features = ["full"] }\nworkspaces = "0.4.1"\n\n# remember to include a line for each contract\nfungible-token = { path = "./ft" }\ndefi = { path = "./test-contract-defi" }\n\n[profile.release]\ncodegen-units = 1\n# Tell `rustc` to optimize for small code size.\nopt-level = "z"\nlto = true\ndebug = false\npanic = "abort"\noverflow-checks = true\n\n[workspace]\n# remember to include a member for each contract\nmembers = [\n  "ft",\n  "test-contract-defi",\n]\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"integration-tests.rs"})," file above will contain the integration tests. These can be run with the following command from the same level as the test ",(0,s.jsx)(t.code,{children:"Cargo.toml"})," file:"]}),"\n",(0,s.jsx)(t.p,{children:"cargo test --test integration-tests"}),"\n",(0,s.jsx)(t.h2,{id:"comparing-an-example",children:"Comparing an Example"}),"\n",(0,s.jsx)(t.h3,{id:"unit-test",children:"Unit Test"}),"\n",(0,s.jsx)(t.p,{children:"Let's take a look at a very simple unit test and integration test that accomplish the same thing. Normally you wouldn't duplicate efforts like this (as integration tests are intended to be broader in scope), but it will be informative."}),"\n",(0,s.jsxs)(t.p,{children:["We'll be using snippets from the ",(0,s.jsx)(t.a,{href:"https://github.com/near/near-sdk-rs/blob/master/examples/fungible-token",children:"fungible-token example"})," from the ",(0,s.jsx)(t.code,{children:"near-sdk-rs"})," repository to demonstrate simulation tests."]}),"\n",(0,s.jsxs)(t.p,{children:["First, note this unit test that tests the functionality of the ",(0,s.jsx)(t.code,{children:"test_transfer"})," method:"]}),"\n",(0,s.jsx)(a.Ey,{language:"rust",start:"100",end:"165",url:"https://github.com/near/near-sdk-rs/blob/6d4045251c63ec875dc55f43b065b33a36d94792/examples/fungible-token/ft/src/lib.rs"}),"\n",(0,s.jsxs)(t.p,{children:["The test above sets up the testing context, instantiates the test environment through ",(0,s.jsx)(t.code,{children:"get_context()"}),", calls the ",(0,s.jsx)(t.code,{children:"test_transfer"})," method, and performs the ",(0,s.jsx)(t.code,{children:"storage_deposit()"})," initialization call (to register with the fungible token contract) and the ",(0,s.jsx)(t.code,{children:"ft_transfer()"})," fungible token transfer call."]}),"\n",(0,s.jsx)(t.p,{children:"Let's look at how this might be written with workspaces tests. The snippet below is a bit longer as it demonstrates a couple of things worth noting."}),"\n",(0,s.jsx)(t.h3,{id:"workspaces-test",children:"Workspaces Test"}),"\n",(0,s.jsx)(a.Ey,{language:"rust",start:"25",end:"115",url:"https://github.com/near/near-sdk-rs/blob/master/examples/fungible-token/tests/workspaces.rs"}),"\n",(0,s.jsxs)(t.p,{children:["In the test above, the compiled smart contract ",(0,s.jsx)(t.code,{children:".wasm"})," file (which we compiled into the ",(0,s.jsx)(t.code,{children:"/out"})," directory) for the Fungible Token example is dev-deployed (newly created account) to the environment. The ",(0,s.jsx)(t.code,{children:"ft_contract"})," account is created as a result from the environment which is used to create accounts. This specific file's format has only one test entry point (",(0,s.jsx)(t.code,{children:"main"}),"), and every test is declared with ",(0,s.jsx)(t.code,{children:"#[tokio::test]"}),". Tests do not share state between runs."]}),"\n",(0,s.jsxs)(t.p,{children:["Notice the layout within ",(0,s.jsx)(t.code,{children:"test_total_supply"}),". ",(0,s.jsx)(t.code,{children:".call()"})," obtains its required gas from the account performing it. Unlike the unit test, there is no mocking being performed before the call as the context is provided by the environment initialized during ",(0,s.jsx)(t.code,{children:"init()"}),". Every call interacts with this environment to either fetch or change state."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Pitfall"}),": you must compile your contract before running integration tests. Because workspaces tests use the ",(0,s.jsx)(t.code,{children:".wasm"})," files to deploy the contracts to the network. If changes are made to the smart contract code, the smart contract wasm should be rebuilt before running these tests again."]})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["In case you wish to preserve state between runs, you can call multiple tests within one function, passing the worker around from a ",(0,s.jsx)(t.code,{children:"workspaces::sandbox()"})," call."]})}),"\n",(0,s.jsx)(t.h2,{id:"helpful-snippets",children:"Helpful Snippets"}),"\n",(0,s.jsx)(t.h3,{id:"create-an-account",children:"Create an Account"}),"\n",(0,s.jsx)(a.Ey,{language:"rust",start:"13",end:"20",url:"https://github.com/near-examples/auction-examples/blob/main/contract-rs/tests/test_basics.rs"}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsxs)(t.p,{children:["You can also create a ",(0,s.jsx)(t.code,{children:"dev_account"})," without having to deploy a contract as follows:"]}),(0,s.jsx)(a.Ey,{language:"rust",start:"7",end:"8",url:"https://github.com/near/workspaces-rs/blob/8f12f3dc3b0251ac3f44ddf6ab6fc63003579139/workspaces/tests/create_account.rs"})]}),"\n",(0,s.jsx)(t.h3,{id:"create-helper-functions",children:"Create Helper Functions"}),"\n",(0,s.jsx)(a.Ey,{language:"rust",start:"148",end:"161",url:"https://github.com/near-examples/nft-tutorial/blob/7fb267b83899d1f65f1bceb71804430fab62c7a7/integration-tests/rs/src/helpers.rs"}),"\n",(0,s.jsx)(t.h3,{id:"spooning---pulling-existing-state-and-contracts-from-mainnettestnet",children:"Spooning - Pulling Existing State and Contracts from Mainnet/Testnet"}),"\n",(0,s.jsx)(t.p,{children:"This example showcases spooning state from a testnet contract into our local sandbox environment:"}),"\n",(0,s.jsx)(a.Ey,{language:"rust",start:"64",end:"122",url:"https://github.com/near/workspaces-rs/blob/c14fe2aa6cdf586028b2993c6a28240f78484d3e/examples/src/spooning.rs"}),"\n",(0,s.jsxs)(t.p,{children:["For a full example, see the ",(0,s.jsx)(t.a,{href:"https://github.com/near/workspaces-rs/blob/main/examples/src/spooning.rs",children:"examples/src/spooning.rs"})," example."]}),"\n",(0,s.jsx)(t.h3,{id:"fast-forwarding---fast-forward-to-a-future-block",children:"Fast Forwarding - Fast Forward to a Future Block"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"workspaces"})," testing offers support for forwarding the state of the blockchain to the future. This means contracts which require time sensitive data do not need to sit and wait the same amount of time for blocks on the sandbox to be produced. We can simply just call ",(0,s.jsx)(t.code,{children:"worker.fast_forward"})," to get us further in time:"]}),"\n",(0,s.jsx)(a.Ey,{language:"rust",start:"12",end:"44",url:"https://github.com/near/workspaces-rs/blob/c14fe2aa6cdf586028b2993c6a28240f78484d3e/examples/src/fast_forward.rs"}),"\n",(0,s.jsxs)(t.p,{children:["For a full example, take a look at ",(0,s.jsx)(t.a,{href:"https://github.com/near/workspaces-rs/blob/main/examples/src/fast_forward.rs",children:"examples/src/fast_forward.rs"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"handle-errors",children:"Handle Errors"}),"\n",(0,s.jsx)(a.Ey,{language:"rust",start:"199",end:"225",url:"https://github.com/near-examples/FT/blob/98b85297a270cbcb8ef3901c29c17701e1cab698/integration-tests/rs/src/tests.rs"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Returning ",(0,s.jsx)(t.code,{children:"Err(msg)"})," is also a viable (and arguably simpler) implementation."]})}),"\n",(0,s.jsx)(t.h3,{id:"batch-transactions",children:"Batch Transactions"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",metastring:'title="Batch Transaction - workspace-rs"',children:'let res = contract\n    .batch(&worker)\n    .call(\n        Function::new("ft_transfer_call")\n            .args_json((defi_contract.id(), transfer_amount, Option::<String>::None, "10"))?\n            .gas(300_000_000_000_000 / 2)\n            .deposit(1),\n    )\n    .call(\n        Function::new("storage_unregister")\n            .args_json((Some(true),))?\n            .gas(300_000_000_000_000 / 2)\n            .deposit(1),\n    )\n    .transact()\n    .await?;\n'})}),"\n",(0,s.jsx)(t.h3,{id:"inspecting-logs",children:"Inspecting Logs"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",metastring:'title="Logs - workspaces-rs"',children:'assert_eq!(\n    res.logs()[1],\n    format!("Closed @{} with {}", contract.id(), initial_balance.0 - transfer_amount.0)\n);\n'})}),"\n",(0,s.jsx)(t.p,{children:"Examining receipt outcomes:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",metastring:'title="Logs - workspaces-rs"',children:'let outcome = &res.receipt_outcomes()[5];\nassert_eq!(outcome.logs[0], "The account of the sender was deleted");\nassert_eq!(outcome.logs[2], format!("Account @{} burned {}", contract.id(), 10));\n'})}),"\n",(0,s.jsx)(t.h3,{id:"profiling-gas",children:"Profiling Gas"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"CallExecutionDetails::total_gas_burnt"})," includes all gas burnt by call execution, including by receipts. This is exposed as a surface level API since it is a much more commonly used concept:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",metastring:'title="Gas (all) - workspaces-rs"',children:'println!("Burnt gas (all): {}", res.total_gas_burnt);\n'})}),"\n",(0,s.jsx)(t.p,{children:"If you do actually want gas burnt by transaction itself you can do it like this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",metastring:'title="Gas (transaction) - workspaces-rs"',children:'println!("Burnt gas (transaction): {}", res.outcome().gas_burnt);\n'})}),"\n",(0,s.jsx)(t.p,{children:"If you want to see the gas burnt by each receipt, you can do it like this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",metastring:'title="Gas (receipt) - workspaces-rs"',children:'for receipt in res.receipt_outcomes() {\n   println!("Burnt gas (receipt): {}", receipt.gas_burnt);\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var s=n(36905);const r={tabItem:"tabItem_Ymn6"};var a=n(85893);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>k});var s=n(67294),r=n(36905),a=n(12466),i=n(16550),o=n(20469),l=n(91980),c=n(67392),u=n(50012);function d(e){var t,n;return null!=(t=null==(n=s.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,s.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,s.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,a=(0,i.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,s=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:n,groupId:r});return[(0,l._X)(o),(0,s.useCallback)((function(e){if(o){var t=new URLSearchParams(a.location.search);t.set(o,e),a.replace(Object.assign({},a.location,{search:t.toString()}))}}),[o,a])]}function f(e){var t,n,r,a,i=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,f=h(e),m=(0,s.useState)((function(){return function(e){var t,n=e.defaultValue,s=e.tabValues;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+s.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=s.find((function(e){return e.default})))?t:s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:f})})),b=m[0],x=m[1],v=g({queryString:c,groupId:d}),j=v[0],w=v[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(t),r=n[0],a=n[1],[r,(0,s.useCallback)((function(e){t&&a.set(e)}),[t,a])]),y=k[0],_=k[1],T=function(){var e=null!=j?j:y;return p({value:e,tabValues:f})?e:null}();return(0,o.Z)((function(){T&&x(T)}),[T]),{selectedValue:b,selectValue:(0,s.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);x(e),w(e),_(e)}),[w,_,f]),tabValues:f}}var m=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(85893);function v(e){var t=e.className,n=e.block,s=e.selectedValue,i=e.selectValue,o=e.tabValues,l=[],c=(0,a.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=l.indexOf(t),r=o[n].value;r!==s&&(c(t),i(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var s,r=l.indexOf(e.currentTarget)+1;n=null!=(s=l[r])?s:l[0];break;case"ArrowLeft":var a,i=l.indexOf(e.currentTarget)-1;n=null!=(a=l[i])?a:l[l.length-1]}null==(t=n)||t.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:o.map((function(e){var t=e.value,n=e.label,a=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},a,{className:(0,r.Z)("tabs__item",b.tabItem,null==a?void 0:a.className,{"tabs__item--active":s===t}),children:null!=n?n:t}),t)}))})}function j(e){var t=e.lazy,n=e.children,r=e.selectedValue,a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=a.find((function(e){return e.props.value===r}));return i?(0,s.cloneElement)(i,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map((function(e,t){return(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function w(e){var t=f(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(v,Object.assign({},t,e)),(0,x.jsx)(j,Object.assign({},t,e))]})}function k(e){var t=(0,m.Z)();return(0,x.jsx)(w,Object.assign({},e,{children:d(e.children)}),String(t))}},71183:(e,t,n)=>{n.d(t,{O2:()=>g,Ey:()=>m,SQ:()=>f});var s=n(67294),r=n(74866),a=n(85162),i=n(74165),o=n(15861),l=n(1841),c=n.n(l),u=n(85893);function d(){return(d=(0,o.Z)((0,i.Z)().mark((function e(t,n,s){var r,a,o,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((a=localStorage.getItem(t+"-until"))&&a>Date.now())){e.next=5;break}r=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:r=e.sent,localStorage.setItem(t,r),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return o=r.split("\n"),n=n?Number(n)-1:0,s=s?Number(s):o.length,o=o.slice(n,s),l=o.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",o.map((function(e){return e.slice(l)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var t=e.url,n=e.start,r=e.end,a=e.language,i=e.fname,o=e.metastring,l=(0,s.useState)("Loading..."),h=l[0],p=l[1];return(0,s.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],s=(t[1],new URL(n).pathname.split("/").slice(1)),r=s[0],a=s[1];return s[2],"https://raw.githubusercontent.com/"+r+"/"+a+"/"+s[3]+"/"+s.slice(4).join("/")}(t),s=function(e,t,n){return d.apply(this,arguments)}(e,n,r);s.then((function(e){return p(e)}))})),(0,u.jsxs)("div",{fname:i,children:[(0,u.jsx)(c(),{language:a,metastring:o+" showLineNumbers",children:h}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var p={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function g(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,u.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,u.jsx)(a.Z,{value:e.props.value,label:p[e.props.value],children:e})}))})}function f(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,s=(n.children,n.url),r=n.start,a=n.end,i=n.fname;if(e.type===m)return m({url:s,start:r,end:a,language:t,fname:i});return e}(e,n)})),1==t.length?(0,u.jsx)(a.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,u.jsx)(r.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,u.jsx)(a.Z,{value:t,label:e.props.fname,children:e})}))})}function m(e){var t=e.url,n=e.start,s=e.end,r=e.language,a=e.fname,i=e.metastring;return h({url:t,start:n,end:s,language:r,fname:a,metastring:i})}}}]);