!function(){var e={5492:function(e){function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"$current_image_number",null),r(this,"bench_picture_sources",["../src/images/bench_pics/00001.png","../src/images/bench_pics/00002.png","../src/images/bench_pics/00003.png","../src/images/bench_pics/00004.png","../src/images/bench_pics/00005.png","../src/images/bench_pics/00006.png","../src/images/bench_pics/00007.png"]);var t=document.getElementById("canvas");t.width=400,t.height=600;var n=t.getContext("2d");n.fillStyle="grey",n.fillRect(0,0,350,600),this.$current_image_number=0,this.renderCurrentImage(n,this.$current_image_number),this.ctx=n}var n,u;return n=e,(u=[{key:"renderCurrentImage",value:function(e,t){var r=new Image;r.src=this.bench_picture_sources[t],r.onload=function(){e.drawImage(r,0,0)};var n=document.querySelector(".our_container"),u=(document.getElementsByClassName("change"),document.getElementById("next"));u&&u.remove();var a=document.getElementById("back");a&&a.remove();var c=document.createElement("BUTTON");c.setAttribute("id","back");var s=document.createTextNode("Back");c.appendChild(s),document.body.appendChild(c),n.appendChild(c);var l=document.createElement("BUTTON");l.setAttribute("id","next");var i=document.createTextNode("Next");l.appendChild(i),document.body.appendChild(l),n.appendChild(l)}},{key:"hello",value:function(){console.log("benchting a lot")}},{key:"nextImage",value:function(){return this.$current_image_number=this.$current_image_number+1,this.renderCurrentImage(this.ctx,this.$current_image_number%7),this.$current_image_number%7}},{key:"lastImage",value:function(){return 0===this.$current_image_number?this.$current_image_number:this.$current_image_number=this.$current_image_number-1,this.renderCurrentImage(this.ctx,this.$current_image_number%7),this.$current_image_number%7}}])&&t(n.prototype,u),Object.defineProperty(n,"prototype",{writable:!1}),e}();e.exports=n},8084:function(e,t,r){"use strict";r.r(t),r.d(t,{buttons:function(){return n}});var n=function(){for(var e=["squat","bench","deadlift"],t=0;t<e.length;t++)document.getElementById(e[t]).addEventListener("click",(function(){}))}},4539:function(e){function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var r,n;return r=e,(n=[{key:"chartRender",value:function(){d3.scaleBand().rangeRound([0,800]).padding(.1),d3.scaleLinear().range([370,0])}}])&&t(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}();e.exports=r},174:function(e,t,r){"use strict";r.r(t),r.d(t,{exertion:function(){return n}});var n=[{Squat:{1:[{muscle:"Biceps",value:1},{muscle:"Lats",value:2},{muscle:"Lower-back",value:2},{muscle:"Trapezius",value:4},{muscle:"Deltoids",value:2},{muscle:"Triceps",value:2},{muscle:"Pectorals",value:1},{muscle:"Abs",value:5},{muscle:"Glutes",value:4},{muscle:"Quads",value:4},{muscle:"Hamstrings",value:4},{muscle:"Calves",value:5}],2:[{muscle:"Biceps",value:1},{muscle:"Lats",value:3},{muscle:"Lower-back",value:4},{muscle:"Trapezius",value:4},{muscle:"Deltoids",value:2},{muscle:"Triceps",value:2},{muscle:"Pectorals",value:1},{muscle:"Abs",value:7},{muscle:"Glutes",value:5},{muscle:"Quads",value:5},{muscle:"Hamstrings",value:6},{muscle:"Calves",value:6}],3:[{muscle:"Biceps",value:1},{muscle:"Lats",value:4},{muscle:"Lower-back",value:6},{muscle:"Trapezius",value:4},{muscle:"Deltoids",value:2},{muscle:"Triceps",value:2},{muscle:"Pectorals",value:1},{muscle:"Abs",value:7},{muscle:"Glutes",value:6},{muscle:"Quads",value:7},{muscle:"Hamstrings",value:7},{muscle:"Calves",value:6}],4:[{muscle:"Biceps",value:1},{muscle:"Lats",value:6},{muscle:"Lower-back",value:9},{muscle:"Trapezius",value:5},{muscle:"Deltoids",value:2},{muscle:"Triceps",value:2},{muscle:"Pectorals",value:2},{muscle:"Abs",value:10},{muscle:"Glutes",value:9},{muscle:"Quads",value:10},{muscle:"Hamstrings",value:9},{muscle:"Calves",value:8}],5:[{muscle:"Biceps",value:1},{muscle:"Lats",value:6},{muscle:"Lower-back",value:10},{muscle:"Trapezius",value:5},{muscle:"Deltoids",value:3},{muscle:"Triceps",value:2},{muscle:"Pectorals",value:1},{muscle:"Abs",value:10},{muscle:"Glutes",value:10},{muscle:"Quads",value:10},{muscle:"Hamstrings",value:9},{muscle:"Calves",value:8}],6:[{muscle:"Biceps",value:1},{muscle:"Lats",value:5},{muscle:"Lower-back",value:8},{muscle:"Trapezius",value:4},{muscle:"Deltoids",value:2},{muscle:"Triceps",value:2},{muscle:"Pectorals",value:1},{muscle:"Abs",value:8},{muscle:"Glutes",value:9},{muscle:"Quads",value:9},{muscle:"Hamstrings",value:7},{muscle:"Calves",value:6}],7:[{muscle:"Biceps",value:1},{muscle:"Lats",value:2},{muscle:"Lower-back",value:3},{muscle:"Trapezius",value:4},{muscle:"Deltoids",value:2},{muscle:"Triceps",value:2},{muscle:"Pectorals",value:1},{muscle:"Abs",value:5},{muscle:"Glutes",value:6},{muscle:"Quads",value:5},{muscle:"Hamstrings",value:5},{muscle:"Calves",value:5}]},Bench:{1:[{muscle:"Biceps",value:4},{muscle:"Lats",value:4},{muscle:"Lower-back",value:3},{muscle:"Trapezius",value:2},{muscle:"Deltoids",value:3},{muscle:"Triceps",value:4},{muscle:"Pectorals",value:4},{muscle:"Abs",value:2},{muscle:"Glutes",value:1},{muscle:"Quads",value:1},{muscle:"Hamstrings",value:1},{muscle:"Calves",value:1}],2:[{muscle:"Biceps",value:2},{muscle:"Lats",value:4},{muscle:"Lower-back",value:3},{muscle:"Trapezius",value:2},{muscle:"Deltoids",value:3},{muscle:"Triceps",value:5},{muscle:"Pectorals",value:5},{muscle:"Abs",value:2},{muscle:"Glutes",value:1},{muscle:"Quads",value:1},{muscle:"Hamstrings",value:1},{muscle:"Calves",value:1}],3:[{muscle:"Biceps",value:2},{muscle:"Lats",value:4},{muscle:"Lower-back",value:3},{muscle:"Trapezius",value:2},{muscle:"Deltoids",value:4},{muscle:"Triceps",value:7},{muscle:"Pectorals",value:7},{muscle:"Abs",value:2},{muscle:"Glutes",value:1},{muscle:"Quads",value:1},{muscle:"Hamstrings",value:1},{muscle:"Calves",value:1}],4:[{muscle:"Biceps",value:2},{muscle:"Lats",value:4},{muscle:"Lower-back",value:3},{muscle:"Trapezius",value:2},{muscle:"Deltoids",value:6},{muscle:"Triceps",value:10},{muscle:"Pectorals",value:9},{muscle:"Abs",value:4},{muscle:"Glutes",value:2},{muscle:"Quads",value:3},{muscle:"Hamstrings",value:1},{muscle:"Calves",value:3}],5:[{muscle:"Biceps",value:2},{muscle:"Lats",value:4},{muscle:"Lower-back",value:3},{muscle:"Trapezius",value:2},{muscle:"Deltoids",value:6},{muscle:"Triceps",value:10},{muscle:"Pectorals",value:10},{muscle:"Abs",value:2},{muscle:"Glutes",value:1},{muscle:"Quads",value:1},{muscle:"Hamstrings",value:1},{muscle:"Calves",value:1}],6:[{muscle:"Biceps",value:2},{muscle:"Lats",value:4},{muscle:"Lower-back",value:3},{muscle:"Trapezius",value:2},{muscle:"Deltoids",value:5},{muscle:"Triceps",value:8},{muscle:"Pectorals",value:8},{muscle:"Abs",value:2},{muscle:"Glutes",value:1},{muscle:"Quads",value:1},{muscle:"Hamstrings",value:1},{muscle:"Calves",value:1}],7:[{muscle:"Biceps",value:2},{muscle:"Lats",value:4},{muscle:"Lower-back",value:3},{muscle:"Trapezius",value:2},{muscle:"Deltoids",value:4},{muscle:"Triceps",value:7},{muscle:"Pectorals",value:6},{muscle:"Abs",value:2},{muscle:"Glutes",value:1},{muscle:"Quads",value:1},{muscle:"Hamstrings",value:1},{muscle:"Calves",value:1}]},Deadlift:{1:[{muscle:"Biceps",value:1},{muscle:"Lats",value:4},{muscle:"Lower-back",value:3},{muscle:"Trapezius",value:2},{muscle:"Deltoids",value:1},{muscle:"Triceps",value:2},{muscle:"Pectorals",value:1},{muscle:"Abs",value:4},{muscle:"Glutes",value:3},{muscle:"Quads",value:4},{muscle:"Hamstrings",value:3},{muscle:"Calves",value:3}],2:[{muscle:"Biceps",value:4},{muscle:"Lats",value:6},{muscle:"Lower-back",value:10},{muscle:"Trapezius",value:2},{muscle:"Deltoids",value:1},{muscle:"Triceps",value:2},{muscle:"Pectorals",value:1},{muscle:"Abs",value:6},{muscle:"Glutes",value:8},{muscle:"Quads",value:10},{muscle:"Hamstrings",value:7},{muscle:"Calves",value:6}],3:[{muscle:"Biceps",value:4},{muscle:"Lats",value:6},{muscle:"Lower-back",value:10},{muscle:"Trapezius",value:2},{muscle:"Deltoids",value:1},{muscle:"Triceps",value:2},{muscle:"Pectorals",value:1},{muscle:"Abs",value:9},{muscle:"Glutes",value:8},{muscle:"Quads",value:10},{muscle:"Hamstrings",value:8},{muscle:"Calves",value:6}],4:[{muscle:"Biceps",value:4},{muscle:"Lats",value:7},{muscle:"Lower-back",value:10},{muscle:"Trapezius",value:2},{muscle:"Deltoids",value:1},{muscle:"Triceps",value:2},{muscle:"Pectorals",value:1},{muscle:"Abs",value:9},{muscle:"Glutes",value:10},{muscle:"Quads",value:8},{muscle:"Hamstrings",value:9},{muscle:"Calves",value:4}],5:[{muscle:"Biceps",value:4},{muscle:"Lats",value:8},{muscle:"Lower-back",value:7},{muscle:"Trapezius",value:2},{muscle:"Deltoids",value:1},{muscle:"Triceps",value:2},{muscle:"Pectorals",value:1},{muscle:"Abs",value:6},{muscle:"Glutes",value:10},{muscle:"Quads",value:7},{muscle:"Hamstrings",value:7},{muscle:"Calves",value:4}],6:[{muscle:"Biceps",value:4},{muscle:"Lats",value:8},{muscle:"Lower-back",value:5},{muscle:"Trapezius",value:2},{muscle:"Deltoids",value:1},{muscle:"Triceps",value:2},{muscle:"Pectorals",value:1},{muscle:"Abs",value:5},{muscle:"Glutes",value:8},{muscle:"Quads",value:6},{muscle:"Hamstrings",value:7},{muscle:"Calves",value:4}],7:[{muscle:"Biceps",value:4},{muscle:"Lats",value:7},{muscle:"Lower-back",value:5},{muscle:"Trapezius",value:2},{muscle:"Deltoids",value:1},{muscle:"Triceps",value:2},{muscle:"Pectorals",value:1},{muscle:"Abs",value:5},{muscle:"Glutes",value:6},{muscle:"Quads",value:6},{muscle:"Hamstrings",value:6},{muscle:"Calves",value:4}]}}]},8341:function(e){function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"$current_image_number",null),r(this,"deadlift_picture_sources",["../src/images/deadlift_pics/00001.png","../src/images/deadlift_pics/00002.png","../src/images/deadlift_pics/00003.png","../src/images/deadlift_pics/00004.png","../src/images/deadlift_pics/00005.png","../src/images/deadlift_pics/00006.png","../src/images/deadlift_pics/00007.png"]);var t=document.getElementById("canvas");t.width=400,t.height=600;var n=t.getContext("2d");n.fillRect(0,0,350,600),this.$current_image_number=0,this.renderCurrentImage(n,this.$current_image_number),this.ctx=n}var n,u;return n=e,(u=[{key:"renderCurrentImage",value:function(e,t){var r=new Image;r.src=this.deadlift_picture_sources[t],r.onload=function(){e.drawImage(r,0,0)};var n=document.querySelector(".our_container"),u=(document.getElementsByClassName("change"),document.getElementById("next"));u&&u.remove();var a=document.getElementById("back");a&&a.remove();var c=document.createElement("BUTTON");c.setAttribute("id","back");var s=document.createTextNode("Back");c.appendChild(s),document.body.appendChild(c),n.appendChild(c);var l=document.createElement("BUTTON");l.setAttribute("id","next");var i=document.createTextNode("Next");l.appendChild(i),document.body.appendChild(l),n.appendChild(l)}},{key:"nextImage",value:function(){return this.$current_image_number=this.$current_image_number+1,this.renderCurrentImage(this.ctx,this.$current_image_number%7),this.$current_image_number%7}},{key:"lastImage",value:function(){return 0===this.$current_image_number?this.$current_image_number:this.$current_image_number=this.$current_image_number-1,this.renderCurrentImage(this.ctx,this.$current_image_number%7),this.$current_image_number%7}}])&&t(n.prototype,u),Object.defineProperty(n,"prototype",{writable:!1}),e}();e.exports=n},2535:function(e,t,r){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var u=r(8316),a=r(5492),c=r(8341),s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r;return t=e,(r=[{key:"makeImage",value:function(e){"Squat"===e?squat_instance=new u:"Bench"===e?bench_instance=new a:deadlift_instance=new c}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();e.exports=s},8316:function(e){function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"$current_image_number",null),r(this,"squat_picture_sources",["../src/images/squat_pics/00001.png","../src/images/squat_pics/00002.png","../src/images/squat_pics/00003.png","../src/images/squat_pics/00004.png","../src/images/squat_pics/00005.png","../src/images/squat_pics/00006.png","../src/images/squat_pics/00007.png"]);var t=document.getElementById("canvas");t.width=400,t.height=600;var n=t.getContext("2d");n.fillRect(0,0,350,600),this.$current_image_number=0,this.renderCurrentImage(n,this.$current_image_number),this.ctx=n}var n,u;return n=e,(u=[{key:"renderCurrentImage",value:function(e,t){var r=new Image;r.src=this.squat_picture_sources[t],r.onload=function(){e.drawImage(r,0,0)};var n=document.querySelector(".our_container"),u=(document.getElementsByClassName("change"),document.getElementById("next"));u&&u.remove();var a=document.getElementById("back");a&&a.remove();var c=document.createElement("BUTTON");c.setAttribute("id","back");var s=document.createTextNode("Back");c.appendChild(s),document.body.appendChild(c),n.appendChild(c);var l=document.createElement("BUTTON");l.setAttribute("id","next");var i=document.createTextNode("Next");l.appendChild(i),document.body.appendChild(l),n.appendChild(l)}},{key:"hello",value:function(){console.log("squatting a lot")}},{key:"nextImage",value:function(){return this.$current_image_number=this.$current_image_number+1,this.renderCurrentImage(this.ctx,this.$current_image_number%7),this.$current_image_number%7}},{key:"lastImage",value:function(){return 0===this.$current_image_number?this.$current_image_number:this.$current_image_number=this.$current_image_number-1,this.renderCurrentImage(this.ctx,this.$current_image_number%7),this.$current_image_number%7}}])&&t(n.prototype,u),Object.defineProperty(n,"prototype",{writable:!1}),e}();e.exports=n},9662:function(e,t,r){var n=r(7854),u=r(614),a=r(6330),c=n.TypeError;e.exports=function(e){if(u(e))return e;throw c(a(e)+" is not a function")}},9670:function(e,t,r){var n=r(7854),u=r(111),a=n.String,c=n.TypeError;e.exports=function(e){if(u(e))return e;throw c(a(e)+" is not an object")}},1318:function(e,t,r){var n=r(5656),u=r(1400),a=r(6244),c=function(e){return function(t,r,c){var s,l=n(t),i=a(l),o=u(c,i);if(e&&r!=r){for(;i>o;)if((s=l[o++])!=s)return!0}else for(;i>o;o++)if((e||o in l)&&l[o]===r)return e||o||0;return!e&&-1}};e.exports={includes:c(!0),indexOf:c(!1)}},2092:function(e,t,r){var n=r(9974),u=r(1702),a=r(8361),c=r(7908),s=r(6244),l=r(5417),i=u([].push),o=function(e){var t=1==e,r=2==e,u=3==e,o=4==e,m=6==e,v=7==e,f=5==e||m;return function(p,d,g,b){for(var h,y,_=c(p),x=a(_),w=n(d,g),T=s(x),C=0,O=b||l,k=t?O(p,T):r||v?O(p,0):void 0;T>C;C++)if((f||C in x)&&(y=w(h=x[C],C,_),e))if(t)k[C]=y;else if(y)switch(e){case 3:return!0;case 5:return h;case 6:return C;case 2:i(k,h)}else switch(e){case 4:return!1;case 7:i(k,h)}return m?-1:u||o?o:k}};e.exports={forEach:o(0),map:o(1),filter:o(2),some:o(3),every:o(4),find:o(5),findIndex:o(6),filterReject:o(7)}},1194:function(e,t,r){var n=r(7293),u=r(5112),a=r(7392),c=u("species");e.exports=function(e){return a>=51||!n((function(){var t=[];return(t.constructor={})[c]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},7475:function(e,t,r){var n=r(7854),u=r(3157),a=r(4411),c=r(111),s=r(5112)("species"),l=n.Array;e.exports=function(e){var t;return u(e)&&(t=e.constructor,(a(t)&&(t===l||u(t.prototype))||c(t)&&null===(t=t[s]))&&(t=void 0)),void 0===t?l:t}},5417:function(e,t,r){var n=r(7475);e.exports=function(e,t){return new(n(e))(0===t?0:t)}},4326:function(e,t,r){var n=r(1702),u=n({}.toString),a=n("".slice);e.exports=function(e){return a(u(e),8,-1)}},648:function(e,t,r){var n=r(7854),u=r(1694),a=r(614),c=r(4326),s=r(5112)("toStringTag"),l=n.Object,i="Arguments"==c(function(){return arguments}());e.exports=u?c:function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(e){}}(t=l(e),s))?r:i?c(t):"Object"==(n=c(t))&&a(t.callee)?"Arguments":n}},9920:function(e,t,r){var n=r(2597),u=r(3887),a=r(1236),c=r(3070);e.exports=function(e,t,r){for(var s=u(t),l=c.f,i=a.f,o=0;o<s.length;o++){var m=s[o];n(e,m)||r&&n(r,m)||l(e,m,i(t,m))}}},8880:function(e,t,r){var n=r(9781),u=r(3070),a=r(9114);e.exports=n?function(e,t,r){return u.f(e,t,a(1,r))}:function(e,t,r){return e[t]=r,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8052:function(e,t,r){var n=r(614),u=r(8880),a=r(6339),c=r(3072);e.exports=function(e,t,r,s){s||(s={});var l=s.enumerable,i=void 0!==s.name?s.name:t;return n(r)&&a(r,i,s),s.global?l?e[t]=r:c(t,r):(s.unsafe?e[t]&&(l=!0):delete e[t],l?e[t]=r:u(e,t,r)),e}},3072:function(e,t,r){var n=r(7854),u=Object.defineProperty;e.exports=function(e,t){try{u(n,e,{value:t,configurable:!0,writable:!0})}catch(r){n[e]=t}return t}},9781:function(e,t,r){var n=r(7293);e.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(e,t,r){var n=r(7854),u=r(111),a=n.document,c=u(a)&&u(a.createElement);e.exports=function(e){return c?a.createElement(e):{}}},8113:function(e,t,r){var n=r(5005);e.exports=n("navigator","userAgent")||""},7392:function(e,t,r){var n,u,a=r(7854),c=r(8113),s=a.process,l=a.Deno,i=s&&s.versions||l&&l.version,o=i&&i.v8;o&&(u=(n=o.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!u&&c&&(!(n=c.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=c.match(/Chrome\/(\d+)/))&&(u=+n[1]),e.exports=u},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(e,t,r){var n=r(7854),u=r(1236).f,a=r(8880),c=r(8052),s=r(3072),l=r(9920),i=r(4705);e.exports=function(e,t){var r,o,m,v,f,p=e.target,d=e.global,g=e.stat;if(r=d?n:g?n[p]||s(p,{}):(n[p]||{}).prototype)for(o in t){if(v=t[o],m=e.dontCallGetSet?(f=u(r,o))&&f.value:r[o],!i(d?o:p+(g?".":"#")+o,e.forced)&&void 0!==m){if(typeof v==typeof m)continue;l(v,m)}(e.sham||m&&m.sham)&&a(v,"sham",!0),c(r,o,v,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(e){return!0}}},9974:function(e,t,r){var n=r(1702),u=r(9662),a=r(4374),c=n(n.bind);e.exports=function(e,t){return u(e),void 0===t?e:a?c(e,t):function(){return e.apply(t,arguments)}}},4374:function(e,t,r){var n=r(7293);e.exports=!n((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,r){var n=r(4374),u=Function.prototype.call;e.exports=n?u.bind(u):function(){return u.apply(u,arguments)}},6530:function(e,t,r){var n=r(9781),u=r(2597),a=Function.prototype,c=n&&Object.getOwnPropertyDescriptor,s=u(a,"name"),l=s&&"something"===function(){}.name,i=s&&(!n||n&&c(a,"name").configurable);e.exports={EXISTS:s,PROPER:l,CONFIGURABLE:i}},1702:function(e,t,r){var n=r(4374),u=Function.prototype,a=u.bind,c=u.call,s=n&&a.bind(c,c);e.exports=n?function(e){return e&&s(e)}:function(e){return e&&function(){return c.apply(e,arguments)}}},5005:function(e,t,r){var n=r(7854),u=r(614),a=function(e){return u(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?a(n[e]):n[e]&&n[e][t]}},8173:function(e,t,r){var n=r(9662);e.exports=function(e,t){var r=e[t];return null==r?void 0:n(r)}},7854:function(e,t,r){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},2597:function(e,t,r){var n=r(1702),u=r(7908),a=n({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return a(u(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,r){var n=r(9781),u=r(7293),a=r(317);e.exports=!n&&!u((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,r){var n=r(7854),u=r(1702),a=r(7293),c=r(4326),s=n.Object,l=u("".split);e.exports=a((function(){return!s("z").propertyIsEnumerable(0)}))?function(e){return"String"==c(e)?l(e,""):s(e)}:s},2788:function(e,t,r){var n=r(1702),u=r(614),a=r(5465),c=n(Function.toString);u(a.inspectSource)||(a.inspectSource=function(e){return c(e)}),e.exports=a.inspectSource},9909:function(e,t,r){var n,u,a,c=r(8536),s=r(7854),l=r(1702),i=r(111),o=r(8880),m=r(2597),v=r(5465),f=r(6200),p=r(3501),d="Object already initialized",g=s.TypeError,b=s.WeakMap;if(c||v.state){var h=v.state||(v.state=new b),y=l(h.get),_=l(h.has),x=l(h.set);n=function(e,t){if(_(h,e))throw new g(d);return t.facade=e,x(h,e,t),t},u=function(e){return y(h,e)||{}},a=function(e){return _(h,e)}}else{var w=f("state");p[w]=!0,n=function(e,t){if(m(e,w))throw new g(d);return t.facade=e,o(e,w,t),t},u=function(e){return m(e,w)?e[w]:{}},a=function(e){return m(e,w)}}e.exports={set:n,get:u,has:a,enforce:function(e){return a(e)?u(e):n(e,{})},getterFor:function(e){return function(t){var r;if(!i(t)||(r=u(t)).type!==e)throw g("Incompatible receiver, "+e+" required");return r}}}},3157:function(e,t,r){var n=r(4326);e.exports=Array.isArray||function(e){return"Array"==n(e)}},614:function(e){e.exports=function(e){return"function"==typeof e}},4411:function(e,t,r){var n=r(1702),u=r(7293),a=r(614),c=r(648),s=r(5005),l=r(2788),i=function(){},o=[],m=s("Reflect","construct"),v=/^\s*(?:class|function)\b/,f=n(v.exec),p=!v.exec(i),d=function(e){if(!a(e))return!1;try{return m(i,o,e),!0}catch(e){return!1}},g=function(e){if(!a(e))return!1;switch(c(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!f(v,l(e))}catch(e){return!0}};g.sham=!0,e.exports=!m||u((function(){var e;return d(d.call)||!d(Object)||!d((function(){e=!0}))||e}))?g:d},4705:function(e,t,r){var n=r(7293),u=r(614),a=/#|\.prototype\./,c=function(e,t){var r=l[s(e)];return r==o||r!=i&&(u(t)?n(t):!!t)},s=c.normalize=function(e){return String(e).replace(a,".").toLowerCase()},l=c.data={},i=c.NATIVE="N",o=c.POLYFILL="P";e.exports=c},111:function(e,t,r){var n=r(614);e.exports=function(e){return"object"==typeof e?null!==e:n(e)}},1913:function(e){e.exports=!1},2190:function(e,t,r){var n=r(7854),u=r(5005),a=r(614),c=r(7976),s=r(3307),l=n.Object;e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=u("Symbol");return a(t)&&c(t.prototype,l(e))}},6244:function(e,t,r){var n=r(7466);e.exports=function(e){return n(e.length)}},6339:function(e,t,r){var n=r(7293),u=r(614),a=r(2597),c=r(9781),s=r(6530).CONFIGURABLE,l=r(2788),i=r(9909),o=i.enforce,m=i.get,v=Object.defineProperty,f=c&&!n((function(){return 8!==v((function(){}),"length",{value:8}).length})),p=String(String).split("String"),d=e.exports=function(e,t,r){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!a(e,"name")||s&&e.name!==t)&&v(e,"name",{value:t,configurable:!0}),f&&r&&a(r,"arity")&&e.length!==r.arity&&v(e,"length",{value:r.arity});try{r&&a(r,"constructor")&&r.constructor?c&&v(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=o(e);return a(n,"source")||(n.source=p.join("string"==typeof t?t:"")),e};Function.prototype.toString=d((function(){return u(this)&&m(this).source||l(this)}),"toString")},4758:function(e){var t=Math.ceil,r=Math.floor;e.exports=Math.trunc||function(e){var n=+e;return(n>0?r:t)(n)}},133:function(e,t,r){var n=r(7392),u=r(7293);e.exports=!!Object.getOwnPropertySymbols&&!u((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:function(e,t,r){var n=r(7854),u=r(614),a=r(2788),c=n.WeakMap;e.exports=u(c)&&/native code/.test(a(c))},3070:function(e,t,r){var n=r(7854),u=r(9781),a=r(4664),c=r(3353),s=r(9670),l=r(4948),i=n.TypeError,o=Object.defineProperty,m=Object.getOwnPropertyDescriptor;t.f=u?c?function(e,t,r){if(s(e),t=l(t),s(r),"function"==typeof e&&"prototype"===t&&"value"in r&&"writable"in r&&!r.writable){var n=m(e,t);n&&n.writable&&(e[t]=r.value,r={configurable:"configurable"in r?r.configurable:n.configurable,enumerable:"enumerable"in r?r.enumerable:n.enumerable,writable:!1})}return o(e,t,r)}:o:function(e,t,r){if(s(e),t=l(t),s(r),a)try{return o(e,t,r)}catch(e){}if("get"in r||"set"in r)throw i("Accessors not supported");return"value"in r&&(e[t]=r.value),e}},1236:function(e,t,r){var n=r(9781),u=r(6916),a=r(5296),c=r(9114),s=r(5656),l=r(4948),i=r(2597),o=r(4664),m=Object.getOwnPropertyDescriptor;t.f=n?m:function(e,t){if(e=s(e),t=l(t),o)try{return m(e,t)}catch(e){}if(i(e,t))return c(!u(a.f,e,t),e[t])}},8006:function(e,t,r){var n=r(6324),u=r(748).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,u)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,r){var n=r(1702);e.exports=n({}.isPrototypeOf)},6324:function(e,t,r){var n=r(1702),u=r(2597),a=r(5656),c=r(1318).indexOf,s=r(3501),l=n([].push);e.exports=function(e,t){var r,n=a(e),i=0,o=[];for(r in n)!u(s,r)&&u(n,r)&&l(o,r);for(;t.length>i;)u(n,r=t[i++])&&(~c(o,r)||l(o,r));return o}},5296:function(e,t){"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,u=n&&!r.call({1:2},1);t.f=u?function(e){var t=n(this,e);return!!t&&t.enumerable}:r},2140:function(e,t,r){var n=r(7854),u=r(6916),a=r(614),c=r(111),s=n.TypeError;e.exports=function(e,t){var r,n;if("string"===t&&a(r=e.toString)&&!c(n=u(r,e)))return n;if(a(r=e.valueOf)&&!c(n=u(r,e)))return n;if("string"!==t&&a(r=e.toString)&&!c(n=u(r,e)))return n;throw s("Can't convert object to primitive value")}},3887:function(e,t,r){var n=r(5005),u=r(1702),a=r(8006),c=r(5181),s=r(9670),l=u([].concat);e.exports=n("Reflect","ownKeys")||function(e){var t=a.f(s(e)),r=c.f;return r?l(t,r(e)):t}},4488:function(e,t,r){var n=r(7854).TypeError;e.exports=function(e){if(null==e)throw n("Can't call method on "+e);return e}},6200:function(e,t,r){var n=r(2309),u=r(9711),a=n("keys");e.exports=function(e){return a[e]||(a[e]=u(e))}},5465:function(e,t,r){var n=r(7854),u=r(3072),a="__core-js_shared__",c=n[a]||u(a,{});e.exports=c},2309:function(e,t,r){var n=r(1913),u=r(5465);(e.exports=function(e,t){return u[e]||(u[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.22.7",mode:n?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.7/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(e,t,r){var n=r(9303),u=Math.max,a=Math.min;e.exports=function(e,t){var r=n(e);return r<0?u(r+t,0):a(r,t)}},5656:function(e,t,r){var n=r(8361),u=r(4488);e.exports=function(e){return n(u(e))}},9303:function(e,t,r){var n=r(4758);e.exports=function(e){var t=+e;return t!=t||0===t?0:n(t)}},7466:function(e,t,r){var n=r(9303),u=Math.min;e.exports=function(e){return e>0?u(n(e),9007199254740991):0}},7908:function(e,t,r){var n=r(7854),u=r(4488),a=n.Object;e.exports=function(e){return a(u(e))}},7593:function(e,t,r){var n=r(7854),u=r(6916),a=r(111),c=r(2190),s=r(8173),l=r(2140),i=r(5112),o=n.TypeError,m=i("toPrimitive");e.exports=function(e,t){if(!a(e)||c(e))return e;var r,n=s(e,m);if(n){if(void 0===t&&(t="default"),r=u(n,e,t),!a(r)||c(r))return r;throw o("Can't convert object to primitive value")}return void 0===t&&(t="number"),l(e,t)}},4948:function(e,t,r){var n=r(7593),u=r(2190);e.exports=function(e){var t=n(e,"string");return u(t)?t:t+""}},1694:function(e,t,r){var n={};n[r(5112)("toStringTag")]="z",e.exports="[object z]"===String(n)},6330:function(e,t,r){var n=r(7854).String;e.exports=function(e){try{return n(e)}catch(e){return"Object"}}},9711:function(e,t,r){var n=r(1702),u=0,a=Math.random(),c=n(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+c(++u+a,36)}},3307:function(e,t,r){var n=r(133);e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,r){var n=r(9781),u=r(7293);e.exports=n&&u((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(e,t,r){var n=r(7854),u=r(2309),a=r(2597),c=r(9711),s=r(133),l=r(3307),i=u("wks"),o=n.Symbol,m=o&&o.for,v=l?o:o&&o.withoutSetter||c;e.exports=function(e){if(!a(i,e)||!s&&"string"!=typeof i[e]){var t="Symbol."+e;s&&a(o,e)?i[e]=o[e]:i[e]=l&&m?m(t):v(t)}return i[e]}},1249:function(e,t,r){"use strict";var n=r(2109),u=r(2092).map;n({target:"Array",proto:!0,forced:!r(1194)("map")},{map:function(e){return u(this,e,arguments.length>1?arguments[1]:void 0)}})}},t={};function r(n){var u=t[n];if(void 0!==u)return u.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){"use strict";r(1249),r(8084),r(8316),r(5492),r(8341);var e=r(2535),t=r(174).exertion;r(4539),console.log(t[0].Squat[1]),console.log("webpack is working"),console.log(d3),document.addEventListener("DOMContentLoaded",(function(){var r=new e;console.log("hello");var n="squat";function u(e,r){var n=t[0][e][r],u=270,a=d3.scaleBand().rangeRound([0,1e3]).padding(.2),c=d3.scaleLinear().range([u,0]),s=d3.select("svg").attr("width",1e3).attr("height",300);a.domain(n.map((function(e){return e.muscle}))),c.domain([0,12]);var l=s.append("g");l.append("g").call(d3.axisBottom(a).tickSizeOuter(0)).attr("transform","translate(0, ".concat(u,")")).attr("color","rgb(191, 189, 189)"),l.selectAll(".bar").data(n).enter().append("rect").classed("bar",!0).attr("width",a.bandwidth()).attr("height",(function(e){return u-c(e.value)})).attr("x",(function(e){return a(e.muscle)})).attr("y",(function(e){return c(e.value)})),l.selectAll(".label").data(n).enter().append("text").text((function(e){return e.value})).attr("x",(function(e){return a(e.muscle)+a.bandwidth()/2})).attr("y",(function(e){return c(e.value)-20})).attr("text-anchor","middle").classed("label",!0)}document.getElementById("Squat").addEventListener("click",(function(){r.makeImage("Squat"),n="Squat",d3.select("g").remove(),u("Squat",1)})),document.getElementById("Bench").addEventListener("click",(function(){r.makeImage("Bench"),n="Bench",d3.select("g").remove(),u("Bench",1)})),document.getElementById("Deadlift").addEventListener("click",(function(){r.makeImage("Deadlift"),n="Deadlift",d3.select("g").remove(),u("Deadlift",1)})),document.querySelector(".our_container").addEventListener("click",(function(e){if(e.target.matches("#next"))if("Squat"===n){var t=squat_instance.nextImage();console.log(t),d3.select("g").remove(),u("Squat",t+1)}else if("Bench"===n){var r=bench_instance.nextImage();d3.select("g").remove(),u("Bench",r+1)}else{var a=deadlift_instance.nextImage();d3.select("g").remove(),u("Deadlift",a+1)}if(e.target.matches("#back"))if("Squat"===n){var c=squat_instance.lastImage();d3.select("g").remove(),u("Squat",c+1)}else if("Bench"===n){var s=bench_instance.lastImage();d3.select("g").remove(),u("Bench",s+1)}else{var l=deadlift_instance.lastImage();d3.select("g").remove(),u("Deadlift",l+1)}}))}))}()}();
//# sourceMappingURL=main.js.map