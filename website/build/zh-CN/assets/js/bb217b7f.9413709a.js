"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1222],{47131:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=r(85893),a=r(11151);const i={id:"near-lake",sidebar_label:"Lake Overview",title:"NEAR Lake Indexer"},o=void 0,s={id:"build/data-infrastructure/lake-framework/near-lake",title:"NEAR Lake Indexer",description:"NEAR Lake is an indexer built on top of NEAR Indexer Framework to watch the network and store all the event logs such as FT Events and NFT Events as JSON files on AWS S3.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/2.build/6.data-infrastructure/lake-framework/near-lake.md",sourceDirName:"2.build/6.data-infrastructure/lake-framework",slug:"/build/data-infrastructure/lake-framework/near-lake",permalink:"/zh-CN/build/data-infrastructure/lake-framework/near-lake",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/6.data-infrastructure/lake-framework/near-lake.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1719220968e3,frontMatter:{id:"near-lake",sidebar_label:"Lake Overview",title:"NEAR Lake Indexer"},sidebar:"build",previous:{title:"Migrate from Lake framework",permalink:"/zh-CN/build/data-infrastructure/query-api/migrate-from-near-lake"},next:{title:"NEAR Lake StateChanges indexer tutorial",permalink:"/zh-CN/build/data-infrastructure/lake-framework/near-lake-state-changes-indexer"}},d={},c=[{value:"How it works",id:"how-it-works",level:3},{value:"Data structure",id:"data-structure",level:3},{value:"How to use it",id:"how-to-use-it",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["NEAR Lake is an indexer built on top of ",(0,t.jsx)(n.a,{href:"/concepts/advanced/near-indexer-framework",children:"NEAR Indexer Framework"})," to watch the network and store all the event logs such as ",(0,t.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Event",children:"FT Events"})," and ",(0,t.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Event",children:"NFT Events"})," as JSON files on AWS S3."]}),"\n",(0,t.jsx)(n.admonition,{title:"GitHub repo",type:"info",children:(0,t.jsxs)(n.p,{children:["You can find the Lake Indexer source code in ",(0,t.jsx)(n.a,{href:"https://github.com/near/near-lake-indexer/",children:"this GitHub repository"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"how-it-works",children:"How it works"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://pagoda.co",children:"Pagoda Inc."})," runs NEAR Lake nodes to store the data in JSON format on AWS S3.\nThere is no need to run your own NEAR Lake unless you have specific reasons to do that."]})}),"\n",(0,t.jsx)(n.p,{children:"There are AWS S3 buckets created:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"near-lake-data-testnet"})," (",(0,t.jsx)(n.code,{children:"eu-central-1"})," region)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"near-lake-data-mainnet"})," (",(0,t.jsx)(n.code,{children:"eu-central-1"})," region)"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"All the buckets are set up the way the requester pays for the access. Anyone can read from these buckets by connecting to them with their own AWS credentials to be charged by Amazon."}),"\n",(0,t.jsx)(n.h3,{id:"data-structure",children:"Data structure"}),"\n",(0,t.jsx)(n.p,{children:"The data structure used by Lake Indexer is the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    <block_height>/\n      block.json\n      shard_0.json\n      shard_1.json\n      ...\n      shard_N.json\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"<block_height>"})," is a 12-character-long ",(0,t.jsx)(n.a,{href:"https://doc.rust-lang.org/std/primitive.u64.html",children:(0,t.jsx)(n.code,{children:"u64"})}),' string with leading zeros (e.g "000042839521"). See ',(0,t.jsx)(n.a,{href:"https://github.com/near/near-lake/issues/23",children:"this issue for reasoning"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"block_json"})," contains JSON-serialized ",(0,t.jsx)(n.code,{children:"BlockView"})," struct. ",(0,t.jsx)(n.strong,{children:"NB!"})," this struct might change in the future, we will announce it"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"shard_N.json"})," where N is ",(0,t.jsx)(n.a,{href:"https://doc.rust-lang.org/std/primitive.u64.html",children:(0,t.jsx)(n.code,{children:"u64"})})," starting from ",(0,t.jsx)(n.code,{children:"0"}),". Represents the index number of the shard. In order to find out the expected number of shards in the block you can look in ",(0,t.jsx)(n.code,{children:"block.json"})," at ",(0,t.jsx)(n.code,{children:".header.chunks_included"})]}),"\n",(0,t.jsx)(n.h3,{id:"how-to-use-it",children:"How to use it"}),"\n",(0,t.jsxs)(n.p,{children:["We have created the ",(0,t.jsx)(n.a,{href:"/concepts/advanced/near-lake-framework",children:"NEAR Lake Framework"})," to have a simple straightforward way to create an indexer on top of the data stored by NEAR Lake itself."]}),"\n",(0,t.jsx)(n.admonition,{title:"NEAR Lake Framework",type:"info",children:(0,t.jsxs)(n.p,{children:["You can check the NEAR Lake Framework release announcement on the ",(0,t.jsx)(n.a,{href:"https://gov.near.org/t/announcement-near-lake-framework-brand-new-word-in-indexer-building-approach/17668",children:"NEAR Governance Forum"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:"We have prepared this video tutorial with a simple example to give you an overview and some practical ideas."}),"\n",(0,t.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/GsF7I93K-EQ",title:"NEAR Lake Indexer",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>o});var t=r(67294);const a={},i=t.createContext(a);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);