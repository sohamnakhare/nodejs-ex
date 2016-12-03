$(document).ready(
    $(function () {
        var bar = $("#d4-navbar");
        var navlinks = $(".d4-nav-links");
        var image = $("#logo-image");

        $(document).scroll(function () {

            var scrollTop = $(document).scrollTop();

            if (scrollTop > 0) {
                bar.addClass('navbar-fixed-top on-scroll animated slideInDown');
            }

            if (scrollTop === 0) {
                bar.removeClass('navbar-fixed-top on-scroll animated slideInDown', '0.1s');
            }
        });
    })
)