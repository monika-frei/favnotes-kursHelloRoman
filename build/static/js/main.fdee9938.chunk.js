(this.webpackJsonpfavnotes=this.webpackJsonpfavnotes||[]).push([[0],{32:function(t,e,n){t.exports=n.p+"static/media/logo.93d4f3ba.svg"},58:function(t,e,n){t.exports=n.p+"static/media/idea.d98f3475.svg"},59:function(t,e,n){t.exports=n.p+"static/media/pen.27b127d3.svg"},60:function(t,e,n){t.exports=n.p+"static/media/twitter.7e145c9e.svg"},61:function(t,e,n){t.exports=n.p+"static/media/logout.8b8ad05b.svg"},62:function(t,e,n){t.exports=n.p+"static/media/magnifier.a14461b8.svg"},63:function(t,e,n){t.exports=n.p+"static/media/plus.d08bc988.svg"},64:function(t,e,n){t.exports=n.p+"static/media/close.5d8fa210.svg"},67:function(t,e,n){t.exports=n.p+"static/media/chain.466cdbb2.svg"},68:function(t,e,n){t.exports=n(94)},94:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),i=n(30),o=n.n(i),c=n(7),u=n(5),l=n(4),s=n(26),p=n(54),d=n(27),m=n(36),f=n(17),b={twitters:[],notes:[],articles:[]},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"AUTHENTICATE_SUCCESS":return Object(f.a)(Object(f.a)({},t),{},{userID:e.payload.data._id,status:e.payload.status});case"LOGOUT_SUCCESS":return Object(f.a)(Object(f.a)({},t),{},{logout:e.payload,userID:void 0,status:void 0});case"FETCH_SUCCESS":return Object(f.a)(Object(f.a)({},t),{},Object(d.a)({},e.payload.itemType,Object(m.a)(e.payload.data)));case"REMOVE_ITEM_SUCCESS":return Object(f.a)(Object(f.a)({},t),{},Object(d.a)({},e.payload.itemType,Object(m.a)(t[e.payload.itemType].filter((function(t){return t._id!==e.payload.id})))));case"ADD_ITEM_SUCCESS":return Object(f.a)(Object(f.a)({},t),{},Object(d.a)({},e.payload.itemType,[].concat(Object(m.a)(t[e.payload.itemType]),[e.payload.data])));default:return t}},g=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.c,v=Object(s.d)(h,g(Object(s.a)(p.a))),x="/",E="/notes",O="/notes/:id",j="/articles",y="/articles/:id",w="/twitters",C="/twitters/:id",k="/login",T="/register",S=n(35),I=n(8),_=n(9),U=n(11),N=n(10),R=n(2),z=n(1);function D(){var t=Object(R.a)(["\n\n    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap');\n    \n    *,*::before,*::after {\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n         -moz-osx-font-smoothing: grayscale;\n    }\n\n    html {\n        font-size: 62.5%;\n    }\n\n    body {\n        font-family: \"Montserrat\", sans-serif;\n        font-size: 1.6rem;\n        margin: 0;\n        padding: 0;\n    }\n"]);return D=function(){return t},t}var A=Object(z.b)(D()),M={notes:"hsl(49, 100%, 58%)",twitters:"hsl(196, 83%, 75%)",articles:"hsl(106, 47%, 64%)",grey100:"hsl(0, 0%, 96%)",grey200:"hsl(0, 0%, 90%)",black:"hsl(0, 0%, 0%)",light:300,bold:600,fontSize:{xxs:"1rem",xs:"1.2rem",s:"1.6rem",m:"2.1rem",l:"2.4rem",xl:"4rem"}},B=a.a.createContext("notes"),P=function(t){Object(U.a)(n,t);var e=Object(N.a)(n);function n(){var t;Object(I.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={pageType:"notes"},t.setCurrentPage=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=["twitters","notes","articles"],r=t.props.location.pathname,a=n.filter((function(t){return r.includes(t)})),i=Object(S.a)(a,1),o=i[0];e.pageType!==o&&t.setState((function(){return{pageType:o}}))},t}return Object(_.a)(n,[{key:"componentDidMount",value:function(){this.setCurrentPage()}},{key:"componentDidUpdate",value:function(t,e){this.setCurrentPage(e)}},{key:"render",value:function(){var t=this.props.children,e=this.state.pageType;return a.a.createElement("div",null,a.a.createElement(B.Provider,{value:e},a.a.createElement(A,null),a.a.createElement(z.a,{theme:M},t)))}}]),n}(r.Component),V=Object(u.g)(P),F=function(t){return function(e){return a.a.createElement(B.Consumer,null,(function(n){return a.a.createElement(t,Object.assign({},e,{pageContext:n}))}))}};function H(){var t=Object(R.a)(["\n  display: block;\n  width: 67px;\n  height: 67px;\n  border-radius: 20px;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  background-size: 40%;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n\n  &.active {\n    background-color: white;\n  }\n"]);return H=function(){return t},t}var q=z.d.button(H(),(function(t){return t.icon})),L=n(32),Q=n.n(L);function G(){var t=Object(R.a)(["\n  display: block;\n  width: 80px;\n  height: 80px;\n  margin-bottom: 50px;\n  background-image: url(",");\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  cursor: pointer;\n"]);return G=function(){return t},t}var J=Object(z.d)(c.c)(G(),Q.a),X=n(58),Y=n.n(X),K=n(59),W=n.n(K),Z=n(60),$=n.n(Z),tt=n(61),et=n.n(tt),nt=n(23),rt=n.n(nt),at=function(t,e){return function(n){var r="http://localhost:9000/api/note/".concat(e);n({type:"REMOVE_ITEM_REQUEST"}),rt.a.delete(r).then((function(){n({type:"REMOVE_ITEM_SUCCESS",payload:{itemType:t,id:e}})})).catch((function(t){return n({type:"REMOVE_ITEM_ERROR",err:t})}))}},it=function(t){return function(e,n){return e({type:"FETCH_REQUEST"}),rt.a.get("http://localhost:9000/api/notes/type",{params:{userID:n().userID,type:t}}).then((function(n){var r=n.data;e({type:"FETCH_SUCCESS",payload:{data:r,itemType:t}})})).catch((function(t){return e({type:"FETCH_ERROR",err:t})}))}};function ot(){var t=Object(R.a)(["\n  margin-top: auto;\n"]);return ot=function(){return t},t}function ct(){var t=Object(R.a)(["\n  margin-top: 5px;\n"]);return ct=function(){return t},t}function ut(){var t=Object(R.a)(["\n  background-color: ",";\n  height: 100vh;\n  width: 150px;\n  padding: 25px 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n"]);return ut=function(){return t},t}var lt=z.d.div(ut(),(function(t){return t.theme[t.pageType]})),st=z.d.div(ct()),pt=Object(z.d)(q)(ot()),dt=function(t){var e=t.pageContext,n=t.logout,r=t.userID;return r?a.a.createElement(lt,{pageType:e},a.a.createElement(J,{to:x}),a.a.createElement(st,null,a.a.createElement(q,{as:c.c,to:E,icon:W.a,activeClass:"active"}),a.a.createElement(q,{as:c.c,to:w,icon:$.a,activeClass:"active"}),a.a.createElement(q,{as:c.c,to:j,icon:Y.a,activeClass:"active"})),a.a.createElement(pt,{as:c.c,onClick:function(){n(r)},to:k,icon:et.a})):a.a.createElement(u.a,{to:k})};dt.defaultProps={pageContext:"notes"};var mt=Object(l.b)((function(t){return{userID:t.userID}}),(function(t){return{logout:function(e){return t((n=e,function(t){return t({type:"LOGOUT_REQUEST"}),rt.a.post("http://localhost:9000/api/user/logout",{userId:n}).then((function(e){return t({type:"LOGOUT_SUCCESS",payload:e})})).catch((function(e){return t({type:"LOGOUT_ERROR",err:e})}))}));var n}}}))(F(dt)),ft=function(t){var e=t.children;return a.a.createElement("div",null,a.a.createElement(mt,null),e)},bt=n(62),ht=n.n(bt);function gt(){var t=Object(R.a)(["\n      font-size: ",";\n      padding: 10px 20px 10px 40px;\n      width: 234px;\n      height: 35px;\n      background-image: url(",");\n      background-size: 15px;\n      background-position: 15px 50%;\n      background-repeat: no-repeat;\n    "]);return gt=function(){return t},t}function vt(){var t=Object(R.a)(["\n  font-weight: ",";\n  font-size: ",";\n  border-radius: 50px;\n  background-color: ",";\n  padding: 15px 30px;\n  border: none;\n  width: 374px;\n  height: 47px;\n\n  ::placeholder {\n    letter-spacing: 1px;\n    color: ",";\n    text-transform: uppercase;\n  }\n\n  ","\n"]);return vt=function(){return t},t}var xt=z.d.input(vt(),(function(t){return t.theme.bold}),(function(t){return t.theme.fontSize.s}),(function(t){return t.theme.grey100}),(function(t){return t.theme.grey300}),(function(t){return t.search&&Object(z.c)(gt(),(function(t){return t.theme.fontSize.xs}),ht.a)}));function Et(){var t=Object(R.a)(["\n  font-size: ",";\n  font-weight: ",";\n"]);return Et=function(){return t},t}var Ot=z.d.h1(Et(),(function(t){var e=t.theme;return t.big?e.fontSize.xl:e.fontSize.l}),(function(t){return t.theme.bold}));function jt(){var t=Object(R.a)(["\n  font-size: ",";\n  font-weight: ",";\n"]);return jt=function(){return t},t}var yt=z.d.p(jt(),(function(t){return t.theme.fontSize.s}),(function(t){return t.theme.light})),wt=n(63),Ct=n.n(wt),kt=n(64),Tt=n.n(kt);function St(){var t=Object(R.a)(["\n      background-color: hsl(0, 0%, 90%);\n      width: 105px;\n      height: 30px;\n      font-size: 10px;\n    "]);return St=function(){return t},t}function It(){var t=Object(R.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: black;\n  text-decoration: none;\n  background-color: ",";\n  height: 47px;\n  width: 220px;\n  border: none;\n  border-radius: 50px;\n  font-family: 'Montserrat';\n  font-weight: ",";\n  font-size: 16px;\n  text-transform: uppercase;\n  cursor: pointer;\n\n  ","\n"]);return It=function(){return t},t}var _t=F(z.d.button(It(),(function(t){var e=t.theme,n=t.pageContext;return n?e[n]:e.notes}),(function(t){return t.theme.bold}),(function(t){return t.secondary&&Object(z.c)(St())}))),Ut=n(20);function Nt(){var t=Object(R.a)(["\n  margin-top: 5px;\n  color: red;\n"]);return Nt=function(){return t},t}function Rt(){var t=Object(R.a)(["\n  margin: 15px 0;\n"]);return Rt=function(){return t},t}function zt(){var t=Object(R.a)(["\n  height: 40vh;\n  margin: 10px 0;\n  border-radius: 20px;\n  resize: none;\n"]);return zt=function(){return t},t}function Dt(){var t=Object(R.a)(["\n  margin: 0 0 20px 0;\n  font-size: ",";\n"]);return Dt=function(){return t},t}function At(){var t=Object(R.a)(["\n  margin: 0;\n"]);return At=function(){return t},t}function Mt(){var t=Object(R.a)(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  height: 100vh;\n  width: 680px;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  padding: 10px 50px;\n  border-left: 10px solid ",";\n  box-shadow: -5px 0 15px ",";\n  transform: translate(",");\n  transition: transform 0.3s ease-in-out;\n"]);return Mt=function(){return t},t}var Bt=z.d.div(Mt(),(function(t){return t.theme[t.pageContext]}),(function(t){return t.theme.grey200}),(function(t){return t.isVisible?"0":"100%"})),Pt=Object(z.d)(Ot)(At()),Vt=Object(z.d)(yt)(Dt(),(function(t){return t.theme.fontSize.m})),Ft=Object(z.d)(xt)(zt()),Ht=Object(z.d)(xt)(Rt()),qt=Object(z.d)(Ut.a)(Nt()),Lt=Object(l.b)((function(t){return t}),(function(t){return{addItem:function(e,n){return t(function(t,e){return function(n,r){return n({type:"ADD_ITEM_REQUEST"}),rt.a.post("http://localhost:9000/api/note",Object(f.a)({userID:r().userID,type:t},e)).then((function(e){var r=e.data;return n({type:"ADD_ITEM_SUCCESS",payload:{itemType:t,data:r}})})).catch((function(t){return n({type:"ADD_ITEM_ERROR",err:t})}))}}(e,n))}}}))(F((function(t){var e=t.pageContext,n=t.isVisible,r=t.addItem,i=t.handleClose;return a.a.createElement(Bt,{pageContext:e,isVisible:n},a.a.createElement(Pt,{big:!0},"notes"===e&&"Add a new note","twitters"===e&&"Add a new twitter","articles"===e&&"Add a new article"),a.a.createElement(Vt,null,"notes"===e&&"A note requires a title and description","twitters"===e&&"A twitter requires account name and description","articles"===e&&"An article requires title, description and a link"),a.a.createElement(Ut.c,{initialValues:{title:"",content:"",articleUrl:"",twitterName:""},onSubmit:function(t){r(e,t),i(),t.title="",t.content="",t.articleUrl="",t.twitterName=""},validate:function(t){var n={};return t.title?t.title.length>16&&(n.title="Title must be 15 characters or less"):n.title="Please fill in the title",t.content?t.content.length>151&&(n.title="Title must be 150 characters or less"):n.content="Please fill in the description","articles"===e&&(t.articleUrl||(n.articleUrl="Please add a link of the article")),"twitters"===e&&(t.twitterName||(n.twitterName="Please fill in the twitter name filed")),n}},(function(t){var n=t.values,r=t.handleChange,i=t.handleBlur;t.handleSubmit,t.isSubmitting;return a.a.createElement(Ut.b,null,a.a.createElement(xt,{type:"text",name:"title",placeholder:"title",onChange:r,onBlur:i,value:n.title}),a.a.createElement(qt,{name:"title",component:"div"}),"articles"===e&&a.a.createElement(a.a.Fragment,null,a.a.createElement(Ht,{type:"text",name:"articleUrl",placeholder:"link",onChange:r,onBlur:i,value:n.articleUrl}),a.a.createElement(qt,{name:"articleUrl",component:"div"})),"twitters"===e&&a.a.createElement(a.a.Fragment,null,a.a.createElement(Ht,{type:"text",name:"twitterName",placeholder:"account name",onChange:r,onBlur:i,value:n.twitterName}),a.a.createElement(qt,{name:"twitterName",component:"div"})),a.a.createElement(Ft,{as:"textarea",name:"content",placeholder:"desription",onChange:r,onBlur:i,value:n.content}),a.a.createElement(qt,{name:"content",component:"div"}),a.a.createElement(_t,{type:"submit"},"notes"===e&&"Add note","twitters"===e&&"Add twitter","articles"===e&&"Add article"))})))})));function Qt(){var t=Object(R.a)(["\n  position: fixed;\n  z-index: 3;\n  bottom: 30px;\n  right: 30px;\n  background-color: ",";\n  border-radius: 50%;\n  cursor: pointer;\n"]);return Qt=function(){return t},t}function Gt(){var t=Object(R.a)(["\n  margin-bottom: 0;\n  text-transform: capitalize;\n"]);return Gt=function(){return t},t}function Jt(){var t=Object(R.a)(["\n  margin: 0;\n"]);return Jt=function(){return t},t}function Xt(){var t=Object(R.a)(["\n  padding: 25px 70px 25px 70px;\n"]);return Xt=function(){return t},t}function Yt(){var t=Object(R.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 40px;\n  padding: 25px 70px 25px 70px;\n"]);return Yt=function(){return t},t}function Kt(){var t=Object(R.a)(["\n  position: relative;\n  padding-right: 70px;\n  margin-left: 150px;\n"]);return Kt=function(){return t},t}var Wt=z.d.div(Kt()),Zt=z.d.div(Yt()),$t=z.d.div(Xt()),te=Object(z.d)(yt)(Jt()),ee=Object(z.d)(Ot)(Gt()),ne=Object(z.d)(q)(Qt(),(function(t){return t.theme[t.pageContext]})),re=function(t){Object(U.a)(n,t);var e=Object(N.a)(n);function n(){var t;Object(I.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={activeNewItemBar:!1},t.handleNewItemBarToggle=function(){t.setState((function(t){return{activeNewItemBar:!t.activeNewItemBar}}))},t}return Object(_.a)(n,[{key:"render",value:function(){var t=this.props,e=t.children,n=t.pageContext,r=t.items,i=this.state.activeNewItemBar,o=0;return r&&(o=r.length),a.a.createElement(ft,null,a.a.createElement(Wt,null,a.a.createElement($t,null,a.a.createElement(ee,{big:!0,as:"h1"},n),a.a.createElement(te,null,"".concat(o," ").concat(n))),a.a.createElement(Zt,null,e),a.a.createElement(ne,{icon:this.state.activeNewItemBar?Tt.a:Ct.a,pageContext:n,onClick:this.handleNewItemBarToggle}),a.a.createElement(Lt,{handleClose:this.handleNewItemBarToggle,isVisible:i})))}}]),n}(r.Component);re.defaultProps={pageContext:"notes"};var ae=F(Object(l.b)((function(t,e){return{items:t[e.pageContext]}}))(re)),ie=n(67),oe=n.n(ie);function ce(){var t=Object(R.a)(["\n  display: block;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background: white url(",") no-repeat;\n  background-size: 60%;\n  background-position: 50%;\n  position: absolute;\n  top: 20%;\n  right: 25px;\n"]);return ce=function(){return t},t}function ue(){var t=Object(R.a)(["\n  width: 86px;\n  height: 86px;\n  border-radius: 50%;\n  border: 5px solid ",";\n  position: absolute;\n  top: 25px;\n  right: 25px;\n  z-index: 1;\n  cursor: pointer;\n"]);return ue=function(){return t},t}function le(){var t=Object(R.a)(["\n  margin: 5px 0 0;\n"]);return le=function(){return t},t}function se(){var t=Object(R.a)(["\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n    "]);return se=function(){return t},t}function pe(){var t=Object(R.a)(["\n  position: relative;\n  padding: 17px 30px;\n  background-color: ",";\n\n  ","\n"]);return pe=function(){return t},t}function de(){var t=Object(R.a)(["\n  min-height: 380px;\n  box-shadow: 0 7px 12px ",";\n  border-radius: 10px;\n  overflow: hidden;\n  display: grid;\n  grid-template-rows: 0.25fr 1fr;\n"]);return de=function(){return t},t}var me=z.d.div(de(),(function(t){return t.theme.grey200})),fe=z.d.div(pe(),(function(t){var e=t.activeColor,n=t.theme;return e?n[e]:"white"}),(function(t){return t.flex&&Object(z.c)(se())})),be=Object(z.d)(Ot)(le()),he=z.d.img(ue(),(function(t){return t.theme.twitters})),ge=z.d.a(ce(),oe.a),ve=function(t){Object(U.a)(n,t);var e=Object(N.a)(n);function n(){var t;Object(I.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={redirect:!1},t.handleCardClick=function(){return t.setState({redirect:!0})},t}return Object(_.a)(n,[{key:"render",value:function(){var t=this.props,e=t.id,n=t.pageType,r=t.title,i=t.content,o=t.articleUrl,c=t.twitterName,l=t.removeItem;return this.state.redirect?a.a.createElement(u.a,{to:"".concat(n,"/").concat(e)}):a.a.createElement(me,null,a.a.createElement(fe,{activeColor:n,onClick:this.handleCardClick},"twitters"===n&&a.a.createElement(he,{src:"https://unavatar.now.sh/twitter/".concat(c)}),"articles"===n&&a.a.createElement(ge,{href:o}),a.a.createElement(be,null,r)),a.a.createElement(fe,{flex:!0},a.a.createElement(yt,{onClick:this.handleCardClick},i),a.a.createElement(_t,{secondary:!0,onClick:function(){return l(n,e)}},"REMOVE")))}}]),n}(r.Component);ve.defaultProps={pageType:"notes",twitterName:null,articleUrl:null};var xe=Object(l.b)((function(t){return t}),(function(t){return{removeItem:function(e,n){return t(at(e,n))}}}))(F(ve)),Ee=function(t){Object(U.a)(n,t);var e=Object(N.a)(n);function n(){return Object(I.a)(this,n),e.apply(this,arguments)}return Object(_.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchNotes()}},{key:"render",value:function(){var t=this.props.notes;return a.a.createElement(ae,null,t.map((function(t){var e=t.title,n=t.content,r=t._id;return a.a.createElement(xe,{id:r,pageType:"notes",title:e,content:n,key:r})})))}}]),n}(r.Component),Oe=Object(l.b)((function(t){return{notes:t.notes}}),(function(t){return{fetchNotes:function(){return t(it("notes"))}}}))(Ee),je=function(t){Object(U.a)(n,t);var e=Object(N.a)(n);function n(){return Object(I.a)(this,n),e.apply(this,arguments)}return Object(_.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchTwitters()}},{key:"render",value:function(){var t=this.props.twitters;return a.a.createElement(ae,null,t.map((function(t){var e=t.title,n=t.content,r=t.twitterName,i=t._id;return a.a.createElement(xe,{id:i,pageType:"twitters",title:e,content:n,twitterName:r,key:i})})))}}]),n}(r.Component);je.defaultProps={twitters:[]};var ye=Object(l.b)((function(t){return{twitters:t.twitters}}),(function(t){return{fetchTwitters:function(){return t(it("twitters"))}}}))(je),we=function(t){Object(U.a)(n,t);var e=Object(N.a)(n);function n(){return Object(I.a)(this,n),e.apply(this,arguments)}return Object(_.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchArticles()}},{key:"render",value:function(){var t=this.props.articles;return a.a.createElement(ae,null,t.map((function(t){var e=t.title,n=t.content,r=t._id,i=t.articleUrl;return a.a.createElement(xe,{id:r,pageType:"articles",title:e,content:n,articleUrl:i,key:r})})))}}]),n}(r.Component),Ce=Object(l.b)((function(t){return{articles:t.articles}}),(function(t){return{fetchArticles:function(){return t(it("articles"))}}}))(we);function ke(){var t=Object(R.a)(["\n  display: block;\n  margin-top: 20px;\n  color: black;\n"]);return ke=function(){return t},t}function Te(){var t=Object(R.a)(["\n  display: block;\n  margin-bottom: 50px;\n  text-transform: uppercase;\n  color: black;\n"]);return Te=function(){return t},t}function Se(){var t=Object(R.a)(["\n  padding: 25px 0 15px 0;\n  margin-bottom: 0;\n"]);return Se=function(){return t},t}function Ie(){var t=Object(R.a)(["\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  position: absolute;\n  top: 0px;\n  right: 10px;\n  z-index: 1;\n"]);return Ie=function(){return t},t}function _e(){var t=Object(R.a)(["\n  margin: 0;\n"]);return _e=function(){return t},t}function Ue(){var t=Object(R.a)(["\n  position: relative;\n"]);return Ue=function(){return t},t}function Ne(){var t=Object(R.a)(["\n  padding: 70px 70px 70px 180px;\n  width: 50vw;\n"]);return Ne=function(){return t},t}var Re=z.d.div(Ne()),ze=z.d.div(Ue()),De=Object(z.d)(Ot)(_e()),Ae=z.d.img(Ie()),Me=Object(z.d)(yt)(Se()),Be=z.d.a(Te()),Pe=Object(z.d)(yt)(ke()),Ve=function(t){var e=t.pageContext,n=t.title,r=t.content,i=t.twitterName,o=t.articleUrl,u=t.removeItem,l=t.id;return a.a.createElement(a.a.Fragment,null,a.a.createElement(ft,null,a.a.createElement(Re,null,a.a.createElement(ze,null,a.a.createElement(De,{big:!0},n),"twitters"===e&&a.a.createElement(Ae,{src:"https://unavatar.now.sh/twitter/".concat(i)})),a.a.createElement(Me,null,r),"twitters"===e&&a.a.createElement(Be,{href:"https://twitter.com/".concat(i),target:"_blank"},"Open this twitter"),"articles"===e&&a.a.createElement(Be,{href:o,target:"_blank"},"Open this article"),a.a.createElement(_t,{as:c.b,to:"/".concat(e)},"Close"),a.a.createElement(Pe,{as:c.b,to:"/".concat(e),onClick:function(){return u(e,l)}},"remove note"))))};Ve.defaultProps={pageType:"notes",twitterName:null,articleUrl:null};var Fe=Object(l.b)((function(t){return t}),(function(t){return{removeItem:function(e,n){return t(at(e,n))}}}))(F(Ve)),He=function(t){Object(U.a)(n,t);var e=Object(N.a)(n);function n(){var t;Object(I.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={activeItem:{title:"",content:"",articleUrl:"",twitterName:""}},t}return Object(_.a)(n,[{key:"componentDidMount",value:function(){var t=this;if(this.props.activeItem.length>0){var e=Object(S.a)(this.props.activeItem,1)[0];this.setState({activeItem:e})}else{var n=this.props.match.params.id;rt.a.get("http://localhost:9000/api/note/".concat(n)).then((function(e){var n=e.data;return t.setState({activeItem:n})})).catch((function(t){return console.log(t)}))}}},{key:"render",value:function(){var t=this.state.activeItem,e=this.props.pageContext,n=this.props.match.params.id;return a.a.createElement(Fe,{pageType:e,title:t.title,content:t.content,twitterName:t.twitterName,articleUrl:t.articleUrl,id:n})}}]),n}(r.Component),qe=F(Object(l.b)((function(t,e){return t[e.pageContext]?{activeItem:t[e.pageContext].filter((function(t){return t._id===e.match.params.id}))}:null}))(He));function Le(){var t=Object(R.a)(["\n  margin: 0;\n  width: 450px;\n  text-align: center;\n"]);return Le=function(){return t},t}function Qe(){var t=Object(R.a)(["\n  margin: 20px 0 20px 0;\n  width: 290px;\n  height: 80px;\n"]);return Qe=function(){return t},t}function Ge(){var t=Object(R.a)(["\n  width: 100vw;\n  height: 100vh;\n  background-color: ",";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return Ge=function(){return t},t}var Je=z.d.div(Ge(),(function(t){return t.theme.notes})),Xe=Object(z.d)(q)(Qe()),Ye=Object(z.d)(Ot)(Le()),Ke=function(t){var e=t.children;return a.a.createElement(Je,null,a.a.createElement(Xe,{icon:Q.a}),a.a.createElement(Ye,null,"Your new favorite online notes experience"),e)};function We(){var t=Object(R.a)(["\n  color: black;\n"]);return We=function(){return t},t}function Ze(){var t=Object(R.a)(["\n  margin-top: 30px;\n"]);return Ze=function(){return t},t}function $e(){var t=Object(R.a)(["\n  margin: 10px;\n"]);return $e=function(){return t},t}function tn(){var t=Object(R.a)(["\n  margin-top: 15px;\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n"]);return tn=function(){return t},t}function en(){var t=Object(R.a)(["\n  width: 40vw;\n  padding: 10px;\n  margin-top: 20px;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 10px;\n  box-shadow: 0 3px 15px ",";\n"]);return en=function(){return t},t}var nn=z.d.div(en(),(function(t){return t.grey200})),rn=Object(z.d)(Ut.b)(tn()),an=Object(z.d)(xt)($e()),on=Object(z.d)(_t)(Ze()),cn=Object(z.d)(c.b)(We()),un=function(t){var e=t.authType,n=t.authenticate;return a.a.createElement(nn,null,a.a.createElement(Ot,null,"login"===e&&"Sign In","register"===e&&"Create account"),a.a.createElement(Ut.c,{initialValues:{username:"",password:"",password2:""},onSubmit:function(t){return n(t.username,t.password,e)},validate:function(t){var n={};return t.username||(n.username="Required"),t.password||(n.password="Required"),"register"!==e||t.password2||(n.password2="Required"),n}},(function(t){var n=t.handleChange,r=t.handleBlur,i=t.values;return a.a.createElement(rn,null,a.a.createElement(an,{type:"username",name:"username",placeholder:"username",onChange:n,onBlur:r,value:i.username}),a.a.createElement(Ut.a,{name:"username",component:"div"}),a.a.createElement(an,{type:"password",name:"password",placeholder:"password",onChange:n,onBlur:r,value:i.password}),a.a.createElement(Ut.a,{name:"password",component:"div"}),"register"===e&&a.a.createElement(a.a.Fragment,null,a.a.createElement(an,{type:"text",name:"password2",placeholder:"confirm password",onChange:n,onBlur:r,value:i.password2}),a.a.createElement(Ut.a,{name:"password2",component:"div"})),a.a.createElement(on,{type:"submit"},"login"===e&&"enter favnote","register"===e&&"register"))})),"login"===e&&a.a.createElement(cn,{to:"/register"},"i want my account!"),"register"===e&&a.a.createElement(cn,{to:"/login"},"i want to log in"))};un.defaultProps={authType:"login"};var ln=Object(l.b)((function(t){return t}),(function(t){return{authenticate:function(e,n,r){return t(function(t,e,n){return function(r){var a;return"register"===n?a="http://localhost:9000/api/user/register":"login"===n&&(a="http://localhost:9000/api/user/login"),r({type:"AUTHENTICATE_REQUEST"}),rt.a.post(a,{username:t,password:e}).then((function(t){return r({type:"AUTHENTICATE_SUCCESS",payload:t})})).catch((function(t){return r({type:"AUTHENTICATION_ERROR",err:t})}))}}(e,n,r))}}}))(un),sn=Object(l.b)((function(t){var e=t.userID;return{userID:void 0===e?null:e}}))((function(t){return t.userID?a.a.createElement(u.a,{to:x}):a.a.createElement(Ke,null,a.a.createElement(ln,{authType:"login"}))})),pn=Object(l.b)((function(t){var e=t.status;return{status:void 0===e?null:e}}))((function(t){return 201===t.status?a.a.createElement(u.a,{to:x}):a.a.createElement(Ke,null,a.a.createElement(ln,{authType:"register"}))})),dn=function(){return a.a.createElement(l.a,{store:v},a.a.createElement(c.a,null,a.a.createElement(V,null,a.a.createElement(u.d,null,a.a.createElement(u.b,{exact:!0,path:x,render:function(){return a.a.createElement(u.a,{to:"/notes"})}}),a.a.createElement(u.b,{exact:!0,path:k,component:sn}),a.a.createElement(u.b,{exact:!0,path:T,component:pn}),a.a.createElement(u.b,{exact:!0,path:E,component:Oe}),a.a.createElement(u.b,{path:O,component:qe}),a.a.createElement(u.b,{exact:!0,path:w,component:ye}),a.a.createElement(u.b,{path:C,component:qe}),a.a.createElement(u.b,{exact:!0,path:j,component:Ce}),a.a.createElement(u.b,{path:y,component:qe})))))};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(dn,null)),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.fdee9938.chunk.js.map