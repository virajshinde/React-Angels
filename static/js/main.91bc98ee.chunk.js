(this.webpackJsonpangels=this.webpackJsonpangels||[]).push([[0],[,,,,,,,,function(e,n,a){e.exports=a(18)},,,,,function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),l=a(2),c=a.n(l),o=(a(13),a(3)),i=a(4),s=a(6),u=a(5),h=a(7),m=(a(14),a(15),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"demon",src:"https://robohash.org/".concat(e.angel.id,"?set=set2&size=180x180")}),r.a.createElement("h2",null,e.angel.name),r.a.createElement("p",null,e.angel.email))}),d=function(e){return r.a.createElement("h1",null,"Hello"),r.a.createElement("div",{className:"card-list"},e.angels.map((function(e){return r.a.createElement(m,{key:"angel.id",angel:e})})))},g=(a(16),function(e){var n=e.placeholder,a=e.handleChange;return r.a.createElement("input",{type:"search",className:"search",placeholder:n,onChange:a})}),p=(a(17),function(e){function n(){var e;return Object(o.a)(this,n),(e=Object(s.a)(this,Object(u.a)(n).call(this))).handleChange=function(n){e.setState({searchField:n.target.value})},e.state={angels:[{name:"Samael",id:"GrimReaperBadminton"},{name:"Rahael",id:"HealingAngelLifeSupportSystem"},{name:"Raphael",id:"HealingAngelGreenEnergyHotCaringGirlfriend"}],searchField:""},e}return Object(h.a)(n,e),Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({angels:n})}))}},{key:"render",value:function(){var e=this.state,n=e.angels,a=e.searchField,t=n.filter((function(e){return e.name.toLocaleLowerCase().includes(a.toLocaleLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Angels Supporting"),r.a.createElement(g,{placeholder:"Search Archangels",handleChange:this.handleChange}),r.a.createElement(d,{angels:t}," "))}}]),n}(t.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.91bc98ee.chunk.js.map