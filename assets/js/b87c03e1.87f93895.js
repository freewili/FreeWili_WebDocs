"use strict";(self.webpackChunkfreewili_docs=self.webpackChunkfreewili_docs||[]).push([[5238],{3560:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var a=t(4848),n=t(8453);const r={title:"iCE40 FPGA in FREE-WILi - Overview and Specifications",description:"Discover the iCE40 FPGA in FREE-WILi, featuring high-speed IO and state machines. Learn about its default application, optional configuration changes, and part numbers for FTDI USB, Serial SRAM, and FPGA components.",keywords:["iCE40 FPGA","FREE-WILi FPGA Overview","FTDI USB FT232HQ","Serial SRAM APS6404L","FPGA Configuration","RP2040 FPGA Integration","High-Speed IO FPGA"],sidebar_position:1,sidebar_label:"iCE40 FPGA"},s="iCE40 FPGA",d={id:"hardware-low-level-details/ice40-fpga/ice40-fpga",title:"iCE40 FPGA in FREE-WILi - Overview and Specifications",description:"Discover the iCE40 FPGA in FREE-WILi, featuring high-speed IO and state machines. Learn about its default application, optional configuration changes, and part numbers for FTDI USB, Serial SRAM, and FPGA components.",source:"@site/docs/hardware-low-level-details/ice40-fpga/ice40-fpga.md",sourceDirName:"hardware-low-level-details/ice40-fpga",slug:"/hardware-low-level-details/ice40-fpga/",permalink:"/hardware-low-level-details/ice40-fpga/",draft:!1,unlisted:!1,editUrl:"https://github.com/freewili/FreeWili_WebDocs/blob/main/docs/hardware-low-level-details/ice40-fpga/ice40-fpga.md",tags:[],version:"current",lastUpdatedAt:1724134738e3,sidebarPosition:1,frontMatter:{title:"iCE40 FPGA in FREE-WILi - Overview and Specifications",description:"Discover the iCE40 FPGA in FREE-WILi, featuring high-speed IO and state machines. Learn about its default application, optional configuration changes, and part numbers for FTDI USB, Serial SRAM, and FPGA components.",keywords:["iCE40 FPGA","FREE-WILi FPGA Overview","FTDI USB FT232HQ","Serial SRAM APS6404L","FPGA Configuration","RP2040 FPGA Integration","High-Speed IO FPGA"],sidebar_position:1,sidebar_label:"iCE40 FPGA"},sidebar:"tutorialSidebar",previous:{title:"Hardware Low Level Details",permalink:"/hardware-low-level-details/"},next:{title:"FPGA Programming",permalink:"/hardware-low-level-details/ice40-fpga/fpga-programming"}},o={},c=[];function l(e){const i={a:"a",h1:"h1",header:"header",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.header,{children:(0,a.jsx)(i.h1,{id:"ice40-fpga",children:"iCE40 FPGA"})}),"\n",(0,a.jsx)(i.p,{children:"The FREE-WILi contains an iCE40 FPGA between the RP2040 main processor and the IO drivers. The FPGA allows sophisticated high speed IO and state machines that can process IO and communicate to the RP2040 or communicate to the host directly using high speed USB."}),"\n",(0,a.jsxs)(i.p,{children:["The FPGA contains a ",(0,a.jsx)(i.a,{href:"/hardware-low-level-details/ice40-fpga/fpga-default-application/",children:"default application"})," so changing FPGA configuration is entirely optional. But changing the configuration is allowed and can be done at anytime and an unlimited number of times. See ",(0,a.jsx)(i.a,{href:"/hardware-low-level-details/ice40-fpga/fpga-programming/",children:"FPGA Programming"})," for details."]}),"\n",(0,a.jsx)(i.p,{children:"The FPGA is connected to a high speed FTDI USB interface and an 8Mbyte Serial SRAM. The block diagram is shown below."}),"\n",(0,a.jsx)("div",{class:"text--center",children:(0,a.jsxs)("figure",{children:[(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"FPGA ",src:t(4291).A+"",title:"FPGA ",width:"1354",height:"666"})}),(0,a.jsx)("figcaption",{})]})}),"\n",(0,a.jsx)(i.p,{children:"The part numbers associated with the FPGA IO system are below:"}),"\n",(0,a.jsxs)(i.table,{children:[(0,a.jsx)(i.thead,{children:(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.th,{children:"Part"}),(0,a.jsx)(i.th,{children:"Part Number"}),(0,a.jsx)(i.th,{children:"Notes"})]})}),(0,a.jsxs)(i.tbody,{children:[(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"FTDI USB"}),(0,a.jsx)(i.td,{children:"FT232HQ"}),(0,a.jsxs)(i.td,{children:["Operates in FT1248 mode. ",(0,a.jsx)(i.a,{href:"https://ftdichip.com/products/ft232hq/",children:"https://ftdichip.com/products/ft232hq/"})]})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"Serial SRAM 8 MByte"}),(0,a.jsx)(i.td,{children:"APS6404L-3SQR-ZR"}),(0,a.jsx)(i.td,{children:(0,a.jsx)(i.a,{href:"https://www.apmemory.com",children:"https://www.apmemory.com"})})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"FPGA"}),(0,a.jsx)(i.td,{children:"ICE40UP5K-SG48I"}),(0,a.jsx)(i.td,{children:(0,a.jsx)(i.a,{href:"https://www.latticesemi.com/en/Products/FPGAandCPLD/iCE40UltraPlus",children:"https://www.latticesemi.com/en/Products/FPGAandCPLD/iCE40UltraPlus"})})]})]})]})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},4291:(e,i,t)=>{t.d(i,{A:()=>a});const a=t.p+"assets/images/fpga_overview-1d7ac38d02ed306035c9db184c365c70.png"},8453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>d});var a=t(6540);const n={},r=a.createContext(n);function s(e){const i=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(r.Provider,{value:i},e.children)}}}]);