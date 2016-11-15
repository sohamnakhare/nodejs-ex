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

$(document).ready(
    $(function () {
        $('#outcome').bind('inview', function (event, visible) {
            animateIcons(event, visible, $('#outcome'));
        });

        $('#insights').bind('inview', function (event, visible) {
            animateIcons(event, visible, $('#insights'));
        });

        $('#expertise').bind('inview', function (event, visible) {
            animateIcons(event, visible, $('#expertise'));
        });

        function animateIcons(event, visible, element) {
            if (visible === true) {
                setTimeout(function () {
                    element.addClass('animated fadeInUp');
                    element.unbind('inview');
                },300)
            } 
        }
    })
)
