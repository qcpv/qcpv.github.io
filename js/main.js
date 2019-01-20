$(document).ready(function() {
  "use strict";

  var window_width = $(window).width(),
    window_height = window.innerHeight,
    header_height = $(".default-header").height(),
    header_height_static = $(".site-header.static").outerHeight(),
    fitscreen = window_height - header_height;


  // $(window).on('load', function() {
  //        // Animate loader off screen
  //        $(".preloader").fadeOut("slow");;
  //    });

  $(".fullscreen").css("height", window_height)
  $(".fitscreen").css("height", fitscreen);

  //-------- Active Sticky Js ----------//
  $(".sticky-header").sticky({
    topSpacing: 0
  });

  // -------   Active Mobile Menu-----//

  $(".mobile-btn").on('click', function(e) {
    e.preventDefault();
    $(".main-menu").slideToggle();
    $("span", this).toggleClass("lnr-menu lnr-cross");
    $(".main-menu").addClass('mobile-menu');
  });
  $(".main-menu li a").on('click', function(e) {
    e.preventDefault();
    $(".mobile-menu").slideUp();
    $(".mobile-btn span").toggleClass("lnr-menu lnr-cross");
  });



  $(".lang-btn").on('click', function(e) {
    e.preventDefault();
    $(".lang-menu").slideToggle();
  });
	// ----- mixItUp not used -----//
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
  $(".main-menu li a, .smooth").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - (-10)
      }, 600, function() {

        window.location.hash = hash;
      });
    }
  });

  
  $(document).ready(function() {
    $('#mc_embed_signup').find('form').ajaxChimp();
  });
});
(function($) {

  $.fn.bekeyProgressbar = function(options) {

    options = $.extend({
      animate: true,
      animateText: true
    }, options);

    var $this = $(this);

    var $progressBar = $this;
    var $progressCount = $progressBar.find('.progressBar-percentage-count');
    var $circle = $progressBar.find('.progressBar-circle');
    var percentageProgress = $progressBar.attr('data-progress');
    var percentageRemaining = (100 - percentageProgress);
    var percentageText = $progressCount.parent().attr('data-progress');

    //Calcule la circonférence du cercle
    var radius = $circle.attr('r');
    var diameter = radius * 2;
    var circumference = Math.round(Math.PI * diameter);

    //Calcule le pourcentage d'avancement
    var percentage = circumference * percentageRemaining / 100;

    $circle.css({
      'stroke-dasharray': circumference,
      'stroke-dashoffset': percentage
    })

    //Animation de la barre de progression
    if (options.animate === true) {
      $circle.css({
        'stroke-dashoffset': circumference
      }).animate({
        'stroke-dashoffset': percentage
      }, 3000)
    }

    //Animation du texte (pourcentage)
    if (options.animateText == true) {

      $({
        Counter: 0
      }).animate({
        Counter: percentageText
      }, {
        duration: 3000,
        step: function() {
          $progressCount.text(Math.ceil(this.Counter) + '%');
        }
      });

    } else {
      $progressCount.text(percentageText + '%');
    }

  };

})(jQuery);

$(document).ready(function() {

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
    });
//}

})
