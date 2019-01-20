// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"js/main.js":[function(require,module,exports) {
$(document).ready(function () {
  "use strict";

  var window_width = $(window).width(),
      window_height = window.innerHeight,
      header_height = $(".default-header").height(),
      header_height_static = $(".site-header.static").outerHeight(),
      fitscreen = window_height - header_height; // $(window).on('load', function() {
  //        // Animate loader off screen
  //        $(".preloader").fadeOut("slow");;
  //    });

  $(".fullscreen").css("height", window_height);
  $(".fitscreen").css("height", fitscreen); //-------- Active Sticky Js ----------//

  $(".sticky-header").sticky({
    topSpacing: 0
  }); // -------   Active Mobile Menu-----//

  $(".mobile-btn").on('click', function (e) {
    e.preventDefault();
    $(".main-menu").slideToggle();
    $("span", this).toggleClass("lnr-menu lnr-cross");
    $(".main-menu").addClass('mobile-menu');
  });
  $(".main-menu li a").on('click', function (e) {
    e.preventDefault();
    $(".mobile-menu").slideUp();
    $(".mobile-btn span").toggleClass("lnr-menu lnr-cross");
  });
  $(".lang-btn").on('click', function (e) {
    e.preventDefault();
    $(".lang-menu").slideToggle();
  }); // ----- mixItUp not used -----//
  //----- In particular, element #filter-content react to dropdown data-toggle, which is undiserable -----//
  // $(function(){
  //     $('#Container').mixItUp();
  // });

  /*
    var mixer = mixitup('#filter-content');
    $(".controls .filter").on('click', function(event){
        $(".controls .filter").removeClass('active');
        $(this).addClass('active');
    });
  */
  // Add smooth scrolling to Menu links

  $(".main-menu li a, .smooth").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - -10
      }, 600, function () {
        window.location.hash = hash;
      });
    }
  });
  $(document).ready(function () {
    $('#mc_embed_signup').find('form').ajaxChimp();
  });
});

(function ($) {
  $.fn.bekeyProgressbar = function (options) {
    options = $.extend({
      animate: true,
      animateText: true
    }, options);
    var $this = $(this);
    var $progressBar = $this;
    var $progressCount = $progressBar.find('.progressBar-percentage-count');
    var $circle = $progressBar.find('.progressBar-circle');
    var percentageProgress = $progressBar.attr('data-progress');
    var percentageRemaining = 100 - percentageProgress;
    var percentageText = $progressCount.parent().attr('data-progress'); //Calcule la circonférence du cercle

    var radius = $circle.attr('r');
    var diameter = radius * 2;
    var circumference = Math.round(Math.PI * diameter); //Calcule le pourcentage d'avancement

    var percentage = circumference * percentageRemaining / 100;
    $circle.css({
      'stroke-dasharray': circumference,
      'stroke-dashoffset': percentage
    }); //Animation de la barre de progression

    if (options.animate === true) {
      $circle.css({
        'stroke-dashoffset': circumference
      }).animate({
        'stroke-dashoffset': percentage
      }, 3000);
    } //Animation du texte (pourcentage)


    if (options.animateText == true) {
      $({
        Counter: 0
      }).animate({
        Counter: percentageText
      }, {
        duration: 3000,
        step: function step() {
          $progressCount.text(Math.ceil(this.Counter) + '%');
        }
      });
    } else {
      $progressCount.text(percentageText + '%');
    }
  };
})(jQuery);

$(document).ready(function () {
  $('.progressBar--animateNone1').bekeyProgressbar({
    animate: false,
    animateText: false
  });
  /*
    if ($(window).width() > 767) {
  
  
    $('.progressBar--animateCircle').bekeyProgressbar({
      animate: true,
      animateText: false
    });
  
    $('.progressBar--animateText1').bekeyProgressbar({
      animate: false,
      animateText: true
    });
  
    $('.progressBar--animateText2').bekeyProgressbar({
      animate: false,
      animateText: true
    });
    $('.progressBar--animateText3').bekeyProgressbar({
      animate: false,
      animateText: true
    });
  
    $('.progressBar--animateAll').bekeyProgressbar();
  }else{*/

  $('.progressBar--animateNone2').bekeyProgressbar({
    animate: false,
    animateText: false
  });
  $('.progressBar--animateNone3').bekeyProgressbar({
    animate: false,
    animateText: false
  });
  $('.progressBar--animateNone4').bekeyProgressbar({
    animate: false,
    animateText: false
  }); //}
});
},{}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64911" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.map