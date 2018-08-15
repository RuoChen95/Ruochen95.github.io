(function(t){function e(e){for(var i,s,l=e[0],a=e[1],r=e[2],d=0,f=[];d<l.length;d++)s=l[d],c[s]&&f.push(c[s][0]),c[s]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,r||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,l=1;l<n.length;l++){var a=n[l];0!==c[a]&&(i=!1)}i&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},c={app:0},o=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=e,l=l.slice();for(var r=0;r<l.length;r++)e(l[r]);var u=a;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("04f5"),c=n.n(i);c.a},"04f5":function(t,e,n){},"55a9":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("List")],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list"},[n("h1",{staticClass:"title"},[t._v("todos")]),n("div",{staticClass:"todoapp"},[n("div",{staticClass:"input"},[n("div",{staticClass:"completeAll",on:{click:function(e){t.completeAll()}}},[t._v("Complete All")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.data,expression:"data"}],attrs:{placeholder:"What needs to be done?"},domProps:{value:t.data},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.add()},input:function(e){e.target.composing||(t.data=e.target.value)}}})]),n("div",t._l(t.list,function(e,i){return n("div",{key:i,staticClass:"section",class:{show:e.show}},[n("div",{staticClass:"content"},[n("div",{staticClass:"condition"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"components.checked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.checked)?t._i(e.checked,null)>-1:e.checked},on:{click:function(e){t.toggleCheckCondition(i)},change:function(n){var i=e.checked,c=n.target,o=!!c.checked;if(Array.isArray(i)){var s=null,l=t._i(i,s);c.checked?l<0&&t.$set(e,"checked",i.concat([s])):l>-1&&t.$set(e,"checked",i.slice(0,l).concat(i.slice(l+1)))}else t.$set(e,"checked",o)}}})]),n("p",{class:{checked:e.checked}},[t._v(t._s(e.value))])]),n("div",{staticClass:"buttons"},[n("div",{staticClass:"delete",on:{click:function(e){t.deleteSection(i)}}},[t._v("x")])])])})),n("div",{staticClass:"banner"},[n("p",{staticClass:"left"},[t._v(t._s(t.leftAmount)+" "+t._s(t.pluralize("item",t.leftAmount))+" left")]),n("div",{staticClass:"condition"},[n("div",{class:{active:"all"==this.condition},on:{click:function(e){t.condition="all"}}},[t._v("All")]),n("div",{class:{active:"active"==this.condition},on:{click:function(e){t.condition="active"}}},[t._v("Active")]),n("div",{class:{active:"completed"==this.condition},on:{click:function(e){t.condition="completed"}}},[t._v("Completed")])]),n("div",{staticClass:"clearCompleted",class:{show:t.hasCompleted},on:{click:function(e){t.clear()}}},[t._v("Clear Completed")])])])])},l=[],a=(n("ac6a"),{all:function(t){return t},active:function(t){return t.filter(function(t){return!t.completed})},completed:function(t){return t.filter(function(t){return t.completed})}}),r={name:"list",props:{},data:function(){return{data:"",list:JSON.parse(localStorage.getItem("vue-todo"))||[],condition:"all"}},watch:{list:{deep:!0,handler:function(t){localStorage.setItem("vue-todo",JSON.stringify(t))}},condition:function(t){"all"==t?this.list.forEach(function(t){t.show=!0}):"active"==t?this.list.forEach(function(t){1==t.checked?t.show=!1:t.show=!0}):"completed"==t&&this.list.forEach(function(t){1==t.checked?t.show=!0:t.show=!1})}},computed:{leftAmount:function(){var t=0;return this.list.forEach(function(e){0==e.checked&&(t+=1)}),t},hasCompleted:function(){var t=0;return this.list.forEach(function(e){1!=e.checked&&t++}),t!=this.list.length},filterTodos:function(){return a[this.condition](this.list)}},methods:{pluralize:function(t,e){return t+(1===e||0===e?"":"s")},add:function(){this.list.push({value:this.data,checked:!1,show:!0}),this.data=""},deleteSection:function(t){this.list.splice(t,1)},toggleCheckCondition:function(t){this.list[t].checked=!this.list[t].checked},completeAll:function(){this.list.forEach(function(t){t.checked=!0})},clear:function(){var t=[];this.list.forEach(function(e){0==e.checked&&t.push(e)}),this.list=t}}},u=r,d=(n("5854"),n("ed1e"),n("2877")),f=Object(d["a"])(u,s,l,!1,null,"879b553e",null);f.options.__file="List.vue";var h=f.exports,p={name:"app",components:{List:h}},v=p,m=(n("034f"),Object(d["a"])(v,c,o,!1,null,null,null));m.options.__file="App.vue";var k=m.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(k)}}).$mount("#app")},5854:function(t,e,n){"use strict";var i=n("55a9"),c=n.n(i);c.a},"984d":function(t,e,n){},ed1e:function(t,e,n){"use strict";var i=n("984d"),c=n.n(i);c.a}});
//# sourceMappingURL=app.d30c87dc.js.map