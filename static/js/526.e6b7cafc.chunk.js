"use strict";(self.webpackChunkmyblog_frontend=self.webpackChunkmyblog_frontend||[]).push([[526],{7067:function(e,n,r){r.r(n),r.d(n,{default:function(){return ge}});var t=r(4165),a=r(3433),i=r(7762),o=r(5861),c=r(9439),s=r(168),u=r(7313),d=r(8467),l=r(78),f=r(973),b=r(6233),p=r(1921),g=r(8648),m=r(3298),x=r(244),h=r(2250),v=r(4646),y=r(2552),Z=r(3167),k=r(1616),C=r(2135),j=r(1413),w=r(5987),N=r(6123),F=r.n(N),E=r(8524),P=r(8864),I=r(6205),T=r(6417),D=["bsPrefix","className","variant","as"],M=u.forwardRef((function(e,n){var r=e.bsPrefix,t=e.className,a=e.variant,i=e.as,o=void 0===i?"img":i,c=(0,w.Z)(e,D),s=(0,E.vE)(r,"card-img");return(0,T.jsx)(o,(0,j.Z)({ref:n,className:F()(a?"".concat(s,"-").concat(a):s,t)},c))}));M.displayName="CardImg";var R=M,S=r(5614),L=["bsPrefix","className","as"],U=u.forwardRef((function(e,n){var r=e.bsPrefix,t=e.className,a=e.as,i=void 0===a?"div":a,o=(0,w.Z)(e,L),c=(0,E.vE)(r,"card-header"),s=(0,u.useMemo)((function(){return{cardHeaderBsPrefix:c}}),[c]);return(0,T.jsx)(S.Z.Provider,{value:s,children:(0,T.jsx)(i,(0,j.Z)((0,j.Z)({ref:n},o),{},{className:F()(t,c)}))})}));U.displayName="CardHeader";var z=U,B=["bsPrefix","className","bg","text","border","body","children","as"],H=(0,I.Z)("h5"),O=(0,I.Z)("h6"),A=(0,P.Z)("card-body"),V=(0,P.Z)("card-title",{Component:H}),W=(0,P.Z)("card-subtitle",{Component:O}),Y=(0,P.Z)("card-link",{Component:"a"}),J=(0,P.Z)("card-text",{Component:"p"}),_=(0,P.Z)("card-footer"),q=(0,P.Z)("card-img-overlay"),G=u.forwardRef((function(e,n){var r=e.bsPrefix,t=e.className,a=e.bg,i=e.text,o=e.border,c=e.body,s=e.children,u=e.as,d=void 0===u?"div":u,l=(0,w.Z)(e,B),f=(0,E.vE)(r,"card");return(0,T.jsx)(d,(0,j.Z)((0,j.Z)({ref:n},l),{},{className:F()(t,f,a&&"bg-".concat(a),i&&"text-".concat(i),o&&"border-".concat(o)),children:c?(0,T.jsx)(A,{children:s}):s}))}));G.displayName="Card",G.defaultProps={body:!1};var K,Q,X,$,ee,ne,re=Object.assign(G,{Img:R,Title:V,Subtitle:W,Body:A,Link:Y,Text:J,Header:z,Footer:_,ImgOverlay:q}),te=r(3931),ae=r(1366),ie=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(0,T.jsxs)(ae.Z,{children:[(0,T.jsx)(ae.Z.Label,{children:"Write down the category name."}),(0,T.jsx)(ae.Z.Control,{type:"text",placeholder:"enter category name",defaultValue:n,ref:e,required:!0})]})},oe=x.ZP.img(K||(K=(0,s.Z)(["\n  background-color: #666;\n  width: 100%;\n  aspect-ratio: 16/9;\n  border-radius: 20px;\n  object-fit: cover;\n  object-position: center;\n  font-size: 0;\n"]))),ce=r(7657),se=(0,x.ZP)(re)(Q||(Q=(0,s.Z)(["\n  display: inline-block;\n  margin: 10px;\n  width: calc(100% - 20px);\n  @media screen and (min-width: 768px) and (max-width: 1199px) {\n    width: calc(50% - 20px);\n  }\n  @media (min-width: 1200px) {\n    width: calc(33% - 20px);\n  }\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  img {\n    width: 100%;\n    aspect-ratio: 16/9;\n    object-fit: cover;\n    object-position: center;\n  }\n  a {\n    font-size: 18px;\n    font-weight: 500;\n    color: #111;\n    text-decoration: none;\n  }\n"]))),ue=function(e){var n=e.isEdit,r=e.imgLink,c=e.mainID,s=e.subID,d=e.categoryData,x=e.setCategoryData,h=(0,l.sJ)(f.F),y=(0,u.useRef)(null),Z=(0,u.useRef)(null),k=(0,u.useRef)(null),j=(0,u.useRef)(""),w=(0,b.d)().openModal,N=(0,p.p)().openToast,F=function(){var e=(0,o.Z)((0,t.Z)().mark((function e(n){var r,o,c,s,u,l,f,b,p,g,m,Z=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=Z.length>1&&void 0!==Z[1]?Z[1]:-1,s=Z.length>2&&void 0!==Z[2]?Z[2]:-1,u=null!==(r=null===(o=y.current)||void 0===o?void 0:o.value)&&void 0!==r?r:"",l=h.uid,f=(0,a.Z)(d),l&&-1!==c){e.next=7;break}return e.abrupt("return",N("Error","Using corrupt data.","danger"));case 7:if(!n.includes("edit")||!n.includes("Sub")){e.next=27;break}if(u){e.next=10;break}return e.abrupt("return",N("Error","Using corrupt data.","danger"));case 10:b=(0,i.Z)(d),e.prev=11,b.s();case 13:if((p=b.n()).done){e.next=19;break}if(!p.value.subField.includes(u)){e.next=17;break}return e.abrupt("return",N("Error","You entered duplicated category name.","warning"));case 17:e.next=13;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(11),b.e(e.t0);case 24:return e.prev=24,b.f(),e.finish(24);case 27:e.prev=27,e.t1=n,e.next="editSubCategory"===e.t1?31:"editCategoryImage"===e.t1?37:"deleteSubCategory"===e.t1?43:49;break;case 31:return e.next=33,(0,v.SV)(d[c],d[c].subField[s],u,l);case 33:return g=e.sent,f[c].subField=g,x(f),e.abrupt("break",50);case 37:return console.log(j),f[c].thumbnailLink[s]=j.current,e.next=41,(0,v.yR)(f[c].thumbnailLink,f[c].mainField,l);case 41:return x(f),e.abrupt("break",50);case 43:return e.next=45,(0,v.c2)(d[c],d[c].subField[s],l);case 45:return m=e.sent,f[c]=m,x(f),e.abrupt("break",50);case 49:return e.abrupt("return");case 50:e.next=56;break;case 52:e.prev=52,e.t2=e.catch(27),console.log(e.t2),N("Error","Category edit failed.","danger");case 56:case"end":return e.stop()}}),e,null,[[11,21,24,27],[27,52]])})));return function(n){return e.apply(this,arguments)}}(),E=function(e){var n,a,i=e.target,c=null!==(n=i.id.split(",").map((function(e){return Number(e)})))&&void 0!==n?n:[],s="",u=!1,l=function(){};switch(i.name){case"editSubCategory":s="Edit sub category",a=ie(y,d[c[0]].subField[c[1]]),l=function(){F("editSubCategory",c[0],c[1])};break;case"deleteSubCategory":s="Warning",a="If you really want to delete this sub category?",l=function(){F("deleteSubCategory",c[0],c[1])},u=!0;break;case"editCategoryImage":j.current=r;var f=function(){var e=(0,o.Z)((0,t.Z)().mark((function e(n){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.target.files){e.next=2;break}return e.abrupt("return");case 2:return j.current&&(0,ce.j)(j.current),e.next=5,(0,v.sk)(n.target.files[0]);case 5:j.current=e.sent,k.current&&(k.current.src=j.current);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();s="Thumbnail edit",a=function(e,n,r,t,a){var i,o;return(0,T.jsxs)(ae.Z,{children:[(0,T.jsx)(ae.Z.Label,{children:"Please upload the image."}),(0,T.jsxs)(g.Z,{gap:2,children:[(0,T.jsx)(oe,{ref:r,src:null!==(i=r.current)&&void 0!==i&&i.src?null===(o=r.current)||void 0===o?void 0:o.src:e.current?e.current:te,alt:"Thumbnail"}),(0,T.jsx)("input",{hidden:!0,type:"file",accept:"image/*",ref:n,onChange:t}),(0,T.jsxs)(g.Z,{direction:"horizontal",gap:2,children:[(0,T.jsx)(m.Z,{onClick:function(){var e;null===(e=n.current)||void 0===e||e.click()},children:"Upload Image"}),(0,T.jsx)(m.Z,{variant:"outline-primary",onClick:a,children:"Delete Image"})]})]})]})}(j,Z,k,f,(function(){j.current&&(0,ce.j)(j.current),j.current="",k.current&&(k.current.src=te)})),l=function(){F("editCategoryImage",c[0],c[1])};break;default:return}w(s,a,l,!0,u?"danger":"primary")};return(0,T.jsxs)(se,{children:[(0,T.jsx)(C.rU,{to:"".concat(d[c].mainField,"/").concat(d[c].subField[s]),children:(0,T.jsx)(re.Img,{src:r,onError:function(e){e.currentTarget.src=te},alt:"Thumbnail"})}),(0,T.jsxs)(re.Body,{children:[(0,T.jsx)(re.Title,{as:C.rU,to:"".concat(d[c].mainField,"/").concat(d[c].subField[s]),children:"".concat(d[c].subField[s])}),(0,T.jsxs)(g.Z,{direction:"horizontal",hidden:!n,children:[(0,T.jsx)(m.Z,{id:"".concat(c,",").concat(s,",1"),name:"editSubCategory",variant:"outline-secondary",onClick:E,children:"\u270e"}),(0,T.jsx)(m.Z,{id:"".concat(c,",").concat(s,",2"),name:"editCategoryImage",variant:"outline-info",className:"ms-auto",onClick:E,children:"\ud83d\uddbc\ufe0f"}),(0,T.jsx)(m.Z,{id:"".concat(c,",").concat(s,",3"),name:"deleteSubCategory",variant:"outline-danger",className:"ms-auto",onClick:E,children:"\ud83d\uddd1\ufe0f"})]})]})]},s)},de=x.ZP.section(X||(X=(0,s.Z)(["\n  padding: 30px 0;\n  border-top: 1px solid #eee;\n"]))),le=x.ZP.div($||($=(0,s.Z)(["\n  margin-bottom: 20px;\n\n  h2 {\n    font-weight: bold;\n    display: inline-block;\n  }\n\n  h3 {\n    color: #333;\n    font-weight: 600;\n    display: inline-block;\n  }\n\n  span {\n    font-size: 18px;\n  }\n\n  button {\n    width: 100px;\n  }\n"]))),fe=function(e){var n=e.isEdit,r=e.categoryData,c=e.setCategoryData,s=(0,l.sJ)(f.F),d=(0,u.useRef)(null),x=(0,b.d)().openModal,h=(0,p.p)().openToast,y=function(){var e=(0,o.Z)((0,t.Z)().mark((function e(n){var o,u,l,f,b,p,g,m,x,y,Z,k=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=k.length>1&&void 0!==k[1]?k[1]:-1,f=null!==(o=null===(u=d.current)||void 0===u?void 0:u.value)&&void 0!==o?o:"",b=s.uid,p=(0,a.Z)(r),b){e.next=6;break}return e.abrupt("return",h("Error","Using corrupt data.","danger"));case 6:if(!n.includes("add")&&!n.includes("delete")||-1!==l){e.next=8;break}return e.abrupt("return",h("Error","Using corrupt data.","danger"));case 8:if(!n.includes("add")&&!n.includes("edit")){e.next=28;break}if(f){e.next=11;break}return e.abrupt("return",h("Error","Using corrupt data.","danger"));case 11:g=(0,i.Z)(r),e.prev=12,g.s();case 14:if((m=g.n()).done){e.next=20;break}if(x=m.value,!(n.includes("Main")&&x.mainField===f||x.subField.includes(f))){e.next=18;break}return e.abrupt("return",h("Error","You entered duplicated category name.","warning"));case 18:e.next=14;break;case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(12),g.e(e.t0);case 25:return e.prev=25,g.f(),e.finish(25);case 28:e.prev=28,e.t1=n,e.next="addSubCategory"===e.t1?32:"editMainCategory"===e.t1?38:"deleteMainCategory"===e.t1?44:48;break;case 32:return e.next=34,(0,v.mR)(r[l],f,b);case 34:return y=e.sent,p[l]=y,c(p),e.abrupt("break",49);case 38:return e.next=40,(0,v.FH)(r.map((function(e,n){return n===l?f:e.mainField})),r[l],f,b);case 40:return Z=e.sent,p[l]=Z,c(p),e.abrupt("break",49);case 44:return e.next=46,(0,v.YO)(r[l].mainField,b);case 46:return c((function(e){return e.filter((function(e){return e.mainField!==r[l].mainField}))})),e.abrupt("break",49);case 48:return e.abrupt("return");case 49:e.next=55;break;case 51:e.prev=51,e.t2=e.catch(28),console.log(e.t2),h("Error","Category edit failed.","danger");case 55:case"end":return e.stop()}}),e,null,[[12,22,25,28],[28,51]])})));return function(n){return e.apply(this,arguments)}}(),Z=function(e){var n,t,a=e.target,i=null!==(n=a.id.split(",").map((function(e){return Number(e)})))&&void 0!==n?n:[],o="",c=function(){};switch(a.name){case"addSubCategory":o="Add sub category",t=ie(d),c=function(){y("addSubCategory",i[0])};break;case"editMainCategory":o="Edit category",t=ie(d,r[i[0]].mainField),c=function(){y("editMainCategory",i[0])};break;case"deleteMainCategory":o="Warning",t="If you really want to delete this category?",c=function(){y("deleteMainCategory",i[0])};break;default:return}x(o,t,c,!0,"primary")};return(0,T.jsx)(k.Z,{sm:!0,children:r.map((function(e,t){return(0,T.jsxs)(de,{children:[(0,T.jsx)(le,{children:(0,T.jsxs)(g.Z,{direction:"horizontal",gap:1,children:[(0,T.jsx)("h3",{children:e.mainField}),(0,T.jsxs)("span",{className:"text-secondary",children:["(",e.subField.length,")"]}),n?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(m.Z,{id:"".concat(t,",1"),name:"addSubCategory",variant:"outline-primary",className:"ms-auto",onClick:Z,children:"Add"}),(0,T.jsx)(m.Z,{id:"".concat(t,",2"),name:"editMainCategory",variant:"outline-secondary",onClick:Z,children:"Edit"}),(0,T.jsx)(m.Z,{id:"".concat(t,",3"),name:"deleteMainCategory",variant:"danger",onClick:Z,children:"Delete"})]}):null]})}),e.subField.map((function(a,i){return(0,T.jsx)(ue,{isEdit:n,imgLink:e.thumbnailLink[i],mainID:t,subID:i,categoryData:r,setCategoryData:c},i)}))]},t)}))})},be=(0,x.ZP)(g.Z)(ee||(ee=(0,s.Z)(["\n  padding: 0 30px;\n  margin: 30px;\n"]))),pe=x.ZP.div(ne||(ne=(0,s.Z)(["\n  margin-bottom: 20px;\n\n  h2 {\n    font-weight: bold;\n    display: inline-block;\n  }\n\n  h3 {\n    color: #333;\n    font-weight: 600;\n    display: inline-block;\n  }\n\n  span {\n    font-size: 18px;\n  }\n\n  button {\n    width: 100px;\n  }\n"]))),ge=function(){var e=(0,l.sJ)(f.F),n=(0,u.useState)(!1),r=(0,c.Z)(n,2),s=r[0],x=r[1],k=(0,u.useState)([]),C=(0,c.Z)(k,2),j=C[0],w=C[1],N=(0,u.useRef)(null),F=(0,d.UO)(),E=(0,b.d)().openModal,P=(0,p.p)().openToast;(0,u.useEffect)((function(){if(!F.userID)throw console.log("no params");(0,h.d3)(F.userID).then((function(e){(0,v.AT)(e).then((function(e){return w(e)}))})).catch((function(){P("Warning","Category loading failed","warning")}))}),[]);var I=function(){var n=(0,o.Z)((0,t.Z)().mark((function n(){var r,o,c,s,u,d;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c=null!==(r=null===(o=N.current)||void 0===o?void 0:o.value)&&void 0!==r?r:"",(s=e.uid)&&c){n.next=4;break}return n.abrupt("return",P("Error","Using corrupt data.","danger"));case 4:u=(0,i.Z)(j),n.prev=5,u.s();case 7:if((d=u.n()).done){n.next=13;break}if(d.value.mainField!==c){n.next=11;break}return n.abrupt("return",P("Error","You entered duplicated category name.","warning"));case 11:n.next=7;break;case 13:n.next=18;break;case 15:n.prev=15,n.t0=n.catch(5),u.e(n.t0);case 18:return n.prev=18,u.f(),n.finish(18);case 21:return n.prev=21,n.next=24,(0,v.Ok)(c,s);case 24:w((function(e){return[].concat((0,a.Z)(e),[{mainField:c,subField:[],thumbnailLink:[]}])})),n.next=31;break;case 27:n.prev=27,n.t1=n.catch(21),console.log(n.t1),P("Error","Category add failed.","danger");case 31:case"end":return n.stop()}}),n,null,[[5,15,18,21],[21,27]])})));return function(){return n.apply(this,arguments)}}();return(0,T.jsxs)(be,{className:"PostCategoryList",children:[(0,T.jsx)(y.Z,{}),(0,T.jsx)(Z.Z,{}),(0,T.jsx)(pe,{children:(0,T.jsxs)(g.Z,{direction:"horizontal",gap:1,children:[(0,T.jsx)("h2",{children:"Categories"}),(0,T.jsxs)("span",{className:"text-primary",children:["(",j.length,")"]}),s?(0,T.jsx)(m.Z,{name:"addMainCategory",className:"ms-auto",variant:"outline-primary",onClick:function(){var e=ie(N);E("Add category",e,(function(){I()}),!0)},children:"Add"}):null,(0,T.jsx)(m.Z,{className:s?"":"ms-auto",onClick:function(){x((function(e){return!e}))},children:s?"Complete":"Edit"})]})}),(0,T.jsx)(fe,{isEdit:s,categoryData:j,setCategoryData:w})]})}},5614:function(e,n,r){var t=r(7313).createContext(null);t.displayName="CardHeaderContext",n.Z=t},6968:function(e,n,r){r.d(n,{Z:function(){return T}});var t=r(1413),a=r(5987),i=r(7313),o=r(6123),c=r.n(o),s=r(7901),u=r(2891),d=Math.pow(2,31)-1;function l(e,n,r){var t=r-Date.now();e.current=t<=d?setTimeout(n,t):setTimeout((function(){return l(e,n,r)}),d)}function f(){var e=(0,s.Z)(),n=(0,i.useRef)();return(0,u.Z)((function(){return clearTimeout(n.current)})),(0,i.useMemo)((function(){var r=function(){return clearTimeout(n.current)};return{set:function(t,a){void 0===a&&(a=0),e()&&(r(),a<=d?n.current=setTimeout(t,a):l(n,t,Date.now()+a))},clear:r}}),[])}var b,p=r(4942),g=r(8588),m=r(2868),x=r(6417),h=(b={},(0,p.Z)(b,g.d0,"showing"),(0,p.Z)(b,g.Ix,"showing show"),b),v=i.forwardRef((function(e,n){return(0,x.jsx)(m.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n,transitionClasses:h}))}));v.displayName="ToastFade";var y=v,Z=r(9650),k=r(8524),C=r(2729),j=i.createContext({onClose:function(){}}),w=["bsPrefix","closeLabel","closeVariant","closeButton","className","children"],N=i.forwardRef((function(e,n){var r=e.bsPrefix,o=e.closeLabel,s=e.closeVariant,u=e.closeButton,d=e.className,l=e.children,f=(0,a.Z)(e,w);r=(0,k.vE)(r,"toast-header");var b=(0,i.useContext)(j),p=(0,Z.Z)((function(e){null==b||null==b.onClose||b.onClose(e)}));return(0,x.jsxs)("div",(0,t.Z)((0,t.Z)({ref:n},f),{},{className:c()(r,d),children:[l,u&&(0,x.jsx)(C.Z,{"aria-label":o,variant:s,onClick:p,"data-dismiss":"toast"})]}))}));N.displayName="ToastHeader",N.defaultProps={closeLabel:"Close",closeButton:!0};var F=N,E=(0,r(8864).Z)("toast-body"),P=["bsPrefix","className","transition","show","animation","delay","autohide","onClose","bg"],I=i.forwardRef((function(e,n){var r=e.bsPrefix,o=e.className,s=e.transition,u=void 0===s?y:s,d=e.show,l=void 0===d||d,b=e.animation,p=void 0===b||b,g=e.delay,m=void 0===g?5e3:g,h=e.autohide,v=void 0!==h&&h,Z=e.onClose,C=e.bg,w=(0,a.Z)(e,P);r=(0,k.vE)(r,"toast");var N=(0,i.useRef)(m),F=(0,i.useRef)(Z);(0,i.useEffect)((function(){N.current=m,F.current=Z}),[m,Z]);var E=f(),I=!(!v||!l),T=(0,i.useCallback)((function(){I&&(null==F.current||F.current())}),[I]);(0,i.useEffect)((function(){E.set(T,N.current)}),[E,T]);var D=(0,i.useMemo)((function(){return{onClose:Z}}),[Z]),M=!(!u||!p),R=(0,x.jsx)("div",(0,t.Z)((0,t.Z)({},w),{},{ref:n,className:c()(r,o,C&&"bg-".concat(C),!M&&(l?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"}));return(0,x.jsx)(j.Provider,{value:D,children:M&&u?(0,x.jsx)(u,{in:l,unmountOnExit:!0,children:R}):R})}));I.displayName="Toast";var T=Object.assign(I,{Body:E,Header:F})}}]);