$(document).ready(function() {
    $('.carousel').carousel();

    $('.our-team .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })


    $('.logo_criticl .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:6
            },
            1000:{
                items:9
            }
        }
    });
    
    $('#projects a').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
      });

    AOS.init();

});



