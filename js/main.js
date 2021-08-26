let lastScrollTop;
// var $body = $('body');

$(document).on('click', '.sidebar_btn', function (e) {
    e.preventDefault()
    $(this).toggleClass('active')
    $('.onclick_sidebar').toggleClass('isOpen')
    $('.sidebar_btn').toggleClass('change')
    $('body').toggleClass('overflowY')
    // $('.sidebar_icon_text').toggleClass('sidebar_icon_text_clr_light')
    $('.sidebar').toggleClass('positionSticky')
})

// $(document).ready(function(){
//     $(this).scrollTop(0,0);
// });


function handleScrollAnimation() {
	var $window         = $(window),
		// $app            = $('.app'),
		scrollElements  = $('[data-color]'),
		scrollIn        = $window.scrollTop() + ($window.height() - ($window.height() / 5)),
		scrollOut       = $window.scrollTop() + ($window.height())
		scrollOutScrolled = $window.scrollTop() + ($window.height())

	scrollElements.each(function () {
		var $this = $(this);
		if ($this.position().top <= scrollIn && $this.position().top + $this.height() > scrollIn ) {
			$this.addClass("scrolled");
		}
		else if ($this.position().top <= scrollOut + $this.height() - 3 && $this.position().top + $this.height() > scrollOut + $this.height() - 3 ) {
			$this.removeClass("scrolled");
		}
	});
}

$.fn.scrollEnd = function(callback, timeout) {
	$(this).on('scroll', function(){
		var $this = $(this);
		if ($this.data('scrollTimeout')) {
			clearTimeout($this.data('scrollTimeout'));
		}
		$this.data('scrollTimeout', setTimeout(callback,timeout));
	});
};

function navbarScrollEndFn() {
	$('.sidebar').removeClass('add')
	$(window).scrollEnd(function () {
		$('.sidebar').addClass('add')
	}, 100);
}

$(document).on('scroll', function () {
    
	handleScrollAnimation();

	var st = window.pageYOffset || document.documentElement.scrollTop;

	if (st > lastScrollTop){
        navbarScrollEndFn()
	}
    lastScrollTop = st <= 0 ? 0 : st;
})



$(document).ready(function(){
    $("#button").click(function() {
        $('html, body').animate({
            scrollTop: $(".banner").offset().top
        }, 800);
    });
});



$('.banner_content_item').mouseenter(function () {
	$('.banner_content_item').removeClass('active')
	$(this).addClass('active')
})
$('.banner_content_item').mouseleave(function () {
	$(this).removeClass('active')
	$('.banner_content_item').addClass('active')
})





$(window).scroll(function() {
      // selectors
    var $window = $(window),
        $body = $('.app'),
        $panel = $('.bgColor');
    
    // Change 50% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + ($window.height() / 2);
    var scroll2 = $window.scrollTop() + ($window.height() - 150);
   
    $panel.each(function () {
      var $this = $(this);

      // if position is wixthin range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
        // Remove all classes on body with color-cc  y2 q;4
        $body.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
         
        // Add class of currently active div
        $body.addClass('color-' + $(this).data('color'));
      }

    });    
  }).scroll();



$(document).on("change", '.about_yourself_content_form_control', function(e) {
    $('.about_yourself_content_form_label').text(e.target.files[0].name)
})



// acording start

$('.desing_development_content_item_desc_acordion_card_title').click(function () {
    $(this).parents('.desing_development_content_item_desc_acordion').find('.desing_development_content_item_desc_acordion_card').not($(this).parents('.desing_development_content_item_desc_acordion_card')).removeClass('open')
    $(this).parents('.desing_development_content_item_desc_acordion').find('.desing_development_content_item_desc_acordion_card').not($(this).parents('.desing_development_content_item_desc_acordion_card')).children(".desing_development_content_item_desc_acordion_card_text").hide('200')
    $(this).parents('.desing_development_content_item_desc_acordion_card').toggleClass('open') 
    $(this).parent().children('.desing_development_content_item_desc_acordion_card_text').toggle('200')
})

//acording finished




//serviceNav start 

$('.service_left_content_nav_item_link').mouseenter(function () {
	$('.service_left_content_nav_item_link').removeClass('active')
	$(this).addClass('active')
	var id = $(this).attr('data-services-menu-id')
	$('[data-services-content-id]').hide()
	$('[data-services-content-id='+id+']').show()
})

//serviceNav finished



// sliderss starts

$('.about_slider_content').slick({
    arrows: true,
    infinite: true,
    dots: false,
    prevArrow: `
    <button class="about_content_btn--left about_content_btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="12.576" height="21.333" viewBox="0 0 9.966 16.907">
            <path id="Path_733" data-name="Path 733" d="M23.356,13.529l7.678,7.678,1.532-1.57L25.7,12.753,32.566,5.87,31.035,4.3l-7.678,7.678-.756.775Z" transform="translate(-22.6 -4.3)"/>
        </svg>
    </button>`,
    nextArrow: `
    <button class="about_content_btn--right about_content_btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="12.576" height="21.333" viewBox="0 0 12.576 21.333">
            <g id="noun_Arrow_1252229" transform="translate(12.576 21.333) rotate(180)">
                 <path id="Path_733" data-name="Path 733" d="M.954,11.645l9.688,9.688,1.933-1.981L3.913,10.667l8.662-8.686L10.643,0,.954,9.688,0,10.667Z" transform="translate(0 0)"/>
            </g>
        </svg>
    </button>
    `,
})


$('.about_content_dots').slick({
    arrows: true,
    infinite: true,
    dots: false,
    prevArrow: `
    <button class="about_content_btn--left about_content_btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="12.576" height="21.333" viewBox="0 0 9.966 16.907">
            <path id="Path_733" data-name="Path 733" d="M23.356,13.529l7.678,7.678,1.532-1.57L25.7,12.753,32.566,5.87,31.035,4.3l-7.678,7.678-.756.775Z" transform="translate(-22.6 -4.3)"/>
        </svg>
    </button>`,
    nextArrow: `
    <button class="about_content_btn--right about_content_btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="12.576" height="21.333" viewBox="0 0 12.576 21.333">
            <g id="noun_Arrow_1252229" transform="translate(12.576 21.333) rotate(180)">
                 <path id="Path_733" data-name="Path 733" d="M.954,11.645l9.688,9.688,1.933-1.981L3.913,10.667l8.662-8.686L10.643,0,.954,9.688,0,10.667Z" transform="translate(0 0)"/>
            </g>
        </svg>
    </button>
    `,
    responsive: [
        {
          breakpoint: 992,
          settings: {
             dots: true,
          }
        },
    ]
})


$('.blog_posts_content').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            centerMode: true,
            centerPadding:'60px',
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite:true,
            dots: true
          }
        },
    ]
})


$('.expertise_content').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:true,
    prevArrow: $('.prevs'),
    nextArrow: $('.nexts'),
    centerPadding:'50',
    centerMode: true,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:true,
          }
        },
    ]
})

var $status = $('.team_slide_footer_info');
var $slickElement = $('.team_slideshow');

$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + slick.slideCount);
});


$('.team_slideshow').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots:false,
    prevArrow: $('.prev'),
	nextArrow: $('.next'),
    centerMode: true,
    centerPadding: '80px',
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
    ]
})

var $status = $('.pagingInfo');
var $slickElement = $('.case_studies_slider');

$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + slick.slideCount);
});

$('.case_studies_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    prevArrow: $('.prev'),
	nextArrow: $('.next'),
    centerMode: true,
    centerPadding: '500px',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
              centerPadding: '160px',
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
        },
        {
          breakpoint: 992,
          settings: {
            centerPadding: '50px',
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
    ]
})
$('.hardwareDistribution_content_right_body_slide').slick({
    infinite: true,
    arrows: true,
    dots:true,
    prevArrow: `
    <button class="about_content_btn--left hardwareDistribution_content_slide_btn">
        <svg xmlns="http://www.w3.org/2000/svg" id="noun_Arrow_1252229" width="12.576" height="21.333" viewBox="0 0 12.576 21.333">
            <path id="Path_733" data-name="Path 733" d="M.954,11.645l9.688,9.688,1.933-1.981L3.913,10.667l8.662-8.686L10.643,0,.954,9.688,0,10.667Z" transform="translate(0 0)" fill="#b9b9b9"/>
        </svg>
    </button>`,
    nextArrow: `
    <button class="about_content_btn--right hardwareDistribution_content_slide_btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="12.576" height="21.333" viewBox="0 0 12.576 21.333">
            <g id="noun_Arrow_1252229" transform="translate(12.576 21.333) rotate(180)">
            <path id="Path_733" data-name="Path 733" d="M.954,11.645l9.688,9.688,1.933-1.981L3.913,10.667l8.662-8.686L10.643,0,.954,9.688,0,10.667Z" transform="translate(0 0)" fill="#b9b9b9"/>
            </g>
        </svg>
    </button>
    `
})



$('.hardwareDistributionCategories_body_category_items').slick({
    infinite: true,
    arrows: true,
    dots:true,
    prevArrow: `
    <button class="about_content_btn--left hardwareDistribution_content_slide_btn hardwareDistribution_category_slide_btn">
        <svg xmlns="http://www.w3.org/2000/svg" id="noun_Arrow_1252229" width="12.576" height="21.333" viewBox="0 0 12.576 21.333">
            <path id="Path_733" data-name="Path 733" d="M.954,11.645l9.688,9.688,1.933-1.981L3.913,10.667l8.662-8.686L10.643,0,.954,9.688,0,10.667Z" transform="translate(0 0)" fill="#b9b9b9"/>
        </svg>
    </button>`,
    nextArrow: `
    <button class="about_content_btn--right hardwareDistribution_content_slide_btn hardwareDistribution_category_slide_btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="12.576" height="21.333" viewBox="0 0 12.576 21.333">
            <g id="noun_Arrow_1252229" transform="translate(12.576 21.333) rotate(180)">
            <path id="Path_733" data-name="Path 733" d="M.954,11.645l9.688,9.688,1.933-1.981L3.913,10.667l8.662-8.686L10.643,0,.954,9.688,0,10.667Z" transform="translate(0 0)" fill="#b9b9b9"/>
            </g>
        </svg>
    </button>
    `
})

//sliders finished 



