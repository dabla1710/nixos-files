var SIH=function(n){function a(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return n[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}var t={};return a.m=n,a.c=t,a.i=function(n){return n},a.d=function(n,t,e){a.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:e})},a.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(t,"a",t),t},a.o=function(n,a){return Object.prototype.hasOwnProperty.call(n,a)},a.p="",a(a.s=267)}({226:function(n,a,t){"use strict";function e(){c(),i(),r()}function r(){var n=o();$J(".responsive_search_name_combined").each(function(a,t){var e=$J(t).find(".discount_final_price").text(),r=RegExp("[0-9]");if(e.match(r)){var c=$J(t).parent(),i=c.attr("data-ds-appid");$J(t).children().hasClass("sih-cart")||c.find(".ds_incart_flag").length||($J('\n              <a href="javascript:void(0)" class="sih-cart">\n                 <div class="sih-cart__checkbox"></div>\n              </a>\n          ').appendTo(t),n.forEach(function(n){for(var a in n)a===i&&$J(t).find(".sih-cart").children(".sih-cart__checkbox").addClass("checked")}),$J(t).find(".sih-cart").click($J.debounce(300,function(){$J(this).children(".sih-cart__checkbox").toggleClass("checked");var a=$J(t).parent().attr("href");$J.ajax({method:"GET",url:a}).done(function(a){var t=0;$J(a).find(".game_purchase_action").each(function(a,e){var r=$J(e).find(".btn_addtocart").children("a").attr("href");if(r.includes("javascript:addToCart")&&0===t){var c=r.match(/[0-9]+/g);if(n){var o=n.findIndex(function(n){return n[i]===c[0]});if(-1===o){var f;n.push((f={},f[i]=c[0],f)),s(n),d()}else n.splice(o,1),s(n),d()}t++}})})})))}}),Ajax.Responders.register({onComplete:function(){$J(".responsive_search_name_combined").each(function(a,t){var e=$J(t).find(".discount_final_price").text(),r=RegExp("[0-9]");if(e.match(r)){var c=$J(t).parent(),i=c.attr("data-ds-appid");$J(t).children().hasClass("sih-cart")||c.find(".ds_incart_flag").length||($J('\n              <a href="javascript:void(0)" class="sih-cart">\n                 <div class="sih-cart__checkbox"></div>\n              </a>\n          ').appendTo(t),n.forEach(function(n){for(var a in n)a===i&&$J(t).find(".sih-cart").children(".sih-cart__checkbox").addClass("checked")}),$J(t).find(".sih-cart").click($J.debounce(300,function(){$J(this).children(".sih-cart__checkbox").toggleClass("checked");var a=$J(t).parent().attr("href");$J.ajax({method:"GET",url:a}).done(function(a){var t=0;$J(a).find(".game_purchase_action").each(function(a,e){var r=$J(e).find(".btn_addtocart").children("a").attr("href");if(r.includes("javascript:addToCart")&&0===t){var c=r.match(/[0-9]+/g);if(n){var o=n.findIndex(function(n){return n[i]===c[0]});if(-1===o){var f;n.push((f={},f[i]=c[0],f)),s(n),d()}else n.splice(o,1),s(n),d()}t++}})})})))}})}})}function c(){var n=o();if($J(".page_content").append('\n        <div class="row">\n            <a href="https://store.steampowered.com/cart/" class="sih-cart__button sih-cart__button_green cart-counter">'+SIHLang.cart.add_to_cart+' <span class="number">'+n.length+'</span></a>\n            <a href="javascript:void(0)" class="sih-cart__button sih-cart__button_red clear-cart_button">'+SIHLang.cart.clear_all+" </a>\n        </div>\n  "),window.outerWidth>1440){var a=+$J(".page_content").css("margin-left").replace(/px/g,"").trim()+ +$J(".page_content").css("width").replace(/px/g,"").trim();$J(".page_content").find(".row").css("left",a+20)}}function i(){var n=$J(".responsive_page_frame").find(".clear-cart_button");$J(n).click(function(){var n=o();n.length=0,s(n),window.location.reload()})}function o(){var n=localStorage.getItem("SIH_CART")||"[]";return JSON.parse(n)}function s(n){var a=JSON.stringify(n);localStorage.setItem("SIH_CART",a)}function d(){var n=o(),a=$J(".responsive_page_frame").find(".cart-counter"),t=""+n.length;$J(a).children(".number").text(t)}Object.defineProperty(a,"__esModule",{value:!0}),a.load=e;var f=t(326);t.n(f)},267:function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=t(226);t.d(a,"searchPage",function(){return e})},326:function(n,a){}});