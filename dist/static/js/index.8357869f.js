(function(e){function t(t){for(var r,n,a=t[0],l=t[1],c=t[2],d=0,h=[];d<a.length;d++)n=a[d],s[n]&&h.push(s[n][0]),s[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(h.length)h.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],r=!0,a=1;a<i.length;a++){var l=i[a];0!==s[l]&&(r=!1)}r&&(o.splice(t--,1),e=n(n.s=i[0]))}return e}var r={},s={index:0},o=[];function n(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=r,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var u=l;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"073a":function(e,t,i){"use strict";var r=i("c932"),s=i.n(r);s.a},"134c":function(e,t,i){},"379d":function(e,t,i){e.exports=i.p+"static/img/face.54b6ae00.png"},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("f751"),i("097d");var r=i("2b0e"),s=i("5c96"),o=i.n(s),n=(i("0fae"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view")],1)}),a=[],l=(i("5c0b"),i("2877")),c={},u=Object(l["a"])(c,n,a,!1,null,null,null),d=u.exports,h=i("8c4f"),f=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-container",[i("el-header",[i("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.$route.path,mode:"horizontal",router:"true"}},[e.isLogout?i("el-menu-item",{attrs:{index:"/login"}},[i("i",{staticClass:"el-icon-share"}),e._v("用户登录")]):e._e(),e.isLogin?i("el-submenu",[i("template",{slot:"title"},[i("span",{staticClass:"submenu-title"},[i("i",{staticClass:"el-icon-user-solid"}),e._v(e._s(e.username))])]),i("el-menu-item",{on:{click:e.Logout}},[e._v("退出")])],2):e._e(),i("el-menu-item",{attrs:{index:"/view"}},[i("i",{staticClass:"el-icon-edit"}),e._v("预览图片")]),i("el-menu-item",{attrs:{index:"/"}},[i("i",{staticClass:"el-icon-delete"}),e._v("项目介绍")])],1)],1),i("el-main",[i("router-view")],1)],1)},g=[],p=i("bc3a"),m=i.n(p),v=m.a.create({baseURL:"/api/",timeout:5e3,headers:{"Content-Type":"application/json"}});v.interceptors.request.use(function(e){return e.headers["Authorization"]="Fake Token",e}),v.interceptors.response.use(function(e){return e},function(e){return console.log(e),Promise.reject(e)});var b={fetchPersonal:function(){return v.get("/user/personal").then(function(e){return e.data})},getLoginInfo:function(){return v.get("/user/info").then(function(e){return e.data})},logoutUser:function(){return v.get("/user/logout").then(function(e){return e.data})},loginUser:function(e){return v.post("/user/login",e).then(function(e){return e.data})},registerUser:function(e){return v.post("/user/register",e).then(function(e){return e.data})}},w={data:function(){return{activeIndex:"1",activeIndex2:"1",isLogin:!1,isLogout:!0,username:""}},methods:{Logout:function(){b.logoutUser().then(function(e){"Success"===e.status&&this.$router.push({path:"/"})})},getLoginInfo:function(){var e=this;b.getLoginInfo().then(function(t){e.isLogin=t["isLogin"],e.isLogout=!e.isLogin,e.isLogin?e.username="Hello,"+t["user"]:e.username="用户登录"})}},mounted:function(){this.getLoginInfo()}},y=w,x=(i("073a"),Object(l["a"])(y,f,g,!1,null,"6eb8c52e",null)),_=x.exports,L=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-container",[i("div",{staticClass:"intro-div"},[i("div",{staticClass:"intro-text"},[i("h1",{staticStyle:{"font-size":"2.5em"}},[e._v("智能时尚搭配系统")]),i("br"),i("h1",{staticStyle:{"font-size":"1.6em"}},[e._v("一两句说明")])]),i("div",{staticClass:"start-button"},[e.isLogin?i("el-button",{attrs:{type:"primary",round:""},on:{click:e.gotoview}},[e._v("开始使用")]):e._e(),e.isLogout?i("el-button",{attrs:{type:"primary",round:""},on:{click:e.gotologin}},[e._v("先登陆哟")]):e._e()],1)]),i("div",{staticClass:"image-div"},[i("el-image",{staticStyle:{width:"300px",height:"350px"},attrs:{src:e.imageurl}})],1)])},C=[],F={data:function(){return{imageurl:i("379d"),isLogin:!1,isLogout:!0}},methods:{loginjudge:function(){var e=this;b.getLoginInfo().then(function(t){e.isLogin=t["isLogin"],e.isLogout=!e.isLogin})},gotologin:function(){this.$router.push({path:"/login"})},gotoview:function(){this.$router.push({path:"/view"})}},created:function(){this.loginjudge()}},$=F,A=(i("93a8"),Object(l["a"])($,L,C,!1,null,"b3b1e0b2",null)),k=A.exports,P=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"gallery"}},[i("waterfall",{ref:"waterfall",attrs:{gap:24,imgsArr:e.imgsArr,imgWidth:280,maxCols:4,isLogin:e.isLogin},on:{scrollReachBottom:e.getData}})],1)},E=[],S=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vue-waterfall-container",style:{width:e.width&&!e.isMobile?e.width+"px":"",height:parseFloat(e.height)==e.height?e.height+"px":e.height}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.isPreloading_c,expression:"isPreloading_c"}],staticClass:"loading ball-beat",class:{first:e.isFirstLoad}},[e._t("loading",null,{isFirstLoad:e.isFirstLoad}),e._l(e.loadingDotCount,function(t){return e.hasLoadingSlot?e._e():i("div",{key:t,staticClass:"dot",style:e.loadingDotStyle})})],2),i("div",{ref:"scrollEl",staticClass:"vue-waterfall-scroll"},[e._t("waterfall-head"),i("div",{staticClass:"vue-waterfall",style:e.isMobile?"":{width:e.colWidth*e.cols+"px",left:"50%",marginLeft:-1*e.colWidth*e.cols/2+"px"}},[e._l(e.imgsArr_c,function(t,r){return i("div",{staticClass:"img-box",class:[e.cardAnimationClass,{__err__:t._error}],style:{padding:(e.isMobile?e.mobileGap:e.gap)/2+"px",width:e.isMobile?"":e.colWidth+"px"}},[t[e.srcKey]?i("a",{staticClass:"img-inner-box",style:{width:e.imgWidth_c+"px",height:!!t._height&&t._height+"px"}},[i("el-popover",{ref:"popover-"+r,refInFor:!0,attrs:{placement:"top",width:"360"}},[i("img",{staticStyle:{width:"100%"},attrs:{src:t["src"]},on:{click:function(t){e.$refs["popover-"+r][0].doClose()}}}),e.isLogin?i("el-button",{staticStyle:{position:"absolute",bottom:"20px",left:"170px"},attrs:{type:"primary",icon:"el-icon-magic-stick",circle:""},on:{click:function(i){e.$refs["popover-"+r][0].$slots.default[0].elm.src=-1!==e.$refs["popover-"+r][0].$slots.default[0].elm.src.indexOf(t["src"])?t["swap"]:t["src"]}}}):e._e(),i("img",{staticClass:"small-img",attrs:{slot:"reference",src:t[e.srcKey]},slot:"reference"})],1)],1):e._e()])}),e.over?i("div",{ref:"over",staticClass:"over"},[e._t("waterfall-over",[e._v("展示全部")])],2):e._e()],2)],2)])},O=[],j=(i("ac6a"),i("4917"),i("c5f6"),{name:"Waterfall",props:{width:{type:Number},height:{type:[Number,String]},reachBottomDistance:{type:Number,default:20},loadingDotCount:{type:Number,default:3},loadingDotStyle:{type:Object},gap:{type:Number,default:20},mobileGap:{type:Number,default:8},maxCols:{type:Number,default:5},imgsArr:{type:Array,required:!0},srcKey:{type:String,default:"src"},hrefKey:{type:String,default:"href"},imgWidth:{type:Number,default:240},isRouterLink:{type:Boolean,default:!1},linkRange:{type:String,default:"card"},loadingTimeOut:{type:Number,default:500},cardAnimationClass:{type:[String],default:"default-card-animation"},enablePullDownEvent:{type:Boolean,default:!1},isLogin:{type:Boolean,default:!1}},data:function(){return{msg:"this is from vue-waterfall.vue",isMobile:!!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i),isPreloading:!0,isPreloading_c:!0,imgsArr_c:[],loadedCount:0,cols:NaN,imgBoxEls:null,beginIndex:0,colsHeightArr:[],LoadingTimer:null,isFirstLoad:!0,over:!1}},computed:{colWidth:function(){return this.imgWidth+this.gap},imgWidth_c:function(){return this.isMobile?window.innerWidth/2-this.mobileGap:this.imgWidth},hasLoadingSlot:function(){return!!this.$scopedSlots.loading}},mounted:function(){var e=this;this.loadingMiddle(),this.preload(),this.cols=this.calcuCols(),this.$on("preloaded",function(){e.isFirstLoad=!1,e.imgsArr_c=e.imgsArr.concat([]),e.$nextTick(function(){e.isPreloading=!1,e.imgBoxEls=e.$el.getElementsByClassName("img-box"),e.waterfall()})}),this.isMobile||this.width||this.response(),this.isMobile&&this.enablePullDownEvent&&this.pullDown(),this.scroll()},watch:{isPreloading:function(e,t){var i=this;e?setTimeout(function(){i.isPreloading&&(i.isPreloading_c=!0)},this.loadingTimeOut):this.isPreloading_c=!1},imgsArr:function(e,t){(this.imgsArr_c.length>e.length||this.imgsArr_c.length>0&&e[0]&&!e[0]._height)&&this.reset(),this.preload()}},methods:{preload:function(e,t){var i=this;this.imgsArr.forEach(function(e,t){if(!(t<i.loadedCount)){if(!e[i.srcKey])return i.imgsArr[t]._height="0",i.loadedCount++,void(i.loadedCount===i.imgsArr.length&&i.$emit("preloaded"));var r=new Image;r.src=e[i.srcKey],r.onload=r.onerror=function(e){i.loadedCount++,i.imgsArr[t]._height="load"===e.type?Math.round(i.imgWidth_c/(r.width/r.height)):i.isMobile?i.imgWidth_c:i.imgWidth,"error"===e.type&&(i.imgsArr[t]._error=!0,i.$emit("imgError",i.imgsArr[t])),i.loadedCount===i.imgsArr.length&&i.$emit("preloaded")}}})},calcuCols:function(){var e=this.width?this.width:window.innerWidth,t=parseInt(e/this.colWidth);return t=0===t?1:t,this.isMobile?2:t>this.maxCols?this.maxCols:t},waterfall:function(){if(this.imgBoxEls){var e,t,i,r=this.isMobile?this.imgBoxEls[0].offsetWidth:this.colWidth;0===this.beginIndex&&(this.colsHeightArr=[]);for(var s=this.beginIndex;s<this.imgsArr.length;s++){if(!this.imgBoxEls[s])return;if(i=this.imgBoxEls[s].offsetHeight,s<this.cols)this.colsHeightArr.push(i),e=0,t=s*r;else{var o=Math.min.apply(null,this.colsHeightArr),n=this.colsHeightArr.indexOf(o);e=o,t=n*r,this.colsHeightArr[n]=o+i}this.imgBoxEls[s].style.left=t+"px",this.imgBoxEls[s].style.top=e+"px"}this.beginIndex=this.imgsArr.length}},response:function(){var e=this;window.addEventListener("resize",function(){var t=e.cols;e.cols=e.calcuCols(),t!==e.cols&&(e.beginIndex=0,e.waterfall(),e.over&&e.setOverTipPos())})},scrollFn:function(){var e=this.$refs.scrollEl;if(!this.isPreloading){var t=Math.min.apply(null,this.colsHeightArr);e.scrollTop+e.offsetHeight>t-this.reachBottomDistance&&(this.isPreloading=!0,this.$emit("scrollReachBottom"))}},scroll:function(){this.$refs.scrollEl.addEventListener("scroll",this.scrollFn)},waterfallOver:function(){this.$refs.scrollEl.removeEventListener("scroll",this.scrollFn),this.isPreloading=!1,this.over=!0,this.setOverTipPos()},setOverTipPos:function(){var e=this,t=Math.max.apply(null,this.colsHeightArr);this.$nextTick(function(){e.$refs.over.style.top=t+"px"})},bindClickEvent:function(){var e=this;this.$el.querySelector(".vue-waterfall").addEventListener("click",function(t){var i=t.target;if(-1===t.target.className.indexOf("over")&&-1===i.className.indexOf("img-box")){while(-1===i.className.indexOf("img-inner-box"))i=i.parentNode;var r=i.getAttribute("data-index");e.$emit("click",t,{index:r,value:e.imgsArr_c[r]})}})},pullDown:function(){var e,t=this,i=this.$el.querySelector(".vue-waterfall-scroll");i.addEventListener("touchmove",function(r){if(0===i.scrollTop){var s=r.changedTouches[0];e||(e=s.pageY);var o=s.pageY-e;o>0&&r.preventDefault(),t.$emit("pullDownMove",o)}}),i.addEventListener("touchend",function(r){0===i.scrollTop&&(e=NaN,t.$emit("pullDownEnd"))})},loadingMiddle:function(){var e=this.$el.querySelector(".vue-waterfall-scroll"),t=e.offsetWidth-e.clientWidth;this.$el.querySelector(".loading").style.marginLeft=-t/2+"px"},reset:function(){this.imgsArr_c=[],this.beginIndex=0,this.loadedCount=0,this.isFirstLoad=!0,this.isPreloading=!0,this.scroll(),this.over=!1}}}),M=j,W=(i("9238"),Object(l["a"])(M,S,O,!1,null,"8c527f92",null)),I=W.exports,N={name:"gallery",data:function(){return{imgsArr:[],group:0,isLogin:!1}},components:{waterfall:I},methods:{getData:function(){var e=this;b.fetchPersonal().then(function(t){e.group++,5!==e.group?(t=t.map(function(e){return{src:"/api/images/"+e["key"],swap:"/api/faceswap/"+e["key"]}}),e.imgsArr=e.imgsArr.concat(t)):e.$refs.waterfall.waterfallOver()})},getLoginInfo:function(){var e=this;b.getLoginInfo().then(function(t){e.isLogin=t["isLogin"]})}},created:function(){this.getData(),this.getLoginInfo()}},U=N,D=(i("6e87"),Object(l["a"])(U,P,E,!1,null,"033141fd",null)),T=D.exports,B=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"login-container"},[i("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm login-page",attrs:{model:e.ruleForm2,rules:e.rules2,"status-icon":"","label-position":"left","label-width":"0px"}},[i("h3",{staticClass:"title"},[e._v("登陆界面")]),i("el-form-item",{attrs:{prop:"username"}},[i("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"用户名"},model:{value:e.ruleForm2.username,callback:function(t){e.$set(e.ruleForm2,"username",t)},expression:"ruleForm2.username"}})],1),i("el-form-item",{attrs:{prop:"password"}},[i("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},model:{value:e.ruleForm2.password,callback:function(t){e.$set(e.ruleForm2,"password",t)},expression:"ruleForm2.password"}})],1),i("br"),i("el-form-item",{staticStyle:{width:"100%"}},[i("el-button",{staticStyle:{width:"45%",float:"left"},attrs:{type:"primary",loading:e.logining},on:{click:e.handleSubmit}},[e._v("登录")]),i("el-button",{staticStyle:{width:"45%",float:"right"},attrs:{type:"primary"},on:{click:e.gotoReg}},[e._v("注册")])],1)],1)],1)},H=[],R={data:function(){return{logining:!1,ruleForm2:{username:"",password:""},rules2:{username:[{required:!0,message:"请输入你的用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},checked:!1}},methods:{handleSubmit:function(e){var t=this,i=this;this.$refs.ruleForm2.validate(function(e){if(!e)return!1;var r=new FormData;r.append("user",t.ruleForm2.username),r.append("pass",t.ruleForm2.password),b.loginUser(r).then(function(e){"Success"===e.status?i.$router.push({path:"/view"}):alert("Username or Password wrong!")})})},gotoReg:function(){this.$router.push({path:"/register"})}}},q=R,K=(i("cc07"),Object(l["a"])(q,B,H,!1,null,"ccf3e548",null)),z=K.exports,G=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"reg-div"},[i("div",{staticClass:"register-wrapper"},[i("div",{attrs:{id:"register"}},[i("p",{staticClass:"title"},[e._v("注册界面")]),i("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm2,"status-icon":"",rules:e.rules2,"label-width":"0"}},[i("el-form-item",{attrs:{prop:"file"}},[i("el-upload",{staticClass:"avatar-uploader",attrs:{action:"","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.imageUrl?i("img",{staticClass:"avatar",attrs:{src:e.imageUrl}}):i("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),i("el-form-item",{attrs:{prop:"username"}},[i("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入用户名"},model:{value:e.ruleForm2.username,callback:function(t){e.$set(e.ruleForm2,"username",t)},expression:"ruleForm2.username"}})],1),i("el-form-item",{attrs:{prop:"pass"}},[i("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"输入密码"},model:{value:e.ruleForm2.pass,callback:function(t){e.$set(e.ruleForm2,"pass",t)},expression:"ruleForm2.pass"}})],1),i("el-form-item",{attrs:{prop:"checkPass"}},[i("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"确认密码"},model:{value:e.ruleForm2.checkPass,callback:function(t){e.$set(e.ruleForm2,"checkPass",t)},expression:"ruleForm2.checkPass"}})],1),i("el-form-item",[i("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm2")}}},[e._v("注册")]),i("p",{staticClass:"login",on:{click:e.gotoLogin}},[e._v("已有账号？立即登录")])],1)],1)],1)])])},J=[],Y={data:function(){var e=this,t=function(e,t,i){""===t?i(new Error("用户名不能为空")):i()},i=function(t,i,r){""===i?r(new Error("请输入密码")):(""!==e.ruleForm2.checkPass&&e.$refs.ruleForm2.validateField("checkPass"),r())},r=function(t,i,r){""===i?r(new Error("请再次输入密码")):i!==e.ruleForm2.pass?r(new Error("两次输入密码不一致!")):r()};return{ruleForm2:{pass:"",checkPass:"",file:"",username:""},rules2:{pass:[{validator:i,trigger:"change"}],checkPass:[{validator:r,trigger:"change"}],username:[{validator:t,trigger:"change"}]},imageUrl:"",imgw:0,imgh:0}},methods:{handleAvatarSuccess:function(e,t){this.imageUrl=URL.createObjectURL(t.raw)},beforeAvatarUpload:function(e){return this.ruleForm2.file=e,this.imageUrl=URL.createObjectURL(e),!1},submitForm:function(e){var t=new FormData;t.append("image",this.ruleForm2.file),t.append("user",this.ruleForm2.username),t.append("pass",this.ruleForm2.pass),b.registerUser(t).then(function(e){alert(e.status)})},gotoLogin:function(){this.$router.push({path:"/login"})}}},Q=Y,V=(i("8c81"),Object(l["a"])(Q,G,J,!1,null,"0f2f4a64",null)),X=V.exports;r["default"].use(h["a"]);var Z=new h["a"]({routes:[{path:"/",name:"index",component:_,children:[{path:"",component:k},{path:"/view",component:T}]},{path:"/login",name:"login",component:z},{path:"/register",name:"register",component:X}]});r["default"].use(o.a),r["default"].config.productionTip=!1,new r["default"]({router:Z,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,i){"use strict";var r=i("5e27"),s=i.n(r);s.a},"5e27":function(e,t,i){},"62e6":function(e,t,i){},"69b5":function(e,t,i){},"6e87":function(e,t,i){"use strict";var r=i("95b3"),s=i.n(r);s.a},"8c81":function(e,t,i){"use strict";var r=i("134c"),s=i.n(r);s.a},9238:function(e,t,i){"use strict";var r=i("cc54"),s=i.n(r);s.a},"93a8":function(e,t,i){"use strict";var r=i("62e6"),s=i.n(r);s.a},"95b3":function(e,t,i){},c932:function(e,t,i){},cc07:function(e,t,i){"use strict";var r=i("69b5"),s=i.n(r);s.a},cc54:function(e,t,i){}});
//# sourceMappingURL=index.8357869f.js.map