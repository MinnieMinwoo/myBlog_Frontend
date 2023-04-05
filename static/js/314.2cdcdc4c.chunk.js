"use strict";(self.webpackChunkmyblog_frontend=self.webpackChunkmyblog_frontend||[]).push([[314],{5331:function(e,n,t){t.d(n,{Z:function(){return l}});t(7313);var a=t(8467),i=t(2135),r=t.p+"static/media/logo.006bdc187418d22db610.png",o=t(6233),s=t(6417),l=function(e){var n=e.title,t=e.userName,l=e.outlet,c=e.isWarningAlert,u=void 0!==c&&c,d=(0,a.s0)(),m=(0,o.d)().openModal;return(0,s.jsx)("header",{className:"Header",children:(0,s.jsx)("nav",{className:"navbar bg-light",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("div",{className:"navbar-brand",children:[(0,s.jsx)("a",{href:"/",onClick:u?function(e){e.preventDefault();m("Warning","Post data will not be saved when you leave the window.",(function(){d("/")}),!0)}:function(e){e.preventDefault(),d("/")},children:(0,s.jsx)("img",{className:"me-2 pe-auto w-40px h-40px pe-on",src:r,alt:"blog logo"})}),null!==n&&void 0!==n?n:"",t&&(0,s.jsxs)("ul",{className:"navbar-nav hstack gap-3 ms-1",children:[(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(i.rU,{className:"nav-link",to:"".concat(t?"/home/".concat(t):"/"),children:"Home"})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(i.rU,{className:"nav-link",to:"".concat(t?"/home/".concat(t,"/category"):"/"),children:"Category"})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(i.rU,{className:"nav-link disabled",to:"/",children:"About"})})]})]}),null!==l&&void 0!==l?l:null]})})})}},3508:function(e,n,t){t.r(n),t.d(n,{default:function(){return L}});var a=t(4165),i=t(5861),r=t(1413),o=t(9439),s=t(7313),l=t(8467),c=t(3403),u=t(2495),d=t(973),m=t(6233),f=t(334),h=t(9235),v=t(3433),g=t(4766),p=t(3858),x=t(1921),b=t(7657),j=t(5331),N=t(6417),k=function(e){var n=e.isEdit,t=e.postContent,u=e.setPostContent,f=e.onPreview,h=(0,c.sJ)(d.F),k=(0,s.useState)(!1),Z=(0,o.Z)(k,2),w=Z[0],y=Z[1],C=(0,s.useRef)(null),L=(0,s.useRef)(null),D=(0,m.d)().openModal,P=(0,x.p)().openToast,S=(0,l.s0)(),E=function(e){switch(e.preventDefault(),e.stopPropagation(),e.type){case"dragenter":y(!0);break;case"dragleave":y(!1);break;case"dragover":e.dataTransfer.files&&y(!0);break;case"drop":var n=e.dataTransfer.files[0];if(null===n||void 0===n||!n.type.includes("image/"))return void y(!1);T(n)}},I={name:"image",keyCommand:"image",buttonProps:{"aria-label":"Insert image"},icon:(0,N.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 520 520",children:(0,N.jsx)("path",{fill:"currentColor",d:"M5,350h340V0H5V350z M25,330v-62.212h300V330H25z M179.509,247.494H60.491L120,171.253L179.509,247.494z M176.443,211.061l33.683-32.323l74.654,69.05h-79.67L176.443,211.061z M325,96.574c-6.384,2.269-13.085,3.426-20,3.426 c-33.084,0-60-26.916-60-60c0-6.911,1.156-13.612,3.422-20H325V96.574z M25,20h202.516C225.845,26.479,225,33.166,225,40 c0,44.112,35.888,80,80,80c6.837,0,13.523-0.846,20-2.518v130.306h-10.767l-104.359-96.526l-45.801,43.951L120,138.748 l-85.109,109.04H25V20z"})}),execute:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(n=L.current)||void 0===n||n.click();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},T=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var i,o,s,l,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=null===(i=C.current)||void 0===i?void 0:i.querySelector("textarea")){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,(0,b.T)(n,"$image/".concat(h.uid,"/").concat((0,g.k$)()));case 6:s=e.sent,l=t.postData,c=o.selectionStart,u((function(e){return(0,r.Z)((0,r.Z)({},e),{},{postData:"".concat(l.slice(0,c),"![](").concat(s,")").concat(l.slice(c)),imageList:[].concat((0,v.Z)(e.imageList),[s])})})),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),console.log(e.t0),P("Error","Image upload failed.","danger");case 16:return e.prev=16,L.current&&(L.current.value=""),y(!1),e.finish(16);case 20:case"end":return e.stop()}}),e,null,[[3,12,16,20]])})));return function(n){return e.apply(this,arguments)}}();return(0,N.jsxs)("div",{className:"OnWrite on-write-layout ".concat(w?"post-drag":""),children:[(0,N.jsx)(j.Z,{title:n?"Edit post":"Write your story",isWarningAlert:!0}),(0,N.jsx)("div",{className:"post-init-animation",children:(0,N.jsx)("div",{className:"OnWrite mt-3 col col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 col-xxl-6 offset-xxl-3",children:(0,N.jsxs)("section",{onDragEnter:E,onDragLeave:E,onDragOver:E,onDrop:E,children:[(0,N.jsx)("input",{hidden:!0,type:"file",accept:"image/*",ref:L,defaultValue:"",onChange:function(){var e;(null===(e=L.current)||void 0===e?void 0:e.files)&&T(L.current.files[0])}}),(0,N.jsx)("input",{className:"w-100 fs-1 mb-3 text-777 post-input-bar",placeholder:"Write post title",value:t.title,onChange:function(e){var n=e.target.value;u((function(e){return(0,r.Z)((0,r.Z)({},e),{},{title:n})}))},maxLength:50,required:!0}),(0,N.jsx)("div",{ref:C,children:(0,N.jsx)(p.ZP,{className:"post-editor","data-color-mode":"light",value:t.postData,commands:[p.CN.TN,p.CN.Se,p.CN.pU,p.CN.Jq,p.CN.mW,p.CN.p4,I,p.CN.TU,p.CN.Gr],onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";u((function(n){return(0,r.Z)((0,r.Z)({},n),{},{postData:e})}))}})}),(0,N.jsx)("button",{className:"btn btn-secondary mt-3",onClick:function(){D("Warning","Post data will not be saved when you leave the window.",(function(){S(-1)}),!0)},children:"Quit"}),(0,N.jsx)("button",{className:"btn btn-primary float-end mt-3",onClick:f,children:n?"Edit":"Write up"})]})})})]})},Z=t(3931),w=t(4646),y=function(e){var n=e.isEdit,t=e.isPreview,l=e.postContent,u=e.setPostContent,m=e.onPreview,f=e.onSubmit,h=(0,s.useRef)(null),p=(0,c.sJ)(d.F),j=(0,s.useState)([]),k=(0,o.Z)(j,2),y=k[0],C=k[1],L=(0,s.useState)(""),D=(0,o.Z)(L,2),P=D[0],S=D[1],E=(0,s.useState)(!1),I=(0,o.Z)(E,2),T=I[0],W=I[1],U=(0,x.p)().openToast;(0,s.useEffect)((function(){p.uid&&(0,w.AT)(p.uid).then((function(e){if(C(e),l.category.length){var n=l.category,t=e.map((function(e){return e.mainField})).indexOf(n[0]),a=e[t].subField.indexOf(n[1]);S(String([t,a]))}}))}),[p,l.category]),(0,s.useEffect)((function(){t&&W(!0)}),[t]);var F=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.target.files){e.next=3;break}throw console.log("no image files");case 3:return e.prev=3,e.next=6,(0,b.T)(t[0],"$thumbnail/".concat((0,g.k$)()));case 6:i=e.sent,u((function(e){return(0,r.Z)((0,r.Z)({},e),{},{thumbnailImgLink:i})})),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0),U("Error","Image upload failed.","danger");case 14:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(n){return e.apply(this,arguments)}}(),M=(0,s.useState)(""),O=(0,o.Z)(M,2),H=O[0],V=O[1],z=function(e){if(e.target instanceof HTMLElement){var n=e.target.innerText,t=(0,v.Z)(l.tag);u((function(e){return(0,r.Z)((0,r.Z)({},e),{},{tag:[].concat((0,v.Z)(t.slice(0,t.indexOf(n))),(0,v.Z)(t.slice(t.indexOf(n)+1)))})}))}};return(0,N.jsxs)("div",{className:"Preview preview-layout bg-fff z-index-1 ".concat(t?"scrollOpen":T?"scrollClose":"hidden").concat(t?"":" preview-overflow"),children:[(0,N.jsx)("div",{className:"col-10 offset-1 col-md-5 offset-md-1 col-xxl-4 offset-xxl-2 px-4 align-self-center be-light",children:(0,N.jsxs)("div",{className:"vstack gap-3",children:[(0,N.jsx)("h3",{children:"Preview"}),(0,N.jsx)("div",{className:"ratio ratio-16x9",children:(0,N.jsx)("img",{className:"img-thumbnail object-fit-cover bg-eee",src:l.thumbnailImgLink?l.thumbnailImgLink:Z,alt:"Thumbnail"})}),(0,N.jsx)("input",{hidden:!0,type:"file",accept:"image/*",ref:h,src:l.thumbnailImgLink,onChange:F}),(0,N.jsxs)("div",{className:"hstack gap-2",children:[(0,N.jsx)("button",{className:"btn btn-primary",onClick:function(){var e;null===(e=h.current)||void 0===e||e.click()},children:"Upload Image"}),(0,N.jsx)("button",{className:"btn btn-outline-primary",onClick:function(){var e;l.thumbnailImgLink&&(0,b.j)(l.thumbnailImgLink),u((function(e){return(0,r.Z)((0,r.Z)({},e),{},{thumbnailImgLink:""})})),null!==(e=h.current)&&void 0!==e&&e.value&&(h.current.value="")},hidden:!l.thumbnailImgLink,children:"Delete Image"})]}),(0,N.jsx)("h3",{children:l.title}),(0,N.jsx)("div",{className:"input-group input-group-lg h-200px",children:(0,N.jsx)("textarea",{className:"form-control",value:l.thumbnailData,maxLength:150,onChange:function(e){var n=e.target.value;u((function(e){return(0,r.Z)((0,r.Z)({},e),{},{thumbnailData:n})}))}})}),(0,N.jsxs)("p",{children:[l.thumbnailData.length,"/150"]})]})}),(0,N.jsxs)("div",{className:"col-10 col-md-5 col-xxl-4 px-4 align-self-center",children:[(0,N.jsxs)("div",{className:"vstack gap-1 mb-3",children:[(0,N.jsx)("h4",{children:"Tag"}),(0,N.jsxs)("div",{className:"col",children:[(0,N.jsx)("div",{className:"mb-3",children:l.tag.map((function(e){return(0,N.jsx)("button",{className:"btn btn-outline-primary me-2",onClick:z,children:e},e)}))}),(0,N.jsx)("input",{className:"form-control b-0-i",placeholder:"Separate tags with spots.",value:H,onChange:function(e){var n=e.target.value;if(n.includes(",")){var t=n.split(","),a=[].concat((0,v.Z)(l.tag),(0,v.Z)(t.slice(0,t.length-1))),i=a.filter((function(e,n){return!a.slice(0,n).includes(e)}));V(t[t.length-1]),u((function(e){return(0,r.Z)((0,r.Z)({},e),{},{tag:i})}))}else V(n)},maxLength:50,hidden:l.tag.length>=5})]})]}),(0,N.jsxs)("div",{className:"vstack gap-1 mb-3",children:[(0,N.jsx)("h4",{children:"Category Setting"}),(0,N.jsxs)("select",{className:"form-select",value:P,onChange:function(e){var n=e.target.value;if(S(n),""!==n){var t=n.split(",").map(Number);u((function(e){var n;return(0,r.Z)((0,r.Z)({},e),{},{category:null!==(n=[y[t[0]].mainField,y[t[0]].subField[t[1]]])&&void 0!==n?n:[]})}))}else u((function(e){return(0,r.Z)((0,r.Z)({},e),{},{category:[]})}))},children:[(0,N.jsx)("option",{value:"",children:"None"}),y&&y.map((function(e,n){return e.subField.map((function(t,a){return(0,N.jsx)("option",{value:String([[n,a]]),children:"".concat(e.mainField," - ").concat(t)},a)}))}))]})]}),(0,N.jsxs)("div",{className:"hstack gap-3 float-end",children:[(0,N.jsx)("button",{className:"btn btn-outline-primary",onClick:m,children:"Cancel"}),(0,N.jsx)("button",{className:"btn btn-primary",onClick:f,children:n?"Edit":"Write Up"})]})]})]})},C=t(2885),L=function(){var e=(0,c.FV)(u.B),n=(0,o.Z)(e,2),t=n[0],v=n[1],g=(0,c.sJ)(d.F),p=(0,s.useState)({title:"",category:[],postData:"**Write your post**",thumbnailImgLink:"",thumbnailData:"",imageList:[],tag:[]}),x=(0,o.Z)(p,2),b=x[0],j=x[1],Z=(0,s.useState)(!1),w=(0,o.Z)(Z,2),L=w[0],D=w[1],P=(0,m.d)().openModal,S=(0,l.s0)(),E=(0,l.UO)();!function(){var e=function(e){e.preventDefault(),e.returnValue=""};(0,s.useEffect)((function(){return window.addEventListener("beforeunload",e),function(){window.removeEventListener("beforeunload",e)}}),[])}(),(0,s.useEffect)((function(){E["*"]&&(v(!0),(0,h.AU)(E["*"]).then((function(e){var n,t=(0,f.v0)();if(e.createdBy!==(null===(n=t.currentUser)||void 0===n?void 0:n.uid)){throw{name:"Permission Denied",code:"No_Permission"}}j((function(n){var t;return(0,r.Z)((0,r.Z)({},n),{},{title:e.title,category:null!==(t=e.category)&&void 0!==t?t:[],postData:e.detail,thumbnailImgLink:e.thumbnailImageURL,thumbnailData:e.thumbnailData,imageList:e.imageList,tag:e.tag})}))})).catch((function(e){console.log(e);var n;switch(null===e||void 0===e?void 0:e.code){case"No_PostData":n="You entered wrong url link";break;case"No_Permission":n="You don't have permission on this post.";break;default:n="Something wrong, try again later."}P("Post Loading failed",n,(function(){S("/")}))})).finally((function(){return v(!1)})))}),[]);var I=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!E["*"]){e.next=7;break}return e.next=4,(0,h.CP)(E["*"],b);case 4:n=E["*"],e.next=10;break;case 7:return e.next=9,(0,h.Cd)(b,g);case 9:n=e.sent;case 10:S("/home/".concat(g.nickname,"/").concat(n)),e.next=19;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0),"Post Submit failed","Something wrong, try again later.",P("Post Submit failed","Something wrong, try again later.");case 19:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=/[`\n|\r|~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gim;!b.thumbnailData&&j((function(n){return(0,r.Z)((0,r.Z)({},n),{},{thumbnailData:b.postData.replace(e,"").substring(0,150)})})),D((function(e){return!e}))};return(0,N.jsxs)("div",{className:"Write",children:[t?(0,N.jsx)(C.default,{}):null,(0,N.jsx)(y,{isEdit:Boolean(E["*"]),isPreview:L,postContent:b,setPostContent:j,onPreview:T,onSubmit:I}),(0,N.jsx)(k,{isEdit:Boolean(E["*"]),postContent:b,setPostContent:j,onPreview:T})]})}}}]);