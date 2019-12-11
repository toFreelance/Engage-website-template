$(function () {
    $(document).scroll(function () {
      var $nav = $(".fixedIconsRight");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
  var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};
$(function () {
    $(document).scroll(function () {
      var $nav = $(".Home_Nav");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
  var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};