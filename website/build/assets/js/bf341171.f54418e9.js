"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[502],{14510:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var t=a(85893),r=a(11151);const i={id:"migrate-from-near-lake",title:"Migrate from NEAR Lake framework",sidebar_label:"Migrate from Lake framework"},s=void 0,d={id:"build/data-infrastructure/query-api/migrate-from-near-lake",title:"Migrate from NEAR Lake framework",description:"In this article you'll learn how to migrate your NEAR Lake Framework JavaScript indexer to Near QueryAPI, a fully managed solution to build indexer functions,",source:"@site/../docs/2.build/6.data-infrastructure/query-api/migrate.md",sourceDirName:"2.build/6.data-infrastructure/query-api",slug:"/build/data-infrastructure/query-api/migrate-from-near-lake",permalink:"/build/data-infrastructure/query-api/migrate-from-near-lake",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/6.data-infrastructure/query-api/migrate.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:171872066e4,frontMatter:{id:"migrate-from-near-lake",title:"Migrate from NEAR Lake framework",sidebar_label:"Migrate from Lake framework"},sidebar:"build",previous:{title:"Access & Query Historical data",permalink:"/build/data-infrastructure/query-api/query-data"},next:{title:"Lake Overview",permalink:"/build/data-infrastructure/lake-framework/near-lake"}},o={},l=[{value:"Basic migration",id:"basic-migration",level:2},{value:"Migrating to QueryAPI",id:"migrating-to-queryapi",level:3},{value:"Database storage",id:"database-storage",level:3},{value:"Advanced migration",id:"advanced-migration",level:2},{value:"Migrating to QueryAPI",id:"migrating-to-queryapi-1",level:3},{value:"Database storage",id:"database-storage-1",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["In this article you'll learn how to migrate your ",(0,t.jsx)(n.a,{href:"/concepts/advanced/near-lake-framework",children:"NEAR Lake Framework"})," JavaScript indexer to ",(0,t.jsx)(n.a,{href:"/build/data-infrastructure/query-api/intro",children:"Near QueryAPI"}),", a fully managed solution to build indexer functions,\nextract on-chain data, store it in a database, and be able to query it using GraphQL endpoints."]}),"\n",(0,t.jsx)(n.admonition,{title:"Supported languages",type:"info",children:(0,t.jsx)(n.p,{children:"Currently QueryAPI only supports JavaScript, so if your indexer code uses TypeScript, Python, or Rust, you'll have to re-write your indexing logic in JS before you can migrate it."})}),"\n",(0,t.jsx)(n.h2,{id:"basic-migration",children:"Basic migration"}),"\n",(0,t.jsxs)(n.p,{children:["build/near-data-infrastructure/lake-framework/building-indexers/js-lake-indexer\nLet's take a ",(0,t.jsx)(n.a,{href:"/build/data-infrastructure/lake-framework/building-indexers/js-lake-indexer",children:"basic JS indexer"})," built with NEAR Lake Framework as an example.\nThis indexer simply logs the Block height and the number of shards for each indexed block, using an ",(0,t.jsx)(n.a,{href:"/build/data-infrastructure/lake-framework/building-indexers/js-lake-indexer#create-indexer-handler",children:"indexer handler"})," function ",(0,t.jsx)(n.code,{children:"handleStreamerMessage"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Migrating this basic indexer to QueryAPI is simple. You only need to migrate the code from the ",(0,t.jsx)(n.code,{children:"handleStreamerMessage"})," function:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"async function handleStreamerMessage(streamerMessage: types.StreamerMessage): Promise<void> {\n    console.log(`\n        Block #${streamerMessage.block.header.height}\n        Shards: ${streamerMessage.shards.length}\n    `);\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"migrating-to-queryapi",children:"Migrating to QueryAPI"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["To start the migration process, ",(0,t.jsx)(n.a,{href:"/build/data-infrastructure/query-api/indexers#creating-an-indexer",children:"create a new indexer"})," using ",(0,t.jsx)(n.a,{href:"https://dev.near.org/dataplatform.near/widget/QueryApi.App?view=create-new-indexer",children:"QueryAPI"}),". You should see a similar interface like this:"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"QueryAPI Indexer Dashboard",src:a(6419).Z+"",width:"1166",height:"660"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Since QueryAPI keeps a compatibility layer with Lake Framework, you don't need to change any references to ",(0,t.jsx)(n.code,{children:"streamerMessage"})," in your indexer function. Just change the function definition to:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"function handleStreamerMessage(streamerMessage) {\n    // ... Lake framework indexer code\n}\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Next, add your migrated indexer function to the ",(0,t.jsx)(n.code,{children:"getBlock(...)"})," method, and simply call your function passing ",(0,t.jsx)(n.code,{children:"block.streamerMessage"})," as parameter:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"async function getBlock(block: Block) {\n  // Add your code here\n\n  function handleStreamerMessage(streamerMessage) {\n    console.log(`\n        Block #${streamerMessage.block.header.height}\n        Shards: ${streamerMessage.shards.length}\n    `);\n    }\n\n  handleStreamerMessage(block.streamerMessage);\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["That's all! The basic Lake Framework JS indexer has been migrated to QueryAPI, and you can test it out by using ",(0,t.jsx)(n.a,{href:"/build/data-infrastructure/query-api/index-functions#local-debug-mode",children:"Debug Mode"}),". If you run the indexer using local debug mode, you should see an output like:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Block #106812523\n    Shards: 4\n"})}),"\n",(0,t.jsx)(n.h3,{id:"database-storage",children:"Database storage"}),"\n",(0,t.jsx)(n.p,{children:"If you want to take advantage of QueryAPI's database features, you can also store the indexer results in a Postgres DB."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"First, create the database schema:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE\n  "basic" (\n    "block_height" BIGINT NOT NULL,\n    "shards" INTEGER NOT NULL,\n    PRIMARY KEY ("block_height")\n  );\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["In your indexer JavaScript code, use the ",(0,t.jsx)(n.a,{href:"/build/data-infrastructure/query-api/context-object#db",children:(0,t.jsx)(n.code,{children:"context.db"})})," object  to store the results:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"    const basicData = {\n      block_height: streamerMessage.block.header.height,\n      shards: streamerMessage.shards.length,\n    };\n\n    context.db.Basic.insert(basicData);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"advanced-migration",children:"Advanced migration"}),"\n",(0,t.jsxs)(n.p,{children:["For this example, let's take the TypeScript ",(0,t.jsx)(n.a,{href:"/build/data-infrastructure/lake-framework/building-indexers/nft-indexer",children:"NFT indexer"})," built with NEAR Lake Framework as reference. This indexer is watching for ",(0,t.jsx)(n.code,{children:"nft_mint"})," ",(0,t.jsx)(n.a,{href:"https://nomicon.io/Standards/EventsFormat",children:"Events"})," and prints some relevant data about minted NFTs."]}),"\n",(0,t.jsxs)(n.p,{children:["As with the previous example, moving this NFT indexer to QueryAPI requires to migrate the code from the ",(0,t.jsx)(n.a,{href:"https://github.com/near-examples/near-lake-nft-indexer/blob/5acd543c54ce8025bdc9a88d111df43d8d4d05b8/index.ts#L32",children:(0,t.jsx)(n.code,{children:"handleStreamerMessage"})})," function. But since it was done in TypeScript, it also needs some additional work as it needs to re-written in JavaScript."]}),"\n",(0,t.jsx)(n.h3,{id:"migrating-to-queryapi-1",children:"Migrating to QueryAPI"}),"\n",(0,t.jsxs)(n.p,{children:["To migrate the code, you can take advantage of the ",(0,t.jsx)(n.a,{href:"https://near.github.io/near-lake-framework-js/modules/_near_lake_primitives.html",children:(0,t.jsx)(n.code,{children:"near-lake-primitives"})})," provided by QueryAPI, and simplify the indexer logic. For example:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["to get all ",(0,t.jsx)(n.a,{href:"https://near.github.io/near-lake-framework-js/classes/_near_lake_primitives.events.Event.html",children:(0,t.jsx)(n.code,{children:"Events"})})," in a ",(0,t.jsx)(n.code,{children:"Block"}),", you can simply call ",(0,t.jsx)(n.code,{children:"block.events()"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["you don't need to iterate through shards and execution outcomes, nor manually parse the ",(0,t.jsx)(n.code,{children:"EVENT_JSON"})," logs to detect events (it's handled by QueryAPI)"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Here's a JavaScript implementation of the NFT indexer using QueryAPI features, that provides the same output as the original indexer:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'async function getBlock(block: Block) {\n  let output = [];\n\n  for (let ev of block.events()) {\n    const r = block.actionByReceiptId(ev.relatedReceiptId);\n    const createdOn = new Date(block.streamerMessage.block.header.timestamp / 1000000);\n\n    try {\n      let event = ev.rawEvent;\n\n      if (event.standard === "nep171" && event.event === "nft_mint") {\n        let nfts = [];\n        let marketplace = "unknown";\n\n        if (r.receiverId.endsWith(".paras.near"))\n        {\n          marketplace = "Paras";\n          nfts = event.data.map(eventData => ({\n                owner: eventData.owner_id,\n                links: eventData.token_ids.map(\n                  tokenId => `https://paras.id/token/${r.receiverId}::${tokenId.split(":")[0]}/${tokenId}`)\n                })\n              );\n        }\n        else if (r.receiverId.match(/\\.mintbase\\d+\\.near$/))\n        {\n          marketplace = "Mintbase";\n          nfts = event.data.map(eventData => {\n            const memo = JSON.parse(eventData.memo)\n            return {\n              owner: eventData.owner_id,\n              links: [`https://mintbase.io/thing/${memo["meta_id"]}:${r.receiverId}`]\n            }\n          });\n        }\n\n        output.push({\n          receiptId: ev.relatedReceiptId,\n          marketplace,\n          createdOn,\n          nfts,\n        });\n\n      }\n    } catch (e) {\n      console.log(e);\n    }\n  }\n\n  if (output.length) {\n    console.log(`We caught freshly minted NFTs!`);\n    console.dir(output, { depth: 5 });\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["That's all! The NFT indexer has been migrated to QueryAPI, and you can test it out by using ",(0,t.jsx)(n.a,{href:"/build/data-infrastructure/query-api/index-functions#local-debug-mode",children:"Debug Mode"}),". If you run the indexer using local debug mode, you should see an output like:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'Block Height #66264722\n\nWe caught freshly minted NFTs!\n\n[\n  {\n    "receiptId": "BAVZ92XdbkAPX4DkqW5gjCvrhLX6kGq8nD8HkhQFVt5q",\n    "marketplace": "Mintbase",\n    "createdOn": "2022-05-24T09:36:00.411Z",\n    "nfts": [\n      {\n        "owner": "chiming.near",\n        "links": [\n          "https://mintbase.io/thing/HOTcn6LTo3qTq8bUbB7VwA1GfSDYx2fYOqvP0L_N5Es:vnartistsdao.mintbase1.near"\n        ]\n      }\n    ]\n  }\n]\n'})}),"\n",(0,t.jsx)(n.h3,{id:"database-storage-1",children:"Database storage"}),"\n",(0,t.jsx)(n.p,{children:"If you want to take advantage of QueryAPI's database features, you can also store the indexer results in a Postgres DB."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"First, create the database schema:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE\n  "nfts" (\n    "id" SERIAL NOT NULL,\n    "marketplace" TEXT,\n    "block_height" BIGINT,\n    "timestamp" DATETIME,\n    "receipt_id" TEXT,\n    "nft_data" TEXT,\n    PRIMARY KEY ("id", "block_height")\n  );\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["In your indexer JavaScript code, use the ",(0,t.jsx)(n.a,{href:"/build/data-infrastructure/query-api/context-object#db",children:(0,t.jsx)(n.code,{children:"context.db"})})," object  to store the results:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// ... previous code ...\n        output.push({\n          receiptId: ev.relatedReceiptId,\n          marketplace,\n          createdOn,\n          nfts,\n        });\n\n        const nftMintData = {\n          marketplace: marketplace,\n          block_height: block.header().height,\n          timestamp: createdOn,\n          receipt_id: r.receiptId,\n          nft_data: JSON.stringify(event.data),\n        };\n\n        context.db.Nfts.insert(nftMintData);\n      }\n    } catch (e) {\n      console.log(e);\n    }\n  }\n// ... code continues ...\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["You can find the migrated NFT indexer source code by ",(0,t.jsx)(n.a,{href:"https://dev.near.org/dataplatform.near/widget/QueryApi.App?selectedIndexerPath=bucanero.near/nft_migrated",children:"clicking here"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},6419:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/QAPIScreen2-95a2178fe9edc5df676ee6d3a1859942.png"},11151:(e,n,a)=>{a.d(n,{Z:()=>d,a:()=>s});var t=a(67294);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);