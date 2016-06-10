$(document).ready(function(){
//-------------inicio mixitup------------
    $(function(){
      $('#containerin').mixItUp();
    });
//------------para el foco-icon----------
	function Opacidad(){
        if ($('#foco').hasClass('white')) {
             $('#foco').fadeTo('slow',0.3)
             $('#foco').removeClass('white');
        }
        else {
        	$('#foco').fadeTo('slow',0.8); 
            $('#foco').addClass('white');
        }
    }

    setInterval(Opacidad, 5000);
	
/*How to make the hero section always fill browser window?*/
    $(window).resize(function() {
        $('#hero').height($(window).height());
    }).resize();


//---scroll animation-----
    $('a[href^="#"]').on('click', function(event) {
        var target = $( $(this).attr('href') );

        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

//-----------------efecto-lines-------------------
  jQuery.rnd = function(m,n) {
      m = parseInt(m);
      n = parseInt(n);
      return Math.floor( Math.random() * (n - m + 1) ) + m;
  }
  function lines() {
    $.each($(".particletext.lines"), function(){
      var linecount = ($(this).width()/50)*10;
      for(var i = 0; i <= linecount; i++) {
         $(this).append('<span class="particle" style="top:' + $.rnd(-30,30) + '%; left:' + $.rnd(-10,110) + '%;width:' + $.rnd(1,3) + 'px; height:' + $.rnd(20,80) + '%;animation-delay: -' + ($.rnd(0,30)/10) + 's;"></span>');
      }
    });
  }
  function initparticles() {
      lines();
  }

  initparticles();
// --------------------------Hide Header on on scroll down-----------------------
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.navbar').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();
        var hero = $('#hero').outerHeight();

        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('.navbar').removeClass('menu-fixed').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height() ) {
                $('.navbar').removeClass('navstatic').addClass('menu-fixed');

                if(hero >= st){
                     $('.navbar').removeClass('menu-fixed').addClass('navstatic');
                }

            }

        }
        lastScrollTop = st;
    }
//---------------------scrollup-----------------
  $(window).scroll(function(){
        if ($(this).scrollTop() > $('#hero').outerHeight()) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
		
    });
//--------------skills------------------
  var alturaFrase = $('#hero').outerHeight()+$('.navbar').outerHeight()+$('#frase').outerHeight();

    $(window).scroll(function(){
        if ($(this).scrollTop() > alturaFrase) {
            $('.bar').fadeIn();
              $(".bar").each(function(){
                $(this).find(".bar-inner").animate({
                    width: $(this).attr("data-width")
                },2000)
              });
        } else {
          
            $('.bar').fadeOut();
        }
    });  


});

