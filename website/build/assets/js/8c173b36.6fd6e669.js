"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2477],{19094:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>g,default:()=>h,frontMatter:()=>c,metadata:()=>I,toc:()=>d});var a=t(85893),r=t(11151),i=t(71183),s=t(74866),o=t(85162);const l=t.p+"assets/images/boop-base64-encode-57f1146336e8a4514a80fb207a64c1e3.gif",c={sidebar_position:6,sidebar_label:"Base64 params, wrap up",title:"Using base64-encoded arguments when we create a new crossword puzzle"},g="Final modifications",I={id:"tutorials/crosswords/intermediate/base64vecu8",title:"Using base64-encoded arguments when we create a new crossword puzzle",description:"Let's modify our new_puzzle method a bit, and demonstrate how a smart contract author might use base64-encoded arguments.",source:"@site/../docs/3.tutorials/crosswords/03-intermediate/05-base64vecu8.md",sourceDirName:"3.tutorials/crosswords/03-intermediate",slug:"/tutorials/crosswords/intermediate/base64vecu8",permalink:"/tutorials/crosswords/intermediate/base64vecu8",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/03-intermediate/05-base64vecu8.md",tags:[],version:"current",lastUpdatedBy:"garikbesson",lastUpdatedAt:1724878821e3,sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Base64 params, wrap up",title:"Using base64-encoded arguments when we create a new crossword puzzle"},sidebar:"tutorials",previous:{title:"Cross-contract calls, etc.",permalink:"/tutorials/crosswords/intermediate/cross-contract-calls"},next:{title:"Posts Indexer",permalink:"/tutorials/near-components/indexer-tutorials/posts-indexer"}},u={},d=[{value:"Wrapping up",id:"wrapping-up",level:2}];function C(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"final-modifications",children:"Final modifications"})}),"\n","\n",(0,a.jsxs)(n.p,{children:["Let's modify our ",(0,a.jsx)(n.code,{children:"new_puzzle"})," method a bit, and demonstrate how a smart contract author might use base64-encoded arguments."]}),"\n",(0,a.jsxs)(n.p,{children:["In the previous chapter we had a fairly long NEAR CLI command that called the ",(0,a.jsx)(n.code,{children:"new_puzzle"}),", providing it the parameters for all the clues. Having these lengthy parameters on the CLI might get cumbersome. There may be issues needing to escape single or double quotes, and each operating system may wish for a different format on the Terminal or Command Prompt."]}),"\n",(0,a.jsxs)(n.p,{children:["We're going to send all the arguments as a base64-encoded string, and make this a bit simpler. For this, we're going to use ",(0,a.jsxs)(n.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/json_types/struct.Base64VecU8.html",children:[(0,a.jsx)(n.code,{children:"Base64VecU8"})," from the SDK"]}),"."]}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsxs)(n.mdxAdmonitionTitle,{children:[(0,a.jsx)(n.code,{children:"Base64VecU8"})," is great for binary payloads"]}),(0,a.jsxs)(n.p,{children:["What we're doing makes sense, but it's worth noting that it's perhaps more common to use ",(0,a.jsx)(n.code,{children:"Base64VecU8"})," when sending binary parameters."]}),(0,a.jsxs)(n.p,{children:["Read more ",(0,a.jsx)(n.a,{href:"/build/smart-contracts/anatomy/serialization-protocols",children:"about it here"}),"."]})]}),"\n",(0,a.jsx)(n.p,{children:"First we'll set up a struct for the arguments we're expecting:"}),"\n",(0,a.jsx)(i.Ey,{language:"rust",start:"103",end:"108",url:"https://github.com/near-examples/crossword-tutorial-chapter-3/blob/master/contract/src/lib.rs"}),"\n",(0,a.jsxs)(n.p,{children:["Then we modify our ",(0,a.jsx)(n.code,{children:"new_puzzle"})," method like so:"]}),"\n",(0,a.jsx)(i.Ey,{language:"rust",start:"281",end:"289",url:"https://github.com/near-examples/crossword-tutorial-chapter-3/blob/master/contract/src/lib.rs"}),"\n",(0,a.jsxs)(n.p,{children:["We can take our original arguments and base64 encode them, using whatever method you prefer. There are plenty of online tool, Terminal commands, and open source applications like ",(0,a.jsx)(n.a,{href:"https://boop.okat.best",children:"Boop"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"We'll copy this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "answer_pk": "ed25519:7PkKPmVUXcupA5oU8d6TbgyMwzFe8tPV6eV1KGwgo9xg",\n  "dimensions": {\n   "x": 11,\n   "y": 10\n  },\n  "answers": [\n   {\n     "num": 1,\n     "start": {\n       "x": 0,\n       "y": 1\n     },\n     "direction": "Across",\n     "length": 12,\n     "clue": "NEAR transactions are more ______ instead of atomic."\n   },\n   {\n     "num": 2,\n     "start": {\n       "x": 6,\n       "y": 0\n     },\n     "direction": "Down",\n     "length": 7,\n     "clue": "In a smart contract, when performing an Action, you use this in Rust."\n   },\n   {\n     "num": 3,\n     "start": {\n       "x": 9,\n       "y": 0\n     },\n     "direction": "Down",\n     "length": 6,\n     "clue": "In docs.rs when you search for the near-sdk crate, these items a considered a what: collections, env, json_types."\n   },\n   {\n     "num": 4,\n     "start": {\n       "x": 1,\n       "y": 1\n     },\n     "direction": "Down",\n     "length": 10,\n     "clue": "A series of words that can deterministically generate a private key."\n   },\n   {\n     "num": 5,\n     "start": {\n       "x": 1,\n       "y": 3\n     },\n     "direction": "Across",\n     "length": 3,\n     "clue": "When doing high-level cross-contract calls, we import this that ends in _contract. When calling ourselves in a callback, it is convention to call it THIS_self."\n   },\n   {\n     "num": 6,\n     "start": {\n       "x": 0,\n       "y": 8\n     },\n     "direction": "Across",\n     "length": 8,\n     "clue": "Use this to determine the execution outcome of a cross-contract call or Action."\n   },\n   {\n     "num": 7,\n     "start": {\n       "x": 4,\n       "y": 6\n     },\n     "direction": "Across",\n     "length": 4,\n     "clue": "You chain this syntax onto a promise in order to schedule a callback afterward."\n   }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"and base64 encode it:"}),"\n",(0,a.jsx)("figure",{children:(0,a.jsx)("img",{src:l,alt:"Animated gif of parameters getting base64 encoded with the program Boop",width:"600"})}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(n.p,{children:"Now we can build and run the new crossword puzzle contract as we have before:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cargo near build\n"})}),"\n",(0,a.jsxs)(s.Z,{groupId:"cli-tabs",children:[(0,a.jsx)(o.Z,{value:"short",label:"Short",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"export NEAR_ACCT=crossword.friend.testnet\nexport PARENT_ACCT=friend.testnet\n\nnear delete-account $NEAR_ACCT $PARENT_ACCT --networkId testnet\n\n# Create an account again\nnear create-account $NEAR_ACCT --use-account $PARENT_ACCT --initial-balance 1 --network-id testnet\n"})})}),(0,a.jsx)(o.Z,{value:"full",label:"Full",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"export NEAR_ACCT=crossword.friend.testnet\nexport PARENT_ACCT=friend.testnet\n\nnear account delete-account $NEAR_ACCT beneficiary $PARENT_ACCT network-config testnet sign-with-keychain send\n\nnear account create-account fund-myself $NEAR_ACCT '1 NEAR' autogenerate-new-keypair save-to-keychain sign-as $PARENT_ACCT network-config testnet sign-with-keychain send\n"})})})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cargo near deploy $NEAR_ACCT with-init-call new json-args '{\"owner_id\": \"'$NEAR_ACCT'\", \"creator_account\": \"testnet\"}' prepaid-gas '100.0 Tgas' attached-deposit '0 NEAR' network-config testnet sign-with-keychain send\n"})}),"\n",(0,a.jsxs)(s.Z,{groupId:"cli-tabs",children:[(0,a.jsx)(o.Z,{value:"short",label:"Short",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'near call $NEAR_ACCT new_puzzle \'{{\n  "args": "ewogICJhbnN3ZXJfcGsiOiAiZWQyNTUxOTo3UGtLUG1WVVhjdXBBNW9VOGQ2VGJneU13ekZlOHRQVjZlVjFLR3dnbzl4ZyIsCiAgImRpbWVuc2lvbnMiOiB7CiAgICJ4IjogMTEsCiAgICJ5IjogMTAKICB9LAogICJhbnN3ZXJzIjogWwogICB7CiAgICAgIm51bSI6IDEsCiAgICAgInN0YXJ0IjogewogICAgICAgIngiOiAwLAogICAgICAgInkiOiAxCiAgICAgfSwKICAgICAiZGlyZWN0aW9uIjogIkFjcm9zcyIsCiAgICAgImxlbmd0aCI6IDEyLAogICAgICJjbHVlIjogIk5FQVIgdHJhbnNhY3Rpb25zIGFyZSBtb3JlIF9fX19fXyBpbnN0ZWFkIG9mIGF0b21pYy4iCiAgIH0sCiAgIHsKICAgICAibnVtIjogMiwKICAgICAic3RhcnQiOiB7CiAgICAgICAieCI6IDYsCiAgICAgICAieSI6IDAKICAgICB9LAogICAgICJkaXJlY3Rpb24iOiAiRG93biIsCiAgICAgImxlbmd0aCI6IDcsCiAgICAgImNsdWUiOiAiSW4gYSBzbWFydCBjb250cmFjdCwgd2hlbiBwZXJmb3JtaW5nIGFuIEFjdGlvbiwgeW91IHVzZSB0aGlzIGluIFJ1c3QuIgogICB9LAogICB7CiAgICAgIm51bSI6IDMsCiAgICAgInN0YXJ0IjogewogICAgICAgIngiOiA5LAogICAgICAgInkiOiAwCiAgICAgfSwKICAgICAiZGlyZWN0aW9uIjogIkRvd24iLAogICAgICJsZW5ndGgiOiA2LAogICAgICJjbHVlIjogIkluIGRvY3MucnMgd2hlbiB5b3Ugc2VhcmNoIGZvciB0aGUgbmVhci1zZGsgY3JhdGUsIHRoZXNlIGl0ZW1zIGEgY29uc2lkZXJlZCBhIHdoYXQ6IGNvbGxlY3Rpb25zLCBlbnYsIGpzb25fdHlwZXMuIgogICB9LAogICB7CiAgICAgIm51bSI6IDQsCiAgICAgInN0YXJ0IjogewogICAgICAgIngiOiAxLAogICAgICAgInkiOiAxCiAgICAgfSwKICAgICAiZGlyZWN0aW9uIjogIkRvd24iLAogICAgICJsZW5ndGgiOiAxMCwKICAgICAiY2x1ZSI6ICJBIHNlcmllcyBvZiB3b3JkcyB0aGF0IGNhbiBkZXRlcm1pbmlzdGljYWxseSBnZW5lcmF0ZSBhIHByaXZhdGUga2V5LiIKICAgfSwKICAgewogICAgICJudW0iOiA1LAogICAgICJzdGFydCI6IHsKICAgICAgICJ4IjogMSwKICAgICAgICJ5IjogMwogICAgIH0sCiAgICAgImRpcmVjdGlvbiI6ICJBY3Jvc3MiLAogICAgICJsZW5ndGgiOiAzLAogICAgICJjbHVlIjogIldoZW4gZG9pbmcgaGlnaC1sZXZlbCBjcm9zcy1jb250cmFjdCBjYWxscywgd2UgaW1wb3J0IHRoaXMgdGhhdCBlbmRzIGluIF9jb250cmFjdC4gV2hlbiBjYWxsaW5nIG91cnNlbHZlcyBpbiBhIGNhbGxiYWNrLCBpdCBpcyBjb252ZW50aW9uIHRvIGNhbGwgaXQgVEhJU19zZWxmLiIKICAgfSwKICAgewogICAgICJudW0iOiA2LAogICAgICJzdGFydCI6IHsKICAgICAgICJ4IjogMCwKICAgICAgICJ5IjogOAogICAgIH0sCiAgICAgImRpcmVjdGlvbiI6ICJBY3Jvc3MiLAogICAgICJsZW5ndGgiOiA4LAogICAgICJjbHVlIjogIlVzZSB0aGlzIHRvIGRldGVybWluZSB0aGUgZXhlY3V0aW9uIG91dGNvbWUgb2YgYSBjcm9zcy1jb250cmFjdCBjYWxsIG9yIEFjdGlvbi4iCiAgIH0sCiAgIHsKICAgICAibnVtIjogNywKICAgICAic3RhcnQiOiB7CiAgICAgICAieCI6IDQsCiAgICAgICAieSI6IDYKICAgICB9LAogICAgICJkaXJlY3Rpb24iOiAiQWNyb3NzIiwKICAgICAibGVuZ3RoIjogNCwKICAgICAiY2x1ZSI6ICJZb3UgY2hhaW4gdGhpcyBzeW50YXggb250byBhIHByb21pc2UgaW4gb3JkZXIgdG8gc2NoZWR1bGUgYSBjYWxsYmFjayBhZnRlcndhcmQuIgogICB9CiAgXQp9"\n}}\' --gas 100000000000000 --accountId $NEAR_ACCT --networkId testnet\n'})})}),(0,a.jsx)(o.Z,{value:"full",label:"Full",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"near contract call-function as-transaction $NEAR_ACCT new_puzzle json-args '{\n  \"args\": \"ewogICJhbnN3ZXJfcGsiOiAiZWQyNTUxOTo3UGtLUG1WVVhjdXBBNW9VOGQ2VGJneU13ekZlOHRQVjZlVjFLR3dnbzl4ZyIsCiAgImRpbWVuc2lvbnMiOiB7CiAgICJ4IjogMTEsCiAgICJ5IjogMTAKICB9LAogICJhbnN3ZXJzIjogWwogICB7CiAgICAgIm51bSI6IDEsCiAgICAgInN0YXJ0IjogewogICAgICAgIngiOiAwLAogICAgICAgInkiOiAxCiAgICAgfSwKICAgICAiZGlyZWN0aW9uIjogIkFjcm9zcyIsCiAgICAgImxlbmd0aCI6IDEyLAogICAgICJjbHVlIjogIk5FQVIgdHJhbnNhY3Rpb25zIGFyZSBtb3JlIF9fX19fXyBpbnN0ZWFkIG9mIGF0b21pYy4iCiAgIH0sCiAgIHsKICAgICAibnVtIjogMiwKICAgICAic3RhcnQiOiB7CiAgICAgICAieCI6IDYsCiAgICAgICAieSI6IDAKICAgICB9LAogICAgICJkaXJlY3Rpb24iOiAiRG93biIsCiAgICAgImxlbmd0aCI6IDcsCiAgICAgImNsdWUiOiAiSW4gYSBzbWFydCBjb250cmFjdCwgd2hlbiBwZXJmb3JtaW5nIGFuIEFjdGlvbiwgeW91IHVzZSB0aGlzIGluIFJ1c3QuIgogICB9LAogICB7CiAgICAgIm51bSI6IDMsCiAgICAgInN0YXJ0IjogewogICAgICAgIngiOiA5LAogICAgICAgInkiOiAwCiAgICAgfSwKICAgICAiZGlyZWN0aW9uIjogIkRvd24iLAogICAgICJsZW5ndGgiOiA2LAogICAgICJjbHVlIjogIkluIGRvY3MucnMgd2hlbiB5b3Ugc2VhcmNoIGZvciB0aGUgbmVhci1zZGsgY3JhdGUsIHRoZXNlIGl0ZW1zIGEgY29uc2lkZXJlZCBhIHdoYXQ6IGNvbGxlY3Rpb25zLCBlbnYsIGpzb25fdHlwZXMuIgogICB9LAogICB7CiAgICAgIm51bSI6IDQsCiAgICAgInN0YXJ0IjogewogICAgICAgIngiOiAxLAogICAgICAgInkiOiAxCiAgICAgfSwKICAgICAiZGlyZWN0aW9uIjogIkRvd24iLAogICAgICJsZW5ndGgiOiAxMCwKICAgICAiY2x1ZSI6ICJBIHNlcmllcyBvZiB3b3JkcyB0aGF0IGNhbiBkZXRlcm1pbmlzdGljYWxseSBnZW5lcmF0ZSBhIHByaXZhdGUga2V5LiIKICAgfSwKICAgewogICAgICJudW0iOiA1LAogICAgICJzdGFydCI6IHsKICAgICAgICJ4IjogMSwKICAgICAgICJ5IjogMwogICAgIH0sCiAgICAgImRpcmVjdGlvbiI6ICJBY3Jvc3MiLAogICAgICJsZW5ndGgiOiAzLAogICAgICJjbHVlIjogIldoZW4gZG9pbmcgaGlnaC1sZXZlbCBjcm9zcy1jb250cmFjdCBjYWxscywgd2UgaW1wb3J0IHRoaXMgdGhhdCBlbmRzIGluIF9jb250cmFjdC4gV2hlbiBjYWxsaW5nIG91cnNlbHZlcyBpbiBhIGNhbGxiYWNrLCBpdCBpcyBjb252ZW50aW9uIHRvIGNhbGwgaXQgVEhJU19zZWxmLiIKICAgfSwKICAgewogICAgICJudW0iOiA2LAogICAgICJzdGFydCI6IHsKICAgICAgICJ4IjogMCwKICAgICAgICJ5IjogOAogICAgIH0sCiAgICAgImRpcmVjdGlvbiI6ICJBY3Jvc3MiLAogICAgICJsZW5ndGgiOiA4LAogICAgICJjbHVlIjogIlVzZSB0aGlzIHRvIGRldGVybWluZSB0aGUgZXhlY3V0aW9uIG91dGNvbWUgb2YgYSBjcm9zcy1jb250cmFjdCBjYWxsIG9yIEFjdGlvbi4iCiAgIH0sCiAgIHsKICAgICAibnVtIjogNywKICAgICAic3RhcnQiOiB7CiAgICAgICAieCI6IDQsCiAgICAgICAieSI6IDYKICAgICB9LAogICAgICJkaXJlY3Rpb24iOiAiQWNyb3NzIiwKICAgICAibGVuZ3RoIjogNCwKICAgICAiY2x1ZSI6ICJZb3UgY2hhaW4gdGhpcyBzeW50YXggb250byBhIHByb21pc2UgaW4gb3JkZXIgdG8gc2NoZWR1bGUgYSBjYWxsYmFjayBhZnRlcndhcmQuIgogICB9CiAgXQp9\"\n}' prepaid-gas '100.0 Tgas' attached-deposit '0 NEAR' sign-as $NEAR_ACCT network-config testnet sign-with-keychain send\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Back at the project root (not in the ",(0,a.jsx)(n.code,{children:"contract"})," directory) we can run our app and see the new crossword puzzle:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"CONTRACT_NAME=crossword.friend.testnet npm run start\n"})}),"\n",(0,a.jsx)(n.h2,{id:"wrapping-up",children:"Wrapping up"}),"\n",(0,a.jsx)(n.p,{children:"Once you understand cross-contract calls and callbacks and where the logic should go, you can build just about anything on NEAR."}),"\n",(0,a.jsxs)(n.p,{children:["This might be a good time for a reminder that this crossword puzzle, which checks permissions to methods based on a public key, is a bit unusual. It's more common to have simple collections or mappings for allowed users, or utilize the ",(0,a.jsx)(n.code,{children:"owner_id"})," field we set up. The account and access key system in NEAR is quite powerful, and hopefully this tutorial helps stretch the limits of what's possible, like the seamless onboarding we have with the crossword puzzle."]}),"\n",(0,a.jsx)(n.p,{children:"Again, the final code for this chapter:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/near-examples/crossword-tutorial-chapter-3",children:"https://github.com/near-examples/crossword-tutorial-chapter-3"})}),"\n",(0,a.jsx)(n.p,{children:"Happy hacking!"})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(C,{...e})}):C(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var a=t(36905);const r={tabItem:"tabItem_Ymn6"};var i=t(85893);function s(e){var n=e.children,t=e.hidden,s=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(67294),r=t(36905),i=t(12466),s=t(16550),o=t(20469),l=t(91980),c=t(67392),g=t(20812);function I(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function u(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return I(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.lx)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function d(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function C(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,i=(0,s.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:r});return[(0,l._X)(o),(0,a.useCallback)((function(e){if(o){var n=new URLSearchParams(i.location.search);n.set(o,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[o,i])]}function h(e){var n,t,r,i,s=e.defaultValue,l=e.queryString,c=void 0!==l&&l,I=e.groupId,h=u(e),A=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:h})})),b=A[0],m=A[1],p=C({queryString:c,groupId:I}),f=p[0],j=p[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:I}.groupId),t=(0,g.Nk)(n),r=t[0],i=t[1],[r,(0,a.useCallback)((function(e){n&&i.set(e)}),[n,i])]),x=w[0],v=w[1],y=function(){var e=null!=f?f:x;return d({value:e,tabValues:h})?e:null}();return(0,o.Z)((function(){y&&m(y)}),[y]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!d({value:e,tabValues:h}))throw new Error("Can't select invalid tab value="+e);m(e),j(e),v(e)}),[j,v,h]),tabValues:h}}var A=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(85893);function p(e){var n=e.className,t=e.block,a=e.selectedValue,s=e.selectValue,o=e.tabValues,l=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,g=function(e){var n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==a&&(c(n),s(r))},I=function(e){var n,t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":var a,r=l.indexOf(e.currentTarget)+1;t=null!=(a=l[r])?a:l[0];break;case"ArrowLeft":var i,s=l.indexOf(e.currentTarget)-1;t=null!=(i=l[s])?i:l[l.length-1]}null==(n=t)||n.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:o.map((function(e){var n=e.value,t=e.label,i=e.attributes;return(0,m.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return l.push(e)},onKeyDown:I,onClick:g},i,{className:(0,r.Z)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)}))})}function f(e){var n=e.lazy,t=e.children,i=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var o=s.find((function(e){return e.props.value===i}));return o?(0,a.cloneElement)(o,{className:(0,r.Z)("margin-top--md",o.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})}))})}function j(e){var n=h(e);return(0,m.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,m.jsx)(p,Object.assign({},n,e)),(0,m.jsx)(f,Object.assign({},n,e))]})}function w(e){var n=(0,A.Z)();return(0,m.jsx)(j,Object.assign({},e,{children:I(e.children)}),String(n))}},71183:(e,n,t)=>{t.d(n,{O2:()=>C,Ey:()=>A,SQ:()=>h});var a=t(67294),r=t(74866),i=t(85162),s=t(74165),o=t(15861),l=t(1841),c=t.n(l),g=t(85893);function I(){return(I=(0,o.Z)((0,s.Z)().mark((function e(n,t,a){var r,i,o,l;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((i=localStorage.getItem(n+"-until"))&&i>Date.now())){e.next=5;break}r=localStorage.getItem(n),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(n);case 8:return e.next=10,e.sent.text();case 10:r=e.sent,localStorage.setItem(n,r),localStorage.setItem(n+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return o=r.split("\n"),t=t?Number(t)-1:0,a=a?Number(a):o.length,o=o.slice(t,a),l=o.reduce((function(e,n){if(0===n.length)return e;var t=n.match(/^\s+/);return t?Math.min(e,t[0].length):0}),1/0),e.abrupt("return",o.map((function(e){return e.slice(l)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const u=function(e){var n=e.url,t=e.start,r=e.end,i=e.language,s=e.fname,o=e.metastring,l=(0,a.useState)("Loading..."),u=l[0],d=l[1];return(0,a.useEffect)((function(){var e=function(e){var n=e.slice(e.indexOf("https")).split("#"),t=n[0],a=(n[1],new URL(t).pathname.split("/").slice(1)),r=a[0],i=a[1];return a[2],"https://raw.githubusercontent.com/"+r+"/"+i+"/"+a[3]+"/"+a.slice(4).join("/")}(n),a=function(e,n,t){return I.apply(this,arguments)}(e,t,r);a.then((function(e){return d(e)}))})),(0,g.jsxs)("div",{fname:s,children:[(0,g.jsx)(c(),{language:i,metastring:o+" showLineNumbers",children:u}),(0,g.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,g.jsx)("a",{href:n,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var d={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function C(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,g.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,g.jsx)(i.Z,{value:e.props.value,label:d[e.props.value],children:e})}))})}function h(e){var n=e.children,t=e.language,a=e.showSingleFName;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var t=e.props,a=(t.children,t.url),r=t.start,i=t.end,s=t.fname;if(e.type===A)return A({url:a,start:r,end:i,language:n,fname:s});return e}(e,t)})),1!=n.length||a?(0,g.jsx)(r.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,g.jsx)(i.Z,{value:n,label:e.props.fname,children:e})}))}):(0,g.jsx)(i.Z,{value:0,label:n[0].props.fname,children:n[0]})}function A(e){var n=e.url,t=e.start,a=e.end,r=e.language,i=e.fname,s=e.metastring;return u({url:n,start:t,end:a,language:r,fname:i,metastring:s})}}}]);