parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"CV2T":[function(require,module,exports) {
function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}!function(e){var i={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper",center:!1,getWidthFrom:"",responsiveWidth:!1},n=e(window),o=e(document),r=[],s=n.height(),c=function(){for(var t=n.scrollTop(),i=o.height(),c=i-s,a=t>c?c-t:0,p=0;p<r.length;p++){var l=r[p];if(t<=l.stickyWrapper.offset().top-l.topSpacing-a)null!==l.currentTop&&(l.stickyElement.css("width","").css("position","").css("top",""),l.stickyElement.trigger("sticky-end",[l]).parent().removeClass(l.className),l.currentTop=null);else{var d=i-l.stickyElement.outerHeight()-l.topSpacing-l.bottomSpacing-t-a;d<0?d+=l.topSpacing:d=l.topSpacing,l.currentTop!=d&&(l.stickyElement.css("width",l.stickyElement.width()).css("position","fixed").css("top",d),void 0!==l.getWidthFrom&&l.stickyElement.css("width",e(l.getWidthFrom).width()),l.stickyElement.trigger("sticky-start",[l]).parent().addClass(l.className),l.currentTop=d)}}},a=function(){s=n.height();for(var t=0;t<r.length;t++){var i=r[t];void 0!==i.getWidthFrom&&!0===i.responsiveWidth&&i.stickyElement.css("width",e(i.getWidthFrom).width())}},p={init:function(t){var n=e.extend({},i,t);return this.each(function(){var t=e(this),i=t.attr("id"),o=e("<div></div>").attr("id",i+"-sticky-wrapper").addClass(n.wrapperClassName);t.wrapAll(o),n.center&&t.parent().css({width:t.outerWidth(),marginLeft:"auto",marginRight:"auto"}),"right"==t.css("float")&&t.css({float:"none"}).parent().css({float:"right"});var s=t.parent();s.css("height",t.outerHeight()),r.push({topSpacing:n.topSpacing,bottomSpacing:n.bottomSpacing,stickyElement:t,currentTop:null,stickyWrapper:s,className:n.className,getWidthFrom:n.getWidthFrom,responsiveWidth:n.responsiveWidth})})},update:c,unstick:function(t){return this.each(function(){for(var t=e(this),i=-1,n=0;n<r.length;n++)r[n].stickyElement.get(0)==t.get(0)&&(i=n);-1!=i&&(r.splice(i,1),t.unwrap(),t.removeAttr("style"))})}};window.addEventListener?(window.addEventListener("scroll",c,!1),window.addEventListener("resize",a,!1)):window.attachEvent&&(window.attachEvent("onscroll",c),window.attachEvent("onresize",a)),e.fn.sticky=function(i){return p[i]?p[i].apply(this,Array.prototype.slice.call(arguments,1)):"object"!==t(i)&&i?void e.error("Method "+i+" does not exist on jQuery.sticky"):p.init.apply(this,arguments)},e.fn.unstick=function(i){return p[i]?p[i].apply(this,Array.prototype.slice.call(arguments,1)):"object"!==t(i)&&i?void e.error("Method "+i+" does not exist on jQuery.sticky"):p.unstick.apply(this,arguments)},e(function(){setTimeout(c,0)})}(jQuery);
},{}]},{},["CV2T"], null)
//# sourceMappingURL=/jquery.sticky.db803715.map