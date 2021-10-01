// toggling with animation
$(document).ready(function () {
    $(".mobile-menu-button").each(function (_, navToggler) {
        var target = $(navToggler).data("target");
        $(navToggler).on("click", function () {
            $(target).animate({
                height: "toggle",
            })
        })
    })
})

// instant toggling
// const btn = document.querySelector("button.mobile-menu-button");
// const menu = document.querySelector(".mobile-menu");

// btn.addEventListener("click", () => {
//     menu.classList.toggle("hidden");
// });