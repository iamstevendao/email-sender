(function(e){function t(t){for(var r,n,i=t[0],c=t[1],l=t[2],u=0,m=[];u<i.length;u++)n=i[u],a[n]&&m.push(a[n][0]),a[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(m.length)m.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],r=!0,i=1;i<s.length;i++){var c=s[i];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=n(n.s=s[0]))}return e}var r={},a={app:0},o=[];function n(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=r,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"3fcf":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var r=s("2b0e"),a=s("5f5b"),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],i=s("2877"),c={},l=Object(i["a"])(c,o,n,!1,null,null,null),d=l.exports,u=s("8c4f"),m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row"},[e._m(0),s("div",{staticClass:"offset-sm-2 col-sm-8 form"},[s("div",{staticClass:"row"},[e._m(1),s("div",{staticClass:"col-sm-10"},[s("b-form-input",{attrs:{name:"from",state:e.state.from,required:"",autofocus:"","aria-describedby":"feedback-from",placeholder:"example@email.com"},model:{value:e.model.from,callback:function(t){e.$set(e.model,"from",t)},expression:"model.from"}}),s("b-form-invalid-feedback",{attrs:{id:"feedback-from"}},[e._v("Enter an valid email address")])],1)]),s("div",{staticClass:"row"},[e._m(2),s("div",{staticClass:"col-sm-10"},[s("b-form-input",{attrs:{name:"to",state:e.state.to,required:"","aria-describedby":"feedback-to",placeholder:"example1@email.com, example2@email.com"},model:{value:e.model.to,callback:function(t){e.$set(e.model,"to",t)},expression:"model.to"}}),s("b-form-invalid-feedback",{attrs:{id:"feedback-to"}},[e._v("Enter one or more valid email address(es), separate by comma (,)")])],1)]),s("div",{staticClass:"row"},[e._m(3),s("div",{staticClass:"col-sm-10"},[s("b-form-input",{attrs:{name:"cc",state:e.state.cc,"aria-describedby":"feedback-cc"},model:{value:e.model.cc,callback:function(t){e.$set(e.model,"cc",t)},expression:"model.cc"}}),s("b-form-invalid-feedback",{attrs:{id:"feedback-cc"}},[e._v("Enter one or more valid email address(es), separate by comma (,)")])],1)]),s("div",{staticClass:"row"},[e._m(4),s("div",{staticClass:"col-sm-10"},[s("b-form-input",{attrs:{name:"bcc",state:e.state.bcc,"aria-describedby":"feedback-bcc"},model:{value:e.model.bcc,callback:function(t){e.$set(e.model,"bcc",t)},expression:"model.bcc"}}),s("b-form-invalid-feedback",{attrs:{id:"feedback-bcc"}},[e._v("Enter one or more valid email address(es), separate by comma (,)")])],1)]),s("div",{staticClass:"row"},[e._m(5),s("div",{staticClass:"col-sm-10"},[s("b-form-input",{attrs:{name:"subject",state:e.state.subject,"aria-describedby":"feedback-subject"},model:{value:e.model.subject,callback:function(t){e.$set(e.model,"subject",t)},expression:"model.subject"}}),s("b-form-invalid-feedback",{attrs:{id:"feedback-subject"}},[e._v("Subject is required")])],1)]),s("div",{staticClass:"row"},[e._m(6),s("div",{staticClass:"col-sm-10"},[s("b-form-textarea",{attrs:{name:"content",state:e.state.content,rows:"5","aria-describedby":"feedback-content"},model:{value:e.model.content,callback:function(t){e.$set(e.model,"content",t)},expression:"model.content"}}),s("b-form-invalid-feedback",{attrs:{id:"feedback-content"}},[e._v("Content is required")])],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12 text-center"},[e.showError&&e.errorText?s("p",{staticClass:"text-danger"},[e._v(e._s(e.errorText))]):e._e(),s("b-button",{attrs:{type:"submit",variant:"primary",disabled:e.isSending},on:{click:e.submit}},[e._v(e._s(e.isSending?"Sending":"Send"))])],1)]),e._m(7)]),s("b-modal",{ref:"statusModal",attrs:{title:"Status"}},[s("view-status",{attrs:{response:e.response}})],1)],1)},f=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-sm-12",staticStyle:{"margin-top":"30px"}},[s("h2",{staticClass:"text-center"},[e._v("Send an email")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-sm-2"},[s("label",{attrs:{for:"from"}},[s("b",[e._v("From:")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-sm-2"},[s("label",{attrs:{for:"to"}},[s("b",[e._v("To:")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-sm-2"},[s("label",{staticClass:"text-muted",attrs:{for:"cc"}},[e._v("CC:")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-sm-2"},[s("label",{staticClass:"text-muted",attrs:{for:"bcc"}},[e._v("BCC:")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-sm-2"},[s("label",{attrs:{for:"subject"}},[s("b",[e._v("Subject:")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-sm-2"},[s("label",{attrs:{for:"content"}},[s("b",[e._v("Content:")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticStyle:{"text-align":"right","margin-top":"20px"}},[e._v("Go to"),s("span",{staticStyle:{"font-size":"15px","margin-left":"5px"}},[s("a",{attrs:{href:"https://github.com/iamstevendao/email-sender"}},[e._v("Github")]),e._v(".")])])}],b=(s("ac6a"),s("456d"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"text-center"},[s("h5",[e._v(e._s(e.header))]),e.error?s("p",[e._v(e._s(e.error))]):e._e()])}),p=[],v={name:"Status",props:{response:{type:Object,default:function(){return{}}}},computed:{header:function(){return this.response.success?"Email sent":"Failed to send"},error:function(){return this.response.success?"":JSON.stringify(this.response.errors)}}},h=v,_=Object(i["a"])(h,b,p,!1,null,null,null),C=_.exports,y={name:"Home",components:{ViewStatus:C},data:function(){return{response:{},isSending:!1,showError:!1,model:{from:"",to:"",cc:"",bcc:"",subject:"",content:""}}},computed:{state:function(){return{from:this.model.from&&this.isEmailValid(this.model.from),to:this.model.to&&this.isEmailValid(this.model.to,!0),cc:this.model.cc&&this.isEmailValid(this.model.cc,!0),bcc:this.model.bcc&&this.isEmailValid(this.model.bcc,!0)}},errorText:function(){var e=this;return this.model.from?this.model.to?this.model.subject?this.model.content?Object.keys(this.state).some(function(t){return!1===e.state[t]})?"One of the fields is invalid":"":'"Content" is required':'"Subject" is required':'"To" is required':'"From" is required'}},methods:{isEmailValid:function(e,t){var s=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,r=/^(\s?[^\s,]+@[^\s,]+\.[^\s,]+\s?,)*(\s?[^\s,]+@[^\s,]+\.[^\s,]+)$/,a=t?r:s;return a.test(String(e).toLowerCase())},submit:function(){var e=this;this.errorText?this.showError=!0:(this.isSending=!0,fetch("https://email-sender-challenge.herokuapp.com/",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(this.model)}).then(function(e){return e.json()}).then(function(t){e.response=t,e.isSending=!1,e.$refs.statusModal.show()}).catch(function(t){e.response=t,e.isSending=!1,e.$refs.statusModal.show()}))}}},x=y,g=(s("7b89"),Object(i["a"])(x,m,f,!1,null,"73542854",null)),k=g.exports;r["default"].use(u["a"]);var j=new u["a"]({routes:[{path:"/",name:"home",component:k}]});s("f9e3"),s("2dd8");r["default"].config.productionTip=!1,r["default"].use(a["a"]),new r["default"]({router:j,render:function(e){return e(d)}}).$mount("#app")},"7b89":function(e,t,s){"use strict";var r=s("3fcf"),a=s.n(r);a.a}});
//# sourceMappingURL=app.fd8d410a.js.map