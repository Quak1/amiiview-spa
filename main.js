(()=>{"use strict";var t="https://www.amiiboapi.com/api/";const n=function(n){return e=void 0,r=void 0,a=function(){var e,r;return function(t,n){var e,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=n.call(t,o)}catch(t){a=[6,t],r=0}finally{e=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}(this,(function(i){switch(i.label){case 0:e=n?""+t+n:t,i.label=1;case 1:return i.trys.push([1,4,,5]),console.log(e),[4,fetch(e)];case 2:return[4,i.sent().json()];case 3:return[2,i.sent()];case 4:return r=i.sent(),console.log("Fetch error",r),[3,5];case 5:return[2]}}))},new((i=void 0)||(i=Promise))((function(t,n){function o(t){try{u(a.next(t))}catch(t){n(t)}}function c(t){try{u(a.throw(t))}catch(t){n(t)}}function u(n){var e;n.done?t(n.value):(e=n.value,e instanceof i?e:new i((function(t){t(e)}))).then(o,c)}u((a=a.apply(e,r||[])).next())}));var e,r,i,a};var e=function(t,n,e,r){return new(e||(e=Promise))((function(i,a){function o(t){try{u(r.next(t))}catch(t){a(t)}}function c(t){try{u(r.throw(t))}catch(t){a(t)}}function u(t){var n;t.done?i(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(o,c)}u((r=r.apply(t,n||[])).next())}))},r=function(t,n){var e,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=n.call(t,o)}catch(t){a=[6,t],r=0}finally{e=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},i=function(t){return e(void 0,void 0,void 0,(function(){var e,i;return r(this,(function(r){switch(r.label){case 0:return[4,n("amiibo/?amiiboSeries="+t.key)];case 1:return e=r.sent(),i=e.amiibo[0],[2,'\n\t\t<article class="Series-item">\n\t\t\t<a href="#/'+t.key+'/">\n\t\t\t\t<h2>'+t.name+'</h2>\n\t\t\t</a>\n\t\t\t<img src="'+i.image+'" alt="'+i.name+'">\n\t\t</article>']}}))}))};const a=function(){return location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/"};const o=function(){return'\n\t\t<div class="Error404">\n\t\t\t<h2>Error 404</h2>\n\t\t</div>\n\t'},c=function(t){return/[a-z]+$/.test(t)?"/"+t:t.startsWith("0x")?"/series":"/"===t?t:"/:id"};var u={"/":function(){return e(void 0,void 0,void 0,(function(){var t,a;return r(this,(function(o){switch(o.label){case 0:return[4,n("amiiboseries")];case 1:return t=o.sent(),a='\n\t\t<h2>Available Amiibo Series:</h2>\n\t\t<div class="Series">\n\t\t',[4,Promise.all(t.amiibo.map((function(t){return e(void 0,void 0,void 0,(function(){return r(this,(function(n){return[2,i(t)]}))}))})))];case 2:return[2,a+o.sent().join("")+"\n\t\t</div>\n\t"]}}))}))},"/:id":function(){return t=void 0,e=void 0,i=function(){var t,e,r,i;return function(t,n){var e,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=n.call(t,o)}catch(t){a=[6,t],r=0}finally{e=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}(this,(function(o){switch(o.label){case 0:return t=a(),[4,n("amiibo/?id="+t)];case 1:return e=o.sent(),r=e.amiibo,[4,n("amiiboseries?name="+r.amiiboSeries)];case 2:return[2,'\n\t\t<div class="Amiibo-inner">\n\t\t\t<a href="#/'+(i=o.sent()).amiibo[0].key+'/">\n\t\t\t\t<h2>Amiibo series: '+i.amiibo[0].name+'</h2>\n\t\t\t</a>\n\t\t\t<article class="Amiibo-card">\n\t\t\t\t<img src="'+r.image+'" alt="'+r.name+' picture">\n\t\t\t\t<h2>'+r.name+'</h2>\n\t\t\t</article>\n\t\t\t<article class="Amiibo-card">\n\t\t\t\t<h3>Character: '+r.character+"</h3>\n\t\t\t\t<h3>Game Series: "+r.gameSeries+"</h3>\n\t\t\t\t<h3>Release Dates: <br>"+Object.entries(r.release).map((function(t){return"\n\t\t\t\t\t"+t[0]+": "+t[1]+"<br>\n\t\t\t\t"})).join("")+"</h3>\n\t\t\t\t<h3>Amiibo Type: "+r.type+"</h3>\n\t\t\t</article>\n\t\t</div>\n\t"]}}))},new((r=void 0)||(r=Promise))((function(n,a){function o(t){try{u(i.next(t))}catch(t){a(t)}}function c(t){try{u(i.throw(t))}catch(t){a(t)}}function u(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,c)}u((i=i.apply(t,e||[])).next())}));var t,e,r,i},"/series":function(){return t=void 0,e=void 0,i=function(){var t,e;return function(t,n){var e,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=n.call(t,o)}catch(t){a=[6,t],r=0}finally{e=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}(this,(function(r){switch(r.label){case 0:return t=a(),[4,n("amiibo/?amiiboSeries="+t)];case 1:return e=r.sent(),[4,n("amiiboseries?key="+t)];case 2:return[2,'\n\t\t<div class="Amiibos">\n\t\t<h2>Amiibo Series: '+r.sent().amiibo.name+"</h2>\n\t\t"+e.amiibo.map((function(t){return'\n\t\t\t<article class="Amiibo-item">\n\t\t\t\t<img src="'+t.image+'" alt="'+t.character+' picture">\n\t\t\t\t\t<a href="#/'+t.head+t.tail+'/">\n\t\t\t\t\t\t<h2>'+t.character+" from "+t.gameSeries+"</h2>\n\t\t\t\t\t</a>\n\t\t\t</article>\n\t\t"})).join("")+"\n\t\t</div>\n\t"]}}))},new((r=void 0)||(r=Promise))((function(n,a){function o(t){try{u(i.next(t))}catch(t){a(t)}}function c(t){try{u(i.throw(t))}catch(t){a(t)}}function u(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,c)}u((i=i.apply(t,e||[])).next())}));var t,e,r,i}};const l=function(){return t=void 0,n=void 0,r=function(){var t,n,e,r,i,l;return function(t,n){var e,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=n.call(t,o)}catch(t){a=[6,t],r=0}finally{e=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}(this,(function(s){switch(s.label){case 0:return t=document.getElementById("header"),n=document.getElementById("content"),e=t,[4,'\n\t\t<div class="header__logo">\n\t\t\t<h1>\n\t\t\t\t<a href="/amiiview-spa/#">\n\t\t\t\t\tAmiiview\n\t\t\t\t</a>\n\t\t\t\t<a href="/">\n\t\t\t\t\tAmiiview-home\n\t\t\t\t</a>\n\t\t\t</h1>\n\t\t</div>\n\t\t<div class="header__nav">\n\t\t\t<a href="#/about/">\n\t\t\t\tAbout\n\t\t\t</a>\n\t\t</div>\n\t'];case 1:return e.innerHTML=s.sent(),r=a(),[4,c(r)];case 2:return i=s.sent(),l=n,[4,(i in u?u[i]:o)()];case 3:return l.innerHTML=s.sent(),[2]}}))},new((e=void 0)||(e=Promise))((function(i,a){function o(t){try{u(r.next(t))}catch(t){a(t)}}function c(t){try{u(r.throw(t))}catch(t){a(t)}}function u(t){var n;t.done?i(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(o,c)}u((r=r.apply(t,n||[])).next())}));var t,n,e,r};window.addEventListener("load",l),window.addEventListener("hashchange",l)})();