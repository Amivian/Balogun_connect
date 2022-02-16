$('.block--slideshow').owlCarousel2({
center: false,
	startPosition: 0,
	margin: 0,
	responsive: {
		0: {items:1	},
		768: {items:1	}
	},
	nav: true,
	loop: true,
	dots: false,
	dotsSpeed: 1000,

	slideBy: 1,
	autoplay: true,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
	autoplaySpeed: 800,
	
	navSpeed: 1000,
	mouseDrag: true,
	
	responsiveRefreshRate: 100,
});

var owlBanner =  $('.owl-banner__slider');
owlBanner.owlCarousel2({
	loop:true,
	margin:0,
	autoWidth: false,
	dots: true,
	responsive:{
		0:{
			items:1,
		},
		480:{
			items:1,
		},
		768:{
			items:2
		},
		1024:{
			items:2
		},
		1200:{
			items:3
		}
	}
})

$(document).ready(function(){
	"use strict";
	$('.so-extraslider').each(function () {
		var $slider = $(this),
			$panels = $slider.children('div'),
			data = $slider.data();
		// Remove unwanted br's
		//$slider.children(':not(.yt-content-slide)').remove();
		// Apply Owl Carousel
		$slider.owlCarousel2({
			responsiveClass: true,
			mouseDrag: true,
			video:true,
			
    		lazyLoad: (data.lazyload == 'yes') ? true : false,
			autoplay: (data.autoplay == 'yes') ? true : false,
			autoHeight: (data.autoheight == 'yes') ? true : false,
			autoplayTimeout: data.delay * 1000,
			smartSpeed: data.speed * 1000,
			autoplayHoverPause: (data.hoverpause == 'yes') ? true : false,
			center: (data.center == 'yes') ? true : false,
			loop: (data.loop == 'yes') ? true : false,
            dots: (data.pagination == 'yes') ? true : false,
            nav: (data.arrows == 'yes') ? true : false,
			dotClass: "owl-dot",
			dotsClass: "owl-dots",
            margin: data.margin,
            navText: ['',''],
			afterLazyLoad: function(elem){
				$('.iframe-link').magnificPopup({
					type:'iframe',
					fixedContentPos: true,
					fixedBgPos: true,
					overflowY: 'auto',
					closeBtnInside: true,
					closeOnContentClick: true,
					preloader: true,
					midClick: true,
					removalDelay: 300,
					mainClass: 'my-mfp-zoom-in',
					//gallery: {  enabled: true }
				});
		   },
			responsive: {
				0: {
					items: data.items_column4 
					},
				480: {
					items: data.items_column3
					},
				768: {
					items: data.items_column2
					},
				992: { 
					items: data.items_column1
					},
				1200: {
					items: data.items_column0 
					}
			}
		});
		
	});
	

	
});

$('.yt-content-slider').each(function () {
		var $slider = $(this),
			$panels = $slider.children('div'),
			data = $slider.data();
		// Remove unwanted br's
		//$slider.children(':not(.yt-content-slide)').remove();
		// Apply Owl Carousel
		$slider.owlCarousel2({
			responsiveClass: true,
			mouseDrag: true,
			video:true,
			
    		lazyLoad: (data.lazyload == 'yes') ? true : false,
			autoplay: (data.autoplay == 'yes') ? true : false,
			autoHeight: (data.autoheight == 'yes') ? true : false,
			autoplayTimeout: data.delay * 1000,
			smartSpeed: data.speed * 1000,
			autoplayHoverPause: (data.hoverpause == 'yes') ? true : false,
			center: (data.center == 'yes') ? true : false,
			loop: (data.loop == 'yes') ? true : false,
            dots: (data.pagination == 'yes') ? true : false,
            nav: (data.arrows == 'yes') ? true : false,
			dotClass: "owl-dot",
			dotsClass: "owl-dots",
            margin: data.margin,
            navText: ['',''],
			
			responsive: {
				0: {
					items: data.items_column4 
					},
				480: {
					items: data.items_column3
					},
				768: {
					items: data.items_column2
					},
				992: { 
					items: data.items_column1
					},
				1200: {
					items: data.items_column0 
					}
			}
		});
		
	});


// popup
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

if (popup) {
  closePopup.addEventListener("click", () => {
    popup.classList.add("hide-popup");
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      popup.classList.remove("hide-popup");
    }, 10000);
  });
}
 
 // Scroll to top
   window.addEventListener('scroll', function(){
      const scroll=document.querySelector('.scrollTop');
     scroll.classList.toggle("active", window.scrollY > 500)
 })
 function scrollToTop(){
    window.scrollTo({
         top:0,
         behavior:"smooth"
    })
  }