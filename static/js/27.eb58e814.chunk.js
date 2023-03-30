"use strict";(self.webpackChunkmyblog_frontend=self.webpackChunkmyblog_frontend||[]).push([[27],{1027:function(e,n,t){t.r(n);var a=t(4165),r=t(5861),s=t(9439),o=t(3433),c=t(7313),i=t(8467),l=t(78),u=t(2495),d=t(9235),f=t(2250),h=t(3167),m=t(1921),p=t(9105),x=t(6417),v=function(){return(0,x.jsxs)("div",{"aria-hidden":"true",children:[(0,x.jsxs)("div",{className:"mb-3 hstack gap-1 placeholder-wave",children:[(0,x.jsx)("h2",{className:"d-inline-block placeholder col-1 bg-secondary"}),(0,x.jsx)("span",{className:"fs-5 placeholder col-1 bg-primary"})]}),(0,o.Z)(Array(3)).map((function(e,n){return(0,x.jsxs)("div",{className:"mb-3 d-flex vstack gap-1 placeholder-wave placeholder-lg",children:[(0,x.jsx)("hr",{}),(0,x.jsx)("h3",{className:"placeholder col-3 bg-secondary"}),(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{className:"placeholder col-11 bg-secondary"}),(0,x.jsx)("p",{className:"placeholder col-12 bg-secondary"}),(0,x.jsx)("p",{className:"placeholder col-8 bg-secondary"})]}),(0,x.jsx)("span",{className:"placeholder col-2 bg-secondary"})]},n)}))]})};n.default=function(){var e=(0,l.FV)(u.B),n=(0,s.Z)(e,2),t=n[0],b=n[1],Z=(0,c.useState)([]),g=(0,s.Z)(Z,2),j=g[0],y=g[1],w=(0,c.useState)(0),N=(0,s.Z)(w,2),k=N[0],C=N[1],T=(0,m.p)().openToast,D=(0,i.UO)();(0,c.useEffect)((function(){if(b(!0),!D.userID)throw console.log("no params");(0,f.d3)(D.userID).then(function(){var e=(0,r.Z)((0,a.Z)().mark((function e(n){var t,r,s,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.kX)(n);case 2:return t=e.sent,C(t),e.next=6,(0,d.fc)(n);case 6:r=e.sent,s=r.index,o=r.data,y(o),F.current=s,10!==o.length&&E(!0);case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),T("Error","Read post list failed.","warning")})).finally((function(){b(!1)}))}),[]);var I=(0,c.useState)(!1),P=(0,s.Z)(I,2),R=P[0],L=P[1],O=(0,c.useState)(!1),S=(0,s.Z)(O,2),B=S[0],E=S[1],F=(0,c.useRef)(),M=(0,c.useRef)(null),U=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(n){var t,r,s,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(n),n[0].isIntersecting&&F.current&&D.userID){e.next=3;break}return e.abrupt("return");case 3:if(!R&&!B){e.next=5;break}return e.abrupt("return");case 5:return L(!0),e.next=8,(0,f.d3)(D.userID);case 8:return t=e.sent,e.next=11,(0,d.fc)(t,F.current);case 11:r=e.sent,s=r.index,c=r.data,y((function(e){return[].concat((0,o.Z)(e),(0,o.Z)(c))})),F.current=s,10!==c.length&&E(!0),L(!1);case 18:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){var e=new IntersectionObserver(U,{rootMargin:"100px",threshold:.1}),n=M.current;return n&&e.observe(n),function(){n&&e.unobserve(n)}}),[M.current]),(0,x.jsxs)("section",{className:"PostContainer px-md-3 my-4 mx-md-4",children:[t?(0,x.jsx)(v,{}):null,(0,x.jsx)(h.Z,{}),(0,x.jsxs)("div",{className:"PostHeader mb-3 hstack gap-1",hidden:t,children:[(0,x.jsx)("h2",{className:"fw-bold d-inline-block",children:"Posts"}),(0,x.jsx)("span",{className:"text-primary fs-5",children:"(".concat(String(k),")")})]}),(0,x.jsx)(p.Z,{postList:j}),B||t?null:(0,x.jsx)("div",{className:"spinner-border text-secondary",style:{marginLeft:"47%"},ref:M,role:"status",children:(0,x.jsx)("span",{className:"visually-hidden",children:"Loading..."})})]})}},9105:function(e,n,t){t(7313);var a=t(8467),r=t(2135),s=t(78),o=t(2495),c=t(8433),i=t(6417);n.Z=function(e){var n=e.postList,t=(0,a.UO)(),l=(0,s.sJ)(o.B);return(0,i.jsx)("article",{className:"PostItemList vstack",hidden:l,children:n.map((function(e){return(0,i.jsx)("div",{className:"w-100",children:(0,i.jsx)(r.rU,{className:"PostItem px-0 py-4 d-flex text-decoration-none",style:{borderTop:"1px solid #eee"},to:"/home/".concat(t.userID,"/").concat(e.id),children:(0,i.jsxs)("div",{className:"vstack gap-1",children:[""!==e.thumbnailImageURL?(0,i.jsx)("div",{children:(0,i.jsx)("img",{className:"img-fluid w-100 mb-3",style:{aspectRatio:"16 / 9",objectFit:"cover"},src:e.thumbnailImageURL,alt:"post"})}):null,(0,i.jsx)("h3",{className:"overflow-hidden fw-semibold",style:{color:"#111"},children:e.title}),(0,i.jsx)("p",{className:"mb-1 text-break",style:{color:"#555"},children:e.thumbnailData}),(0,i.jsx)("span",{style:{color:"#999",fontSize:"14px"},children:(0,c.Z)(e.createdAt)})]})},e.id)},e.id)}))})}},3167:function(e,n,t){var a,r=t(168),s=(t(7313),t(6968)),o=t(1921),c=t(244),i=t(6417),l=(0,c.ZP)(s.Z)(a||(a=(0,r.Z)(["\n  position: absolute;\n  top: 70px;\n  right: 40px;\n  z-index: 5;\n"])));n.Z=function(){var e=(0,o.p)(),n=e.toastDataState,t=e.closeToast;return(0,i.jsxs)(l,{onClose:function(){t()},show:n.isOpen,bg:n.background,delay:3e3,autohide:!0,children:[(0,i.jsx)(s.Z.Header,{closeButton:!1,children:(0,i.jsx)("strong",{className:"me-auto",children:n.title})}),(0,i.jsx)(s.Z.Body,{children:n.content})]})}},8433:function(e,n){n.Z=function(e){var n=new window.Date(e),t=n.getFullYear(),a=("0"+(1+n.getMonth())).slice(-2),r=("0"+n.getDate()).slice(-2);return"".concat(t,". ").concat(a,". ").concat(r)}},1921:function(e,n,t){t.d(n,{p:function(){return i}});var a=t(1413),r=t(9439),s=t(7313),o=t(78),c=(0,o.cn)({key:"toastState",default:{isOpen:!1,title:"",content:"",background:"primary"}}),i=function(){var e=(0,o.FV)(c),n=(0,r.Z)(e,2),t=n[0],i=n[1];return{toastDataState:t,openToast:(0,s.useCallback)((function(e,n,t){i({isOpen:!0,title:e,content:n,background:null!==t&&void 0!==t?t:"primary"})}),[i]),closeToast:(0,s.useCallback)((function(){i((function(e){return(0,a.Z)((0,a.Z)({},e),{},{isOpen:!1})}))}),[i])}}},6968:function(e,n,t){t.d(n,{Z:function(){return R}});var a=t(1413),r=t(5987),s=t(7313),o=t(6123),c=t.n(o),i=t(7901),l=t(2891),u=Math.pow(2,31)-1;function d(e,n,t){var a=t-Date.now();e.current=a<=u?setTimeout(n,a):setTimeout((function(){return d(e,n,t)}),u)}function f(){var e=(0,i.Z)(),n=(0,s.useRef)();return(0,l.Z)((function(){return clearTimeout(n.current)})),(0,s.useMemo)((function(){var t=function(){return clearTimeout(n.current)};return{set:function(a,r){void 0===r&&(r=0),e()&&(t(),r<=u?n.current=setTimeout(a,r):d(n,a,Date.now()+r))},clear:t}}),[])}var h,m=t(4942),p=t(8588),x=t(7131),v=t(6417),b=(h={},(0,m.Z)(h,p.d0,"showing"),(0,m.Z)(h,p.Ix,"showing show"),h),Z=s.forwardRef((function(e,n){return(0,v.jsx)(x.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:n,transitionClasses:b}))}));Z.displayName="ToastFade";var g=Z,j=t(3813),y=t(8524),w=t(2729),N=s.createContext({onClose:function(){}}),k=["bsPrefix","closeLabel","closeVariant","closeButton","className","children"],C=s.forwardRef((function(e,n){var t=e.bsPrefix,o=e.closeLabel,i=e.closeVariant,l=e.closeButton,u=e.className,d=e.children,f=(0,r.Z)(e,k);t=(0,y.vE)(t,"toast-header");var h=(0,s.useContext)(N),m=(0,j.Z)((function(e){null==h||null==h.onClose||h.onClose(e)}));return(0,v.jsxs)("div",(0,a.Z)((0,a.Z)({ref:n},f),{},{className:c()(t,u),children:[d,l&&(0,v.jsx)(w.Z,{"aria-label":o,variant:i,onClick:m,"data-dismiss":"toast"})]}))}));C.displayName="ToastHeader",C.defaultProps={closeLabel:"Close",closeButton:!0};var T=C,D=(0,t(8864).Z)("toast-body"),I=["bsPrefix","className","transition","show","animation","delay","autohide","onClose","bg"],P=s.forwardRef((function(e,n){var t=e.bsPrefix,o=e.className,i=e.transition,l=void 0===i?g:i,u=e.show,d=void 0===u||u,h=e.animation,m=void 0===h||h,p=e.delay,x=void 0===p?5e3:p,b=e.autohide,Z=void 0!==b&&b,j=e.onClose,w=e.bg,k=(0,r.Z)(e,I);t=(0,y.vE)(t,"toast");var C=(0,s.useRef)(x),T=(0,s.useRef)(j);(0,s.useEffect)((function(){C.current=x,T.current=j}),[x,j]);var D=f(),P=!(!Z||!d),R=(0,s.useCallback)((function(){P&&(null==T.current||T.current())}),[P]);(0,s.useEffect)((function(){D.set(R,C.current)}),[D,R]);var L=(0,s.useMemo)((function(){return{onClose:j}}),[j]),O=!(!l||!m),S=(0,v.jsx)("div",(0,a.Z)((0,a.Z)({},k),{},{ref:n,className:c()(t,o,w&&"bg-".concat(w),!O&&(d?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"}));return(0,v.jsx)(N.Provider,{value:L,children:O&&l?(0,v.jsx)(l,{in:d,unmountOnExit:!0,children:S}):S})}));P.displayName="Toast";var R=Object.assign(P,{Body:D,Header:T})}}]);