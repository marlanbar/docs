"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9158],{32974:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=n(85893),a=n(11151),u=n(74866),l=n(85162);const i={},s=void 0,o={id:"build/primitives/nft/near-cli/transfer",title:"transfer",description:"",source:"@site/../docs/2.build/5.primitives/nft/near-cli/transfer.md",sourceDirName:"2.build/5.primitives/nft/near-cli",slug:"/build/primitives/nft/near-cli/transfer",permalink:"/build/primitives/nft/near-cli/transfer",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/5.primitives/nft/near-cli/transfer.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1712759479e3,frontMatter:{}},c={},d=[];function f(e){const r={code:"code",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(u.Z,{groupId:"nft-contract-tabs",className:"file-tabs",children:[(0,t.jsx)(l.Z,{value:"NFT Primitive",label:"Reference",default:!0,children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'near call nft.primitives.near nft_transfer \'{"token_id": "1", "receiver_id": "bob.near"}\' --accountId bob.near --deposit 0.000000000000000000000001\n'})})}),(0,t.jsx)(l.Z,{value:"Paras",label:"Paras",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'near call x.paras.near nft_transfer \'{"token_id": "490641", "receiver_id": "bob.near"}\' --accountId bob.near --deposit 0.000000000000000000000001\n'})})}),(0,t.jsx)(l.Z,{value:"Mintbase",label:"Mintbase",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'near call thomasettorreiv.mintbase1.near nft_transfer \'{"token_id": "490641" "receiver_id": "bob.near"}\' --accountId bob.near --deposit 0.000000000000000000000001\n'})})})]})}function b(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},85162:(e,r,n)=>{n.d(r,{Z:()=>l});n(67294);var t=n(36905);const a={tabItem:"tabItem_Ymn6"};var u=n(85893);function l(e){var r=e.children,n=e.hidden,l=e.className;return(0,u.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,l),hidden:n,children:r})}},74866:(e,r,n)=>{n.d(r,{Z:()=>w});var t=n(67294),a=n(36905),u=n(12466),l=n(16550),i=n(20469),s=n(91980),o=n(67392),c=n(20812);function d(e){var r,n;return null!=(r=null==(n=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((r=e.props)&&"object"==typeof r&&"value"in r))return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?r:[]}function f(e){var r=e.values,n=e.children;return(0,t.useMemo)((function(){var e=null!=r?r:function(e){return d(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}(n);return function(e){var r=(0,o.lx)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,n])}function b(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function v(e){var r=e.queryString,n=void 0!==r&&r,a=e.groupId,u=(0,l.k6)(),i=function(e){var r=e.queryString,n=void 0!==r&&r,t=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:a});return[(0,s._X)(i),(0,t.useCallback)((function(e){if(i){var r=new URLSearchParams(u.location.search);r.set(i,e),u.replace(Object.assign({},u.location,{search:r.toString()}))}}),[i,u])]}function p(e){var r,n,a,u,l=e.defaultValue,s=e.queryString,o=void 0!==s&&s,d=e.groupId,p=f(e),m=(0,t.useState)((function(){return function(e){var r,n=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(r=t.find((function(e){return e.default})))?r:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:p})})),h=m[0],g=m[1],x=v({queryString:o,groupId:d}),j=x[0],y=x[1],w=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,c.Nk)(r),a=n[0],u=n[1],[a,(0,t.useCallback)((function(e){r&&u.set(e)}),[r,u])]),I=w[0],k=w[1],V=function(){var e=null!=j?j:I;return b({value:e,tabValues:p})?e:null}();return(0,i.Z)((function(){V&&g(V)}),[V]),{selectedValue:h,selectValue:(0,t.useCallback)((function(e){if(!b({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),k(e)}),[y,k,p]),tabValues:p}}var m=n(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(85893);function x(e){var r=e.className,n=e.block,t=e.selectedValue,l=e.selectValue,i=e.tabValues,s=[],o=(0,u.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var r=e.currentTarget,n=s.indexOf(r),a=i[n].value;a!==t&&(o(r),l(a))},d=function(e){var r,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var t,a=s.indexOf(e.currentTarget)+1;n=null!=(t=s[a])?t:s[0];break;case"ArrowLeft":var u,l=s.indexOf(e.currentTarget)-1;n=null!=(u=s[l])?u:s[s.length-1]}null==(r=n)||r.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},r),children:i.map((function(e){var r=e.value,n=e.label,u=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:function(e){return s.push(e)},onKeyDown:d,onClick:c},u,{className:(0,a.Z)("tabs__item",h.tabItem,null==u?void 0:u.className,{"tabs__item--active":t===r}),children:null!=n?n:r}),r)}))})}function j(e){var r=e.lazy,n=e.children,u=e.selectedValue,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){var i=l.find((function(e){return e.props.value===u}));return i?(0,t.cloneElement)(i,{className:(0,a.Z)("margin-top--md",i.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map((function(e,r){return(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==u})}))})}function y(e){var r=p(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",h.tabList),children:[(0,g.jsx)(x,Object.assign({},r,e)),(0,g.jsx)(j,Object.assign({},r,e))]})}function w(e){var r=(0,m.Z)();return(0,g.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(r))}},11151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>l});var t=n(67294);const a={},u=t.createContext(a);function l(e){const r=t.useContext(u);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(u.Provider,{value:r},e.children)}}}]);