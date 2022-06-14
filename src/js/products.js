$(document).ready(function () {
  $('.slider-cream').slick({
    arrows: false,
    dots: true,
    appendDots: $('.dots--cream'),
  });

  $('.products-list__button--cream').click(function (event) {
    $('.slider-cream').slick('slickNext');
  });
});

$(document).ready(function () {
  $('.slider-coffee').slick({
    arrows: false,
    dots: true,
    appendDots: $('.dots--coffee'),
  });

  $('.products-list__button--coffee').click(function (event) {
    $('.slider-coffee').slick('slickNext');
  });
});

$(document).ready(function () {
  $('.slider-milkshakes').slick({
    arrows: false,
    dots: true,
    appendDots: $('.dots--milkshakes'),
  });

  $('.products-list__button--milkshakes').click(function (event) {
    $('.slider-milkshakes').slick('slickNext');
  });
});
