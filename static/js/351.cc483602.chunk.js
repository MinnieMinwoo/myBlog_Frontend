"use strict";(self.webpackChunkmyblog_frontend=self.webpackChunkmyblog_frontend||[]).push([[351],{2552:function(n,e,r){var t,a=r(168),c=(r(7313),r(6233)),o=r(1965),i=r(3298),s=r(244),u=r(6417),l=(0,s.ZP)(o.Z.Dialog)(t||(t=(0,a.Z)(["\n  margin: 0;\n"])));e.Z=function(){var n=(0,c.d)(),e=n.modalDataState,r=n.closeModal,t=n.closeModalWithCallback;return(0,u.jsx)(o.Z,{size:"lg",centered:!0,show:e.isOpen,onHide:e.isConfirm?r:t,className:"AlertModal",children:(0,u.jsxs)(l,{children:[(0,u.jsx)(o.Z.Header,{closeButton:!0,children:(0,u.jsx)(o.Z.Title,{children:e.title})}),(0,u.jsx)(o.Z.Body,{children:e.content}),(0,u.jsxs)(o.Z.Footer,{children:[(0,u.jsx)(i.Z,{variant:"secondary",onClick:e.isConfirm?r:t,children:e.isConfirm?"Cancel":"Close"}),(0,u.jsx)(i.Z,{hidden:!e.isConfirm,variant:e.buttonColor,onClick:t,children:"Confirm"})]})]})})}},4855:function(n,e,r){var t,a=r(168),c=(r(7313),r(6469)),o=r(2102),i=r(244),s=r(6417),u=i.ZP.p(t||(t=(0,a.Z)(["\n  margin: 10px 0;\n  font-size: 14px;\n  color: #777;\n"])));e.Z=function(){return(0,s.jsx)("footer",{className:"HomeFooter",children:(0,s.jsx)(c.Z,{bg:"light",children:(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(u,{children:" 2023 My own blog project"}),(0,s.jsx)(u,{children:" \xa9 Snowcat"})]})})})}},4646:function(n,e,r){r.d(e,{AT:function(){return u},FH:function(){return x},Ok:function(){return d},SV:function(){return m},YO:function(){return f},c2:function(){return h},dZ:function(){return l},mR:function(){return p},sk:function(){return v},yR:function(){return Z}});var t=r(4165),a=r(5861),c=r(935),o=r(450),i=r(4766),s=r(7657),u=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){var r,i,s;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=(0,c.JU)(o.wO,"users/".concat(e,"/category"),e),n.prev=1,n.next=4,(0,c.QT)(r);case 4:if(null!==(i=n.sent.data())&&void 0!==i&&i.order&&Array.isArray(null===i||void 0===i?void 0:i.order)){n.next=7;break}return n.abrupt("return",[]);case 7:return s=[],n.next=10,Promise.all(i.order.map(function(){var n=(0,a.Z)((0,t.Z)().mark((function n(r){var a,i,u,l;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u=(0,c.JU)(o.wO,"users/".concat(e,"/category"),r),n.next=3,(0,c.QT)(u);case 3:l=n.sent.data(),s.push({mainField:r,subField:null!==(a=null===l||void 0===l?void 0:l.subfield)&&void 0!==a?a:[],thumbnailLink:null!==(i=null===l||void 0===l?void 0:l.thumbnailLink)&&void 0!==i?i:[]});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()));case 10:return n.abrupt("return",s);case 13:return n.prev=13,n.t0=n.catch(1),console.log(n.t0),n.abrupt("return",[]);case 17:case"end":return n.stop()}}),n,null,[[1,13]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e,r,a){var i,s,u,l;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=(0,c.JU)(o.wO,"users/".concat(e,"/category"),r),n.prev=1,n.next=4,(0,c.QT)(i);case 4:if(null!==(s=n.sent.data())&&void 0!==s&&s.subfield&&null!==s&&void 0!==s&&s.thumbnailLink){n.next=7;break}return n.abrupt("return","");case 7:return u=s.subfield,l=s.thumbnailLink,n.abrupt("return",-1!==u.indexOf(a)?l[u.indexOf(a)]:"");case 11:return n.prev=11,n.t0=n.catch(1),console.log(n.t0),n.abrupt("return",[]);case 15:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(e,r,t){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e,r){var a,i;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a=(0,c.JU)(o.wO,"users/".concat(r,"/category"),"".concat(r)),i=(0,c.JU)(o.wO,"users/".concat(r,"/category"),"".concat(e)),n.next=5,(0,c.r7)(a,{order:(0,c.vr)(e)});case 5:return n.next=7,(0,c.pl)(i,{subfield:[],thumbnailLink:[]});case 7:n.next=12;break;case 9:throw n.prev=9,n.t0=n.catch(0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e,r){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e,r,a){var i,s;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=e).subField.push(r),i.thumbnailLink.push(""),n.prev=3,s=(0,c.JU)(o.wO,"users/".concat(a,"/category"),"".concat(i.mainField)),n.next=7,(0,c.pl)(s,{subfield:i.subField,thumbnailLink:i.thumbnailLink});case 7:return n.abrupt("return",i);case 10:throw n.prev=10,n.t0=n.catch(3),n.t0;case 13:case"end":return n.stop()}}),n,null,[[3,10]])})));return function(e,r,t){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e,r){var a,i,s;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a=(0,c.IO)((0,c.hJ)(o.wO,"posts"),(0,c.ar)("createdBy","==",r),(0,c.ar)("category","array-contains",e)),n.next=4,(0,c.PL)(a);case 4:return n.sent.forEach((function(n){n.data().category[0]===e&&(0,c.r7)((0,c.JU)(o.wO,"posts",n.id),{category:[]})})),i=(0,c.JU)(o.wO,"users/".concat(r,"/category"),"".concat(r)),s=(0,c.JU)(o.wO,"users/".concat(r,"/category"),"".concat(e)),n.next=10,(0,c.r7)(i,{order:(0,c.Ab)(e)});case 10:return n.next=12,(0,c.oe)(s);case 12:n.next=17;break;case 14:throw n.prev=14,n.t0=n.catch(0),n.t0;case 17:case"end":return n.stop()}}),n,null,[[0,14]])})));return function(e,r){return n.apply(this,arguments)}}(),h=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e,r,a){var i,s,u;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i={mainField:e.mainField,subField:[],thumbnailLink:[]},e.subField.forEach((function(n,t){n!==r&&(i.subField.push(n),i.thumbnailLink.push(e.thumbnailLink[t]))})),n.prev=2,s=(0,c.IO)((0,c.hJ)(o.wO,"posts"),(0,c.ar)("createdBy","==",a),(0,c.ar)("category","==",[e.mainField,r])),n.next=6,(0,c.PL)(s);case 6:return n.sent.forEach((function(n){(0,c.r7)((0,c.JU)(o.wO,"posts",n.id),{category:[]})})),u=(0,c.JU)(o.wO,"users/".concat(a,"/category"),"".concat(i.mainField)),n.next=11,(0,c.r7)(u,{subfield:i.subField,thumbnailLink:i.thumbnailLink});case 11:return n.abrupt("return",i);case 14:throw n.prev=14,n.t0=n.catch(2),n.t0;case 17:case"end":return n.stop()}}),n,null,[[2,14]])})));return function(e,r,t){return n.apply(this,arguments)}}(),x=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e,r,a,i){var s,u,l,d,p;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s=r.mainField,u=r.subField,l=r.thumbnailLink,n.prev=1,n.next=4,f(s,i);case 4:return d=(0,c.JU)(o.wO,"users/".concat(i,"/category"),"".concat(i)),p=(0,c.JU)(o.wO,"users/".concat(i,"/category"),"".concat(a)),n.next=8,(0,c.r7)(d,{order:e});case 8:return n.next=10,(0,c.pl)(p,{subfield:r.subField,thumbnailLink:r.thumbnailLink});case 10:return n.abrupt("return",{mainField:a,subField:u,thumbnailLink:l});case 13:throw n.prev=13,n.t0=n.catch(1),n.t0;case 16:case"end":return n.stop()}}),n,null,[[1,13]])})));return function(e,r,t,a){return n.apply(this,arguments)}}(),m=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e,r,a,i){var s,u,l,d;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s=e.mainField,u=e.subField,l=u.map((function(n){return n===r?a:n})),n.prev=2,d=(0,c.JU)(o.wO,"users/".concat(i,"/category"),"".concat(s)),n.next=6,(0,c.r7)(d,{subfield:l});case 6:return n.abrupt("return",l);case 9:throw n.prev=9,n.t0=n.catch(2),n.t0;case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e,r,t,a){return n.apply(this,arguments)}}(),v=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,s.T)(e,"$category/".concat((0,i.k$)())));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),Z=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e,r,a){var i;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,i=(0,c.JU)(o.wO,"users/".concat(a,"/category"),"".concat(r)),n.next=4,(0,c.r7)(i,{thumbnailLink:e});case 4:n.next=10;break;case 6:throw n.prev=6,n.t0=n.catch(0),console.log(n.t0),n.t0;case 10:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e,r,t){return n.apply(this,arguments)}}()},3351:function(n,e,r){r.r(e),r.d(e,{default:function(){return nn}});var t,a,c,o,i,s,u,l,d,p,f,h,x=r(7313),m=r(8467),v=r(168),Z=r(2135),b=r(6469),g=r(2102),k=r(9998),w=r(244),y=r(4427),j=r(4165),C=r(5861),O=r(9439),F=r(78),L=r(973),U=r(6687),P=r(3298),J=r(769),N=r(6233),D=r(2552),I=r(6417),S=w.ZP.div(t||(t=(0,v.Z)(["\n  display: inline-block;\n"]))),B=w.ZP.button(a||(a=(0,v.Z)(["\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 1px solid #eee;\n  background-image: url(",");\n  background-color: #fff;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  cursor: Pointer;\n"])),(function(n){return n.url?n.url:""})),M=(0,w.ZP)(U.Z).attrs((function(){return{vertical:!0}}))(c||(c=(0,v.Z)(["\n  position: absolute;\n  transform: translate(-75px, 50px);\n  width: 98px;\n  @media (max-width: 767px) {\n    transform: translateX(-49px, -50px);\n  }\n  margin-top: 5px;\n  z-index: 1;\n  & button {\n    background-color: #fff;\n  }\n"]))),H=function(){var n,e=(0,F.FV)(L.F),r=(0,O.Z)(e,2),t=r[0],a=r[1],c=(0,x.useState)(!0),o=(0,O.Z)(c,2),i=o[0],s=o[1],u=(0,N.d)().openModal,l=(0,m.s0)(),d=function(){var n=(0,C.Z)((0,j.Z)().mark((function n(e){var r;return(0,j.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("name"in e.target){n.next=2;break}return n.abrupt("return");case 2:r=e.target.name,n.t0=r,n.next="write"===n.t0?6:"setting"===n.t0?8:"logout"===n.t0?10:24;break;case 6:return l("/write"),n.abrupt("break",25);case 8:return l("/setting"),n.abrupt("break",25);case 10:return n.prev=10,n.next=13,(0,J.Mx)();case 13:a({isLoggedIn:!1}),l("/",{replace:!1}),n.next=23;break;case 17:n.prev=17,n.t1=n.catch(10),console.log(n.t1),"Logout Error","Something wrong. Please try again later",u("Logout Error","Something wrong. Please try again later");case 23:case 24:return n.abrupt("break",25);case 25:case"end":return n.stop()}}),n,null,[[10,17]])})));return function(e){return n.apply(this,arguments)}}();return(0,I.jsxs)(S,{className:"HeaderProfile",children:[(0,I.jsx)(D.Z,{}),(0,I.jsx)(B,{url:null!==(n=t.photoURL)&&void 0!==n?n:"",onClick:function(){s((function(n){return!n}))}}),i?null:(0,I.jsxs)(M,{children:[(0,I.jsx)(P.Z,{name:"write",variant:"outline-secondary",onClick:d,children:"Post"}),(0,I.jsx)(P.Z,{name:"setting",variant:"outline-secondary",onClick:d,children:"Setting"}),(0,I.jsx)(P.Z,{name:"logout",variant:"outline-secondary",onClick:d,children:"Sign Out"})]})]})},T=w.ZP.img(o||(o=(0,v.Z)(["\n  width: 40px;\n  height: 40px;\n  margin-right: 20px;\n"]))),A=function(){var n=(0,m.UO)();return(0,I.jsx)("header",{className:"Header",children:(0,I.jsx)(b.Z,{bg:"light",children:(0,I.jsxs)(g.Z,{children:[(0,I.jsxs)(b.Z.Brand,{children:[(0,I.jsx)(Z.rU,{to:"/",children:(0,I.jsx)(T,{src:y,alt:"blog logo"})}),"".concat(n.userID?"".concat(n.userID,"'s"):""," Blog"),(0,I.jsxs)(k.Z,{children:[(0,I.jsx)(k.Z.Link,{as:Z.rU,to:"".concat(n.userID?"/home/".concat(n.userID):"/"),children:"Home"}),(0,I.jsx)(k.Z.Link,{as:Z.rU,to:"".concat(n.userID?"/home/".concat(n.userID,"/category"):"/"),children:"Category"}),(0,I.jsx)(k.Z.Link,{href:"/",children:"Tag"}),(0,I.jsx)(k.Z.Link,{href:"/",children:"About"})]})]}),(0,I.jsx)("div",{children:(0,I.jsx)(H,{})})]})})})},z=r(4855),E=w.ZP.div(i||(i=(0,v.Z)([""]))),_=(0,w.ZP)(Z.rU)(s||(s=(0,v.Z)(["\n  text-decoration: none;\n  font-size: 15px;\n  &:hover {\n    text-decoration: underline;\n    cursor: pointer;\n  }\n"]))),Q=(0,w.ZP)(_)(u||(u=(0,v.Z)(["\n  color: #555;\n  margin: 5px 0;\n  &:hover {\n    color: #555;\n  }\n"]))),R=(0,w.ZP)(_)(l||(l=(0,v.Z)(["\n  color: #777;\n  padding: 3px 0;\n  margin: 0;\n  &:hover {\n    color: #777;\n  }\n"]))),V=w.ZP.ul(d||(d=(0,v.Z)(["\n  list-style: none;\n  padding: 5px 0 3px 0;\n  margin: 0;\n"]))),W=w.ZP.li(p||(p=(0,v.Z)(["\n  border-left: 2px solid #eee;\n  padding-left: 9px;\n"]))),$=function(n){var e=n.data,r=(0,m.UO)();return(0,I.jsxs)(E,{className:"CategorySideContent",children:[(0,I.jsx)(Q,{as:"p",children:e.mainField}),e.subField&&(0,I.jsx)(V,{children:e.subField.map((function(n,t){return(0,I.jsx)(W,{children:(0,I.jsx)(R,{to:"/home/".concat(r.userID,"/category/").concat(e.mainField,"/").concat(n),children:n})},t)}))})]})},X=r(2250),Y=r(4646),q=w.ZP.aside(f||(f=(0,v.Z)(["\n  padding-left: 30px;\n  margin: 35px 0;\n  border-left: 1px solid #eee;\n  @media (max-width: 991px) {\n    display: none;\n  }\n"]))),G=w.ZP.p(h||(h=(0,v.Z)(["\n  color: #555;\n  font-weight: bold;\n  font-size: 15px;\n  text-decoration: none;\n  &:hover {\n    text-decoration: none;\n  }\n"]))),K=function(){var n=(0,x.useState)([]),e=(0,O.Z)(n,2),r=e[0],t=e[1],a=(0,m.UO)();return(0,x.useEffect)((function(){if(!a.userID)throw console.log("no params");(0,X.d3)(a.userID).then((function(n){return(0,Y.AT)(n)})).then((function(n){t(n)}))}),[]),(0,I.jsx)(q,{className:"CategorySideBar",children:(0,I.jsxs)("nav",{className:"category_navigation",children:[(0,I.jsx)(G,{children:"Categories"}),r.map((function(n,e){return(0,I.jsx)($,{data:n},e)}))]})})},nn=function(){var n=(0,m.UO)();return(0,I.jsxs)("div",{className:"Home d-flex flex-column min-vh-100 overflow-x-hidden",children:[(0,I.jsx)("header",{className:"home_header",children:(0,I.jsx)(A,{})}),(0,I.jsx)("section",{className:"home_section flex-grow-1",children:(0,I.jsxs)("div",{className:"row",children:[(0,I.jsx)("div",{className:"col col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 col-xxl-6 offset-xxl-3",children:(0,I.jsx)(m.j3,{})}),(0,I.jsx)("div",{className:"col",children:n.docID?null:(0,I.jsx)(K,{})})]})}),(0,I.jsx)("footer",{className:"home_footer",children:(0,I.jsx)(z.Z,{})})]})}},6233:function(n,e,r){r.d(e,{d:function(){return d}});var t=r(4165),a=r(5861),c=r(1413),o=r(9439),i=r(7313),s=r(78),u=r(6417),l=(0,s.cn)({key:"modalState",default:{isOpen:!1,title:"",content:"",closeCallBack:function(){},isConfirm:!1,buttonColor:"primary"}}),d=function(){var n=(0,s.FV)(l),e=(0,o.Z)(n,2),r=e[0],d=e[1],p=(0,i.useCallback)((function(n,e,r,t,a){d({isOpen:!0,title:n,content:"string"===typeof e?(0,u.jsx)("p",{children:e}):e,closeCallBack:r,isConfirm:null!==t&&void 0!==t&&t,buttonColor:null!==a&&void 0!==a?a:"primary"})}),[d]),f=(0,i.useCallback)((function(){d((function(n){return(0,c.Z)((0,c.Z)({},n),{},{isOpen:!1})}))}),[d]),h=(0,i.useCallback)((0,a.Z)((0,t.Z)().mark((function n(){return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(d((function(n){return(0,c.Z)((0,c.Z)({},n),{},{isOpen:!1})})),!r.closeCallBack){n.next=4;break}return n.next=4,r.closeCallBack();case 4:case"end":return n.stop()}}),n)}))),[r,d]);return{modalDataState:r,openModal:p,closeModal:f,closeModalWithCallback:h}}},4427:function(n,e,r){n.exports=r.p+"static/media/logo.006bdc187418d22db610.png"}}]);