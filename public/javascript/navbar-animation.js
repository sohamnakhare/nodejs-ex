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

// SmartMenus mobile menu toggle button
$(function () {
  var $bar = $("#d4-navbar");
  var $mainMenuState = $('#main-menu-state');
  if ($mainMenuState.length) {
    // animate mobile menu
    $mainMenuState.change(function (e) {
      var $menu = $('#main-menu');
      if (this.checked) {
        $menu.hide().slideDown(250, function () { $menu.css('display', ''); });
        $bar.addClass('xs-menu-open');
      } else {
        $menu.show().slideUp(250, function () { $menu.css('display', ''); });
        setTimeout(function () {
          $bar.removeClass('xs-menu-open');
        }, 250);
      }
    });
    // hide mobile menu beforeunload
    $(window).bind('beforeunload unload', function () {
      if ($mainMenuState[0].checked) {
        $mainMenuState[0].click();
      }
    });
  }
});