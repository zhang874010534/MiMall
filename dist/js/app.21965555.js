(function(t){function e(e){for(var i,s,c=e[0],o=e[1],l=e[2],u=0,d=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);m&&m(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},s={app:0},n={app:0},r=[];function c(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-0d2dde31":"9e317a98","chunk-0ea2f352":"a3d49642","chunk-0f37bd62":"eed4ff8e","chunk-254cc950":"d3f8a6fc","chunk-2d0bce61":"0e092607","chunk-74fa1a02":"12aafabc","chunk-b8a74e4e":"3eb1c965","chunk-e566b432":"3578f450","chunk-fb562456":"0a80c54e"}[t]+".js"}function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a={"chunk-0d2dde31":1,"chunk-0ea2f352":1,"chunk-0f37bd62":1,"chunk-254cc950":1,"chunk-74fa1a02":1,"chunk-b8a74e4e":1,"chunk-e566b432":1,"chunk-fb562456":1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise((function(e,a){for(var i="css/"+({}[t]||t)+"."+{"chunk-0d2dde31":"52f8430c","chunk-0ea2f352":"e4731e9a","chunk-0f37bd62":"b26370e2","chunk-254cc950":"4fac7a40","chunk-2d0bce61":"31d6cfe0","chunk-74fa1a02":"66eb3f93","chunk-b8a74e4e":"8b48ed71","chunk-e566b432":"99eb2a59","chunk-fb562456":"4cf0bd69"}[t]+".css",n=o.p+i,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===i||u===n))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===i||u===n)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var i=e&&e.target&&e.target.src||n,r=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete s[t],m.parentNode.removeChild(m),a(r)},m.href=n;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){s[t]=0})));var i=n[t];if(0!==i)if(i)e.push(i[2]);else{var r=new Promise((function(e,a){i=n[t]=[e,a]}));e.push(i[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=c(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(m);var a=n[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",d.name="ChunkLoadError",d.type=i,d.request=s,a[1](d)}n[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0025":function(t,e,a){},"30db":function(t,e,a){"use strict";var i=a("0025"),s=a.n(i);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("d3b7"),a("0fb7"),a("450d");var i=a("f529"),s=a.n(i),n=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2b0e")),r=a("8c4f"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav-header"),a("router-view"),a("NavFooter")],1)},o=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"nav-topbar"},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"topbar-user"},[t.username?a("a",{attrs:{href:"javascript:;"}},[t._v(t._s(t.username))]):t._e(),t.username?t._e():a("a",{attrs:{href:"javascript:;"},on:{click:t.login}},[t._v("登录")]),t.username?a("a",{attrs:{href:"javascript:;"},on:{click:t.logout}},[t._v("退出")]):t._e(),t.username?a("a",{attrs:{href:"#/order/list"}},[t._v("我的订单")]):t._e(),a("a",{staticClass:"my-cart",attrs:{href:"javascript:;"},on:{click:t.goToCart}},[a("span",{staticClass:"icon-cart"}),t._v("购物车("+t._s(t.cartCount)+")")])])])]),a("div",{staticClass:"nav-header"},[a("div",{staticClass:"container"},[t._m(1),a("div",{staticClass:"header-menu"},[a("div",{staticClass:"item-menu"},[a("span",[t._v("小米手机")]),a("div",{staticClass:"children"},[a("ul",t._l(t.phoneList,(function(e,i){return a("li",{key:i,staticClass:"product"},[a("a",{attrs:{href:"/#/product/"+e.id,target:"_blank"}},[a("div",{staticClass:"pro-img"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.mainImage,expression:"item.mainImage"}],attrs:{alt:e.subtitle}})]),a("div",{staticClass:"pro-name"},[t._v(t._s(e.name))]),a("div",{staticClass:"pro-price"},[t._v(t._s(t._f("currency")(e.price)))])])])})),0)])]),t._m(2),a("div",{staticClass:"item-menu"},[a("span",[t._v("电视")]),a("div",{staticClass:"children"},[a("ul",[a("li",{staticClass:"product"},[a("a",{attrs:{href:"",target:"_blank"}},[a("div",{staticClass:"pro-img"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"imgs/nav-img/nav-3-1.jpg",expression:"'imgs/nav-img/nav-3-1.jpg'"}],attrs:{alt:""}})]),a("div",{staticClass:"pro-name"},[t._v("小米壁画电视 65英寸")]),a("div",{staticClass:"pro-price"},[t._v("6999元")])])]),a("li",{staticClass:"product"},[a("a",{attrs:{href:"",target:"_blank"}},[a("div",{staticClass:"pro-img"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"imgs/nav-img/nav-3-2.jpg",expression:"'imgs/nav-img/nav-3-2.jpg'"}],attrs:{alt:""}})]),a("div",{staticClass:"pro-name"},[t._v("小米全面屏电视E55A")]),a("div",{staticClass:"pro-price"},[t._v("1999元")])])]),a("li",{staticClass:"product"},[a("a",{attrs:{href:"",target:"_blank"}},[a("div",{staticClass:"pro-img"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"imgs/nav-img/nav-3-3.png",expression:"'imgs/nav-img/nav-3-3.png'"}],attrs:{alt:""}})]),a("div",{staticClass:"pro-name"},[t._v("小米电视4A 32英寸")]),a("div",{staticClass:"pro-price"},[t._v("699元")])])]),a("li",{staticClass:"product"},[a("a",{attrs:{href:"",target:"_blank"}},[a("div",{staticClass:"pro-img"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"imgs/nav-img/nav-3-4.jpg",expression:"'imgs/nav-img/nav-3-4.jpg'"}],attrs:{alt:""}})]),a("div",{staticClass:"pro-name"},[t._v("小米电视4A 55英寸")]),a("div",{staticClass:"pro-price"},[t._v("1799元")])])]),a("li",{staticClass:"product"},[a("a",{attrs:{href:"",target:"_blank"}},[a("div",{staticClass:"pro-img"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"imgs/nav-img/nav-3-5.jpg",expression:"'imgs/nav-img/nav-3-5.jpg'"}],attrs:{alt:""}})]),a("div",{staticClass:"pro-name"},[t._v("小米电视4A 65英寸")]),a("div",{staticClass:"pro-price"},[t._v("2699元")])])]),a("li",{staticClass:"product"},[a("a",{attrs:{href:"",target:"_blank"}},[a("div",{staticClass:"pro-img"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"imgs/nav-img/nav-3-6.png",expression:"'imgs/nav-img/nav-3-6.png'"}],attrs:{alt:""}})]),a("div",{staticClass:"pro-name"},[t._v("查看全部")]),a("div",{staticClass:"pro-price"},[t._v("查看全部")])])])])])])]),t._m(3)])])])},u=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topbar-menu"},[a("a",{attrs:{href:"javascript:;"}},[t._v("小米商城")]),a("a",{attrs:{href:"javascript:;"}},[t._v("MUI")]),a("a",{attrs:{href:"javascript:;"}},[t._v("云服务")]),a("a",{attrs:{href:"javascript:;"}},[t._v("协议规则")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-logo"},[a("a",{attrs:{href:"#/index"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item-menu"},[a("span",[t._v("RedMi红米")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-search"},[a("div",{staticClass:"wrapper"},[a("input",{attrs:{type:"text",name:"keyword"}}),a("a",{attrs:{href:"javascript:;"}})])])}],d=(a("b680"),a("5530")),m=a("2f62"),p={name:"nav-header",data:function(){return{phoneList:[]}},computed:Object(d["a"])({},Object(m["c"])(["username","cartCount"])),filters:{currency:function(t){return t?"￥"+t.toFixed(2)+"元":"0.00"}},mounted:function(){this.getProductList();var t=this.$route.params;t&&"login"==t.from&&this.getCartCount()},methods:{login:function(){this.$router.push("/login")},getProductList:function(){var t=this;this.axios.get("/products",{params:{categoryId:"100012",pageSize:6}}).then((function(e){t.phoneList=e.list}))},getCartCount:function(){var t=this;this.axios.get("/carts/products/sum").then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;t.$store.dispatch("saveCartCount",e)}))},logout:function(){var t=this;this.axios.post("/user/logout").then((function(){t.$message.success("退出成功"),t.$cookie.set("userId","",{expires:"-1"}),t.$store.dispatch("saveUserName",""),t.$store.dispatch("saveCartCount","0")}))},goToCart:function(){this.$router.push("/cart")}}},v=p,f=(a("8ee7"),a("2877")),g=Object(f["a"])(v,l,u,!1,null,null,null),h=g.exports,b=a("f091"),_={name:"nav-home",components:{NavHeader:h,NavFooter:b["a"]}},C=_,y=Object(f["a"])(C,c,o,!1,null,null,null),k=y.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index"},[a("div",{staticClass:"container"},[a("div",{staticClass:"swiper-box"},[a("div",{staticClass:"nav-menu"},[a("ul",{staticClass:"menu-wrap"},[a("li",{staticClass:"menu-item"},[a("a",{attrs:{href:"javascript:;"}},[t._v("手机 电话卡")]),a("div",{staticClass:"children"},t._l(t.menuList,(function(e,i){return a("ul",{key:i},t._l(e,(function(e,i){return a("li",{key:i},[a("a",{attrs:{href:e?"#/product/"+e.id:""}},[a("img",{attrs:{src:e?e.img:"imgs/item-box-1.png",alt:""}}),t._v(" "+t._s(e?e.name:"小米9")+" ")])])})),0)})),0)]),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6)])]),a("swiper",{attrs:{options:t.swiperOption}},[t._l(t.slideList,(function(t,e){return a("swiper-slide",{key:e},[a("a",{attrs:{href:"#/product/"+t.id}},[a("img",{attrs:{src:t.img}})])])})),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),a("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),a("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],2)],1),a("div",{staticClass:"ads-box"},t._l(t.adsList,(function(t,e){return a("a",{key:e,attrs:{href:"/#/product/"+t.id}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.img,expression:"item.img"}],attrs:{alt:""}})])})),0),a("div",{staticClass:"banner"},[a("a",{attrs:{href:"/#/product/30"}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"imgs/banner-1.png",expression:"'imgs/banner-1.png'"}],attrs:{alt:""}})])])]),a("div",{staticClass:"product-box"},[a("div",{staticClass:"container"},[a("h2",[t._v("手机")]),a("div",{staticClass:"wrapper"},[a("div",{staticClass:"banner-left"},[a("a",{attrs:{href:"#/product/35"}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"imgs/mix-alpha.jpg",expression:"'imgs/mix-alpha.jpg'"}],attrs:{alt:""}})])]),a("div",{staticClass:"list-box"},t._l(t.phoneList,(function(e,i){return a("div",{key:i,staticClass:"list"},t._l(e,(function(e,i){return a("div",{key:i,staticClass:"item"},[a("span",{class:{"new-pro":i%2==0}},[t._v("新品")]),a("div",{staticClass:"item-img"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.mainImage,expression:"item.mainImage"}],attrs:{alt:""}})]),a("div",{staticClass:"item-info"},[a("h3",[t._v(t._s(e.name))]),a("p",[t._v(t._s(e.subtitle))]),a("p",{staticClass:"price",on:{click:function(a){return t.addCart(e.id)}}},[t._v(" "+t._s(e.price)+"元 ")])])])})),0)})),0)])])]),a("service-bar"),a("button",{on:{click:function(e){t.videoFlag=!0}}},[t._v("video彩蛋")]),a("div",{staticClass:"video-box"},[t.videoFlag?a("div",{staticClass:"overlay"}):t._e(),a("div",{staticClass:"video",class:{slide:t.videoFlag}},[a("span",{on:{click:t.clodeVideo}},[t._v("x")]),a("video",{ref:"videoDom",attrs:{src:"imgs/product/video.mp4",controls:"",autoplay:""}})])]),a("modal",{attrs:{title:"提示",sureText:"查看购物车",btnType:"1",modalType:"middle",showModal:t.showModal},on:{submit:t.goToCart,cancel:function(e){t.showModal=!1}},scopedSlots:t._u([{key:"body",fn:function(){return[a("p",[t._v("商品添加成功！")])]},proxy:!0}])})],1)},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"menu-item"},[a("a",{attrs:{href:"javascript:;"}},[t._v("电视 盒子")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"menu-item"},[a("a",{attrs:{href:"javascript:;"}},[t._v("笔记本 平板")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"menu-item"},[a("a",{attrs:{href:"javascript:;"}},[t._v("家电 插线板")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"menu-item"},[a("a",{attrs:{href:"javascript:;"}},[t._v("出行 穿戴")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"menu-item"},[a("a",{attrs:{href:"javascript:;"}},[t._v("智能 路由器")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"menu-item"},[a("a",{attrs:{href:"javascript:;"}},[t._v("电源 配件")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"menu-item"},[a("a",{attrs:{href:"javascript:;"}},[t._v("生活 箱包")])])}],x=a("984c"),$=a("714b"),E=a("7212"),T=(a("dfa4"),{name:"index",components:{swiper:E["swiper"],swiperSlide:E["swiperSlide"],ServiceBar:x["a"],Modal:$["a"]},data:function(){return{swiperOption:{autoplay:!0,loop:!0,effect:"cube",cubeEffect:{shadowOffset:100,shadowScale:.6},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},slideList:[{id:"42",img:"imgs/slider/slide-1.jpg"},{id:"45",img:"imgs/slider/slide-2.jpg"},{id:"46",img:"imgs/slider/slide-3.jpg"},{id:"",img:"imgs/slider/slide-4.jpg"},{id:"",img:"imgs/slider/slide-1.jpg"}],menuList:[[{id:30,img:"imgs/item-box-1.png",name:"小米CC9"},{id:31,img:"imgs/item-box-2.png",name:"小米8青春版"},{id:32,img:"imgs/item-box-3.jpg",name:"Redmi K20 Pro"},{id:33,img:"imgs/item-box-4.jpg",name:"移动4G专区"}],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],adsList:[{id:33,img:"imgs/ads/ads-1.png"},{id:48,img:"imgs/ads/ads-2.jpg"},{id:45,img:"imgs/ads/ads-3.png"},{id:47,img:"imgs/ads/ads-4.jpg"}],phoneList:[[{id:36,categoryId:100012,name:"Redmi Note 8 Pro",subtitle:"6400万全场景四摄",mainImage:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f2493e6c6fe8e2485c407e5d75e3651.jpg",price:1399,status:1,imageHost:"http://img.springboot.cn"},{id:37,categoryId:100012,name:"Redmi Note 8",subtitle:"千元4800万四摄",mainImage:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg",price:999,status:1,imageHost:"http://img.springboot.cn"},{id:38,categoryId:100012,name:"Redmi K20 Pro 尊享版",subtitle:"骁龙855 Plus， 弹出全面屏",mainImage:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8737a33c78a94bc36afb860ab23b3939.jpg",price:2699,status:1,imageHost:"http://img.springboot.cn"},{id:39,categoryId:100012,name:"Redmi Note 7",subtitle:"4800万拍照千元机",mainImage:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ce61b71e2f81df62bd0c05aaa901d22.jpg",price:1099,status:1,imageHost:"http://img.springboot.cn"}],[{id:40,categoryId:100012,name:"Redmi 7 ",subtitle:"4000mAh超长续航",mainImage:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9aab8a7fa9005ef918c9aa2d5f17c806.jpg",price:699,status:1,imageHost:"http://img.springboot.cn"},{id:41,categoryId:100012,name:"Redmi 7A",subtitle:"小巧大电量 持久流畅",mainImage:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3c1af9783bdc53ed843af5655ca92009.jpg",price:579,status:1,imageHost:"http://img.springboot.cn"},{id:42,categoryId:100012,name:"小米CC9",subtitle:"3200万自拍，4800万三摄",mainImage:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bd25cc614a670f4d5546fe82e239ef86.jpg",price:1799,status:1,imageHost:"http://img.springboot.cn"},{id:43,categoryId:100012,name:"小米9 Pro 5G",subtitle:"5G双卡全网通，骁龙855Plus",mainImage:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca9b4f81af709935556bef9aa21a90e8.jpg",price:3699,status:1,imageHost:"http://img.springboot.cn"}]],showModal:!1,videoFlag:!1}},created:function(){},mounted:function(){Object.defineProperty},methods:{addCart:function(t){var e=this;this.axios.post("/carts",{productId:t,selected:!0}).then((function(t){e.showModal=!0,e.$store.dispatch("saveCartCount",t.cartTotalQuantity)}))},goToCart:function(){this.$router.push("/cart")},clodeVideo:function(){this.videoFlag=!1,this.$refs.videoDom.pause()}}}),z=T,N=(a("bd5f"),Object(f["a"])(z,j,w,!1,null,null,null)),I=N.exports;n["default"].use(r["a"]);var O=new r["a"]({routes:[{path:"/",name:"home",component:k,redirect:"/index",children:[{path:"/index",name:"index",component:I},{path:"/product/:id",name:"product",component:function(){return a.e("chunk-0ea2f352").then(a.bind(null,"2320"))}},{path:"/detail/:id",name:"detail",component:function(){return a.e("chunk-74fa1a02").then(a.bind(null,"afa2"))}}]},{path:"/login",name:"login",component:function(){return a.e("chunk-0d2dde31").then(a.bind(null,"c6f7"))}},{path:"/cart",name:"cart",component:function(){return a.e("chunk-0f37bd62").then(a.bind(null,"7cb1"))}},{path:"/order",name:"order",component:function(){return a.e("chunk-2d0bce61").then(a.bind(null,"2a62"))},children:[{path:"list",name:"order-list",component:function(){return a.e("chunk-e566b432").then(a.bind(null,"c56b"))}},{path:"confirm",name:"order-confirm",component:function(){return a.e("chunk-b8a74e4e").then(a.bind(null,"2c69"))}},{path:"pay",name:"order-pay",component:function(){return a.e("chunk-fb562456").then(a.bind(null,"5d59"))}},{path:"alipay",name:"alipay",component:function(){return a.e("chunk-254cc950").then(a.bind(null,"064a"))}}]}]}),P=a("bc3a"),S=a.n(P),L=a("a7fe"),M=a.n(L),A=a("caf9"),R=a("00e7"),H=a.n(R),U=(a("0fae"),{saveUserName:function(t,e){t.username=e},saveCartCount:function(t,e){t.cartCount=e}}),F={saveUserName:function(t,e){t.commit("saveUserName",e)},saveCartCount:function(t,e){t.commit("saveCartCount",e)}};n["default"].use(m["a"]);var B,D={username:"",cartCount:0,demo:1},G=new m["a"].Store({state:D,mutations:U,actions:F}),K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},V=[],q={name:"app",components:{},data:function(){return{}},mounted:function(){this.$cookie.get("userId")&&(this.getUser(),this.getCartCount())},methods:{getUser:function(){var t=this;this.axios.get("/user").then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.$store.dispatch("saveUserName",e.username)}))},getCartCount:function(){var t=this;this.axios.get("/carts/products/sum").then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;t.$store.dispatch("saveCartCount",e)}))}}},J=q,Q=(a("5c0b"),Object(f["a"])(J,K,V,!1,null,null,null)),W=Q.exports;switch("production"){case"development":B="/api";break;case"test":B="http://test-mall-pre.springboot.cn/api";break;case"prev":B="http://prev-mall-pre.springboot.cn/api";break;case"prod":B="http://mall-pre.springboot.cn/api";break;default:B="http://mi.futurefe.com/api";break}console.log(B);var X=B,Y=!1;Y&&a("fc6e"),S.a.defaults.baseURL=X,S.a.defaults.timeout=8e3,S.a.interceptors.response.use((function(t){var e=t.data;return 0==e.status?e.data:(s.a.warning(e.msg),Promise.reject(e))}),(function(t){return Promise.reject(t)})),n["default"].use(M.a,S.a),n["default"].use(H.a),n["default"].use(A["a"],{loading:"imgs/loading-svg/loading-bars.svg"}),n["default"].prototype.$message=s.a,n["default"].config.productionTip=!1,new n["default"]({store:G,router:O,render:function(t){return t(W)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var i=a("9c0c"),s=a.n(i);s.a},"714b":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"slide"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],staticClass:"modal"},[a("div",{staticClass:"mask"}),a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-header"},[a("span",[t._v(t._s(t.title))]),a("a",{staticClass:"icon-close",attrs:{href:"javascript:;"},on:{click:function(e){return t.$emit("cancel")}}})]),a("div",{staticClass:"modal-body"},[t._t("body")],2),a("div",{staticClass:"modal-footer"},[1==t.btnType?a("a",{staticClass:"btn",attrs:{href:"javascript:;"},on:{click:function(e){return t.$emit("submit")}}},[t._v(t._s(t.sureText))]):t._e(),2==t.btnType?a("a",{staticClass:"btn",attrs:{href:"javascript:;"},on:{click:function(e){return t.$emit("cancel")}}},[t._v(t._s(t.cancelText))]):t._e(),3==t.btnType?a("div",{staticClass:"btn-group"},[a("a",{staticClass:"btn",attrs:{href:"javascript:;"},on:{click:function(e){return t.$emit("submit")}}},[t._v(t._s(t.sureText))]),a("a",{staticClass:"btn btn-default",attrs:{href:"javascript:;"},on:{click:function(e){return t.$emit("cancel")}}},[t._v(t._s(t.cancelText))])]):t._e()])])])])},s=[],n={name:"modal",props:{modalType:{type:String,default:"form"},title:String,btnType:String,sureText:{type:String,default:"确定"},cancelText:{type:String,default:"取消"},showModal:Boolean}},r=n,c=(a("30db"),a("2877")),o=Object(c["a"])(r,i,s,!1,null,null,null);e["a"]=o.exports},"7edc":function(t,e,a){"use strict";var i=a("9f28"),s=a.n(i);s.a},"8ee7":function(t,e,a){"use strict";var i=a("e8ec"),s=a.n(i);s.a},"984c":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"service"},[a("div",{staticClass:"container"},[a("ul",[a("li",[a("span",{staticClass:"icon-setting"}),t._v("预约维修服务")]),a("li",[a("span",{staticClass:"icon-7day"}),t._v("7天无理由退货")]),a("li",[a("span",{staticClass:"icon-15day"}),t._v("15天免费换货")]),a("li",[a("span",{staticClass:"icon-post"}),t._v("满150元包邮")])])])])}],n={name:"service-bar"},r=n,c=(a("f8b2"),a("2877")),o=Object(c["a"])(r,i,s,!1,null,null,null);e["a"]=o.exports},"9c0c":function(t,e,a){},"9f28":function(t,e,a){},b8a9:function(t,e,a){},bd5f:function(t,e,a){"use strict";var i=a("fa94"),s=a.n(i);s.a},e8ec:function(t,e,a){},f091:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footerComponent"},[a("div",{staticClass:"footer-logo"},[a("img",{attrs:{src:"imgs/logo-footer.png",alt:""}}),a("p",[t._v("小米商城")])]),a("div",{staticClass:"footer-link"},[a("a",{attrs:{href:"//github.com/zhang874010534",target:"_blank"}},[t._v("主页")]),a("span",[t._v("|")]),a("a",{attrs:{href:"http://zhang874010534.github.io/vue_shop_management/dist",target:"_blank"}},[t._v("Vue后台管理系统")]),a("span",[t._v("|")]),a("a",{attrs:{href:"https://github.com/zhang874010534/wechat_yougou",target:"_blank"}},[t._v("微信小程序")]),a("span",[t._v("|")]),a("a",{attrs:{href:"https://zhang874010534.github.io/React-Movie",target:"_blank"}},[t._v("React Movie")])]),a("div",{staticClass:"copyright"},[t._v("Copyright ©2020 "),a("span",{staticClass:"domain"},[t._v("zhang87010534.github.io")]),t._v(" All Rights Reserved.")])])}],n={},r=n,c=(a("7edc"),a("2877")),o=Object(c["a"])(r,i,s,!1,null,"5fcd75d4",null);e["a"]=o.exports},f8b2:function(t,e,a){"use strict";var i=a("b8a9"),s=a.n(i);s.a},fa94:function(t,e,a){},fc6e:function(t,e,a){"use strict";a.r(e);var i=a("96eb"),s=a.n(i);s.a.mock("/api/user/login",{status:0,data:{"id|10001-11000":0,username:"@cname",email:"admin@51purse.com",phone:null,role:0,createTime:1479048325e3,updateTime:1479048325e3}})}});