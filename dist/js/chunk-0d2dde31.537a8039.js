(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d2dde31"],{4916:function(e,s,a){},"7b49":function(e,s,a){"use strict";var t=a("4916"),n=a.n(t);n.a},b410:function(e,s,a){e.exports=a.p+"img/login-logo.c99fbfa9.png"},c6f7:function(e,s,a){"use strict";a.r(s);var t=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"login"},[e._m(0),a("div",{staticClass:"wrapper"},[a("div",{staticClass:"container"},[a("div",{staticClass:"login-form"},[e._m(1),a("div",{staticClass:"input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"请输入帐号"},domProps:{value:e.username},on:{input:function(s){s.target.composing||(e.username=s.target.value)}}})]),a("div",{staticClass:"input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:e.password},on:{input:function(s){s.target.composing||(e.password=s.target.value)}}})]),a("div",{staticClass:"btn-box"},[a("a",{staticClass:"btn",attrs:{href:"javascript:;"},on:{click:e.login}},[e._v("登录")])]),a("div",{staticClass:"tips"},[a("div",{staticClass:"sms",on:{click:e.register}},[e._v("手机短信登录/注册")]),e._m(2)])])])]),a("NavFooter")],1)},n=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"container"},[t("a",{attrs:{href:"#/index"}},[t("img",{attrs:{src:a("b410"),alt:""}})])])},function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("h3",[a("span",{staticClass:"checked"},[e._v("帐号登录")]),a("span",{staticClass:"sep-line"},[e._v("|")]),a("span",[e._v("扫码登录")])])},function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"reg"},[e._v("立即注册"),a("span",[e._v("|")]),e._v("忘记密码？")])}],i=a("5530"),r=a("2f62"),o=a("f091"),c={name:"login",components:{NavFooter:o["a"]},data:function(){return{username:"jack",password:"jack",userId:"",fakeCookie:{id:7,username:"jack",password:"",email:"jack@163.com",phone:null,question:null,answer:null,role:0,createTime:1567429971e3,updateTime:1567429971e3}}},methods:Object(i["a"])(Object(i["a"])({login:function(){var e=this.fakeCookie;this.$cookie.set("userId",e.id,{expires:"Session"}),this.saveUserName(e.username),this.$router.push({name:"index",params:{from:"login"}})}},Object(r["b"])(["saveUserName"])),{},{register:function(){var e=this;this.axios.post("/user/register",{username:"admin1",password:"admin1",email:"admin1@163.com"}).then((function(){e.$message.success("注册成功")}))}})},l=c,u=(a("7b49"),a("2877")),m=Object(u["a"])(l,t,n,!1,null,null,null);s["default"]=m.exports}}]);