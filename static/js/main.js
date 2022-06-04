
$(document).ready(function($) {
"use strict"

$(".services-slide").owlCarousel({ 
	autoplay:true,
	autoplayHoverPause:true,
	singleItem	: true,
	navText: ["<i class='ion-ios-arrow-thin-left'></i>","<i class='ion-ios-arrow-thin-right'></i>"],
	lazyLoad:true,
	nav: true,
	loop:true,
	margin:30,	
	responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1200:{
            items:3
        },
}});
/*-----------------------------------------------------------------------------------
    TESTI SLIDERS
/*-----------------------------------------------------------------------------------*/
$(".testi-slides").owlCarousel({ 
    items : 1,
	autoplay:true,
	autoplayHoverPause:true,
	singleItem	: true,
	navText: ["<i class='ion-ios-arrow-thin-left'></i>","<i class='ion-ios-arrow-thin-right'></i>"],
	lazyLoad:true,
	nav: true,
	loop:true,
	animateOut: 'fadeOut'	
});
/*-----------------------------------------------------------------------------------
    Animated progress bars
/*-----------------------------------------------------------------------------------*/
$('.progress-bars').waypoint(function() {
  $('.progress').each(function(){
    $(this).find('.progress-bar').animate({
      width:$(this).attr('data-percent')
     },500);
});},
	{ 
	offset: '100%',
    triggerOnce: true 
});
/*-----------------------------------------------------------------------------------*/
/*	ISOTOPE PORTFOLIO
/*-----------------------------------------------------------------------------------*/
var $container = $('.port-wrap .items');
    $container.imagesLoaded(function () {
    $container.isotope({
    itemSelector: '.item',
    layoutMode: 'masonry'
  });
});
 $('.filter li a').on('click', function () {
    $('.filter li a').removeClass('active');
    $(this).addClass('active');
    var selector = $(this).attr('data-filter');
    $container.isotope({
      filter: selector
    });
return false;
});
/*-----------------------------------------------------------------------------------*/
/*  SLIDER REVOLUTION
/*-----------------------------------------------------------------------------------*/
jQuery('.tp-banner').show().revolution({
  dottedOverlay:"none",
  delay:10000,
  startwidth:100,
  startheight:825,
  navigationType:"bullet",
  navigationArrows:"solo",
  navigationStyle:"preview4",
  parallax:"mouse",
  parallaxBgFreeze:"on",
  parallaxLevels:[7,4,3,2,5,4,3,2,1,0],                       
  keyboardNavigation:"on",            
  shadow:0,
  fullWidth:"off",
  fullScreen:"off",
  shuffle:"off",            
  autoHeight:"off",           
  forceFullWidth:"off", 
  fullScreenOffsetContainer:"off"  
});
});
