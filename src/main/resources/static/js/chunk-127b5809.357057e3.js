(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-127b5809"],{"0cb2":function(e,t,n){var o=n("7b0b"),r=Math.floor,a="".replace,s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,i=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,c,l,u){var g=n+e.length,d=c.length,f=i;return void 0!==l&&(l=o(l),f=s),a.call(u,f,(function(o,a){var s;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(g);case"<":s=l[a.slice(1,-1)];break;default:var i=+a;if(0===i)return o;if(i>d){var u=r(i/10);return 0===u?o:u<=d?void 0===c[u-1]?a.charAt(1):c[u-1]+a.charAt(1):o}s=c[i-1]}return void 0===s?"":s}))}},"107c":function(e,t,n){var o=n("d039");e.exports=o((function(){var e=RegExp("(?<a>b)","string".charAt(5));return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"14c3":function(e,t,n){var o=n("c6b6"),r=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var a=n.call(e,t);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==o(e))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},1928:function(e,t,n){},5319:function(e,t,n){"use strict";var o=n("d784"),r=n("d039"),a=n("825a"),s=n("50c4"),i=n("a691"),c=n("1d80"),l=n("8aa5"),u=n("0cb2"),g=n("14c3"),d=n("b622"),f=d("replace"),p=Math.max,v=Math.min,h=function(e){return void 0===e?e:String(e)},b=function(){return"$0"==="a".replace(/./,"$0")}(),x=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),m=!r((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));o("replace",(function(e,t,n){var o=x?"$":"$0";return[function(e,n){var o=c(this),r=void 0==e?void 0:e[f];return void 0!==r?r.call(e,o,n):t.call(String(o),e,n)},function(e,r){if("string"===typeof r&&-1===r.indexOf(o)&&-1===r.indexOf("$<")){var c=n(t,this,e,r);if(c.done)return c.value}var d=a(this),f=String(e),b="function"===typeof r;b||(r=String(r));var x=d.global;if(x){var m=d.unicode;d.lastIndex=0}var k=[];while(1){var y=g(d,f);if(null===y)break;if(k.push(y),!x)break;var I=String(y[0]);""===I&&(d.lastIndex=l(f,s(d.lastIndex),m))}for(var w="",E=0,_=0;_<k.length;_++){y=k[_];for(var $=String(y[0]),P=p(v(i(y.index),f.length),0),R=[],A=1;A<y.length;A++)R.push(h(y[A]));var C=y.groups;if(b){var S=[$].concat(R,P,f);void 0!==C&&S.push(C);var U=String(r.apply(void 0,S))}else U=u($,f,P,R,C,r);P>=E&&(w+=f.slice(E,P)+U,E=P+$.length)}return w+f.slice(E)}]}),!m||!b||x)},"82fb":function(e,t,n){"use strict";n("1928")},"8aa5":function(e,t,n){"use strict";var o=n("6547").charAt;e.exports=function(e,t,n){return t+(n?o(e,t).length:1)}},9263:function(e,t,n){"use strict";var o=n("ad6d"),r=n("9f7f"),a=n("5692"),s=n("7c73"),i=n("69f3").get,c=n("fce3"),l=n("107c"),u=RegExp.prototype.exec,g=a("native-string-replace",String.prototype.replace),d=u,f=function(){var e=/a/,t=/b*/g;return u.call(e,"a"),u.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),p=r.UNSUPPORTED_Y||r.BROKEN_CARET,v=void 0!==/()??/.exec("")[1],h=f||v||p||c||l;h&&(d=function(e){var t,n,r,a,c,l,h,b=this,x=i(b),m=x.raw;if(m)return m.lastIndex=b.lastIndex,t=d.call(m,e),b.lastIndex=m.lastIndex,t;var k=x.groups,y=p&&b.sticky,I=o.call(b),w=b.source,E=0,_=e;if(y&&(I=I.replace("y",""),-1===I.indexOf("g")&&(I+="g"),_=String(e).slice(b.lastIndex),b.lastIndex>0&&(!b.multiline||b.multiline&&"\n"!==e[b.lastIndex-1])&&(w="(?: "+w+")",_=" "+_,E++),n=new RegExp("^(?:"+w+")",I)),v&&(n=new RegExp("^"+w+"$(?!\\s)",I)),f&&(r=b.lastIndex),a=u.call(y?n:b,_),y?a?(a.input=a.input.slice(E),a[0]=a[0].slice(E),a.index=b.lastIndex,b.lastIndex+=a[0].length):b.lastIndex=0:f&&a&&(b.lastIndex=b.global?a.index+a[0].length:r),v&&a&&a.length>1&&g.call(a[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a&&k)for(a.groups=l=s(null),c=0;c<k.length;c++)h=k[c],l[h[0]]=a[h[1]];return a}),e.exports=d},"9f7f":function(e,t,n){var o=n("d039"),r=function(e,t){return RegExp(e,t)};t.UNSUPPORTED_Y=o((function(){var e=r("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=o((function(){var e=r("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var o=n("23e7"),r=n("9263");o({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(e,t,n){"use strict";var o=n("825a");e.exports=function(){var e=o(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,n){"use strict";n("ac1f");var o=n("6eeb"),r=n("9263"),a=n("d039"),s=n("b622"),i=n("9112"),c=s("species"),l=RegExp.prototype;e.exports=function(e,t,n,u){var g=s(e),d=!a((function(){var t={};return t[g]=function(){return 7},7!=""[e](t)})),f=d&&!a((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[g]=/./[g]),n.exec=function(){return t=!0,null},n[g](""),!t}));if(!d||!f||n){var p=/./[g],v=t(g,""[e],(function(e,t,n,o,a){var s=t.exec;return s===r||s===l.exec?d&&!a?{done:!0,value:p.call(t,n,o)}:{done:!0,value:e.call(n,t,o)}:{done:!1}}));o(String.prototype,e,v[0]),o(l,g,v[1])}u&&i(l[g],"sham",!0)}},f1b4:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("center",[o("div",{attrs:{id:"Box"}},[o("form",{attrs:{id:"login-form1"},on:{submit:function(t){return t.preventDefault(),e.loginUser.apply(null,arguments)}}},[o("center",[o("div",{staticClass:"flex"},[o("h2",[e._v("로그인")]),o("br"),o("br"),o("p",{staticClass:"text-danger fw-bold alreadyId"},[e._v(e._s(e.loginError))]),o("div",{staticClass:"input-group mb-3 login"},[o("span",{staticClass:"input-group-text",attrs:{id:"inputGroup-sizing-default"}},[e._v(" 아이디  ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.user.userId,expression:"user.userId"}],staticClass:"form-control",attrs:{type:"text",name:"userID",placeholder:"아이디를 입력하세요.","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"},domProps:{value:e.user.userId},on:{input:function(t){t.target.composing||e.$set(e.user,"userId",t.target.value)}}})]),o("div",{staticClass:"input-group mb-3 login"},[o("span",{staticClass:"input-group-text",attrs:{id:"inputGroup-sizing-default"}},[e._v("비밀번호")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.user.userPw,expression:"user.userPw"}],staticClass:"form-control",attrs:{type:"password",name:"userPW",placeholder:"비밀번호를 입력하세요.","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"},domProps:{value:e.user.userPw},on:{input:function(t){t.target.composing||e.$set(e.user,"userPw",t.target.value)}}})]),o("div",[o("button",{staticClass:"btn btn-login btn-secondary",attrs:{type:"submit"}},[e._v("로그인")])]),o("br"),o("button",{staticClass:"btn btn-light",staticStyle:{"margin-top":"2px",width:"200px"},attrs:{type:"button"},on:{click:function(t){return e.findPw()}}},[e._v("비밀번호 찾기")]),o("br"),o("br"),o("button",{staticClass:"btn btn1-naver btn1-login",attrs:{type:"button"},on:{click:function(t){return e.socialLogin("naver")}}},[o("img",{attrs:{src:n("95eb")}})]),o("br"),o("button",{staticClass:"btn btn1-google btn1-login",attrs:{type:"button"},on:{click:function(t){return e.socialLogin("google")}}},[o("img",{attrs:{src:n("6839")}})]),o("br"),o("button",{staticClass:"btn btn1-kakao btn1-login",attrs:{type:"button"},on:{click:function(t){return e.socialLogin("kakao")}}},[o("img",{attrs:{src:n("ed1b")}})]),o("br"),o("br")])])],1)])])},r=[],a=(n("ac1f"),n("5319"),n("bc3a")),s=n.n(a),i={data:function(){return{loginError:"",user:{userId:"",userPw:""}}},methods:{loginUser:function(){var e=this;console.log(this.user),s.a.post("/api/user/login",this.user).then((function(e){console.log("res:"+e,e.data),console.log("res:"+e.headers)})).catch((function(t){console.log(t,e.user),e.loginError="아이디 또는 비밀번호가 일치하지 않습니다."}))},socialLogin:function(e){if("kakao"==e)console.log("카카오 로그인"),this.$kakao.Auth.login({success:function(e){console.log(e),Kakao.Auth.setAccessToken(e.access_token),Kakao.API.request({url:"/v2/user/me",success:function(e){console.log(e),console.log(e.kakao_account.profile.nickname),console.log(e.kakao_account.email);var t={userId:e.kakao_account.profile.nickname,userEmail:e.kakao_account.email,social:"kakao"};s.a.post("/api/user/"+t.social,{userId:t.userId,userEmail:t.userEmail}).then((function(e){console.log("res:"+e,e.data),console.log("res:"+e.headers["jwt-auth-token"]),console.log(e.data.status)})).catch((function(e){console.log(e)}))},fail:function(e){console.log(e),alert("사용자 정보를 가져오는데 실패했습니다.")}})},fail:function(e){console.log(e),alert("로그인 실패")}});else if("naver"==e){console.log("네이버 로그인");var t="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=hxdc_g1LansbUuI5iyix&redirect_uri=http://ttff.duckdns.org/login&state=1234";window.location.replace(t)}else"google"==e&&(console.log("구글 로그인"),this.$gAuth.signIn().then((function(e){console.log("GoogleUser",e),console.log("GoogleUser",e.getId()),console.log("GoogleUser",e.getBasicProfile().getName()),console.log("GoogleUser",e.getBasicProfile().getEmail()),s.a.post("/api/user/google",{userId:e.getBasicProfile().getName(),userEmail:e.getBasicProfile().getEmail()}).then((function(e){console.log("res:"+e,e.data),console.log("res:"+e.headers["jwt-auth-token"]),console.log(e.data.status)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)})))},findPw:function(){console.log("비밀번호찾기"),this.$router.push("/findpw")}},mounted:function(){var e=this;void 0!=this.$route.query.code&&(console.log(this.$route.query.code),s.a.get("https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=hxdc_g1LansbUuI5iyix&client_secret=LKgEmvXPLw&code="+this.$route.query.code+"&state="+this.$route.query.state).then((function(t){console.log("네이버 데이터 가져옴"),console.log(t),console.log("Bearer "+t.data.access_token);var n="Bearer "+t.data.access_token,o={Authorization:n};console.log(t.status),200==t.status&&(console.log(n),s.a.get("/api/user/naver/service",{headers:o}).then((function(t){console.log(t),console.log(t.data.response.nickname),console.log(t.data.response.email),s.a.post("/api/user/naver",{userId:t.data.response.nickname,userEmail:t.data.response.email}).then((function(t){console.log(res3),e.$route.go()})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)})))})).catch((function(e){console.log(e)})))}},c=i,l=(n("82fb"),n("2877")),u=Object(l["a"])(c,o,r,!1,null,null,null);t["default"]=u.exports},fce3:function(e,t,n){var o=n("d039");e.exports=o((function(){var e=RegExp(".","string".charAt(0));return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-127b5809.357057e3.js.map