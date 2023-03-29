"use strict";(self.webpackChunkmyblog_frontend=self.webpackChunkmyblog_frontend||[]).push([[569],{2569:function(e,n,r){r.r(n),r.d(n,{default:function(){return ve}});var t=r(4165),a=r(3433),i=r(7762),o=r(5861),c=r(9439),s=r(168),u=r(7313),l=r(8467),d=r(78),f=r(973),p=r(6233),b=r(1921),m=r(8648),v=r(7440),g=r(244),h=r(2250),x=r(4646),Z=r(2552),y=r(3167),k=r(1413),C=r(1616),j=r(2135),w=r(5987),N=r(6123),F=r.n(N),E=r(8524),P=r(8864),T=r(6205),D=r(6417),S=["bsPrefix","className","variant","as"],I=u.forwardRef((function(e,n){var r=e.bsPrefix,t=e.className,a=e.variant,i=e.as,o=void 0===i?"img":i,c=(0,w.Z)(e,S),s=(0,E.vE)(r,"card-img");return(0,D.jsx)(o,(0,k.Z)({ref:n,className:F()(a?"".concat(s,"-").concat(a):s,t)},c))}));I.displayName="CardImg";var R=I,M=u.createContext(null);M.displayName="CardHeaderContext";var L=M,z=["bsPrefix","className","as"],O=u.forwardRef((function(e,n){var r=e.bsPrefix,t=e.className,a=e.as,i=void 0===a?"div":a,o=(0,w.Z)(e,z),c=(0,E.vE)(r,"card-header"),s=(0,u.useMemo)((function(){return{cardHeaderBsPrefix:c}}),[c]);return(0,D.jsx)(L.Provider,{value:s,children:(0,D.jsx)(i,(0,k.Z)((0,k.Z)({ref:n},o),{},{className:F()(t,c)}))})}));O.displayName="CardHeader";var U=O,B=["bsPrefix","className","bg","text","border","body","children","as"],H=(0,T.Z)("h5"),A=(0,T.Z)("h6"),V=(0,P.Z)("card-body"),W=(0,P.Z)("card-title",{Component:H}),Y=(0,P.Z)("card-subtitle",{Component:A}),J=(0,P.Z)("card-link",{Component:"a"}),G=(0,P.Z)("card-text",{Component:"p"}),_=(0,P.Z)("card-footer"),q=(0,P.Z)("card-img-overlay"),K=u.forwardRef((function(e,n){var r=e.bsPrefix,t=e.className,a=e.bg,i=e.text,o=e.border,c=e.body,s=e.children,u=e.as,l=void 0===u?"div":u,d=(0,w.Z)(e,B),f=(0,E.vE)(r,"card");return(0,D.jsx)(l,(0,k.Z)((0,k.Z)({ref:n},d),{},{className:F()(t,f,a&&"bg-".concat(a),i&&"text-".concat(i),o&&"border-".concat(o)),children:c?(0,D.jsx)(V,{children:s}):s}))}));K.displayName="Card",K.defaultProps={body:!1};var Q,X,$,ee,ne,re,te=Object.assign(K,{Img:R,Title:W,Subtitle:Y,Body:V,Link:J,Text:G,Header:U,Footer:_,ImgOverlay:q}),ae=r(3931),ie=r(1366),oe=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(0,D.jsxs)(ie.Z,{children:[(0,D.jsx)(ie.Z.Label,{children:"Write down the category name."}),(0,D.jsx)(ie.Z.Control,{type:"text",placeholder:"enter category name",defaultValue:n,ref:e,required:!0})]})},ce=g.ZP.img(Q||(Q=(0,s.Z)(["\n  background-color: #666;\n  width: 100%;\n  aspect-ratio: 16/9;\n  border-radius: 20px;\n  object-fit: cover;\n  object-position: center;\n  font-size: 0;\n"]))),se=r(7657),ue=(0,g.ZP)(te)(X||(X=(0,s.Z)(["\n  display: inline-block;\n  margin: 10px;\n  width: calc(100% - 20px);\n  @media screen and (min-width: 768px) and (max-width: 1199px) {\n    width: calc(50% - 20px);\n  }\n  @media (min-width: 1200px) {\n    width: calc(33% - 20px);\n  }\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  img {\n    width: 100%;\n    aspect-ratio: 16/9;\n    object-fit: cover;\n    object-position: center;\n  }\n  a {\n    font-size: 18px;\n    font-weight: 500;\n    color: #111;\n    text-decoration: none;\n  }\n"]))),le=function(e){var n=e.isEdit,r=e.imgLink,c=e.mainID,s=e.subID,l=e.categoryData,g=e.setCategoryData,h=(0,d.sJ)(f.F),Z=(0,u.useRef)(null),y=(0,u.useRef)(null),C=(0,u.useRef)(null),w=(0,u.useRef)(""),N=(0,p.d)().openModal,F=(0,b.p)().openToast,E=function(){var e=(0,o.Z)((0,t.Z)().mark((function e(n){var r,o,c,s,u,d,f,p,b,m=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=m.length>1&&void 0!==m[1]?m[1]:-1,s=m.length>2&&void 0!==m[2]?m[2]:-1,u=null!==(r=null===(o=Z.current)||void 0===o?void 0:o.value)&&void 0!==r?r:"",d=h.uid,f=(0,a.Z)(l),d&&-1!==c){e.next=7;break}return e.abrupt("return",F("Error","Using corrupt data.","danger"));case 7:if(!n.includes("edit")||!n.includes("Sub")){e.next=27;break}if(u){e.next=10;break}return e.abrupt("return",F("Error","Using corrupt data.","danger"));case 10:p=(0,i.Z)(l),e.prev=11,p.s();case 13:if((b=p.n()).done){e.next=19;break}if(!b.value.subField.includes(u)){e.next=17;break}return e.abrupt("return",F("Error","You entered duplicated category name.","warning"));case 17:e.next=13;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(11),p.e(e.t0);case 24:return e.prev=24,p.f(),e.finish(24);case 27:e.prev=27,e.t1=n,e.next="editSubCategory"===e.t1?31:"editCategoryImage"===e.t1?36:"deleteSubCategory"===e.t1?42:47;break;case 31:return e.next=33,(0,x.SV)(l[c],l[c].subField[s],u,d);case 33:return f[c].subField=f[c].subField.map((function(e){return e===l[c].subField[s]?u:e})),g(f),e.abrupt("break",48);case 36:return console.log(w),f[c].thumbnailLink[s]=w.current,e.next=40,(0,x.yR)(f[c].thumbnailLink,f[c].mainField,d);case 40:return g(f),e.abrupt("break",48);case 42:return e.next=44,(0,x.c2)(l[c],l[c].subField[s],d);case 44:return f[c]=(0,k.Z)((0,k.Z)({},f[c]),{},{subField:f[c].subField.filter((function(e,n){return n!==s})),thumbnailLink:f[c].thumbnailLink.filter((function(e,n){return n!==s}))}),g(f),e.abrupt("break",48);case 47:return e.abrupt("return");case 48:e.next=54;break;case 50:e.prev=50,e.t2=e.catch(27),console.log(e.t2),F("Error","Category edit failed.","danger");case 54:case"end":return e.stop()}}),e,null,[[11,21,24,27],[27,50]])})));return function(n){return e.apply(this,arguments)}}(),P=function(e){var n,a,i=e.target,c=null!==(n=i.id.split(",").map((function(e){return Number(e)})))&&void 0!==n?n:[],s="",u=!1,d=function(){};switch(i.name){case"editSubCategory":s="Edit sub category",a=oe(Z,l[c[0]].subField[c[1]]),d=function(){E("editSubCategory",c[0],c[1])};break;case"deleteSubCategory":s="Warning",a="If you really want to delete this sub category?",d=function(){E("deleteSubCategory",c[0],c[1])},u=!0;break;case"editCategoryImage":w.current=r;var f=function(){var e=(0,o.Z)((0,t.Z)().mark((function e(n){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.target.files){e.next=2;break}return e.abrupt("return");case 2:return w.current&&(0,se.j)(w.current),e.next=5,(0,x.sk)(n.target.files[0]);case 5:w.current=e.sent,C.current&&(C.current.src=w.current);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();s="Thumbnail edit",a=function(e,n,r,t,a){var i,o;return(0,D.jsxs)(ie.Z,{children:[(0,D.jsx)(ie.Z.Label,{children:"Please upload the image."}),(0,D.jsxs)(m.Z,{gap:2,children:[(0,D.jsx)(ce,{ref:r,src:null!==(i=r.current)&&void 0!==i&&i.src?null===(o=r.current)||void 0===o?void 0:o.src:e.current?e.current:ae,alt:"Thumbnail"}),(0,D.jsx)("input",{hidden:!0,type:"file",accept:"image/*",ref:n,onChange:t}),(0,D.jsxs)(m.Z,{direction:"horizontal",gap:2,children:[(0,D.jsx)(v.Z,{onClick:function(){var e;null===(e=n.current)||void 0===e||e.click()},children:"Upload Image"}),(0,D.jsx)(v.Z,{variant:"outline-primary",onClick:a,children:"Delete Image"})]})]})]})}(w,y,C,f,(function(){w.current&&(0,se.j)(w.current),w.current="",C.current&&(C.current.src=ae)})),d=function(){E("editCategoryImage",c[0],c[1])};break;default:return}N(s,a,d,!0,u?"danger":"primary")};return(0,D.jsxs)(ue,{children:[(0,D.jsx)(j.rU,{to:"".concat(l[c].mainField,"/").concat(l[c].subField[s]),children:(0,D.jsx)(te.Img,{src:r,onError:function(e){e.currentTarget.src=ae},alt:"Thumbnail"})}),(0,D.jsxs)(te.Body,{children:[(0,D.jsx)(te.Title,{as:j.rU,to:"".concat(l[c].mainField,"/").concat(l[c].subField[s]),children:"".concat(l[c].subField[s])}),(0,D.jsxs)(m.Z,{direction:"horizontal",hidden:!n,children:[(0,D.jsx)(v.Z,{id:"".concat(c,",").concat(s,",1"),name:"editSubCategory",variant:"outline-secondary",onClick:P,children:"\u270e"}),(0,D.jsx)(v.Z,{id:"".concat(c,",").concat(s,",2"),name:"editCategoryImage",variant:"outline-info",className:"ms-auto",onClick:P,children:"\ud83d\uddbc\ufe0f"}),(0,D.jsx)(v.Z,{id:"".concat(c,",").concat(s,",3"),name:"deleteSubCategory",variant:"outline-danger",className:"ms-auto",onClick:P,children:"\ud83d\uddd1\ufe0f"})]})]})]},s)},de=g.ZP.section($||($=(0,s.Z)(["\n  padding: 30px 0;\n  border-top: 1px solid #eee;\n"]))),fe=g.ZP.div(ee||(ee=(0,s.Z)(["\n  margin-bottom: 20px;\n\n  h2 {\n    font-weight: bold;\n    display: inline-block;\n  }\n\n  h3 {\n    color: #333;\n    font-weight: 600;\n    display: inline-block;\n  }\n\n  span {\n    font-size: 18px;\n  }\n\n  button {\n    width: 100px;\n  }\n"]))),pe=function(e){var n=e.isEdit,r=e.categoryData,c=e.setCategoryData,s=(0,d.sJ)(f.F),l=(0,u.useRef)(null),g=(0,p.d)().openModal,h=(0,b.p)().openToast,Z=function(){var e=(0,o.Z)((0,t.Z)().mark((function e(n){var o,u,d,f,p,b,m,v,g,Z=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d=Z.length>1&&void 0!==Z[1]?Z[1]:-1,f=null!==(o=null===(u=l.current)||void 0===u?void 0:u.value)&&void 0!==o?o:"",p=s.uid,b=(0,a.Z)(r),p){e.next=6;break}return e.abrupt("return",h("Error","Using corrupt data.","danger"));case 6:if(!n.includes("add")&&!n.includes("delete")||-1!==d){e.next=8;break}return e.abrupt("return",h("Error","Using corrupt data.","danger"));case 8:if(!n.includes("add")&&!n.includes("edit")){e.next=28;break}if(f){e.next=11;break}return e.abrupt("return",h("Error","Using corrupt data.","danger"));case 11:m=(0,i.Z)(r),e.prev=12,m.s();case 14:if((v=m.n()).done){e.next=20;break}if(g=v.value,!(n.includes("Main")&&g.mainField===f||g.subField.includes(f))){e.next=18;break}return e.abrupt("return",h("Error","You entered duplicated category name.","warning"));case 18:e.next=14;break;case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(12),m.e(e.t0);case 25:return e.prev=25,m.f(),e.finish(25);case 28:console.log(n),e.prev=29,e.t1=n,e.next="addSubCategory"===e.t1?33:"editMainCategory"===e.t1?39:"deleteMainCategory"===e.t1?44:48;break;case 33:return e.next=35,(0,x.mR)(r[d],f,p);case 35:return b[d].subField.push(f),b[d].thumbnailLink.push(""),c(b),e.abrupt("break",49);case 39:return e.next=41,(0,x.FH)(r.map((function(e,n){return n===d?f:e.mainField})),r[d],f,p);case 41:return b[d]=(0,k.Z)((0,k.Z)({},b[d]),{},{mainField:f}),c(b),e.abrupt("break",49);case 44:return e.next=46,(0,x.YO)(r[d].mainField,p);case 46:return c((function(e){return e.filter((function(e){return e.mainField!==r[d].mainField}))})),e.abrupt("break",49);case 48:return e.abrupt("return");case 49:e.next=55;break;case 51:e.prev=51,e.t2=e.catch(29),console.log(e.t2),h("Error","Category edit failed.","danger");case 55:case"end":return e.stop()}}),e,null,[[12,22,25,28],[29,51]])})));return function(n){return e.apply(this,arguments)}}(),y=function(e){var n,t,a=e.target,i=null!==(n=a.id.split(",").map((function(e){return Number(e)})))&&void 0!==n?n:[],o="",c=function(){};switch(a.name){case"addSubCategory":o="Add sub category",t=oe(l),c=function(){Z("addSubCategory",i[0])};break;case"editMainCategory":o="Edit category",t=oe(l,r[i[0]].mainField),c=function(){Z("editMainCategory",i[0])};break;case"deleteMainCategory":o="Warning",t="If you really want to delete this category?",c=function(){Z("deleteMainCategory",i[0])};break;default:return}g(o,t,c,!0,"primary")};return(0,D.jsx)(C.Z,{sm:!0,children:r.map((function(e,t){return(0,D.jsxs)(de,{children:[(0,D.jsx)(fe,{children:(0,D.jsxs)(m.Z,{direction:"horizontal",gap:1,children:[(0,D.jsx)("h3",{children:e.mainField}),(0,D.jsxs)("span",{className:"text-secondary",children:["(",e.subField.length,")"]}),n?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(v.Z,{id:"".concat(t,",1"),name:"addSubCategory",variant:"outline-primary",className:"ms-auto",onClick:y,children:"Add"}),(0,D.jsx)(v.Z,{id:"".concat(t,",2"),name:"editMainCategory",variant:"outline-secondary",onClick:y,children:"Edit"}),(0,D.jsx)(v.Z,{id:"".concat(t,",3"),name:"deleteMainCategory",variant:"danger",onClick:y,children:"Delete"})]}):null]})}),e.subField.map((function(a,i){return(0,D.jsx)(le,{isEdit:n,imgLink:e.thumbnailLink[i],mainID:t,subID:i,categoryData:r,setCategoryData:c},i)}))]},t)}))})},be=(0,g.ZP)(m.Z)(ne||(ne=(0,s.Z)(["\n  padding: 0 30px;\n  margin: 30px;\n"]))),me=g.ZP.div(re||(re=(0,s.Z)(["\n  margin-bottom: 20px;\n\n  h2 {\n    font-weight: bold;\n    display: inline-block;\n  }\n\n  h3 {\n    color: #333;\n    font-weight: 600;\n    display: inline-block;\n  }\n\n  span {\n    font-size: 18px;\n  }\n\n  button {\n    width: 100px;\n  }\n"]))),ve=function(){var e=(0,d.sJ)(f.F),n=(0,u.useState)(!1),r=(0,c.Z)(n,2),s=r[0],g=r[1],k=(0,l.bx)(),C=(0,c.Z)(k,2),j=C[0],w=C[1],N=(0,u.useRef)(null),F=(0,l.UO)(),E=(0,p.d)().openModal,P=(0,b.p)().openToast;(0,u.useEffect)((function(){if(!F.userID)throw console.log("no params");(0,h.d3)(F.userID).then((function(e){(0,x.AT)(e).then((function(e){return w(e)}))})).catch((function(){P("Warning","Category loading failed","warning")}))}),[]);var T=function(){var n=(0,o.Z)((0,t.Z)().mark((function n(){var r,o,c,s,u,l;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c=null!==(r=null===(o=N.current)||void 0===o?void 0:o.value)&&void 0!==r?r:"",(s=e.uid)&&c){n.next=4;break}return n.abrupt("return",P("Error","Using corrupt data.","danger"));case 4:u=(0,i.Z)(j),n.prev=5,u.s();case 7:if((l=u.n()).done){n.next=13;break}if(l.value.mainField!==c){n.next=11;break}return n.abrupt("return",P("Error","You entered duplicated category name.","warning"));case 11:n.next=7;break;case 13:n.next=18;break;case 15:n.prev=15,n.t0=n.catch(5),u.e(n.t0);case 18:return n.prev=18,u.f(),n.finish(18);case 21:return n.prev=21,n.next=24,(0,x.Ok)(c,s);case 24:w((function(e){return[].concat((0,a.Z)(e),[{mainField:c,subField:[],thumbnailLink:[]}])})),n.next=31;break;case 27:n.prev=27,n.t1=n.catch(21),console.log(n.t1),P("Error","Category add failed.","danger");case 31:case"end":return n.stop()}}),n,null,[[5,15,18,21],[21,27]])})));return function(){return n.apply(this,arguments)}}();return(0,D.jsxs)(be,{className:"PostCategoryList",children:[(0,D.jsx)(Z.Z,{}),(0,D.jsx)(y.Z,{}),(0,D.jsx)(me,{children:(0,D.jsxs)(m.Z,{direction:"horizontal",gap:1,children:[(0,D.jsx)("h2",{children:"Categories"}),(0,D.jsxs)("span",{className:"text-primary",children:["(",j.length,")"]}),s?(0,D.jsx)(v.Z,{name:"addMainCategory",className:"ms-auto",variant:"outline-primary",onClick:function(){var e=oe(N);E("Add category",e,(function(){T()}),!0)},children:"Add"}):null,(0,D.jsx)(v.Z,{className:s?"":"ms-auto",onClick:function(){g((function(e){return!e}))},children:s?"Complete":"Edit"})]})}),(0,D.jsx)(pe,{isEdit:s,categoryData:j,setCategoryData:w})]})}},3167:function(e,n,r){var t,a=r(168),i=(r(7313),r(6968)),o=r(1921),c=r(244),s=r(6417),u=(0,c.ZP)(i.Z)(t||(t=(0,a.Z)(["\n  position: absolute;\n  top: 70px;\n  right: 40px;\n  z-index: 5;\n"])));n.Z=function(){var e=(0,o.p)(),n=e.toastDataState,r=e.closeToast;return(0,s.jsxs)(u,{onClose:function(){r()},show:n.isOpen,bg:n.background,delay:3e3,autohide:!0,children:[(0,s.jsx)(i.Z.Header,{closeButton:!1,children:(0,s.jsx)("strong",{className:"me-auto",children:n.title})}),(0,s.jsx)(i.Z.Body,{children:n.content})]})}},1921:function(e,n,r){r.d(n,{p:function(){return s}});var t=r(1413),a=r(9439),i=r(7313),o=r(78),c=(0,o.cn)({key:"toastState",default:{isOpen:!1,title:"",content:"",background:"primary"}}),s=function(){var e=(0,o.FV)(c),n=(0,a.Z)(e,2),r=n[0],s=n[1];return{toastDataState:r,openToast:(0,i.useCallback)((function(e,n,r){s({isOpen:!0,title:e,content:n,background:null!==r&&void 0!==r?r:"primary"})}),[s]),closeToast:(0,i.useCallback)((function(){s((function(e){return(0,t.Z)((0,t.Z)({},e),{},{isOpen:!1})}))}),[s])}}},1616:function(e,n,r){r.d(n,{r:function(){return p}});var t=r(9439),a=r(1413),i=r(5987),o=r(6123),c=r.n(o),s=r(7313),u=r(8524),l=r(6417),d=["as","bsPrefix","className"],f=["className"];function p(e){var n=e.as,r=e.bsPrefix,t=e.className,o=(0,i.Z)(e,d);r=(0,u.vE)(r,"col");var s=(0,u.pi)(),l=(0,u.zG)(),f=[],p=[];return s.forEach((function(e){var n,t,a,i=o[e];delete o[e],"object"===typeof i&&null!=i?(n=i.span,t=i.offset,a=i.order):n=i;var c=e!==l?"-".concat(e):"";n&&f.push(!0===n?"".concat(r).concat(c):"".concat(r).concat(c,"-").concat(n)),null!=a&&p.push("order".concat(c,"-").concat(a)),null!=t&&p.push("offset".concat(c,"-").concat(t))})),[(0,a.Z)((0,a.Z)({},o),{},{className:c().apply(void 0,[t].concat(f,p))}),{as:n,bsPrefix:r,spans:f}]}var b=s.forwardRef((function(e,n){var r=p(e),o=(0,t.Z)(r,2),s=o[0],u=s.className,d=(0,i.Z)(s,f),b=o[1],m=b.as,v=void 0===m?"div":m,g=b.bsPrefix,h=b.spans;return(0,l.jsx)(v,(0,a.Z)((0,a.Z)({},d),{},{ref:n,className:c()(u,!h.length&&g)}))}));b.displayName="Col",n.Z=b},8648:function(e,n,r){r.d(n,{Z:function(){return m}});var t=r(3433),a=r(1413),i=r(5987),o=r(6123),c=r.n(o),s=r(7313),u=r(8524),l=r(9439);function d(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.Hz,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u.cs,t=[];return Object.entries(e).forEach((function(e){var a=(0,l.Z)(e,2),i=a[0],o=a[1];null!=o&&("object"===typeof o?n.forEach((function(e){var n=o[e];if(null!=n){var a=e!==r?"-".concat(e):"";t.push("".concat(i).concat(a,"-").concat(n))}})):t.push("".concat(i,"-").concat(o)))})),t}var f=r(6417),p=["as","bsPrefix","className","direction","gap"],b=s.forwardRef((function(e,n){var r=e.as,o=void 0===r?"div":r,s=e.bsPrefix,l=e.className,b=e.direction,m=e.gap,v=(0,i.Z)(e,p);s=(0,u.vE)(s,"horizontal"===b?"hstack":"vstack");var g=(0,u.pi)(),h=(0,u.zG)();return(0,f.jsx)(o,(0,a.Z)((0,a.Z)({},v),{},{ref:n,className:c().apply(void 0,[l,s].concat((0,t.Z)(d({gap:m},g,h))))}))}));b.displayName="Stack";var m=b},6968:function(e,n,r){r.d(n,{Z:function(){return D}});var t=r(1413),a=r(5987),i=r(7313),o=r(6123),c=r.n(o),s=r(7901),u=r(2891),l=Math.pow(2,31)-1;function d(e,n,r){var t=r-Date.now();e.current=t<=l?setTimeout(n,t):setTimeout((function(){return d(e,n,r)}),l)}function f(){var e=(0,s.Z)(),n=(0,i.useRef)();return(0,u.Z)((function(){return clearTimeout(n.current)})),(0,i.useMemo)((function(){var r=function(){return clearTimeout(n.current)};return{set:function(t,a){void 0===a&&(a=0),e()&&(r(),a<=l?n.current=setTimeout(t,a):d(n,t,Date.now()+a))},clear:r}}),[])}var p,b=r(4942),m=r(8588),v=r(7131),g=r(6417),h=(p={},(0,b.Z)(p,m.d0,"showing"),(0,b.Z)(p,m.Ix,"showing show"),p),x=i.forwardRef((function(e,n){return(0,g.jsx)(v.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n,transitionClasses:h}))}));x.displayName="ToastFade";var Z=x,y=r(3813),k=r(8524),C=r(2729),j=i.createContext({onClose:function(){}}),w=["bsPrefix","closeLabel","closeVariant","closeButton","className","children"],N=i.forwardRef((function(e,n){var r=e.bsPrefix,o=e.closeLabel,s=e.closeVariant,u=e.closeButton,l=e.className,d=e.children,f=(0,a.Z)(e,w);r=(0,k.vE)(r,"toast-header");var p=(0,i.useContext)(j),b=(0,y.Z)((function(e){null==p||null==p.onClose||p.onClose(e)}));return(0,g.jsxs)("div",(0,t.Z)((0,t.Z)({ref:n},f),{},{className:c()(r,l),children:[d,u&&(0,g.jsx)(C.Z,{"aria-label":o,variant:s,onClick:b,"data-dismiss":"toast"})]}))}));N.displayName="ToastHeader",N.defaultProps={closeLabel:"Close",closeButton:!0};var F=N,E=(0,r(8864).Z)("toast-body"),P=["bsPrefix","className","transition","show","animation","delay","autohide","onClose","bg"],T=i.forwardRef((function(e,n){var r=e.bsPrefix,o=e.className,s=e.transition,u=void 0===s?Z:s,l=e.show,d=void 0===l||l,p=e.animation,b=void 0===p||p,m=e.delay,v=void 0===m?5e3:m,h=e.autohide,x=void 0!==h&&h,y=e.onClose,C=e.bg,w=(0,a.Z)(e,P);r=(0,k.vE)(r,"toast");var N=(0,i.useRef)(v),F=(0,i.useRef)(y);(0,i.useEffect)((function(){N.current=v,F.current=y}),[v,y]);var E=f(),T=!(!x||!d),D=(0,i.useCallback)((function(){T&&(null==F.current||F.current())}),[T]);(0,i.useEffect)((function(){E.set(D,N.current)}),[E,D]);var S=(0,i.useMemo)((function(){return{onClose:y}}),[y]),I=!(!u||!b),R=(0,g.jsx)("div",(0,t.Z)((0,t.Z)({},w),{},{ref:n,className:c()(r,o,C&&"bg-".concat(C),!I&&(d?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"}));return(0,g.jsx)(j.Provider,{value:S,children:I&&u?(0,g.jsx)(u,{in:d,unmountOnExit:!0,children:R}):R})}));T.displayName="Toast";var D=Object.assign(T,{Body:E,Header:F})}}]);