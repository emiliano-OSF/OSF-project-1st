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
    var carousel_width = $('#carousel__items ul').width()
    var right_value = item_width;
    var positions = { 'btn-1': 0, 'btn-2': item_width, 'btn-3': (item_width * 2) };
    var current_position = 0;
    console.log(positions);

    $(".carousel__btn").click(function () {
        let btn = $(this).attr('id');
        //console.log(btn);                   CONTINUAÇÃO DA TRANSIÇÃO DO CAROUSEL

        right_value = positions.

        $('#carousel__items ul').animate({ right: right_value }, 200);
        //console.log(right_value, (carousel_width * 3));
        if (right_value == carousel_width * 3) {
            right_value = carousel_width;
            return;
        }
        right_value += carousel_width;
    })


});

// $(window).resize(() => {
//     if($(window).width() >= 400){
//         console.log("mediu")
//     }
// })