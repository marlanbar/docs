"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6810],{45549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=n(85893),r=n(11151);const o={},a=void 0,i={id:"build/primitives/ft/bos/create",title:"create",description:"",source:"@site/../docs/2.build/5.primitives/ft/bos/create.md",sourceDirName:"2.build/5.primitives/ft/bos",slug:"/build/primitives/ft/bos/create",permalink:"/build/primitives/ft/bos/create",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/5.primitives/ft/bos/create.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1712759479e3,frontMatter:{}},c={},d=[];function l(e){const t={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'const args = {\n  args: {\n    owner_id: "bob.near",\n    total_supply: "1000000000",\n    metadata: {\n      spec: "ft-1.0.0",\n      name: "Test Token",\n      symbol: "test",\n      icon: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",\n      decimals: 18,\n    },\n  },\n  account_id: "bob.near",\n};\n\nNear.call("tkn.near", "create_token", args, 300000000000000, "2234830000000000000000000");\n'})})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>a});var s=n(67294);const r={},o=s.createContext(r);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);