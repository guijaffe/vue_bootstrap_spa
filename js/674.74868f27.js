"use strict";(self["webpackChunkauthor"]=self["webpackChunkauthor"]||[]).push([[674],{8171:function(e,t,r){r.r(t),r.d(t,{default:function(){return z}});var n=r(6252),o=r(3577),a=r(9963);const i={class:"p-4 text-white shadow",style:{"background-color":"#155FB4"}},u={class:"container"},l={class:"d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"},f=(0,n.uE)('<a href="/vue_bootstrap_spa/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"><img src="https://stc-spb.ru/local/templates/stc/img/header/header_logo.svg" alt="логотип"></a><ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"><li><a href="/vue_bootstrap_spa/" class="nav-link px-3 text-white"> Главная</a></li><li><a href="#" class="nav-link px-3 text-white">О нас</a></li><li><a href="#" class="nav-link px-3 text-white">Услуги</a></li></ul>',2),s=(0,n._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-person-fill",viewBox:"0 0 16 16"},[(0,n._)("path",{d:"M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"})],-1),d={class:"d-grid gap-2 d-md-flex justify-content-md-end"},c={class:"mb-3"},m=(0,n._)("label",{for:"name",class:"form-label"},"Ваше имя",-1),p={key:0,class:"text-secondary small"},y={class:"mb-3"},v=(0,n._)("label",{for:"surname",class:"form-label"},"Ваша фамилия",-1),b={key:0,class:"text-secondary small"},g={class:"mb-3"},h=(0,n._)("label",{for:"email",class:"form-label"},"Email",-1),w={key:0,class:"text-secondary small"},_={class:"mb-3"},x=(0,n._)("label",{for:"password",class:"form-label"},"Пароль",-1),P={key:0,class:"text-secondary small"},j={class:"mb-3"},O=(0,n._)("label",{for:"passwordConfirm",class:"form-label"},"Подтверждение пароля",-1),$={key:0,class:"text-secondary small"};function M(e,t,r,M,R,q){const k=(0,n.up)("user-cabinet"),S=(0,n.up)("my-modal");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("header",i,[(0,n._)("div",u,[(0,n._)("div",l,[f,(0,n._)("button",{onClick:t[0]||(t[0]=(...e)=>q.showModal&&q.showModal(...e)),type:"button",class:"btn btn-outline-light me-3"},[s,(0,n.Uk)(" Кабинет")])])]),(0,n.Wm)(S,{show:R.modalVisible,"onUpdate:show":t[2]||(t[2]=e=>R.modalVisible=e)},{default:(0,n.w5)((()=>[(0,n.Wm)(k),(0,n._)("div",d,[(0,n._)("button",{onClick:t[1]||(t[1]=(...e)=>q.hideButt&&q.hideButt(...e)),class:"btn btn-outline-primary btn-sm",type:"button"},"Закрыть")])])),_:1},8,["show"])]),(0,n._)("main",null,[(0,n._)("form",{onSubmit:t[9]||(t[9]=(...t)=>e.checkForm&&e.checkForm(...t)),class:"col-sm-6 mt-5 mx-auto px-4"},[(0,n._)("div",c,[m,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>R.formReg.name=e),class:(0,o.C_)([R.v$.formReg.name.$error?"is-invalid":"","form-control mb-1"]),type:"text",id:"name"},null,2),[[a.nr,R.formReg.name,void 0,{trim:!0}]]),R.v$.formReg.name.$invalid&&R.v$.formReg.name.required?((0,n.wg)(),(0,n.iD)("p",p," Поле должно содержать минимум 2 символа ")):(0,n.kq)("",!0)]),(0,n._)("div",y,[v,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>R.formReg.surname=e),class:(0,o.C_)([R.v$.formReg.surname.$error?"is-invalid":"","form-control mb-1"]),type:"text",id:"surname"},null,2),[[a.nr,R.formReg.surname,void 0,{trim:!0}]]),R.v$.formReg.surname.$invalid&&R.v$.formReg.surname.required?((0,n.wg)(),(0,n.iD)("p",b," Поле должно содержать минимум 2 символа ")):(0,n.kq)("",!0)]),(0,n._)("div",g,[h,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[5]||(t[5]=e=>R.formReg.email=e),class:(0,o.C_)([R.v$.formReg.email.$error?"is-invalid":"","form-control mb-1"]),type:"text",id:"email"},null,2),[[a.nr,R.formReg.email,void 0,{trim:!0}]]),R.v$.formReg.email.$invalid&&R.v$.formReg.email.required?((0,n.wg)(),(0,n.iD)("p",w," Проверьте правильность Email адреса ")):(0,n.kq)("",!0)]),(0,n._)("div",_,[x,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[6]||(t[6]=e=>R.formReg.password.password=e),class:(0,o.C_)([R.v$.formReg.password.password.$error?"is-invalid":"","form-control mb-1"]),type:"password",id:"password"},null,2),[[a.nr,R.formReg.password.password,void 0,{trim:!0}]]),R.v$.formReg.password.password.$invalid&&R.v$.formReg.password.password.required?((0,n.wg)(),(0,n.iD)("p",P," Пароль должен содержать минимум 6 символов ")):(0,n.kq)("",!0)]),(0,n._)("div",j,[O,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[7]||(t[7]=e=>R.formReg.password.confirm=e),class:(0,o.C_)([R.v$.formReg.password.confirm.$error?"is-invalid":"","form-control mb-1"]),type:"password",id:"confirmPassword"},null,2),[[a.nr,R.formReg.password.confirm,void 0,{trim:!0}]]),R.v$.formReg.password.confirm.$invalid&&R.v$.formReg.password.confirm.required?((0,n.wg)(),(0,n.iD)("p",$," Пароли должны совпадать ")):(0,n.kq)("",!0)]),(0,n._)("button",{onClick:t[8]||(t[8]=(...e)=>q.registerUser&&q.registerUser(...e)),type:"button",class:"btn btn-primary mt-3 mb-5"}," Зарегистрироваться")],32)])])}r(7658);var R=r(4166),q=r(5873),k=r(4028),S=r(379),A={components:{MyModal:q.Z,UserCabinet:R.Z},data(){return{v$:(0,k.ZP)(),modalVisible:!1,step:1,formReg:{name:"",surname:"",email:"",password:{password:"",confirm:""}}}},methods:{showModal(){this.modalVisible=!0},hideButt(){this.modalVisible=!1},registerUser(){this.v$.$validate(),this.v$.$error?(alert("Ошибка регистрации"),this.$router.push("/register")):(alert("Регистрация прошла успешно"),this.$router.push("/confirmreg/"),console.log("Вы зарегистрированы",this.formReg))}},validations(){return{formReg:{name:{required:S.C1,minLength:(0,S.Ei)(2)},surname:{required:S.C1,minLenghth:(0,S.Ei)(2)},email:{required:S.C1,email:S.Do},password:{password:{required:S.C1,minLength:(0,S.Ei)(6)},confirm:{required:S.C1,sameAsPassword:(0,S.sH)("password")}}}}}};document.title="Регистрация";var C=r(3744);const D=(0,C.Z)(A,[["render",M]]);var z=D},8413:function(e,t){function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}t.RP=p;var i=[],u=null;var l=function(e){u=e};function f(){null!==u&&i.push(u),u={}}function s(){var e=u,t=u=i.pop()||null;return t&&(Array.isArray(t.$sub)||(t.$sub=[]),t.$sub.push(e)),e}function d(e){if("object"!==a(e)||Array.isArray(e))throw new Error("params must be an object");u=n(n({},u),e)}function c(e,t){return m((function(r){return function(){r(e);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return t.apply(this,o)}}))}function m(e){var t=e(d);return function(){f();try{for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.apply(this,r)}finally{s()}}}function p(e,t){return"object"===a(e)&&void 0!==t?c(e,t):m(e)}},6408:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=(0,n.regex)("alpha",/^[a-zA-Z]*$/);t["default"]=o},6195:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t["default"]=o},5573:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))};t["default"]=o},7884:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))};t["default"]=o},6681:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.req=t.regex=t.ref=t.len=void 0,Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return n.default}});var n=o(r(8085));function o(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}var i=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===a(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=i;var u=function(e){return Array.isArray(e)?e.length:"object"===a(e)?Object.keys(e).length:String(e).length};t.len=u;var l=function(e,t,r){return"function"===typeof e?e.call(t,r):r[e]};t.ref=l;var f=function(e,t){return(0,n.default)({type:e},(function(e){return!i(e)||t.test(e)}))};t.regex=f},4078:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=(0,n.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t["default"]=o},8107:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i,a=(0,n.regex)("email",o);t["default"]=a},379:function(e,t,r){function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"Do",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Ei",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"C1",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"sH",{enumerable:!0,get:function(){return v.default}});var o=R(r(6408)),a=R(r(6195)),i=R(r(5669)),u=R(r(7884)),l=R(r(8107)),f=R(r(9103)),s=R(r(7340)),d=R(r(5287)),c=R(r(3091)),m=R(r(2419)),p=R(r(2941)),y=R(r(8300)),v=R(r(918)),b=R(r(3213)),g=R(r(5832)),h=R(r(5573)),w=R(r(2500)),_=R(r(2628)),x=R(r(301)),P=R(r(6673)),j=R(r(4078)),O=M(r(6681));function $(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return($=function(e){return e?r:t})(e)}function M(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var r=$(t);if(r&&r.has(e))return r.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=a?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(o,i,u):o[i]=e[i]}return o.default=e,r&&r.set(e,o),o}function R(e){return e&&e.__esModule?e:{default:e}}},6673:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=(0,n.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t["default"]=o},9103:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(a)}));t["default"]=o;var a=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},7340:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!==typeof t)return!1;var r="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(a)}))};t["default"]=o;var a=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},5287:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))};t["default"]=o},301:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t["default"]=o},3091:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))};t["default"]=o},2628:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t["default"]=o},2500:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))};t["default"]=o},5669:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=(0,n.regex)("numeric",/^[0-9]*$/);t["default"]=o},5832:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))};t["default"]=o},2419:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=(0,n.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t["default"]=o},2941:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t["default"]=o},8300:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t["default"]=o},918:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))};t["default"]=o},3213:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i,a=(0,n.regex)("url",o);t["default"]=a},8085:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n="web"==={NODE_ENV:"production",BASE_URL:"/vue_bootstrap_spa/"}.BUILD?r(16).R:r(8413).RP,o=n;t["default"]=o},16:function(e,t,r){function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}t.R=void 0;var o="undefined"!==typeof window?window:"undefined"!==typeof r.g?r.g:{},a=function(e,t){return"object"===n(e)&&void 0!==t?t:e((function(){}))},i=o.vuelidate?o.vuelidate.withParams:a;t.R=i}}]);
//# sourceMappingURL=674.74868f27.js.map