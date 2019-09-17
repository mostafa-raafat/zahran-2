console.log('\'Allo \'Allo!');

// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });

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

$('#dynamic').on('click', function() {
 
    $(this).lightGallery({
        dynamic: true,
        dynamicEl: [{
            'src': '../images/projects/1.png',
            'thumb': '../images/projects/1.png',
            'subHtml': '<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>'
        }, {
            'src': '../images/projects/2.png',
            'thumb': '../images/projects/2.png',
            'subHtml': '<h4>Bowness Bay</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I\'m extremely happy I was passing the right place at the right time....</p>'
        }, {
            'src': '../images/projects/3.png',
            'thumb': '../images/projects/3.png',
            'subHtml': '<h4>Coniston Calmness</h4><p>Beautiful morning</p>'
        }, {
            'src': '../images/projects/4.png',
            'thumb': '../images/projects/4.png',
            'subHtml': '<h4>Coniston Calmness</h4><p>Beautiful morning</p>'
        }]
    })
});