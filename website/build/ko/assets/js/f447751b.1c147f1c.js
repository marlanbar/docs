"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5237],{44952:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=t(85893),s=t(11151);const r={id:"minter",title:"NFT minter"},a="NFT Minter",o={id:"tutorials/templates/minter",title:"NFT minter",description:"Demo",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/3.tutorials/templates/minter.md",sourceDirName:"3.tutorials/templates",slug:"/tutorials/templates/minter",permalink:"/ko/tutorials/templates/minter",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/templates/minter.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1718378911e3,frontMatter:{id:"minter",title:"NFT minter"},sidebar:"tutorials",previous:{title:"Frontend & Multiple Contracts",permalink:"/ko/tutorials/examples/frontend-multiple-contracts"},next:{title:"Marketplace Frontend",permalink:"/ko/tutorials/templates/marketplace"}},l={},c=[{value:"Project Walkthrough",id:"project-walkthrough",level:2},{value:"Pre-Setup",id:"pre-setup",level:2},{value:"Deploying a Near Contract on Mintbase:",id:"deploying-a-near-contract-on-mintbase",level:3},{value:"Add Proxy Minter Contract",id:"add-proxy-minter-contract",level:3},{value:"Step 1: Get the wallet connection",id:"step-1-get-the-wallet-connection",level:3},{value:"Step 2: Use the onSubmit method",id:"step-2-use-the-onsubmit-method",level:3},{value:"Step 3: Upload the NFT reference",id:"step-3-upload-the-nft-reference",level:3},{value:"Step 4: Handling the mint",id:"step-4-handling-the-mint",level:3},{value:"Setup",id:"setup",level:3},{value:"ENV Variables",id:"env-variables",level:2},{value:"Extending",id:"extending",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"nft-minter",children:"NFT Minter"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://minter.mintbase.xyz/",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/badge/Demo-Visit%20Demo-brightgreen",alt:"Demo"})}),"\n",(0,i.jsx)(n.a,{href:"https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FMintbase%2Ftemplates%2Fblob%2Fmain%2Fminter",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/badge/Deploy-on%20Vercel-blue",alt:"Deploy"})})]}),"\n",(0,i.jsx)(n.p,{children:"This is a Next.js 14 frontend minter example that includes a simple interface from which you can mint nfts easily"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.imgur.com/QDJPsAA.png",alt:"img"})}),"\n",(0,i.jsx)(n.admonition,{title:"Mintbase Templates",type:"tip",children:(0,i.jsxs)(n.p,{children:["This is part of the ",(0,i.jsx)(n.a,{href:"https://templates.mintbase.xyz/",children:"Mintbase Templates"}),", a collection of templates that you can use to scaffold your own project"]})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"project-walkthrough",children:"Project Walkthrough"}),"\n",(0,i.jsxs)(n.p,{children:["This is a simple minter example built on top of ",(0,i.jsx)(n.strong,{children:"Next.js 14"})," using some of ",(0,i.jsx)(n.a,{href:"https://github.com/Mintbase/mintbase-js",children:"@mintbase-js"})," packages."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"NOTE: As a standard on Mintbase as we use the latest versions of Next.js we recommend using pnpm, but the package manager is up to your personal choice."})}),"\n",(0,i.jsxs)(n.p,{children:["if you dont have a store you can ",(0,i.jsx)(n.a,{href:"https://www.mintbase.xyz/launchpad/contracts/0",children:"deploy a new contract"})," on our launchpad"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"pre-setup",children:"Pre-Setup"}),"\n",(0,i.jsx)(n.p,{children:"If you would like the minter to use your own NFT contract you can easily deploy one through the mintbase market UI, additionally if you want to open up minting to be available for any person you will need to connect it to a proxy contract"}),"\n",(0,i.jsx)(n.h3,{id:"deploying-a-near-contract-on-mintbase",children:"Deploying a Near Contract on Mintbase:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Login on Mintbase and access ",(0,i.jsx)(n.a,{href:"https://www.mintbase.xyz/launchpad/contracts/0",children:"Contracts Page"})]}),"\n",(0,i.jsx)(n.li,{children:"Click on New Contract"}),"\n",(0,i.jsxs)(n.li,{children:["Choose Store Name (this will be the contract address to add on your minsta instance, this need to be added on the ",(0,i.jsx)(n.code,{children:"process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS"})," environment variable) and Store Symbol"]}),"\n",(0,i.jsx)(n.li,{children:"Proceed to transaction."}),"\n",(0,i.jsx)(n.li,{children:"Succeeded"}),"\n",(0,i.jsx)(n.li,{children:"Go to Contract Settings"}),"\n"]}),"\n",(0,i.jsx)("hr",{class:"subsection"}),"\n",(0,i.jsx)(n.h3,{id:"add-proxy-minter-contract",children:"Add Proxy Minter Contract"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Under Contract Settings go to Minters"}),"\n",(0,i.jsxs)(n.li,{children:["add ",(0,i.jsx)(n.code,{children:"0.drop.proxy.mintbase.near"})," (this is the contract address that need to be added on ",(0,i.jsx)(n.code,{children:"process.env.NEXT_PUBLIC_PROXY_MINTER_CONTRACT_ADDRESS"}),"), and click Add Minters."]}),"\n",(0,i.jsx)(n.li,{children:"Proceed to transaction."}),"\n",(0,i.jsx)(n.li,{children:"Succeeded"}),"\n"]}),"\n",(0,i.jsx)("hr",{class:"subsection"}),"\n",(0,i.jsx)(n.h3,{id:"step-1-get-the-wallet-connection",children:"Step 1: Get the wallet connection"}),"\n",(0,i.jsxs)(n.p,{children:["This method will get the wallet instance used to send the mint transaction. To learn more about this, you can check our guide at ",(0,i.jsx)(n.a,{href:"https://docs.mintbase.xyz/dev/getting-started/add-wallet-connection-to-your-react-app",children:"Wallet Connection Guide"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:' const getWallet = async () => {\n    try {\n      return await selector.wallet();\n    } catch (error) {\n      console.error("Failed to retrieve the wallet:", error);\n      throw new Error("Failed to retrieve the wallet");\n    }\n  };\n'})}),"\n",(0,i.jsx)("hr",{class:"subsection"}),"\n",(0,i.jsx)(n.h3,{id:"step-2-use-the-onsubmit-method",children:"Step 2: Use the onSubmit method"}),"\n",(0,i.jsx)(n.p,{children:"Get all the form data and use the onSubmit method to handle the minting process"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'const onSubmit = async (data: SubmitData) => {\n    const wallet = await getWallet();\n\n    const reference = await uploadReference({\n      title: typeof data?.title === "string" ? data.title : "",\n      media: data?.media as unknown as File,\n    });\n\n    const file = uploadFile(data?.media as unknown as File);\n\n    await handleMint(\n      reference.id,\n      file,\n      activeAccountId as string,\n      wallet,\n      reference.media_url as string,\n      data.title\n    );\n  };\n'})}),"\n",(0,i.jsx)("hr",{class:"subsection"}),"\n",(0,i.jsx)(n.h3,{id:"step-3-upload-the-nft-reference",children:"Step 3: Upload the NFT reference"}),"\n",(0,i.jsxs)(n.p,{children:["The nft reference represents the offchain data which permanently stored on IPFS on Arweave in this case you can use ",(0,i.jsx)(n.a,{href:"https://docs.mintbase.xyz/dev/mintbase-sdk-ref/data",children:"@mintbase-js/data"})," to easily upload it to arweave."]}),"\n",(0,i.jsx)(n.p,{children:"In this not only are we uploading an offchain JSON object which contains the media as well as the title but also uploading a separate media file to be included onchain."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://docs.mintbase.xyz/dev/getting-started/anatomy-of-a-non-fungible-token",children:"Learn more about how references work here"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'const reference = await uploadReference({\n    title: typeof data?.title === "string" ? data.title : "",\n    media: data?.media as unknown as File,\n  });\n\n  const file = uploadFile(data?.media as unknown as File);\n'})}),"\n",(0,i.jsx)("hr",{class:"subsection"}),"\n",(0,i.jsx)(n.h3,{id:"step-4-handling-the-mint",children:"Step 4: Handling the mint"}),"\n",(0,i.jsx)(n.p,{children:"Here we start by configuring the callback which is the link and params to where the user will be redirected after minting after signing the mint transaction on the wallet."}),"\n",(0,i.jsx)(n.p,{children:"In this case a number of params are included to be able to show a better success page."}),"\n",(0,i.jsx)(n.p,{children:'The argument for calling the contracts "mint" function is then built. This transaction will be sent to the proxy contract which then calls the nft contracts nft_batch_mint method'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:' async function handleMint(\n  reference: string,\n  media: Promise<ArweaveResponse>,\n  activeAccountId: string,\n  wallet: Wallet,\n  mediaUrl: string,\n  nftTitle: string\n) {\n  const callbackArgs = {\n    contractAddress: MintbaseWalletSetup.contractAddress.toString(),\n    amount: 1,\n    ref: `${reference}`,\n    mediaUrl: mediaUrl,\n    title: nftTitle,\n  };\n\n  if (reference) {\n    await wallet.signAndSendTransaction({\n      signerId: activeAccountId,\n      receiverId: proxyAddress,\n      callbackUrl: cbUrl(reference, callbackArgs),\n      actions: [\n        {\n          type: "FunctionCall",\n          params: {\n            methodName: "mint",\n            args: {\n              metadata: JSON.stringify({\n                reference,\n                media: (await media).id,\n              }),\n              nft_contract_id: MintbaseWalletSetup.contractAddress,\n            },\n            gas: "200000000000000",\n            deposit: "10000000000000000000000",\n          },\n        },\n      ],\n    });\n  }\n}\n\nreturn { form, onSubmit, preview, setPreview };\n};\n\n'})}),"\n",(0,i.jsx)(n.p,{children:"This sums up the blockchain portion of the code"}),"\n",(0,i.jsx)("hr",{class:"subsection"}),"\n",(0,i.jsx)(n.h3,{id:"setup",children:"Setup"}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"minter/src/config/setup.ts"})," file, we define several key configurations for interacting with the Mintbase platform. This setup is crucial for ensuring that our application communicates correctly with Mintbase smart contracts."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"env-variables",children:"ENV Variables"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"proxyAddress"}),": This is the address of the proxy contract on Mintbase. It is either taken from the environment variable ",(0,i.jsx)(n.code,{children:"NEXT_PUBLIC_PROXY_CONTRACT_ADDRESS"})," or defaults to ",(0,i.jsx)(n.code,{children:'"0.minsta.proxy.mintbase.testnet"'})," if the environment variable is not set."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"contractAddress"}),": The address of the minting contract. Similar to ",(0,i.jsx)(n.code,{children:"proxyAddress"}),", it is sourced from ",(0,i.jsx)(n.code,{children:"NEXT_PUBLIC_MINT_CONTRACT_ADDRESS"})," or defaults to ",(0,i.jsx)(n.code,{children:'"test122212.mintspace2.testnet"'}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"network"}),": Indicates the blockchain network we are interacting with. It defaults to ",(0,i.jsx)(n.code,{children:'"testnet"'})," if ",(0,i.jsx)(n.code,{children:"NEXT_PUBLIC_NETWORK"})," is not specified in the environment."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"callbackUrl"}),": A URL used for callbacks, constructed dynamically based on the ",(0,i.jsx)(n.code,{children:"network"})," variable. If we are on the testnet, it uses the testnet URL; otherwise, it defaults to the mainnet URL."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["To customize these configurations for different environments, you can set the following environment variables in your ",(0,i.jsx)(n.code,{children:".env"})," file:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"NOTE: the env variables need to have the NEXT_PUBLIC_ on the variable name due to be available for the browser to process"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"NEXT_PUBLIC_PROXY_CONTRACT_ADDRESS"}),": Your proxy contract address on Mintbase."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"NEXT_PUBLIC_MINT_CONTRACT_ADDRESS"}),": Your mint contract address on Mintbase."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"NEXT_PUBLIC_NETWORK"}),": The network you want to interact with (",(0,i.jsx)(n.code,{children:'"testnet"'})," or ",(0,i.jsx)(n.code,{children:'"mainnet"'}),")."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"after that you can run"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm install\npnpm dev\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"extending",children:"Extending"}),"\n",(0,i.jsx)(n.p,{children:"This project is setup using Next.js + @mintbase/js\nYou can use this project as a reference to build your own, and use or remove any library you think it would suit your needs."}),"\n",(0,i.jsx)(n.admonition,{title:"Get in touch",type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Support: ",(0,i.jsx)(n.a,{href:"https://t.me/mintdev",children:"Join the Telegram"})]}),"\n",(0,i.jsxs)(n.li,{children:["Twitter: ",(0,i.jsx)(n.a,{href:"https://twitter.com/mintbase",children:"@mintbase"})]}),"\n"]})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var i=t(67294);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);