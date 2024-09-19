"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6482],{59624:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=n(85893),r=n(11151),i=n(74866),s=n(85162),o=n(71183);const l={id:"winning-an-nft",title:"Winning an NFT",sidebar_label:"Winning an NFT"},c=void 0,u={id:"tutorials/auction/winning-an-nft",title:"Winning an NFT",description:"No one will enter an auction if there's nothing to win, so let's add a prize. Why not an NFT? NFTs are uniquely identifiable, easily swappable and their logic comes from an external contract so the prize will exist without the auction contract. Let's get to work!",source:"@site/../docs/3.tutorials/auction/3-nft.md",sourceDirName:"3.tutorials/auction",slug:"/tutorials/auction/winning-an-nft",permalink:"/ko/tutorials/auction/winning-an-nft",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/auction/3-nft.md",tags:[],version:"current",lastUpdatedBy:"Owen",lastUpdatedAt:1726751498e3,sidebarPosition:3,frontMatter:{id:"winning-an-nft",title:"Winning an NFT",sidebar_label:"Winning an NFT"}},h={},d=[{value:"Listing the NFT",id:"listing-the-nft",level:2},{value:"Transferring the NFT to the winner",id:"transferring-the-nft-to-the-winner",level:2},{value:"NFT ownership problems",id:"nft-ownership-problems",level:2},{value:"Testing with multiple contracts",id:"testing-with-multiple-contracts",level:2},{value:"Minting an NFT",id:"minting-an-nft",level:2},{value:"Verifying ownership of an NFT",id:"verifying-ownership-of-an-nft",level:2},{value:"Getting an NFT",id:"getting-an-nft",level:2},{value:"Conclusion",id:"conclusion",level:2}];function f(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["No one will enter an auction if there's nothing to win, so let's add a prize. Why not an ",(0,a.jsx)(t.a,{href:"../../2.build/5.primitives/nft.md",children:"NFT"}),"? NFTs are uniquely identifiable, easily swappable and their logic comes from an external contract so the prize will exist without the auction contract. Let's get to work!"]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"listing-the-nft",children:"Listing the NFT"}),"\n",(0,a.jsxs)(t.p,{children:["When we create an auction we need to list the NFT. To specify which NFT is being auctioned off we need the account ID of the NFT contract and the token ID of the NFT. We will specify these when the contract is initialized; amend ",(0,a.jsx)(t.code,{children:"init"})," to add ",(0,a.jsx)(t.code,{children:"nft_contract"})," and ",(0,a.jsx)(t.code,{children:"token_id"})," as such:"]}),"\n",(0,a.jsxs)(i.Z,{groupId:"code-tabs",children:[(0,a.jsx)(s.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(o.Ey,{fname:"main.ava.js",language:"javascript",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-ts/03-owner-claims-winner-gets-nft/src/contract.ts#L22-L28",start:"22",end:"28"})}),(0,a.jsxs)(s.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:[(0,a.jsx)(o.Ey,{fname:"lib.rs",language:"rust",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-rs/03-owner-claims-winner-gets-nft/src/lib.rs#L32-L49",start:"32",end:"49"}),(0,a.jsxs)(t.p,{children:["Note that ",(0,a.jsx)(t.code,{children:"token_id"})," is of type ",(0,a.jsx)(t.code,{children:"TokenId"})," which is a String type alias that the NFT standards use for future-proofing."]})]})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"transferring-the-nft-to-the-winner",children:"Transferring the NFT to the winner"}),"\n",(0,a.jsxs)(t.p,{children:["When the method ",(0,a.jsx)(t.code,{children:"claim"})," is called the NFT needs to be transferred to the highest bidder. Operations regarding NFTs live on the NFT contract, so we make a cross-contract call to the NFT contract telling it to swap the owner of the NFT to the highest bidder. The method on the NFT contract to do this is ",(0,a.jsx)(t.code,{children:"nft_transfer"}),"."]}),"\n",(0,a.jsxs)(i.Z,{groupId:"code-tabs",children:[(0,a.jsxs)(s.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:[(0,a.jsx)(o.Ey,{fname:"contract.ts",language:"javascript",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-ts/03-owner-claims-winner-gets-nft/src/contract.ts#L68-L70",start:"68",end:"70"}),(0,a.jsx)(t.p,{children:"In near-sdk-js we cannot transfer the NFT and send the $NEAR independently so we will chain the promises."})]}),(0,a.jsxs)(s.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:[(0,a.jsxs)(t.p,{children:["We will create a new file in our source folder named ",(0,a.jsx)(t.code,{children:"ext.rs"}),"; here we are going to define the interface for the ",(0,a.jsx)(t.code,{children:"nft_transfer"})," method. We define this interface as a ",(0,a.jsx)(t.code,{children:"trait"})," and use the ",(0,a.jsx)(t.code,{children:"ext_contract"})," macro to convert the NFT trait into a module with the method ",(0,a.jsx)(t.code,{children:"nft_transfer"}),". Defining external methods in a separate file helps improve the readability of our code."]}),(0,a.jsxs)(t.p,{children:["We then use this method in our ",(0,a.jsx)(t.code,{children:"lib.rs"})," file to transfer the NFT."]}),(0,a.jsxs)(o.SQ,{value:"rust",language:"rust",children:[(0,a.jsx)(o.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-rs/03-owner-claims-winner-gets-nft/src/lib.rs#L93-L96",start:"93",end:"96"}),(0,a.jsx)(o.Ey,{fname:"ext.rs",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-rs/03-owner-claims-winner-gets-nft/src/ext.rs",start:"2",end:"10"})]})]})]}),"\n",(0,a.jsxs)(t.p,{children:["When calling this method we specify the NFT contract name, that we are attaching 30 Tgas to the call, that we are attaching a deposit of 1 YoctoNEAR to the call, and give the arguments ",(0,a.jsx)(t.code,{children:"receiver_id"})," and ",(0,a.jsx)(t.code,{children:"token_id"}),". The NFT requires that we attach 1 YoctoNEAR for ",(0,a.jsx)(t.a,{href:"../../2.build/2.smart-contracts/security/one_yocto.md",children:"security reasons"}),"."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"nft-ownership-problems",children:"NFT ownership problems"}),"\n",(0,a.jsxs)(t.p,{children:["In our contract, we perform no checks to verify whether the contract actually owns the specified NFT. A bad actor could set up an auction where the NFT being auctioned doesn't belong to the auction contract, causing ",(0,a.jsx)(t.code,{children:"nft_transfer"})," to fail and the winning bidder to lose their bid funds with nothing in return. We could make a cross-contract call to the NFT contract to verify ownership on initialization but this would become quite complex. Instead, we will do this check off-chain and validate the auction in the frontend."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"testing-with-multiple-contracts",children:"Testing with multiple contracts"}),"\n",(0,a.jsx)(t.p,{children:"In our tests, we're now going to be using two contracts; the auction contract and an NFT contract. Sandbox testing is great as it allows us to test multiple contracts in a realistic environment."}),"\n",(0,a.jsxs)(t.p,{children:["In our tests folder, we need the WASM for an NFT contract. For this tutorial, we compiled an example NFT contract from ",(0,a.jsx)(t.a,{href:"https://github.com/near-examples/NFT/tree/master",children:"this repo"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["To deploy the NFT contract, this time we're going to use ",(0,a.jsx)(t.code,{children:"dev deploy"})," which creates an account with a random ID and deploys the contract to it by specifying the path to the WASM file. After deploying we will initialize the contract with default metadata and specify an account ID which will be the owner of the NFT contract (though the owner of the NFT contract is irrelevant in this example). Default metadata sets information such as the name and symbol of the NFT contract to default values."]}),"\n",(0,a.jsxs)(i.Z,{groupId:"code-tabs",children:[(0,a.jsx)(s.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(o.Ey,{fname:"main.ava.js",language:"javascript",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-ts/03-owner-claims-winner-gets-nft/sandbox-test/main.ava.js#L24-L25",start:"24",end:"25"})}),(0,a.jsx)(s.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,a.jsx)(o.Ey,{fname:"test_basics.rs",language:"rust",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-rs/03-owner-claims-winner-gets-nft/tests/test_basics.rs#L23-L24",start:"23",end:"32"})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"minting-an-nft",children:"Minting an NFT"}),"\n",(0,a.jsx)(t.p,{children:"To start a proper auction the auction contract should own an NFT. To do this the auction account calls the NFT contract to mint a new NFT providing information such as the image for the NFT."}),"\n",(0,a.jsxs)(i.Z,{groupId:"code-tabs",children:[(0,a.jsx)(s.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(o.Ey,{fname:"main.ava.js",language:"javascript",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-ts/03-owner-claims-winner-gets-nft/sandbox-test/main.ava.js#L28-L39",start:"28",end:"39"})}),(0,a.jsx)(s.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,a.jsx)(o.Ey,{fname:"test_basics.rs",language:"rust",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-rs/03-owner-claims-winner-gets-nft/tests/test_basics.rs#L35-L53",start:"35",end:"53"})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"verifying-ownership-of-an-nft",children:"Verifying ownership of an NFT"}),"\n",(0,a.jsxs)(t.p,{children:["After ",(0,a.jsx)(t.code,{children:"claim"})," is called, the test should verify that the auction winner now owns the NFT. This is done by calling ",(0,a.jsx)(t.code,{children:"nft_token"})," on the NFT contract and specifying the token ID which will return the account ID that the token belongs to."]}),"\n",(0,a.jsxs)(i.Z,{groupId:"code-tabs",children:[(0,a.jsx)(s.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(o.Ey,{fname:"main.ava.js",language:"javascript",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-ts/03-owner-claims-winner-gets-nft/sandbox-test/main.ava.js#L105-L106",start:"105",end:"106"})}),(0,a.jsx)(s.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,a.jsx)(o.Ey,{fname:"test_basics.rs",language:"rust",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-rs/03-owner-claims-winner-gets-nft/tests/test_basics.rs#L144-L157",start:"144",end:"157"})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"getting-an-nft",children:"Getting an NFT"}),"\n",(0,a.jsx)(t.p,{children:"If you would like to interact with the new contract via the CLI you can mint an NFT from a pre-deployed NFT contract"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'near contract call-function as-transaction nft.examples.testnet nft_mint json-args \'{"token_id": "TYPE_A_UNIQUE_VALUE_HERE", "receiver_id": "<accountId>", "metadata": { "title": "GO TEAM", "description": "The Team Goes", "media": "https://bafybeidl4hjbpdr6u6xvlrizwxbrfcyqurzvcnn5xoilmcqbxfbdwrmp5m.ipfs.dweb.link/", "copies": 1}}\' prepaid-gas \'100.0 Tgas\' attached-deposit \'0.1 NEAR\' sign-as <accountId> network-config testnet\n'})}),"\n",(0,a.jsxs)(t.p,{children:["You can also just buy an NFT with testnet $NEAR on a testnet marketplace like ",(0,a.jsx)(t.a,{href:"https://testnet.mintbase.xyz/explore/new/0",children:"Mintbase"}),"."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsxs)(t.p,{children:["In this part of the tutorial we have added NFTs as a reward which has taught us how to interact with NFT standards, make cross-contract calls and test multiple contracts that interact with each other in workspaces. In the ",(0,a.jsx)(t.a,{href:"/ko/tutorials/auction/bidding-with-fts",children:"next part"})," we'll learn how to interact with fungible token standards by adapting the auction to receive bids in FTs. This will allow users to launch auctions in different tokens, including stablecoins."]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var a=n(36905);const r={tabItem:"tabItem_Ymn6"};var i=n(85893);function s(e){var t=e.children,n=e.hidden,s=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(67294),r=n(36905),i=n(12466),s=n(16550),o=n(20469),l=n(91980),c=n(67392),u=n(20812);function h(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return h(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.lx)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,i=(0,s.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:r});return[(0,l._X)(o),(0,a.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function m(e){var t,n,r,i,s=e.defaultValue,l=e.queryString,c=void 0!==l&&l,h=e.groupId,m=d(e),g=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:m})})),b=g[0],w=g[1],v=p({queryString:c,groupId:h}),x=v[0],j=v[1],T=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),n=(0,u.Nk)(t),r=n[0],i=n[1],[r,(0,a.useCallback)((function(e){t&&i.set(e)}),[t,i])]),y=T[0],N=T[1],F=function(){var e=null!=x?x:y;return f({value:e,tabValues:m})?e:null}();return(0,o.Z)((function(){F&&w(F)}),[F]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);w(e),j(e),N(e)}),[j,N,m]),tabValues:m}}var g=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=n(85893);function v(e){var t=e.className,n=e.block,a=e.selectedValue,s=e.selectValue,o=e.tabValues,l=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=l.indexOf(t),r=o[n].value;r!==a&&(c(t),s(r))},h=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,r=l.indexOf(e.currentTarget)+1;n=null!=(a=l[r])?a:l[0];break;case"ArrowLeft":var i,s=l.indexOf(e.currentTarget)-1;n=null!=(i=l[s])?i:l[l.length-1]}null==(t=n)||t.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:o.map((function(e){var t=e.value,n=e.label,i=e.attributes;return(0,w.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return l.push(e)},onKeyDown:h,onClick:u},i,{className:(0,r.Z)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function x(e){var t=e.lazy,n=e.children,i=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=s.find((function(e){return e.props.value===i}));return o?(0,a.cloneElement)(o,{className:(0,r.Z)("margin-top--md",o.props.className)}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==i})}))})}function j(e){var t=m(e);return(0,w.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,w.jsx)(v,Object.assign({},t,e)),(0,w.jsx)(x,Object.assign({},t,e))]})}function T(e){var t=(0,g.Z)();return(0,w.jsx)(j,Object.assign({},e,{children:h(e.children)}),String(t))}},71183:(e,t,n)=>{n.d(t,{O2:()=>p,Ey:()=>g,SQ:()=>m});var a=n(67294),r=n(74866),i=n(85162),s=n(74165),o=n(15861),l=n(1841),c=n.n(l),u=n(85893);function h(){return(h=(0,o.Z)((0,s.Z)().mark((function e(t,n,a){var r,i,o,l;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((i=localStorage.getItem(t+"-until"))&&i>Date.now())){e.next=5;break}r=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:r=e.sent,localStorage.setItem(t,r),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return o=r.split("\n"),n=n?Number(n)-1:0,a=a?Number(a):o.length,o=o.slice(n,a),l=o.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",o.map((function(e){return e.slice(l)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const d=function(e){var t=e.url,n=e.start,r=e.end,i=e.language,s=e.fname,o=e.metastring,l=(0,a.useState)("Loading..."),d=l[0],f=l[1];return(0,a.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],a=(t[1],new URL(n).pathname.split("/").slice(1)),r=a[0],i=a[1];return a[2],"https://raw.githubusercontent.com/"+r+"/"+i+"/"+a[3]+"/"+a.slice(4).join("/")}(t),a=function(e,t,n){return h.apply(this,arguments)}(e,n,r);a.then((function(e){return f(e)}))})),(0,u.jsxs)("div",{fname:s,children:[(0,u.jsx)(c(),{language:i,metastring:o+" showLineNumbers",children:d}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var f={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function p(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,u.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,u.jsx)(i.Z,{value:e.props.value,label:f[e.props.value],children:e})}))})}function m(e){var t=e.children,n=e.language,a=e.showSingleFName;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,a=(n.children,n.url),r=n.start,i=n.end,s=n.fname;if(e.type===g)return g({url:a,start:r,end:i,language:t,fname:s});return e}(e,n)})),1!=t.length||a?(0,u.jsx)(r.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,u.jsx)(i.Z,{value:t,label:e.props.fname,children:e})}))}):(0,u.jsx)(i.Z,{value:0,label:t[0].props.fname,children:t[0]})}function g(e){var t=e.url,n=e.start,a=e.end,r=e.language,i=e.fname,s=e.metastring;return d({url:t,start:n,end:a,language:r,fname:i,metastring:s})}}}]);