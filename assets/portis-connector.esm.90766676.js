import{_ as p,i as v}from"./main.147f2eb4.js";import{A as f}from"./abstract-connector.esm.bb5c90ec.js";function g(i,d){i.prototype=Object.create(d.prototype),i.prototype.constructor=i,i.__proto__=d}function h(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}var s={1:"mainnet",3:"ropsten",4:"rinkeby",5:"goerli",42:"kovan",100:"xdai",30:"orchid",31:"orchidTestnet",99:"core",77:"sokol",61:"classic",8:"ubiq",108:"thundercore",18:"thundercoreTestnet",163:"lightstreams",122:"fuse",15001:"maticTestnet"},I=function(i){g(d,i);function d(n){var e,r=n.dAppId,o=n.networks,t=n.config,c=t===void 0?{}:t,l=o.map(function(u){return typeof u=="number"?u:Number(u.chainId)});return l.every(function(u){return!!s[u]})||v(!1),e=i.call(this,{supportedChainIds:l})||this,e.dAppId=r,e.networks=o,e.config=c,e.handleOnLogout=e.handleOnLogout.bind(h(e)),e.handleOnActiveWalletChanged=e.handleOnActiveWalletChanged.bind(h(e)),e.handleOnError=e.handleOnError.bind(h(e)),e}var a=d.prototype;return a.handleOnLogout=function(){this.emitDeactivate()},a.handleOnActiveWalletChanged=function(e){this.emitUpdate({account:e})},a.handleOnError=function(e){this.emitError(e)},a.activate=function(){try{var e=function(){return r.portis.onLogout(r.handleOnLogout),r.portis.onActiveWalletChanged(r.handleOnActiveWalletChanged),r.portis.onError(r.handleOnError),Promise.resolve(r.portis.provider.enable().then(function(c){return c[0]})).then(function(c){return{provider:r.portis.provider,account:c}})},r=this,o=function(){if(!r.portis)return Promise.resolve(p(()=>import("./index.16821401.js").then(t=>t.i),["assets/index.16821401.js","assets/main.147f2eb4.js","assets/main.e3b0c442.css"]).then(function(t){var c;return(c=t?.default)!=null?c:t})).then(function(t){r.portis=new t(r.dAppId,typeof r.networks[0]=="number"?s[r.networks[0]]:r.networks[0],r.config)})}();return Promise.resolve(o&&o.then?o.then(e):e(o))}catch(t){return Promise.reject(t)}},a.getProvider=function(){try{var e=this;return Promise.resolve(e.portis.provider)}catch(r){return Promise.reject(r)}},a.getChainId=function(){try{var e=this;return Promise.resolve(e.portis.provider.send("eth_chainId"))}catch(r){return Promise.reject(r)}},a.getAccount=function(){try{var e=this;return Promise.resolve(e.portis.provider.send("eth_accounts").then(function(r){return r[0]}))}catch(r){return Promise.reject(r)}},a.deactivate=function(){this.portis.onLogout(function(){}),this.portis.onActiveWalletChanged(function(){}),this.portis.onError(function(){})},a.changeNetwork=function(e,r){try{var o=this;return typeof e=="number"?(s[e]||v(!1),o.portis.changeNetwork(s[e],r),o.emitUpdate({chainId:e})):(o.portis.changeNetwork(e,r),o.emitUpdate({chainId:Number(e.chainId)})),Promise.resolve()}catch(t){return Promise.reject(t)}},a.close=function(){try{var e=this;return Promise.resolve(e.portis.logout()).then(function(){e.emitDeactivate()})}catch(r){return Promise.reject(r)}},d}(f);export{I as PortisConnector};
