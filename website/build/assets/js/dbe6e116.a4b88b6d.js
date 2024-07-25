"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5151],{22460:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var s=i(85893),a=i(11151);const t={id:"overview",title:"Multichain Gas Relayer Overview",sidebar_label:"Overview"},r=void 0,c={id:"build/chain-abstraction/multichain-gas-relayer/overview",title:"Multichain Gas Relayer Overview",description:"The Multichain Gas Relayer on NEAR is designed to facilitate cross-chain transactions by managing gas fees and transaction relays across different blockchain networks.",source:"@site/../docs/2.build/1.chain-abstraction/multichain-gas-relayer/overview.md",sourceDirName:"2.build/1.chain-abstraction/multichain-gas-relayer",slug:"/build/chain-abstraction/multichain-gas-relayer/overview",permalink:"/build/chain-abstraction/multichain-gas-relayer/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/1.chain-abstraction/multichain-gas-relayer/overview.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1721824502e3,frontMatter:{id:"overview",title:"Multichain Gas Relayer Overview",sidebar_label:"Overview"},sidebar:"build",previous:{title:"NFT Chain Keys Contract",permalink:"/build/chain-abstraction/nft-chain-keys"},next:{title:"Multichain Gas Station Contract",permalink:"/build/chain-abstraction/multichain-gas-relayer/gas-station"}},o={},l=[{value:"What is it?",id:"what-is-it",level:2},{value:"Benefits",id:"benefits",level:3},{value:"System Design",id:"system-design",level:2},{value:"System Components",id:"system-components",level:3},{value:"Technical Diagram",id:"technical-diagram",level:3},{value:"Workflow",id:"workflow",level:3},{value:"Key Features",id:"key-features",level:2},{value:"Limitations and Considerations",id:"limitations-and-considerations",level:2}];function h(e){const n={a:"a",admonition:"admonition",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The Multichain Gas Relayer on NEAR is designed to facilitate cross-chain transactions by managing gas fees and transaction relays across different blockchain networks."}),"\n",(0,s.jsx)(n.h2,{id:"what-is-it",children:"What is it?"}),"\n",(0,s.jsx)(n.p,{children:"The Multichain Gas Relayer is a mechanism designed to enable gas fee payments and transaction relays across multiple blockchains. Gas fees are transaction fees paid to miners or validators to execute operations on a blockchain network. These fees can vary significantly across different blockchains and can pose a barrier to interoperability and seamless transactions between them."}),"\n",(0,s.jsx)(n.h3,{id:"benefits",children:"Benefits"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Interoperability"}),": Enables seamless interaction and transactions between different blockchains without the need for users to hold native tokens of each blockchain for gas fees."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Cost Efficiency"}),": Reduces the overall cost of cross-chain transactions by optimizing gas fee management and leveraging economies of scale."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"User Experience"}),": Improves the user experience by abstracting the complexity of managing gas fees across multiple blockchains."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"system-design",children:"System Design"}),"\n",(0,s.jsx)(n.p,{children:"This section provides an overview of the system design, including the main components, a technical diagram, and a high-level workflow of the Multichain Relayer system."}),"\n",(0,s.jsx)(n.h3,{id:"system-components",children:"System Components"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/build/chain-abstraction/multichain-gas-relayer/multichain-server",children:(0,s.jsx)(n.strong,{children:"Multichain Relayer Server"})}),": This server coordinates the relaying of transactions between NEAR and other blockchains. It listens for signed transaction payloads and submits them to the appropriate foreign chain RPCs."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/build/chain-abstraction/multichain-gas-relayer/gas-station",children:(0,s.jsx)(n.strong,{children:"Gas Station Contract"})}),": A smart contract on NEAR that manages the creation, signing, and relaying of transactions to foreign chains. It also handles gas fee calculations and collects NEAR tokens for gas payments on foreign chains."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/build/chain-abstraction/chain-signatures",children:(0,s.jsx)(n.strong,{children:"MPC Signing Service"})}),": A network of trusted Multi-Party Computation (MPC) signers that cooperatively sign transactions. This ensures secure transaction signing and validation on the NEAR blockchain before relaying to foreign chains."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"technical-diagram",children:"Technical Diagram"}),"\n",(0,s.jsx)(n.p,{children:"Below is a design diagram of the entire Multichain Relayer system:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(55256).Z+"",children:(0,s.jsx)(n.img,{alt:"multichain_relayer_technical_design.png",src:i(68086).Z+"",width:"3748",height:"3860"})})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.a,{href:"/build/chain-abstraction/multichain-gas-relayer/gas-station",children:"gas station contract"})," and the ",(0,s.jsx)(n.a,{href:"https://github.com/near/mpc-recovery/tree/main/contract",children:"MPC signing service contract"})," are in the green box which take place on NEAR."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.a,{href:"/build/chain-abstraction/multichain-gas-relayer/multichain-server",children:"multichain relayer server"})," focuses on the blue ",(0,s.jsx)(n.em,{children:"Multichain Relayer Core Backend Services"})," box in the middle and the connections to the XChain systems in the red box via RPCs."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.a,{href:"/build/chain-abstraction/multichain-gas-relayer/gas-station#settlement",children:"XChain Settlement"})," process happening in the yellow box can be either manual or automated. Automated settlement is available for select partners based on their xChain transaction volume."]}),"\n"]})}),"\n",(0,s.jsx)(n.h3,{id:"workflow",children:"Workflow"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Transaction Creation"}),": Users initiate a transaction on NEAR, specifying the foreign chain transaction and attaching NEAR tokens to cover gas fees on the foreign chain. This transaction is sent to the Gas Station Contract."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Transaction Signing"}),": The Gas Station Contract invokes the MPC signing service to sign the transaction. This step may require multiple calls due to gas limitations on NEAR, especially for complex transactions."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Event Emission and Indexing"}),": Once the transactions are signed, the Gas Station Contract emits an event. The Gas Station Event Indexer picks up this event and triggers the Multichain Relayer Server to relay the signed transactions."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Relaying Transactions"}),": The Multichain Relayer Server first sends a funding transaction to ensure the user\u2019s account on the foreign chain has sufficient gas. Once confirmed, it sends the user\u2019s signed transaction to the foreign chain."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"key-features",children:"Key Features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Paymaster Accounts"}),": These are accounts on the destination chains that hold the native gas tokens. They ensure users have enough gas to complete their transactions on foreign chains."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"xChain Settlement"}),": regular ",(0,s.jsx)(n.a,{href:"/build/chain-abstraction/multichain-gas-relayer/gas-station#settlement",children:"cross-chain settlement"})," is needed to ensure paymaster accounts have sufficient funds. This can be manual or automated, and involves swapping NEAR tokens for foreign chain tokens and transferring them to the paymaster accounts.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Automated settlement is available for select partners based on their cross-chain transaction volume."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Supported Chains"}),": Initially supports BSC, Ethereum, Base, Arbitrum, and Optimism with plans to expand to other chains."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"limitations-and-considerations",children:"Limitations and Considerations"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Gas and Slippage"}),": Users must account for potential gas and slippage issues when using the service. It\u2019s recommended to overestimate gas fees and use high slippage settings in volatile markets."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Nonce Management"}),": Proper management of nonce values is crucial to avoid transaction failures, particularly with concurrent transactions and multiple paymaster accounts."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},55256:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/files/multichain_relayer_technical_design-72c7956c4949d709403248d15c286cfd.png"},68086:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/multichain_relayer_technical_design-72c7956c4949d709403248d15c286cfd.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>r});var s=i(67294);const a={},t=s.createContext(a);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);