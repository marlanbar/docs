"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6423],{89362:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(85893),s=t(11151);const r={id:"big-query",title:"BigQuery Public Dataset",sidebar_label:"BigQuery"},c=void 0,a={id:"build/data-infrastructure/big-query",title:"BigQuery Public Dataset",description:"Blockchain data indexing in NEAR Public Lakehouse is for anyone wanting to understand blockchain data. This includes:",source:"@site/../docs/2.build/6.data-infrastructure/big-query.md",sourceDirName:"2.build/6.data-infrastructure",slug:"/build/data-infrastructure/big-query",permalink:"/build/data-infrastructure/big-query",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/6.data-infrastructure/big-query.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1721309601e3,frontMatter:{id:"big-query",title:"BigQuery Public Dataset",sidebar_label:"BigQuery"},sidebar:"build",previous:{title:"Data APIs",permalink:"/build/data-infrastructure/data-apis"},next:{title:"Lake Framework",permalink:"/concepts/advanced/near-lake-framework"}},o={},l=[{value:"Getting started",id:"getting-started",level:2},{value:"Example Queries",id:"example-queries",level:3},{value:"How much it costs?",id:"how-much-it-costs",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Available Data",id:"available-data",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Blockchain data indexing in NEAR Public Lakehouse is for anyone wanting to understand blockchain data. This includes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Users"}),": create queries to track NEAR assets, monitor transactions, or analyze on-chain events at a massive scale."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Researchers"}),": use indexed data for data science tasks, including on-chain activities, identifying trends, or feeding AI/ML pipelines for predictive analysis."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Startups"}),": can use NEAR's indexed data for deep insights on user engagement, smart contract utilization, or insights across tokens and NFT adoption."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Benefits:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"NEAR instant insights"}),": Historical on-chain data queried at scale."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Cost-effective"}),": eliminate the need to store and process bulk NEAR protocol data; query as little or as much data as preferred."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Easy to use"}),": no prior experience with blockchain technology is required; bring a general knowledge of SQL to unlock insights."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Login into your ",(0,i.jsx)(n.a,{href:"https://console.cloud.google.com/",children:"Google Cloud Account"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Open the ",(0,i.jsx)(n.a,{href:"https://console.cloud.google.com/marketplace/product/bigquery-public-data/crypto-near-mainnet",children:"NEAR Protocol BigQuery Public Dataset"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click in the ",(0,i.jsx)("kbd",{children:(0,i.jsx)(n.a,{href:"https://console.cloud.google.com/bigquery?p=bigquery-public-data&d=crypto_near_mainnet_us&page=dataset",children:"VIEW DATASET"})})," button."]}),"\n",(0,i.jsxs)(n.li,{children:["Click in the ",(0,i.jsx)("kbd",{children:"+"})," to create a new tab and write your query, click in the ",(0,i.jsx)("kbd",{children:"RUN"})," button, and check the ",(0,i.jsx)(n.code,{children:"Query results"})," below the query."]}),"\n",(0,i.jsx)(n.li,{children:"Done :)"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://github.com/near/near-public-lakehouse",children:"NEAR Public Lakehouse repository"})," contains the source code for ingesting NEAR Protocol data stored as JSON files in AWS S3 by ",(0,i.jsx)(n.a,{href:"https://github.com/near/near-lake-indexer",children:"NEAR Lake Indexer"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"example-queries",children:"Example Queries"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"How many unique signers and accounts have interacted with my smart contract per day?"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT\n  ra.block_date collected_for_day,\n  COUNT(DISTINCT t.signer_account_id) as total_signers,\n  COUNT(DISTINCT ra.receipt_predecessor_account_id) as total_accounts\nFROM `bigquery-public-data.crypto_near_mainnet_us.receipt_actions` ra\n  JOIN `bigquery-public-data.crypto_near_mainnet_us.receipt_origin_transaction` ro ON ro.receipt_id = ra.receipt_id\n  JOIN `bigquery-public-data.crypto_near_mainnet_us.transactions` t ON ro.originated_from_transaction_hash = t.transaction_hash\nWHERE ra.action_kind = 'FUNCTION_CALL'\n  AND ra.receipt_receiver_account_id = 'social.near' -- change to your contract\nGROUP BY 1\nORDER BY 1 DESC;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"how-much-it-costs",children:"How much it costs?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["NEAR pays for the storage and doesn't charge you to use the public dataset.","\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["To learn more about BigQuery public datasets ",(0,i.jsx)(n.a,{href:"https://cloud.google.com/bigquery/public-data",children:"check this page"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:['Google GCP charges for the queries that you perform on the data. For example, in today\'s price "Sep 1st, 2023" the On-demand (per TB) query pricing is $6.25 per TB where the first 1 TB per month is free.',"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Check ",(0,i.jsx)(n.a,{href:"https://cloud.google.com/bigquery/pricing#analysis_pricing_models",children:"Google's pricing page"})," for detailed pricing info, options, and best practices."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["You can check how much data it will query before running it in the BigQuery console UI. Again, since BigQuery uses a columnar data structure and partitions, it's recommended to select only the columns and partitions (",(0,i.jsx)(n.code,{children:"block_date"}),") needed to avoid unnecessary query costs."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Query Costs",src:t(49458).Z+"",title:"BQ Query Costs",width:"958",height:"148"})}),"\n",(0,i.jsx)(n.h2,{id:"architecture",children:"Architecture"}),"\n",(0,i.jsxs)(n.p,{children:["The data is loaded in a streaming fashion using ",(0,i.jsx)(n.a,{href:"https://docs.gcp.databricks.com/ingestion/auto-loader/index.html",children:"Databricks Autoloader"})," into raw/bronze tables, and transformed with ",(0,i.jsx)(n.a,{href:"https://www.databricks.com/product/delta-live-tables",children:"Databricks Delta Live Tables"})," streaming jobs into cleaned/enriched/silver tables."]}),"\n",(0,i.jsxs)(n.p,{children:["The silver tables are also copied into the ",(0,i.jsx)(n.a,{href:"https://cloud.google.com/bigquery/public-data",children:"GCP BigQuery Public Dataset"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Architecture",src:t(48770).Z+"",title:"Architecture",width:"891",height:"270"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://www.databricks.com/glossary/medallion-architecture",children:"Databricks Medallion Architecture"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"available-data",children:"Available Data"}),"\n",(0,i.jsxs)(n.p,{children:["The current data that NEAR is providing was inspired by ",(0,i.jsx)(n.a,{href:"https://github.com/near/near-indexer-for-explorer/",children:"NEAR Indexer for Explorer"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"NEAR plans to improve the data available in the NEAR Public Lakehouse making it easier to consume by denormalizing some tables."})}),"\n",(0,i.jsx)(n.p,{children:"The tables available in the NEAR Public Lakehouse are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"blocks"}),": A structure that represents an entire block in the NEAR blockchain. ",(0,i.jsx)(n.code,{children:"Block"})," is the main entity in NEAR Protocol blockchain. Blocks are produced in NEAR Protocol every second."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"chunks"}),": A structure that represents a chunk in the NEAR blockchain. ",(0,i.jsx)(n.code,{children:"Chunk"})," of a ",(0,i.jsx)(n.code,{children:"Block"})," is a part of a ",(0,i.jsx)(n.code,{children:"Block"})," from a ",(0,i.jsx)(n.code,{children:"Shard"}),". The collection of ",(0,i.jsx)(n.code,{children:"Chunks"})," of the ",(0,i.jsx)(n.code,{children:"Block"})," forms the NEAR Protocol Block. ",(0,i.jsx)(n.code,{children:"Chunk"})," contains all the structures that make the ",(0,i.jsx)(n.code,{children:"Block"}),": ",(0,i.jsx)(n.code,{children:"Transactions"}),", ",(0,i.jsx)(n.a,{href:"https://nomicon.io/RuntimeSpec/Receipts",children:(0,i.jsx)(n.code,{children:"Receipts"})}),", and ",(0,i.jsx)(n.code,{children:"Chunk Header"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"transactions"}),": ",(0,i.jsx)(n.a,{href:"/build/data-infrastructure/lake-data-structures/transaction#definition",children:(0,i.jsx)(n.code,{children:"Transaction"})})," is the main way of interaction between a user and a blockchain. Transaction contains: Signer account ID, Receiver account ID, and Actions."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"execution_outcomes"}),": Execution outcome is the result of execution of ",(0,i.jsx)(n.code,{children:"Transaction"})," or ",(0,i.jsx)(n.code,{children:"Receipt"}),". In the result of the Transaction execution will always be a Receipt."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"receipt_details"}),": All cross-contract (we assume that each account lives in its own shard) communication in Near happens through Receipts. Receipts are stateful in a sense that they serve not only as messages between accounts but also can be stored in the account storage to await ",(0,i.jsx)(n.code,{children:"DataReceipts"}),". Each receipt has a ",(0,i.jsx)(n.code,{children:"predecessor_id"})," (who sent it) and ",(0,i.jsx)(n.code,{children:"receiver_id"})," the current account."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"receipt_origin"}),": Tracks the transaction that originated the receipt."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"receipt_actions"}),": Action Receipt represents a request to apply actions on the ",(0,i.jsx)(n.code,{children:"receiver_id"})," side. It could be derived as a result of a ",(0,i.jsx)(n.code,{children:"Transaction"})," execution or another ",(0,i.jsx)(n.code,{children:"ACTION"})," Receipt processing. Action kind can be: ",(0,i.jsx)(n.code,{children:"ADD_KEY"}),", ",(0,i.jsx)(n.code,{children:"CREATE_ACCOUNT"}),", ",(0,i.jsx)(n.code,{children:"DELEGATE_ACTION"}),", ",(0,i.jsx)(n.code,{children:"DELETE_ACCOUNT"}),", ",(0,i.jsx)(n.code,{children:"DELETE_KEY"}),", ",(0,i.jsx)(n.code,{children:"DEPLOY_CONTRACT"}),", ",(0,i.jsx)(n.code,{children:"FUNCTION_CALL"}),", ",(0,i.jsx)(n.code,{children:"STAKE"}),", ",(0,i.jsx)(n.code,{children:"TRANSFER"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"receipts (view)"}),": It's recommended to select only the columns and partitions (",(0,i.jsx)(n.code,{children:"block_date"}),") needed to avoid unnecessary query costs. This view join the receipt details, the transaction that originated the receipt and the receipt execution outcome."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"account_changes"}),": Each account has an associated state where it stores its metadata and all the contract-related data (contract's code + storage)."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Additional information about the data",type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Skipped Blocks: NEAR Blockchain can contain skipped blocks, e.g. block ",(0,i.jsx)(n.code,{children:"57730443"}),". For these cases we can find the block for the chunk data using the ",(0,i.jsx)(n.code,{children:"prev_block_hash"})," column, e.g. ",(0,i.jsx)(n.code,{children:"SELECT * FROM chunks c JOIN blocks b ON c.chunk.header.prev_block_hash = b.header.prev_hash"}),"."]}),"\n"]})}),"\n",(0,i.jsx)(n.admonition,{title:"References",type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/concepts/basics/protocol",children:"Protocol documentation"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/concepts/data-flow/near-data-flow",children:"Near Data flow"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/build/data-infrastructure/lake-data-structures/toc",children:"Lake Data structures"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://nomicon.io/",children:"Protocol specification"})}),"\n"]})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},48770:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Architecture-0072c158e2d788e83221e82e33066898.png"},49458:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/BQ_Query_Cost-f58f9f425405b2a77bfe1e7dcbf2c29b.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>c});var i=t(67294);const s={},r=i.createContext(s);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);