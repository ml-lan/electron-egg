import{i as a}from"./main-3525f2e5.js";import{i as e}from"./ipcRenderer-5e19eaee.js";import{_ as t,r as n,o,b as s,g as c,a as u,w as i,p as l,f as d}from"./index-c09e680e.js";const h={data:()=>({autoLaunchChecked:!1}),mounted(){this.init()},methods:{init(){e.invoke(a.autoLaunch,"check").then((a=>{console.log("[ipcRenderer] [autoLaunch] result:",a),this.autoLaunchChecked=a.status}))},autoLaunchChange(a){console.log("[ipcRenderer] [autoLaunch] self.autoLaunchChecked:",this.autoLaunchChecked)}}},r=a=>(l("data-v-c70dc0ba"),a=a(),d(),a),m={id:"app-base-system-launch"},p={class:"one-block-2"},C=r((()=>c("a",null,"启动",-1))),L=r((()=>c("span",null," 开机自动启动 ",-1)));const k=t(h,[["render",function(a,e,t,l,d,h){const r=n("a-list-item-meta"),k=n("a-switch"),f=n("a-list-item"),g=n("a-list");return o(),s("div",m,[c("div",p,[u(g,{class:"set-auto",itemLayout:"horizontal"},{default:i((()=>[u(f,{style:{"text-align":"left"}},{actions:i((()=>[u(k,{modelValue:d.autoLaunchChecked,"onUpdate:modelValue":e[0]||(e[0]=a=>d.autoLaunchChecked=a),checkedChildren:"开",unCheckedChildren:"关",onChange:e[1]||(e[1]=a=>h.autoLaunchChange())},null,8,["modelValue"])])),default:i((()=>[u(r,null,{title:i((()=>[C])),description:i((()=>[L])),_:1})])),_:1})])),_:1})])])}],["__scopeId","data-v-c70dc0ba"]]);export{k as default};
