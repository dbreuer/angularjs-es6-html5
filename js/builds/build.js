"format register";!function(e){function r(e){for(var r=[],t=0,n=e.length;n>t;t++)-1==f.call(r,e[t])&&r.push(e[t]);return r}function t(e,t,n,o){if("string"!=typeof e)throw"System.register provided no module name";var l;l="boolean"==typeof n?{declarative:!1,deps:t,execute:o,executingRequire:n}:{declarative:!0,deps:t,declare:n},l.name=e,d[e]||(d[e]=l),l.deps=r(l.deps),l.normalizedDeps=l.deps}function n(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==f.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,o=e.normalizedDeps.length;o>t;t++){var l=e.normalizedDeps[t],a=d[l];if(a&&!a.evaluated){var i=e.groupIndex+(a.declarative!=e.declarative);if(void 0===a.groupIndex||a.groupIndex<i){if(void 0!==a.groupIndex&&(r[a.groupIndex].splice(f.call(r[a.groupIndex],a),1),0==r[a.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");a.groupIndex=i}n(a,r)}}}}function o(e){var r=d[e];r.groupIndex=0;var t=[];n(r,t);for(var o=!!r.declarative==t.length%2,l=t.length-1;l>=0;l--){for(var i=t[l],u=0;u<i.length;u++){var c=i[u];o?a(c):s(c)}o=!o}}function l(e){return p[e]||(p[e]={name:e,dependencies:[],exports:{},importers:[]})}function a(r){if(!r.module){var t=r.module=l(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){t.locked=!0,n[e]=r;for(var o=0,l=t.importers.length;l>o;o++){var a=t.importers[o];if(!a.locked){var i=f.call(a.dependencies,t);a.setters[i](n)}}return t.locked=!1,r});if(t.setters=o.setters,t.execute=o.execute,!t.setters||!t.execute)throw new TypeError("Invalid System.register form for "+r.name);for(var i=0,s=r.normalizedDeps.length;s>i;i++){var u,m=r.normalizedDeps[i],v=d[m],g=p[m];g?u=g.exports:v&&!v.declarative?u={"default":v.module.exports,__useDefault:!0}:v?(a(v),g=v.module,u=g.exports):u=c(m),g&&g.importers?(g.importers.push(t),t.dependencies.push(g)):t.dependencies.push(null),t.setters[i]&&t.setters[i](u)}}}function i(e){var r,t=d[e];if(t)t.declarative?u(e,[]):t.evaluated||s(t),r=t.module.exports;else if(r=c(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function s(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,l=r.normalizedDeps.length;l>o;o++){var a=r.normalizedDeps[o],u=d[a];u&&s(u)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c)}}function u(r,t){var n=d[r];if(!n.evaluated&&n.declarative){t.push(r);for(var o=0,l=n.normalizedDeps.length;l>o;o++){var a=n.normalizedDeps[o];-1==f.call(t,a)&&(d[a]?u(a,t):c(a))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function c(e){if(m[e])return m[e];var r=d[e];if(!r)throw"Module "+e+" not present.";o(e),u(e,[]),d[e]=void 0;var t=r.declarative?r.module.exports:{"default":r.module.exports,__useDefault:!0};return m[e]=t}var d={},f=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},p={},m={};return function(r,n){var o;"undefined"!=typeof o&&o.register?(n(o),o["import"](r)):(n(o={register:t,get:c,set:function(e,r){m[e]=r},newModule:function(e){return e},global:e}),o.set("@empty",o.newModule({})),c(r))}}("undefined"!=typeof window?window:global)("js/src/main",function(e){e.register("js/src/classes/Monkey",[],function(e){"use strict";var r;return{setters:[],execute:function(){r=function(){var e=function(e){this.name=e,console.log("es6 monkey class loaded...")};return $traceurRuntime.createClass(e,{say:function(e){console.log(this.name+" says: "+e)},how:function(){console.log("I am bob"),console.log("built via jspm/grunt")}},{})}(),e("Monkey",r)}}}),e.register("js/src/controllers/MainController",[],function(e){"use strict";var r;return{setters:[],execute:function(){r=function(){var e=function(){console.log("MainController loaded..."),this.name="Monkey Bob",this.firstName="Monkey",this.lastName="Bob"};return $traceurRuntime.createClass(e,{setname:function(){return"set name func called"},learnMore:function(){alert("clicked")}},{})}(),e("MainController",r)}}}),e.register("js/src/main",["js/src/classes/Monkey","js/src/controllers/MainController"],function(){"use strict";var e,r,t,n;return{setters:[function(r){e=r.Monkey},function(e){r=e.MainController}],execute:function(){t=new e("bob"),t.say("cats are aliens"),t.how(),n=angular.module("myApp",[]),n.controller("mainController",r),n.directive("helloWorld",function(){return{restrict:"AE",replace:"true",template:"<h3>Hello JS Module World!!</h3>"}}),n.directive("someDirective",function(){return{scope:{},controller:r,controllerAs:"ctrl",bindToController:!0,templateUrl:"templates/someDirective.html"}})}}})});
//# sourceMappingURL=build.js.map