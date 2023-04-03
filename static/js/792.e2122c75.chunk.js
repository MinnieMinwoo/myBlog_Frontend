"use strict";(self.webpackChunkmyblog_frontend=self.webpackChunkmyblog_frontend||[]).push([[792],{7792:function(e,n,s){s.r(n),s.d(n,{default:function(){return b}});var t=s(4165),r=s(5861),a=s(9439),c=s(3433),l=s(7313),i=s(8467),o=s(3403),d=s(2495),u=s(9235),h=s(2250),p=s(1921),f=s(9105),x=s(6417),m=function(){return(0,x.jsxs)("div",{"aria-hidden":"true",children:[(0,x.jsxs)("div",{className:"mb-3 hstack gap-1 placeholder-wave",children:[(0,x.jsx)("h2",{className:"d-inline-block placeholder col-1 bg-secondary"}),(0,x.jsx)("span",{className:"fs-5 placeholder col-1 bg-primary"})]}),(0,c.Z)(Array(3)).map((function(e,n){return(0,x.jsxs)("div",{className:"mb-3 d-flex vstack gap-1 placeholder-wave placeholder-lg",children:[(0,x.jsx)("hr",{}),(0,x.jsx)("h3",{className:"placeholder col-3 bg-secondary"}),(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{className:"placeholder col-11 bg-secondary"}),(0,x.jsx)("p",{className:"placeholder col-12 bg-secondary"}),(0,x.jsx)("p",{className:"placeholder col-8 bg-secondary"})]}),(0,x.jsx)("span",{className:"placeholder col-2 bg-secondary"})]},n)}))]})},b=function(){var e=(0,o.FV)(d.B),n=(0,a.Z)(e,2),s=n[0],b=n[1],v=(0,l.useState)([]),g=(0,a.Z)(v,2),j=g[0],N=g[1],w=(0,l.useState)(0),y=(0,a.Z)(w,2),Z=y[0],k=y[1],I=(0,p.p)().openToast,D=(0,i.UO)();(0,l.useEffect)((function(){if(b(!0),!D.userID)throw console.log("no params");(0,h.d3)(D.userID).then(function(){var e=(0,r.Z)((0,t.Z)().mark((function e(n){var s,r,a,c;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.kX)(n);case 2:return s=e.sent,k(s),e.next=6,(0,u.fc)(n);case 6:r=e.sent,a=r.index,c=r.data,N(c),A.current=a,10!==c.length&&O(!0);case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),I("Error","Read post list failed.","warning")})).finally((function(){b(!1)}))}),[]);var L=(0,l.useState)(!1),P=(0,a.Z)(L,2),R=P[0],S=P[1],U=(0,l.useState)(!1),C=(0,a.Z)(U,2),E=C[0],O=C[1],A=(0,l.useRef)(),B=(0,l.useRef)(null),F=function(){var e=(0,r.Z)((0,t.Z)().mark((function e(n){var s,r,a,l;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n[0].isIntersecting&&A.current&&D.userID){e.next=2;break}return e.abrupt("return");case 2:if(!R&&!E){e.next=4;break}return e.abrupt("return");case 4:return S(!0),e.next=7,(0,h.d3)(D.userID);case 7:return s=e.sent,e.next=10,(0,u.fc)(s,A.current);case 10:r=e.sent,a=r.index,l=r.data,N((function(e){return[].concat((0,c.Z)(e),(0,c.Z)(l))})),A.current=a,10!==l.length&&O(!0),S(!1);case 17:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){var e=new IntersectionObserver(F,{rootMargin:"100px",threshold:.1}),n=B.current;return n&&e.observe(n),function(){n&&e.unobserve(n)}}),[B.current]),(0,x.jsxs)("section",{className:"PostContainer px-md-3 my-4 mx-md-4",children:[s?(0,x.jsx)(m,{}):null,(0,x.jsxs)("div",{className:"PostHeader mb-3 hstack gap-1",hidden:s,children:[(0,x.jsx)("h2",{className:"fw-bold d-inline-block",children:"Posts"}),(0,x.jsx)("span",{className:"text-primary fs-5",children:"(".concat(String(Z),")")})]}),(0,x.jsx)(f.Z,{postList:j}),E||s?null:(0,x.jsx)("div",{className:"page-spinner-center",children:(0,x.jsx)("div",{className:"spinner-border text-secondary",role:"status",ref:B,children:(0,x.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})]})}},9105:function(e,n,s){s(7313);var t=s(8467),r=s(2135),a=s(3403),c=s(2495),l=s(8433),i=s(6417);n.Z=function(e){var n=e.postList,s=(0,t.UO)(),o=(0,a.sJ)(c.B);return(0,i.jsx)("article",{className:"PostItemList vstack",hidden:o,children:n.map((function(e){return(0,i.jsx)("div",{className:"w-100",children:(0,i.jsx)(r.rU,{className:"PostItem px-0 py-4 d-flex text-decoration-none bt-light",to:"/home/".concat(s.userID,"/").concat(e.id),children:(0,i.jsxs)("div",{className:"vstack gap-1",children:[""!==e.thumbnailImageURL?(0,i.jsx)("div",{children:(0,i.jsx)("img",{className:"img-fluid w-100 mb-3 ratio ratio-16x9 object-fit-cover",src:e.thumbnailImageURL,alt:"post"})}):null,(0,i.jsx)("h3",{className:"overflow-hidden fw-semibold text-111",children:e.title}),(0,i.jsx)("p",{className:"mb-1 text-break text-555",children:e.thumbnailData}),(0,i.jsx)("span",{className:"fs-14px text-999",children:(0,l.Z)(e.createdAt)})]})},e.id)},e.id)}))})}},8433:function(e,n){n.Z=function(e){var n=new window.Date(e),s=n.getFullYear(),t=("0"+(1+n.getMonth())).slice(-2),r=("0"+n.getDate()).slice(-2);return"".concat(s,". ").concat(t,". ").concat(r)}}}]);