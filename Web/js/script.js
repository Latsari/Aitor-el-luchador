$(document).ready(function() {  
  // nav
  // nav clase
  //$(".nav a").on("click", function(){
   //$(".nav").find(".active").removeClass("active");
   //$(this).parent().addClass("active");
   //});  
  // new
  $('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});
  // end new
    $('nav').affix({
      offset: {
        top: function() { return  $('#imagen-inicial').height(); }
      }
     });
  
  $('a[href*="#"]:not([href="#"])').click(function(event) {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      if (this.hash !== "") {

          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        if ( $("nav").hasClass("affix")) {
          $('html, body').animate({
            scrollTop: $(hash).offset().top// - 51
          }, 800, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
      } else {
          $('html, body').animate({
            scrollTop: $(hash).offset().top - 69
          }, 800, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
           window.location.hash = hash;
          });
      }

        } // End if
      
      /*
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 51
        }, 300);
        return false;
      }
      */
    }
  });
  
  // Animación
  var $window           = $(window),
      win_height_padded = $window.height() * 1.1,
      isTouch           = Modernizr.touch;

  if (isTouch) { $('.revealOnScroll').addClass('animated'); }
  
  $window.on('scroll', revealOnScroll);

  function revealOnScroll() {    
    var scrolled = $window.scrollTop(),
        win_height_padded = $window.height() * 1.1;

    // Showed...
    $(".revealOnScroll:not(.animated)").each(function () {
      var $this     = $(this),
          offsetTop = $this.offset().top;

      if (scrolled + win_height_padded > offsetTop) {
        if ($this.data('timeout')) {
          window.setTimeout(function(){
            $this.addClass('animated ' + $this.data('animation'));
          }, parseInt($this.data('timeout'),10));
        } else {
          $this.addClass('animated ' + $this.data('animation'));
        }
      }
    });
    // Hidden...
   $(".revealOnScroll.animated").each(function (index) {
      var $this     = $(this),
          offsetTop = $this.offset().top;
      if (scrolled + win_height_padded < offsetTop) {
        $(this).removeClass('animated fadeInUp flipInX lightSpeedIn')
      }
    });
  }

  revealOnScroll();
  
});
