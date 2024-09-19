"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3256],{4644:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=t(85893),o=t(11151);const i={title:"Getting Started on NEAR Using Windows",authors:["flmel"],slug:"getting-started-on-windows",tags:["windows","tutorial","getting-started"],hide_table_of_contents:!0},r=void 0,l={permalink:"/ko/blog/getting-started-on-windows",source:"@site/i18n/ko/docusaurus-plugin-content-blog/2024-06-05.md",title:"Getting Started on NEAR Using Windows",description:"In this article, we will cover how to install WSL and setup a NEAR development environment on Windows.",date:"2024-06-05T00:00:00.000Z",tags:[{inline:!0,label:"windows",permalink:"/ko/blog/tags/windows"},{inline:!0,label:"tutorial",permalink:"/ko/blog/tags/tutorial"},{inline:!0,label:"getting-started",permalink:"/ko/blog/tags/getting-started"}],readingTime:3.04,hasTruncateMarker:!0,authors:[{name:"Lyudmil",title:"DevRel",url:"https://github.com/flmel",imageURL:"https://github.com/flmel.png",key:"flmel",page:null}],frontMatter:{title:"Getting Started on NEAR Using Windows",authors:["flmel"],slug:"getting-started-on-windows",tags:["windows","tutorial","getting-started"],hide_table_of_contents:!0},unlisted:!1,prevItem:{title:"One place for all Smart Contracts Docs",permalink:"/ko/blog/sdks-unified"},nextItem:{title:"It's gonna be Legen... wait for it...",permalink:"/ko/blog/yield-resume"}},a={authorsImageUrls:[void 0]},d=[{value:"WSL",id:"wsl",level:3},{value:"Enable WSL from <code>Windows Features</code>",id:"enable-wsl-from-windows-features",level:4},{value:"Start WSL and Install Ubuntu",id:"start-wsl-and-install-ubuntu",level:4},{value:"Install Required Packages",id:"install-required-packages",level:3},{value:"Setup Developer Environment",id:"setup-developer-environment",level:3},{value:"Node (JS/TS)",id:"node-jsts",level:4},{value:"Rust",id:"rust",level:4},{value:"That&#39;s It",id:"thats-it",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"In this article, we will cover how to install WSL and setup a NEAR development environment on Windows."}),"\n",(0,s.jsx)(n.h3,{id:"wsl",children:"WSL"}),"\n",(0,s.jsx)(n.p,{children:"WSL, or Windows Subsystem for Linux, is a compatibility layer for running Linux binary executables natively on Windows. It allows us to run a GNU/Linux environment directly on Windows without the overhead of a traditional virtual machine or dual-boot setup."}),"\n",(0,s.jsxs)(n.h4,{id:"enable-wsl-from-windows-features",children:["Enable WSL from ",(0,s.jsx)(n.code,{children:"Windows Features"})]}),"\n",(0,s.jsxs)(n.p,{children:["First of all, make sure that WSL is enabled, for this go to:\n",(0,s.jsx)(n.code,{children:"Control Panel > Programs > Turn Windows Features on or off"}),"\nScrolling down will reveal the option ",(0,s.jsx)(n.code,{children:"Windows Subsystem for Linux"}),". Make sure it is enabled and press OK to confirm (you will be asked to reboot your computer)."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Windows Features WSL Enabled",src:t(80373).Z+"",width:"908",height:"792"})}),"\n",(0,s.jsx)(n.h4,{id:"start-wsl-and-install-ubuntu",children:"Start WSL and Install Ubuntu"}),"\n",(0,s.jsxs)(n.p,{children:["Now we will spend some time in either ",(0,s.jsx)(n.code,{children:"PowerShell"})," or ",(0,s.jsx)(n.a,{href:"https://apps.microsoft.com/detail/9n0dx20hk701",children:"Windows Terminal"}),", which is a modern terminal application that supports various command-line tools and shells."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# may be desirable for seamless integration between WSL2 distros of linux and docker with WSL backend \nwsl --set-default-version 2\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"wsl --install --d Ubuntu\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Read more on WSL:"}),"\n",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/windows/wsl/install",children:"https://learn.microsoft.com/en-us/windows/wsl/install"}),"\n",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/windows/wsl/setup/environment",children:"https://learn.microsoft.com/en-us/windows/wsl/setup/environment"}),"\n",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/windows/wsl/",children:"https://learn.microsoft.com/en-us/windows/wsl/"})]}),"\n",(0,s.jsx)(n.h3,{id:"install-required-packages",children:"Install Required Packages"}),"\n",(0,s.jsxs)(n.p,{children:["Once the installation is completed you will have Ubuntu installed as any other application on Windows. Open it from the start menu and you will be dropped into the ",(0,s.jsx)(n.a,{href:"https://ubuntu.com/tutorials/command-line-for-beginners#1-overview",children:"Ubuntu bash shell"})]}),"\n",(0,s.jsx)(n.p,{children:"Enter the following commands to install all the packages that Rust and Node might need later:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"apt-get update\napt-get install gcc make libudev-dev openssl pkg-config unzip -y\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"Permission Denied?",type:"tip",children:(0,s.jsxs)(n.p,{children:["Depending on your setup, you might need to run the commands with ",(0,s.jsx)(n.code,{children:"sudo"}),". This temporarily grants your user elevated privileges to perform tasks that require higher permissions."]})}),"\n",(0,s.jsx)(n.h3,{id:"setup-developer-environment",children:"Setup Developer Environment"}),"\n",(0,s.jsx)(n.p,{children:"Now that we have WSL enabled and running Ubuntu, it is time to setup our developer environment. At NEAR we currently support using JS/TS and Rust to develop smart contracts, and JS/TS to develop web applications."}),"\n",(0,s.jsxs)(n.p,{children:["Bellow we will explain how to install both ",(0,s.jsx)(n.code,{children:"Node.js"})," and ",(0,s.jsx)(n.code,{children:"Rust"}),". If you want, you can install only one of them (e.g. if you are only planning to create a Rust contract, you don't need Node.js). However, we do recommend to install both so your environment is ready if you want to try something different later."]}),"\n",(0,s.jsx)(n.h4,{id:"node-jsts",children:"Node (JS/TS)"}),"\n",(0,s.jsxs)(n.p,{children:["Node.js is a JavaScript runtime environment that executes code outside a web browser, enabling the development of server-side applications. In NEAR development, it can be used to write smart contracts in ",(0,s.jsx)(n.a,{href:"https://www.typescriptlang.org/",children:"TypeScript"}),", as well as to create Web applications that interact with NEAR."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"# installs nvm (Node Version Manager)\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash\n# download and install Node.js\nnvm install 20\n# verifies the right Node.js version is in the environment\nnode -v # should print `v20.14.0`\n# verifies the right NPM version is in the environment\nnpm -v # should print `10.7.0`\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Read more:"}),"\n",(0,s.jsx)(n.a,{href:"https://nodejs.org/",children:"NodeJS Website"})]}),"\n",(0,s.jsx)(n.h4,{id:"rust",children:"Rust"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://www.rust-lang.org/",children:"Rust"})," is a programming language known for its safety and performance. It's used in NEAR development to write secure and efficient smart contracts."]}),"\n",(0,s.jsxs)(n.p,{children:["Next, we need to add the ",(0,s.jsx)(n.code,{children:"wasm32-unknown-unknown"})," toolchain. This toolchain is required because the contracts we build will be compiled to ",(0,s.jsx)(n.a,{href:"https://webassembly.org/",children:"WASM"})," to run on the NEAR blockchain."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n# When prompted, press enter for default install options\n. source $HOME/.cargo/env\nrustup target add wasm32-unknown-unknown\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Read more:"}),"\n",(0,s.jsx)(n.a,{href:"https://www.rust-lang.org/learn/get-started",children:"Getting Started with Rust"})]}),"\n",(0,s.jsx)(n.h3,{id:"thats-it",children:"That's It"}),"\n",(0,s.jsxs)(n.p,{children:["At this point, we are ready to install the relevant tooling and start building on NEAR. Head over to the ",(0,s.jsx)(n.a,{href:"http://docs.near.org/build/smart-contracts/quickstart",children:"Quickstart"})," section of the docs for more information or jump right into the ",(0,s.jsx)(n.a,{href:"https://github.com/near-examples",children:"examples"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},80373:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/windows-features-wsl-enabled-a1476cedd8df0e961ba21dd9af59374a.jpg"},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var s=t(67294);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);