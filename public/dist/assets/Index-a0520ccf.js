import{i as t}from"./main-3525f2e5.js";import{i as s}from"./ipcRenderer-5e19eaee.js";import{_ as n,r as o,o as a,b as e,g as i,a as r,w as l,t as p,p as c,f as d}from"./index-c09e680e.js";const u={data:()=>({currentStatus:"无"}),mounted(){this.init()},methods:{init(){s.removeAllListeners(t.initPowerMonitor),s.on(t.initPowerMonitor,((t,s)=>{"[object Object]"==Object.prototype.toString.call(s)&&(this.currentStatus=s.msg,this.$message.info(s.msg))})),s.send(t.initPowerMonitor,"")}}},m=t=>(c("data-v-d47fa923"),t=t(),d(),t),f={id:"app-base-powermonitor"},b=m((()=>i("div",{class:"one-block-1"},[i("span",null," 1. 监控电源状态 ")],-1))),v={class:"one-block-2"},j=m((()=>i("p",null,"* 拔掉电源，使用电池供电",-1))),w=m((()=>i("p",null,"* 接入电源",-1))),g=m((()=>i("p",null,"* 锁屏",-1))),h=m((()=>i("p",null,"* 解锁",-1)));const S=n(u,[["render",function(t,s,n,c,d,u){const m=o("a-space");return a(),e("div",f,[b,i("div",v,[r(m,null,{default:l((()=>[i("p",null,"* 当前状态："+p(d.currentStatus),1)])),_:1}),j,w,g,h])])}],["__scopeId","data-v-d47fa923"]]);export{S as default};
