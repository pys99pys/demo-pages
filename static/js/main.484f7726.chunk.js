(this["webpackJsonpdemo-pages"]=this["webpackJsonpdemo-pages"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(5),i=n.n(a),c=n(1),u=n(2),l=n(3),s=n(6),p=n.n(s),m=(n(12),o.a.useState),h=function(){var t=m({count:500,duration:1500}),e=Object(c.a)(t,2),n=e[0],r=e[1],a=m(!1),i=Object(c.a)(a,2),s=i[0],h=i[1],f=m(500),d=Object(c.a)(f,2),v=d[0],g=d[1],b=m(1500),y=Object(c.a)(b,2),_=y[0],O=y[1],E=function(t){var e=t.target;r(Object(l.a)(Object(l.a)({},n),{},Object(u.a)({},e.name,Number(e.value))))};return o.a.createElement("div",{className:"react-counter-timer"},o.a.createElement("h1",null,"react-count-timer"),o.a.createElement("h2",null,o.a.createElement(p.a,{className:"my-counter",count:v,duration:_})),o.a.createElement("section",null,o.a.createElement("h3",null,"option"),o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",checked:s,onChange:function(t){return h(t.target.checked)}}),"use demical")),o.a.createElement("section",null,o.a.createElement("h3",null,"count: ",n.count),o.a.createElement("input",{type:"range",name:"count",step:s?"0.01":"",min:-99999,max:99999,value:n.count,onChange:E})),o.a.createElement("section",null,o.a.createElement("h3",null,"duration: ",n.duration),o.a.createElement("input",{type:"range",name:"duration",step:500,max:1e4,value:n.duration,onChange:E})),o.a.createElement("button",{onClick:function(){g(n.count),O(n.duration)}},"submit"))};var f=function(){var t=window.location.search.split("page=");switch(Object(c.a)(t,2)[1]){case"react-count-timer":return o.a.createElement(h,null);default:return null}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},6:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),a=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.hasOwnProperty.call(t,n)&&o(e,t,n);return a(e,t),e},c=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var a=arguments[e],i=0,c=a.length;i<c;i++,o++)r[o]=a[i];return r};Object.defineProperty(e,"__esModule",{value:!0});var u=i(n(0)),l=u.createRef,s=function(t){function e(e){var n=t.call(this,e)||this;return n.$el=l(),n.timer=0,n.demicalLength=0,n}return r(e,t),e.prototype.componentDidMount=function(){this.computeCount()},e.prototype.componentDidUpdate=function(){this.computeCount()},e.prototype.shouldComponentUpdate=function(t){return JSON.stringify(t)!==JSON.stringify(this.props)},e.prototype.computeCount=function(){for(var t,e,n=this.props,r=n.count,o=n.duration,a=[],i=Number((null===(e=null===(t=this.$el.current)||void 0===t?void 0:t.textContent)||void 0===e?void 0:e.replace(/[^0-9]/g,""))||0),c=r-i,u=Math.max(5,Math.min(o,999999)/5),l=Number((r.toString().split(".")[1]||"").length),s=0;s<u;s+=1)a.push(Number((i+c/(u-1)*s).toFixed(l)));this.operateCount(a.reverse())},e.prototype.operateCount=function(t){var e=this,n=c(t);clearTimeout(this.timer),this.timer=setTimeout((function(){n.length&&(e.renderCount(n.pop()),e.operateCount(n))}),5)},e.prototype.renderCount=function(t){var e;if(null===(e=this.$el.current)||void 0===e?void 0:e.textContent){var n=t.toString().split("."),r=n[0],o=n[1];this.$el.current.textContent=r.replace(/\B(?=(\d{3})+(?!\d))/g,",")+(o?"."+o:"")}},e.prototype.render=function(){var t=this.props.className;return u.createElement("span",{ref:this.$el,className:t||""},"0")},e}(u.Component);e.default=s},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.484f7726.chunk.js.map