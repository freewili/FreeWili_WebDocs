"use strict";(self.webpackChunkfreewili_docs=self.webpackChunkfreewili_docs||[]).push([[3905],{5080:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var s=t(4848),n=t(8453);const o={sidebar_position:7},a="IO App",r={id:"io-app/io-app",title:"IO App",description:"FREE-WILi includes an IO app that allows you to read and write all the IO of FREE-WILi. This app has a Serial Command Line Interface, support for a host API,  on-board scripting, and a file system for stand-alone operations without a host.",source:"@site/docs/io-app/io-app.md",sourceDirName:"io-app",slug:"/io-app/",permalink:"/io-app/",draft:!1,unlisted:!1,editUrl:"https://github.com/freewili/FreeWili_WebDocs/blob/main/docs/io-app/io-app.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Custom Orca",permalink:"/extending-with-orcas/custom-orca"},next:{title:"Main Menu Header",permalink:"/io-app/main-menu-header"}},c={},d=[];function l(e){const i={a:"a",h1:"h1",header:"header",img:"img",p:"p",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"io-app",children:"IO App"})}),"\n",(0,s.jsx)(i.p,{children:"FREE-WILi includes an IO app that allows you to read and write all the IO of FREE-WILi. This app has a Serial Command Line Interface, support for a host API,  on-board scripting, and a file system for stand-alone operations without a host."}),"\n",(0,s.jsx)(i.p,{children:"The serial command line interface provides a menu tree of commands to control FREE-WILi's IO interfaces. This is shown below:"}),"\n",(0,s.jsx)("div",{class:"text--center",children:(0,s.jsx)("figure",{children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.img,{alt:"FREE-WILi&#39;s Serial Command Line Interface Main Menu",src:t(6807).A+"",title:"FREE-WILi&#39;s Serial Command Line Interface Main Menu",width:"657",height:"1212"}),"\n",(0,s.jsx)("figcaption",{children:"FREE-WILi's Serial Command Line Interface Main Menu"})]})})}),"\n",(0,s.jsx)(i.p,{children:"To use a command, press a letter and the enter key. Then follow the instructions."}),"\n",(0,s.jsx)(i.p,{children:'The serial API is simply sending these menu commands and the data they expect. Below is a simple Python API that sets a GPIO high or low using the "h" and "l" commands. In API mode you can disable the menu text with by sending CTRL-B or reenable the menu text with CTRL-C.'}),"\n",(0,s.jsx)("div",{class:"text--center",children:(0,s.jsxs)("figure",{children:[(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"python api for FREE-WILi",src:t(2403).A+"",title:"python api for FREE-WILi",width:"520",height:"251"})}),(0,s.jsx)("figcaption",{})]})}),"\n",(0,s.jsxs)(i.p,{children:["On board scripting uses web assembly technology.  The code uses the WASM 3 engine with custom APIs to control FREE-WILi's interfaces. With this you can compile C/C++ or Rust source code to run on FREE-WILi with our without the host.  The recommend Clang based wasi sdk is recommend ",(0,s.jsx)(i.a,{href:"https://github.com/WebAssembly/wasi-sdk",children:"https://github.com/WebAssembly/wasi-sdk."})]}),"\n",(0,s.jsx)("div",{class:"text--center",children:(0,s.jsx)("figure",{children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.img,{alt:"C/C++ program using WASI SDK and CLion.",src:t(4834).A+"",title:"C/C++ program using WASI SDK and CLion.",width:"768",height:"681"}),"\n",(0,s.jsx)("figcaption",{children:"C/C++ program using WASI SDK and CLion."})]})})}),"\n",(0,s.jsx)(i.p,{children:'Finally, the file system provides a way to load scripts or run them at startup, load custom FPGA bit files, and store settings. This is shown below. Note getting files on the FREE-WILi uses the "Download File" command.'}),"\n",(0,s.jsx)("div",{class:"text--center",children:(0,s.jsx)("figure",{children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.img,{alt:"The Filesystem menu provides interaction with file system.",src:t(5242).A+"",title:"The Filesystem menu provides interaction with file system.",width:"620",height:"657"}),"\n",(0,s.jsx)("figcaption",{children:"The Filesystem menu provides interaction with file system."})]})})})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},5242:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/Filesystem-cf4429d31f0ef8487cf562c789e57e28.png"},4834:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/WASI-SDK-CLion-29115cc4bd8f52f93a61c91be881e1f8.jpg"},6807:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/cmd-c05b250b4b1d5ceddc122a7b4a628c71.png"},2403:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/code-04a130c2f606f94ad59985e11946dc42.png"},8453:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>r});var s=t(6540);const n={},o=s.createContext(n);function a(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);