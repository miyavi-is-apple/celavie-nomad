$(function() {
  $(window).scroll(function() {
      $('.fadeIn, .fadeIn-r, .fadeIn-l').each(function() {
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 100) {
              $(this).addClass('active');
          }
      });
  });
});
  // loading
  window.onload = function() {
      const spinner = document.getElementById('loading');
      spinner.classList.add('loaded');
    }