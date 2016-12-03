$(document).ready(
    $(function () {

        $('#outcome').bind('inview', function (event, visible) {
            animateIcons(event, visible, $('#outcome'),'flipInY');
        });

        $('#insights').bind('inview', function (event, visible) {
            animateIcons(event, visible, $('#insights'), 'flipInY');
        });

        $('#expertise').bind('inview', function (event, visible) {
            animateIcons(event, visible, $('#expertise'), 'flipInY');
        });

        function animateIcons(event, visible, element, animation) {
            if (visible === true) {
                setTimeout(function () {
                    var className = 'animated ' + animation;
                    element.addClass(className);
                    element.unbind('inview');
                },300)
            } 
        }
    })
)

$(document).ready(
    $(function () {

        $('#about-d4').bind('inview', function (event, visible) {
            animateInfo(event, visible, $('#about-d4'), 'fadeInUp');
            animateInfo(event, visible, $('#goal-attainment'), 'fadeInUp');
        });

        function animateInfo(event, visible, element, animation) {
            if (visible === true) {
                setTimeout(function () {
                    var className = 'animated ' + animation;
                    element.addClass(className);
                    element.unbind('inview');
                }, 100)
            }
        }
    })
)