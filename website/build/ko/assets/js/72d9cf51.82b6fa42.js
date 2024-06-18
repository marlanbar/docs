"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1104],{85582:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(85893),a=t(11151),s=t(71183);const i={id:"transfers",title:"\ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070 \uc804\uc1a1",sidebar_label:"FT \uc804\uc1a1"},l=void 0,o={id:"tutorials/fts/transfers",title:"\ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070 \uc804\uc1a1",description:"\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c\ub294 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ud575\uc2ec \ud45c\uc900\uc744 \uad6c\ud604\ud558\ub294 \ubc29\ubc95\uc744 \ubc30\uc6c1\ub2c8\ub2e4. \uc5ec\uae30\uc11c\ub294 \ud1a0\ud070\uc744 \uc804\uc1a1\ud558\uace0 \uc218\uc2e0\ud560 \uc218 \uc788\ub294 \ub85c\uc9c1\uc744 \uad6c\ud604\ud569\ub2c8\ub2e4. \ucc98\uc74c \ud574\ubcf4\ub294 \uacbd\uc6b0 \uc774 \ub808\ud37c\uc9c0\ud1a0\ub9ac\ub97c \ubcf5\uc81c\ud558\uace0 4.storage \ube0c\ub79c\uce58\ub97c \ud655\uc778\ud558\uc138\uc694.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/3.tutorials/fts/5.transfers.md",sourceDirName:"3.tutorials/fts",slug:"/tutorials/fts/transfers",permalink:"/ko/tutorials/fts/transfers",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/fts/5.transfers.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1718378911e3,sidebarPosition:5,frontMatter:{id:"transfers",title:"\ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070 \uc804\uc1a1",sidebar_label:"FT \uc804\uc1a1"},sidebar:"tutorials",previous:{title:"\uacc4\uc815 \ub4f1\ub85d",permalink:"/ko/tutorials/fts/registering-accounts"},next:{title:"\ub9c8\ucf13\ud50c\ub808\uc774\uc2a4\uc5d0 FT \ucd94\uac00\ud558\uae30",permalink:"/ko/tutorials/fts/marketplace"}},c={},d=[{value:"\uc18c\uac1c",id:"introduction",level:2},{value:"\ucee8\ud2b8\ub799\ud2b8 \uc218\uc815",id:"\ucee8\ud2b8\ub799\ud2b8-\uc218\uc815",level:2},{value:"\uc804\uc1a1 \ud568\uc218",id:"transfer-function",level:3},{value:"\ub0b4\ubd80 \ud5ec\ud37c \ud568\uc218",id:"\ub0b4\ubd80-\ud5ec\ud37c-\ud568\uc218",level:3},{value:"\uc804\uc1a1 \ud638\ucd9c \ud568\uc218",id:"transfer-call-function",level:3},{value:"\ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec",id:"redeploying-contract",level:2},{value:"\ud558\uc704 \uacc4\uc815(sub-account) \uc0dd\uc131",id:"\ud558\uc704-\uacc4\uc815sub-account-\uc0dd\uc131",level:3},{value:"Deployment and Initialization",id:"deployment-and-initialization",level:3},{value:"\uc804\uc1a1 \ud568\uc218 \ud14c\uc2a4\ud2b8",id:"\uc804\uc1a1-\ud568\uc218-\ud14c\uc2a4\ud2b8",level:3},{value:"\uc804\uc1a1 \ud638\ucd9c \ud568\uc218 \ud14c\uc2a4\ud2b8",id:"\uc804\uc1a1-\ud638\ucd9c-\ud568\uc218-\ud14c\uc2a4\ud2b8",level:3},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c\ub294 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc5d0 ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Core",children:"\ud575\uc2ec \ud45c\uc900"}),"\uc744 \uad6c\ud604\ud558\ub294 \ubc29\ubc95\uc744 \ubc30\uc6c1\ub2c8\ub2e4. \uc5ec\uae30\uc11c\ub294 \ud1a0\ud070\uc744 \uc804\uc1a1\ud558\uace0 \uc218\uc2e0\ud560 \uc218 \uc788\ub294 \ub85c\uc9c1\uc744 \uad6c\ud604\ud569\ub2c8\ub2e4. \ucc98\uc74c \ud574\ubcf4\ub294 \uacbd\uc6b0 ",(0,r.jsx)(n.a,{href:"https://github.com/near-examples/ft-tutorial",children:"\uc774 \ub808\ud37c\uc9c0\ud1a0\ub9ac"}),"\ub97c \ubcf5\uc81c\ud558\uace0 ",(0,r.jsx)(n.code,{children:"4.storage"})," \ube0c\ub79c\uce58\ub97c \ud655\uc778\ud558\uc138\uc694."]}),"\n",(0,r.jsxs)(n.p,{children:["\uc774 ",(0,r.jsx)(n.em,{children:"Core"})," \ud29c\ud1a0\ub9ac\uc5bc\uc758 \uc644\uc131\ub41c \ucf54\ub4dc\ub97c \ubcf4\uace0 \uc2f6\ub2e4\uba74, ",(0,r.jsx)(n.code,{children:"5.transfers"})," \ube0c\ub79c\uce58\uc5d0\uc11c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n:::"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"introduction",children:"\uc18c\uac1c"}),"\n",(0,r.jsx)(n.p,{children:"\uc9c0\uae08\uae4c\uc9c0 \uc18c\uc720\uc790\uac00 \ucd1d \ud1a0\ud070 \uacf5\uae09\ub7c9\uc744 \ubc1c\ud589\ud558\uace0, \ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070(FT) \uc790\uccb4\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ubcfc \uc218 \uc788\ub294 \uac04\ub2e8\ud55c FT \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4. \ub610\ud55c \uacc4\uc815\uc744 \ub4f1\ub85d\ud558\uace0 \uc774\ubca4\ud2b8\ub97c \ub0b4\ubcf4\ub0b4\ub294 \uae30\ub2a5\uc744 \ucd94\uac00\ud588\uc2b5\ub2c8\ub2e4. \uc624\ub298\uc740 \uc0ac\uc6a9\uc790\uac00 \ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070\uc744 \uc804\uc1a1\ud558\uace0 \ubc1b\uc744 \uc218 \uc788\ub3c4\ub85d \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \ud655\uc7a5\ud560 \uac83\uc785\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"\ub2e8\uc21c \uc804\uc1a1\uc744 \uc218\ud589\ud558\ub294 \ub85c\uc9c1\uc740 \uc774\ud574\ud558\uae30 \ub9e4\uc6b0 \uc27d\uc2b5\ub2c8\ub2e4. Benji\uac00 Mike\uc5d0\uac8c 100 \uac1c\uc758 \ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070\uc744 \uc804\uc1a1\ud558\ub824\uace0 \ud55c\ub2e4\uace0 \uac00\uc815\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \ucee8\ud2b8\ub799\ud2b8\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uba87 \uac00\uc9c0 \uc791\uc5c5\uc744 \uc218\ud589\ud574\uc57c \ud569\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Benji\uac00 \ucd5c\uc18c 100\uac1c\uc758 \ud1a0\ud070\uc744 \uc18c\uc720\ud558\uace0 \uc788\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"Benji\uac00 \ud568\uc218\ub97c \ud638\ucd9c\ud558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"Mike\uac00 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ub4f1\ub85d\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"Benji\uc758 \uacc4\uc815\uc5d0\uc11c \ud1a0\ud070 100\uac1c\ub97c \uac00\uc838\uc635\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"Mike\uc758 \uacc4\uc815\uc5d0 100\uac1c\uc758 \ud1a0\ud070\uc744 \ub123\uc2b5\ub2c8\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\uc774 \uc2dc\uc810\uc5d0\uc11c, \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ud544\uc694\ud55c \uc218\uc815\uc744 \ud560 \uc900\ube44\uac00 \ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"\ucee8\ud2b8\ub799\ud2b8-\uc218\uc815",children:"\ucee8\ud2b8\ub799\ud2b8 \uc218\uc815"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"src/ft_core.rs"})," \ud30c\uc77c\uc5d0\uc11c \uc2dc\uc791\ud558\uaca0\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.h3,{id:"transfer-function",children:"\uc804\uc1a1 \ud568\uc218"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ft_transfer"})," \ub85c\uc9c1\uc744 \uad6c\ud604\ud558\ub294 \uac83\uc73c\ub85c \uc2dc\uc791\ud569\ub2c8\ub2e4. \uc774 \ud568\uc218\ub294 ",(0,r.jsx)(n.code,{children:'"Happy Birthday Mike!"'}),"\uc640 \uac19\uc740 ",(0,r.jsx)(n.code,{children:"memo"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc9c0\uc815\ub41c ",(0,r.jsx)(n.code,{children:"amount"}),"\ub97c ",(0,r.jsx)(n.code,{children:"receiver_id"}),"\ub85c \uc804\uc1a1\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(s.Ey,{language:"rust",start:"62",end:"70",url:"https://github.com/near-examples/ft-tutorial/blob/main/5.transfers/src/ft_core.rs"}),"\n",(0,r.jsx)(n.p,{children:"There are a couple things to notice here."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["We've introduced a new function called ",(0,r.jsx)(n.code,{children:"assert_one_yocto()"}),". \uc774 \uba54\uc11c\ub4dc\ub294 \uc0ac\uc6a9\uc790\uac00 \ud638\ucd9c\uc5d0 \uc815\ud655\ud788 \ud558\ub098\uc758 yoctoNEAR\ub97c \uc5f0\uacb0\ud588\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4. \ud568\uc218\uc5d0 \uc785\uae08\uc774 \ud544\uc694\ud55c \uacbd\uc6b0, \ud574\ub2f9 \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc11c\uba85\ud558\ub824\uba74 \uc804\uccb4 \uc561\uc138\uc2a4 \ud0a4\uac00 \ud544\uc694\ud569\ub2c8\ub2e4. \uc774\ub294 \ud558\ub098\uc758 yoctoNEAR \ubcf4\uc99d\uae08 \uc694\uad6c \uc0ac\ud56d\uc744 \ucd94\uac00\ud568\uc73c\ub85c\uc368, \ubcf8\uc9c8\uc801\uc73c\ub85c \uc0ac\uc6a9\uc790\uac00 \uc804\uccb4 \uc561\uc138\uc2a4 \ud0a4\ub85c \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc11c\uba85\ud558\ub3c4\ub85d \uac15\uc81c\ud569\ub2c8\ub2e4. \uc804\uc1a1 \ud568\uc218\ub294 \uc7a0\uc7ac\uc801\uc73c\ub85c \ub9e4\uc6b0 \uadc0\uc911\ud55c \uc790\uc0b0\uc744 \uc804\uc1a1\ud558\ubbc0\ub85c, \ud568\uc218\ub97c \ud638\ucd9c\ud558\ub294 \uc0ac\ub78c\uc774 \uc804\uccb4 \uc561\uc138\uc2a4 \ud0a4\ub97c \uac00\uc9c0\uace0 \uc788\ub294\uc9c0 \ud655\uc778\ud574\uc57c \ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"internal_transfer"})," \uba54\uc11c\ub4dc\ub97c \ub3c4\uc785\ud588\uc2b5\ub2c8\ub2e4. \uc774\uac83\uc740 NFT\ub97c \uc804\uc1a1\ud558\ub294 \ub370 \ud544\uc694\ud55c \ubaa8\ub4e0 \ub85c\uc9c1\uc744 \uc218\ud589\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)("hr",{className:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"\ub0b4\ubd80-\ud5ec\ud37c-\ud568\uc218",children:"\ub0b4\ubd80 \ud5ec\ud37c \ud568\uc218"}),"\n",(0,r.jsxs)(n.p,{children:["Let's quickly move over to the ",(0,r.jsx)(n.code,{children:"ft-contract/src/internal.rs"})," file so that you can implement the ",(0,r.jsx)(n.code,{children:"internal_transfer"})," method which is the core of this tutorial. This function will take the following parameters:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"sender_id"}),": \ud1a0\ud070 \uc804\uc1a1\uc744 \uc2dc\ub3c4\ud558\ub294 \uacc4\uc815\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"receiver_id"}),": \ud1a0\ud070\uc744 \ubc1b\ub294 \uacc4\uc815\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"amount"}),": \uc804\uc1a1\ub418\ub294 FT \uac1c\uc218\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"memo"}),": \uc120\ud0dd\uc801\uc73c\ub85c \ud3ec\ud568\ud560 \uc218 \uc788\ub294 \uba54\ubaa8\uc785\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The first thing you'll want to do is make sure the sender isn't sending tokens to themselves and that they're sending a positive number. After that, you'll want to withdraw the tokens from the sender's balance and deposit them into the receiver's balance. You've already written the logic to deposit FTs by using the ",(0,r.jsx)(n.code,{children:"internal_deposit"})," function."]}),"\n",(0,r.jsxs)(n.p,{children:["Let's use similar logic to implement ",(0,r.jsx)(n.code,{children:"internal_withdraw"}),":"]}),"\n",(0,r.jsx)(s.Ey,{language:"rust",start:"31",end:"41",url:"https://github.com/near-examples/ft-tutorial/blob/main/5.transfers/src/internal.rs"}),"\n",(0,r.jsxs)(n.p,{children:["In this case, the contract will get the account's balance and ensure they are registered by calling the ",(0,r.jsx)(n.code,{children:"internal_unwrap_balance_of"})," function. It will then subtract the amount from the user's balance and re-insert them into the map."]}),"\n",(0,r.jsxs)(n.p,{children:["Using the ",(0,r.jsx)(n.code,{children:"internal_deposit"})," and ",(0,r.jsx)(n.code,{children:"internal_withdraw"})," functions together, the core of the ",(0,r.jsx)(n.code,{children:"internal_transfer"})," function is complete."]}),"\n",(0,r.jsxs)(n.p,{children:["There's only one more thing you need to do. When transferring the tokens, you need to remember to emit a log as per the ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Event",children:"events"})," standard:"]}),"\n",(0,r.jsx)(s.Ey,{language:"rust",start:"44",end:"68",url:"https://github.com/near-examples/ft-tutorial/blob/main/5.transfers/src/internal.rs"}),"\n",(0,r.jsx)(n.p,{children:"Now that this is finished, the simple transfer case is done! You can now transfer FTs between registered users!"}),"\n",(0,r.jsx)("hr",{className:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"transfer-call-function",children:"\uc804\uc1a1 \ud638\ucd9c \ud568\uc218"}),"\n",(0,r.jsxs)(n.p,{children:["In this section, you'll learn about a new function ",(0,r.jsx)(n.code,{children:"ft_transfer_call"}),". This will transfer FTs to a receiver and also call a method on the receiver's contract all in the same transaction."]}),"\n",(0,r.jsx)(n.p,{children:"Let's consider the following scenario. An account wants to transfer FTs to a smart contract for performing a service. The traditional approach would be to perform the service and then ask for the tokens in two separate transactions. If we introduce a \u201ctransfer and call\u201d workflow baked into a single transaction, the process can be greatly improved:"}),"\n",(0,r.jsx)(s.Ey,{language:"rust",start:"72",end:"100",url:"https://github.com/near-examples/ft-tutorial/blob/main/5.transfers/src/ft_core.rs"}),"\n",(0,r.jsx)(n.p,{children:"This function will do several things:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\ud638\ucd9c\uc790\uac00 \ubcf4\uc548\uc744 \uc704\ud574 \uc815\ud655\ud788 1 yocto\ub97c \ucca8\ubd80\ud588\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(n.li,{children:["\ubc29\uae08 \uc791\uc131\ud55c ",(0,r.jsx)(n.code,{children:"internal_transfer"})," \ud1a0\ud070\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud1a0\ud070\uc744 \uc804\uc1a1\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"receiver_id"}),"\uc758 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c ",(0,r.jsx)(n.code,{children:"ft_on_transfer"})," \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\ub294 Promise\ub97c \ub9cc\ub4ed\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:["Promise \uc2e4\ud589\uc774 \ub05d\ub098\uba74 ",(0,r.jsx)(n.code,{children:"ft_resolve_transfer"})," \ud568\uc218\uac00 \ud638\ucd9c\ub429\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"This is a very common workflow when dealing with cross contract calls. You first initiate the call and wait for it to finish executing. Then, you invoke a function that resolves the result of the promise and act accordingly."}),(0,r.jsxs)(n.p,{children:["Learn more ",(0,r.jsx)(n.a,{href:"/ko/build/smart-contracts/anatomy/crosscontract",children:"here"}),"."]})]}),"\n",(0,r.jsxs)(n.p,{children:["When calling ",(0,r.jsx)(n.code,{children:"ft_on_transfer"}),", it will return how many tokens the contract should refund the original sender."]}),"\n",(0,r.jsx)(n.p,{children:"This is important for a couple of reasons:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\uc218\uc2e0\uc790\uc5d0\uac8c \ub108\ubb34 \ub9ce\uc740 FT\ub97c \ubcf4\ub0b4\uc11c, \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ucd08\uacfc\ubd84\uc744 \ud658\ubd88\ud558\ub824\ub294 \uacbd\uc6b0\uc785\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"\ub85c\uc9c1 \ud328\ub2c9\uc774 \ubc1c\uc0dd\ud558\uba74, \ubaa8\ub4e0 \ud1a0\ud070\uc744 \ubcf4\ub0b8 \uc0ac\ub78c\uc5d0\uac8c \ub2e4\uc2dc \ud658\ubd88\ud574\uc57c \ud569\ub2c8\ub2e4."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["This logic will all happen in the ",(0,r.jsx)(n.code,{children:"ft_resolve_transfer"})," function:"]}),"\n",(0,r.jsx)(s.Ey,{language:"rust",start:"170",end:"214",url:"https://github.com/near-examples/ft-tutorial/blob/main/5.transfers/src/ft_core.rs"}),"\n",(0,r.jsxs)(n.p,{children:["The first thing you'll do is check the status of the promise. If anything failed, you'll refund the sender for the full amount of tokens. If the promise succeeded, you'll extract the amount of tokens to refund the sender based on the value returned from ",(0,r.jsx)(n.code,{children:"ft_on_transfer"}),". Once you have the amount needed to be refunded, you'll perform the actual refund logic by using the ",(0,r.jsx)(n.code,{children:"internal_transfer"})," function you wrote previously."]}),"\n",(0,r.jsx)(n.p,{children:"You'll then return the net amount of tokens that were transferred to the receiver. If the sender transferred 100 tokens but 20 were refunded, this function should return 80."}),"\n",(0,r.jsx)(n.p,{children:"With that finished, you've now successfully added the necessary logic to allow users to transfer FTs. It's now time to deploy and do some testing."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"redeploying-contract",children:"\ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec"}),"\n",(0,r.jsxs)(n.p,{children:["Let's create a new sub-account to deploy the contract to. Since these changes are only additive and non state breaking, you could have deployed a patch fix to the contract you deployed in the storage section as well. To learn more about upgrading contracts, see the ",(0,r.jsx)(n.a,{href:"/tutorials/nfts/upgrade-contract",children:"upgrading a contract"})," section in the NFT Zero to Hero tutorial."]}),"\n",(0,r.jsx)("hr",{className:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"\ud558\uc704-\uacc4\uc815sub-account-\uc0dd\uc131",children:"\ud558\uc704 \uacc4\uc815(sub-account) \uc0dd\uc131"}),"\n",(0,r.jsxs)(n.p,{children:["Run the following command to create a sub-account ",(0,r.jsx)(n.code,{children:"transfer"})," of your main account with an initial balance of 3 NEAR which will be transferred from the original to your new account."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"near create-account transfer.$FT_CONTRACT_ID --masterAccount $FT_CONTRACT_ID --initialBalance 3\n"})}),"\n",(0,r.jsx)(n.p,{children:"Next, you'll want to export an environment variable for ease of development:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"export TRANSFER_FT_CONTRACT_ID=transfer.$FT_CONTRACT_ID\n"})}),"\n",(0,r.jsx)(n.p,{children:"Build the contract as you did in the previous tutorials:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd 4.storage && cargo near build\n"})}),"\n",(0,r.jsx)("hr",{className:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"deployment-and-initialization",children:"Deployment and Initialization"}),"\n",(0,r.jsxs)(n.p,{children:["It's time to deploy the contract, initialize it and mint the total supply. \ub2e4\uc2dc \ud55c \ubc88 \ucd08\uae30 \uacf5\uae09\ub7c9\uc744 1000",(0,r.jsx)(n.code,{children:"gtNEAR"}),"\ub85c \ub9cc\ub4e4\uc5b4 \ubd05\uc2dc\ub2e4."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cargo near deploy $TRANSFER_FT_CONTRACT_ID with-init-call new_default_meta json-args '{\"owner_id\": \"'$TRANSFER_FT_CONTRACT_ID'\", \"total_supply\": \"1000000000000000000000000000\"}' prepaid-gas '100.0 Tgas' attached-deposit '0 NEAR' network-config testnet sign-with-keychain send\n"})}),"\n",(0,r.jsx)(n.p,{children:"\ub2e4\uc74c \uba85\ub839\uc744 \uc2e4\ud589\ud558\uc5ec FT\ub97c \uc18c\uc720\ud558\uace0 \uc788\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"near view $TRANSFER_FT_CONTRACT_ID ft_balance_of '{\"account_id\": \"'$TRANSFER_FT_CONTRACT_ID'\"}'\n"})}),"\n",(0,r.jsx)("hr",{className:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"\uc804\uc1a1-\ud568\uc218-\ud14c\uc2a4\ud2b8",children:"\uc804\uc1a1 \ud568\uc218 \ud14c\uc2a4\ud2b8"}),"\n",(0,r.jsxs)(n.p,{children:["Let's test the transfer function by transferring 1 ",(0,r.jsx)(n.code,{children:"gtNEAR"})," from the owner account to the account ",(0,r.jsx)(n.code,{children:"benjiman.testnet"})]}),"\n",(0,r.jsxs)(n.p,{children:["FT\ub294 \uacc4\uc815 ",(0,r.jsx)(n.code,{children:"benjiman.testnet"}),"\uc5d0\uc11c \ub2f9\uc2e0\uc5d0\uac8c \ub2e4\uc2dc \uc804\uc1a1\ud558\uc9c0 \uc54a\ub294 \ud55c \ubcf5\uad6c\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. FT\ub97c \uc783\uc5b4\ubc84\ub9ac\uace0 \uc2f6\uc9c0 \uc54a\ub2e4\uba74, \uc0c8 \uacc4\uc815\uc744 \ub9cc\ub4e4\uace0 \ub300\uc2e0 \ud574\ub2f9 \uacc4\uc815\uc73c\ub85c \ud1a0\ud070\uc744 \uc804\uc1a1\ud558\uc138\uc694.\n:::"]}),"\n",(0,r.jsxs)(n.p,{children:["\uba3c\uc800 \ub2e4\uc74c \uba85\ub839\uc744 \uc2e4\ud589\ud558\uc5ec ",(0,r.jsx)(n.code,{children:"benjiman.testnet"})," \uacc4\uc815\uc744 \ub4f1\ub85d\ud574\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'near call $TRANSFER_FT_CONTRACT_ID storage_deposit \'{"account_id": "benjiman.testnet"}\' --accountId $TRANSFER_FT_CONTRACT_ID --amount 0.01\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\uacc4\uc815\uc774 \ub4f1\ub85d\ub418\uba74 \ub2e4\uc74c \uba85\ub839\uc744 \uc2e4\ud589\ud558\uc5ec FT\ub97c \uc804\uc1a1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c ",(0,r.jsx)(n.code,{children:"--depositYocto"})," \ud50c\ub798\uadf8\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc815\ud655\ud788 1 yoctoNEAR\ub97c \ucca8\ubd80\ud558\uace0 \uc788\ub2e4\ub294 \uc810\uc5d0 \uc8fc\uc758\ud558\uc138\uc694."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'near call $TRANSFER_FT_CONTRACT_ID ft_transfer \'{"receiver_id": "benjiman.testnet", "amount": "1000000000000000000000000", "memo": "Go Team :)"}\' --accountId $TRANSFER_FT_CONTRACT_ID --depositYocto 1\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\ucf58\uc194\uc5d0\uc11c ",(0,r.jsx)(n.code,{children:"FtTransferEvent"}),"\uac00 \ubc1c\uc0dd\ud558\ub294 \uac83\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub54c \ucd1d \uacf5\uae09\ub7c9\uc744 \ud655\uc778\ud558\uba74 \uc5ec\uc804\ud788 1000 ",(0,r.jsx)(n.code,{children:"gtNEAR"}),"\uc774\uc9c0\ub9cc, Benji\uc758 \uc794\uc561\uacfc \uc18c\uc720\uc790\uc758 \uc794\uc561\uc744 \ubaa8\ub450 \ud655\uc778\ud558\uba74 \uc804\uc1a1\uc774 \ubc18\uc601\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"near view $TRANSFER_FT_CONTRACT_ID ft_balance_of '{\"account_id\": \"'$TRANSFER_FT_CONTRACT_ID'\"}'\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'near view $TRANSFER_FT_CONTRACT_ID ft_balance_of \'{"account_id": "benjiman.testnet"}\'\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"near view $TRANSFER_FT_CONTRACT_ID ft_total_supply\n"})}),"\n",(0,r.jsx)("hr",{className:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"\uc804\uc1a1-\ud638\ucd9c-\ud568\uc218-\ud14c\uc2a4\ud2b8",children:"\uc804\uc1a1 \ud638\ucd9c \ud568\uc218 \ud14c\uc2a4\ud2b8"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ft_transfer"})," \ud568\uc218\ub97c \ud14c\uc2a4\ud2b8\ud588\uc73c\ubbc0\ub85c, \uc774\uc81c ",(0,r.jsx)(n.code,{children:"ft_transfer_call"})," \ud568\uc218\ub97c \ud14c\uc2a4\ud2b8\ud560 \ucc28\ub840\uc785\ub2c8\ub2e4. ",(0,r.jsx)(n.code,{children:"ft_on_transfer"})," \ud568\uc218\ub97c \uad6c\ud604\ud558\uc9c0 ",(0,r.jsx)(n.strong,{children:"\uc54a\uc740"})," \uc218\uc2e0\uc790\uc5d0\uac8c \ud1a0\ud070\uc744 \uc804\uc1a1\ud558\ub824\uace0 \ud558\uba74, \ucee8\ud2b8\ub799\ud2b8\uac00 \ud328\ub2c9 \uc0c1\ud0dc\uac00 \ub418\uace0, FT\uac00 \ud658\ubd88\ub429\ub2c8\ub2e4. \uc544\ub798\uc5d0\uc11c \uc774 \uae30\ub2a5\uc744 \ud14c\uc2a4\ud2b8\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:["\uc774\ub984\uc5d0\uc11c \uc54c \uc218 \uc788\ub4ef\uc774, \ucee8\ud2b8\ub799\ud2b8\uac00 \uc5c6\ub294 ",(0,r.jsx)(n.code,{children:"no-contract.testnet"})," \uacc4\uc815\uc73c\ub85c FT\ub97c \uc774\uccb4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc989, \uc218\uc2e0\uc790\ub294 ",(0,r.jsx)(n.code,{children:"ft_on_transfer"})," \ud568\uc218\ub97c \uad6c\ud604\ud558\uc9c0 \uc54a\uc73c\uba70, \ud2b8\ub79c\uc7ad\uc158\uc774 \uc644\ub8cc\ub41c \ud6c4 FT\ub294 \ub2f9\uc2e0\uc758 \uac83\uc73c\ub85c \uc720\uc9c0\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uadf8\uc804\uc5d0 \uba3c\uc800 \uacc4\uc815\uc744 \ub4f1\ub85d\ud574\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'near call $TRANSFER_FT_CONTRACT_ID storage_deposit \'{"account_id": "no-contract.testnet"}\' --accountId $TRANSFER_FT_CONTRACT_ID --amount 0.01\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'near call $TRANSFER_FT_CONTRACT_ID ft_transfer_call \'{"receiver_id": "no-contract.testnet", "amount": "1000000000000000000000000", "msg": "foo"}\' --accountId $TRANSFER_FT_CONTRACT_ID --depositYocto 1 --gas 200000000000000\n'})}),"\n",(0,r.jsx)(n.p,{children:"\ucd9c\ub825 \uc751\ub2f5\uc740 \ub2e4\uc74c\uacfc \uac19\uc544\uc57c \ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'Scheduling a call: transfer.dev-1660680326316-91393402417293.ft_transfer_call({"receiver_id": "no-contract.testnet", "amount": "1000000000000000000000000", "msg": "foo"}) with attached 0.000000000000000000000001 NEAR\nDoing account.functionCall()\nReceipts: AJ3yWv7tSiZRLtoTkyTgfdzmQP1dpjX9DxJDiD33uwTZ, EKtpDFoJWNnbyxJ7SriAFQYX8XV9ZTzwmCF2qhSaYMAc, 21UzDZ791pWZRKAHv8WaRKN8mqDVrz8zewLWGTNZTckh\n    Log [transfer.dev-1660680326316-91393402417293]: EVENT_JSON:{"standard":"nep141","version":"1.0.0","event":"ft_transfer","data":[{"old_owner_id":"transfer.dev-1660680326316-91393402417293","new_owner_id":"no-contract.testnet","amount":"1000000000000000000000000"}]}\nReceipt: 5N2WV8picxwUNC5TYa3A3v4qGquQAhkU6P81tgRt1UFN\n    Failure [transfer.dev-1660680326316-91393402417293]: Error: Cannot find contract code for account no-contract.testnet\nReceipt: AdT1bSZNCu9ACq7m6ynb12GgSb3zBenfzvvzRwfYPBmg\n    Log [transfer.dev-1660680326316-91393402417293]: EVENT_JSON:{"standard":"nep141","version":"1.0.0","event":"ft_transfer","data":[{"old_owner_id":"no-contract.testnet","new_owner_id":"transfer.dev-1660680326316-91393402417293","amount":"1000000000000000000000000","memo":"Refund"}]}\nTransaction Id 2XVy8MZU8TWreW8C9zK6HSyBsxE5hyTbyUyxNdncxL8g\nTo see the transaction in the transaction explorer, please open this url in your browser\nhttps://testnet.nearblocks.io/txns/2XVy8MZU8TWreW8C9zK6HSyBsxE5hyTbyUyxNdncxL8g\n\'0\'\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\ud1a0\ud070\uc758 \ucd08\uae30 \uc804\uc1a1\uacfc \ud658\ubd88\uc744 \uc704\ud574 \uc0dd\uc131\ub41c \uc804\uc1a1 \uc774\ubca4\ud2b8\uac00 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4. \ub610\ud55c \ubaa8\ub4e0 \ud1a0\ud070\uc774 \ud658\ubd88\ub418\uc5c8\uc73c\ubbc0\ub85c, \ubcf4\ub0b8 \uc0ac\ub78c\uc774 \uc804\uccb4 0 \uac1c\uc758 \ud1a0\ud070\uc744 \ubc1b\ub294 \uc0ac\ub78c\uc5d0\uac8c \uc804\uc1a1\ud588\uae30 \ub54c\ubb38\uc5d0, \ud568\uc218\uc5d0\uc11c ",(0,r.jsx)(n.code,{children:"0"}),"\uc774 \ubc18\ud658\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"no-contract.testnet"}),"\uc758 \uc794\uace0\ub97c \ucffc\ub9ac\ud558\uba74 \uc5ec\uc804\ud788 0\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'near view $TRANSFER_FT_CONTRACT_ID ft_balance_of \'{"account_id": "no-contract.testnet"}\'\n'})}),"\n",(0,r.jsx)(n.p,{children:"\ub9cc\uc138! \uc774 \uc2dc\uc810\uc5d0\uc11c FT \ucee8\ud2b8\ub799\ud2b8\uac00 \uc644\uc804\ud788 \uc644\ub8cc\ub418\uace0 \ubaa8\ub4e0 \uae30\ub2a5\uc774 \uc608\uc0c1\ub300\ub85c \uc791\ub3d9\ud569\ub2c8\ub2e4. \uac00\uc11c \uc2e4\ud5d8\ud574\ubcf4\uc138\uc694! \uc138\uc0c1\uc740 \ub2f9\uc2e0\uc758 \uac83\uc785\ub2c8\ub2e4. \uc78a\uc9c0 \ub9d0\uace0 \ud654\uc774\ud305\ud558\uc138\uc694!"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"\uacb0\ub860",children:"\uacb0\ub860"}),"\n",(0,r.jsxs)(n.p,{children:["\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c\ub294 \uc0ac\uc6a9\uc790\uac00 FT\ub97c \uc804\uc1a1\ud558\ub294 \ubc29\ubc95\uc744 \ucd94\uac00\ud558\uc5ec FT \ucee8\ud2b8\ub799\ud2b8\ub97c \ud655\uc7a5\ud558\ub294 \ubc29\ubc95\uc744 \ubc30\uc6e0\uc2b5\ub2c8\ub2e4. \ubb38\uc81c\ub97c \ub354 \uc791\uace0 \uc774\ud574\ud558\uae30 \uc26c\uc6b4 \ud558\uc704 \uc791\uc5c5\uc73c\ub85c ",(0,r.jsx)(n.a,{href:"#introduction",children:"\ubd84\ub958\ud558\uace0"}),", \ud574\ub2f9 \uc815\ubcf4\ub97c \uac00\uc838\uc640 ",(0,r.jsx)(n.a,{href:"#transfer-function",children:"FT \uc804\uc1a1"})," \ubc0f ",(0,r.jsx)(n.a,{href:"#transfer-call-function",children:"FT \uc804\uc1a1 \ud638\ucd9c"})," \ud568\uc218\ub97c \ubaa8\ub450 \uad6c\ud604\ud588\uc2b5\ub2c8\ub2e4. \ub610\ud55c \ub2e4\ub978 ",(0,r.jsx)(n.a,{href:"#redeploying-contract",children:"\ucee8\ud2b8\ub799\ud2b8"}),"\ub97c \ubc30\ud3ec \ud558\uace0 \uc804\uc1a1 \uae30\ub2a5\uc744 ",(0,r.jsx)(n.a,{href:"#testing-changes",children:"\ud14c\uc2a4\ud2b8"}),"\ud588\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/tutorials/fts/marketplace",children:"\ub2e4\uc74c \ud29c\ud1a0\ub9ac\uc5bc"}),"\uc5d0\uc11c\ub294 \ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070\uc744 \uc0ac\uc6a9\ud558\uc5ec NFT\ub97c \uad6c\ub9e4\ud558\ub294 \ub370\uc5d0 \uc788\uc5b4 NFT \ub9c8\ucf13\ud50c\ub808\uc774\uc2a4\uac00 \uc791\ub3d9\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4."]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var s=t(85893);function i(e){var n=e.children,t=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>_});var r=t(67294),a=t(36905),s=t(12466),i=t(16550),l=t(20469),o=t(91980),c=t(67392),d=t(50012);function u(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function f(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,s=(0,i.k6)(),l=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,o._X)(l),(0,r.useCallback)((function(e){if(l){var n=new URLSearchParams(s.location.search);n.set(l,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[l,s])]}function x(e){var n,t,a,s,i=e.defaultValue,o=e.queryString,c=void 0!==o&&o,u=e.groupId,x=h(e),m=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:x})})),j=m[0],g=m[1],b=p({queryString:c,groupId:u}),v=b[0],T=b[1],_=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),t=(0,d.Nk)(n),a=t[0],s=t[1],[a,(0,r.useCallback)((function(e){n&&s.set(e)}),[n,s])]),y=_[0],w=_[1],N=function(){var e=null!=v?v:y;return f({value:e,tabValues:x})?e:null}();return(0,l.Z)((function(){N&&g(N)}),[N]),{selectedValue:j,selectValue:(0,r.useCallback)((function(e){if(!f({value:e,tabValues:x}))throw new Error("Can't select invalid tab value="+e);g(e),T(e),w(e)}),[T,w,x]),tabValues:x}}var m=t(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function b(e){var n=e.className,t=e.block,r=e.selectedValue,i=e.selectValue,l=e.tabValues,o=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=o.indexOf(n),a=l[t].value;a!==r&&(c(n),i(a))},u=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=o.indexOf(e.currentTarget)+1;t=null!=(r=o[a])?r:o[0];break;case"ArrowLeft":var s,i=o.indexOf(e.currentTarget)-1;t=null!=(s=o[i])?s:o[o.length-1]}null==(n=t)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:l.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return o.push(e)},onKeyDown:u,onClick:d},s,{className:(0,a.Z)("tabs__item",j.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function v(e){var n=e.lazy,t=e.children,a=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var i=s.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function T(e){var n=x(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",j.tabList),children:[(0,g.jsx)(b,Object.assign({},n,e)),(0,g.jsx)(v,Object.assign({},n,e))]})}function _(e){var n=(0,m.Z)();return(0,g.jsx)(T,Object.assign({},e,{children:u(e.children)}),String(n))}},71183:(e,n,t)=>{t.d(n,{O2:()=>p,Ey:()=>m,SQ:()=>x});var r=t(67294),a=t(74866),s=t(85162),i=t(74165),l=t(15861),o=t(1841),c=t.n(o),d=t(85893);function u(){return(u=(0,l.Z)((0,i.Z)().mark((function e(n,t,r){var a,s,l,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((s=localStorage.getItem(n+"-until"))&&s>Date.now())){e.next=5;break}a=localStorage.getItem(n),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(n);case 8:return e.next=10,e.sent.text();case 10:a=e.sent,localStorage.setItem(n,a),localStorage.setItem(n+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return l=a.split("\n"),t=t?Number(t)-1:0,r=r?Number(r):l.length,l=l.slice(t,r),o=l.reduce((function(e,n){if(0===n.length)return e;var t=n.match(/^\s+/);return t?Math.min(e,t[0].length):0}),1/0),e.abrupt("return",l.map((function(e){return e.slice(o)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var n=e.url,t=e.start,a=e.end,s=e.language,i=e.fname,l=e.metastring,o=(0,r.useState)("Loading..."),h=o[0],f=o[1];return(0,r.useEffect)((function(){var e=function(e){var n=e.slice(e.indexOf("https")).split("#"),t=n[0],r=(n[1],new URL(t).pathname.split("/").slice(1)),a=r[0],s=r[1];return r[2],"https://raw.githubusercontent.com/"+a+"/"+s+"/"+r[3]+"/"+r.slice(4).join("/")}(n),r=function(e,n,t){return u.apply(this,arguments)}(e,t,a);r.then((function(e){return f(e)}))})),(0,d.jsxs)("div",{fname:i,children:[(0,d.jsx)(c(),{language:s,metastring:l+" showLineNumbers",children:h}),(0,d.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,d.jsx)("a",{href:n,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var f={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function p(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,d.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,d.jsx)(s.Z,{value:e.props.value,label:f[e.props.value],children:e})}))})}function x(e){var n=e.children,t=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var t=e.props,r=(t.children,t.url),a=t.start,s=t.end,i=t.fname;if(e.type===m)return m({url:r,start:a,end:s,language:n,fname:i});return e}(e,t)})),1==n.length?(0,d.jsx)(s.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,d.jsx)(a.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,d.jsx)(s.Z,{value:n,label:e.props.fname,children:e})}))})}function m(e){var n=e.url,t=e.start,r=e.end,a=e.language,s=e.fname,i=e.metastring;return h({url:n,start:t,end:r,language:a,fname:s,metastring:i})}}}]);