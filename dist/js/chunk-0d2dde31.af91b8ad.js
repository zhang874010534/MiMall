(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d2dde31"],{4916:function(s,e,t){},"7b49":function(s,e,t){"use strict";var a=t("4916"),n=t.n(a);n.a},b410:function(s,e,t){s.exports=t.p+"img/login-logo.c99fbfa9.png"},c6f7:function(s,e,t){"use strict";t.r(e);var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"login"},[s._m(0),t("div",{staticClass:"wrapper"},[t("div",{staticClass:"container"},[t("div",{staticClass:"login-form"},[s._m(1),t("div",{staticClass:"input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.username,expression:"username"}],attrs:{type:"text",placeholder:"请输入帐号"},domProps:{value:s.username},on:{input:function(e){e.target.composing||(s.username=e.target.value)}}})]),t("div",{staticClass:"input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:s.password},on:{input:function(e){e.target.composing||(s.password=e.target.value)}}})]),t("div",{staticClass:"btn-box"},[t("a",{staticClass:"btn",attrs:{href:"javascript:;"},on:{click:s.login}},[s._v("登录")])]),t("div",{staticClass:"tips"},[t("div",{staticClass:"sms",on:{click:s.register}},[s._v("手机短信登录/注册")]),s._m(2)])])])]),t("NavFooter")],1)},n=[function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{staticClass:"container"},[a("a",{attrs:{href:"/#/index"}},[a("img",{attrs:{src:t("b410"),alt:""}})])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("h3",[t("span",{staticClass:"checked"},[s._v("帐号登录")]),t("span",{staticClass:"sep-line"},[s._v("|")]),t("span",[s._v("扫码登录")])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"reg"},[s._v("立即注册"),t("span",[s._v("|")]),s._v("忘记密码？")])}],i=t("5530"),r=t("2f62"),o=t("f091"),c={name:"login",components:{NavFooter:o["a"]},data:function(){return{username:"",password:"",userId:""}},methods:Object(i["a"])(Object(i["a"])({login:function(){var s=this,e=this.username,t=this.password;this.axios.post("/user/login",{username:e,password:t}).then((function(e){s.$cookie.set("userId",e.id,{expires:"Session"}),s.saveUserName(e.username),s.$router.push({name:"index",params:{from:"login"}})}))}},Object(r["b"])(["saveUserName"])),{},{register:function(){var s=this;this.axios.post("/user/register",{username:"admin1",password:"admin1",email:"admin1@163.com"}).then((function(){s.$message.success("注册成功")}))}})},l=c,u=(t("7b49"),t("2877")),p=Object(u["a"])(l,a,n,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-0d2dde31.af91b8ad.js.map