"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8628],{12238:function(t,e,n){n.d(e,{G:function(){return i},o1:function(){return r}});const r={address:null,apiKey:null,chain:n(81460).L,config:{appearance:{name:null,logo:null,mode:null,theme:null},paymaster:null},rpcUrl:null,schemaId:null,projectId:null},s=t=>r[t],i=t=>(Object.assign(r,t),s)},1673:function(t,e,n){n.d(e,{C:function(){return a},A:function(){return o}});var r=n(2265),s=n(12238);var i=n(57437);const a=(0,r.createContext)(s.o1);function o({address:t,apiKey:e,chain:n,children:o,config:c,projectId:u,rpcUrl:d,schemaId:h}){if(h&&(l=h,!new RegExp(`^0x[a-fA-F0-9]{${64}}$`).test(l)))throw Error('EAS schemaId must be 64 characters prefixed with "0x"');var l;const f=(0,r.useMemo)((()=>{const r=e?`https://api.developer.coinbase.com/rpc/v1/${n.name.replace(" ","-").toLowerCase()}/${e}`:null,i={address:t??null,apiKey:e??null,chain:n,config:{appearance:{name:c?.appearance?.name,logo:c?.appearance?.logo,mode:c?.appearance?.mode??"auto",theme:c?.appearance?.theme??"default"},paymaster:c?.paymaster||r},projectId:u??null,rpcUrl:d??null,schemaId:h??null};return(0,s.G)(i),i}),[t,e,n,c,u,d,h]);return(0,i.jsx)(a.Provider,{value:f,children:o})}},40111:function(t,e,n){n.d(e,{M:function(){return i}});var r=n(2265),s=n(1673);function i(){return(0,r.useContext)(s.C)}},2894:function(t,e,n){n.d(e,{R:function(){return o},m:function(){return a}});var r=n(18238),s=n(7989),i=n(11255),a=class extends s.F{#t;#e;#n;constructor(t){super(),this.mutationId=t.mutationId,this.#e=t.mutationCache,this.#t=[],this.state=t.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0},this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#t.includes(t)||(this.#t.push(t),this.clearGcTimeout(),this.#e.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#t=this.#t.filter((e=>e!==t)),this.scheduleGc(),this.#e.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#t.length||("pending"===this.state.status?this.scheduleGc():this.#e.remove(this))}continue(){return this.#n?.continue()??this.execute(this.state.variables)}async execute(t){this.#n=(0,i.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(t,e)=>{this.#r({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#r({type:"pause"})},onContinue:()=>{this.#r({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#e.canRun(this)});const e="pending"===this.state.status,n=!this.#n.canStart();try{if(!e){this.#r({type:"pending",variables:t,isPaused:n}),await(this.#e.config.onMutate?.(t,this));const e=await(this.options.onMutate?.(t));e!==this.state.context&&this.#r({type:"pending",context:e,variables:t,isPaused:n})}const r=await this.#n.start();return await(this.#e.config.onSuccess?.(r,t,this.state.context,this)),await(this.options.onSuccess?.(r,t,this.state.context)),await(this.#e.config.onSettled?.(r,null,this.state.variables,this.state.context,this)),await(this.options.onSettled?.(r,null,t,this.state.context)),this.#r({type:"success",data:r}),r}catch(r){try{throw await(this.#e.config.onError?.(r,t,this.state.context,this)),await(this.options.onError?.(r,t,this.state.context)),await(this.#e.config.onSettled?.(void 0,r,this.state.variables,this.state.context,this)),await(this.options.onSettled?.(void 0,r,t,this.state.context)),r}finally{this.#r({type:"error",error:r})}}finally{this.#e.runNext(this)}}#r(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),r.V.batch((()=>{this.#t.forEach((e=>{e.onMutationUpdate(t)})),this.#e.notify({mutation:this,type:"updated",action:t})}))}};function o(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}},21770:function(t,e,n){n.d(e,{D:function(){return f}});var r=n(60221),s=n(88810),i=n(2265),a=n(2894),o=n(18238),c=n(24112),u=n(45345),d=class extends c.l{#s;#i=void 0;#a;#o;constructor(t,e){super(),this.#s=t,this.setOptions(e),this.bindMethods(),this.#c()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){const e=this.options;this.options=this.#s.defaultMutationOptions(t),(0,u.VS)(this.options,e)||this.#s.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#a,observer:this}),e?.mutationKey&&this.options.mutationKey&&(0,u.Ym)(e.mutationKey)!==(0,u.Ym)(this.options.mutationKey)?this.reset():"pending"===this.#a?.state.status&&this.#a.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#a?.removeObserver(this)}onMutationUpdate(t){this.#c(),this.#u(t)}getCurrentResult(){return this.#i}reset(){this.#a?.removeObserver(this),this.#a=void 0,this.#c(),this.#u()}mutate(t,e){return this.#o=e,this.#a?.removeObserver(this),this.#a=this.#s.getMutationCache().build(this.#s,this.options),this.#a.addObserver(this),this.#a.execute(t)}#c(){const t=this.#a?.state??(0,a.R)();this.#i={...t,isPending:"pending"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset}}#u(t){o.V.batch((()=>{if(this.#o&&this.hasListeners()){const e=this.#i.variables,n=this.#i.context;"success"===t?.type?(this.#o.onSuccess?.(t.data,e,n),this.#o.onSettled?.(t.data,null,e,n)):"error"===t?.type&&(this.#o.onError?.(t.error,e,n),this.#o.onSettled?.(void 0,t.error,e,n))}this.listeners.forEach((t=>{t(this.#i)}))}))}},h=n(29827),l=n(51172);function f(t,e){const n=(0,h.NL)(e),[a]=i.useState((()=>new d(n,t)));i.useEffect((()=>{a.setOptions(t)}),[a,t]);const c=i.useSyncExternalStore(i.useCallback((t=>a.subscribe(o.V.batchCalls(t))),[a]),(()=>a.getCurrentResult()),(()=>a.getCurrentResult())),u=i.useCallback(((t,e)=>{a.mutate(t,e).catch(l.Z)}),[a]);if(c.error&&(0,l.L)(a.options.throwOnError,[c.error]))throw c.error;return(0,s._)((0,r._)({},c),{mutate:u,mutateAsync:c.mutate})}},18849:function(t,e,n){n.d(e,{e:function(){return c}});var r=n(82538),s=n(24250);var i=n(19775),a=n(31669),o=n(13102);async function c(t,e={}){let n;if(e.connector){const{connector:t}=e,[r,s]=await Promise.all([t.getAccounts(),t.getChainId()]);n={accounts:r,chainId:s,connector:t}}else n=t.state.connections.get(t.state.current);if(!n)throw new o.aH;const c=e.chainId??n.chainId,u=await n.connector.getChainId();if(u!==n.chainId)throw new o.XZ({connectionChainId:n.chainId,connectorChainId:u});const d=n.connector;if(d.getClient)return d.getClient({chainId:c});const h=(0,i.T)(e.account??n.accounts[0]);h.address=(0,a.K)(h.address);const l=t.chains.find((t=>t.id===c)),f=await n.connector.getProvider({chainId:c});if(e.account&&!n.accounts.some((t=>t.toLowerCase()===h.address.toLowerCase())))throw new o.JK({address:h.address,connector:d});return(0,r.e)({account:h,chain:l,name:"Connector Client",transport:t=>function(t,e={}){const{key:n="custom",name:r="Custom Provider",retryDelay:i}=e;return({retryCount:a})=>(0,s.q)({key:n,name:r,request:t.request.bind(t),retryCount:e.retryCount??a,retryDelay:i,type:"custom"})}(f)({...t,retryCount:0})})}},54728:function(t,e,n){n.d(e,{c:function(){return i}});var r=n(13102),s=n(14478);async function i(t,e){const{addEthereumChainParameter:n,chainId:i}=e,a=t.state.connections.get(e.connector?.uid??t.state.current);if(a){const t=a.connector;if(!t.switchChain)throw new s.O({connector:t});return await t.switchChain({addEthereumChainParameter:n,chainId:i})}const o=t.chains.find((t=>t.id===i));if(!o)throw new r.X4;return t.setState((t=>({...t,chainId:i}))),o}},13102:function(t,e,n){n.d(e,{JK:function(){return o},X4:function(){return s},XZ:function(){return c},aH:function(){return a},wi:function(){return i}});var r=n(26129);class s extends r.G{constructor(){super("Chain not configured."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotConfiguredError"})}}class i extends r.G{constructor(){super("Connector already connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAlreadyConnectedError"})}}class a extends r.G{constructor(){super("Connector not connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorNotConnectedError"})}}r.G;class o extends r.G{constructor({address:t,connector:e}){super(`Account "${t}" not found for connector "${e.name}".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAccountNotFoundError"})}}class c extends r.G{constructor({connectionChainId:t,connectorChainId:e}){super(`The current chain of the connector (id: ${e}) does not match the connection's chain (id: ${t}).`,{metaMessages:[`Current Chain ID:  ${e}`,`Expected Chain ID: ${t}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorChainMismatchError"})}}},14478:function(t,e,n){n.d(e,{M:function(){return s},O:function(){return i}});var r=n(26129);class s extends r.G{constructor(){super("Provider not found."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderNotFoundError"})}}class i extends r.G{constructor({connector:t}){super(`"${t.name}" does not support programmatic chain switching.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainNotSupportedError"})}}},10816:function(t,e,n){n.d(e,{W:function(){return s}});var r=n(98173);function s(t){return"number"===typeof t?t:"wei"===t?0:Math.abs(r.Bd[t])}},64314:function(t,e,n){n.d(e,{R:function(){return r}});const r=(0,n(90328).a)({id:1,name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://cloudflare-eth.com"]}},blockExplorers:{default:{name:"Etherscan",url:"https://etherscan.io",apiUrl:"https://api.etherscan.io/api"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xce01f8eee7E479C928F8919abD53E553a36CeF67",blockCreated:19258213},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}})},65704:function(t,e,n){n.d(e,{o:function(){return s}});var r=n(75921);class s extends r.G{constructor({docsPath:t}={}){super(["Could not find an Account to execute with this Action.","Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."].join("\n"),{docsPath:t,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}},49813:function(t,e,n){n.d(e,{useBalance:function(){return g}});var r=n(60221),s=n(88810),i=n(20010),a=n(72932),o=n(36826),c=n(39502),u=n(32807),d=n(44199),h=n(10816),l=n(75079);async function f(t,e){const{balanceAddress:n,chainId:r,symbolType:s,tokenAddress:i,unit:a}=e,o={abi:[{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{type:"uint8"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{type:s}]}],address:i},[u,d,f]=await(0,l.J)(t,{allowFailure:!1,contracts:[{...o,functionName:"balanceOf",args:[n],chainId:r},{...o,functionName:"decimals",chainId:r},{...o,functionName:"symbol",chainId:r}]});return{decimals:d,formatted:(0,c.b)(u??"0",(0,h.W)(a??d)),symbol:f,value:u}}var p=n(27534);function m(t,e={}){return{async queryFn({queryKey:e}){const{address:n,scopeKey:r,...s}=e[1];if(!n)throw new Error("address is required");const l=await async function(t,e){const{address:n,blockNumber:r,blockTag:s,chainId:l,token:p,unit:m="ether"}=e;if(p)try{return f(t,{balanceAddress:n,chainId:l,symbolType:"string",tokenAddress:p})}catch(g){if(g instanceof i.uq){const e=await f(t,{balanceAddress:n,chainId:l,symbolType:"bytes32",tokenAddress:p}),r=(0,a.rR)((0,o.f)(e.symbol,{dir:"right"}));return{...e,symbol:r}}throw g}const y=t.getClient({chainId:l}),b=(0,d.s)(y,u.s,"getBalance"),v=await b(r?{address:n,blockNumber:r}:{address:n,blockTag:s}),C=t.chains.find((t=>t.id===l))??y.chain;return{decimals:C.nativeCurrency.decimals,formatted:(0,c.b)(v,(0,h.W)(m)),symbol:C.nativeCurrency.symbol,value:v}}(t,{...s,address:n});return l??null},queryKey:y(e)}}function y(t={}){return["balance",(0,p.OP)(t)]}var b=n(75049),v=n(44005),C=n(12364);function g(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{address:e,query:n={}}=t,i=(0,C.useConfig)(t),a=(0,v.useChainId)({config:i});var o;const c=m(i,(0,s._)((0,r._)({},t),{chainId:null!==(o=t.chainId)&&void 0!==o?o:a}));var u;const d=Boolean(e&&(null===(u=n.enabled)||void 0===u||u));return(0,b.aM)((0,s._)((0,r._)({},n,c),{enabled:d}))}},54283:function(t,e,n){n.d(e,{useChains:function(){return c}});var r=n(52123);let s=[];function i(t){const e=t.chains;return(0,r.v)(s,e)?s:(s=e,e)}var a=n(2265),o=n(12364);function c(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=(0,o.useConfig)(t);return(0,a.useSyncExternalStore)((t=>function(t,e){const{onChange:n}=e;return t._internal.chains.subscribe(((t,e)=>{n(t,e)}))}(e,{onChange:t})),(()=>i(e)),(()=>i(e)))}},33507:function(t,e,n){n.d(e,{useEnsAvatar:function(){return f}});var r=n(60221),s=n(88810),i=n(96698),a=n(44199);var o=n(27534);function c(t,e={}){return{async queryFn({queryKey:e}){const{name:n,scopeKey:r,...s}=e[1];if(!n)throw new Error("name is required");return function(t,e){const{chainId:n,...r}=e,s=t.getClient({chainId:n});return(0,a.s)(s,i.r,"getEnsAvatar")(r)}(t,{...s,name:n})},queryKey:u(e)}}function u(t={}){return["ensAvatar",(0,o.OP)(t)]}var d=n(75049),h=n(44005),l=n(12364);function f(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{name:e,query:n={}}=t,i=(0,l.useConfig)(t),a=(0,h.useChainId)({config:i});var o;const u=c(i,(0,s._)((0,r._)({},t),{chainId:null!==(o=t.chainId)&&void 0!==o?o:a}));var f;const p=Boolean(e&&(null===(f=n.enabled)||void 0===f||f));return(0,d.aM)((0,s._)((0,r._)({},n,u),{enabled:p}))}},77861:function(t,e,n){n.d(e,{useEnsName:function(){return f}});var r=n(60221),s=n(88810),i=n(72609),a=n(44199);var o=n(27534);function c(t,e={}){return{async queryFn({queryKey:e}){const{address:n,scopeKey:r,...s}=e[1];if(!n)throw new Error("address is required");return function(t,e){const{chainId:n,...r}=e,s=t.getClient({chainId:n});return(0,a.s)(s,i.w,"getEnsName")(r)}(t,{...s,address:n})},queryKey:u(e)}}function u(t={}){return["ensName",(0,o.OP)(t)]}var d=n(75049),h=n(44005),l=n(12364);function f(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{address:e,query:n={}}=t,i=(0,l.useConfig)(t),a=(0,h.useChainId)({config:i});var o;const u=c(i,(0,s._)((0,r._)({},t),{chainId:null!==(o=t.chainId)&&void 0!==o?o:a}));var f;const p=Boolean(e&&(null===(f=n.enabled)||void 0===f||f));return(0,d.aM)((0,s._)((0,r._)({},n,u),{enabled:p}))}},46327:function(t,e,n){n.d(e,{useSwitchChain:function(){return d}});var r=n(60221),s=n(88810),i=n(67085),a=n(21770),o=n(54728);var c=n(54283),u=n(12364);function d(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{mutation:e}=t,n=(0,u.useConfig)(t),d=function(t){return{mutationFn:e=>(0,o.c)(t,e),mutationKey:["switchChain"]}}(n),h=(0,a.D)((0,r._)({},e,d)),{mutate:l,mutateAsync:f}=h,p=(0,i._)(h,["mutate","mutateAsync"]);return(0,s._)((0,r._)({},p),{chains:(0,c.useChains)({config:n}),switchChain:l,switchChainAsync:f})}}}]);