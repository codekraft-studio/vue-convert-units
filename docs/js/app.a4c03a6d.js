(function(t){function n(n){for(var s,o,r=n[0],l=n[1],u=n[2],p=0,f=[];p<r.length;p++)o=r[p],a[o]&&f.push(a[o][0]),a[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);c&&c(n);while(f.length)f.shift()();return i.push.apply(i,u||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],s=!0,r=1;r<e.length;r++){var l=e[r];0!==a[l]&&(s=!1)}s&&(i.splice(n--,1),t=o(o.s=e[0]))}return t}var s={},a={app:0},i=[];function o(n){if(s[n])return s[n].exports;var e=s[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=s,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var s in t)o.d(e,s,function(n){return t[n]}.bind(null,s));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=n,r=r.slice();for(var u=0;u<r.length;u++)n(r[u]);var c=l;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var s=e("04f5"),a=e.n(s);a.a},"04f5":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c");var s=e("2b0e"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container",attrs:{id:"app"}},[t._m(0),e("section",{staticClass:"section main"},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-half has-text-right"},[e("h2",{staticClass:"is-size-4"},[t._v("Best match")]),e("p",{staticClass:"is-size-6 has-text-grey-light"},[t._v("It will find the best match automatically")]),e("div",{staticClass:"field has-addons has-addons-right"},[e("p",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.units,expression:"units"}],staticClass:"input",attrs:{type:"text",placeholder:"Conversion units"},domProps:{value:t.units},on:{input:function(n){n.target.composing||(t.units=n.target.value)}}})]),e("p",{staticClass:"control"},[e("span",{staticClass:"select"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.unitsFrom,expression:"unitsFrom"}],on:{change:function(n){var e=Array.prototype.filter.call(n.target.options,function(t){return t.selected}).map(function(t){var n="_value"in t?t._value:t.value;return n});t.unitsFrom=n.target.multiple?e:e[0]}}},t._l(t.possibilities,function(n,s){return e("option",{key:s,domProps:{value:n}},[t._v(t._s(n))])}))])])]),e("p",[t._v(t._s(t._f("convert")(t.units,t.unitsFrom,"best")))])]),e("div",{staticClass:"column is-half"},[e("pre",{domProps:{textContent:t._s(t.unitsCode)}}),e("pre",{domProps:{textContent:t._s(t.unitsRaw)}})])])]),e("div",{staticClass:"container"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-half has-text-right"},[e("h2",{staticClass:"is-size-4"},[t._v("Manual Conversion")]),e("p",{staticClass:"is-size-6 has-text-grey-light"},[t._v("You choose what format to convert")]),e("div",{staticClass:"field has-addons has-addons-right"},[e("p",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.manualUnits,expression:"manualUnits"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter a number"},domProps:{value:t.manualUnits},on:{input:function(n){n.target.composing||(t.manualUnits=n.target.value)}}})]),e("p",{staticClass:"control"},[e("span",{staticClass:"select"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.manualUnitsFrom,expression:"manualUnitsFrom"}],on:{change:function(n){var e=Array.prototype.filter.call(n.target.options,function(t){return t.selected}).map(function(t){var n="_value"in t?t._value:t.value;return n});t.manualUnitsFrom=n.target.multiple?e:e[0]}}},t._l(t.possibilities,function(n,s){return e("option",{key:s,domProps:{value:n}},[t._v(t._s(n))])}))])])]),e("div",{staticClass:"field has-addons has-addons-right"},[e("p",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.manualSuffix,expression:"manualSuffix"}],staticClass:"input",attrs:{type:"text",placeholder:"Conversion suffix"},domProps:{value:t.manualSuffix},on:{input:function(n){n.target.composing||(t.manualSuffix=n.target.value)}}})]),e("p",{staticClass:"control"},[e("span",{staticClass:"select"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.manualUnitsTo,expression:"manualUnitsTo"}],on:{change:function(n){var e=Array.prototype.filter.call(n.target.options,function(t){return t.selected}).map(function(t){var n="_value"in t?t._value:t.value;return n});t.manualUnitsTo=n.target.multiple?e:e[0]}}},t._l(t.possibilities,function(n,s){return e("option",{key:s,domProps:{value:n}},[t._v(t._s(n))])}))])])])]),e("div",{staticClass:"column is-half"},[e("pre",{domProps:{textContent:t._s(t.manualCode)}}),e("pre",[t._v(t._s(t._f("convert")(t.manualUnits,t.manualUnitsFrom,t.manualUnitsTo,t.manualSuffix)))])])])])]),t._m(1)])},i=[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("nav",{staticClass:"navbar"},[s("div",{staticClass:"navbar-brand"},[s("img",{attrs:{src:e("cf05"),alt:"VueJs"}})]),s("div",{},[s("h1",{staticClass:"title"},[t._v("Vue Convert Units")]),s("h2",{staticClass:"subtitle"},[t._v("\n        vue integration for "),s("strong",[t._v("convert-units")])])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"content has-text-centered"},[e("p",[t._v("\n        The source code is licensed "),e("a",{attrs:{href:"http://opensource.org/licenses/mit-license.php"}},[t._v("MIT")]),t._v(".\n        Made with ♥ by "),e("a",{attrs:{href:"#"}},[t._v("Codekraft Studio")]),t._v(".\n      ")])])])}],o={name:"app",data:function(){return{units:12e3,unitsFrom:"m",manualUnits:50,manualUnitsFrom:"kg",manualUnitsTo:"g",manualSuffix:"grams",possibilities:this.$convert().possibilities()}},computed:{manualCode:function(){return"{{ ".concat(this.manualUnits," | convert('").concat(this.manualUnitsFrom,"', '").concat(this.manualUnitsTo,"') }}")},unitsCode:function(){return"{{ ".concat(this.units," | convert('").concat(this.unitsFrom,"', 'best') }}")},unitsRaw:function(){return this.$convert(this.units).from(this.unitsFrom).toBest()}}},r=o,l=(e("034f"),e("2877")),u=Object(l["a"])(r,a,i,!1,null,null,null),c=u.exports,p=(e("f751"),e("6bde")),f=e("aa9c"),v=e.n(f);function m(t){var n=t.res,e=t.suffix,s=t.short;return"object"===Object(p["a"])(n)&&(e=s?n.units:n.val>1?n.plural:n.singular,n=n.val),"".concat(n," ").concat(e)}function d(t){var n=t.value,e=t.from,s=t.to,a=t.suffix,i=t.short,o=t.options,r="best"===s?"toBest":"to",l="";try{l=v()(n).from(e)[r](s),l=m({res:l,suffix:a,short:i})}catch(t){o.showErrors&&(l=t.message)}return l}var h={install:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n=Object.assign({showErrors:!1},n),t.prototype.$convert=v.a,t.filter("convert",function(t,e,s){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if(t){var i={value:t,from:e,to:s,options:n};return"best"===s?i.short=a:i.suffix=a,d(i)}})}};s["a"].config.productionTip=!1,s["a"].use(h),new s["a"]({render:function(t){return t(c)}}).$mount("#app")},cf05:function(t,n,e){t.exports=e.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.a4c03a6d.js.map