"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[993],{78702:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var a=t(85893),r=t(11151),s=t(71183),o=t(74866),i=t(85162);const l={id:"donation",title:"Donation"},c=void 0,d={id:"tutorials/examples/donation",title:"Donation",description:"Our donation example enables to forward NEAR Tokens to an account while keeping track of it. It is one of the simplest examples on making a contract handle tranfers.",source:"@site/../docs/3.tutorials/examples/donation.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/donation",permalink:"/tutorials/examples/donation",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/donation.md",tags:[],version:"current",lastUpdatedBy:"garikbesson",lastUpdatedAt:1724878821e3,frontMatter:{id:"donation",title:"Donation"},sidebar:"tutorials",previous:{title:"Guest Book",permalink:"/tutorials/examples/guest-book"},next:{title:"Cross Contract Call",permalink:"/tutorials/examples/xcc"}},u={},h=[{value:"Obtaining the Donation Example",id:"obtaining-the-donation-example",level:2},{value:"Structure of the Example",id:"structure-of-the-example",level:2},{value:"Frontend",id:"frontend",level:2},{value:"Running the Frontend",id:"running-the-frontend",level:3},{value:"Understanding the Frontend",id:"understanding-the-frontend",level:3},{value:"Smart Contract",id:"smart-contract",level:2},{value:"Testing the Contract",id:"testing-the-contract",level:3},{value:"Deploying the Contract to the NEAR network",id:"deploying-the-contract-to-the-near-network",level:3},{value:"CLI: Interacting with the Contract",id:"cli-interacting-with-the-contract",level:3},{value:"Get donations",id:"get-donations",level:4},{value:"Get beneficiary",id:"get-beneficiary",level:4},{value:"Get number of donors",id:"get-number-of-donors",level:4},{value:"Get donation for an account",id:"get-donation-for-an-account",level:4},{value:"Donate to the contract",id:"donate-to-the-contract",level:4},{value:"Moving Forward",id:"moving-forward",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Our donation example enables to forward NEAR Tokens to an account while keeping track of it. It is one of the simplest examples on making a contract handle tranfers."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.img,{alt:"img",src:t(80359).Z+"",width:"1139",height:"479"}),"\n",(0,a.jsx)(n.em,{children:"Frontend of the Donation App"})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"obtaining-the-donation-example",children:"Obtaining the Donation Example"}),"\n",(0,a.jsx)(n.p,{children:"You have two options to start the Donation Example."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["You can use the app through ",(0,a.jsx)(n.code,{children:"Github Codespaces"}),", which will open a web-based interactive environment."]}),"\n",(0,a.jsx)(n.li,{children:"Clone the repository locally and use it from your computer."}),"\n"]}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Codespaces"}),(0,a.jsx)(n.th,{children:"Clone locally"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"https://codespaces.new/near-examples/donation-examples",children:(0,a.jsx)(n.img,{src:"https://github.com/codespaces/badge.svg",alt:"Open in GitHub Codespaces"})})}),(0,a.jsxs)(n.td,{children:["\ud83c\udf10 ",(0,a.jsx)(n.code,{children:"https://github.com/near-examples/donation-examples.git"})]})]})})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"structure-of-the-example",children:"Structure of the Example"}),"\n",(0,a.jsx)(n.p,{children:"The example is divided in two main components:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"The smart contract, available in two flavors: rust and javascript"}),"\n",(0,a.jsx)(n.li,{children:"The frontend, that interacts with an already deployed contract."}),"\n"]}),"\n",(0,a.jsxs)(o.Z,{groupId:"code-tabs",children:[(0,a.jsx)(i.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\u250c\u2500\u2500 sandbox-ts # sandbox testing\n\u2502    \u251c\u2500\u2500 src\n\u2502    \u2502    \u2514\u2500\u2500 main.ava.ts\n\u2502    \u251c\u2500\u2500 ava.config.cjs\n\u2502    \u2514\u2500\u2500 package.json\n\u251c\u2500\u2500 src # contract's code\n\u2502    \u251c\u2500\u2500 contract.ts\n\u2502    \u251c\u2500\u2500 model.ts\n\u2502    \u2514\u2500\u2500 utils.ts\n\u251c\u2500\u2500 package.json # package manager\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 tsconfig.json # test script\n"})})}),(0,a.jsx)(i.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\u250c\u2500\u2500 tests # workspaces testing\n\u2502    \u251c\u2500\u2500 workspaces.rs\n\u251c\u2500\u2500 src # contract's code\n\u2502    \u251c\u2500\u2500 donation.rs\n\u2502    \u2514\u2500\u2500 lib.rs\n\u251c\u2500\u2500 Cargo.toml # package manager\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 rust-toolchain.toml\n"})})})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"frontend",children:"Frontend"}),"\n",(0,a.jsx)(n.p,{children:"The donation example includes a frontend that interacts with an already deployed smart contract, allowing user to donate NEAR tokens to a faucet service."}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"running-the-frontend",children:"Running the Frontend"}),"\n",(0,a.jsx)(n.p,{children:"To start the frontend you will need to install the dependencies and start the server."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd frontend\nyarn\nyarn dev\n"})}),"\n",(0,a.jsx)(n.p,{children:'Go ahead and login with your NEAR account. If you don\'t have one, you will be able to create one in the moment. Once logged in, input the amount of NEAR you want to donate and press the donate button. You will be redirected to the NEAR Wallet to confirm the transaction. After confirming it, the donation will be listed in the "Latest Donations".'}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"understanding-the-frontend",children:"Understanding the Frontend"}),"\n",(0,a.jsxs)(n.p,{children:["The frontend is a ",(0,a.jsx)(n.a,{href:"https://nextjs.org/",children:"Next.JS"})," project generated by ",(0,a.jsx)(n.a,{href:"https://github.com/near/create-near-app",children:"create-near-app"}),". Check ",(0,a.jsx)(n.code,{children:"DonationsTable.jsx"})," and ",(0,a.jsx)(n.code,{children:"DonationsForm.jsx"})," to understand how components are displayed and interacting with the contract."]}),"\n",(0,a.jsxs)(s.SQ,{value:"js",language:"js",children:[(0,a.jsx)(s.Ey,{fname:"DonationsTable.jsx",url:"https://github.com/near-examples/donation-examples/blob/main/frontend/src/components/DonationsTable.jsx"}),(0,a.jsx)(s.Ey,{fname:"DonationsForm.jsx",url:"https://github.com/near-examples/donation-examples/blob/main/frontend/src/components/DonationForm.jsx"})]}),"\n",(0,a.jsx)(n.p,{children:"An interesting aspect of the donation example is that it showcases how to retrieve a result after being redirected to the\nNEAR wallet to accept a transaction."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"smart-contract",children:"Smart Contract"}),"\n",(0,a.jsxs)(n.p,{children:["The contract exposes methods to donate tokens (",(0,a.jsx)(n.code,{children:"donate"}),"), and methods to retrieve the recorded donations (e.g. ",(0,a.jsx)(n.code,{children:"get_donation_for_account"}),")."]}),"\n",(0,a.jsxs)(s.O2,{children:[(0,a.jsx)(s.SQ,{value:"js",language:"ts",children:(0,a.jsx)(s.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/donation-examples/blob/main/contract-ts/src/contract.ts",start:"16",end:"44"})}),(0,a.jsx)(s.SQ,{value:"rust",language:"rust",children:(0,a.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/donation-examples/blob/main/contract-rs/src/donation.rs",start:"17",end:"74"})})]}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"testing-the-contract",children:"Testing the Contract"}),"\n",(0,a.jsx)(n.p,{children:"The contract readily includes a set of unit and sandbox testing to validate its functionality. To execute the tests, run the following commands:"}),"\n",(0,a.jsxs)(o.Z,{groupId:"code-tabs",children:[(0,a.jsx)(i.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd contract-ts\nyarn\nyarn test\n"})})}),(0,a.jsx)(i.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd contract-rs\ncargo test\n"})})})]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"integration tests"})," use a sandbox to create NEAR users and simulate interactions with the contract."]})}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"deploying-the-contract-to-the-near-network",children:"Deploying the Contract to the NEAR network"}),"\n",(0,a.jsx)(n.p,{children:"In order to deploy the contract you will need to create a NEAR account."}),"\n",(0,a.jsxs)(o.Z,{groupId:"cli-tabs",children:[(0,a.jsx)(i.Z,{value:"short",label:"Short",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Create a new account pre-funded by a faucet\nnear create-account <accountId> --useFaucet\n"})})}),(0,a.jsx)(i.Z,{value:"full",label:"Full",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Create a new account pre-funded by a faucet\nnear account create-account sponsor-by-faucet-service <my-new-dev-account>.testnet autogenerate-new-keypair save-to-keychain network-config testnet create\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Go into the directory containing the smart contract (",(0,a.jsx)(n.code,{children:"cd contract-ts"})," or ",(0,a.jsx)(n.code,{children:"cd contract-rs"}),"), build and deploy it:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cargo near build\n\ncargo near deploy <accountId>\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["To interact with your contract from the ",(0,a.jsx)(n.a,{href:"#frontend",children:"frontend"}),", simply replace the variable ",(0,a.jsx)(n.code,{children:"CONTRACT_NAME"})," in the ",(0,a.jsx)(n.code,{children:"index.js"})," file."]})}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"cli-interacting-with-the-contract",children:"CLI: Interacting with the Contract"}),"\n",(0,a.jsx)(n.p,{children:"To interact with the contract through the console, you can use the following commands"}),"\n",(0,a.jsx)(n.h4,{id:"get-donations",children:"Get donations"}),"\n",(0,a.jsxs)(o.Z,{groupId:"cli-tabs",children:[(0,a.jsx)(i.Z,{value:"short",label:"Short",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'near view donation.near-examples.testnet get_donations \'{"from_index": "0","limit": "10"}\'\n'})})}),(0,a.jsx)(i.Z,{value:"full",label:"Full",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'near contract call-function as-read-only donation.near-examples.testnet get_donations json-args \'{"from_index": "0","limit": "10"}\' network-config testnet now\n'})})})]}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(n.h4,{id:"get-beneficiary",children:"Get beneficiary"}),"\n",(0,a.jsxs)(o.Z,{groupId:"cli-tabs",children:[(0,a.jsx)(i.Z,{value:"short",label:"Short",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"near view donation.near-examples.testnet get_beneficiary\n"})})}),(0,a.jsx)(i.Z,{value:"full",label:"Full",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"near contract call-function as-read-only donation.near-examples.testnet get_beneficiary json-args {} network-config testnet now\n"})})})]}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(n.h4,{id:"get-number-of-donors",children:"Get number of donors"}),"\n",(0,a.jsxs)(o.Z,{groupId:"cli-tabs",children:[(0,a.jsx)(i.Z,{value:"short",label:"Short",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"near view donation.near-examples.testnet number_of_donors\n"})})}),(0,a.jsx)(i.Z,{value:"full",label:"Full",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"near contract call-function as-read-only donation.near-examples.testnet number_of_donors json-args {} network-config testnet now\n"})})})]}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(n.h4,{id:"get-donation-for-an-account",children:"Get donation for an account"}),"\n",(0,a.jsxs)(o.Z,{groupId:"cli-tabs",children:[(0,a.jsx)(i.Z,{value:"short",label:"Short",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Require accountId\nnear view donation.near-examples.testnet get_donation_for_account '{\"account_id\":<accountId>}'\n"})})}),(0,a.jsx)(i.Z,{value:"full",label:"Full",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Require accountId\nnear contract call-function as-read-only donation.near-examples.testnet get_donation_for_account json-args '{\"account_id\":<accountId>}' network-config testnet now\n"})})})]}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(n.h4,{id:"donate-to-the-contract",children:"Donate to the contract"}),"\n",(0,a.jsxs)(o.Z,{groupId:"cli-tabs",children:[(0,a.jsx)(i.Z,{value:"short",label:"Short",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Replace <accountId> with your account ID\n# Require deposit\nnear call donation.near-examples.testnet donate --accountId <accountId> --deposit 0.1\n"})})}),(0,a.jsx)(i.Z,{value:"full",label:"Full",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Replace <accountId> with your account ID\n# Require deposit\nnear contract call-function as-transaction donation.near-examples.testnet donate json-args {} prepaid-gas '30.0 Tgas' attached-deposit '0.1 NEAR' sign-as <accountId> network-config testnet sign-with-keychain send\n"})})})]}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["If you're using your own account, replace ",(0,a.jsx)(n.code,{children:"donation.near-examples.testnet"})," with your ",(0,a.jsx)(n.code,{children:"accountId"}),"."]})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"moving-forward",children:"Moving Forward"}),"\n",(0,a.jsxs)(n.p,{children:["A nice way to learn is by trying to expand a contract. Modify the donation example so it accumulates the tokens in the contract\ninstead of sending it immediately. Then, make a method that only the ",(0,a.jsx)(n.code,{children:"beneficiary"})," can call to retrieve the tokens."]}),"\n",(0,a.jsxs)(n.admonition,{title:"Versioning for this article",type:"note",children:[(0,a.jsx)(n.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["near-cli: ",(0,a.jsx)(n.code,{children:"4.0.13"})]}),"\n",(0,a.jsxs)(n.li,{children:["node: ",(0,a.jsx)(n.code,{children:"18.19.1"})]}),"\n",(0,a.jsxs)(n.li,{children:["rustc: ",(0,a.jsx)(n.code,{children:"1.77.0"})]}),"\n"]})]})]})}function x(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var a=t(36905);const r={tabItem:"tabItem_Ymn6"};var s=t(85893);function o(e){var n=e.children,t=e.hidden,o=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(67294),r=t(36905),s=t(12466),o=t(16550),i=t(20469),l=t(91980),c=t(67392),d=t(20812);function u(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.lx)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function x(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,s=(0,o.k6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:r});return[(0,l._X)(i),(0,a.useCallback)((function(e){if(i){var n=new URLSearchParams(s.location.search);n.set(i,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[i,s])]}function m(e){var n,t,r,s,o=e.defaultValue,l=e.queryString,c=void 0!==l&&l,u=e.groupId,m=h(e),g=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:m})})),f=g[0],j=g[1],b=x({queryString:c,groupId:u}),v=b[0],y=b[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),t=(0,d.Nk)(n),r=t[0],s=t[1],[r,(0,a.useCallback)((function(e){n&&s.set(e)}),[n,s])]),k=w[0],I=w[1],N=function(){var e=null!=v?v:k;return p({value:e,tabValues:m})?e:null}();return(0,i.Z)((function(){N&&j(N)}),[N]),{selectedValue:f,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);j(e),y(e),I(e)}),[y,I,m]),tabValues:m}}var g=t(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(85893);function b(e){var n=e.className,t=e.block,a=e.selectedValue,o=e.selectValue,i=e.tabValues,l=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=l.indexOf(n),r=i[t].value;r!==a&&(c(n),o(r))},u=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=l.indexOf(e.currentTarget)+1;t=null!=(a=l[r])?a:l[0];break;case"ArrowLeft":var s,o=l.indexOf(e.currentTarget)-1;t=null!=(s=l[o])?s:l[l.length-1]}null==(n=t)||n.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:i.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,j.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return l.push(e)},onKeyDown:u,onClick:d},s,{className:(0,r.Z)("tabs__item",f.tabItem,null==s?void 0:s.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)}))})}function v(e){var n=e.lazy,t=e.children,s=e.selectedValue,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var i=o.find((function(e){return e.props.value===s}));return i?(0,a.cloneElement)(i,{className:(0,r.Z)("margin-top--md",i.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})}))})}function y(e){var n=m(e);return(0,j.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,j.jsx)(b,Object.assign({},n,e)),(0,j.jsx)(v,Object.assign({},n,e))]})}function w(e){var n=(0,g.Z)();return(0,j.jsx)(y,Object.assign({},e,{children:u(e.children)}),String(n))}},71183:(e,n,t)=>{t.d(n,{O2:()=>x,Ey:()=>g,SQ:()=>m});var a=t(67294),r=t(74866),s=t(85162),o=t(74165),i=t(15861),l=t(1841),c=t.n(l),d=t(85893);function u(){return(u=(0,i.Z)((0,o.Z)().mark((function e(n,t,a){var r,s,i,l;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((s=localStorage.getItem(n+"-until"))&&s>Date.now())){e.next=5;break}r=localStorage.getItem(n),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(n);case 8:return e.next=10,e.sent.text();case 10:r=e.sent,localStorage.setItem(n,r),localStorage.setItem(n+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return i=r.split("\n"),t=t?Number(t)-1:0,a=a?Number(a):i.length,i=i.slice(t,a),l=i.reduce((function(e,n){if(0===n.length)return e;var t=n.match(/^\s+/);return t?Math.min(e,t[0].length):0}),1/0),e.abrupt("return",i.map((function(e){return e.slice(l)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var n=e.url,t=e.start,r=e.end,s=e.language,o=e.fname,i=e.metastring,l=(0,a.useState)("Loading..."),h=l[0],p=l[1];return(0,a.useEffect)((function(){var e=function(e){var n=e.slice(e.indexOf("https")).split("#"),t=n[0],a=(n[1],new URL(t).pathname.split("/").slice(1)),r=a[0],s=a[1];return a[2],"https://raw.githubusercontent.com/"+r+"/"+s+"/"+a[3]+"/"+a.slice(4).join("/")}(n),a=function(e,n,t){return u.apply(this,arguments)}(e,t,r);a.then((function(e){return p(e)}))})),(0,d.jsxs)("div",{fname:o,children:[(0,d.jsx)(c(),{language:s,metastring:i+" showLineNumbers",children:h}),(0,d.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,d.jsx)("a",{href:n,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var p={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function x(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,d.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,d.jsx)(s.Z,{value:e.props.value,label:p[e.props.value],children:e})}))})}function m(e){var n=e.children,t=e.language,a=e.showSingleFName;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var t=e.props,a=(t.children,t.url),r=t.start,s=t.end,o=t.fname;if(e.type===g)return g({url:a,start:r,end:s,language:n,fname:o});return e}(e,t)})),1!=n.length||a?(0,d.jsx)(r.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,d.jsx)(s.Z,{value:n,label:e.props.fname,children:e})}))}):(0,d.jsx)(s.Z,{value:0,label:n[0].props.fname,children:n[0]})}function g(e){var n=e.url,t=e.start,a=e.end,r=e.language,s=e.fname,o=e.metastring;return h({url:n,start:t,end:a,language:r,fname:s,metastring:o})}},80359:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/donation-7cf65e5e131274fd1ae9aa34bc465bb8.png"}}]);