(()=>{"use strict";var t="https://www.amiiboapi.com/api/";const n=function(n){return e=void 0,r=void 0,o=function(){var e,r,i;return function(t,n){var e,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=n.call(t,a)}catch(t){o=[6,t],r=0}finally{e=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}(this,(function(o){switch(o.label){case 0:e=n?""+t+n:t,o.label=1;case 1:return o.trys.push([1,4,,5]),console.log(e),[4,fetch(e)];case 2:return r=o.sent(),console.log(":)"),console.log(r),[4,r.json()];case 3:return[2,o.sent()];case 4:return i=o.sent(),console.log("Fetch error",i),[3,5];case 5:return[2]}}))},new((i=void 0)||(i=Promise))((function(t,n){function a(t){try{u(o.next(t))}catch(t){n(t)}}function c(t){try{u(o.throw(t))}catch(t){n(t)}}function u(n){var e;n.done?t(n.value):(e=n.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,c)}u((o=o.apply(e,r||[])).next())}));var e,r,i,o};var e=function(t,n,e,r){return new(e||(e=Promise))((function(i,o){function a(t){try{u(r.next(t))}catch(t){o(t)}}function c(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){var n;t.done?i(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,c)}u((r=r.apply(t,n||[])).next())}))},r=function(t,n){var e,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=n.call(t,a)}catch(t){o=[6,t],r=0}finally{e=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},i=function(t){return e(void 0,void 0,void 0,(function(){var e,i;return r(this,(function(r){switch(r.label){case 0:return[4,n("amiibo/?amiiboSeries="+t.key)];case 1:return e=r.sent(),i=e.amiibo[0],[2,'\n\t\t<article class="Series-item">\n\t\t\t<a href="#/'+t.key+'/">\n\t\t\t\t<h2>'+t.name+'</h2>\n\t\t\t</a>\n\t\t\t<img src="'+i.image+'" alt="'+i.name+'">\n\t\t</article>']}}))}))};const o=function(){return location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/"};const a=function(){return'\n\t\t<div class="Error404">\n\t\t\t<h2>Error 404</h2>\n\t\t</div>\n\t'},c=function(t){return/[a-z]+$/.test(t)?"/"+t:t.startsWith("0x")?"/series":"/"===t?t:"/:id"};var u={"/":function(){return e(void 0,void 0,void 0,(function(){var t,o;return r(this,(function(a){switch(a.label){case 0:return[4,n("amiiboseries")];case 1:return t=a.sent(),o='\n\t\t<h2>Available Amiibo Series:</h2>\n\t\t<div class="Series">\n\t\t',[4,Promise.all(t.amiibo.map((function(t){return e(void 0,void 0,void 0,(function(){return r(this,(function(n){return[2,i(t)]}))}))})))];case 2:return[2,o+a.sent().join("")+"\n\t\t</div>\n\t"]}}))}))},"/:id":function(){return t=void 0,e=void 0,i=function(){var t,e,r,i;return function(t,n){var e,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=n.call(t,a)}catch(t){o=[6,t],r=0}finally{e=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}(this,(function(a){switch(a.label){case 0:return t=o(),[4,n("amiibo/?id="+t)];case 1:return e=a.sent(),r=e.amiibo,[4,n("amiiboseries?name="+r.amiiboSeries)];case 2:return[2,'\n\t\t<div class="Amiibo-inner">\n\t\t\t<a href="#/'+(i=a.sent()).amiibo[0].key+'/">\n\t\t\t\t<h2>Amiibo series: '+i.amiibo[0].name+'</h2>\n\t\t\t</a>\n\t\t\t<article class="Amiibo-card">\n\t\t\t\t<img src="'+r.image+'" alt="'+r.name+' picture">\n\t\t\t\t<h2>'+r.name+'</h2>\n\t\t\t</article>\n\t\t\t<article class="Amiibo-card">\n\t\t\t\t<h3>Character: '+r.character+"</h3>\n\t\t\t\t<h3>Game Series: "+r.gameSeries+"</h3>\n\t\t\t\t<h3>Release Dates: <br>"+Object.entries(r.release).map((function(t){return"\n\t\t\t\t\t"+t[0]+": "+t[1]+"<br>\n\t\t\t\t"})).join("")+"</h3>\n\t\t\t\t<h3>Amiibo Type: "+r.type+"</h3>\n\t\t\t</article>\n\t\t</div>\n\t"]}}))},new((r=void 0)||(r=Promise))((function(n,o){function a(t){try{u(i.next(t))}catch(t){o(t)}}function c(t){try{u(i.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,c)}u((i=i.apply(t,e||[])).next())}));var t,e,r,i},"/series":function(){return t=void 0,e=void 0,i=function(){var t,e;return function(t,n){var e,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=n.call(t,a)}catch(t){o=[6,t],r=0}finally{e=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}(this,(function(r){switch(r.label){case 0:return t=o(),[4,n("amiibo/?amiiboSeries="+t)];case 1:return e=r.sent(),[4,n("amiiboseries?key="+t)];case 2:return[2,'\n\t\t<div class="Amiibos">\n\t\t<h2>Amiibo Series: '+r.sent().amiibo.name+"</h2>\n\t\t"+e.amiibo.map((function(t){return'\n\t\t\t<article class="Amiibo-item">\n\t\t\t\t<img src="'+t.image+'" alt="'+t.character+' picture">\n\t\t\t\t\t<a href="#/'+t.head+t.tail+'/">\n\t\t\t\t\t\t<h2>'+t.character+" from "+t.gameSeries+"</h2>\n\t\t\t\t\t</a>\n\t\t\t</article>\n\t\t"})).join("")+"\n\t\t</div>\n\t"]}}))},new((r=void 0)||(r=Promise))((function(n,o){function a(t){try{u(i.next(t))}catch(t){o(t)}}function c(t){try{u(i.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,c)}u((i=i.apply(t,e||[])).next())}));var t,e,r,i}};const l=function(){return t=void 0,n=void 0,r=function(){var t,n,e,r,i,l;return function(t,n){var e,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=n.call(t,a)}catch(t){o=[6,t],r=0}finally{e=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}(this,(function(s){switch(s.label){case 0:return t=document.getElementById("header"),n=document.getElementById("content"),e=t,[4,'\n\t\t<div class="header__logo">\n\t\t\t<h1>\n\t\t\t\t<a href="/amiiview-spa/#">\n\t\t\t\t\tAmiiview\n\t\t\t\t</a>\n\t\t\t\t<a href="/">\n\t\t\t\t\tAmiiview-home\n\t\t\t\t</a>\n\t\t\t</h1>\n\t\t</div>\n\t\t<div class="header__nav">\n\t\t\t<a href="#/about/">\n\t\t\t\tAbout\n\t\t\t</a>\n\t\t</div>\n\t'];case 1:return e.innerHTML=s.sent(),r=o(),[4,c(r)];case 2:return i=s.sent(),l=n,[4,(i in u?u[i]:a)()];case 3:return l.innerHTML=s.sent(),[2]}}))},new((e=void 0)||(e=Promise))((function(i,o){function a(t){try{u(r.next(t))}catch(t){o(t)}}function c(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){var n;t.done?i(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,c)}u((r=r.apply(t,n||[])).next())}));var t,n,e,r};window.addEventListener("load",l),window.addEventListener("hashchange",l)})();