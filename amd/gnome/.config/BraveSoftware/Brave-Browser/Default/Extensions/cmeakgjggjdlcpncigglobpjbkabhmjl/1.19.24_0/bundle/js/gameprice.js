var gameprice=webpackJsonp_name_([2],{158:function(e,n,t){"use strict";function r(e){return function(){var n=e.apply(this,arguments);return new Promise(function(e,t){function r(a,i){try{var o=n[a](i),s=o.value}catch(e){return void t(e)}if(!o.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}return r("next")})}}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var i=t(2),o=t(1),s={},c=function(){function e(){a(this,e)}return e.load=function(){function e(e){return n.apply(this,arguments)}var n=r(regeneratorRuntime.mark(function e(n){var t,r,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get({currency_rates:{}});case 2:if(t=e.sent,Object.assign(s,t.currency_rates),void 0!==n){e.next=10;break}return e.next=7,i.a.getWalletCurrency();case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=n;case 11:if(r=e.t0,s[n]&&!(Date.now()-s[n].ts>144e5)){e.next=17;break}return e.next=15,new Promise(function(e){return chrome.runtime.sendMessage({type:"GetRates",data:{base:r}},e)});case 15:a=e.sent,a.success&&(s[a.data.base]={rates:a.data.rates,ts:Date.now()},o.a.set({currency_rates:s}));case 17:case"end":return e.stop()}},e,this)}));return e}(),e.convert=function(e,n,t){return s[t]?e/s[t].rates[n]:s[n]?e*s[n].rates[t]:null},e}();n.a=c},17:function(e,n){e.exports=jQuery},318:function(e,n,t){"use strict";function r(e){return function(){var n=e.apply(this,arguments);return new Promise(function(e,t){function r(a,i){try{var o=n[a](i),s=o.value}catch(e){return void t(e)}if(!o.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}return r("next")})}}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function o(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var s=t(12),c=t.n(s),u=t(23),l=t(2),p=t(120),f=t(1),d=t(158),h=t(22),_=t(15),g=t(650),v=(t.n(g),t(654)),m=(t.n(v),t(653)),w=(t.n(m),t(652)),y=(t.n(w),t(651)),b=(t.n(y),t(649)),x=(t.n(b),t(643));t.n(x);window.SIHID||(window.SIHID=chrome.runtime.id||"cmeakgjggjdlcpncigglobpjbkabhmjl");var k=function(e){function n(){return a(this,n),i(this,e.apply(this,arguments))}return o(n,e),n.prototype.onLoad=function(){function e(){return t.apply(this,arguments)}var t=r(regeneratorRuntime.mark(function e(){var t,r,a,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new h.Localization,e.next=3,Promise.all([f.a.get({show_online_users:_.a.show_online_users,show_streamlink:_.a.show_streamlink,show_current_price:_.a.show_current_price,show_historical_price:_.a.show_historical_price,preferred_country:_.a.preferred_country,show_all_stores:_.a.show_all_stores,stores:_.a.stores,show_regional_price:_.a.show_regional_price,regional_countries:_.a.regional_countries}),t.onLoadStarter()]);case 3:return r=e.sent,a=r[0],e.next=7,f.a.set(a);case 7:return a.show_streamlink&&n.addVideoLinks(),e.next=10,l.a.getWalletCurrency();case 10:return i=e.sent,e.next=13,d.a.load(i);case 13:if((a.show_current_price||a.show_historical_price)&&n.getPrices(a),!a.show_online_users){e.next=17;break}return e.next=17,n.addOnlineUsers();case 17:a.show_regional_price&&n.getRegionalPrice(a.regional_countries,i),n.addBanner();case 19:case"end":return e.stop()}},e,this)}));return e}(),n.addVideoLinks=function(){var e=encodeURIComponent(c()(".apphub_AppName:first").text().replace(/(\u2122)/g,"").replace(/(\xAE)/g,"")),n='\n      <div class="sih_video_links">\n        <div class="title">'+i18next.t("controls:gameinfo.checkit")+':</div>\n        <div class="links">\n          <a class="icon_link" href="https://www.youtube.com/results?search_query='+e+'" target="_blank">\n            <span class="icon-youtube"></span>\n          </a>\n          <a class="icon_link" href="https://www.twitch.tv/directory/game/'+e+'" target="_blank">\n            <span class="icon-twitch"></span>\n          </a>\n        </div>\n      </div>\n    ';c()(".game_meta_data").has("#category_block").prepend(n)},n.addOnlineUsers=function(){function e(){return n.apply(this,arguments)}var n=r(regeneratorRuntime.mark(function e(){var n,t,r,a,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.a.getAppId(window.location.href),e.next=3,l.a.getOnlineUsersByAppId(n);case 3:if(t=e.sent,r=t.updatedAt,null!==(a=t.count)){e.next=8;break}return e.abrupt("return");case 8:i='\n      <div class="sih_online_users">\n        <div class="online-users-count">\n          <div class="title">'+i18next.t("controls:gameinfo.online")+':</div>\n          <div class="value">'+a+'</div>\n        </div>\n        <div class="online-users-updatedat">\n          <div class="title">'+i18next.t("controls:gameinfo.updatedAt")+':</div>\n          <div class="value">'+new Date(r).toLocaleString()+"</div>\n        </div>\n      </div>\n    ",c()(".game_meta_data").has("#category_block").prepend(i);case 10:case"end":return e.stop()}},e,this)}));return e}(),n.getPrices=function(){function e(e){return n.apply(this,arguments)}var n=r(regeneratorRuntime.mark(function e(n){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=[],c()("input[name=subid]").each(function(e,n){n.value&&t.push("sub/"+n.value)}),c()("input[name=appid]").each(function(e,n){n.value&&t.push("app/"+n.value)}),c()("input[name=bundleid]").each(function(e,n){n.value&&t.push("bundle/"+n.value)}),t.length){e.next=6;break}return e.abrupt("return");case 6:case"end":return e.stop()}},e,this)}));return e}(),n.getFinalPriceInCents=function(e,n,t){return n!==t?d.a.convert(100*e,n,t):100*e},n.getRegionalPrice=function(){function e(e,n){return t.apply(this,arguments)}var t=r(regeneratorRuntime.mark(function e(t,r){var a,i,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],i={},c()("input[name=subid]").each(function(e,n){n.value&&a.push(n.value)}),e.next=5,Promise.all(a.map(function(e){return n.getAllRegionalGamePrices(e,t)}));case 5:o=e.sent,o.forEach(function(e){return c.a.extend(i,e)}),c.a.each(a,function(e,n){var a=c()("input[name=subid][value="+n+"]").parent().parent().parent();a.prepend('<div class="sih_regional_price" />');var o=p.a.parsePrice(a.find(".price, .discount_final_price").text());c.a.each(t,function(e,t){var s=i[n][t];if(s){var u=void 0;u=s.currency!==o.currencyCode?d.a.convert(s.final,s.currency,o.currencyCode):s.final;var l=u-o.value,f=l>0?"sih_price_higher":"sih_price_lower",h=chrome.runtime.getURL("assets/blank.gif"),_=c()('\n            <div class="sih_region" >\n              <span class="sih_flag">\n                <img src="'+h+'" class="flag flag-'+t+'" title="'+t.toUpperCase()+'">'+p.a.vCurrencyFormat(s.final,s.currency)+'\n              </span>\n              <span class="sih_regional_price_converted '+f+'">'+p.a.vCurrencyFormat(u,r)+'</span>\n              <div class="sih_regional_price_saving">\n                '+p.a.vCurrencyFormat(l,r)+'<span class="'+(l>0?"arrow_up":"arrow_down")+'"></span>\n              </div>\n            </div>\n          ');a.addClass("sih_game_node"),a.find(".sih_regional_price").append(_)}}),a.find(".sih_region").length?a.find("h1").prepend('<span class="sih_globe" />'):a.find(".sih_regional_price").remove()});case 8:case"end":return e.stop()}},e,this)}));return e}(),n.getAllRegionalGamePrices=function(){function e(e,n){return t.apply(this,arguments)}var t=r(regeneratorRuntime.mark(function e(t,r){var a,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={},e.next=3,Promise.all(r.map(function(e){return n.getGamePriceByRegion(t,e)}));case 3:return i=e.sent,i.forEach(function(e){return c.a.extend(!0,a,e)}),e.abrupt("return",a);case 6:case"end":return e.stop()}},e,this)}));return e}(),n.getGamePriceByRegion=function(){function e(e,t){return n.apply(this,arguments)}var n=r(regeneratorRuntime.mark(function e(n,t){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.sendRequest({method:"GET",url:"//store.steampowered.com/api/packagedetails/",data:{cc:t,packageids:n}});case 2:return r=e.sent,r[n].success?(r[n][t]=r[n].data.price,delete r[n].data):r[n][t]=null,delete r[n].success,e.abrupt("return",r);case 6:case"end":return e.stop()}},e,this)}));return e}(),n.addBanner=function(){function e(){return n.apply(this,arguments)}var n=r(regeneratorRuntime.mark(function e(){var n,t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.a.getAppId(window.location.href),e.next=3,l.a.getStoreRegionCountryCodeV2();case 3:t=e.sent,r=[],c()(".glance_tags.popular_tags a").each(function(e,n){r.push(c()(n).html().trim())}),c()("#genresAndManufacturer span a").each(function(e,n){var t=c()(n).html().trim();r.includes(t)||r.push(t)}),chrome.runtime.sendMessage(window.SIHID,{type:"GET_BANNER_LIVE",data:{appId:n,countryId:t,tags:r.join(","),time:Date.now()}},function(e){if(e.success&&e.data){var n="sih_game_banner_"+e.data.orgId+"_"+e.data.bannerId,t="sih_game_banner_"+e.data.orgId+"_"+e.data.bannerId+"_img",r='\n          <a class="sih_game_banner" href="'+e.data.link+'" id="'+n+'">\n            <img src="'+e.data.img+'" id="'+t+'">\n          </a>\n        ',a=c()(".game_meta_data").has("#category_block");a.prepend(r);e.data.orgId,e.data.bannerId,e.data.bannerId;a.find("#"+t).on("load",function(){}),a.find("#"+n).click(function(){}),a.find(".sih_game_banner").click(function(){f.a.setLocal({opened_from_banner:!0})})}});case 8:case"end":return e.stop()}},e,this)}));return e}(),n}(u.a);n.default=new k},643:function(e,n){},649:function(e,n,t){e.exports=t.p+"../css/fontello.css"},650:function(e,n,t){e.exports=t.p+"../font/fontello.eot"},651:function(e,n,t){e.exports=t.p+"../font/fontello.svg"},652:function(e,n,t){e.exports=t.p+"../font/fontello.ttf"},653:function(e,n,t){e.exports=t.p+"../font/fontello.woff"},654:function(e,n,t){e.exports=t.p+"../font/fontello.woff2"},684:function(e,n,t){t(4),e.exports=t(318)}},[684]);