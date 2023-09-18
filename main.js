(function($) {
  $(function () {
  $('#menu-open').on('click', function() {
    $('body').toggleClass('u-sidebar-body--isOpen');
    $('.u-sidebar-bg').toggleClass('u-sidebar-bg--isOpen');
    $('.p-sidebar').toggleClass('u-sidebar-menu--isOpen');

  });
  $('#menu-close').on('click', function() {
    $('body').toggleClass('u-sidebar-body--isOpen');
    $('.u-sidebar-bg').toggleClass('u-sidebar-bg--isOpen');
    $('.p-sidebar').toggleClass('u-sidebar-menu--isOpen');

  });
  });
  })(jQuery);
