(this["webpackJsonpinsects-and-diseases-risk-map"]=this["webpackJsonpinsects-and-diseases-risk-map"]||[]).push([[0],{27:function(n,e){},32:function(n){n.exports=JSON.parse('[["\uc870\uc0ac\ub0a0\uc9dc","\uc791\ubb3c\uba85","color","\ud488\uc885","\ubcd1\ud574\ucda9\uba85","\uc704\ub3c4","\uacbd\ub3c4","\uc8fc\uc18c","\uc99d\uc0c1\ubd80\uc704","\ud2b9\uc9d5","\uc870\uc0ac\uc790"],["2020-01-01","\uc0ac\uacfc","red","\ud488\uc885a","\uc0ac\uacfc\ubcd1","37.55708238","128.5891307","\uac15\uc6d0 \uc815\uc120\uad70 \ubd81\ud3c9\uba74 \uc219\uc554\ub9ac","\uc99d\uc0c1\ubd80\uc704 1","\ube68\uac1b\uac8c \ubcc0\ud568","\uc0ac\uae38\ub3d9"],["2020-01-03","\uc0ac\uacfc","red","\ud488\uc885c","\uc0ac\uacfc\uba85","36.91657903","128.6220971","\uc774\uacf3\uc758 \uc8fc\uc18c","\uc99d\uc0c1\ubd80\uc704 3","\ube68\uac1b\uac8c \ubcc0\ud568","\uc0ac\uae38\ub3d9"],["2020-01-01","\ubc30","blue","\ud488\uc885a","\ubc30\ubcd1","36.6791181","127.5973915","\uc774\uacf3\uc758 \uc8fc\uc18c","\uc99d\uc0c1\ubd80\uc704 4","\ub178\ub797\uac8c \ubcc0\ud568","\ubc30\uae38\ub3d9"]]')},33:function(n,e,t){n.exports=t(48)},38:function(n,e,t){},39:function(n,e,t){},44:function(n,e){},45:function(n,e){},46:function(n,e,t){},48:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(13),c=t.n(o),i=(t(38),t(12)),l=t(6),u=(t(39),t(7)),d=t(22),m=t.n(d),s=t(4),f=t(55),b=t(56),v=t(50),g=t(51),p=t(52),h=t(53),E=t(54);t(46);function w(n){return new Date(Math.round(86400*(n-25569)*1e3))}function O(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",t=new Date(n),r=t.getDate(),a=t.getMonth()+1,o=t.getFullYear();r<10&&(r="0"+r),a<10&&(a="0"+a);var c=[String(o),String(a),String(r)];return c.join(e)}function j(){var n=Object(l.a)([""]);return j=function(){return n},n}function x(){var n=Object(l.a)([""]);return x=function(){return n},n}var y=u.a.div(x()),k=u.a.div(j()),S=function(n){var e=n.data;return a.a.createElement(y,null,["\uc870\uc0ac\ub0a0\uc9dc","\uc791\ubb3c\uba85","\ubcd1\ud574\ucda9\uba85","\uc99d\uc0c1\ubd80\uc704"].map((function(n,t){return"\uc870\uc0ac\ub0a0\uc9dc"===n?a.a.createElement(k,null,"\u25cf ".concat(n,": ").concat(O(w(e[n])))):a.a.createElement(k,null,"\u25cf ".concat(n,": ").concat(e[n]))})))};function z(){var n=Object(l.a)([""]);return z=function(){return n},n}function N(){var n=Object(l.a)([""]);return N=function(){return n},n}var _=u.a.div(N()),D=u.a.div(z()),J=function(n){var e=n.data,t=Object.keys(e);return a.a.createElement(_,null,t.map((function(n,t){return"\uc870\uc0ac\ub0a0\uc9dc"===n?a.a.createElement(D,{id:t},"\u25cf ".concat(n,": ").concat(O(w(e[n])))):a.a.createElement(D,{id:t},"\u25cf ".concat(n,": ").concat(e[n]))})))},C=function(n){var e=n.spots,t=Object(r.useState)({lat:0,lng:0}),o=Object(i.a)(t,2),c=(o[0],o[1]),l="https://xdworld.vworld.kr/2d/Hybrid/201612/{z}/{x}/{y}.png",u="https://xdworld.vworld.kr/2d/Satellite/201612/{z}/{x}/{y}.jpeg";return a.a.createElement(f.a,{center:[35.9078,127.7669],zoom:7.45,style:{width:"100%"},onClick:function(n){c(n.latlng)}},a.a.createElement(b.a,{metric:!0,imperial:!1,ScaleControl:!0}),a.a.createElement(v.a,{url:u,attribution:"VWORLD"}),a.a.createElement(g.a,{url:l}),void 0!==e?e.map((function(n,e){return a.a.createElement(p.a,{key:e,position:[n["\uc704\ub3c4"],n["\uacbd\ub3c4"]],icon:Object(s.divIcon)({className:"",iconSize:[24,24],html:'<div style="background:'.concat(n.color?n.color:"yellow",'; height:24px; border-radius:50%;"><div/>')})},a.a.createElement(h.a,null,a.a.createElement(S,{data:n})),a.a.createElement(E.a,null,a.a.createElement(J,{data:n})))})):null)};function I(){var n=Object(l.a)(["\n  box-sizing: border-box;\n  padding: 0.2rem;\n  border: 0.1rem solid #dddddd;\n"]);return I=function(){return n},n}function B(){var n=Object(l.a)(["\n  box-sizing: border-box;\n  width: 100%;\n  overflow: auto;\n"]);return B=function(){return n},n}function F(){var n=Object(l.a)(["\n  box-sizing: border-box;\n  padding: 0.2rem;\n  border: 0.1rem solid #dddddd;\n  background-color: #f2f2f2;\n  font-weight: bold;\n  position: sticky;\n  top: 0px;\n"]);return F=function(){return n},n}function M(){var n=Object(l.a)(["\n  box-sizing: border-box;\n  /* border: 0.1rem solid #dddddd; */\n  border-collapse: collapse;\n  width: 100%;\n  text-align: center;\n  margin: 0.2rem;\n"]);return M=function(){return n},n}function W(){var n=Object(l.a)(["\n  width: 100%;\n  height: 70%;\n  border: None;\n"]);return W=function(){return n},n}var A=u.a.div(W()),L=u.a.table(M()),R=u.a.th(F()),H=u.a.tbody(B()),V=u.a.td(I()),Y=function(n){var e=n.rows;return a.a.createElement(A,null,a.a.createElement(L,null,a.a.createElement("thaed",null,a.a.createElement("tr",null,e[0].map((function(n){return a.a.createElement(R,null,n)}))),a.a.createElement(H,null,e.map((function(n,e){return a.a.createElement("tr",null,0!==e?n.map((function(n){return a.a.createElement(V,null,n)})):null)}))))))},$=t(32);function q(){var n=Object(l.a)(["\n  font-size: 0.5rem;\n"]);return q=function(){return n},n}var G=u.a.div(q()),K=function(){return a.a.createElement(G,null,a.a.createElement("div",null,"\u203b \uc5c5\ub85c\ub4dc \ud30c\uc77c\uc758 \uc0d8\ud50c \uc608\uc2dc"),a.a.createElement(Y,{rows:$}),a.a.createElement("div",null,"\u203b \uc8fc\uc758 \u203b "),a.a.createElement("span",null,"\ud544\uc218 colum\uc758 \uacbd\uc6b0, \ubc18\ub4dc\uc2dc \uc785\ub825\ub418\uc5b4\uc57c \ud558\uba70, \uceec\ub7fc\uba85\uc774 \ubc18\ub4dc\uc2dc \uc77c\uce58\ud574\uc57c\ud569\ub2c8\ub2e4:"),a.a.createElement("h1",null,'"\uc870\uc0ac\ub0a0\uc9dc, \uc791\ubb3c\uba85, color, \ubcd1\ud574\ucda9\uba85, \uc99d\uc0c1\ubd80\uc704"'))};function P(){var n=Object(l.a)(["\n  width: 100%;\n  background: lightblue;\n  overflow-x: hidden;\n  padding: 0;\n  margin: 0;\n"]);return P=function(){return n},n}function Q(){var n=Object(l.a)(["\n  width: 25%;\n  padding: 0.5rem;\n  margin: 0;\n  box-sizing: border-box;\n  font-size: 11px;\n"]);return Q=function(){return n},n}function T(){var n=Object(l.a)(["\n  display: flex;\n  width: 100%;\n  height: 100vh;\n  font-size: 1rem;\n"]);return T=function(){return n},n}var U=u.a.div(T()),X=u.a.div(Q()),Z=u.a.input(P());var nn=function(){var n=Object(r.useState)({id:0,areaName_eng:"korea",areaName_kor:"\ub300\ud55c\ubbfc\uad6d",location:{cityName_eng:"",cityName_kor:""},municipalLevelDivisionCode:null,crops:[],crops_kor:[],cropsInfo:[{id:null,name:null,name_kor:null,icon:null}],mapInfo:{coordinate:{lat:35.9078,lng:127.7669},zoom:7.45}}),e=Object(i.a)(n,2),t=e[0],o=(e[1],Object(r.useState)()),c=Object(i.a)(o,2),l=c[0],u=c[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(U,null,a.a.createElement(C,{selectedArea:t,spots:l}),a.a.createElement(X,null,a.a.createElement(Z,{type:"file",onChange:function(n){var e=n.target.files[0],t=new FileReader;t.onload=function(n){var e=n.target.result,t=m.a.read(e,{type:"binary"});t.SheetNames.forEach((function(n){var e=m.a.utils.sheet_to_row_object_array(t.Sheets[n]),r=JSON.stringify(e),a=JSON.parse(r);u(a)}))},t.readAsBinaryString(e)}}),a.a.createElement(K,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(nn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.b86db28d.chunk.js.map