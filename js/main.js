AOS.init();

$(window).scroll(function() {
    var height = $(window).scrollTop();

    if (height >= 2 ) {
        $(".f-navbar").addClass("remove-padding f-global-shadow transition");
    } else {
        $(".f-navbar").removeClass("remove-padding f-global-shadow");
    }

    if (height  >= 720) {
        $(".f-navbar").addClass("gradient-navbar");
    } else {
        $(".f-navbar").removeClass("gradient-navbar");
    }
});


