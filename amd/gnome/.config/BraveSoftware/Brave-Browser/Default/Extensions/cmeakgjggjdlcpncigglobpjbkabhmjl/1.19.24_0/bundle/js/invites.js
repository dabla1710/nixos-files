var invites=webpackJsonp_name_([7],{17:function(n,e){n.exports=jQuery},323:function(n,e,t){"use strict";function i(n){return function(){var e=n.apply(this,arguments);return new Promise(function(n,t){function i(a,r){try{var o=e[a](r),s=o.value}catch(n){return void t(n)}if(!o.done)return Promise.resolve(s).then(function(n){i("next",n)},function(n){i("throw",n)});n(s)}return i("next")})}}function a(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function o(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=t(12),d=t.n(s),c=t(23),l=t(2),u=(t(22),t(646)),f=(t.n(u),t(1)),p=function(n){function e(){return a(this,e),r(this,n.apply(this,arguments))}return o(e,n),e.prototype.onLoad=function(){function n(){return t.apply(this,arguments)}var t=i(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:d()(".icon_item.icon_create_group").length&&e.addInvitesControls(),e.bindAjaxContentHighlighting();case 2:case"end":return n.stop()}},n,this)}));return n}(),e.addInvitesControls=function(){function n(){return t.apply(this,arguments)}var t=i(regeneratorRuntime.mark(function n(){var t,i,a,r,o,s;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.getCookie("enableSIH"),t=null===t||"true"===t,e.addSIHPanel(t),!t){n.next=25;break}return e.addIgnoreButton(),e.addDeclineAllSentiInviteButton(),n.next=8,f.a.get({apikey:""});case 8:if(i=n.sent,!(i.apikey.length>0)){n.next=24;break}if(a=[],r=d()('.invite_row[id^="invite_"]'),r.each(function(n,e){var t=d()(e),i=t.data("steamid");a.push(i);var r=t.find(".friendPlayerLevelNum").text();t.data("steamlvl",r),t.css("position","relative");var o=t.find(".actions");d()('<div class="btn-hide" data-hidden="true">\n        <img src="//steamcommunity-a.akamaihd.net/public/images/login/throbber.gif" alt="Working...">\n      </div>').insertBefore(o);t.append('\n      <div class="rep">\n        <div class="profile-info"></div>\n        <div class="ban-info"></div>\n        <div class="inventory-info">\n          <h3>Inventory</h3>\n        </div>\n      </div>\n      ')}),!a.length){n.next=22;break}return n.next=16,l.a.getPlayerSummaries(a.join());case 16:return o=n.sent,n.next=19,l.a.getPlayerBans(a.join());case 19:return s=n.sent,n.next=22,Promise.all(r.map(function(n,t){return e.addPlayerInfo(t,o,s)}));case 22:n.next=25;break;case 24:window.location.href.includes("pending")&&setTimeout(function(){d()(".friends_content").prepend('\n              <span class="text info-message">'+i18next.t("controls:friends.info_message")+"</span>\n              ")},500);case 25:case"end":return n.stop()}},n,this)}));return n}(),e.bindAjaxContentHighlighting=function(){new MutationObserver(function(n){n.forEach(function(n){for(var t=0;t<n.addedNodes.length;t+=1){"friends_pending"===n.addedNodes[t].id&&d()(".icon_item.icon_create_group").length&&e.addInvitesControls()}})}).observe(document,{subtree:!0,childList:!0})},e.addHideButton=function(n){var e=n.find(".btn-hide");e.append('<span class="btn_grey_black btn_details btn_small">\n    <span>Show more info<span class="btn_details_arrow down"></span></span>\n    </span>'),e.find("img").remove(),e.on("click",function(n){var e=d()(n.currentTarget),t=e.siblings(".rep"),i=e.find(".btn_details_arrow"),a=e.data("hidden");a?(i.parent().html('Hide more info<span class="btn_details_arrow up"></span>'),t.show()):(i.parent().html('Show more info<span class="btn_details_arrow down"></span>'),t.hide()),e.data("hidden",!a)})},e.getInventoryInfo=function(){function n(n){return e.apply(this,arguments)}var e=i(regeneratorRuntime.mark(function n(e){var t,i,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URL(e),n.next=3,l.a.sendRequest({method:"GET",url:window.location.protocol+"//"+t.hostname+t.pathname+"inventory/"});case 3:return i=n.sent,a=[],d()(d.a.parseHTML(i)).find(".games_list_tab").each(function(n,e){var t=d()(e).find(".games_list_tab_name").text(),i=d()(e).find(".games_list_tab_number").text();a.push('<div class="list">'+t+": <strong>"+/\d+/.exec(i)[0]+" items</strong></div>")}),n.abrupt("return",a.join(""));case 7:case"end":return n.stop()}},n,this)}));return n}(),e.addBanIcons=function(n,e){var i='\n    <div class="invite_block_icon">\n      <div class="ban-icon"></div>\n    </div>',a=n.find(".invite_row_left .invite_block_icon:first");if(t.i(l.l)(e.VACBanned)){var r=d()(i);r.find(".ban-icon").addClass("vac").text("VAC"),r.find(".ban-icon").attr("title","Number of Bans: "+e.NumberOfVACBans+" (Last added "+e.DaysSinceLastBan+" days ago)"),r.insertAfter(a)}if(t.i(l.l)(e.CommunityBanned)){var o=d()(i);o.find(".ban-icon").addClass("community").text("C"),o.find(".ban-icon").attr("title","Banned"),o.insertAfter(a)}if(t.i(l.l)(e.EconomyBan)){var s=d()(i);s.find(".ban-icon").addClass("trade").text("t"),s.find(".ban-icon").attr("title","Currently Trade Banned"),s.insertAfter(a)}},e.addPlayerInfo=function(){function n(n,e,t){return a.apply(this,arguments)}var a=i(regeneratorRuntime.mark(function n(i,a,r){var o,s,c,u,f,p;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return o=d()(i),s=o.data("steamid"),c=a[s],o.find(".profile-info").append("\n      <div>Joined Steam: <strong>"+new Date(1e3*c.timecreated).toLocaleDateString()+"</strong></div>\n      <div>Steam Level: <strong>"+o.data("steamlvl")+'</strong></div>\n      <div>Online Status: <strong class="caps">'+(t.i(l.l)(c.personastate)?"Online":"Offline")+'</strong></div>\n      <div>Profile privacy: <strong class="caps">'+(3==+c.communityvisibilitystate?"Public":"Private")+"</strong></div>\n      <div>Steam Name: <strong>"+c.personaname+"</strong></div>\n      <div>Steam ID: <strong>"+s+"</strong></div>\n      <div>Profile URL: <strong>"+c.profileurl+"</strong></div>\n    </div>\n    ").show(),u=r[s],f=o.find(".ban-info"),f.append('\n      <div style="text-transform: capitalize;">'+i18next.t("controls:profile.communityban")+": <strong>"+(t.i(l.l)(u.CommunityBanned)?"Banned":i18next.t("controls:profile.none"))+'</strong></div>\n      <div style="text-transform: capitalize;">'+i18next.t("controls:profile.tradeban")+": <strong>"+(t.i(l.l)(u.EconomyBan)?u.EconomyBan:i18next.t("controls:profile.none"))+'</strong></div>\n      <div style="text-transform: capitalize;">'+i18next.t("controls:profile.vacban")+": <strong>"+(t.i(l.l)(u.VACBanned)?"Banned":i18next.t("controls:profile.none"))+"</strong></div>\n    ").show(),(t.i(l.l)(u.VACBanned)||t.i(l.l)(u.CommunityBanned)||t.i(l.l)(u.EconomyBan))&&f.addClass("warning"),e.addBanIcons(o,u),n.next=11,e.getInventoryInfo(c.profileurl);case 11:return p=n.sent,o.find(".inventory-info").append(p).show(),e.addHideButton(o),n.abrupt("return",!0);case 15:case"end":return n.stop()}},n,this)}));return n}(),e.addIgnoreButton=function(){var n=d()('<button class="profile_friends manage_link btnv6_blue_hoverfade btn_small btn_uppercase ignore_zero sih">\n      <span>Ignore Level 0</span>\n    </button>');n.click(function(){return d()(".invite_row").each(function(n,e){var t=d()(e);"0"===t.data("steamlvl")&&t.find(".linkStandard:contains(Ignore)")[0].click()}),!1}),d()("#friends_pending .profile_friends.title_bar").append(n)},e.addDeclineAllSentiInviteButton=function(){var n=d()("#manage_friends_control").children("span").text();d()(".pending_sent_invites").find("button").before('\n      <button class="profile_friends manage_link btnv6_blue_hoverfade btn_small btn_uppercase ignore_zero decline-all-sent sih">\n        <span>'+n+"</span>\n      </button>\n    ")},e.addSIHPanel=function(n){if(window.location.href.includes("pending")){var t=d()(".friends_content").css("width"),i=d()(".friends_header_bg"),a='\n    <div class="sih_panel_mode row" style="width: '+t+'">\n      <div class="sih_bg"></div>\n      <div class="sig_status_container">\n       <a href="javascript:void(0)" class="sih_status_button '+(n?"on":"off")+'" data-enabled="'+n+'">\n                <div class="sih_status_icon"></div>\n                <div class="sih_status_text">SIH '+(n?"ON":"OFF")+"</div>\n      </a>\n\n      </div>\n    </div>";d()(i).append(a),d()(".sih_status_button").click(function(){e.setCookie("enableSIH",!n,365,window.location.href),window.location.reload()})}},e.getCookie=function(n){var e=document.cookie.match("(^|; )"+n+"=([^;]*)");return e&&e[2]?e[2]:null},e.setCookie=function(n,e,t,i){t||(t=0),i||(i="/");var a=new Date;a.setTime(a.getTime()+864e5*t),document.cookie=n+"="+e+"; expires="+a.toGMTString()+";path="+i},e}(c.a);e.default=new p},646:function(n,e){},689:function(n,e,t){t(4),n.exports=t(323)}},[689]);