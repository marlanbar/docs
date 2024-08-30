"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6290],{74074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>h});var r=n(85893),a=n(11151),s=n(71183),c=n(74866),l=n(85162);const i={id:"quickstart",title:"Hello Contract",sidebar_label:"Quickstart \u2728"},o=void 0,u={id:"build/smart-contracts/quickstart",title:"Hello Contract",description:"Welcome! NEAR accounts can store small apps known as smart contracts. In this quick tutorial, we will guide you in creating your first contract in the NEAR testnet!",source:"@site/../docs/2.build/2.smart-contracts/quickstart.md",sourceDirName:"2.build/2.smart-contracts",slug:"/build/smart-contracts/quickstart",permalink:"/build/smart-contracts/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/2.smart-contracts/quickstart.md",tags:[],version:"current",lastUpdatedBy:"garikbesson",lastUpdatedAt:1724878821e3,frontMatter:{id:"quickstart",title:"Hello Contract",sidebar_label:"Quickstart \u2728"},sidebar:"build",previous:{title:"What is a Contract?",permalink:"/build/smart-contracts/what-is"},next:{title:"Basic Anatomy",permalink:"/build/smart-contracts/anatomy/"}},d={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating the Contract",id:"creating-the-contract",level:2},{value:"The Contract",id:"the-contract",level:2},{value:"Test the Contract",id:"test-the-contract",level:2},{value:"Create a Testnet Account",id:"create-a-testnet-account",level:2},{value:"Build the Contract",id:"build-the-contract",level:2},{value:"Deploy the Contract",id:"deploy-the-contract",level:2},{value:"Interacting with the Contract",id:"interacting-with-the-contract",level:2},{value:"Get Greeting",id:"get-greeting",level:4},{value:"Set Greeting",id:"set-greeting",level:4},{value:"Moving Forward",id:"moving-forward",level:2}];function g(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Details:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Welcome! ",(0,r.jsx)(t.a,{href:"/concepts/protocol/account-model",children:"NEAR accounts"})," can store small apps known as smart contracts. In this quick tutorial, we will guide you in creating your first contract in the NEAR ",(0,r.jsx)(t.strong,{children:"testnet"}),"!"]}),"\n",(0,r.jsx)(t.p,{children:"Join us in creating a friendly contract that stores a greeting, and exposes functions to interact with it."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(t.p,{children:"Before starting, make sure to setup your development environment."}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Working on Windows?"}),(0,r.jsxs)(t.p,{children:["See our blog post ",(0,r.jsx)(t.a,{href:"/blog/getting-started-on-windows",children:"getting started on NEAR using Windows"})," for a step-by-step guide on how to setup WSL and your environment"]})]}),"\n",(0,r.jsxs)(c.Z,{groupId:"code-tabs",children:[(0,r.jsx)(l.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# Install Node.js using nvm (more option in: https://nodejs.org/en/download)\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash\nnvm install latest\n\n# Install NEAR CLI to deploy and interact with the contract\nnpm install -g near-cli-rs@latest\n"})})}),(0,r.jsx)(l.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# Install Rust: https://www.rust-lang.org/tools/install\ncurl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n\n# Contracts will be compiled to wasm, so we need to add the wasm target\nrustup target add wasm32-unknown-unknown\n\n# Install NEAR CLI-RS to deploy and interact with the contract\ncurl --proto '=https' --tlsv1.2 -LsSf https://github.com/near/near-cli-rs/releases/latest/download/near-cli-rs-installer.sh | sh\n\n# Install cargo near to help building the contract\ncurl --proto '=https' --tlsv1.2 -LsSf https://github.com/near/cargo-near/releases/latest/download/cargo-near-installer.sh | sh\n"})})})]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["Some ",(0,r.jsx)(t.code,{children:"near-cli"})," commands have two versions - a ",(0,r.jsx)(t.strong,{children:"full"})," one and a ",(0,r.jsx)(t.strong,{children:"short"})," one. If you want to explore all options provided by ",(0,r.jsx)(t.code,{children:"near-cli"})," use ",(0,r.jsx)(t.a,{href:"/tools/near-cli#interactive-mode",children:"the interactive mode"}),"."]})}),"\n",(0,r.jsxs)(t.admonition,{title:"Testnet Account",type:"tip",children:[(0,r.jsxs)(t.p,{children:["There is no need to have a ",(0,r.jsx)(t.code,{children:"testnet"})," account to follow this tutorial."]}),(0,r.jsxs)(t.p,{children:["However, if you want to create one, you can do so through ",(0,r.jsx)(t.a,{href:"https://testnet.mynearwallet.com",children:"a wallet"}),", and use it from the ",(0,r.jsx)(t.code,{children:"near-cli"})," by invoking ",(0,r.jsx)(t.code,{children:"near login"}),"."]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"creating-the-contract",children:"Creating the Contract"}),"\n",(0,r.jsx)(t.p,{children:"Create a smart contract by using one of the scaffolding tools and following their instructions:"}),"\n",(0,r.jsxs)(c.Z,{groupId:"code-tabs",children:[(0,r.jsxs)(l.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"  npx create-near-app@latest\n"})}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"img",src:n(85553).Z+"",width:"868",height:"604"}),"\n",(0,r.jsxs)(t.em,{children:["Creating a project using ",(0,r.jsx)(t.code,{children:"create-near-app"})]})]}),(0,r.jsx)(t.p,{children:"This will generate a project with the following structure:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"\u251c\u2500\u2500 sandbox-test    # sanbox testing\n\u2502   \u2514\u2500\u2500 main.ava.js\n\u251c\u2500\u2500 src             # contract's code\n\u2502   \u2514\u2500\u2500 contract.ts\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 package.json    # package manager\n\u2514\u2500\u2500 tsconfig.json\n"})})]}),(0,r.jsxs)(l.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"  cargo near new <project_name>\n"})}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"img",src:n(71134).Z+"",width:"868",height:"604"}),"\n",(0,r.jsxs)(t.em,{children:["Creating a project using ",(0,r.jsx)(t.code,{children:"cargo near new"})]})]}),(0,r.jsx)(t.p,{children:"This will generate a project with the following structure:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"\u251c\u2500\u2500 src        # contract's code\n\u2502   \u2514\u2500\u2500 lib.rs \n\u251c\u2500\u2500 tests      # sandbox testing\n\u2502   \u2514\u2500\u2500 test_basics.rs \n\u251c\u2500\u2500 Cargo.toml # package manager\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 rust-toolchain.toml\n"})})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"the-contract",children:"The Contract"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"Hello World"})," smart contract stores a greeting on its state, and exposes two functions to interact with it:"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"set_greeting"}),": to change the greeting"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"get_greeting"}),": to fetch the greeting"]}),"\n"]}),"\n",(0,r.jsxs)(c.Z,{groupId:"code-tabs",children:[(0,r.jsx)(l.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,r.jsx)(s.Ey,{fname:"index.js",language:"js",url:"https://github.com/near-examples/hello-near-examples/blob/main/contract-ts/src/contract.ts",start:"4",end:"18"})}),(0,r.jsx)(l.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,r.jsx)(s.Ey,{fname:"lib.rs",language:"rust",url:"https://github.com/near-examples/hello-near-examples/blob/main/contract-rs/src/lib.rs",start:"4",end:"32"})})]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["After finishing this tutorial, check our ",(0,r.jsx)(t.a,{href:"/build/smart-contracts/anatomy/",children:"contract's anatomy"})," page to learn more about the contract's structure"]})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"test-the-contract",children:"Test the Contract"}),"\n",(0,r.jsxs)(t.p,{children:["Building and testing the contract is as simple as running the ",(0,r.jsx)(t.code,{children:"test"})," command. The contract will be compiled and the tests will be executed."]}),"\n",(0,r.jsxs)(c.Z,{groupId:"code-tabs",children:[(0,r.jsxs)(l.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm run test\n"})}),(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:" Failing tests? "}),(0,r.jsxs)(t.p,{children:["Make sure that you are using ",(0,r.jsx)(t.code,{children:"node v18"}),", ",(0,r.jsx)(t.code,{children:"v20"})," or ",(0,r.jsx)(t.code,{children:"v22"}),". You can always use: ",(0,r.jsx)(t.code,{children:"nvm use 18"})," to switch to ",(0,r.jsx)(t.code,{children:"node v20"})]})]})]}),(0,r.jsx)(l.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cargo test\n"})})})]}),"\n",(0,r.jsxs)(t.p,{children:["In the background, these commands are calling the build tools for each language and using a ",(0,r.jsx)(t.a,{href:"/build/smart-contracts/testing/integration-test",children:"Sandbox"})," to test the contract."]}),"\n",(0,r.jsx)(t.admonition,{title:"Sandbox",type:"tip",children:(0,r.jsx)(t.p,{children:"Testing the contracts within a Sandbox allows you to understand how the contract will behave once deployed to the network while having total control over the testing environment."})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"create-a-testnet-account",children:"Create a Testnet Account"}),"\n",(0,r.jsxs)(t.p,{children:["Now that you know the contract is passing the tests, let's create a ",(0,r.jsx)(t.code,{children:"testnet"})," account in which to deploy the contract. ",(0,r.jsx)(t.a,{href:"/tools/near-cli",children:(0,r.jsx)(t.code,{children:"near-cli"})})," supports two versions of some commands - full and short one. It's up to you which format you prefer, but full version provides more features."]}),"\n",(0,r.jsxs)(c.Z,{groupId:"cli-tabs",children:[(0,r.jsxs)(l.Z,{value:"short",label:"Short",children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# Replace <your-account-id.testnet> with a custom name\nnear create-account <your-account-id.testnet> --useFaucet\n"})}),(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:" Example Result "}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'$> near create-account lovely-event.testnet --useFaucet\n# New account "lovely-event.testnet" created successfully\n'})})]})]}),(0,r.jsxs)(l.Z,{value:"full",label:"Full",children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# Replace <your-account-id.testnet> with a custom name\nnear account create-account sponsor-by-faucet-service <your-account-id.testnet> autogenerate-new-keypair save-to-keychain network-config testnet create\n"})}),(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:" Example Result "}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'$> near account create-account sponsor-by-faucet-service lovely-event.testnet autogenerate-new-keypair save-to-keychain network-config testnet create\n\n# New account "lovely-event.testnet" created successfully\n'})})]})]})]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Remember that you can create a named account through any wallet (i.e. ",(0,r.jsx)(t.a,{href:"https://testnet.mynearwallet.com",children:"MyNearWallet"}),") and then use it from the ",(0,r.jsx)(t.code,{children:"near-cli"})," by invoking ",(0,r.jsx)(t.code,{children:"near login"}),"."]})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"build-the-contract",children:"Build the Contract"}),"\n",(0,r.jsx)(t.p,{children:"When you are ready to create a build of the contract run a one-line command depending on your environment."}),"\n",(0,r.jsxs)(c.Z,{groupId:"cli-tabs",children:[(0,r.jsx)(l.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm run build\n"})})}),(0,r.jsxs)(l.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cargo near build\n"})}),(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["You can also build the contract with ",(0,r.jsx)(t.code,{children:"cargo build --release"}),". This will compile the contract, but without metadata or the Contract Application Binary Interface (ABI)"]})})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"deploy-the-contract",children:"Deploy the Contract"}),"\n",(0,r.jsx)(t.p,{children:"Having our account created, we can now deploy the contract:"}),"\n",(0,r.jsxs)(c.Z,{groupId:"cli-tabs",children:[(0,r.jsx)(l.Z,{value:"short",label:"Short",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"near deploy <created-account> build/release/hello.wasm\n"})})}),(0,r.jsxs)(l.Z,{value:"full",label:"Full",children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"near contract deploy <created-account> use-file ./target/wasm32-unknown-unknown/release/hello.wasm without-init-call network-config testnet sign-with-keychain send\n"})}),(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["You can also build the contract with ",(0,r.jsx)(t.code,{children:"cargo build --release"}),". This will compile the contract, but without metadata or the Contract Application Binary Interface (ABI)"]})})]})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Congrats"}),"! your contract now lives in the NEAR testnet network."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"interacting-with-the-contract",children:"Interacting with the Contract"}),"\n",(0,r.jsx)(t.p,{children:"To interact with your deployed smart contract, you can call its functions through the command line."}),"\n",(0,r.jsx)("hr",{class:"subsection"}),"\n",(0,r.jsx)(t.h4,{id:"get-greeting",children:"Get Greeting"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"get_greeting"})," function only reads from the contract's state, and can thus be called for ",(0,r.jsx)(t.strong,{children:"free"}),"."]}),"\n",(0,r.jsxs)(c.Z,{groupId:"cli-tabs",children:[(0,r.jsx)(l.Z,{value:"short",label:"Short",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'> near view <created-account> get_greeting\n# "Hello"\n'})})}),(0,r.jsx)(l.Z,{value:"full",label:"Full",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'> near contract call-function as-read-only <created-account> get_greeting json-args {} network-config testnet now\n# "Hello"\n'})})})]}),"\n",(0,r.jsx)("hr",{class:"subsection"}),"\n",(0,r.jsx)(t.h4,{id:"set-greeting",children:"Set Greeting"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"set_greeting"})," method writes on the contract's ",(0,r.jsx)(t.a,{href:"/build/smart-contracts/anatomy/storage",children:"storage"}),", and thus requires a user to sign a transaction in order to be executed."]}),"\n",(0,r.jsxs)(c.Z,{groupId:"cli-tabs",children:[(0,r.jsx)(l.Z,{value:"short",label:"Short",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'> near call <created-account> set_greeting \'{"greeting": "Hola"}\' --accountId <created-account>\n# Log: Saving greeting "Hola"\n'})})}),(0,r.jsx)(l.Z,{value:"full",label:"Full",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"> near contract call-function as-transaction <created-account> set_greeting json-args '{\"greeting\": \"Hola\"}' prepaid-gas '100.0 Tgas' attached-deposit '0 NEAR' sign-as <created-account> network-config testnet sign-with-keychain send\n#Log: Saving greeting \"Hola\"\n"})})})]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Notice that we are signing the transaction using ",(0,r.jsx)(t.code,{children:"<created-account>"}),", so in this case, we are asking the contract's account to call its own function"]})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"moving-forward",children:"Moving Forward"}),"\n",(0,r.jsx)(t.p,{children:"That's it for the quickstart tutorial. You have now seen a fully functional contract with a minimal user interface and testing."}),"\n",(0,r.jsxs)(t.p,{children:["To better understand the contract's structure, check our ",(0,r.jsx)(t.a,{href:"/build/smart-contracts/anatomy/",children:"contract's anatomy"})," page."]}),"\n",(0,r.jsxs)(t.p,{children:["If you prefer to see more examples, check our ",(0,r.jsx)(t.a,{href:"/tutorials/examples/count-near",children:"examples"})," page."]}),"\n",(0,r.jsxs)(t.p,{children:["Do not hesitate to reach out on ",(0,r.jsx)(t.a,{href:"https://near.chat",children:"Discord"})," with any questions you have. We regularly host Office Hours, in which you can join our voice channel and ask questions."]}),"\n",(0,r.jsx)(t.p,{children:"Happy coding! \ud83d\ude80"}),"\n",(0,r.jsxs)(t.admonition,{title:"Versioning for this article",type:"note",children:[(0,r.jsx)(t.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["near-cli: ",(0,r.jsx)(t.code,{children:"4.0.13"})]}),"\n",(0,r.jsxs)(t.li,{children:["node: ",(0,r.jsx)(t.code,{children:"18.19.1"})]}),"\n",(0,r.jsxs)(t.li,{children:["rustc: ",(0,r.jsx)(t.code,{children:"1.77.0"})]}),"\n",(0,r.jsxs)(t.li,{children:["near-cli-rs: ",(0,r.jsx)(t.code,{children:"0.8.1"})]}),"\n",(0,r.jsxs)(t.li,{children:["cargo-near: ",(0,r.jsx)(t.code,{children:"0.6.1"})]}),"\n"]})]})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>c});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var s=n(85893);function c(e){var t=e.children,n=e.hidden,c=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,c),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(67294),a=n(36905),s=n(12466),c=n(16550),l=n(20469),i=n(91980),o=n(67392),u=n(20812);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,o.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function g(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,s=(0,c.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,i._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(s.location.search);t.set(l,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[l,s])]}function m(e){var t,n,a,s,c=e.defaultValue,i=e.queryString,o=void 0!==i&&i,d=e.groupId,m=h(e),x=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:c,tabValues:m})})),j=x[0],f=x[1],b=p({queryString:o,groupId:d}),v=b[0],w=b[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(t),a=n[0],s=n[1],[a,(0,r.useCallback)((function(e){t&&s.set(e)}),[t,s])]),k=y[0],I=y[1],N=function(){var e=null!=v?v:k;return g({value:e,tabValues:m})?e:null}();return(0,l.Z)((function(){N&&f(N)}),[N]),{selectedValue:j,selectValue:(0,r.useCallback)((function(e){if(!g({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);f(e),w(e),I(e)}),[w,I,m]),tabValues:m}}var x=n(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(85893);function b(e){var t=e.className,n=e.block,r=e.selectedValue,c=e.selectValue,l=e.tabValues,i=[],o=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=i.indexOf(t),a=l[n].value;a!==r&&(o(t),c(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=i.indexOf(e.currentTarget)+1;n=null!=(r=i[a])?r:i[0];break;case"ArrowLeft":var s,c=i.indexOf(e.currentTarget)-1;n=null!=(s=i[c])?s:i[i.length-1]}null==(t=n)||t.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:l.map((function(e){var t=e.value,n=e.label,s=e.attributes;return(0,f.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return i.push(e)},onKeyDown:d,onClick:u},s,{className:(0,a.Z)("tabs__item",j.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function v(e){var t=e.lazy,n=e.children,a=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var c=s.find((function(e){return e.props.value===a}));return c?(0,r.cloneElement)(c,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function w(e){var t=m(e);return(0,f.jsxs)("div",{className:(0,a.Z)("tabs-container",j.tabList),children:[(0,f.jsx)(b,Object.assign({},t,e)),(0,f.jsx)(v,Object.assign({},t,e))]})}function y(e){var t=(0,x.Z)();return(0,f.jsx)(w,Object.assign({},e,{children:d(e.children)}),String(t))}},71183:(e,t,n)=>{n.d(t,{O2:()=>p,Ey:()=>x,SQ:()=>m});var r=n(67294),a=n(74866),s=n(85162),c=n(74165),l=n(15861),i=n(1841),o=n.n(i),u=n(85893);function d(){return(d=(0,l.Z)((0,c.Z)().mark((function e(t,n,r){var a,s,l,i;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((s=localStorage.getItem(t+"-until"))&&s>Date.now())){e.next=5;break}a=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:a=e.sent,localStorage.setItem(t,a),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return l=a.split("\n"),n=n?Number(n)-1:0,r=r?Number(r):l.length,l=l.slice(n,r),i=l.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",l.map((function(e){return e.slice(i)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var t=e.url,n=e.start,a=e.end,s=e.language,c=e.fname,l=e.metastring,i=(0,r.useState)("Loading..."),h=i[0],g=i[1];return(0,r.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],r=(t[1],new URL(n).pathname.split("/").slice(1)),a=r[0],s=r[1];return r[2],"https://raw.githubusercontent.com/"+a+"/"+s+"/"+r[3]+"/"+r.slice(4).join("/")}(t),r=function(e,t,n){return d.apply(this,arguments)}(e,n,a);r.then((function(e){return g(e)}))})),(0,u.jsxs)("div",{fname:c,children:[(0,u.jsx)(o(),{language:s,metastring:l+" showLineNumbers",children:h}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var g={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function p(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,u.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,u.jsx)(s.Z,{value:e.props.value,label:g[e.props.value],children:e})}))})}function m(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=(n.children,n.url),a=n.start,s=n.end,c=n.fname;if(e.type===x)return x({url:r,start:a,end:s,language:t,fname:c});return e}(e,n)})),1==t.length?(0,u.jsx)(s.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,u.jsx)(a.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,u.jsx)(s.Z,{value:t,label:e.props.fname,children:e})}))})}function x(e){var t=e.url,n=e.start,r=e.end,a=e.language,s=e.fname,c=e.metastring;return h({url:t,start:n,end:r,language:a,fname:s,metastring:c})}},71134:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/hello-near-rs-133661298b01d21abdea4b47d224658f.gif"},85553:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/hello-near-ts-8f1c5c5f2390b1d4552e8c07de22e3f8.gif"}}]);