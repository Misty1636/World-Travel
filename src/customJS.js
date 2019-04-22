$(window).scroll(function() {
  // 淡入顯示
  let scrollPos = $(window).scrollTop();
  let windowHeight = $(window).height();

  $(".animated-left").each(function() {
    let thisPos = $(this).offset().top;
    if (windowHeight + scrollPos >= thisPos + 100) {
      $(this).addClass("fade-X");
    }
  });

  $(".animated-right").each(function() {
    let thisPos = $(this).offset().top;
    if (windowHeight + scrollPos >= thisPos) {
      $(this).addClass("fade-X");
    }
  });

  $(".header").each(function() {
    // 控制navbar顏色
    let thisPos = $(this).offset().top;

    if (windowHeight + scrollPos >= thisPos) {
      $(this).addClass("header-dark");
    }
    if (scrollPos == 0) {
      $(this).removeClass("header-dark");
    }
  });
});

$(function() {
  $(".mobile-link").click(function(e) {
    // open offcanvas
    e.preventDefault();
    $(".menu").addClass("open-offcanvas");
    $(".header").removeClass("header-dark");
    $(".offcanvas-bg").addClass("opening-menu");
  });

  $(".close-link").click(function(e) {
    // close offcanvas
    e.preventDefault();
    $(".menu").removeClass("open-offcanvas");
    $(".header").addClass("header-dark");
    $(".offcanvas-bg").removeClass("opening-menu");
  });

  $(".footer-bg a").click(function(e) {
    e.preventDefault();
  });

  $(".explore-icon").click(function(e) {
    // 向下探索滾動
    e.preventDefault();
    $("body, html").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top
      },
      1000
    );
  });
});
