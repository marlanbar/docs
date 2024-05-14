"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4585],{34128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=n(85893),a=n(11151);const r={id:"get-started"},o="Getting Started",c={id:"sdk/rust/get-started",title:"Getting Started",description:"Install Rust and Wasm toolchain",source:"@site/../docs/sdk/rust/intro.md",sourceDirName:"sdk/rust",slug:"/sdk/rust/get-started",permalink:"/sdk/rust/get-started",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/intro.md",tags:[],version:"current",lastUpdatedBy:"Joe",lastUpdatedAt:1711104191e3,frontMatter:{id:"get-started"},sidebar:"tools",previous:{title:"About Rust SDK",permalink:"/sdk/rust/introduction"},next:{title:"near",permalink:"/sdk/rust/contract-structure/near-bindgen"}},i={},l=[{value:"Install Rust and Wasm toolchain",id:"install-rust-and-wasm-toolchain",level:2},{value:"Create a new project",id:"create-a-new-project",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsx)(t.h2,{id:"install-rust-and-wasm-toolchain",children:"Install Rust and Wasm toolchain"}),"\n",(0,s.jsxs)(t.p,{children:["Follow ",(0,s.jsx)(t.a,{href:"https://doc.rust-lang.org/book/ch01-01-installation.html",children:"these instructions"})," for setting up Rust."]}),"\n",(0,s.jsx)(t.p,{children:"To install Rust on Linux or MacOS, use the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh\n\nsource $HOME/.cargo/env\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Then, add the ",(0,s.jsx)(t.code,{children:"wasm32-unknown-unknown"})," toolchain. This toolchain is required because the contracts that we will build will be compiled to ",(0,s.jsx)(t.a,{href:"https://webassembly.org/",children:"Wasm"})," to run on the NEAR blockchain."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"rustup target add wasm32-unknown-unknown\n"})}),"\n",(0,s.jsx)(t.h2,{id:"create-a-new-project",children:"Create a new project"}),"\n",(0,s.jsxs)(t.p,{children:["The best way to create a new NEAR app connected with a frontend is through ",(0,s.jsx)(t.a,{href:"https://github.com/near/create-near-app",children:"create-near-app"}),". When initializing the project, your option are ",(0,s.jsx)(t.code,{children:"npx create-near-app <projectName> [--frontend next|vanilla|none] [--contract rs|ts|none --tests rs|ts|none]"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npx create-near-app my-project --contract rs --frontend none --tests rs\n"})}),"\n",(0,s.jsxs)(t.p,{children:["If you only wish to develop and deploy a Rust contract, the ",(0,s.jsx)(t.a,{href:"https://github.com/near-examples/rust-status-message",children:"status message example"})," is great to use as a template or through ",(0,s.jsx)(t.a,{href:"https://github.com/cargo-generate/cargo-generate",children:"cargo-generate"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["To initialize a new project with ",(0,s.jsx)(t.code,{children:"cargo-generate"}),", run the following commands:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"cargo install cargo-generate --features vendored-openssl\n\ncargo generate --git https://github.com/near-examples/rust-status-message --name my-project\ncd my-project\n"})}),"\n",(0,s.jsxs)(t.p,{children:["If you would like to generate a new crate manually with ",(0,s.jsx)(t.code,{children:"cargo new --lib <crate-name>"}),", make sure you include the following configuration in the generated ",(0,s.jsx)(t.code,{children:"Cargo.toml"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-toml",children:'[dependencies]\nnear-sdk = "4.0.0"\n\n[lib]\ncrate-type = ["cdylib"]\n\n[profile.release]\ncodegen-units = 1\n# Tell `rustc` to optimize for small code size.\nopt-level = "z"\nlto = true\ndebug = false\npanic = "abort"\n# Opt into extra safety checks on arithmetic operations https://stackoverflow.com/a/64136471/249801\noverflow-checks = true\n'})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var s=n(67294);const a={},r=s.createContext(a);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);