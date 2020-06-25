(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),i=a.n(l),c=(a(14),a(1)),o=a(6),s=(a(15),a(2)),u=a(3),m=a(5),f=a(4),h=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.props.isRunning||n.props.setDelay(e.target.value)},n.state={delay:e.delay},n}return Object(u.a)(a,[{key:"render",value:function(){this.state.delay;return r.a.createElement("label",{style:{flexBasis:"20%",opacity:this.props.isRunning?"0.6":""}},"Delay:",r.a.createElement("input",{className:"range",id:"delay",name:"delay",type:"range",value:this.props.delay,min:50,max:2e3,step:50,onChange:this.handleChange}))}}]),a}(n.Component),p=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.props.isRunning||n.props.setCellSize(e.target.value)},n.state={cellSize:e.cellSize},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("label",{style:{flexBasis:"20%",opacity:this.props.isRunning?"0.6":""}},"Cell Size:",r.a.createElement("input",{className:"range",id:"delay",name:"delay",type:"range",value:this.props.cellSize,min:5,max:25,step:1,onChange:this.handleChange}))}}]),a}(n.Component);function y(){return r.a.createElement("div",{class:"rules"},r.a.createElement("h2",null,"Rules"),r.a.createElement("ul",null,r.a.createElement("li",null,"Any live cell with fewer than two live neighbors dies, as if by underpopulation."),r.a.createElement("li",null,"Any live cell with two or three live neighbors lives on to the next generation."),r.a.createElement("li",null,"Any live cell with more than three live neighbors dies, as if by overpopulation."),r.a.createElement("li",null,"Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.")))}function b(){return r.a.createElement("div",{className:"about"},r.a.createElement("h2",null,"About this Algorithm"),r.a.createElement("p",null,"The ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"},"Game of Life")," is a zero-player game created by British mathematician John Conway. It is a cellular automaton which produces wildly varying outcomes based on changes to the initial state, all based on a small set of simple rules. Conway's Game of Life is turing complete, which means that a sufficiently large enough grid may perform the same calculations of which computers are capable using a number of ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Examples_of_patterns"},"emergent patterns.")))}var d=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];var v=function(){var e=function(){for(var e=[],t=0;t<l;t++)e.push(Array.from(Array(u),(function(){return 0})));return e},t=Object(n.useState)(50),a=Object(c.a)(t,2),l=a[0],i=(a[1],Object(n.useState)(100)),s=Object(c.a)(i,2),u=s[0],m=(s[1],Object(n.useState)(50)),f=Object(c.a)(m,2),v=f[0],g=f[1],E=Object(n.useState)(0),w=Object(c.a)(E,2),j=w[0],O=w[1],C=Object(n.useState)(e()),S=Object(c.a)(C,2),k=S[0],x=S[1],A=Object(n.useState)(!1),R=Object(c.a)(A,2),z=R[0],N=R[1],_=Object(n.useState)(10),G=Object(c.a)(_,2),B=G[0],L=G[1],W=Object(n.useState)(!0),D=Object(c.a)(W,2),J=D[0],T=D[1],I=Object(n.useRef)(z);I.current=z;var M=Object(n.useRef)(j);M.current=j;var $=function(){var e=M.current+1;O(e)},q=function(){x((function(e){return Object(o.a)(e,(function(t){for(var a=function(a){for(var n=function(n){var r=0;d.forEach((function(t){var i=Object(c.a)(t,2),o=i[0],s=i[1],m=a+o,f=n+s;J?(m<0&&(m=l+m),m===l&&(m=0),f<0&&(f=u+f),f===u&&(f=0),r+=e[m][f]):m>=0&&m<l&&f>=0&&f<u&&(r+=e[m][f])})),r<2||r>3?t[a][n]=0:0===e[a][n]&&3===r&&(t[a][n]=1)},r=0;r<u;r++)n(r)},n=0;n<l;n++)a(n)}))}))},F=function(){z||(x(function(){for(var e=[],t=0;t<l;t++)e.push(Array.from(Array(u),(function(){return Math.random()>.7?1:0})));return e}()),O(0))};return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Conway's Game of Life"),r.a.createElement("div",{className:"grid",style:{gridTemplateColumns:"repeat(".concat(u,", ").concat(B,"px)"),width:u*B}},k.map((function(e,t){return e.map((function(e,a){return r.a.createElement("div",{key:"r".concat(t,"c").concat(a),className:"cell ".concat((n=k[t][a],n?"alive":"dead")),onClick:function(){if(!z){var e=Object(o.a)(k,(function(e){e[t][a]=k[t][a]?0:1}));x(e)}},style:{height:"".concat(B,"px"),width:"".concat(B,"px")}});var n}))}))),r.a.createElement("h3",null,"Generation: ",j),r.a.createElement("div",{class:"controls"},r.a.createElement("button",{onClick:function(){N(!z),z||(I.current=!0,function e(){q(),I.current&&($(),setTimeout(e,v))}())}},z?"Stop":"Start"),r.a.createElement("button",{style:{opacity:z?"0.6":""},onClick:function(){z||(q(),$())}},"Step"),r.a.createElement("button",{style:{opacity:z?"0.6":""},onClick:function(){F()}},"Random"),r.a.createElement("button",{style:{opacity:z?"0.6":""},onClick:function(){z||(x(e()),O(0))}},"Clear"),r.a.createElement("button",{style:{opacity:z?"0.6":""},onClick:function(){z||T(!J)}},J?"No Wrap":"Wrap"),r.a.createElement(h,{delay:v,setDelay:g,isRunning:z}),r.a.createElement(p,{cellSize:B,setCellSize:L,isRunning:z})),r.a.createElement("div",{className:"about-section"},r.a.createElement(y,null),r.a.createElement(b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.db182bd9.chunk.js.map