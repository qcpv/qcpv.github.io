parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"tIaq":[function(require,module,exports) {
var t=["ja","en","zh","fr"],e=sessionStorage.getItem("splang"),n=null,s=function(t){$("[tkey]").each(function(e){var n=t[$(this).attr("tkey")];$(this).html(n)})};function o(t){sessionStorage.setItem("splang",t),location.reload()}null==e&&(e=navigator.language.substr(0,2)),t.includes(e)?"ja"==e?($.getJSON("/lang/ja.json",s),document.documentElement.style.setProperty("--main-font","'Noto Sans SC', sans-serif"),document.documentElement.style.setProperty("--title-font","'Noto Sans SC', sans-serif"),document.getElementById("content-t1").setAttribute("data-src","/img/t1_ja.png"),document.getElementById("content-t3").setAttribute("data-src","/img/int_ja.png")):"zh"==e?($.getJSON("/lang/zh.json",s),document.documentElement.style.setProperty("--main-font","'Noto Sans SC', sans-serif"),document.documentElement.style.setProperty("--title-font","'Noto Sans SC', sans-serif")):"en"==e?($.getJSON("/lang/en.json",s),document.documentElement.style.setProperty("--main-font","'M PLUS 1p', sans-serif"),document.documentElement.style.setProperty("--title-font","'Timmana', sans-serif")):($.getJSON("/lang/fr.json",s),document.documentElement.style.setProperty("--main-font","'fira-sans', sans-serif"),document.documentElement.style.setProperty("--title-font","'abril-fatface', serif")):$.getJSON("/lang/en.json",s);
},{}]},{},["tIaq"], null)
//# sourceMappingURL=/lang.cd5bda14.map