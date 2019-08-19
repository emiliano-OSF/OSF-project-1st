console.log("Hello, OSF!");

/* */
var navButton = $("#toggle__nav");
var navOptions = $("#headernav__option");

$(navButton).click(() => {
    if (navButton.hasClass("fa-times")) {
        navButton.removeClass("fa-times")
        navButton.addClass("fa-bars");
        navOptions.toggleClass("notshow");
        return;
    }
    navButton.removeClass('fa-bars');
    navButton.addClass("fa-times");
    navOptions.toggleClass("notshow")
})

// $(window).resize(() => {
//     if($(window).width() >= 400){
//         console.log("mediu")
//     }
// })