$(document).ready(function () {
  $(".blogs__slider").slick({
    infinite: false,
    dots: false,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    // adaptiveHeight: true,
    // centerMode: true,
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          dots: true,
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".header__burger").click(function (e) {
    $(".header__burger, .menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
