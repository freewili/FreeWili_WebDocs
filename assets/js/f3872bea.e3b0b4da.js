"use strict";(self.webpackChunkfreewili_docs=self.webpackChunkfreewili_docs||[]).push([[6903],{6502:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=i(4848),r=i(8453);const o={sidebar_position:1},n="FPGA Programming",s={id:"hardware-low-level-details/ice40-fpga/fpga-programming",title:"FPGA Programming",description:"The ice40 FPGA is a SRAM configured FPGA that is programmed automatically at power up.",source:"@site/docs/hardware-low-level-details/ice40-fpga/fpga-programming.md",sourceDirName:"hardware-low-level-details/ice40-fpga",slug:"/hardware-low-level-details/ice40-fpga/fpga-programming",permalink:"/hardware-low-level-details/ice40-fpga/fpga-programming",draft:!1,unlisted:!1,editUrl:"https://github.com/freewili/FreeWili_WebDocs/blob/main/docs/hardware-low-level-details/ice40-fpga/fpga-programming.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"iCE40 FPGA",permalink:"/hardware-low-level-details/ice40-fpga/"},next:{title:"FPGA Clock",permalink:"/hardware-low-level-details/ice40-fpga/fpga-clock"}},l={},c=[];function d(e){const t={h1:"h1",header:"header",p:"p",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"fpga-programming",children:"FPGA Programming"})}),"\n",(0,a.jsx)(t.p,{children:"The ice40 FPGA is a SRAM configured FPGA that is programmed automatically at power up."}),"\n",(0,a.jsx)(t.p,{children:"By default the ice40 reads a default configuration from its OTP memory. This default image allows basic pass through configuration  of the RP2040 gpio to the IO drivers."}),"\n",(0,a.jsx)(t.p,{children:'Because of the SRAM configuration, the FPGA can be reprogrammed unlimted times at anytime by the RP2040 chip. To do this the RP2040 uses the the FPGA DONE, FPGA RESET and SPI interface from the RP2040. The ice40 documentation calls this the "SPI Slave Configuration Interface". This method of programming is described in the Lattice ICE40 document "iCE40 Programming and Configuration" with document number FPGA-TN-02001.'}),"\n",(0,a.jsx)(t.p,{children:"When reprogramming the FPGA the bit file would be fed from the RP2040. An obvious place to store the bit file is RP2040 flash as a const byte array."}),"\n",(0,a.jsx)(t.p,{children:"The Intrepid IO app can store multiple FPGA bit files in its file system and load them on command or at startup. It can also load them directly from USB."})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>n,x:()=>s});var a=i(6540);const r={},o=a.createContext(r);function n(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);