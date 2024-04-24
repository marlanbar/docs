"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8752],{9752:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>h});var a=t(85893),r=t(11151),s=t(74866),o=t(85162),l=t(77229);const i={id:"guest-book",title:"Guest Book"},c=void 0,u={id:"tutorials/examples/guest-book",title:"Guest Book",description:"Our Guest Book example is a simple app composed by two main components:",source:"@site/../docs/3.tutorials/examples/guest-book.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/guest-book",permalink:"/tutorials/examples/guest-book",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/guest-book.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1712759479e3,frontMatter:{id:"guest-book",title:"Guest Book"},sidebar:"tutorials",previous:{title:"Count on NEAR",permalink:"/tutorials/examples/count-near"},next:{title:"Donation",permalink:"/tutorials/examples/donation"}},d={},h=[{value:"Obtaining the Guest book Example",id:"obtaining-the-guest-book-example",level:2},{value:"Structure of the Example",id:"structure-of-the-example",level:2},{value:"Frontend",id:"frontend",level:2},{value:"Running the Frontend",id:"running-the-frontend",level:3},{value:"Understanding the Frontend",id:"understanding-the-frontend",level:3},{value:"Smart Contract",id:"smart-contract",level:2},{value:"Testing the Contract",id:"testing-the-contract",level:3},{value:"Deploying the Contract to the NEAR network",id:"deploying-the-contract-to-the-near-network",level:3},{value:"CLI: Interacting with the Contract",id:"cli-interacting-with-the-contract",level:3},{value:"Moving Forward",id:"moving-forward",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Our Guest Book example is a simple app composed by two main components:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"A smart contract that stores messages from users, allowing to attach money to them."}),"\n",(0,a.jsx)(n.li,{children:"A simple web-based frontend that displays the last 10 messages posted."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"img",src:t(12679).Z+"",width:"1080",height:"457"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"obtaining-the-guest-book-example",children:"Obtaining the Guest book Example"}),"\n",(0,a.jsx)(n.p,{children:"You have two options to start the Guest book Example."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["You can use the app through ",(0,a.jsx)(n.code,{children:"GitHub Codespaces"}),", which will open a web-based interactive environment."]}),"\n",(0,a.jsx)(n.li,{children:"Clone the repository locally and use it from your computer."}),"\n"]}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Codespaces"}),(0,a.jsx)(n.th,{children:"Clone locally"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"https://codespaces.new/near-examples/guest-book-examples",children:(0,a.jsx)(n.img,{src:"https://github.com/codespaces/badge.svg",alt:"Open in GitHub Codespaces"})})}),(0,a.jsxs)(n.td,{children:["\ud83c\udf10 ",(0,a.jsx)(n.code,{children:"https://github.com/near-examples/guest-book-examples"})]})]})})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"structure-of-the-example",children:"Structure of the Example"}),"\n",(0,a.jsx)(n.p,{children:"The example is divided in two main components:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"The smart contract, available in two flavors: Rust and JavaScript"}),"\n",(0,a.jsx)(n.li,{children:"The frontend, that interacts with an already deployed contract."}),"\n"]}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(o.Z,{value:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\u250c\u2500\u2500 sandbox-ts # sandbox testing\n\u2502    \u251c\u2500\u2500 src\n\u2502    \u2502    \u2514\u2500\u2500 main.ava.ts\n\u2502    \u251c\u2500\u2500 ava.config.cjs\n\u2502    \u2514\u2500\u2500 package.json\n\u251c\u2500\u2500 src # contract's code\n\u2502    \u251c\u2500\u2500 contract.ts\n\u2502    \u2514\u2500\u2500 model.ts\n\u251c\u2500\u2500 package.json # package manager\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 tsconfig.json # test script\n"})})}),(0,a.jsx)(o.Z,{value:"\ud83e\udd80 Rust",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\u250c\u2500\u2500 tests # workspaces testing\n\u2502    \u251c\u2500\u2500 workspaces.rs\n\u251c\u2500\u2500 src # contract's code\n\u2502    \u2514\u2500\u2500 lib.rs\n\u251c\u2500\u2500 Cargo.toml # package manager\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 rust-toolchain.toml\n"})})})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"frontend",children:"Frontend"}),"\n",(0,a.jsx)(n.p,{children:"The guest book example includes a frontend that interacts with an already deployed smart contract, allowing user to sign a message."}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"running-the-frontend",children:"Running the Frontend"}),"\n",(0,a.jsx)(n.p,{children:"To start the frontend you will need to install the dependencies and start the server."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd frontend\nyarn\nyarn start\n"})}),"\n",(0,a.jsx)(n.p,{children:'Go ahead and login with your NEAR account. If you don\'t have one, you will be able to create one in the moment. Once logged in, you will be able to sign a message in the guest book. You can further send some money alongside your message. If you attach more than 0.01\u24c3 then your message will be marked as "premium".'}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"understanding-the-frontend",children:"Understanding the Frontend"}),"\n",(0,a.jsxs)(n.p,{children:["The frontend is composed by a single HTML file (",(0,a.jsx)(n.code,{children:"/index.html"}),") and uses REACT. Check ",(0,a.jsx)(n.code,{children:"/App.js"})," and ",(0,a.jsx)(n.code,{children:"/index.js"})," to understand how\ncomponents are displayed in the screen."]}),"\n",(0,a.jsxs)(n.p,{children:["You will notice in ",(0,a.jsx)(n.code,{children:"/src/App.jsx"})," the following code:"]}),"\n",(0,a.jsx)(l.O2,{children:(0,a.jsx)(l.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,a.jsx)(l.Ey,{fname:"App.jsx",url:"https://github.com/near-examples/guest-book-examples/blob/main/frontend/src/App.jsx"})})}),"\n",(0,a.jsx)(n.p,{children:"It setups the necessary variables and starts the app."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"smart-contract",children:"Smart Contract"}),"\n",(0,a.jsxs)(n.p,{children:["The contract presents 3 methods: ",(0,a.jsx)(n.code,{children:"add_message"}),", ",(0,a.jsx)(n.code,{children:"get_message"})," and ",(0,a.jsx)(n.code,{children:"total_messages"}),"."]}),"\n",(0,a.jsxs)(l.O2,{children:[(0,a.jsx)(l.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",children:(0,a.jsx)(l.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/guest-book-examples/blob/main/contract-ts/src/contract.ts",start:"4",end:"27"})}),(0,a.jsx)(l.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,a.jsx)(l.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/guest-book-examples/blob/main/contract-rs/src/lib.rs",start:"31",end:"64"})})]}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"testing-the-contract",children:"Testing the Contract"}),"\n",(0,a.jsx)(n.p,{children:"The contract readily includes a set of unit and sandbox testing to validate its functionality. To execute the tests, run the following commands:"}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(o.Z,{value:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd contract-ts\nyarn\nyarn test\n"})})}),(0,a.jsx)(o.Z,{value:"\ud83e\udd80 Rust",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd contract-rs\ncargo test\n"})})})]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"integration tests"})," use a sandbox to create NEAR users and simulate interactions with the contract."]})}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"deploying-the-contract-to-the-near-network",children:"Deploying the Contract to the NEAR network"}),"\n",(0,a.jsx)(n.p,{children:"In order to deploy the contract you will need to create a NEAR account."}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(o.Z,{value:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Optional - create an account\nnear create-account <accountId> --useFaucet\n\n# Deploy the contract\ncd contract-ts\nyarn build\nnear deploy <accountId> ./build/guestbook.wasm\n"})})}),(0,a.jsx)(o.Z,{value:"\ud83e\udd80 Rust",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Optional - create an account\nnear create-account <accountId> --useFaucet\n\n# Deploy the contract\ncd contract-rs\ncargo near build\nnear deploy <accountId> ./target/wasm32-unknown-unknown/release/guestbook.wasm\n"})})})]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["To interact with your contract from the ",(0,a.jsx)(n.a,{href:"#frontend",children:"frontend"}),", simply replace the variable ",(0,a.jsx)(n.code,{children:"CONTRACT_NAME"})," in the ",(0,a.jsx)(n.code,{children:"index.js"})," file."]})}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"cli-interacting-with-the-contract",children:"CLI: Interacting with the Contract"}),"\n",(0,a.jsx)(n.p,{children:"To interact with the contract through the console, you can use the following commands"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'# Get messages with optional arguments for pagination\nnear view guestbook.near-examples.testnet get_messages --args=\'{"from_index": "0","limit": "10"}\'\n\n# Get total number of messages\nnear view guestbook.near-examples.testnet total_messages\n\n# Add a message\n# Replace <accountId> with your account ID\n# Required a text\n# Optional deposit to make the message premium\nnear call guestbook.near-examples.testnet add_message \'{"text":"Hello Near"}\' --accountId <accountId> --deposit 0.1\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["If you're using your own account, replace ",(0,a.jsx)(n.code,{children:"guestbook.near-examples.testnet"})," with your ",(0,a.jsx)(n.code,{children:"accountId"}),"."]})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"moving-forward",children:"Moving Forward"}),"\n",(0,a.jsx)(n.p,{children:"A nice way to learn is by trying to expand a contract. You can modify the guestbook example to incorporate a feature where users can give likes to messages. Additionally, implement a method to toggle the like."}),"\n",(0,a.jsxs)(n.admonition,{title:"Versioning for this article",type:"note",children:[(0,a.jsx)(n.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["near-cli: ",(0,a.jsx)(n.code,{children:"4.0.13"})]}),"\n",(0,a.jsxs)(n.li,{children:["node: ",(0,a.jsx)(n.code,{children:"18.19.1"})]}),"\n",(0,a.jsxs)(n.li,{children:["rustc: ",(0,a.jsx)(n.code,{children:"1.77.0"})]}),"\n"]})]})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var a=t(36905);const r={tabItem:"tabItem_Ymn6"};var s=t(85893);function o(e){var n=e.children,t=e.hidden,o=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(67294),r=t(36905),s=t(12466),o=t(16550),l=t(20469),i=t(91980),c=t(67392),u=t(50012);function d(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,s=(0,o.k6)(),l=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:r});return[(0,i._X)(l),(0,a.useCallback)((function(e){if(l){var n=new URLSearchParams(s.location.search);n.set(l,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[l,s])]}function g(e){var n,t,r,s,o=e.defaultValue,i=e.queryString,c=void 0!==i&&i,d=e.groupId,g=h(e),x=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:g})})),b=x[0],j=x[1],f=m({queryString:c,groupId:d}),v=f[0],y=f[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,u.Nk)(n),r=t[0],s=t[1],[r,(0,a.useCallback)((function(e){n&&s.set(e)}),[n,s])]),k=w[0],I=w[1],E=function(){var e=null!=v?v:k;return p({value:e,tabValues:g})?e:null}();return(0,l.Z)((function(){E&&j(E)}),[E]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);j(e),y(e),I(e)}),[y,I,g]),tabValues:g}}var x=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(85893);function f(e){var n=e.className,t=e.block,a=e.selectedValue,o=e.selectValue,l=e.tabValues,i=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=i.indexOf(n),r=l[t].value;r!==a&&(c(n),o(r))},d=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,r=i.indexOf(e.currentTarget)+1;t=null!=(a=i[r])?a:i[0];break;case"ArrowLeft":var s,o=i.indexOf(e.currentTarget)-1;t=null!=(s=i[o])?s:i[i.length-1]}null==(n=t)||n.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:l.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,j.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return i.push(e)},onKeyDown:d,onClick:u},s,{className:(0,r.Z)("tabs__item",b.tabItem,null==s?void 0:s.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)}))})}function v(e){var n=e.lazy,t=e.children,r=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var o=s.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})}))})}function y(e){var n=g(e);return(0,j.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,j.jsx)(f,Object.assign({},e,n)),(0,j.jsx)(v,Object.assign({},e,n))]})}function w(e){var n=(0,x.Z)();return(0,j.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},77229:(e,n,t)=>{t.d(n,{Ey:()=>u,O2:()=>i,SQ:()=>c});t(67294);var a=t(74866),r=t(85162),s=t(95665),o=t.n(s),l=t(85893);function i(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,l.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,l.jsx)(r.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function c(e){var n=e.children,t=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var t=e.props,a=(t.children,t.url),r=t.start,s=t.end,o=t.fname;if(e.type===u)return u({url:a,start:r,end:s,language:n,fname:o});return e}(e,t)})),1==n.length?(0,l.jsx)(r.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,l.jsx)(a.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,l.jsx)(r.Z,{value:n,label:e.props.fname,children:e})}))})}function u(e){var n=e.url,t=e.start,a=e.end,r=e.language,s=e.fname,i=n+"#";return t&&a&&(i+="L"+t+"-L"+a+"#"),(0,l.jsx)(o(),{language:r,fname:s,children:i})}},12679:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/guest-book-b305a87a35cbef2b632ebe289d44f7b2.png"}}]);