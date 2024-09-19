"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9435],{72559:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>u,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=t(85893),r=t(11151),o=t(74866),c=t(85162);const l={id:"lock",title:"Locking Accounts"},u=void 0,s={id:"build/smart-contracts/release/lock",title:"Locking Accounts",description:"Removing all full access keys from an account will effectively lock it.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/2.build/2.smart-contracts/release/lock.md",sourceDirName:"2.build/2.smart-contracts/release",slug:"/build/smart-contracts/release/lock",permalink:"/zh-CN/build/smart-contracts/release/lock",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/2.smart-contracts/release/lock.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1713279052e3,frontMatter:{id:"lock",title:"Locking Accounts"},sidebar:"build",previous:{title:"Updating Contracts",permalink:"/zh-CN/build/smart-contracts/release/upgrade"},next:{title:"Security",permalink:"/zh-CN/build/smart-contracts/security/welcome"}},i={},d=[{value:"How to Lock an Account",id:"how-to-lock-an-account",level:4},{value:"Why Locking an Account",id:"why-locking-an-account",level:4}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Removing all ",(0,a.jsx)(n.a,{href:"/zh-CN/tools/near-cli#near-delete-key-near-delete-key",children:"full access keys"})," from an account will effectively ",(0,a.jsx)(n.strong,{children:"lock it"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"When an account is locked nobody can perform transactions in the account's name (e.g. update the code or transfer money)."}),"\n",(0,a.jsx)(n.h4,{id:"how-to-lock-an-account",children:"How to Lock an Account"}),"\n",(0,a.jsxs)(o.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(c.Z,{value:"near-cli",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"near keys <dev-account>\n# result: [access_key: {\"nonce\": ..., \"public_key\": '<key>'}]\n\nnear delete-key <dev-account> '<key>'\n"})})}),(0,a.jsx)(c.Z,{value:"near-cli-rs",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"near account list-keys <dev-account> network-config testnet now\n# result:\n\n+---+------------+-------+-------------+\n| # | Public Key | Nonce | Permissions |\n+---+------------+-------+-------------+\n  ..    '<key>'      ...        ...\n+---+------------+-------+-------------+\n\nnear account delete-key <dev-account> '<key>' network-config testnet sign-with-keychain send\n"})})})]}),"\n",(0,a.jsx)(n.h4,{id:"why-locking-an-account",children:"Why Locking an Account"}),"\n",(0,a.jsx)(n.p,{children:"Locking an account brings more reassurance to end-users, since they know no external actor will be able to manipulate the account's contract or balance."}),"\n",(0,a.jsx)(n.admonition,{title:"Upgrading Locked Contracts",type:"tip",children:(0,a.jsxs)(n.p,{children:["Please do note that, while no external actor can update the contract, the contract ",(0,a.jsx)(n.strong,{children:"can still upgrade itself"}),". See ",(0,a.jsx)(n.a,{href:"/zh-CN/build/smart-contracts/release/upgrade#programmatic-update",children:"this article"})," for details."]})})]})}function f(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>c});t(67294);var a=t(36905);const r={tabItem:"tabItem_Ymn6"};var o=t(85893);function c(e){var n=e.children,t=e.hidden,c=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,c),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(67294),r=t(36905),o=t(12466),c=t(16550),l=t(20469),u=t(91980),s=t(67392),i=t(20812);function d(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,s.lx)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function f(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,o=(0,c.k6)(),l=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:r});return[(0,u._X)(l),(0,a.useCallback)((function(e){if(l){var n=new URLSearchParams(o.location.search);n.set(l,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[l,o])]}function m(e){var n,t,r,o,c=e.defaultValue,u=e.queryString,s=void 0!==u&&u,d=e.groupId,m=h(e),v=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:c,tabValues:m})})),b=v[0],g=v[1],k=p({queryString:s,groupId:d}),y=k[0],x=k[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,i.Nk)(n),r=t[0],o=t[1],[r,(0,a.useCallback)((function(e){n&&o.set(e)}),[n,o])]),j=w[0],N=w[1],C=function(){var e=null!=y?y:j;return f({value:e,tabValues:m})?e:null}();return(0,l.Z)((function(){C&&g(C)}),[C]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);g(e),x(e),N(e)}),[x,N,m]),tabValues:m}}var v=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function k(e){var n=e.className,t=e.block,a=e.selectedValue,c=e.selectValue,l=e.tabValues,u=[],s=(0,o.o5)().blockElementScrollPositionUntilNextRender,i=function(e){var n=e.currentTarget,t=u.indexOf(n),r=l[t].value;r!==a&&(s(n),c(r))},d=function(e){var n,t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":var a,r=u.indexOf(e.currentTarget)+1;t=null!=(a=u[r])?a:u[0];break;case"ArrowLeft":var o,c=u.indexOf(e.currentTarget)-1;t=null!=(o=u[c])?o:u[u.length-1]}null==(n=t)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:l.map((function(e){var n=e.value,t=e.label,o=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return u.push(e)},onKeyDown:d,onClick:i},o,{className:(0,r.Z)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)}))})}function y(e){var n=e.lazy,t=e.children,o=e.selectedValue,c=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var l=c.find((function(e){return e.props.value===o}));return l?(0,a.cloneElement)(l,{className:(0,r.Z)("margin-top--md",l.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:c.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==o})}))})}function x(e){var n=m(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(k,Object.assign({},n,e)),(0,g.jsx)(y,Object.assign({},n,e))]})}function w(e){var n=(0,v.Z)();return(0,g.jsx)(x,Object.assign({},e,{children:d(e.children)}),String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>c});var a=t(67294);const r={},o=a.createContext(r);function c(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);