"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4877],{4327:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var t=r(85893),s=r(11151),a=r(74866),i=r(85162);const o={id:"quick-reference",title:"JavaScript API\ub97c \uc0ac\uc6a9\ud558\uc5ec NEAR\uc640 \uc0c1\ud638 \uc791\uc6a9",sidebar_label:"JavaScript API \uc0ac\uc6a9"},l=void 0,c={id:"tools/near-api-js/quick-reference",title:"JavaScript API\ub97c \uc0ac\uc6a9\ud558\uc5ec NEAR\uc640 \uc0c1\ud638 \uc791\uc6a9",description:"\ube60\ub978 \ucc38\uace0",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/4.tools/near-api-js/quick-reference.md",sourceDirName:"4.tools/near-api-js",slug:"/tools/near-api-js/quick-reference",permalink:"/ko/tools/near-api-js/quick-reference",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/4.tools/near-api-js/quick-reference.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1718378911e3,frontMatter:{id:"quick-reference",title:"JavaScript API\ub97c \uc0ac\uc6a9\ud558\uc5ec NEAR\uc640 \uc0c1\ud638 \uc791\uc6a9",sidebar_label:"JavaScript API \uc0ac\uc6a9"},sidebar:"tools",previous:{title:"Home",permalink:"/ko/tools/welcome"},next:{title:"\uc9c0\uac11",permalink:"/ko/tools/near-api-js/wallet"}},d={},u=[{value:"\ube60\ub978 \ucc38\uace0",id:"\ube60\ub978-\ucc38\uace0",level:2},{value:"<code>near-api-js</code>\ub780 \ubb34\uc5c7\uc778\uac00\uc694?",id:"near-api-js\ub780-\ubb34\uc5c7\uc778\uac00\uc694",level:2},{value:"\uc124\uce58",id:"install",level:2},{value:"Import",id:"import",level:2},{value:"\ud0a4 \uc800\uc7a5\uc18c(Key Store)",id:"key-store",level:2},{value:"NEAR\uc5d0 \uc5f0\uacb0",id:"connect",level:2},{value:"RPC Failover",id:"rpc-failover",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\ube60\ub978-\ucc38\uace0",children:"\ube60\ub978 \ucc38\uace0"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#install",children:"\uc124\uce58"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/ko/tools/near-api-js/wallet",children:"\uc9c0\uac11\uacfc\uc758 \uc0c1\ud638\uc791\uc6a9"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/ko/tools/near-api-js/account",children:"\uacc4\uc815"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/ko/tools/near-api-js/contract",children:"\ucee8\ud2b8\ub799\ud2b8"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/ko/tools/near-api-js/utils",children:"\uc720\ud2f8\ub9ac\ud2f0"})}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"near-api-js\ub780-\ubb34\uc5c7\uc778\uac00\uc694",children:[(0,t.jsx)(n.code,{children:"near-api-js"}),"\ub780 \ubb34\uc5c7\uc778\uac00\uc694?"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"near-api-js"}),"\ub294 NEAR \ube14\ub85d\uccb4\uc778\uacfc \uc0c1\ud638 \uc791\uc6a9\ud558\ub294 \uc644\uc804\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac\uc785\ub2c8\ub2e4. \uc774\ub294 \ube0c\ub77c\uc6b0\uc800 \ub610\ub294 Node.js \ub7f0\ud0c0\uc784\uc5d0\uc11c \uc0ac\uc6a9\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.p,{children:["\uc77c\ubc18\uc801\uc73c\ub85c ",(0,t.jsx)(n.a,{href:"#key-store",children:(0,t.jsx)(n.code,{children:"KeyStore"})}),"\ub97c \uc0ac\uc6a9\ud55c ",(0,t.jsx)(n.a,{href:"#connect",children:(0,t.jsx)(n.code,{children:"connect"})}),"\ub85c \uc5f0\uacb0\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5f0\uacb0 \uac1d\uccb4\ub97c \ud1b5\ud574, \ub2e4\uc74c\uacfc \uac19\uc740 \uac83\ub4e4\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c ",(0,t.jsx)(n.a,{href:"/ko/tools/near-api-js/wallet",children:"\uc9c0\uac11"}),"\uacfc \uc0c1\ud638 \uc791\uc6a9."]}),"\n",(0,t.jsxs)(n.li,{children:["\ub2e4\uc74c\uacfc \uac19\uc740 \uac83\ub4e4\uc744 \uc704\ud574 ",(0,t.jsx)(n.a,{href:"/ko/tools/near-api-js/account",children:"\uacc4\uc815"})," \uac1d\uccb4 \uc778\uc2a4\ud134\uc2a4\ud654:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\ud1a0\ud070 \uc804\uc1a1"}),"\n",(0,t.jsx)(n.li,{children:"\ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec"}),"\n",(0,t.jsx)(n.li,{children:"\uacc4\uc815 \uac80\uc0ac, \uc0dd\uc131 \ub610\ub294 \uc0ad\uc81c"}),"\n",(0,t.jsx)(n.li,{children:"\uacc4\uc815 \ud0a4 \uad00\ub9ac"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/ko/tools/near-api-js/contract",children:"\ucee8\ud2b8\ub799\ud2b8"})," \uac1d\uccb4\ub97c \uc778\uc2a4\ud134\uc2a4\ud654\ud558\uc5ec \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \uba54\uc11c\ub4dc \ud638\ucd9c"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0\ub294 \uc77c\ubd80 ",(0,t.jsx)(n.a,{href:"/ko/tools/near-api-js/utils",children:"utils"})," \ud568\uc218\ub3c4 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.mdxAdmonitionTitle,{children:["To quickly get started with integrating NEAR in a web browser, read our ",(0,t.jsx)(n.a,{href:"/build/web3-apps/integrate-contracts",children:"Web Frontend integration"})," article. :::"]}),(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.mdxAdmonitionTitle,{children:[(0,t.jsx)(n.code,{children:"near-api-js"}),"\uc640 ",(0,t.jsx)(n.code,{children:"near-sdk-js"}),"\uc758 \ucc28\uc774\uc810\uc5d0 \uc720\uc758\ud558\uc138\uc694:"]}),(0,t.jsxs)(n.p,{children:["JavaScript ",(0,t.jsx)(n.em,{children:"SDK"})," \ub294 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \uac1c\ubc1c\uc744 \uc704\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac\uc785\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\ub294 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\ub294 \ub370 \uc0ac\uc6a9\ud558\ub294 \ud074\ub798\uc2a4\uc640 \ud568\uc218\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,t.jsxs)(n.p,{children:["JavaScript ",(0,t.jsx)(n.em,{children:"API"})," \ub294 NEAR\uc640 \uc0c1\ud638 \uc791\uc6a9\ud560 \uc218 \uc788\ub294 \ubaa8\ub4e0 \uac00\ub2a5\ud55c \uba85\ub839\uc744 \uc704\ud55c \uc644\uc804\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac\uc785\ub2c8\ub2e4. \uc774\ub294 RPC \uc5d4\ub4dc\ud3ec\uc778\ud2b8 \ub798\ud37c, \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c NEAR \uc9c0\uac11\uacfc \uc0c1\ud638 \uc791\uc6a9\ud558\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac, \ud0a4 \uad00\ub9ac \ub3c4\uad6c\uc785\ub2c8\ub2e4. :::"]}),(0,t.jsx)(n.hr,{}),(0,t.jsx)(n.h2,{id:"install",children:"\uc124\uce58"}),(0,t.jsxs)(n.p,{children:["\ud328\ud0a4\uc9c0\uc5d0 ",(0,t.jsx)(n.code,{children:"near-api-js"}),"\ub97c \uc758\uc874\uc131(dependency)\uc73c\ub85c \ud3ec\ud568\ud569\ub2c8\ub2e4."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm i --save near-api-js\n"})}),(0,t.jsx)(n.h2,{id:"import",children:"Import"}),(0,t.jsxs)(n.p,{children:["\ube0c\ub77c\uc6b0\uc800 \ub610\ub294 Node.js \ub7f0\ud0c0\uc784\uc5d0\uc11c API \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc77c\ubd80 \uae30\ub2a5\uc740 \uc5ec\ub7ec \ud658\uacbd \uc911 \ud558\ub098\uc5d0\uc11c\ub9cc \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 ",(0,t.jsx)(n.code,{children:"WalletConnection"}),"\ub294 \ube0c\ub77c\uc6b0\uc800 \uc804\uc6a9\uc774\uba70, \uac01 \ud658\uacbd\ub9c8\ub2e4 \uc11c\ub85c \ub2e4\ub978 ",(0,t.jsx)(n.code,{children:"KeyStore"})," \uacf5\uae09\uc790\uac00 \uc874\uc7ac\ud569\ub2c8\ub2e4."]}),(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(i.Z,{value:"Browser",label:"Browser",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'import * as nearAPI from "near-api-js";\n'})})}),(0,t.jsx)(i.Z,{value:"Node",label:"Node",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const nearAPI = require("near-api-js");\n'})})})]}),(0,t.jsx)(n.h2,{id:"key-store",children:"\ud0a4 \uc800\uc7a5\uc18c(Key Store)"}),(0,t.jsxs)(n.p,{children:["\ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc11c\uba85\ud558\ub294 \uacbd\uc6b0 ",(0,t.jsx)(n.em,{children:"\ud0a4 \uc800\uc7a5\uc18c"})," \ub97c \uc0dd\uc131\ud574\uc57c \ud569\ub2c8\ub2e4. \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc9c0\uac11\uc73c\ub85c \ub85c\uadf8\uc778\ud558\ub3c4\ub85d \uc694\uccad\ud558\uba74, LocalStorage KeyStore\uac00 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."]}),(0,t.jsxs)(a.Z,{children:[(0,t.jsxs)(i.Z,{value:"browser",label:"Using Browser",default:!0,children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// creates keyStore using private key in local storage\n\nconst { keyStores } = nearAPI;\nconst myKeyStore = new keyStores.BrowserLocalStorageKeyStore();\n"})}),(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.a,{href:"https://near.github.io/near-api-js/classes/_near_js_keystores_browser.browser_local_storage_key_store.BrowserLocalStorageKeyStore.html",children:[(0,t.jsx)("span",{className:"typedoc-icon typedoc-icon-class"})," Class ",(0,t.jsx)(n.code,{children:"BrowserLocalStorageKeyStore"})]})})]}),(0,t.jsxs)(i.Z,{value:"dir",label:"Using Credentials Directory",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'// creates a keyStore that searches for keys in .near-credentials\n// requires credentials stored locally by using a NEAR-CLI command: `near login`\n// https://docs.near.org/tools/cli#near-login\n\nconst { keyStores } = nearAPI;\nconst homedir = require("os").homedir();\nconst CREDENTIALS_DIR = ".near-credentials";\nconst credentialsPath = require("path").join(homedir, CREDENTIALS_DIR);\nconst myKeyStore = new keyStores.UnencryptedFileSystemKeyStore(credentialsPath);\n'})}),(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.a,{href:"https://near.github.io/near-api-js/classes/_near_js_keystores_node.unencrypted_file_system_keystore.UnencryptedFileSystemKeyStore.html",children:[(0,t.jsx)("span",{className:"typedoc-icon typedoc-icon-class"})," Class ",(0,t.jsx)(n.code,{children:"UnencryptedFileSystemKeyStore"})]})})]}),(0,t.jsxs)(i.Z,{value:"file",label:"Using a File",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'// creates keyStore from a provided file\n// you will need to pass the location of the .json key pair\n\nconst { KeyPair, keyStores } = require("near-api-js");\nconst fs = require("fs");\nconst homedir = require("os").homedir();\n\nconst ACCOUNT_ID = "near-example.testnet"; // NEAR account tied to the keyPair\nconst NETWORK_ID = "testnet";\n// path to your custom keyPair location (ex. function access key for example account)\nconst KEY_PATH = "/.near-credentials/near-example-testnet/get_token_price.json";\n\nconst credentials = JSON.parse(fs.readFileSync(homedir + KEY_PATH));\nconst myKeyStore = new keyStores.InMemoryKeyStore();\nmyKeyStore.setKey(\n  NETWORK_ID,\n  ACCOUNT_ID,\n  KeyPair.fromString(credentials.private_key)\n);\n'})}),(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.a,{href:"https://near.github.io/near-api-js/classes/_near_js_keystores.in_memory_key_store.InMemoryKeyStore.html",children:[(0,t.jsx)("span",{className:"typedoc-icon typedoc-icon-class"})," Class ",(0,t.jsx)(n.code,{children:"InMemoryKeyStore"})]}),"\n\xa0\xa0\xa0\n",(0,t.jsxs)(n.a,{href:"https://near.github.io/near-api-js/classes/_near_js_crypto.key_pair.KeyPair.html",children:[(0,t.jsx)("span",{className:"typedoc-icon typedoc-icon-class"})," Class ",(0,t.jsx)(n.code,{children:"KeyPair"})]})]})]}),(0,t.jsxs)(i.Z,{value:"key",label:"Using a private key string",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'// creates keyStore from a private key string\n// you can define your key here or use an environment variable\n\nconst { keyStores, KeyPair } = nearAPI;\nconst myKeyStore = new keyStores.InMemoryKeyStore();\nconst PRIVATE_KEY =\n  "by8kdJoJHu7uUkKfoaLd2J2Dp1q1TigeWMG123pHdu9UREqPcshCM223kWadm";\n// creates a public / private key pair using the provided private key\nconst keyPair = KeyPair.fromString(PRIVATE_KEY);\n// adds the keyPair you created to keyStore\nawait myKeyStore.setKey("testnet", "example-account.testnet", keyPair);\n'})}),(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.a,{href:"https://near.github.io/near-api-js/classes/_near_js_keystores.in_memory_key_store.InMemoryKeyStore.html",children:[(0,t.jsx)("span",{className:"typedoc-icon typedoc-icon-class"})," Class ",(0,t.jsx)(n.code,{children:"InMemoryKeyStore"})]}),"\n\xa0\xa0\xa0\n",(0,t.jsxs)(n.a,{href:"https://near.github.io/near-api-js/classes/_near_js_crypto.key_pair.KeyPair.html",children:[(0,t.jsx)("span",{className:"typedoc-icon typedoc-icon-class"})," Class ",(0,t.jsx)(n.code,{children:"KeyPair"})]})]})]})]}),(0,t.jsx)(n.h2,{id:"connect",children:"NEAR\uc5d0 \uc5f0\uacb0"}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"connect"}),"\uc5d0\uc11c \ubc18\ud658\ub41c \uac1d\uccb4\ub294 API\uc758 \ubaa8\ub4e0 \uba85\ub839\uc5d0 \ub300\ud55c \uc9c4\uc785\uc810\uc785\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc11c\uba85\ud558\ub824\uba74 \uc5f0\uacb0\uc744 \ub9cc\ub4e4\uae30 \uc704\ud55c ",(0,t.jsx)(n.a,{href:"#key-store",children:(0,t.jsx)(n.code,{children:"KeyStore"})}),"\uac00 \ud544\uc694\ud569\ub2c8\ub2e4."]}),(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(i.Z,{value:"testnet",label:"TestNet",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const { connect } = nearAPI;\n\nconst connectionConfig = {\n  networkId: "testnet",\n  keyStore: myKeyStore, // first create a key store\n  nodeUrl: "https://rpc.testnet.near.org",\n  walletUrl: "https://testnet.mynearwallet.com/",\n  helperUrl: "https://helper.testnet.near.org",\n  explorerUrl: "https://testnet.nearblocks.io",\n};\nconst nearConnection = await connect(connectionConfig);\n'})})}),(0,t.jsx)(i.Z,{value:"mainnet",label:"MainNet",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const { connect } = nearAPI;\n\nconst connectionConfig = {\n  networkId: "mainnet",\n  keyStore: myKeyStore, // first create a key store\n  nodeUrl: "https://rpc.mainnet.near.org",\n  walletUrl: "https://wallet.mainnet.near.org",\n  helperUrl: "https://helper.mainnet.near.org",\n  explorerUrl: "https://nearblocks.io",\n};\nconst nearConnection = await connect(connectionConfig);\n'})})}),(0,t.jsx)(i.Z,{value:"localnet",label:"LocalNet",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const { connect } = nearAPI;\nconst connectionConfig = {\n  networkId: "local",\n  nodeUrl: "http://localhost:3030",\n  walletUrl: "http://localhost:4000/wallet",\n};\nconst nearConnection = await connect(connectionConfig);\n'})})})]}),(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.a,{href:"https://near.github.io/near-api-js/modules/near_api_js.connect.html",children:[(0,t.jsx)("span",{className:"typedoc-icon typedoc-icon-module"})," ",(0,t.jsx)(n.code,{children:"connect"})," \ubaa8\ub4c8"]})}),(0,t.jsx)(n.h2,{id:"rpc-failover",children:"RPC Failover"}),(0,t.jsxs)(n.p,{children:["RPC providers can experience intermittent downtime, connectivity issues, or rate limits that cause client transactions to fail. This can be prevented by using the ",(0,t.jsx)(n.code,{children:"FailoverRpcProvider"})," that supports multiple RPC providers."]}),(0,t.jsx)(a.Z,{children:(0,t.jsx)(i.Z,{value:"mainnet",label:"MainNet",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const jsonProviders = [\n  new JsonRpcProvider({\n    url: 'https://rpc.mainnet.near.org',\n  }),\n  new JsonRpcProvider(\n    {\n      url: 'https://another-rpc.cloud.com',\n      headers: { 'X-Api-Key': 'some string' },\n    },\n    { retries: 3, backoff: 2, wait: 500 }\n  ),\n];\nconst provider = new FailoverRpcProvider(jsonProviders);\n\nawait connect({\n  networkId: 'mainnet',\n  provider: provider,\n  // this isn't used if `provider` is specified, but is still required for backward compativility\n  nodeUrl: 'https://rpc.mainnet.near.org',\n});\n"})})})}),(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.a,{href:"https://near.github.io/near-api-js/classes/near_api_js.providers_failover_rpc_provider.FailoverRpcProvider.html",children:[(0,t.jsx)("span",{className:"typedoc-icon typedoc-icon-class"})," Class ",(0,t.jsx)(n.code,{children:"FailoverRpcProvider"})]})})]})]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>i});r(67294);var t=r(36905);const s={tabItem:"tabItem_Ymn6"};var a=r(85893);function i(e){var n=e.children,r=e.hidden,i=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,i),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>k});var t=r(67294),s=r(36905),a=r(12466),i=r(16550),o=r(20469),l=r(91980),c=r(67392),d=r(20812);function u(e){var n,r;return null!=(n=null==(r=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function h(e){var n=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function j(e){var n=e.queryString,r=void 0!==n&&n,s=e.groupId,a=(0,i.k6)(),o=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:s});return[(0,l._X)(o),(0,t.useCallback)((function(e){if(o){var n=new URLSearchParams(a.location.search);n.set(o,e),a.replace(Object.assign({},a.location,{search:n.toString()}))}}),[o,a])]}function m(e){var n,r,s,a,i=e.defaultValue,l=e.queryString,c=void 0!==l&&l,u=e.groupId,m=h(e),y=(0,t.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var s=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:i,tabValues:m})})),x=y[0],f=y[1],v=j({queryString:c,groupId:u}),b=v[0],g=v[1],k=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),r=(0,d.Nk)(n),s=r[0],a=r[1],[s,(0,t.useCallback)((function(e){n&&a.set(e)}),[n,a])]),S=k[0],w=k[1],_=function(){var e=null!=b?b:S;return p({value:e,tabValues:m})?e:null}();return(0,o.Z)((function(){_&&f(_)}),[_]),{selectedValue:x,selectValue:(0,t.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);f(e),g(e),w(e)}),[g,w,m]),tabValues:m}}var y=r(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(85893);function v(e){var n=e.className,r=e.block,t=e.selectedValue,i=e.selectValue,o=e.tabValues,l=[],c=(0,a.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,r=l.indexOf(n),s=o[r].value;s!==t&&(c(n),i(s))},u=function(e){var n,r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var t,s=l.indexOf(e.currentTarget)+1;r=null!=(t=l[s])?t:l[0];break;case"ArrowLeft":var a,i=l.indexOf(e.currentTarget)-1;r=null!=(a=l[i])?a:l[l.length-1]}null==(n=r)||n.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},n),children:o.map((function(e){var n=e.value,r=e.label,a=e.attributes;return(0,f.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return l.push(e)},onKeyDown:u,onClick:d},a,{className:(0,s.Z)("tabs__item",x.tabItem,null==a?void 0:a.className,{"tabs__item--active":t===n}),children:null!=r?r:n}),n)}))})}function b(e){var n=e.lazy,r=e.children,s=e.selectedValue,a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var i=a.find((function(e){return e.props.value===s}));return i?(0,t.cloneElement)(i,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})}))})}function g(e){var n=m(e);return(0,f.jsxs)("div",{className:(0,s.Z)("tabs-container",x.tabList),children:[(0,f.jsx)(v,Object.assign({},n,e)),(0,f.jsx)(b,Object.assign({},n,e))]})}function k(e){var n=(0,y.Z)();return(0,f.jsx)(g,Object.assign({},e,{children:u(e.children)}),String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>i});var t=r(67294);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);