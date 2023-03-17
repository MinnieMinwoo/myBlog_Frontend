"use strict";(self.webpackChunkmyblog_frontend=self.webpackChunkmyblog_frontend||[]).push([[107],{949:function(n,e,t){t.r(e),t.d(e,{default:function(){return an}});var i,a,r,o,s,l,c,u,d,h,f=t(4165),m=t(5861),p=t(1413),g=t(9439),v=t(7313),x=t(8467),b=t(78),Z=t(2495),j=t(973),k=t(6233),y=t(334),w=t(9235),C=t(2552),P=t(3433),D=t(168),L=t(4766),N=t(3858),S=t(244),E=t(1921),I=t(7657),W=t(4427),z=t(6417),F=S.ZP.div(i||(i=(0,D.Z)(["\n  &.Drag {\n    opacity: 0.3;\n  }\n"]))),T=S.ZP.div(a||(a=(0,D.Z)(["\n  animation-name: init;\n  animation-duration: 1s;\n  animation-duration: linear;\n  @keyframes init {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n"]))),M=S.ZP.input(r||(r=(0,D.Z)(["\n  width: 100%;\n  font-size: 36px;\n  margin-bottom: 20px;\n  color: #777;\n  border: 0;\n  border-bottom: 1px solid #eee;\n  &:focus {\n    outline: none;\n    border-bottom: 2px solid #777;\n  }\n"]))),U=(0,S.ZP)(N.ZP)(o||(o=(0,D.Z)(["\n  min-height: 200px;\n  height: calc(100vh - 260px) !important;\n"]))),V=function(n){var e=n.isEdit,t=n.postContent,i=n.setPostContent,a=n.onPreview,r=(0,b.sJ)(j.F),o=(0,v.useState)(!1),s=(0,g.Z)(o,2),l=s[0],c=s[1],u=(0,v.useRef)(null),d=(0,v.useRef)(null),h=(0,k.d)().openModal,Z=(0,E.p)().openToast,y=(0,x.s0)(),w=function(n){switch(n.preventDefault(),n.stopPropagation(),n.type){case"dragenter":c(!0);break;case"dragleave":c(!1);break;case"dragover":n.dataTransfer.files&&c(!0);break;case"drop":var e=n.dataTransfer.files[0];if(null===e||void 0===e||!e.type.includes("image/"))return void c(!1);D(e)}},C={name:"image",keyCommand:"image",buttonProps:{"aria-label":"Insert image"},icon:(0,z.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 520 520",children:(0,z.jsx)("path",{fill:"currentColor",d:"M5,350h340V0H5V350z M25,330v-62.212h300V330H25z M179.509,247.494H60.491L120,171.253L179.509,247.494z M176.443,211.061l33.683-32.323l74.654,69.05h-79.67L176.443,211.061z M325,96.574c-6.384,2.269-13.085,3.426-20,3.426 c-33.084,0-60-26.916-60-60c0-6.911,1.156-13.612,3.422-20H325V96.574z M25,20h202.516C225.845,26.479,225,33.166,225,40 c0,44.112,35.888,80,80,80c6.837,0,13.523-0.846,20-2.518v130.306h-10.767l-104.359-96.526l-45.801,43.951L120,138.748 l-85.109,109.04H25V20z"})}),execute:function(){var n=(0,m.Z)((0,f.Z)().mark((function n(){var e;return(0,f.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:null===(e=d.current)||void 0===e||e.click();case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},D=function(){var n=(0,m.Z)((0,f.Z)().mark((function n(e){var a,o,s,l,h;return(0,f.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=null===(a=u.current)||void 0===a?void 0:a.querySelector("textarea")){n.next=3;break}return n.abrupt("return");case 3:return n.prev=3,n.next=6,(0,I.T)(e,"$image/".concat(r.uid,"/").concat((0,L.k$)()));case 6:s=n.sent,l=t.postData,h=o.selectionStart,i((function(n){return(0,p.Z)((0,p.Z)({},n),{},{postData:"".concat(l.slice(0,h),"![](").concat(s,")").concat(l.slice(h)),imageList:[].concat((0,P.Z)(n.imageList),[s])})})),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(3),console.log(n.t0),Z("Error","Image upload failed.","danger");case 16:return n.prev=16,d.current&&(d.current.value=""),c(!1),n.finish(16);case 20:case"end":return n.stop()}}),n,null,[[3,12,16,20]])})));return function(e){return n.apply(this,arguments)}}();return(0,z.jsxs)(F,{className:l?"OnWrite Drag":"OnWrite",children:[(0,z.jsx)("header",{children:(0,z.jsx)("nav",{className:"navbar bg-light",children:(0,z.jsx)("div",{className:"container",children:(0,z.jsxs)("div",{className:"navbar-brand",children:[(0,z.jsx)("a",{href:"/",onClick:function(n){n.preventDefault();h("Warning","Post data will not be saved when you leave the window.",(function(){y("/")}),!0)},children:(0,z.jsx)("img",{className:"me-2 pe-auto",style:{width:"40px",height:"40px",cursor:"pointer"},src:W,alt:"blog logo"})}),e?"Edit post":"Write your Story"]})})})}),(0,z.jsx)(T,{children:(0,z.jsx)("div",{className:"OnWrite mt-3 col col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 col-xxl-6 offset-xxl-3",children:(0,z.jsxs)("section",{onDragEnter:w,onDragLeave:w,onDragOver:w,onDrop:w,children:[(0,z.jsx)("input",{hidden:!0,type:"file",accept:"image/*",ref:d,defaultValue:"",onChange:function(){var n;(null===(n=d.current)||void 0===n?void 0:n.files)&&D(d.current.files[0])}}),(0,z.jsx)(M,{placeholder:"Write post title",value:t.title,onChange:function(n){var e=n.target.value;i((function(n){return(0,p.Z)((0,p.Z)({},n),{},{title:e})}))},maxLength:50,required:!0}),(0,z.jsx)("div",{ref:u,children:(0,z.jsx)(U,{"data-color-mode":"light",value:t.postData,commands:[N.CN.TN,N.CN.Se,N.CN.pU,N.CN.Jq,N.CN.mW,N.CN.p4,C,N.CN.TU,N.CN.Gr],onChange:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";i((function(e){return(0,p.Z)((0,p.Z)({},e),{},{postData:n})}))}})}),(0,z.jsx)("button",{className:"btn btn-secondary mt-3",onClick:function(){h("Warning","Post data will not be saved when you leave the window.",(function(){y(-1)}),!0)},children:"Quit"}),(0,z.jsx)("button",{className:"btn btn-primary float-end mt-3",onClick:a,children:e?"Edit":"Write up"})]})})})]})},O=t(1616),_=t(8648),B=t(7881),H=t(8043),$=t(3298),J=t(1366),R=t(3931),q=t(4646),A=S.ZP.div(s||(s=(0,D.Z)(["\n  display: flex;\n  position: absolute;\n  visibility: hidden;\n  background-color: #fff;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n\n  &.open {\n    visibility: visible;\n    animation-name: open;\n    animation-duration: 0.5s;\n    animation-duration: linear;\n    @keyframes open {\n      0% {\n        height: 0%;\n      }\n      100% {\n        height: 100%;\n      }\n    }\n  }\n\n  &.close {\n    visibility: hidden;\n    animation-name: close;\n    animation-duration: 0.5s;\n    animation-duration: linear;\n    @keyframes close {\n      0% {\n        height: 100%;\n        visibility: visible;\n      }\n      99.9% {\n        height: 0.1%;\n        visibility: visible;\n      }\n      100% {\n        height: 0%;\n        visibility: hidden;\n      }\n    }\n  }\n"]))),Y=(0,S.ZP)(O.Z)(l||(l=(0,D.Z)(["\n  padding: 0 30px;\n  border-right: 1px solid #eee;\n  align-self: center;\n"]))),G=(0,S.ZP)(O.Z)(c||(c=(0,D.Z)(["\n  padding: 0 30px;\n  align-self: center;\n"]))),Q=(0,S.ZP)(_.Z)(u||(u=(0,D.Z)(["\n  float: right;\n"]))),K=(0,S.ZP)(B.Z)(d||(d=(0,D.Z)(["\n  background-color: #eee;\n  width: 100%;\n  aspect-ratio: 16 / 9;\n  object-fit: cover;\n  object-position: center center;\n"]))),X=(0,S.ZP)(H.Z)(h||(h=(0,D.Z)(["\n  height: 200px;\n"]))),nn=function(n){var e=n.isEdit,t=n.isPreview,i=n.postContent,a=n.setPostContent,r=n.onPreview,o=n.onSubmit,s=(0,v.useRef)(null),l=(0,b.sJ)(j.F),c=(0,v.useState)([]),u=(0,g.Z)(c,2),d=u[0],h=u[1],x=(0,v.useState)(""),Z=(0,g.Z)(x,2),k=Z[0],y=Z[1],w=(0,v.useState)(!1),C=(0,g.Z)(w,2),P=C[0],D=C[1],N=(0,E.p)().openToast;(0,v.useEffect)((function(){l.uid&&(0,q.AT)(l.uid).then((function(n){if(h(n),i.category.length){var e=i.category,t=n.map((function(n){return n.mainField})).indexOf(e[0]),a=n[t].subField.indexOf(e[1]);y(String([t,a]))}}))}),[l,i.category]),(0,v.useEffect)((function(){t&&D(!0)}),[t]);var S=function(){var n=(0,m.Z)((0,f.Z)().mark((function n(e){var t,i;return(0,f.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.target.files){n.next=3;break}throw console.log("no image files");case 3:return n.prev=3,n.next=6,(0,I.T)(t[0],"$thumbnail/".concat((0,L.k$)()));case 6:i=n.sent,a((function(n){return(0,p.Z)((0,p.Z)({},n),{},{thumbnailImgLink:i})})),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(3),console.log(n.t0),N("Error","Image upload failed.","danger");case 14:case"end":return n.stop()}}),n,null,[[3,10]])})));return function(e){return n.apply(this,arguments)}}();return(0,z.jsxs)(A,{className:"Preview ".concat(t?"open":P?"close":""),children:[(0,z.jsx)(Y,{md:{span:5,offset:1},xxl:{span:4,offset:2},children:(0,z.jsxs)(_.Z,{gap:3,children:[(0,z.jsx)("h3",{children:"Preview"}),(0,z.jsx)(K,{src:i.thumbnailImgLink?i.thumbnailImgLink:R,alt:"Thumbnail",thumbnail:!0}),(0,z.jsx)("input",{hidden:!0,type:"file",accept:"image/*",ref:s,src:i.thumbnailImgLink,onChange:S}),(0,z.jsxs)(_.Z,{gap:2,direction:"horizontal",children:[(0,z.jsx)($.Z,{onClick:function(){var n;null===(n=s.current)||void 0===n||n.click()},children:"Upload Image"}),(0,z.jsx)($.Z,{variant:"outline-primary",onClick:function(){var n;i.thumbnailImgLink&&(0,I.j)(i.thumbnailImgLink),a((function(n){return(0,p.Z)((0,p.Z)({},n),{},{thumbnailImgLink:""})})),null!==(n=s.current)&&void 0!==n&&n.value&&(s.current.value="")},hidden:!i.thumbnailImgLink,children:"Delete Image"})]}),(0,z.jsx)("h3",{children:i.title}),(0,z.jsx)(X,{size:"lg",children:(0,z.jsx)(J.Z.Control,{as:"textarea",value:i.thumbnailData,maxLength:150,onChange:function(n){var e=n.target.value;a((function(n){return(0,p.Z)((0,p.Z)({},n),{},{thumbnailData:e})}))}})}),(0,z.jsxs)("p",{children:[i.thumbnailData.length,"/150"]})]})}),(0,z.jsxs)(G,{xs:0,md:5,xxl:4,children:[(0,z.jsxs)(_.Z,{gap:1,children:[(0,z.jsx)("h4",{children:"Category Setting"}),(0,z.jsxs)(J.Z.Select,{value:k,onChange:function(n){var e=n.target.value;if(y(e),""!==e){var t=e.split(",").map(Number);a((function(n){var e;return(0,p.Z)((0,p.Z)({},n),{},{category:null!==(e=[d[t[0]].mainField,d[t[0]].subField[t[1]]])&&void 0!==e?e:[]})}))}else a((function(n){return(0,p.Z)((0,p.Z)({},n),{},{category:[]})}))},children:[(0,z.jsx)("option",{value:"",children:"None"}),d&&d.map((function(n,e){return n.subField.map((function(t,i){return(0,z.jsx)("option",{value:String([[e,i]]),children:"".concat(n.mainField," - ").concat(t)},i)}))}))]})]}),(0,z.jsxs)(Q,{gap:3,direction:"horizontal",children:[(0,z.jsx)($.Z,{variant:"outline-primary",onClick:r,children:"Cancel"}),(0,z.jsx)($.Z,{onClick:o,children:e?"Edit":"Write Up"})]})]})]})},en=t(2691),tn=t(3167),an=function(){var n=(0,b.FV)(Z.B),e=(0,g.Z)(n,2),t=e[0],i=e[1],a=(0,b.sJ)(j.F),r=(0,v.useState)({title:"",category:[],postData:"**Write your post**",thumbnailImgLink:"",thumbnailData:"",imageList:[]}),o=(0,g.Z)(r,2),s=o[0],l=o[1],c=(0,v.useState)(!1),u=(0,g.Z)(c,2),d=u[0],h=u[1],P=(0,k.d)().openModal,D=(0,x.s0)(),L=(0,x.UO)();!function(){var n=function(n){n.preventDefault(),n.returnValue=""};(0,v.useEffect)((function(){return window.addEventListener("beforeunload",n),function(){window.removeEventListener("beforeunload",n)}}),[])}(),(0,v.useEffect)((function(){L["*"]&&(i(!0),(0,w.AU)(L["*"]).then((function(n){var e,t=(0,y.v0)();if(n.createdBy!==(null===(e=t.currentUser)||void 0===e?void 0:e.uid)){throw{name:"Permission Denied",code:"No_Permission"}}l((function(e){var t;return(0,p.Z)((0,p.Z)({},e),{},{title:n.title,category:null!==(t=n.category)&&void 0!==t?t:[],postData:n.detail,thumbnailImgLink:n.thumbnailImageURL,thumbnailData:n.thumbnailData,imageList:n.imageList})}))})).catch((function(n){console.log(n);var e;switch(null===n||void 0===n?void 0:n.code){case"No_PostData":e="You entered wrong url link";break;case"No_Permission":e="You don't have permission on this post.";break;default:e="Something wrong, try again later."}P("Post Loading failed",e,(function(){D("/")}))})).finally((function(){return i(!1)})))}),[]);var N=function(){var n=(0,m.Z)((0,f.Z)().mark((function n(){var e;return(0,f.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!L["*"]){n.next=7;break}return n.next=4,(0,w.CP)(L["*"],s);case 4:e=L["*"],n.next=10;break;case 7:return n.next=9,(0,w.Cd)(s,a);case 9:e=n.sent;case 10:D("/home/".concat(a.nickname,"/").concat(e)),n.next=19;break;case 13:n.prev=13,n.t0=n.catch(0),console.log(n.t0),"Post Submit failed","Something wrong, try again later.",P("Post Submit failed","Something wrong, try again later.");case 19:case"end":return n.stop()}}),n,null,[[0,13]])})));return function(){return n.apply(this,arguments)}}(),S=function(){var n=/[`\n|\r|~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gim;!s.thumbnailData&&l((function(e){return(0,p.Z)((0,p.Z)({},e),{},{thumbnailData:s.postData.replace(n,"").substring(0,150)})})),h((function(n){return!n}))};return(0,z.jsxs)("div",{className:"Write",children:[t?(0,z.jsx)(en.Z,{}):null,(0,z.jsx)(C.Z,{}),(0,z.jsx)(tn.Z,{}),(0,z.jsx)(nn,{isEdit:Boolean(L["*"]),isPreview:d,postContent:s,setPostContent:l,onPreview:S,onSubmit:N}),(0,z.jsx)(V,{isEdit:Boolean(L["*"]),postContent:s,setPostContent:l,onPreview:S})]})}},4427:function(n,e,t){n.exports=t.p+"static/media/logo.006bdc187418d22db610.png"}}]);