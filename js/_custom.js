document.addEventListener("DOMContentLoaded", function() {

    // window.onload = function() {
    //     if (window.jQuery) {
    //         // jQuery is loaded
    //         alert("Yeah!");
    //     } else {
    //         // jQuery is not loaded
    //         alert("Doesn't Work");
    //     }
    // }

    $('.hamburger').click(function(){
        $('.hamburger').toggleClass('active');
    })

    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1200
    });

    var owl = $(".owl-carousel");

    owl.owlCarousel({
        loop: true,
        items: 1,
        itemElement: "slide",
        nav: true,
        navText: '',
        smartSpeed: 300
    });

    $(".owl-next").click(function(){
        owl.trigger('next.owl.carousel');
    });

    $(".owl-prev").click(function(){
        owl.trigger('prev.owl.carousel');
    });

});
