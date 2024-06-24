"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3226],{61016:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(85893),t=n(11151);const s={sidebar_label:"Lake Framework"},o="NEAR Lake Framework",i={id:"concepts/advanced/near-lake-framework",title:"NEAR Lake Framework",description:"https://github.com/near/near-lake-framework/",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/1.concepts/3.advanced/near-lake-framework.md",sourceDirName:"1.concepts/3.advanced",slug:"/concepts/advanced/near-lake-framework",permalink:"/zh-CN/concepts/advanced/near-lake-framework",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/3.advanced/near-lake-framework.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1718378911e3,frontMatter:{sidebar_label:"Lake Framework"},sidebar:"concepts",previous:{title:"Indexer Framework",permalink:"/zh-CN/concepts/advanced/near-indexer-framework"},next:{title:"Runtime",permalink:"/zh-CN/concepts/basics/runtime"}},d={},c=[{value:"Description",id:"description",level:2},{value:"How does it compare to NEAR Indexer Framework?",id:"how-does-it-compare-to-near-indexer-framework",level:2},{value:"Limitations",id:"limitations",level:2},{value:"What is the cost of running a custom indexer based on NEAR Lake?",id:"what-is-the-cost-of-running-a-custom-indexer-based-on-near-lake",level:2},{value:"AWS S3 cost breakdown",id:"aws-s3-cost-breakdown",level:3},{value:"Examples &amp; Tutorials",id:"examples--tutorials",level:2}];function l(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h1,{id:"near-lake-framework",children:"NEAR Lake Framework"}),"\n",(0,a.jsx)(r.admonition,{title:"GitHub repo",type:"note",children:(0,a.jsx)(r.p,{children:(0,a.jsx)(r.a,{href:"https://github.com/near/near-lake-framework/",children:"https://github.com/near/near-lake-framework/"})})}),"\n",(0,a.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(r.p,{children:["NEAR Lake Framework is an ecosystem of library companions to ",(0,a.jsx)(r.a,{href:"/build/data-infrastructure/lake-framework/near-lake",children:"NEAR Lake"}),". They allow you to build your own indexer that subscribes to the stream of blocks from the ",(0,a.jsx)(r.a,{href:"/build/data-infrastructure/lake-framework/near-lake",children:"NEAR Lake"})," data source and create your own logic to process the NEAR Protocol data in the programming languages of your choice (at the moment, there are implementations in ",(0,a.jsx)(r.a,{href:"http://pypi.org/project/near-lake-framework",children:"Python"}),", ",(0,a.jsx)(r.a,{href:"https://www.npmjs.com/package/near-lake-framework",children:"JavaScript"}),", and ",(0,a.jsx)(r.a,{href:"https://crates.io/crates/near-lake-framework",children:"Rust"}),")."]}),"\n",(0,a.jsxs)(r.admonition,{title:"NEAR Lake Framework announcement",type:"tip",children:[(0,a.jsx)(r.p,{children:"We have announced the release of NEAR Lake Framework on NEAR Governance Forum."}),(0,a.jsxs)(r.p,{children:["Please, read the post ",(0,a.jsx)(r.a,{href:"https://gov.near.org/t/announcement-near-lake-framework-brand-new-word-in-indexer-building-approach/17668",children:"here"}),"."]})]}),"\n",(0,a.jsxs)(r.h2,{id:"how-does-it-compare-to-near-indexer-framework",children:["How does it compare to ",(0,a.jsx)(r.a,{href:"/zh-CN/concepts/advanced/near-indexer-framework",children:"NEAR Indexer Framework"}),"?"]}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Feature"}),(0,a.jsx)(r.th,{children:"Indexer Framework"}),(0,a.jsx)(r.th,{children:"Lake Framework"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Allows to follow the blocks and transactions in the NEAR Protocol"}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.strong,{children:"Yes"})}),(0,a.jsxs)(r.td,{children:[(0,a.jsx)(r.strong,{children:"Yes"}),(0,a.jsx)("br",{}),"(but only mainnet and testnet networks)"]})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Decentralized"}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.strong,{children:"Yes"})}),(0,a.jsxs)(r.td,{children:["No",(0,a.jsx)("br",{}),"(Pagoda Inc dumps the blocks to AWS S3)"]})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Reaction time (end-to-end)"}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.a,{href:"/zh-CN/concepts/advanced/near-indexer-framework#limitations",children:"minimum 3.8s (estimated average 5-7s)"})}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.a,{href:"#limitations",children:"minimum 3.9s (estimated average 6-8s)"})})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Reaction time (framework overhead only)"}),(0,a.jsx)(r.td,{children:"0.1s"}),(0,a.jsx)(r.td,{children:"0.2-2.2s"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Estimated cost of infrastructure"}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.a,{href:"https://near-nodes.io/rpc/hardware-rpc",children:"$500+/mo"})}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.a,{href:"#what-is-the-cost-of-running-a-custom-indexer-based-on-near-lake",children:(0,a.jsx)(r.strong,{children:"$20/mo"})})})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Ease of maintenance"}),(0,a.jsxs)(r.td,{children:["Advanced",(0,a.jsx)("br",{}),"(need to follow every nearcore upgrade, and sync state)"]}),(0,a.jsxs)(r.td,{children:[(0,a.jsx)(r.strong,{children:"Easy"}),(0,a.jsx)("br",{}),"(deploy once and forget)"]})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"How long will it take to start?"}),(0,a.jsx)(r.td,{children:"days (on mainnet/testnet)"}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.strong,{children:"seconds"})})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Ease of local development"}),(0,a.jsxs)(r.td,{children:["Advanced",(0,a.jsx)("br",{}),"(localnet is a good option, but testing on testnet/mainnet is too heavy)"]}),(0,a.jsxs)(r.td,{children:[(0,a.jsx)(r.strong,{children:"Easy"}),(0,a.jsx)("br",{}),"(see ",(0,a.jsx)(r.a,{href:"/build/data-infrastructure/lake-framework/near-lake-state-changes-indexer",children:"tutorials"}),")"]})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Programming languages that a custom indexer can be implemented with"}),(0,a.jsx)(r.td,{children:"Rust only"}),(0,a.jsxs)(r.td,{children:[(0,a.jsx)(r.strong,{children:"Any"}),(0,a.jsx)("br",{}),"(currently, helper packages are released in ",(0,a.jsx)(r.a,{href:"http://pypi.org/project/near-lake-framework",children:"Python"}),", ",(0,a.jsx)(r.a,{href:"https://www.npmjs.com/package/near-lake-framework",children:"JavaScript"}),", and ",(0,a.jsx)(r.a,{href:"https://crates.io/crates/near-lake-framework",children:"Rust"}),")"]})]})]})]}),"\n",(0,a.jsx)(r.h2,{id:"limitations",children:"Limitations"}),"\n",(0,a.jsxs)(r.p,{children:["Lake Framework relies on the data being dumped to AWS S3 from ",(0,a.jsx)(r.a,{href:"https://github.com/near/near-lake-indexer",children:"NEAR Lake Indexer"})," which is based on ",(0,a.jsx)(r.a,{href:"/zh-CN/concepts/advanced/near-indexer-framework",children:"NEAR Indexer Framework"}),". Thus, Lake Framework is centralized around AWS S3 storage and also around maintainers of NEAR Lake Indexer nodes (Pagoda Inc). This is the tradeoff you might still want to take given all the other benefits mentioned above. Thus, Lake Framework is centralized around AWS S3 storage and also around maintainers of NEAR Lake Indexer nodes (Pagoda Inc). This is the tradeoff you might still want to take given all the other benefits mentioned above."]}),"\n",(0,a.jsxs)(r.p,{children:["Indexers based on the Lake Framework inherit ",(0,a.jsx)(r.a,{href:"/zh-CN/concepts/advanced/near-indexer-framework#limitations",children:"the latency characteristics of Indexer Framework"})," and extra latency of dumping to and reading from AWS S3, which is estimated to add at least 50ms delay while writing to S3, and 50ms on polling and reading from S3 (to make the polling cost-efficient, we default to polling only every 2s, so in the worst case you may observe an additional 2-second latency). Thus, Lake Framework adds 0.1-2.1s latency on top of Indexer Framework. Yet, again, most of the latency is there due to the finalization delay and both Indexer Framework and Lake Framework add quite a minimum overhead. Thus, Lake Framework adds 0.1-2.1s latency on top of Indexer Framework. Yet, again, most of the latency is there due to the finalization delay and both Indexer Framework and Lake Framework add quite a minimum overhead."]}),"\n",(0,a.jsx)(r.h2,{id:"what-is-the-cost-of-running-a-custom-indexer-based-on-near-lake",children:"What is the cost of running a custom indexer based on NEAR Lake?"}),"\n",(0,a.jsx)(r.p,{children:"Indexers based on NEAR Lake consume 100-500MB of RAM depending on the size of the preloading queue, it does not require any storage, and it can potentially run even on Raspberry PI."}),"\n",(0,a.jsx)(r.p,{children:"Getting the blockchain data from S3 will cost around $18.15 per month as NEAR Lake configured S3 buckets in such a way that the reader is paying the costs."}),"\n",(0,a.jsx)(r.h3,{id:"aws-s3-cost-breakdown",children:"AWS S3 cost breakdown"}),"\n",(0,a.jsx)(r.p,{children:"Assuming NEAR Protocol produces exactly 1 block per second (which is really not, the average block production time is 1.3s). A full day consists of 86400 seconds, that's the max number of blocks that can be produced. A full day consists of 86400 seconds, that's the max number of blocks that can be produced."}),"\n",(0,a.jsxs)(r.p,{children:["According the ",(0,a.jsx)(r.a,{href:"https://aws.amazon.com/s3/pricing/?nc1=h_ls",children:"Amazon S3 prices"})," ",(0,a.jsx)(r.code,{children:"list"})," requests are charged for $0.005 per 1000 requests and ",(0,a.jsx)(r.code,{children:"get"})," is charged for $0.0004 per 1000 requests."]}),"\n",(0,a.jsx)(r.p,{children:"Calculations (assuming we are following the tip of the network all the time):"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{children:"86400 blocks per day * 5 requests for each block / 1000 requests * $0.0004 per 1k requests = $0.173 * 30 days = $5.19\n"})}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Note:"})," 5 requests for each block means we have 4 shards (1 file for common block data and 4 separate files for each shard)"]}),"\n",(0,a.jsxs)(r.p,{children:["And a number of ",(0,a.jsx)(r.code,{children:"list"})," requests we need to perform for 30 days:"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{children:"86400 blocks per day / 1000 requests * $0.005 per 1k list requests = $0.432 * 30 days = $12.96\n\n$5.19 + $12.96 = $18.15\n"})}),"\n",(0,a.jsx)(r.p,{children:"Note, the price depends on the number of shards."}),"\n",(0,a.jsx)(r.h2,{id:"examples--tutorials",children:"Examples & Tutorials"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"https://github.com/near-examples/near-lake-raw-printer",children:(0,a.jsx)(r.code,{children:"near-examples/near-lake-raw-printer"})}),": simple example of a data printer built on top of NEAR Lake Framework"]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"https://github.com/near-examples/near-lake-accounts-watcher",children:(0,a.jsx)(r.code,{children:"near-examples/near-lake-accounts-watcher"})}),": source code for a video tutorial on how to use the NEAR Lake Framework"]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"https://github.com/near-examples/indexer-tx-watcher-example-lake",children:(0,a.jsx)(r.code,{children:"near-examples/indexer-tx-watcher-example-lake"})})," indexer example that watches for transaction for specified accounts/contracts build on top of NEAR Lake Framework"]}),"\n"]}),"\n",(0,a.jsx)(r.admonition,{title:"Tutorials",type:"note",children:(0,a.jsxs)(r.p,{children:["See ",(0,a.jsx)(r.a,{href:"/build/data-infrastructure/lake-framework/near-lake-state-changes-indexer",children:"Tutorials page"})]})})]})}function h(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>o});var a=n(67294);const t={},s=a.createContext(t);function o(e){const r=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(s.Provider,{value:r},e.children)}}}]);