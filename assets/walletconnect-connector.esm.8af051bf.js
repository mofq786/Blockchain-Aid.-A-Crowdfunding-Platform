import{_ as P}from"./index.03de1614.js";import{A as g}from"./abstract-connector.esm.1189b110.js";function C(n,o){n.prototype=Object.create(o.prototype),n.prototype.constructor=n,h(n,o)}function v(n){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},v(n)}function h(n,o){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(n,o)}function w(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function s(n,o,r){return w()?s=Reflect.construct:s=function(e,c,a){var i=[null];i.push.apply(i,c);var u=Function.bind.apply(e,i),d=new u;return a&&h(d,a.prototype),d},s.apply(null,arguments)}function m(n){return Function.toString.call(n).indexOf("[native code]")!==-1}function p(n){var o=typeof Map=="function"?new Map:void 0;return p=function(t){if(t===null||!m(t))return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(typeof o<"u"){if(o.has(t))return o.get(t);o.set(t,e)}function e(){return s(t,arguments,v(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),h(e,t)},p(n)}function f(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}var y="URI_AVAILABLE",A=function(n){C(o,n);function o(){var r;return r=n.call(this)||this,r.name=r.constructor.name,r.message="The user rejected the request.",r}return o}(p(Error));function I(n){var o=n.supportedChainIds,r=n.rpc;return o||(r?Object.keys(r).map(function(t){return Number(t)}):void 0)}var j=function(n){C(o,n);function o(t){var e;return e=n.call(this,{supportedChainIds:I(t)})||this,e.config=t,e.handleChainChanged=e.handleChainChanged.bind(f(e)),e.handleAccountsChanged=e.handleAccountsChanged.bind(f(e)),e.handleDisconnect=e.handleDisconnect.bind(f(e)),e}var r=o.prototype;return r.handleChainChanged=function(e){this.emitUpdate({chainId:e})},r.handleAccountsChanged=function(e){this.emitUpdate({account:e[0]})},r.handleDisconnect=function(){this.emitDeactivate(),this.walletConnectProvider&&(this.walletConnectProvider.stop(),this.walletConnectProvider.removeListener("chainChanged",this.handleChainChanged),this.walletConnectProvider.removeListener("accountsChanged",this.handleAccountsChanged),this.walletConnectProvider=void 0),this.emitDeactivate()},r.activate=function(){try{var e=this,c=function(){function u(){return Promise.resolve(e.walletConnectProvider.enable().then(function(l){return l[0]}).catch(function(l){throw l.message==="User closed modal"?new A:l})).then(function(l){return e.walletConnectProvider.on("disconnect",e.handleDisconnect),e.walletConnectProvider.on("chainChanged",e.handleChainChanged),e.walletConnectProvider.on("accountsChanged",e.handleAccountsChanged),{provider:e.walletConnectProvider,account:l}})}var d=function(){if(!e.walletConnectProvider.wc.connected)return Promise.resolve(e.walletConnectProvider.wc.createSession({chainId:e.supportedChainIds&&e.supportedChainIds.length>0?e.supportedChainIds[0]:1})).then(function(){e.emit(y,e.walletConnectProvider.wc.uri)})}();return d&&d.then?d.then(u):u(d)},a=function(){if(!e.walletConnectProvider)return Promise.resolve(P(()=>import("./index.fdb367bc.js"),["assets/index.fdb367bc.js","assets/index.03de1614.js","assets/index.e3b0c442.css","assets/___vite-browser-external_commonjs-proxy.c0daa527.js","assets/index.79799d66.js","assets/index.b52b46e6.js","assets/index.7b9745c7.js","assets/dijkstra.e1aa8e0e.js"]).then(function(i){var u;return(u=i?.default)!=null?u:i})).then(function(i){e.walletConnectProvider=new i(e.config)})}();return Promise.resolve(a&&a.then?a.then(c):c(a))}catch(i){return Promise.reject(i)}},r.getProvider=function(){try{var e=this;return Promise.resolve(e.walletConnectProvider)}catch(c){return Promise.reject(c)}},r.getChainId=function(){try{var e=this;return Promise.resolve(e.walletConnectProvider.send("eth_chainId"))}catch(c){return Promise.reject(c)}},r.getAccount=function(){try{var e=this;return Promise.resolve(e.walletConnectProvider.send("eth_accounts").then(function(c){return c[0]}))}catch(c){return Promise.reject(c)}},r.deactivate=function(){this.walletConnectProvider&&(this.walletConnectProvider.stop(),this.walletConnectProvider.removeListener("disconnect",this.handleDisconnect),this.walletConnectProvider.removeListener("chainChanged",this.handleChainChanged),this.walletConnectProvider.removeListener("accountsChanged",this.handleAccountsChanged))},r.close=function(){try{var e,c=this;return Promise.resolve((e=c.walletConnectProvider)==null?void 0:e.close()).then(function(){})}catch(a){return Promise.reject(a)}},o}(g);export{y as URI_AVAILABLE,A as UserRejectedRequestError,j as WalletConnectConnector};
