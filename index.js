console.log("Hello, OSF!");

/* */
var nav_button = $("#toggle__nav");
var nav_options = $("#headernav__option");


//toggle button on upper bar
$(nav_button).click(() => {
    if (nav_button.hasClass("fa-times")) {
        nav_button.removeClass("fa-times")
        nav_button.addClass("fa-bars");
        nav_options.css("left", "-100%");
        //navOptions.toggleClass("show_menu");
        return;
    }
    nav_button.removeClass('fa-bars');
    nav_button.addClass("fa-times");
    nav_options.css("left", "0%");
    //navOptions.toggleClass("show_menu");

})

$(document).ready(() => {
    var item_width = $("#carousel__items li").width()
    var current_position = 0;

    $(".carousel__btn").click(function () {
        let btn = $(this).attr('id');

        if (btn == 'btn-2') {
            current_position = item_width;
            $('#btn-2').addClass('carousel__btn--selected');
            $('#btn-1').removeClass('carousel__btn--selected');
            $('#btn-3').removeClass('carousel__btn--selected');
        } else if (btn == 'btn-3') {
            current_position = item_width * 2;
            $('#btn-3').addClass('carousel__btn--selected');
            $('#btn-1').removeClass('carousel__btn--selected');
            $('#btn-2').removeClass('carousel__btn--selected');
        } else {
            current_position = 0;
            $('#btn-1').addClass('carousel__btn--selected');
            $('#btn-2').removeClass('carousel__btn--selected');
            $('#btn-3').removeClass('carousel__btn--selected');
        }
        $('#carousel__items ul').animate({ right: current_position }, 200);
    })


});

// $(window).resize(() => {
//     if($(window).width() >= 400){
//         console.log("mediu")
//     }
// })