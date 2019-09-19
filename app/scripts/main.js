console.log('\'Allo \'Allo!');

$(document).ready(function() {
    $('.carousel').carousel();

    $('.owl-carousel').owlCarousel({
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
    
    $('#projects a').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
      })
    
    $('.fancybox').attr('rel', 'gallery').fancybox({
        padding : 0
    });
});



