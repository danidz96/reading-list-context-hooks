(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(t,e,n){t.exports=n(53)},39:function(t,e,n){},53:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(17),i=n.n(o),c=(n(39),n(1)),u=n(2),l=n(9),s=n(7),m=Object(r.createContext)(),d=function(t){var e=Object(r.useState)({isLightTheme:!0,light:{ui:"white",bg:"white",syntax:"var(--color-grey-dark-1)",syntaxAlt:"var(--color-grey-dark-2)",borderColor:"var(--color-grey-light-4)"},dark:{ui:"#253341",bg:"#15202B",syntax:"white",syntaxAlt:"var(--color-grey-dark-2)",borderColor:"var(--color-grey-dark-1)"}}),n=Object(s.a)(e,2),o=n[0],i=n[1];return a.a.createElement(m.Provider,{value:{theme:o,toggleTheme:function(){i(Object(l.a)({},o,{isLightTheme:!o.isLightTheme}))}}},t.children)};function f(){var t=Object(c.a)(["\n\tcolor: white;\n\tfont-size: 1.5rem;\n\n\t&:hover {\n\t\tcursor: pointer;\n\t}\n"]);return f=function(){return t},t}var b=u.b.i(f()),v=function(){var t=a.a.useContext(m).toggleTheme;return a.a.createElement(b,{className:"fa fa-adjust",onClick:function(e){return t()}})},h=n(31),g=Object(r.createContext)(),p=function(t){var e=Object(r.useState)([{id:1,title:"The Final Empire",author:"Brandon Sanderson",status:"completed",favorite:!0},{id:2,title:"The Well of Ascension",author:"Brandon Sanderson",status:"completed",favorite:!1},{id:3,title:"The Hero of Ages",author:"Brandon Sanderson",status:"reading",favorite:!1},{id:4,title:"The Alloy of Law",author:"Brandon Sanderson",status:"pending",favorite:!1},{id:5,title:"Shadows of Self",author:"Brandon Sanderson",status:"pending",favorite:!1}]),n=Object(s.a)(e,2),o=n[0],i=n[1],c=Object(r.useState)({isOpen:!1}),u=Object(s.a)(c,2),m=u[0],d=u[1];return a.a.createElement(g.Provider,{value:{books:o,deleteBook:function(t){var e=o.filter(function(e){return t.id!==e.id});i(e)},saveBook:function(t){i([].concat(Object(h.a)(o),[Object(l.a)({id:o.length+1},t)])),d({isOpen:!1})},modal:m,openModal:function(){d({isOpen:!0})},closeModal:function(){d({isOpen:!1})},addStatus:function(t,e){var n=o.map(function(n){return t.id===n.id?Object(l.a)({},n,{status:e}):n});i(n)},isFavorite:function(t){var e=o.map(function(e){return t.id===e.id?Object(l.a)({},e,{favorite:!e.favorite}):e});i(e)}}},t.children)},x=n(14);function E(){var t=Object(c.a)(["\n  text-decoration: none;\n  color: white;\n  font-weight: 600;\n  padding: .5rem 1.5rem;\n  border-radius: 2.5rem;\n"]);return E=function(){return t},t}function j(){var t=Object(c.a)(["list-style: none;"]);return j=function(){return t},t}function k(){var t=Object(c.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tmargin-top: 2rem;\n"]);return k=function(){return t},t}var O=u.b.ul(k()),y=u.b.li(j()),w=Object(u.b)(x.b)(E()),C={backgroundColor:"var(--color-primary-dark)"},S=function(){return a.a.createElement(O,null,a.a.createElement(y,null,a.a.createElement(w,{activeStyle:C,exact:!0,to:"/"},"Pending")),a.a.createElement(y,null,a.a.createElement(w,{activeStyle:C,activeClassName:"active",to:"/reading"},"Reading")),a.a.createElement(y,null,a.a.createElement(w,{activeStyle:C,activeClassName:"active",to:"/completed"},"Completed")),a.a.createElement(y,null,a.a.createElement(w,{activeStyle:C,activeClassName:"active",to:"/favorites"},"Favorites")))};function T(){var t=Object(c.a)(["\n\tposition: absolute;\n\tright: 2rem;\n\ttop: 2rem;\n"]);return T=function(){return t},t}function B(){var t=Object(c.a)(["\n\tpadding: 3rem 3rem 1rem 3rem;\n\tbackground-color: var(--color-primary);\n\tcolor: white;\n\tborder-radius: 2rem;\n\toverflow: hidden;\n\ttext-align: center;\n\tposition: relative;\n\n\t@media only screen and (max-width: 600px) {\n\t\tmargin: 0;\n\t\twidth: 100%;\n\t\tborder-radius: 0;\n\t}\n"]);return B=function(){return t},t}var L=u.b.div(B()),A=u.b.div(T()),N=function(){var t=a.a.useContext(g).books.filter(function(t){return"pending"===t.status}).length;return a.a.createElement(L,null,a.a.createElement(A,null,a.a.createElement(v,null)),a.a.createElement("h1",null,"Reading List"),a.a.createElement("p",null,"Currently you have ",t," books to read"),a.a.createElement(S,null))};function F(){var t=Object(c.a)(["\n\tcolor: var(--color-grey-dark-3);\n\tfont-size: 1.5rem;\n\ttransition: all ease .2s;\n\tcolor: ",";\n\tpadding: .5rem;\n\n\t&:not(:last-child) {\n\t\tmargin-right: 1rem;\n\t}\n\n\t&:hover {\n\t\t@media only screen and (min-width: 600px) {\n\t\t\tcursor: pointer;\n\t\t\tbox-shadow: 0 0 1rem ",";\n\t\t\tborder-radius: 2.5rem;\n\t\t}\n\t}\n\n\t&:active {\n\t\ttransform: scale(1.3);\n\t}\n"]);return F=function(){return t},t}function X(){var t=Object(c.a)(["\n\tfont-size: 1rem;\n\tfont-weight: 400;\n\tcolor: var(--color-grey-dark-2);\n"]);return X=function(){return t},t}function z(){var t=Object(c.a)(["\n\tmargin-bottom: 1.5rem;\n\tfont-weight: 600;\n\tcolor: ",";\n"]);return z=function(){return t},t}function M(){var t=Object(c.a)(["\n\tbackground: white;\n\tpadding: 1.5rem;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: flex-end;\n\tborder-radius: .6rem;\n\tanimation: ",";\n\tbox-shadow: var(--shadow-light);\n\tbackground-color: ",";\n\n\t&:not(:last-child) {\n\t\tmargin-bottom: 3rem;\n\t}\n"]);return M=function(){return t},t}function R(){var t=Object(c.a)([""," .5s linear;"]);return R=function(){return t},t}function P(){var t=Object(c.a)(["\n  0% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1;\n\t}\n\t\n\t20% {\n\t\t-webkit-transform: translateX(-2rem);\n            transform: translateX(-2rem);\n\t}\n  100% {\n    -webkit-transform: translateX(100rem);\n            transform: translateX(100rem);\n    opacity: 0;\n  }\n}"]);return P=function(){return t},t}var W=Object(u.c)(P()),D=Object(u.a)(R(),W),J=u.b.div(M(),function(t){return t.deleting&&D},function(t){var e=t.theme;return e.isLightTheme?e.light.bg:e.dark.bg}),q=u.b.h3(z(),function(t){var e=t.theme;return e.isLightTheme?e.light.syntax:e.dark.syntax}),H=u.b.p(X()),I=u.b.i(F(),function(t){return t.active&&t.color},function(t){return t.color}),$=function(t){var e=Object(r.useContext)(m).theme,n=Object(r.useContext)(g),o=n.deleteBook,i=n.addStatus,c=n.isFavorite,u=Object(r.useState)(!1),l=Object(s.a)(u,2),d=l[0],f=l[1],b=t.book;return a.a.createElement(J,{deleting:d,theme:e},a.a.createElement("div",null,a.a.createElement(q,{theme:e},b.title),a.a.createElement(H,null,b.author)),a.a.createElement("div",null,a.a.createElement(I,{className:"fa fa-heart",title:"Favorite",color:"#E0245E",active:b.favorite,onClick:function(){return c(b)}}),a.a.createElement(I,{className:"fa fa-check",title:"Completed",color:"#17BF63",active:"completed"===b.status,onClick:function(){return i(b,"completed")}}),a.a.createElement(I,{className:"fa fa-eye",title:"Reading",color:"var(--color-primary)",active:"reading"===b.status,onClick:function(){return i(b,"reading")}}),a.a.createElement(I,{className:"fa fa-trash-o",color:"#a00000",title:"Delete",onClick:function(){return f(!0),void setTimeout(function(){o(b)},500)}})))};function G(){var t=Object(c.a)(["\n\tbackground: transparent;\n\tborder: 0;\n\tpadding: 0;\n\tcursor: pointer;\n\toutline: 0;\n\tdisplay: inline-block;\n\tposition: relative;\n\tpadding: 1.2rem 2.5rem;\n\ttop: 0;\n\tcolor: #fff;\n\tfont-size: 1.4rem;\n\tfont-weight: 600;\n\tborder-radius: 5rem;\n\tbackground-color: var(--color-primary);\n\ttransition: all 0.2s ease;\n\n\t&:hover {\n\t\ttop: -.6rem;\n\t\tbox-shadow: var(--shadow-blue-dark);\n\t}\n\n\t&:active {\n\t\tbackground-color: var(--color-primary-dark);\n\t\ttop: 0;\n\t\tbox-shadow: none;\n\t}\n\n\t&:focus {\n\t\t@media only screen and (max-width: 600px) {\n\t\t\ttop: 0;\n\t\t\tbox-shadow: none;\n\t\t}\n\t}\n"]);return G=function(){return t},t}var K=u.b.button(G()),Q=function(t){return a.a.createElement(K,t,t.text)},U=n(13),V=n(22),Y=n.n(V);function Z(){var t=Object(c.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100%;\n"]);return Z=function(){return t},t}function _(){var t=Object(c.a)(["\n  background-color: ",";\n  width: 42rem;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 2rem;\n  outline: none;\n  border: 1px solid ",";\n  border-radius: .7rem;\n"]);return _=function(){return t},t}function tt(){var t=Object(c.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n"]);return tt=function(){return t},t}function et(){var t=Object(c.a)(["\n\tborder: none;\n\tpadding: 1rem 0;\n\twidth: 100%;\n\tborder-bottom: 2px solid var(--color-grey-light-4);\n\toutline: none;\n\tcolor: ",";\n\tmargin: 2rem 0;\n\tfont-size: 1.5rem;\n\tbackground-color: ",";\n\n\t&:focus {\n\t\tborder-bottom: 2px solid var(--color-primary);\n\t}\n"]);return et=function(){return t},t}function nt(){var t=Object(c.a)(["color: ",";"]);return nt=function(){return t},t}function rt(){var t=Object(c.a)(["position: relative;"]);return rt=function(){return t},t}var at=u.b.div(rt()),ot=u.b.h2(nt(),function(t){var e=t.theme;return e.isLightTheme?e.light.syntax:e.dark.syntax}),it=u.b.input(et(),function(t){var e=t.theme;return e.isLightTheme?e.light.syntax:e.dark.syntax},function(t){var e=t.theme;return e.isLightTheme?e.light.ui:e.dark.ui}),ct=u.b.div(tt()),ut=Object(u.b)(Y.a)(_(),function(t){var e=t.theme;return e.isLightTheme?e.light.bg:e.dark.bg},function(t){var e=t.theme;return e.isLightTheme?e.light.borderColor:e.dark.borderColor}),lt=u.b.form(Z());Y.a.setAppElement("#modal");var st=function(t){var e=a.a.useContext(m).theme,n=a.a.useContext(g),o=n.modal,i=n.closeModal,c=n.saveBook,u=Object(r.useState)({title:"",author:"",status:"",favorite:!1}),d=Object(s.a)(u,2),f=d[0],b=d[1],v=function(e){var n;b(Object(l.a)({},f,(n={},Object(U.a)(n,e.name,e.value),Object(U.a)(n,"status",[t.status]),n)))};return a.a.createElement(at,null,a.a.createElement(ut,{isOpen:o.isOpen,onRequestClose:function(){i()},contentLabel:"Add Book Modal",theme:e},a.a.createElement(ct,null,a.a.createElement(ot,{theme:e},"Add Book"),a.a.createElement(lt,{onSubmit:function(t){t.preventDefault(),c(f),b({title:"",author:"",status:"",favorite:!1})}},a.a.createElement(it,{name:"title",type:"text",placeholder:"Book Name",onChange:function(t){return v(t.target)},theme:e}),a.a.createElement(it,{name:"author",type:"text",placeholder:"Author Name",onChange:function(t){return v(t.target)},theme:e}),a.a.createElement(Q,{text:"Save"})))))};function mt(){var t=Object(c.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\tmargin-top: 3rem;\n"]);return mt=function(){return t},t}var dt=u.b.div(mt()),ft=function(t){var e=a.a.useContext(g).openModal;return a.a.createElement(dt,null,a.a.createElement(Q,{text:"Add Book",onClick:function(t){e()}}),a.a.createElement(st,{status:t.status}))};function bt(){var t=Object(c.a)(["padding: 3rem 2rem;"]);return bt=function(){return t},t}var vt=u.b.ul(bt()),ht=function(t){var e=a.a.useContext(g).books.filter(function(e){return e.status.includes(t.status)||e.favorite===t.status.favorite});return a.a.createElement(a.a.Fragment,null,!t.status.favorite&&a.a.createElement(ft,{status:t.status}),a.a.createElement(vt,null,e.map(function(t){return a.a.createElement($,{book:t,key:t.id})})))},gt=n(10);function pt(){var t=Object(c.a)(["\n\tmax-width: 45rem;\n\tmargin: 30px auto;\n\tborder-radius: 2rem;\n\toverflow: hidden;\n\tbackground-color: ",";\n\tbox-shadow: 0 14px 28px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.1);\n\tmin-height: 100vh;\n\n\t@media only screen and (max-width: 600px) {\n\t\tmax-width: none;\n\t\tmargin: 0;\n\t\twidth: 100vw;\n\t\tborder-radius: 0;\n\t}\n"]);return pt=function(){return t},t}var xt=u.b.div(pt(),function(t){var e=t.theme;return e.isLightTheme?e.light.ui:e.dark.ui}),Et=function(){var t=a.a.useContext(m).theme;return a.a.createElement(x.a,null,a.a.createElement(xt,{theme:t},a.a.createElement(p,null,a.a.createElement(N,null),a.a.createElement(gt.a,{exact:!0,path:"/",component:function(t){return a.a.createElement(ht,Object.assign({},t,{status:"pending"}))}}),a.a.createElement(gt.a,{exact:!0,path:"/completed",component:function(t){return a.a.createElement(ht,Object.assign({},t,{status:"completed"}))}}),a.a.createElement(gt.a,{exact:!0,path:"/reading",component:function(t){return a.a.createElement(ht,Object.assign({},t,{status:"reading"}))}}),a.a.createElement(gt.a,{exact:!0,path:"/favorites",component:function(t){return a.a.createElement(ht,Object.assign({},t,{status:{favorite:!0}}))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(d,null,a.a.createElement(Et,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.987d4bc0.chunk.js.map