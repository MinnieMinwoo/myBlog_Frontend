"use strict";(self.webpackChunkmyblog_frontend=self.webpackChunkmyblog_frontend||[]).push([[314],{5331:function(e,n,t){t.d(n,{Z:function(){return l}});t(7313);var a=t(8467),i=t(2135),r=t.p+"static/media/logo.006bdc187418d22db610.png",o=t(6233),s=t(6417),l=function(e){var n=e.title,t=e.userName,l=e.outlet,c=e.isWarningAlert,u=void 0!==c&&c,d=(0,a.s0)(),m=(0,o.d)().openModal;return(0,s.jsx)("header",{className:"Header",children:(0,s.jsx)("nav",{className:"navbar bg-light",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("div",{className:"navbar-brand",children:[(0,s.jsx)("a",{href:"/",onClick:u?function(e){e.preventDefault();m("Warning","Post data will not be saved when you leave the window.",(function(){d("/")}),!0)}:function(e){e.preventDefault(),d("/")},children:(0,s.jsx)("img",{className:"me-2 pe-auto w-40px h-40px pe-on",src:r,alt:"blog logo"})}),null!==n&&void 0!==n?n:"",t&&(0,s.jsxs)("ul",{className:"navbar-nav hstack gap-3 ms-1",children:[(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(i.rU,{className:"nav-link",to:"".concat(t?"/home/".concat(t):"/"),children:"Home"})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(i.rU,{className:"nav-link",to:"".concat(t?"/home/".concat(t,"/category"):"/"),children:"Category"})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(i.rU,{className:"nav-link disabled",to:"/",children:"About"})})]})]}),null!==l&&void 0!==l?l:null]})})})}},3508:function(e,n,t){t.r(n),t.d(n,{default:function(){return D}});var a=t(4165),i=t(5861),r=t(1413),o=t(9439),s=t(7313),l=t(8467),c=t(3403),u=t(2495),d=t(973),m=t(6233),f=t(334),h=t(9235),v=t(3433),p=t(4766),g=t(3858),x=t(1921),b=t(7657),j=t(5331),k=t(6417),N=function(e){var n=e.isEdit,t=e.postContent,u=e.setPostContent,f=e.onPreview,h=(0,c.sJ)(d.F),N=(0,s.useState)(!1),w=(0,o.Z)(N,2),Z=w[0],C=w[1],y=(0,s.useRef)(null),D=(0,s.useRef)(null),L=(0,m.d)().openModal,P=(0,x.p)().openToast,S=(0,l.s0)(),E=function(e){switch(e.preventDefault(),e.stopPropagation(),e.type){case"dragenter":C(!0);break;case"dragleave":C(!1);break;case"dragover":e.dataTransfer.files&&C(!0);break;case"drop":var n=e.dataTransfer.files[0];if(null===n||void 0===n||!n.type.includes("image/"))return void C(!1);W(n)}},I={name:"image",keyCommand:"image",buttonProps:{"aria-label":"Insert image"},icon:(0,k.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 520 520",children:(0,k.jsx)("path",{fill:"currentColor",d:"M5,350h340V0H5V350z M25,330v-62.212h300V330H25z M179.509,247.494H60.491L120,171.253L179.509,247.494z M176.443,211.061l33.683-32.323l74.654,69.05h-79.67L176.443,211.061z M325,96.574c-6.384,2.269-13.085,3.426-20,3.426 c-33.084,0-60-26.916-60-60c0-6.911,1.156-13.612,3.422-20H325V96.574z M25,20h202.516C225.845,26.479,225,33.166,225,40 c0,44.112,35.888,80,80,80c6.837,0,13.523-0.846,20-2.518v130.306h-10.767l-104.359-96.526l-45.801,43.951L120,138.748 l-85.109,109.04H25V20z"})}),execute:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(n=D.current)||void 0===n||n.click();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},W=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var i,o,s,l,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=null===(i=y.current)||void 0===i?void 0:i.querySelector("textarea")){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,(0,b.T)(n,"$image/".concat(h.uid,"/").concat((0,p.k$)()));case 6:s=e.sent,l=t.postData,c=o.selectionStart,u((function(e){return(0,r.Z)((0,r.Z)({},e),{},{postData:"".concat(l.slice(0,c),"![](").concat(s,")").concat(l.slice(c)),imageList:[].concat((0,v.Z)(e.imageList),[s])})})),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),console.log(e.t0),P("Error","Image upload failed.","danger");case 16:return e.prev=16,D.current&&(D.current.value=""),C(!1),e.finish(16);case 20:case"end":return e.stop()}}),e,null,[[3,12,16,20]])})));return function(n){return e.apply(this,arguments)}}();return(0,k.jsxs)("div",{className:Z?"OnWrite post-drag":"OnWrite",children:[(0,k.jsx)(j.Z,{title:n?"Edit post":"Write your story",isWarningAlert:!0}),(0,k.jsx)("div",{className:"post-init-animation",children:(0,k.jsx)("div",{className:"OnWrite mt-3 col col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 col-xxl-6 offset-xxl-3",children:(0,k.jsxs)("section",{onDragEnter:E,onDragLeave:E,onDragOver:E,onDrop:E,children:[(0,k.jsx)("input",{hidden:!0,type:"file",accept:"image/*",ref:D,defaultValue:"",onChange:function(){var e;(null===(e=D.current)||void 0===e?void 0:e.files)&&W(D.current.files[0])}}),(0,k.jsx)("input",{className:"w-100 fs-1 mb-3 text-777 post-input-bar",placeholder:"Write post title",value:t.title,onChange:function(e){var n=e.target.value;u((function(e){return(0,r.Z)((0,r.Z)({},e),{},{title:n})}))},maxLength:50,required:!0}),(0,k.jsx)("div",{ref:y,children:(0,k.jsx)(g.ZP,{className:"post-editor","data-color-mode":"light",value:t.postData,commands:[g.CN.TN,g.CN.Se,g.CN.pU,g.CN.Jq,g.CN.mW,g.CN.p4,I,g.CN.TU,g.CN.Gr],onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";u((function(n){return(0,r.Z)((0,r.Z)({},n),{},{postData:e})}))}})}),(0,k.jsx)("button",{className:"btn btn-secondary mt-3",onClick:function(){L("Warning","Post data will not be saved when you leave the window.",(function(){S(-1)}),!0)},children:"Quit"}),(0,k.jsx)("button",{className:"btn btn-primary float-end mt-3",onClick:f,children:n?"Edit":"Write up"})]})})})]})},w=t(3931),Z=t(4646),C=function(e){var n=e.isEdit,t=e.isPreview,l=e.postContent,u=e.setPostContent,m=e.onPreview,f=e.onSubmit,h=(0,s.useRef)(null),v=(0,c.sJ)(d.F),g=(0,s.useState)([]),j=(0,o.Z)(g,2),N=j[0],C=j[1],y=(0,s.useState)(""),D=(0,o.Z)(y,2),L=D[0],P=D[1],S=(0,s.useState)(!1),E=(0,o.Z)(S,2),I=E[0],W=E[1],U=(0,x.p)().openToast;(0,s.useEffect)((function(){v.uid&&(0,Z.AT)(v.uid).then((function(e){if(C(e),l.category.length){var n=l.category,t=e.map((function(e){return e.mainField})).indexOf(n[0]),a=e[t].subField.indexOf(n[1]);P(String([t,a]))}}))}),[v,l.category]),(0,s.useEffect)((function(){t&&W(!0)}),[t]);var F=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.target.files){e.next=3;break}throw console.log("no image files");case 3:return e.prev=3,e.next=6,(0,b.T)(t[0],"$thumbnail/".concat((0,p.k$)()));case 6:i=e.sent,u((function(e){return(0,r.Z)((0,r.Z)({},e),{},{thumbnailImgLink:i})})),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0),U("Error","Image upload failed.","danger");case 14:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(n){return e.apply(this,arguments)}}();return(0,k.jsxs)("div",{className:"Preview d-flex position-fixed w-100 h-100 bg-fff z-index-1 ".concat(t?"scrollOpen":I?"scrollClose":"hidden"),children:[(0,k.jsx)("div",{}),(0,k.jsx)("div",{className:"col-10 offset-1 col-md-5 offset-md-1 col-xxl-4 offset-xxl-2 px-4 align-self-center be-light",children:(0,k.jsxs)("div",{className:"vstack gap-3",children:[(0,k.jsx)("h3",{children:"Preview"}),(0,k.jsx)("img",{className:"img-fluid img-thumbnail ratio-16x9 object-fit-cover w-100 bg-eee",src:l.thumbnailImgLink?l.thumbnailImgLink:w,alt:"Thumbnail"}),(0,k.jsx)("input",{hidden:!0,type:"file",accept:"image/*",ref:h,src:l.thumbnailImgLink,onChange:F}),(0,k.jsxs)("div",{className:"hstack gap-2",children:[(0,k.jsx)("button",{className:"btn btn-primary",onClick:function(){var e;null===(e=h.current)||void 0===e||e.click()},children:"Upload Image"}),(0,k.jsx)("button",{className:"btn btn-outline-primary",onClick:function(){var e;l.thumbnailImgLink&&(0,b.j)(l.thumbnailImgLink),u((function(e){return(0,r.Z)((0,r.Z)({},e),{},{thumbnailImgLink:""})})),null!==(e=h.current)&&void 0!==e&&e.value&&(h.current.value="")},hidden:!l.thumbnailImgLink,children:"Delete Image"})]}),(0,k.jsx)("h3",{children:l.title}),(0,k.jsx)("div",{className:"input-group input-group-lg h-200px",children:(0,k.jsx)("textarea",{className:"form-control",value:l.thumbnailData,maxLength:150,onChange:function(e){var n=e.target.value;u((function(e){return(0,r.Z)((0,r.Z)({},e),{},{thumbnailData:n})}))}})}),(0,k.jsxs)("p",{children:[l.thumbnailData.length,"/150"]})]})}),(0,k.jsxs)("div",{className:"col-10 col-md-5 col-xxl-4 px-4 align-self-center",children:[(0,k.jsxs)("div",{className:"vstack gap-1",children:[(0,k.jsx)("h4",{children:"Category Setting"}),(0,k.jsxs)("select",{className:"form-select",value:L,onChange:function(e){var n=e.target.value;if(P(n),""!==n){var t=n.split(",").map(Number);u((function(e){var n;return(0,r.Z)((0,r.Z)({},e),{},{category:null!==(n=[N[t[0]].mainField,N[t[0]].subField[t[1]]])&&void 0!==n?n:[]})}))}else u((function(e){return(0,r.Z)((0,r.Z)({},e),{},{category:[]})}))},children:[(0,k.jsx)("option",{value:"",children:"None"}),N&&N.map((function(e,n){return e.subField.map((function(t,a){return(0,k.jsx)("option",{value:String([[n,a]]),children:"".concat(e.mainField," - ").concat(t)},a)}))}))]})]}),(0,k.jsxs)("div",{className:"hstack gap-3 float-end",children:[(0,k.jsx)("button",{className:"btn btn-outline-primary",onClick:m,children:"Cancel"}),(0,k.jsx)("button",{className:"btn btn-primary",onClick:f,children:n?"Edit":"Write Up"})]})]})]})},y=t(2885),D=function(){var e=(0,c.FV)(u.B),n=(0,o.Z)(e,2),t=n[0],v=n[1],p=(0,c.sJ)(d.F),g=(0,s.useState)({title:"",category:[],postData:"**Write your post**",thumbnailImgLink:"",thumbnailData:"",imageList:[]}),x=(0,o.Z)(g,2),b=x[0],j=x[1],w=(0,s.useState)(!1),Z=(0,o.Z)(w,2),D=Z[0],L=Z[1],P=(0,m.d)().openModal,S=(0,l.s0)(),E=(0,l.UO)();!function(){var e=function(e){e.preventDefault(),e.returnValue=""};(0,s.useEffect)((function(){return window.addEventListener("beforeunload",e),function(){window.removeEventListener("beforeunload",e)}}),[])}(),(0,s.useEffect)((function(){E["*"]&&(v(!0),(0,h.AU)(E["*"]).then((function(e){var n,t=(0,f.v0)();if(e.createdBy!==(null===(n=t.currentUser)||void 0===n?void 0:n.uid)){throw{name:"Permission Denied",code:"No_Permission"}}j((function(n){var t;return(0,r.Z)((0,r.Z)({},n),{},{title:e.title,category:null!==(t=e.category)&&void 0!==t?t:[],postData:e.detail,thumbnailImgLink:e.thumbnailImageURL,thumbnailData:e.thumbnailData,imageList:e.imageList})}))})).catch((function(e){console.log(e);var n;switch(null===e||void 0===e?void 0:e.code){case"No_PostData":n="You entered wrong url link";break;case"No_Permission":n="You don't have permission on this post.";break;default:n="Something wrong, try again later."}P("Post Loading failed",n,(function(){S("/")}))})).finally((function(){return v(!1)})))}),[]);var I=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!E["*"]){e.next=7;break}return e.next=4,(0,h.CP)(E["*"],b);case 4:n=E["*"],e.next=10;break;case 7:return e.next=9,(0,h.Cd)(b,p);case 9:n=e.sent;case 10:S("/home/".concat(p.nickname,"/").concat(n)),e.next=19;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0),"Post Submit failed","Something wrong, try again later.",P("Post Submit failed","Something wrong, try again later.");case 19:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=/[`\n|\r|~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gim;!b.thumbnailData&&j((function(n){return(0,r.Z)((0,r.Z)({},n),{},{thumbnailData:b.postData.replace(e,"").substring(0,150)})})),L((function(e){return!e}))};return(0,k.jsxs)("div",{className:"Write",children:[t?(0,k.jsx)(y.default,{}):null,(0,k.jsx)(C,{isEdit:Boolean(E["*"]),isPreview:D,postContent:b,setPostContent:j,onPreview:W,onSubmit:I}),(0,k.jsx)(N,{isEdit:Boolean(E["*"]),postContent:b,setPostContent:j,onPreview:W})]})}}}]);