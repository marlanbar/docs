"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4438],{51130:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var r=t(85893),a=t(11151),s=t(71183),o=t(74866),i=t(85162);const l={id:"transfers",title:"Transferring Fungible Tokens",sidebar_label:"Transferring FTs"},c=void 0,d={id:"tutorials/fts/transfers",title:"Transferring Fungible Tokens",description:"In this tutorial, you'll learn how to implement the core standards into your smart contract. You'll implement the logic that allows you to transfer and receive tokens. If you're joining us for the first time, feel free to clone this repository and follow along in the 4.storage folder.",source:"@site/../docs/3.tutorials/fts/5.transfers.md",sourceDirName:"3.tutorials/fts",slug:"/tutorials/fts/transfers",permalink:"/tutorials/fts/transfers",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/fts/5.transfers.md",tags:[],version:"current",lastUpdatedBy:"garikbesson",lastUpdatedAt:1724878821e3,sidebarPosition:5,frontMatter:{id:"transfers",title:"Transferring Fungible Tokens",sidebar_label:"Transferring FTs"},sidebar:"tutorials",previous:{title:"Registering Accounts",permalink:"/tutorials/fts/registering-accounts"},next:{title:"Adding FTs to a Marketplace",permalink:"/tutorials/fts/marketplace"}},u={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Modifications to the contract",id:"modifications-to-the-contract",level:2},{value:"Transfer function",id:"transfer-function",level:3},{value:"Internal helper functions",id:"internal-helper-functions",level:3},{value:"Transfer call function",id:"transfer-call-function",level:3},{value:"Deploying the contract",id:"redeploying-contract",level:2},{value:"Creating a sub-account",id:"creating-a-sub-account",level:3},{value:"Deployment and Initialization",id:"deployment-and-initialization",level:3},{value:"Testing the transfer function",id:"testing-the-transfer-function",level:3},{value:"Testing the transfer call function",id:"testing-the-transfer-call-function",level:3},{value:"Conclusion",id:"conclusion",level:2}];function f(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["In this tutorial, you'll learn how to implement the ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Core",children:"core standards"})," into your smart contract. You'll implement the logic that allows you to transfer and receive tokens. If you're joining us for the first time, feel free to clone ",(0,r.jsx)(n.a,{href:"https://github.com/near-examples/ft-tutorial",children:"this repository"})," and follow along in the ",(0,r.jsx)(n.code,{children:"4.storage"})," folder."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["If you wish to see the finished code for this ",(0,r.jsx)(n.em,{children:"Core"})," tutorial, you can find it in the ",(0,r.jsx)(n.a,{href:"https://github.com/near-examples/ft-tutorial/blob/main/5.transfers",children:(0,r.jsx)(n.code,{children:"5.transfers"})})," folder."]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(n.p,{children:"Up until this point, you've created a simple FT smart contract that allows the owner to mint a total supply of tokens and view information about the Fungible Token itself. In addition, you've added the functionality to register accounts and emit events. Today, you'll expand your smart contract to allow for users to transfer and receive fungible tokens."}),"\n",(0,r.jsx)(n.p,{children:"The logic for doing a simple transfer is quite easy to understand. Let's say Benji wants to transfer Mike 100 of his fungible tokens. The contract should do a few things:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Check if Benji owns at least 100 tokens."}),"\n",(0,r.jsx)(n.li,{children:"Make sure Benji is calling the function."}),"\n",(0,r.jsx)(n.li,{children:"Ensure Mike is registered on the contract."}),"\n",(0,r.jsx)(n.li,{children:"Take 100 tokens out of Benji's account."}),"\n",(0,r.jsx)(n.li,{children:"Put 100 tokens into Mike's account."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"At this point, you're ready to move on and make the necessary modifications to your smart contract."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"modifications-to-the-contract",children:"Modifications to the contract"}),"\n",(0,r.jsxs)(n.p,{children:["Let's start our journey in the ",(0,r.jsx)(n.code,{children:"src/ft_core.rs"})," file."]}),"\n",(0,r.jsx)(n.h3,{id:"transfer-function",children:"Transfer function"}),"\n",(0,r.jsxs)(n.p,{children:["You'll start by implementing the ",(0,r.jsx)(n.code,{children:"ft_transfer"})," logic which is found in the ",(0,r.jsx)(n.code,{children:"src/ft_core.rs"})," file. This function will transfer the specified ",(0,r.jsx)(n.code,{children:"amount"})," to the ",(0,r.jsx)(n.code,{children:"receiver_id"})," with an optional ",(0,r.jsx)(n.code,{children:"memo"})," such as ",(0,r.jsx)(n.code,{children:'"Happy Birthday Mike!"'}),"."]}),"\n",(0,r.jsx)(s.Ey,{language:"rust",start:"62",end:"70",url:"https://github.com/near-examples/ft-tutorial/blob/main/5.transfers/src/ft_core.rs"}),"\n",(0,r.jsx)(n.p,{children:"There are a couple things to notice here."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["We've introduced a new function called ",(0,r.jsx)(n.code,{children:"assert_one_yocto()"}),". This method will ensure that the user is signing the transaction with a full access key by requiring a deposit of exactly 1 yoctoNEAR, the smallest possible amount of $NEAR that can be transferred. Since the transfer function is potentially transferring very valuable assets, you'll want to make sure that whoever is calling the function has a full access key."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["We've introduced an ",(0,r.jsx)(n.code,{children:"internal_transfer"})," method. This will perform all the logic necessary to transfer the tokens internally."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)("hr",{className:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"internal-helper-functions",children:"Internal helper functions"}),"\n",(0,r.jsxs)(n.p,{children:["Let's quickly move over to the ",(0,r.jsx)(n.code,{children:"ft-contract/src/internal.rs"})," file so that you can implement the ",(0,r.jsx)(n.code,{children:"internal_transfer"})," method which is the core of this tutorial. This function will take the following parameters:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"sender_id"}),": the account that's attempting to transfer the tokens."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"receiver_id"}),": the account that's receiving the tokens."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"amount"}),": the amount of FTs being transferred."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"memo"}),": an optional memo to include."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The first thing you'll want to do is make sure the sender isn't sending tokens to themselves and that they're sending a positive number. After that, you'll want to withdraw the tokens from the sender's balance and deposit them into the receiver's balance. You've already written the logic to deposit FTs by using the ",(0,r.jsx)(n.code,{children:"internal_deposit"})," function."]}),"\n",(0,r.jsxs)(n.p,{children:["Let's use similar logic to implement ",(0,r.jsx)(n.code,{children:"internal_withdraw"}),":"]}),"\n",(0,r.jsx)(s.Ey,{language:"rust",start:"31",end:"41",url:"https://github.com/near-examples/ft-tutorial/blob/main/5.transfers/src/internal.rs"}),"\n",(0,r.jsxs)(n.p,{children:["In this case, the contract will get the account's balance and ensure they are registered by calling the ",(0,r.jsx)(n.code,{children:"internal_unwrap_balance_of"})," function. It will then subtract the amount from the user's balance and re-insert them into the map."]}),"\n",(0,r.jsxs)(n.p,{children:["Using the ",(0,r.jsx)(n.code,{children:"internal_deposit"})," and ",(0,r.jsx)(n.code,{children:"internal_withdraw"})," functions together, the core of the ",(0,r.jsx)(n.code,{children:"internal_transfer"})," function is complete."]}),"\n",(0,r.jsxs)(n.p,{children:["There's only one more thing you need to do. When transferring the tokens, you need to remember to emit a log as per the ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Event",children:"events"})," standard:"]}),"\n",(0,r.jsx)(s.Ey,{language:"rust",start:"44",end:"68",url:"https://github.com/near-examples/ft-tutorial/blob/main/5.transfers/src/internal.rs"}),"\n",(0,r.jsx)(n.p,{children:"Now that this is finished, the simple transfer case is done! You can now transfer FTs between registered users!"}),"\n",(0,r.jsx)("hr",{className:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"transfer-call-function",children:"Transfer call function"}),"\n",(0,r.jsxs)(n.p,{children:["In this section, you'll learn about a new function ",(0,r.jsx)(n.code,{children:"ft_transfer_call"}),". This will transfer FTs to a receiver and also call a method on the receiver's contract all in the same transaction."]}),"\n",(0,r.jsx)(n.p,{children:"Let's consider the following scenario. An account wants to transfer FTs to a smart contract for performing a service. The traditional approach would be to perform the service and then ask for the tokens in two separate transactions. If we introduce a \u201ctransfer and call\u201d workflow baked into a single transaction, the process can be greatly improved:"}),"\n",(0,r.jsx)(s.Ey,{language:"rust",start:"72",end:"100",url:"https://github.com/near-examples/ft-tutorial/blob/main/5.transfers/src/ft_core.rs"}),"\n",(0,r.jsx)(n.p,{children:"This function will do several things:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Ensures the caller attached exactly 1 yocto for security purposes."}),"\n",(0,r.jsxs)(n.li,{children:["Transfer the tokens using the ",(0,r.jsx)(n.code,{children:"internal_transfer"})," you just wrote."]}),"\n",(0,r.jsxs)(n.li,{children:["Creates a promise to call the method ",(0,r.jsx)(n.code,{children:"ft_on_transfer"})," on the ",(0,r.jsx)(n.code,{children:"receiver_id"}),"'s contract."]}),"\n",(0,r.jsxs)(n.li,{children:["After the promise finishes executing, the function ",(0,r.jsx)(n.code,{children:"ft_resolve_transfer"})," is called."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["This is a very common workflow when dealing with cross contract calls. You first initiate the call and wait for it to finish executing. Then, you invoke a function that resolves the result of the promise and act accordingly.\n",(0,r.jsx)(n.a,{href:"/build/smart-contracts/anatomy/crosscontract",children:"Learn more here"}),"."]})}),"\n",(0,r.jsxs)(n.p,{children:["When calling ",(0,r.jsx)(n.code,{children:"ft_on_transfer"}),", it will return how many tokens the contract should refund the original sender."]}),"\n",(0,r.jsx)(n.p,{children:"This is important for a couple of reasons:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"If you send the receiver too many FTs and their contract wants to refund the excess."}),"\n",(0,r.jsx)(n.li,{children:"If any of the logic panics, all of the tokens should be refunded back to the sender."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["This logic will all happen in the ",(0,r.jsx)(n.code,{children:"ft_resolve_transfer"})," function:"]}),"\n",(0,r.jsx)(s.Ey,{language:"rust",start:"170",end:"214",url:"https://github.com/near-examples/ft-tutorial/blob/main/5.transfers/src/ft_core.rs"}),"\n",(0,r.jsxs)(n.p,{children:["The first thing you'll do is check the status of the promise. If anything failed, you'll refund the sender for the full amount of tokens. If the promise succeeded, you'll extract the amount of tokens to refund the sender based on the value returned from ",(0,r.jsx)(n.code,{children:"ft_on_transfer"}),". Once you have the amount needed to be refunded, you'll perform the actual refund logic by using the ",(0,r.jsx)(n.code,{children:"internal_transfer"})," function you wrote previously."]}),"\n",(0,r.jsx)(n.p,{children:"You'll then return the net amount of tokens that were transferred to the receiver. If the sender transferred 100 tokens but 20 were refunded, this function should return 80."}),"\n",(0,r.jsx)(n.p,{children:"With that finished, you've now successfully added the necessary logic to allow users to transfer FTs. It's now time to deploy and do some testing."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"redeploying-contract",children:"Deploying the contract"}),"\n",(0,r.jsxs)(n.p,{children:["Let's create a new sub-account to deploy the contract to. Since these changes are only additive and non state breaking, you could have deployed a patch fix to the contract you deployed in the storage section as well. To learn more about upgrading contracts, see the ",(0,r.jsx)(n.a,{href:"/tutorials/nfts/upgrade-contract",children:"upgrading a contract"})," section in the NFT Zero to Hero tutorial."]}),"\n",(0,r.jsx)("hr",{className:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"creating-a-sub-account",children:"Creating a sub-account"}),"\n",(0,r.jsxs)(n.p,{children:["Run the following command to create a sub-account ",(0,r.jsx)(n.code,{children:"transfer"})," of your main account with an initial balance of 3 NEAR which will be transferred from the original to your new account."]}),"\n",(0,r.jsxs)(o.Z,{groupId:"cli-tabs",children:[(0,r.jsx)(i.Z,{value:"short",label:"Short",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"near create-account transfer.$FT_CONTRACT_ID --use-account $FT_CONTRACT_ID --initial-balance 3 --network-id testnet\n"})})}),(0,r.jsx)(i.Z,{value:"full",label:"Full",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"near account create-account fund-myself transfer.$FT_CONTRACT_ID '3 NEAR' autogenerate-new-keypair save-to-keychain sign-as $FT_CONTRACT_ID network-config testnet sign-with-keychain send\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"Next, you'll want to export an environment variable for ease of development:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"export TRANSFER_FT_CONTRACT_ID=transfer.$FT_CONTRACT_ID\n"})}),"\n",(0,r.jsx)(n.p,{children:"Build the contract as you did in the previous tutorials:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd 4.storage\ncargo near build\n"})}),"\n",(0,r.jsx)("hr",{className:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"deployment-and-initialization",children:"Deployment and Initialization"}),"\n",(0,r.jsxs)(n.p,{children:["It's time to deploy the contract, initialize it and mint the total supply. Let's once again create an initial supply of 1000 ",(0,r.jsx)(n.code,{children:"gtNEAR"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cargo near deploy $TRANSFER_FT_CONTRACT_ID with-init-call new_default_meta json-args '{\"owner_id\": \"'$TRANSFER_FT_CONTRACT_ID'\", \"total_supply\": \"1000000000000000000000000000\"}' prepaid-gas '100.0 Tgas' attached-deposit '0 NEAR' network-config testnet sign-with-keychain send\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can check if you own the FTs by running the following command:"}),"\n",(0,r.jsxs)(o.Z,{groupId:"cli-tabs",children:[(0,r.jsx)(i.Z,{value:"short",label:"Short",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"near view $TRANSFER_FT_CONTRACT_ID ft_balance_of '{\"account_id\": \"'$TRANSFER_FT_CONTRACT_ID'\"}' --networkId testnet\n"})})}),(0,r.jsx)(i.Z,{value:"full",label:"Full",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"near contract call-function as-read-only $TRANSFER_FT_CONTRACT_ID ft_balance_of json-args '{\"account_id\": \"'$TRANSFER_FT_CONTRACT_ID'\"}' network-config testnet now\n"})})})]}),"\n",(0,r.jsx)("hr",{className:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"testing-the-transfer-function",children:"Testing the transfer function"}),"\n",(0,r.jsxs)(n.p,{children:["Let's test the transfer function by transferring 1 ",(0,r.jsx)(n.code,{children:"gtNEAR"})," from the owner account to the account ",(0,r.jsx)(n.code,{children:"benjiman.testnet"})]}),"\n",(0,r.jsx)(n.admonition,{title:"Keep in mind",type:"warning",children:(0,r.jsxs)(n.p,{children:["The Fungible tokens won't be recoverable unless the account ",(0,r.jsx)(n.code,{children:"benjiman.testnet"})," transfers them back to you. If you don't want your FTs lost, make a new account and transfer the token to that account instead."]})}),"\n",(0,r.jsxs)(n.p,{children:["You'll first need to register the account ",(0,r.jsx)(n.code,{children:"benjiman.testnet"})," by running the following command."]}),"\n",(0,r.jsxs)(o.Z,{groupId:"cli-tabs",children:[(0,r.jsx)(i.Z,{value:"short",label:"Short",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'near call $TRANSFER_FT_CONTRACT_ID storage_deposit \'{"account_id": "benjiman.testnet"}\' --gas 100000000000000 --deposit 0.01 --accountId $TRANSFER_FT_CONTRACT_ID --networkId testnet\n'})})}),(0,r.jsx)(i.Z,{value:"full",label:"Full",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"near contract call-function as-transaction $TRANSFER_FT_CONTRACT_ID storage_deposit json-args '{\"account_id\": \"benjiman.testnet\"}' prepaid-gas '100.0 Tgas' attached-deposit '0.01 NEAR' sign-as $TRANSFER_FT_CONTRACT_ID network-config testnet sign-with-keychain send\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Once the account is registered, you can transfer the FTs by running the following command. Take note that you're also attaching exactly 1 yoctoNEAR by using the ",(0,r.jsx)(n.code,{children:"--depositYocto"})," flag."]}),"\n",(0,r.jsxs)(o.Z,{groupId:"cli-tabs",children:[(0,r.jsx)(i.Z,{value:"short",label:"Short",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'near call $TRANSFER_FT_CONTRACT_ID ft_transfer \'{"receiver_id": "benjiman.testnet", "amount": "1000000000000000000000000", "memo": "Go Team :)"}\' --gas 100000000000000 --depositYocto 1 --accountId $TRANSFER_FT_CONTRACT_ID --networkId testnet\n'})})}),(0,r.jsx)(i.Z,{value:"full",label:"Full",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'near contract call-function as-transaction $TRANSFER_FT_CONTRACT_ID ft_transfer json-args \'{"receiver_id": "benjiman.testnet", "amount": "1000000000000000000000000", "memo": "Go Team :)"}\' prepaid-gas \'100.0 Tgas\' attached-deposit \'1 yoctoNEAR\' sign-as $TRANSFER_FT_CONTRACT_ID network-config testnet sign-with-keychain send\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["You should see the ",(0,r.jsx)(n.code,{children:"FtTransferEvent"})," being emitted in the console. At this point, if you check for the total supply, it should still be 1000 ",(0,r.jsx)(n.code,{children:"gtNEAR"})," but if you check both the balance of Benji and the balance of the owner, they should reflect the transfer."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Check owner balance:"}),"\n"]}),"\n",(0,r.jsxs)(o.Z,{groupId:"cli-tabs",children:[(0,r.jsx)(i.Z,{value:"short",label:"Short",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"near view $TRANSFER_FT_CONTRACT_ID ft_balance_of '{\"account_id\": \"'$TRANSFER_FT_CONTRACT_ID'\"}' --networkId testnet\n"})})}),(0,r.jsx)(i.Z,{value:"full",label:"Full",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"near contract call-function as-read-only $TRANSFER_FT_CONTRACT_ID ft_balance_of json-args '{\"account_id\": \"'$TRANSFER_FT_CONTRACT_ID'\"}' network-config testnet now\n"})})})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Check ",(0,r.jsx)(n.code,{children:"benjiman.testnet"})," balance:"]}),"\n"]}),"\n",(0,r.jsxs)(o.Z,{groupId:"cli-tabs",children:[(0,r.jsx)(i.Z,{value:"short",label:"Short",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'near view $TRANSFER_FT_CONTRACT_ID ft_balance_of \'{"account_id": "benjiman.testnet"}\' --networkId testnet\n'})})}),(0,r.jsx)(i.Z,{value:"full",label:"Full",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'near contract call-function as-read-only $TRANSFER_FT_CONTRACT_ID ft_balance_of json-args \'{"account_id": "benjiman.testnet"}\' network-config testnet now\n'})})})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Check total supply:"}),"\n"]}),"\n",(0,r.jsxs)(o.Z,{groupId:"cli-tabs",children:[(0,r.jsx)(i.Z,{value:"short",label:"Short",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"near view $TRANSFER_FT_CONTRACT_ID ft_total_supply '{}' --networkId testnet\n"})})}),(0,r.jsx)(i.Z,{value:"full",label:"Full",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"near contract call-function as-read-only $TRANSFER_FT_CONTRACT_ID ft_total_supply json-args {} network-config testnet now\n"})})})]}),"\n",(0,r.jsx)("hr",{className:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"testing-the-transfer-call-function",children:"Testing the transfer call function"}),"\n",(0,r.jsxs)(n.p,{children:["Now that you've tested the ",(0,r.jsx)(n.code,{children:"ft_transfer"})," function, it's time to test the ",(0,r.jsx)(n.code,{children:"ft_transfer_call"})," function. If you try to transfer tokens to a receiver that does ",(0,r.jsx)(n.strong,{children:"not"})," implement the ",(0,r.jsx)(n.code,{children:"ft_on_transfer"})," function, the contract will panic and the FTs will be ",(0,r.jsx)(n.strong,{children:"refunded"}),". Let's test this functionality below."]}),"\n",(0,r.jsxs)(n.p,{children:["You can try to transfer the FTs to the account ",(0,r.jsx)(n.code,{children:"no-contract.testnet"})," which, as the name suggests, doesn't have a contract. This means that the receiver doesn't implement the ",(0,r.jsx)(n.code,{children:"ft_on_transfer"})," function and the FTs should remain yours after the transaction is complete. You'll first have to register the account, however."]}),"\n",(0,r.jsxs)(o.Z,{groupId:"cli-tabs",children:[(0,r.jsx)(i.Z,{value:"short",label:"Short",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'near call $TRANSFER_FT_CONTRACT_ID storage_deposit \'{"account_id": "no-contract.testnet"}\' --gas 100000000000000 --deposit 0.01 --accountId $TRANSFER_FT_CONTRACT_ID --networkId testnet\n'})})}),(0,r.jsx)(i.Z,{value:"full",label:"Full",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"near contract call-function as-transaction $TRANSFER_FT_CONTRACT_ID storage_deposit json-args '{\"account_id\": \"no-contract.testnet\"}' prepaid-gas '100.0 Tgas' attached-deposit '0.01 NEAR' sign-as $TRANSFER_FT_CONTRACT_ID network-config testnet sign-with-keychain send\n"})})})]}),"\n",(0,r.jsxs)(o.Z,{groupId:"cli-tabs",children:[(0,r.jsx)(i.Z,{value:"short",label:"Short",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'near call $TRANSFER_FT_CONTRACT_ID ft_transfer_call \'{"receiver_id": "no-contract.testnet", "amount": "1000000000000000000000000", "msg": "foo"}\' --gas 100000000000000 --depositYocto 1 --accountId $TRANSFER_FT_CONTRACT_ID --networkId testnet\n'})})}),(0,r.jsx)(i.Z,{value:"full",label:"Full",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'near contract call-function as-transaction $TRANSFER_FT_CONTRACT_ID ft_transfer_call json-args \'{"receiver_id": "no-contract.testnet", "amount": "1000000000000000000000000", "msg": "foo"}\' prepaid-gas \'100.0 Tgas\' attached-deposit \'1 yoctoNEAR\' sign-as $TRANSFER_FT_CONTRACT_ID network-config testnet sign-with-keychain send\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"The output response should be as follows."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'Scheduling a call: transfer.dev-1660680326316-91393402417293.ft_transfer_call({"receiver_id": "no-contract.testnet", "amount": "1000000000000000000000000", "msg": "foo"}) with attached 0.000000000000000000000001 NEAR\nDoing account.functionCall()\nReceipts: AJ3yWv7tSiZRLtoTkyTgfdzmQP1dpjX9DxJDiD33uwTZ, EKtpDFoJWNnbyxJ7SriAFQYX8XV9ZTzwmCF2qhSaYMAc, 21UzDZ791pWZRKAHv8WaRKN8mqDVrz8zewLWGTNZTckh\n\tLog [transfer.dev-1660680326316-91393402417293]: EVENT_JSON:{"standard":"nep141","version":"1.0.0","event":"ft_transfer","data":[{"old_owner_id":"transfer.dev-1660680326316-91393402417293","new_owner_id":"no-contract.testnet","amount":"1000000000000000000000000"}]}\nReceipt: 5N2WV8picxwUNC5TYa3A3v4qGquQAhkU6P81tgRt1UFN\n\tFailure [transfer.dev-1660680326316-91393402417293]: Error: Cannot find contract code for account no-contract.testnet\nReceipt: AdT1bSZNCu9ACq7m6ynb12GgSb3zBenfzvvzRwfYPBmg\n\tLog [transfer.dev-1660680326316-91393402417293]: EVENT_JSON:{"standard":"nep141","version":"1.0.0","event":"ft_transfer","data":[{"old_owner_id":"no-contract.testnet","new_owner_id":"transfer.dev-1660680326316-91393402417293","amount":"1000000000000000000000000","memo":"Refund"}]}\nTransaction Id 2XVy8MZU8TWreW8C9zK6HSyBsxE5hyTbyUyxNdncxL8g\nTo see the transaction in the transaction explorer, please open this url in your browser\nhttps://testnet.nearblocks.io/txns/2XVy8MZU8TWreW8C9zK6HSyBsxE5hyTbyUyxNdncxL8g\n\'0\'\n'})}),"\n",(0,r.jsxs)(n.p,{children:["There should be a transfer event emitted for the initial transfer of tokens and then also for the refund. In addition, ",(0,r.jsx)(n.code,{children:"0"})," should have been returned from the function because the sender ended up transferring net 0 tokens to the receiver since all the tokens were refunded."]}),"\n",(0,r.jsxs)(n.p,{children:["If you query for the balance of ",(0,r.jsx)(n.code,{children:"no-contract.testnet"}),", it should still be 0."]}),"\n",(0,r.jsxs)(o.Z,{groupId:"cli-tabs",children:[(0,r.jsx)(i.Z,{value:"short",label:"Short",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'near view $TRANSFER_FT_CONTRACT_ID ft_balance_of \'{"account_id": "no-contract.testnet"}\' --networkId testnet\n'})})}),(0,r.jsx)(i.Z,{value:"full",label:"Full",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'near contract call-function as-read-only $TRANSFER_FT_CONTRACT_ID ft_balance_of json-args \'{"account_id": "no-contract.testnet"}\' network-config testnet now\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"Hurray! At this point, your FT contract is fully complete and all the functionality is working as expected. Go forth and experiment! The world is your oyster and don't forget, go team!"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsxs)(n.p,{children:["In this tutorial, you learned how to expand a FT contract by adding ways for users to transfer FTs. You ",(0,r.jsx)(n.a,{href:"#introduction",children:"broke down"})," the problem into smaller, more digestible subtasks and took that information and implemented both the ",(0,r.jsx)(n.a,{href:"#transfer-function",children:"FT transfer"})," and ",(0,r.jsx)(n.a,{href:"#transfer-call-function",children:"FT transfer call"})," functions. In addition, you deployed another ",(0,r.jsx)(n.a,{href:"#redeploying-contract",children:"contract"})," and ",(0,r.jsx)(n.a,{href:"#testing-changes",children:"tested"})," the transfer functionality."]}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.a,{href:"/tutorials/fts/marketplace",children:"next tutorial"}),", you'll learn about how an NFT marketplace can operate to purchase NFTs by using Fungible Tokens."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.admonition,{title:"Versioning for this article",type:"note",children:[(0,r.jsx)(n.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["rustc: ",(0,r.jsx)(n.code,{children:"1.77.1"})]}),"\n",(0,r.jsxs)(n.li,{children:["near-sdk-rs: ",(0,r.jsx)(n.code,{children:"5.1.0"})," (with enabled ",(0,r.jsx)(n.code,{children:"legacy"})," feature)"]}),"\n",(0,r.jsxs)(n.li,{children:["cargo-near: ",(0,r.jsx)(n.code,{children:"0.6.1"})]}),"\n",(0,r.jsxs)(n.li,{children:["near-cli-rs: ",(0,r.jsx)(n.code,{children:"0.11.0"})]}),"\n"]})]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var s=t(85893);function o(e){var n=e.children,t=e.hidden,o=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>v});var r=t(67294),a=t(36905),s=t(12466),o=t(16550),i=t(20469),l=t(91980),c=t(67392),d=t(20812);function u(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function f(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,s=(0,o.k6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,l._X)(i),(0,r.useCallback)((function(e){if(i){var n=new URLSearchParams(s.location.search);n.set(i,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[i,s])]}function g(e){var n,t,a,s,o=e.defaultValue,l=e.queryString,c=void 0!==l&&l,u=e.groupId,g=h(e),x=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:g})})),m=x[0],j=x[1],b=p({queryString:c,groupId:u}),T=b[0],_=b[1],v=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),t=(0,d.Nk)(n),a=t[0],s=t[1],[a,(0,r.useCallback)((function(e){n&&s.set(e)}),[n,s])]),y=v[0],w=v[1],N=function(){var e=null!=T?T:y;return f({value:e,tabValues:g})?e:null}();return(0,i.Z)((function(){N&&j(N)}),[N]),{selectedValue:m,selectValue:(0,r.useCallback)((function(e){if(!f({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);j(e),_(e),w(e)}),[_,w,g]),tabValues:g}}var x=t(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(85893);function b(e){var n=e.className,t=e.block,r=e.selectedValue,o=e.selectValue,i=e.tabValues,l=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=l.indexOf(n),a=i[t].value;a!==r&&(c(n),o(a))},u=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=l.indexOf(e.currentTarget)+1;t=null!=(r=l[a])?r:l[0];break;case"ArrowLeft":var s,o=l.indexOf(e.currentTarget)-1;t=null!=(s=l[o])?s:l[l.length-1]}null==(n=t)||n.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:i.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,j.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return l.push(e)},onKeyDown:u,onClick:d},s,{className:(0,a.Z)("tabs__item",m.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function T(e){var n=e.lazy,t=e.children,a=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var o=s.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function _(e){var n=g(e);return(0,j.jsxs)("div",{className:(0,a.Z)("tabs-container",m.tabList),children:[(0,j.jsx)(b,Object.assign({},n,e)),(0,j.jsx)(T,Object.assign({},n,e))]})}function v(e){var n=(0,x.Z)();return(0,j.jsx)(_,Object.assign({},e,{children:u(e.children)}),String(n))}},71183:(e,n,t)=>{t.d(n,{O2:()=>p,Ey:()=>x,SQ:()=>g});var r=t(67294),a=t(74866),s=t(85162),o=t(74165),i=t(15861),l=t(1841),c=t.n(l),d=t(85893);function u(){return(u=(0,i.Z)((0,o.Z)().mark((function e(n,t,r){var a,s,i,l;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((s=localStorage.getItem(n+"-until"))&&s>Date.now())){e.next=5;break}a=localStorage.getItem(n),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(n);case 8:return e.next=10,e.sent.text();case 10:a=e.sent,localStorage.setItem(n,a),localStorage.setItem(n+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return i=a.split("\n"),t=t?Number(t)-1:0,r=r?Number(r):i.length,i=i.slice(t,r),l=i.reduce((function(e,n){if(0===n.length)return e;var t=n.match(/^\s+/);return t?Math.min(e,t[0].length):0}),1/0),e.abrupt("return",i.map((function(e){return e.slice(l)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var n=e.url,t=e.start,a=e.end,s=e.language,o=e.fname,i=e.metastring,l=(0,r.useState)("Loading..."),h=l[0],f=l[1];return(0,r.useEffect)((function(){var e=function(e){var n=e.slice(e.indexOf("https")).split("#"),t=n[0],r=(n[1],new URL(t).pathname.split("/").slice(1)),a=r[0],s=r[1];return r[2],"https://raw.githubusercontent.com/"+a+"/"+s+"/"+r[3]+"/"+r.slice(4).join("/")}(n),r=function(e,n,t){return u.apply(this,arguments)}(e,t,a);r.then((function(e){return f(e)}))})),(0,d.jsxs)("div",{fname:o,children:[(0,d.jsx)(c(),{language:s,metastring:i+" showLineNumbers",children:h}),(0,d.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,d.jsx)("a",{href:n,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var f={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function p(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,d.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,d.jsx)(s.Z,{value:e.props.value,label:f[e.props.value],children:e})}))})}function g(e){var n=e.children,t=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var t=e.props,r=(t.children,t.url),a=t.start,s=t.end,o=t.fname;if(e.type===x)return x({url:r,start:a,end:s,language:n,fname:o});return e}(e,t)})),1==n.length?(0,d.jsx)(s.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,d.jsx)(a.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,d.jsx)(s.Z,{value:n,label:e.props.fname,children:e})}))})}function x(e){var n=e.url,t=e.start,r=e.end,a=e.language,s=e.fname,o=e.metastring;return h({url:n,start:t,end:r,language:a,fname:s,metastring:o})}}}]);