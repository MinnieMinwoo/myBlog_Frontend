"use strict";(self.webpackChunkmyblog_frontend=self.webpackChunkmyblog_frontend||[]).push([[260],{2552:function(e,A,l){var n,t=l(168),a=(l(7313),l(6233)),r=l(6365),s=l(7440),i=l(244),o=l(6417),c=(0,i.ZP)(r.Z.Dialog)(n||(n=(0,t.Z)(["\n  margin: 0;\n"])));A.Z=function(){var e=(0,a.d)(),A=e.modalDataState,l=e.closeModal,n=e.closeModalWithCallback;return(0,o.jsx)(r.Z,{size:"lg",centered:!0,show:A.isOpen,onHide:A.isConfirm?l:n,className:"AlertModal",children:(0,o.jsxs)(c,{children:[(0,o.jsx)(r.Z.Header,{closeButton:!0,children:(0,o.jsx)(r.Z.Title,{children:A.title})}),(0,o.jsx)(r.Z.Body,{children:A.content}),(0,o.jsxs)(r.Z.Footer,{children:[(0,o.jsx)(s.Z,{variant:"secondary",onClick:A.isConfirm?l:n,children:A.isConfirm?"Cancel":"Close"}),(0,o.jsx)(s.Z,{hidden:!A.isConfirm,variant:A.buttonColor,onClick:n,children:"Confirm"})]})]})})}},5331:function(e,A,l){l.d(A,{Z:function(){return i}});l(7313);var n=l(8467),t=l(2135),a=l.p+"static/media/logo.006bdc187418d22db610.png",r=l(6233),s=l(6417),i=function(e){var A=e.title,l=e.userName,i=e.outlet,o=e.isWarningAlert,c=void 0!==o&&o,f=(0,n.s0)(),u=(0,r.d)().openModal;return(0,s.jsx)("header",{className:"Header",children:(0,s.jsx)("nav",{className:"navbar bg-light",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("div",{className:"navbar-brand",children:[(0,s.jsx)("a",{href:"/",onClick:c?function(e){e.preventDefault();u("Warning","Post data will not be saved when you leave the window.",(function(){f("/")}),!0)}:function(e){e.preventDefault(),f("/")},children:(0,s.jsx)("img",{className:"me-2 pe-auto",style:{width:"40px",height:"40px",cursor:"pointer"},src:a,alt:"blog logo"})}),null!==A&&void 0!==A?A:"",l&&(0,s.jsxs)("ul",{className:"navbar-nav hstack gap-3 ms-1",children:[(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(t.rU,{className:"nav-link",to:"".concat(l?"/home/".concat(l):"/"),children:"Home"})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(t.rU,{className:"nav-link",to:"".concat(l?"/home/".concat(l,"/category"):"/"),children:"Category"})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(t.rU,{className:"nav-link disabled",to:"/",children:"Tag"})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(t.rU,{className:"nav-link disabled",to:"/",children:"About"})})]})]}),null!==i&&void 0!==i?i:null]})})})}},1966:function(e,A,l){l.r(A),l.d(A,{default:function(){return j}});var n=l(4165),t=l(5861),a=l(9439),r=l(7313),s=l(8467),i=l(78),o=l(6233),c=l(973),f=l(2495),u=l(2250),d=l(2885),O=l(1413),m=l(6417),W=function(){var e=(0,i.FV)(c.F),A=(0,a.Z)(e,2),l=A[0],s=A[1],o=(0,r.useState)(""),f=(0,a.Z)(o,2),d=f[0],W=f[1],g=(0,r.useRef)(null);(0,r.useEffect)((function(){l.photoURL&&W(l.photoURL)}),[l.photoURL]);var h=function(){var e=(0,t.Z)((0,n.Z)().mark((function e(A){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l.uid){e.next=2;break}throw window.alert("no user uid data");case 2:if(A.target.files){e.next=4;break}throw window.alert("no files exist");case 4:return e.next=6,(0,u.bY)(Boolean(l.photoURL),l.uid,A.target.files[0]);case 6:t=e.sent,s((function(e){return(0,O.Z)((0,O.Z)({},e),{},{photoURL:t})}));case 8:case"end":return e.stop()}}),e)})));return function(A){return e.apply(this,arguments)}}();return(0,m.jsxs)("div",{className:"ProfileImageEdit px-4 vstack gap-3",style:{flexBasis:"210px"},children:[(0,m.jsx)("img",{className:"img-thumbnail rounded-circle",style:{width:"128px",height:"128px"},src:d,alt:"Profile"}),(0,m.jsx)("input",{hidden:!0,type:"file",accept:"image/*",ref:g,src:d,onChange:h}),(0,m.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){var e;null===(e=g.current)||void 0===e||e.click()},children:"Upload Image"}),(0,m.jsx)("button",{type:"button",className:"btn btn-outline-primary",onClick:function(){var e;null!==(e=g.current)&&void 0!==e&&e.value&&(g.current.value="")},children:"Delete Image"})]})},g=function(){var e=(0,i.FV)(c.F),A=(0,a.Z)(e,2),l=A[0],s=A[1],o=(0,r.useState)(!0),f=(0,a.Z)(o,2),d=f[0],W=f[1],g=(0,r.useState)(""),h=(0,a.Z)(g,2),p=h[0],x=h[1],v=(0,r.useState)(""),b=(0,a.Z)(v,2),C=b[0],w=b[1];(0,r.useEffect)((function(){var e,A;x(null!==(e=l.nickname)&&void 0!==e?e:""),w(null!==(A=l.description)&&void 0!==A?A:"")}),[l]);var j=function(e){var A=e.target,l=A.name,n=A.value;"nickname"===l?x(n):"description"===l&&w(n)},k=function(){var e=(0,t.Z)((0,n.Z)().mark((function e(A){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A.preventDefault(),l.uid){e.next=3;break}throw window.alert("no user uid data");case 3:return e.next=5,(0,u.Lj)(l.uid,p,C);case 5:s((function(e){return(0,O.Z)((0,O.Z)({},e),{},{nickname:p,description:C})})),W(!0);case 7:case"end":return e.stop()}}),e)})));return function(A){return e.apply(this,arguments)}}();return(0,m.jsxs)("div",{className:"ProfileInfoEdit container px-4",children:[(0,m.jsxs)("div",{className:"vstack gap-2",hidden:!d,children:[(0,m.jsx)("p",{className:"fs-2 fw-semibold m-0",style:{color:"#111"},children:l.nickname}),(0,m.jsx)("div",{style:{color:"#333"},children:l.description}),(0,m.jsx)("button",{type:"button",className:"btn btn-outline-primary",style:{width:"96px"},onClick:function(){W((function(e){return!e}))},children:"Edit"})]}),(0,m.jsxs)("form",{hidden:d,onSubmit:k,children:[(0,m.jsxs)("div",{className:"mb-3",children:[(0,m.jsx)("label",{className:"form-label",children:"Nickname"}),(0,m.jsx)("input",{className:"form-control",type:"text",name:"nickname",placeholder:"nickname",value:p,maxLength:20,onChange:j,required:!0})]}),(0,m.jsxs)("div",{className:"mb-3",children:[(0,m.jsx)("label",{className:"form-label",children:"Description"}),(0,m.jsx)("input",{className:"form-control",type:"text",name:"description",placeholder:"description",value:C,maxLength:100,onChange:j})]}),(0,m.jsx)("button",{type:"submit",style:{width:"96px"},className:"btn btn-primary",children:"Save"})]})]})},h=function(e){var A=e.title,l=e.description,n=e.buttonMessage,t=e.onClick,a=e.currentData,r=e.buttonColor;return(0,m.jsxs)("div",{className:"SettingData px-3 py-4",style:{borderBottom:"1px solid #eee"},children:[(0,m.jsx)("h3",{className:"d-inline-block fs-5",style:{width:"170px",color:"#111"},children:A}),(0,m.jsx)("span",{style:{color:"#333"},children:a}),(0,m.jsx)("button",{className:"btn btn-".concat(null!==r&&void 0!==r?r:"primary"," float-end"),style:{width:"96px"},onClick:t,children:n}),(0,m.jsx)("p",{className:"mt-2 mb-0",style:{fontSize:"14px",color:"#777"},children:l})]})},p=l(2552),x=l(5331),v=l(769),b=l.p+"static/media/google.7c301fd6a8d5b45b3c23.png",C=l.p+"static/media/twitter.f5cbdddd52a7a5312987.png",w=function(){var e=function(e){if(e.target instanceof HTMLImageElement){var A=e.target.alt;console.log(A)}},A=function(A){var l=A.name,n=A.img;return(0,m.jsx)("img",{className:"img-fluid img-thumbnail ms-2",style:{width:"50px",height:"50px"},src:n,alt:l,role:"button",onClick:e})};return(0,m.jsxs)("div",{className:"SettingData px-3 py-4",style:{borderBottom:"1px solid #eee"},children:[(0,m.jsx)("h3",{className:"d-inline-block fs-5",style:{width:"170px",color:"#111"},children:"Social Login"}),(0,m.jsx)("span",{className:"d-inline-block float-end",children:(0,m.jsxs)("div",{className:"hstack",children:[(0,m.jsx)(A,{name:"google",img:b}),(0,m.jsx)(A,{name:"facebook",img:"data:image/png;base64,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AAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAAAfAUATKPWTHqFE5X+SP2XKrjYU4sB+MfWTb2P1NdXwcUesQNktxCA6BrbAcjeAGYAEF0VfooegFqqEwA7AAB2AABSawMguy4AolswF4Ds1wAFgOhaATADAhBcBwDZtQBgCAQgt3oAsutsAMAtEACXAAC8BgAgcgYAwAwAgNcAAIQ2uxmA6LoKANG1AOA1AAAuAQCk1gaAWyAAudV1ApA9AswCwCUAAJcAAEJrB8ARAIDXAACk1glAdI2OgOy66gCIrrkAYAQAILdWAOwAANgBAEhtEQDRNc0BwAgAgBEAgNDaAQAAgOBaAMiuC4Do6t0Cwm+BDQBE11YAiK4DgOxaAQifAQAwAwBgBwAgtNnNAES3qAAQXQsA2bUD4BIAAAAAuAUCkFjdQgCyT4CZALgEAJBbKwDZdQDgCADAawAAUlsIQHSNjoDsqvUfhE1HACsmvcKutRX+SK89OdkVZhUAbrclk17hfMXvcEum9DfmCAgPAAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAAIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACAAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAqun+BGTO3BD4YxcdAAAAAElFTkSuQmCC"}),(0,m.jsx)(A,{name:"twitter",img:C})]})}),(0,m.jsx)("p",{className:"mt-2 mb-0",style:{fontSize:"14px",color:"#777"},children:"You can set up a social login method."})]})},j=function(){var e=(0,i.FV)(c.F),A=(0,a.Z)(e,2),l=A[0],O=A[1],b=(0,i.sJ)(f.B),C=(0,o.d)(),j=C.openModal,k=C.closeModal,B=(0,s.s0)(),E=(0,r.useRef)(null),N=(0,r.useRef)(null),y=function(){var e=(0,t.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j("Email Change",(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("p",{children:"Enter your new email."}),(0,m.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[(0,m.jsxs)("div",{className:"mb-3",children:[(0,m.jsx)("label",{className:"form-label",children:"Email"}),(0,m.jsx)("input",{className:"form-control",name:"email",type:"string",placeholder:"enter your email",autoComplete:"off",ref:E,required:!0})]}),(0,m.jsx)("label",{className:"form-label",children:"Current Password"}),(0,m.jsx)("input",{className:"form-control",name:"password",type:"password",placeholder:"enter your password",autoComplete:"off",ref:N,required:!0}),(0,m.jsx)("div",{className:"form-text",children:"Password is required when you change email address."})]})]}),(0,t.Z)((0,n.Z)().mark((function e(){var A,t,a,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,l.uid){e.next=3;break}throw console.log("No userData");case 3:if(null!==(A=E.current)&&void 0!==A&&A.value){e.next=5;break}return e.abrupt("return");case 5:if(a=E.current.value,null!==(t=N.current)&&void 0!==t&&t.value){e.next=8;break}return e.abrupt("return");case 8:return r=N.current.value,e.next=11,(0,v.cJ)(a,r);case 11:k(),O({isLoggedIn:!1}),j("Email update complete","Please complete email verification if you want to login",(function(){return B("/")})),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),e.t0&&console.log(e.t0),j("Error","Withdrawal failed");case 20:case"end":return e.stop()}}),e,null,[[0,16]])}))),!0);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=(0,r.useRef)(null),Q=function(){var e=(0,t.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j("Warning",(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("p",{children:"Please enter your password if you really want leave."}),(0,m.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[(0,m.jsx)("label",{className:"form-label",children:"Password"}),(0,m.jsx)("input",{className:"form-control",name:"password",type:"password",placeholder:"enter your password",autoComplete:"off",ref:I,required:!0})]})]}),(0,t.Z)((0,n.Z)().mark((function e(){var A,t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l.uid){e.next=2;break}throw console.log("No userData");case 2:if(null!==(A=I.current)&&void 0!==A&&A.value){e.next=4;break}return e.abrupt("return");case 4:return t=I.current.value,e.prev=5,e.next=8,(0,u.af)(l.uid,t);case 8:k(),O({isLoggedIn:!1}),j("Withdrawal complete","Your withdrawal has been completed",(function(){return B("/")})),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(5),e.t0&&console.log(e.t0),j("Error","Withdrawal failed");case 17:case"end":return e.stop()}}),e,null,[[5,13]])}))),!0,"danger");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,m.jsxs)(m.Fragment,{children:[b?(0,m.jsx)(d.Z,{}):null,(0,m.jsx)(p.Z,{}),(0,m.jsx)(x.Z,{title:"Setting"}),(0,m.jsxs)("main",{className:"EditProfile",children:[(0,m.jsx)("section",{className:"py-4 col col-lg-10 offset-lg-1 col-xxl-8 offset-xxl-2",children:(0,m.jsxs)("div",{className:"hstack",children:[(0,m.jsx)(W,{}),(0,m.jsx)("div",{className:"vr"}),(0,m.jsx)(g,{})]})}),(0,m.jsx)("hr",{className:"col col-lg-10 offset-lg-1 col-xxl-8 offset-xxl-2"}),(0,m.jsxs)("section",{className:"col col-lg-10 offset-lg-1 col-xxl-8 offset-xxl-2",children:[(0,m.jsx)(h,{title:"Email address",description:"Email address that receives authentication or notification.",buttonMessage:"Change",currentData:l.email,onClick:y}),(0,m.jsx)(w,{}),(0,m.jsx)(h,{title:"Withdrawal",description:"All posts and comments you created upon withdrawal will be deleted and will not be recovered.",buttonMessage:"Quit",buttonColor:"danger",onClick:Q})]})]})]})}},6233:function(e,A,l){l.d(A,{d:function(){return c}});var n=l(4165),t=l(5861),a=l(9439),r=l(7313),s=l(78),i=l(6417),o=(0,s.cn)({key:"modalState",default:{isOpen:!1,title:"",content:"",closeCallBack:function(){},isConfirm:!1,buttonColor:"primary"}}),c=function(){var e=(0,s.FV)(o),A=(0,a.Z)(e,2),l=A[0],c=A[1],f=(0,r.useCallback)((function(e,A,l,n,t){c({isOpen:!0,title:e,content:"string"===typeof A?(0,i.jsx)("p",{children:A}):A,closeCallBack:l,isConfirm:null!==n&&void 0!==n&&n,buttonColor:null!==t&&void 0!==t?t:"primary"})}),[c]),u=(0,r.useCallback)((function(){c({isOpen:!1,title:"",content:"",closeCallBack:function(){},isConfirm:!1,buttonColor:"primary"})}),[c]),d=(0,r.useCallback)((0,t.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c({isOpen:!1,title:"",content:"",closeCallBack:function(){},isConfirm:!1,buttonColor:"primary"}),!l.closeCallBack){e.next=4;break}return e.next=4,l.closeCallBack();case 4:case"end":return e.stop()}}),e)}))),[l,c]);return{modalDataState:l,openModal:f,closeModal:u,closeModalWithCallback:d}}}}]);