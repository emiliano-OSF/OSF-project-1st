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
        return;
    }
    nav_button.removeClass('fa-bars');
    nav_button.addClass("fa-times");
    nav_options.css("left", "0%");

})

$(document).ready(() => {
    var slide_width = $("#cloud-carousel__items").width()
    var current_solution_pos = 0;
    var current_pop_pos = 0;

    $(".carousel__btn").click(function () {
        let btn = $(this).attr('id');

        if (btn == 'btn-2') {
            current_solution_pos = slide_width;
            $('#btn-2').addClass('carousel__btn--selected');
            $('#btn-1').removeClass('carousel__btn--selected');
            $('#btn-3').removeClass('carousel__btn--selected');

        } else if (btn == 'btn-3') {
            current_solution_pos = slide_width * 2;
            $('#btn-3').addClass('carousel__btn--selected');
            $('#btn-1').removeClass('carousel__btn--selected');
            $('#btn-2').removeClass('carousel__btn--selected');

        } else if (btn == 'btn-1') {
            current_solution_pos = 0;
            $('#btn-1').addClass('carousel__btn--selected');
            $('#btn-2').removeClass('carousel__btn--selected');
            $('#btn-3').removeClass('carousel__btn--selected');

        } else if (btn == "pop-btn-1") {
            current_pop_pos = 0;
            $('#pop-btn-1').addClass('carousel__btn--selected');
            $('#pop-btn-2').removeClass('carousel__btn--selected');
            $('#pop-btn-3').removeClass('carousel__btn--selected');

        } else if (btn == "pop-btn-2") {
            current_pop_pos = slide_width;
            $('#pop-btn-2').addClass('carousel__btn--selected');
            $('#pop-btn-1').removeClass('carousel__btn--selected');
            $('#pop-btn-3').removeClass('carousel__btn--selected');
            $('#pop-btn-4').removeClass('carousel__btn--selected');
            $('#pop-btn-5').removeClass('carousel__btn--selected');

        } else if (btn == "pop-btn-3") {
            current_pop_pos = (slide_width * 2);
            $('#pop-btn-3').addClass('carousel__btn--selected');
            $('#pop-btn-1').removeClass('carousel__btn--selected');
            $('#pop-btn-2').removeClass('carousel__btn--selected');
            $('#pop-btn-4').removeClass('carousel__btn--selected');
            $('#pop-btn-5').removeClass('carousel__btn--selected');

        } else if (btn == "pop-btn-4") {
            current_pop_pos = (slide_width * 3);
            $('#pop-btn-4').addClass('carousel__btn--selected');
            $('#pop-btn-1').removeClass('carousel__btn--selected');
            $('#pop-btn-2').removeClass('carousel__btn--selected');
            $('#pop-btn-3').removeClass('carousel__btn--selected');
            $('#pop-btn-5').removeClass('carousel__btn--selected');

        } else if (btn == "pop-btn-5") {
            current_pop_pos = (slide_width * 4);
            $('#pop-btn-5').addClass('carousel__btn--selected');
            $('#pop-btn-1').removeClass('carousel__btn--selected');
            $('#pop-btn-2').removeClass('carousel__btn--selected');
            $('#pop-btn-3').removeClass('carousel__btn--selected');
            $('#pop-btn-4').removeClass('carousel__btn--selected');

        }

        $('#cloud-carousel__items').animate({ right: current_solution_pos }, 200);
        $('#popular-carousel__items').animate({ right: current_pop_pos }, 200);
    })

    $("#copy-year").text( function(){
        let date = new Date();
        return  date.getFullYear();
    })

});

// $(window).resize(() => {
//     if($(window).width() >= 400){
//         console.log("mediu")
//     }
// })