$(document).on('click', '.sidebar_btn', function (e) {
    e.preventDefault()
    $(this).toggleClass('active')
    $('.onclick_sidebar').toggleClass('isOpen')
    // $('.sidebar').toggleClass('sidebar_bg_dark')
    // $('.sidebar_menu_icon').toggleClass('sidebar_menu_icon_clr_light')
    // $('.customerLink').toggleClass('white')
    $('.sidebar_btn').toggleClass('change')
    $('body').toggleClass('overflowY')
    $('.sidebar_icon_text').toggleClass('sidebar_icon_text_clr_light')
    // $('.customer_btn').toggleClass('customer_btn_light')
})

$(document).ready(function(){
    $("#button").click(function() {
        $('html, body').animate({
            scrollTop: $("#scroll").offset().top
        }, 1000);
    });
});


const SidebarOpenLight = (x) => {
    x.classList.toggle("change");
}



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
        $body = $('body'),
        $panel = $('.bgColor');
    
    // Change 50% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + ($window.height() / 2);
   
    $panel.each(function () {
      var $this = $(this);
      
      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 50% earlier in scroll var.
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            
        // Remove all classes on body with color-
        $body.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
         
        // Add class of currently active div
        $body.addClass('color-' + $(this).data('color'));
      }
    });    
    
  }).scroll();









// acording start
var acc = document.getElementsByClassName("desing_development_content_item_desc_acordion_card_title");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("acordion_card_title_change");
        var desing_development_content_item_desc_acordion_card_text = this.nextElementSibling;
        if (desing_development_content_item_desc_acordion_card_text.style.maxHeight) {
            desing_development_content_item_desc_acordion_card_text.style.maxHeight = null;
        } else {
            desing_development_content_item_desc_acordion_card_text.style.maxHeight = desing_development_content_item_desc_acordion_card_text.scrollHeight + "px";
        }
    });
}
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
    infinite:true,
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
            dots: true
          }
        },
    ]
})


$('.blog_posts_content').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    // arrows: true,
    // centerMode: true,
    // centerPadding:'50px',
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
    infinite:true,
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
    infinity: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.prev'),
	nextArrow: $('.next'),
    // dots: true,
    centerMode: true,
    centerPadding: '80px',
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
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
    arrows: true,
    prevArrow: $('.prev'),
	nextArrow: $('.next'),
    // dots: true,
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



AOS.init();