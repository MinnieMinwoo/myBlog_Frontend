"use strict";(self.webpackChunkmyblog_frontend=self.webpackChunkmyblog_frontend||[]).push([[775],{1444:function(n,e,t){var r=t(7313),o="undefined"!==typeof t.g&&t.g.navigator&&"ReactNative"===t.g.navigator.product,i="undefined"!==typeof document;e.Z=i||o?r.useLayoutEffect:r.useEffect},3979:function(n,e,t){t.d(e,{Z:function(){return j}});var r=t(9439),o=t(4987);function i(n){void 0===n&&(n=(0,o.Z)());try{var e=n.activeElement;return e&&e.nodeName?e:null}catch(t){return n.body}}function a(n,e){return n.contains?n.contains(e):n.compareDocumentPosition?n===e||!!(16&n.compareDocumentPosition(e)):void 0}var u=t(8532),s=t(9190),c=t(7313),l=t(1168),d=t(7901),f=t(2891);var v=t(3813),m=t(4259),h=(0,c.createContext)(u.Z?window:void 0);h.Provider;function g(){return(0,c.useContext)(h)}var p=function(n,e){return u.Z?null==n?(e||(0,o.Z)()).body:("function"===typeof n&&(n=n()),n&&"current"in n&&(n=n.current),n&&("nodeType"in n||n.getBoundingClientRect)?n:null):null};var b=t(1369),y=t(1444);var Z=function(n){var e=n.children,t=n.in,r=n.onExited,o=n.mountOnEnter,i=n.unmountOnExit,a=(0,c.useRef)(null),u=(0,c.useRef)(t),s=(0,v.Z)(r);(0,c.useEffect)((function(){t?u.current=!0:s(a.current)}),[t,s]);var l=(0,b.Z)(a,e.ref),d=(0,c.cloneElement)(e,{ref:l});return t?d:i||!u.current&&o?null:d},E=t(6417);function k(n){var e=n.children,t=n.in,o=n.onExited,i=n.onEntered,a=n.transition,u=(0,c.useState)(!t),s=(0,r.Z)(u,2),l=s[0],d=s[1];t&&l&&d(!1);var f=function(n){var e=n.in,t=n.onTransition,r=(0,c.useRef)(null),o=(0,c.useRef)(!0),i=(0,v.Z)(t);return(0,y.Z)((function(){if(r.current){var n=!1;return i({in:e,element:r.current,initial:o.current,isStale:function(){return n}}),function(){n=!0}}}),[e,i]),(0,y.Z)((function(){return o.current=!1,function(){o.current=!0}}),[]),r}({in:!!t,onTransition:function(n){Promise.resolve(a(n)).then((function(){n.isStale()||(n.in?null==i||i(n.element,n.initial):(d(!0),null==o||o(n.element)))}),(function(e){throw n.in||d(!0),e}))}}),m=(0,b.Z)(f,e.ref);return l&&!t?null:(0,c.cloneElement)(e,{ref:m})}function x(n,e,t){return n?(0,E.jsx)(n,Object.assign({},t)):e?(0,E.jsx)(k,Object.assign({},t,{transition:e})):(0,E.jsx)(Z,Object.assign({},t))}var w,R=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function N(n){var e=g(),t=n||function(n){return w||(w=new m.Z({ownerDocument:null==n?void 0:n.document})),w}(e),r=(0,c.useRef)({dialog:null,backdrop:null});return Object.assign(r.current,{add:function(){return t.add(r.current)},remove:function(){return t.remove(r.current)},isTopModal:function(){return t.isTopModal(r.current)},setDialogRef:(0,c.useCallback)((function(n){r.current.dialog=n}),[]),setBackdropRef:(0,c.useCallback)((function(n){r.current.backdrop=n}),[])})}var O=(0,c.forwardRef)((function(n,e){var t=n.show,o=void 0!==t&&t,m=n.role,h=void 0===m?"dialog":m,b=n.className,y=n.style,Z=n.children,k=n.backdrop,w=void 0===k||k,O=n.keyboard,j=void 0===O||O,C=n.onBackdropClick,T=n.onEscapeKeyDown,L=n.transition,S=n.runTransition,B=n.backdropTransition,D=n.runBackdropTransition,A=n.autoFocus,F=void 0===A||A,M=n.enforceFocus,P=void 0===M||M,W=n.restoreFocus,H=void 0===W||W,V=n.restoreFocusOptions,I=n.renderDialog,K=n.renderBackdrop,$=void 0===K?function(n){return(0,E.jsx)("div",Object.assign({},n))}:K,z=n.manager,_=n.container,q=n.onShow,G=n.onHide,J=void 0===G?function(){}:G,Q=n.onExit,U=n.onExited,X=n.onExiting,Y=n.onEnter,nn=n.onEntering,en=n.onEntered,tn=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,R),rn=function(n,e){var t=g(),o=(0,c.useState)((function(){return p(n,null==t?void 0:t.document)})),i=(0,r.Z)(o,2),a=i[0],u=i[1];if(!a){var s=p(n);s&&u(s)}return(0,c.useEffect)((function(){e&&a&&e(a)}),[e,a]),(0,c.useEffect)((function(){var e=p(n);e!==a&&u(e)}),[n,a]),a}(_),on=N(z),an=(0,d.Z)(),un=function(n){var e=(0,c.useRef)(null);return(0,c.useEffect)((function(){e.current=n})),e.current}(o),sn=(0,c.useState)(!o),cn=(0,r.Z)(sn,2),ln=cn[0],dn=cn[1],fn=(0,c.useRef)(null);(0,c.useImperativeHandle)(e,(function(){return on}),[on]),u.Z&&!un&&o&&(fn.current=i()),o&&ln&&dn(!1);var vn=(0,v.Z)((function(){if(on.add(),yn.current=(0,s.Z)(document,"keydown",pn),bn.current=(0,s.Z)(document,"focus",(function(){return setTimeout(hn)}),!0),q&&q(),F){var n=i(document);on.dialog&&n&&!a(on.dialog,n)&&(fn.current=n,on.dialog.focus())}})),mn=(0,v.Z)((function(){var n;(on.remove(),null==yn.current||yn.current(),null==bn.current||bn.current(),H)&&(null==(n=fn.current)||null==n.focus||n.focus(V),fn.current=null)}));(0,c.useEffect)((function(){o&&rn&&vn()}),[o,rn,vn]),(0,c.useEffect)((function(){ln&&mn()}),[ln,mn]),(0,f.Z)((function(){mn()}));var hn=(0,v.Z)((function(){if(P&&an()&&on.isTopModal()){var n=i();on.dialog&&n&&!a(on.dialog,n)&&on.dialog.focus()}})),gn=(0,v.Z)((function(n){n.target===n.currentTarget&&(null==C||C(n),!0===w&&J())})),pn=(0,v.Z)((function(n){j&&27===n.keyCode&&on.isTopModal()&&(null==T||T(n),n.defaultPrevented||J())})),bn=(0,c.useRef)(),yn=(0,c.useRef)();if(!rn)return null;var Zn=Object.assign({role:h,ref:on.setDialogRef,"aria-modal":"dialog"===h||void 0},tn,{style:y,className:b,tabIndex:-1}),En=I?I(Zn):(0,E.jsx)("div",Object.assign({},Zn,{children:c.cloneElement(Z,{role:"document"})}));En=x(L,S,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!o,onExit:Q,onExiting:X,onExited:function(){dn(!0),null==U||U.apply(void 0,arguments)},onEnter:Y,onEntering:nn,onEntered:en,children:En});var kn=null;return w&&(kn=$({ref:on.setBackdropRef,onClick:gn}),kn=x(B,D,{in:!!o,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:kn})),(0,E.jsx)(E.Fragment,{children:l.createPortal((0,E.jsxs)(E.Fragment,{children:[kn,En]}),rn)})}));O.displayName="Modal";var j=Object.assign(O,{Manager:m.Z})},4259:function(n,e,t){t.d(e,{Z:function(){return d}});var r=t(3433),o=t(4942),i=t(5671),a=t(3144),u=t(6988);var s,c=(s="modal-open","".concat("data-rr-ui-").concat(s)),l=function(){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ownerDocument,r=e.handleContainerOverflow,o=void 0===r||r,a=e.isRTL,u=void 0!==a&&a;(0,i.Z)(this,n),this.handleContainerOverflow=o,this.isRTL=u,this.modals=[],this.ownerDocument=t}return(0,a.Z)(n,[{key:"getScrollbarWidth",value:function(){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=n.defaultView;return Math.abs(e.innerWidth-n.documentElement.clientWidth)}(this.ownerDocument)}},{key:"getElement",value:function(){return(this.ownerDocument||document).body}},{key:"setModalAttributes",value:function(n){}},{key:"removeModalAttributes",value:function(n){}},{key:"setContainerStyle",value:function(n){var e={overflow:"hidden"},t=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();n.style=(0,o.Z)({overflow:r.style.overflow},t,r.style[t]),n.scrollBarWidth&&(e[t]="".concat(parseInt((0,u.Z)(r,t)||"0",10)+n.scrollBarWidth,"px")),r.setAttribute(c,""),(0,u.Z)(r,e)}},{key:"reset",value:function(){var n=this;(0,r.Z)(this.modals).forEach((function(e){return n.remove(e)}))}},{key:"removeContainerStyle",value:function(n){var e=this.getElement();e.removeAttribute(c),Object.assign(e.style,n.style)}},{key:"add",value:function(n){var e=this.modals.indexOf(n);return-1!==e?e:(e=this.modals.length,this.modals.push(n),this.setModalAttributes(n),0!==e||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),e)}},{key:"remove",value:function(n){var e=this.modals.indexOf(n);-1!==e&&(this.modals.splice(e,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(n))}},{key:"isTopModal",value:function(n){return!!this.modals.length&&this.modals[this.modals.length-1]===n}}]),n}(),d=l},195:function(n,e,t){var r=t(1413),o=t(5987),i=t(7313),a=t(3813),u=t(2729),s=t(321),c=t(6417),l=["closeLabel","closeVariant","closeButton","onHide","children"],d=i.forwardRef((function(n,e){var t=n.closeLabel,d=n.closeVariant,f=n.closeButton,v=n.onHide,m=n.children,h=(0,o.Z)(n,l),g=(0,i.useContext)(s.Z),p=(0,a.Z)((function(){null==g||g.onHide(),null==v||v()}));return(0,c.jsxs)("div",(0,r.Z)((0,r.Z)({ref:e},h),{},{children:[m,f&&(0,c.jsx)(u.Z,{"aria-label":t,variant:d,onClick:p})]}))}));d.defaultProps={closeLabel:"Close",closeButton:!1},e.Z=d},4599:function(n,e,t){t.d(e,{Z:function(){return E},t:function(){return Z}});var r=t(4942),o=t(5671),i=t(3144),a=t(1752),u=t(1120),s=t(136),c=t(7277);var l=t(6988),d=Function.prototype.bind.call(Function.prototype.call,[].slice);function f(n,e){return d(n.querySelectorAll(e))}function v(n,e){return n.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var m,h=t(4259),g=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",p=".sticky-top",b=".navbar-toggler",y=function(n){(0,s.Z)(t,n);var e=(0,c.Z)(t);function t(){return(0,o.Z)(this,t),e.apply(this,arguments)}return(0,i.Z)(t,[{key:"adjustAndStore",value:function(n,e,t){var o=e.style[n];e.dataset[n]=o,(0,l.Z)(e,(0,r.Z)({},n,"".concat(parseFloat((0,l.Z)(e,n))+t,"px")))}},{key:"restore",value:function(n,e){var t=e.dataset[n];void 0!==t&&(delete e.dataset[n],(0,l.Z)(e,(0,r.Z)({},n,t)))}},{key:"setContainerStyle",value:function(n){var e=this;(0,a.Z)((0,u.Z)(t.prototype),"setContainerStyle",this).call(this,n);var r,o,i=this.getElement();if(o="modal-open",(r=i).classList?r.classList.add(o):function(n,e){return n.classList?!!e&&n.classList.contains(e):-1!==(" "+(n.className.baseVal||n.className)+" ").indexOf(" "+e+" ")}(r,o)||("string"===typeof r.className?r.className=r.className+" "+o:r.setAttribute("class",(r.className&&r.className.baseVal||"")+" "+o)),n.scrollBarWidth){var s=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";f(i,g).forEach((function(t){return e.adjustAndStore(s,t,n.scrollBarWidth)})),f(i,p).forEach((function(t){return e.adjustAndStore(c,t,-n.scrollBarWidth)})),f(i,b).forEach((function(t){return e.adjustAndStore(c,t,n.scrollBarWidth)}))}}},{key:"removeContainerStyle",value:function(n){var e=this;(0,a.Z)((0,u.Z)(t.prototype),"removeContainerStyle",this).call(this,n);var r,o,i=this.getElement();o="modal-open",(r=i).classList?r.classList.remove(o):"string"===typeof r.className?r.className=v(r.className,o):r.setAttribute("class",v(r.className&&r.className.baseVal||"",o));var s=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";f(i,g).forEach((function(n){return e.restore(s,n)})),f(i,p).forEach((function(n){return e.restore(c,n)})),f(i,b).forEach((function(n){return e.restore(c,n)}))}}]),t}(h.Z);function Z(n){return m||(m=new y(n)),m}var E=y},7440:function(n,e,t){t.d(e,{Z:function(){return g}});var r=t(1413),o=t(9439),i=t(5987),a=t(6123),u=t.n(a),s=t(7313),c=t(6417),l=["as","disabled"];function d(n){var e=n.tagName,t=n.disabled,r=n.href,o=n.target,i=n.rel,a=n.role,u=n.onClick,s=n.tabIndex,c=void 0===s?0:s,l=n.type;e||(e=null!=r||null!=o||null!=i?"a":"button");var d={tagName:e};if("button"===e)return[{type:l||"button",disabled:t},d];var f=function(n){(t||"a"===e&&function(n){return!n||"#"===n.trim()}(r))&&n.preventDefault(),t?n.stopPropagation():null==u||u(n)};return"a"===e&&(r||(r="#"),t&&(r=void 0)),[{role:null!=a?a:"button",disabled:void 0,tabIndex:t?void 0:c,href:r,target:"a"===e?o:void 0,"aria-disabled":t||void 0,rel:"a"===e?i:void 0,onClick:f,onKeyDown:function(n){" "===n.key&&(n.preventDefault(),f(n))}},d]}var f=s.forwardRef((function(n,e){var t=n.as,r=n.disabled,i=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,l),a=d(Object.assign({tagName:t,disabled:r},i)),u=(0,o.Z)(a,2),s=u[0],f=u[1].tagName;return(0,c.jsx)(f,Object.assign({},i,s,{ref:e}))}));f.displayName="Button";var v=t(8524),m=["as","bsPrefix","variant","size","active","className"],h=s.forwardRef((function(n,e){var t=n.as,a=n.bsPrefix,s=n.variant,l=n.size,f=n.active,h=n.className,g=(0,i.Z)(n,m),p=(0,v.vE)(a,"btn"),b=d((0,r.Z)({tagName:t},g)),y=(0,o.Z)(b,2),Z=y[0],E=y[1].tagName;return(0,c.jsx)(E,(0,r.Z)((0,r.Z)((0,r.Z)({},Z),g),{},{ref:e,className:u()(h,p,f&&"active",s&&"".concat(p,"-").concat(s),l&&"".concat(p,"-").concat(l),g.href&&g.disabled&&"disabled")}))}));h.displayName="Button",h.defaultProps={variant:"primary",active:!1,disabled:!1};var g=h},321:function(n,e,t){var r=t(7313).createContext({onHide:function(){}});e.Z=r},6205:function(n,e,t){var r=t(1413),o=t(7313),i=t(6123),a=t.n(i),u=t(6417);e.Z=function(n){return o.forwardRef((function(e,t){return(0,u.jsx)("div",(0,r.Z)((0,r.Z)({},e),{},{ref:t,className:a()(e.className,n)}))}))}}}]);