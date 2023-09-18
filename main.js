(function($) {
  $(function () {

    function openSidebar() {
      $('body').toggleClass('u-sidebar-body--isOpen');
      $('.u-sidebar-bg').toggleClass('u-sidebar-bg--isOpen');

      if (!$('.p-sidebar').hasClass('u-sidebar-menu--isClose') && !$('.p-sidebar').hasClass('u-sidebar-menu--isOpen')) {
      $('.p-sidebar').addClass('u-sidebar-menu--isOpen');
      }
      else {
        $('.p-sidebar').toggleClass('u-sidebar-menu--isClose')
        $('.p-sidebar').toggleClass('u-sidebar-menu--isOpen');
      }
    }
    function closeSidebar() {
      $('body').toggleClass('u-sidebar-body--isOpen');
      $('.u-sidebar-bg').toggleClass('u-sidebar-bg--isOpen');
      $('.p-sidebar').toggleClass('u-sidebar-menu--isClose')
      $('.u-sidebar-menu').toggleClass('u-sidebar-menu--isOpen');
    }

    $('#menu-open').on('click', function() {
      openSidebar();
    });
    $('#menu-close').on('click', function() {
      closeSidebar();
    });
    $('.u-sidebar-bg').on('click', function(event) {
      // モーダル外部をクリックしたときの処理
      if ($(event.target).closest('.p-sidebar').length === 0) {
        closeSidebar();
      }
    });

    // ウィンドウのリサイズイベントを監視
  $(window).on('resize', function() {
  let windowWidth = $(window).width();
  if (windowWidth <= 1201) {
    closeSidebar();
  }
});
  });
  })(jQuery);
