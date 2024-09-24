"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4268],{52724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=n(85893),r=n(11151),i=n(74866),s=n(85162),o=n(71183);const l={id:"creating-a-frontend",title:"Creating a frontend",sidebar_label:"Creating a frontend"},c=void 0,d={id:"tutorials/auction/creating-a-frontend",title:"Creating a frontend",description:"Now that we have successfully created a contract, it's time to build a frontend to provide a user-friendly interface for interacting with it. Up until now, we have been using the CLI to send transactions and view the contract's state. However, frontends offer a more intuitive way for end users to interact with the contract. They can display all the relevant information in one place, allow users to make calls with a simple button click, and only require a wallet as a prerequisite.",source:"@site/../docs/3.tutorials/auction/5-frontend.md",sourceDirName:"3.tutorials/auction",slug:"/tutorials/auction/creating-a-frontend",permalink:"/tutorials/auction/creating-a-frontend",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/auction/5-frontend.md",tags:[],version:"current",lastUpdatedBy:"Owen",lastUpdatedAt:1726751498e3,sidebarPosition:5,frontMatter:{id:"creating-a-frontend",title:"Creating a frontend",sidebar_label:"Creating a frontend"}},h={},u=[{value:"Starting the frontend",id:"starting-the-frontend",level:2},{value:"Frontend structure",id:"frontend-structure",level:2},{value:"Specifying the contract",id:"specifying-the-contract",level:2},{value:"Setting up wallets",id:"setting-up-wallets",level:2},{value:"Displaying the highest bid",id:"displaying-the-highest-bid",level:2},{value:"Updating the highest bid",id:"updating-the-highest-bid",level:2},{value:"Auction end time",id:"auction-end-time",level:2},{value:"Displaying the NFT",id:"displaying-the-nft",level:2},{value:"Making a bid",id:"making-a-bid",level:2},{value:"Claiming the auction",id:"claiming-the-auction",level:2},{value:"Conclusion",id:"conclusion",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Now that we have successfully created a contract, it's time to build a frontend to provide a user-friendly interface for interacting with it. Up until now, we have been using the CLI to send transactions and view the contract's state. However, frontends offer a more intuitive way for end users to interact with the contract. They can display all the relevant information in one place, allow users to make calls with a simple button click, and only require a wallet as a prerequisite."}),"\n",(0,a.jsx)(t.h2,{id:"starting-the-frontend",children:"Starting the frontend"}),"\n",(0,a.jsxs)(t.p,{children:["Before we look at the code let's start up the frontend and have a peak at what it looks like. Feel free to interact with the application and place some bids. To place bids you will need to retrieve some testnet DAI from the ",(0,a.jsx)(t.a,{href:"https://near-faucet.io/",children:"faucet"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Navigate to the ",(0,a.jsx)(t.code,{children:"frontend"})," directory then install dependencies and start the frontend."]}),"\n",(0,a.jsxs)(i.Z,{groupId:"code-tabs",children:[(0,a.jsx)(s.Z,{value:"yarn",label:"yarn",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"yarn install\nyarn dev\n"})})}),(0,a.jsx)(s.Z,{value:"npm",label:"npm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"npm install\nnpm run dev\n"})})})]}),"\n",(0,a.jsx)(t.h2,{id:"frontend-structure",children:"Frontend structure"}),"\n",(0,a.jsx)(t.p,{children:"In our frontend directory, we have a simple Next.js frontend that we'll walk through to understand the basics of creating a frontend for a NEAR smart contract."}),"\n",(0,a.jsx)(t.p,{children:"For starters, let's take a look at how the code in the frontend is structured by doing a quick overview of the important files."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"File"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"_app.js"})}),(0,a.jsx)(t.td,{children:"Responsible for rending the page, initiates the wallet object and adds it to global context"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"index.js"})}),(0,a.jsx)(t.td,{children:"The main page where most of the projects components are loaded into and contains most of the logic for the application like viewing the state of the contract and logic for placing a bid"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"near.js"})}),(0,a.jsx)(t.td,{children:"Contains the wallet class that has methods to interact with the wallet and blockchain"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"context.js"})}),(0,a.jsx)(t.td,{children:"Holds the global context - the wallet object and the signed in account ID - that can be accessed anywhere"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"config.js"})}),(0,a.jsx)(t.td,{children:"Specifies the account ID of the auction contract"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"Navigation.jsx"})}),(0,a.jsx)(t.td,{children:"A component that contains a button to sign users in and out of wallets"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"Bid.jsx"})}),(0,a.jsx)(t.td,{children:"A component allowing a user to make a bid"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"LastBid.jsx"})}),(0,a.jsx)(t.td,{children:"A component that displays the highest bid and when the highest bid will next refresh"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"AuctionItem.jsx"})}),(0,a.jsx)(t.td,{children:"A component that displays information about the NFT being auctioned"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"Timer.jsx"})}),(0,a.jsx)(t.td,{children:"A component that shows how long till the auction is over, or, if over, displays a button to claim the auction and then states the auction is over"})]})]})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"specifying-the-contract",children:"Specifying the contract"}),"\n",(0,a.jsxs)(t.p,{children:["We have a config file that specifies the contract name of the auction that the frontend will interact with. The example given is a pre-deployed contract from ",(0,a.jsx)(t.a,{href:"/tutorials/auction/bidding-with-fts",children:"part 4 of the tutorial"}),". The example contract is set up to accept bids in DAI (dai.fakes.testnet), has an NFT token pre-minted and owned by the contract account, and has an end auction time far in the future. Feel free to change the specified contract to your own auction that you deploy."]}),"\n",(0,a.jsx)(o.SQ,{value:"javascript",language:"javascript",showSingleFName:!0,children:(0,a.jsx)(o.Ey,{fname:"config.js",url:"https://github.com/near-examples/auctions-tutorial/tree/main/frontend/src/config.js"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"setting-up-wallets",children:"Setting up wallets"}),"\n",(0,a.jsxs)(t.p,{children:["To be able to fully interact with the contract - send bids or claim the auction - you'll need a ",(0,a.jsx)(t.code,{children:"wallet"})," to sign transactions. Wallets securely store your private keys and allow you to sign transactions without exposing your private key to the frontend. The wallet selector allows users to choose between a selection of wallets."]}),"\n",(0,a.jsxs)(t.p,{children:["We abstract the wallet selector in our ",(0,a.jsx)(t.code,{children:"near.js"})," file by exposing methods to complete various tasks. Feel free to ",(0,a.jsx)(t.a,{href:"https://github.com/near-examples/auctions-tutorial/blob/main/frontend/src/wallets/near.js",children:"explore the file"})," to understand how the wallet selector is implemented."]}),"\n",(0,a.jsxs)(t.p,{children:["We implement a sign-in and sign-out button in the navigation component to call the respective methods in the ",(0,a.jsx)(t.code,{children:"near.js"})," file. When a wallet is signed in a function call access key is created. This allows the frontend to sign nonpayable transactions on behalf of the user, to the specified contract, without requiring the user to sign each transaction in the wallet; this allows for a better user experience. However, in this example, the main transaction we'll send is to make bids, which is payable so the wallet will prompt the user to sign each transaction."]}),"\n",(0,a.jsxs)(o.SQ,{value:"javascript",language:"javascript",children:[(0,a.jsx)(o.Ey,{fname:"Navigation.jsx",url:"https://github.com/near-examples/auctions-tutorial/blob/main/frontend/src/components/Navigation.jsx"}),(0,a.jsx)(o.Ey,{fname:"near.js",url:"https://github.com/near-examples/auctions-tutorial/blob/main/frontend/src/wallets/near.js#L58-L72",start:"58",end:"72"})]}),"\n",(0,a.jsx)(t.p,{children:"We add the wallet and the account ID that is signed in to the global context making it easier to access anywhere in the application."}),"\n",(0,a.jsxs)(o.SQ,{value:"javascript",language:"javascript",children:[(0,a.jsx)(o.Ey,{fname:"context.js",url:"https://github.com/near-examples/auctions-tutorial/blob/main/frontend/src/context.js"}),(0,a.jsx)(o.Ey,{fname:"_app.js",url:"https://github.com/near-examples/auctions-tutorial/blob/main/frontend/src/pages/_app.js#L13-L27",start:"13",end:"27"})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"displaying-the-highest-bid",children:"Displaying the highest bid"}),"\n",(0,a.jsxs)(t.p,{children:["To get all the information about the auction we call the method ",(0,a.jsx)(t.code,{children:"get_auction_info"}),". This will be used to display the highest bidder, the auction end time, the NFT contract ID and token ID, and FT contract IDs."]}),"\n",(0,a.jsxs)(o.SQ,{value:"javascript",language:"javascript",children:[(0,a.jsx)(o.Ey,{fname:"index.js",url:"https://github.com/near-examples/auctions-tutorial/blob/main/frontend/src/pages/index.js#L29-L35",start:"29",end:"35"}),(0,a.jsx)(o.Ey,{fname:"near.js",url:"https://github.com/near-examples/auctions-tutorial/blob/main/frontend/src/wallets/near.js#L82-L94",start:"82",end:"94"})]}),"\n",(0,a.jsxs)(t.p,{children:["In the wallet file, you'll see that we make a query to the RPC provider, since we are not signing a transaction the wallet isn't required here. Here we are using ",(0,a.jsx)(t.a,{href:"https://rpc.testnet.near.org",children:"https://rpc.testnet.near.org"})," but note there are ",(0,a.jsx)(t.a,{href:"/api/rpc/providers",children:"many different providers available"}),". We are querying the RPC with optimistic finality, which queries the latest block recorded on the node. Alternatively, one could use final finality where the block has been validated by at least 66% of the validators on the network but this will provide slightly delayed information (only by a couple of seconds)."]}),"\n",(0,a.jsxs)(t.p,{children:["We then pass the information about the highest bidder into the ",(0,a.jsx)(t.code,{children:"LastBid"})," component to display the bid amount and the bidder's account ID."]}),"\n",(0,a.jsxs)(o.SQ,{value:"javascript",language:"javascript",children:[(0,a.jsx)(o.Ey,{fname:"index.js",url:"https://github.com/near-examples/auctions-tutorial/blob/main/frontend/src/pages/index.js#L129",start:"129",end:"129"}),(0,a.jsx)(o.Ey,{fname:"LastBid.jsx",url:"https://github.com/near-examples/auctions-tutorial/blob/main/frontend/src/components/LastBid.jsx"})]}),"\n",(0,a.jsxs)(t.p,{children:["When we display the latest bid, instead of just showing the bid amount directly we divide the amount by the decimals of the FT. In this example, we are using DAI which has 18 decimals meaning that 1 DAI equals 10^18 units. We also display information about the token that is being used. We get this information from the FT contract by calling the ",(0,a.jsx)(t.code,{children:"ft_metadata"})," method (remember that the FT contract ID is stored on the auction contract)."]}),"\n",(0,a.jsx)(o.SQ,{value:"javascript",language:"javascript",showSingleFName:!0,children:(0,a.jsx)(o.Ey,{fname:"index.js",url:"https://github.com/near-examples/auctions-tutorial/blob/main/frontend/src/pages/index.js#L75-L93",start:"75",end:"93"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"updating-the-highest-bid",children:"Updating the highest bid"}),"\n",(0,a.jsxs)(t.p,{children:["We want to know the highest bid at all times, someone else could have placed a higher bid since the page was loaded. To solve this we fetch the contract information every 5 seconds using ",(0,a.jsx)(t.code,{children:"setInterval"}),"."]}),"\n",(0,a.jsx)(o.SQ,{value:"javascript",language:"javascript",showSingleFName:!0,children:(0,a.jsx)(o.Ey,{fname:"index.js",url:"https://github.com/near-examples/auctions-tutorial/blob/main/frontend/src/pages/index.js#L41-L55",start:"41",end:"55"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"auction-end-time",children:"Auction end time"}),"\n",(0,a.jsx)(t.p,{children:"The contract stores the end time of the auction in the number of nanoseconds since the Unix epoch (1 January 1970 00:00:00 UTC). To make this look nicer we will display the time left in days, hours, minutes, and seconds."}),"\n",(0,a.jsx)(o.SQ,{value:"javascript",language:"javascript",showSingleFName:!0,children:(0,a.jsx)(o.Ey,{fname:"Timer.jsx",url:"https://github.com/near-examples/auctions-tutorial/blob/main/frontend/src/components/Timer.jsx#L11-L35",start:"11",end:"35"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"displaying-the-nft",children:"Displaying the NFT"}),"\n",(0,a.jsxs)(t.p,{children:["We want to show what NFT is being auctioned. To do this we will call ",(0,a.jsx)(t.code,{children:"nft_token"})," on the NFT contract to get the NFT metadata. To call this method we need to specify the NFT ",(0,a.jsx)(t.code,{children:"contractId"})," and the ",(0,a.jsx)(t.code,{children:"token_id"}),", which can be found in the auction information. ",(0,a.jsx)(t.code,{children:"nft_token"})," also returns the owner of the NFT, so we'll check this against the contract account to verify that the auction is valid."]}),"\n",(0,a.jsx)(o.SQ,{value:"javascript",language:"javascript",showSingleFName:!0,children:(0,a.jsx)(o.Ey,{fname:"index.js",url:"https://github.com/near-examples/auctions-tutorial/blob/main/frontend/src/pages/index.js#L57-L73",start:"57",end:"73"})}),"\n",(0,a.jsxs)(t.p,{children:["Note that this effect will only run once the ",(0,a.jsx)(t.code,{children:"auctionInfo"})," updates because we first need the NFT contract ID and token ID from ",(0,a.jsx)(t.code,{children:"auctionInfo"})," to make a valid call to ",(0,a.jsx)(t.code,{children:"nft_token"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["In the ",(0,a.jsx)(t.code,{children:"AuctionItem"})," component we display the NFT image, name, and description."]}),"\n",(0,a.jsx)(o.SQ,{value:"javascript",language:"javascript",showSingleFName:!0,children:(0,a.jsx)(o.Ey,{fname:"AuctionItem.jsx",url:"https://github.com/near-examples/auctions-tutorial/blob/main/frontend/src/components/AuctionItem.jsx"})}),"\n",(0,a.jsx)(t.p,{children:"Note that an image caching service is used to display the NFT image for better performance."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"making-a-bid",children:"Making a bid"}),"\n",(0,a.jsxs)(t.p,{children:["To make a bid we call the ",(0,a.jsx)(t.code,{children:"ft_transfer_call"})," method on the FT contract which subsequently calls ",(0,a.jsx)(t.code,{children:"ft_on_transfer"})," on the auction contract and attaches fungible tokens to the call."]}),"\n",(0,a.jsxs)(o.SQ,{value:"javascript",language:"javascript",children:[(0,a.jsx)(o.Ey,{fname:"index.js",url:"https://github.com/near-examples/auctions-tutorial/blob/main/frontend/src/pages/index.js#L95-L105",start:"95",end:"105"}),(0,a.jsx)(o.Ey,{fname:"near.js",url:"https://github.com/near-examples/auctions-tutorial/blob/main/frontend/src/wallets/near.js#L107-L126",start:"107",end:"126"})]}),"\n",(0,a.jsx)(t.p,{children:"We now multiply the bid amount by the decimals of the FT to get the correct amount to send. Since this method requires a 1 yoctoNEAR deposit the wallet will prompt the user to sign the transaction."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"claiming-the-auction",children:"Claiming the auction"}),"\n",(0,a.jsxs)(t.p,{children:["Once the auction is over (the current time is greater than the end time) the auction can be claimed. At this point, the timer will be hidden and a button to claim the auction will be displayed. Once clicked the ",(0,a.jsx)(t.code,{children:"claim"})," method will be called on the auction contract to send the highest bidder the NFT and the auctioneer the FTs."]}),"\n",(0,a.jsx)(o.SQ,{value:"javascript",language:"javascript",showSingleFName:!0,children:(0,a.jsx)(o.Ey,{fname:"index.js",url:"https://github.com/near-examples/auctions-tutorial/blob/main/frontend/src/pages/index.js#L107-L114",start:"107",end:"114"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsxs)(t.p,{children:["In this part of the tutorial, we have implemented a simple frontend for a NEAR contract. Along the way, you have learned how to use the wallet selector to sign the user in and out, how to view the contract\u2019s state, how to sign and send transactions, and use ",(0,a.jsx)(t.code,{children:"ft_transfer_call"})," from a frontend."]}),"\n",(0,a.jsxs)(t.p,{children:["While we can see the highest bid, we may want to see the auction's bidding history. Since the contract only stores the most recent bid, we need to use an indexer to pull historical data. In the ",(0,a.jsx)(t.a,{href:"/tutorials/auction/indexing-historical-data",children:"next part"})," of the tutorial, we'll look at querying historical data using an API endpoint."]})]})}function f(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var a=n(36905);const r={tabItem:"tabItem_Ymn6"};var i=n(85893);function s(e){var t=e.children,n=e.hidden,s=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(67294),r=n(36905),i=n(12466),s=n(16550),o=n(20469),l=n(91980),c=n(67392),d=n(20812);function h(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function u(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return h(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.lx)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,i=(0,s.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:r});return[(0,l._X)(o),(0,a.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function m(e){var t,n,r,i,s=e.defaultValue,l=e.queryString,c=void 0!==l&&l,h=e.groupId,m=u(e),g=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:m})})),j=g[0],x=g[1],b=f({queryString:c,groupId:h}),v=b[0],w=b[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),n=(0,d.Nk)(t),r=n[0],i=n[1],[r,(0,a.useCallback)((function(e){t&&i.set(e)}),[t,i])]),k=y[0],T=y[1],I=function(){var e=null!=v?v:k;return p({value:e,tabValues:m})?e:null}();return(0,o.Z)((function(){I&&x(I)}),[I]),{selectedValue:j,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);x(e),w(e),T(e)}),[w,T,m]),tabValues:m}}var g=n(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(85893);function b(e){var t=e.className,n=e.block,a=e.selectedValue,s=e.selectValue,o=e.tabValues,l=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=l.indexOf(t),r=o[n].value;r!==a&&(c(t),s(r))},h=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=l.indexOf(e.currentTarget)+1;n=null!=(a=l[r])?a:l[0];break;case"ArrowLeft":var i,s=l.indexOf(e.currentTarget)-1;n=null!=(i=l[s])?i:l[l.length-1]}null==(t=n)||t.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:o.map((function(e){var t=e.value,n=e.label,i=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return l.push(e)},onKeyDown:h,onClick:d},i,{className:(0,r.Z)("tabs__item",j.tabItem,null==i?void 0:i.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function v(e){var t=e.lazy,n=e.children,i=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=s.find((function(e){return e.props.value===i}));return o?(0,a.cloneElement)(o,{className:(0,r.Z)("margin-top--md",o.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==i})}))})}function w(e){var t=m(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",j.tabList),children:[(0,x.jsx)(b,Object.assign({},t,e)),(0,x.jsx)(v,Object.assign({},t,e))]})}function y(e){var t=(0,g.Z)();return(0,x.jsx)(w,Object.assign({},e,{children:h(e.children)}),String(t))}},71183:(e,t,n)=>{n.d(t,{O2:()=>f,Ey:()=>g,SQ:()=>m});var a=n(67294),r=n(74866),i=n(85162),s=n(74165),o=n(15861),l=n(1841),c=n.n(l),d=n(85893);function h(){return(h=(0,o.Z)((0,s.Z)().mark((function e(t,n,a){var r,i,o,l;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((i=localStorage.getItem(t+"-until"))&&i>Date.now())){e.next=5;break}r=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:r=e.sent,localStorage.setItem(t,r),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return o=r.split("\n"),n=n?Number(n)-1:0,a=a?Number(a):o.length,o=o.slice(n,a),l=o.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",o.map((function(e){return e.slice(l)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const u=function(e){var t=e.url,n=e.start,r=e.end,i=e.language,s=e.fname,o=e.metastring,l=(0,a.useState)("Loading..."),u=l[0],p=l[1];return(0,a.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],a=(t[1],new URL(n).pathname.split("/").slice(1)),r=a[0],i=a[1];return a[2],"https://raw.githubusercontent.com/"+r+"/"+i+"/"+a[3]+"/"+a.slice(4).join("/")}(t),a=function(e,t,n){return h.apply(this,arguments)}(e,n,r);a.then((function(e){return p(e)}))})),(0,d.jsxs)("div",{fname:s,children:[(0,d.jsx)(c(),{language:i,metastring:o+" showLineNumbers",children:u}),(0,d.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,d.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var p={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function f(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,d.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,d.jsx)(i.Z,{value:e.props.value,label:p[e.props.value],children:e})}))})}function m(e){var t=e.children,n=e.language,a=e.showSingleFName;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,a=(n.children,n.url),r=n.start,i=n.end,s=n.fname;if(e.type===g)return g({url:a,start:r,end:i,language:t,fname:s});return e}(e,n)})),1!=t.length||a?(0,d.jsx)(r.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,d.jsx)(i.Z,{value:t,label:e.props.fname,children:e})}))}):(0,d.jsx)(i.Z,{value:0,label:t[0].props.fname,children:t[0]})}function g(e){var t=e.url,n=e.start,a=e.end,r=e.language,i=e.fname,s=e.metastring;return u({url:t,start:n,end:a,language:r,fname:i,metastring:s})}}}]);