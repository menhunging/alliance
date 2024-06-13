addEventListener("scroll", (event) => {
  currentScroll = $(window).scrollTop();
});

let filterType1 = ""; // фильтрация карты по "Тип сделки/проекта desktop"
let filterType2 = ""; // фильтрация карты по "Отпрасль сделки/проекта desktop"

$(document).ready(function () {
  if ($(".burger").length > 0) {
    let menu = $(".header .menu");
    let burger = $(".burger");

    burger.on("click", function () {
      if (burger.hasClass("opened")) {
        closeMenu();
      } else {
        burger.addClass("opened");
        menu.stop().slideDown();

        $(document).mouseup(function (e) {
          if (
            !menu.is(e.target) &&
            menu.has(e.target).length === 0 &&
            !burger.is(e.target)
          ) {
            closeMenu();
          }
        });
      }
    });

    function closeMenu() {
      burger.removeClass("opened");
      menu.stop().slideUp();
      $(document).off("mouseup");
    }
  }

  if ($(".thisYear").length > 0) {
    let date = new Date();
    $(".thisYear").text(date.getFullYear());
  }

  if ($(".phone-input").length > 0) {
    $(".phone-input").map(function () {
      $(this).inputmask({
        mask: "+7(999) 999-99-99",
        placeholder: "*",
        showMaskOnHover: false,
        showMaskOnFocus: true,
        clearIncomplete: true,
      });
    });
  }

  if ($(".modal").length > 0) {
    MicroModal.init({
      openTrigger: "data-modal",
      disableScroll: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,

      onShow: () => {
        $("body").addClass("modal-open");
      },

      onClose: () => {
        $("body").removeClass("modal-open");
      },
    });

    $("[data-modal]").map(function () {
      $(this).click((e) => {
        e.preventDefault();
        $("body").addClass("modal-open");
      });
    });

    $("[data-micromodal-close]").map(function () {
      $(this).click((e) => {
        //        e.preventDefault();
        if ($(this).attr("data-modal")) {
          setTimeout(() => {
            $("body").addClass("modal-open");
          }, 0.1);
        }
      });
    });
  }

  if ($(".sliderInvestment").length > 0) {
    const swiper = new Swiper(".sliderInvestment", {
      slidesPerView: 1,
      autoHeight: true,
      watchSlidesProgress: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    swiper.on("slideChange", function (e) {
      $(".investment-team__list li").removeClass("active");
      $(".investment-team__list li").eq(swiper.activeIndex).addClass("active");
    });

    if ($(".investment-team__list").length > 0) {
      $(".investment-team__list li").on("click", function () {
        $(".investment-team__list li").removeClass("active");
        let index = $(this).index();
        $(this).addClass("active");
        swiper.slideTo(index);
      });
    }

    $(".sliderInvestment__arrow--left").on("click", function () {
      swiper.slidePrev();
    });

    $(".sliderInvestment__arrow--right").on("click", function () {
      swiper.slideNext();
    });

    $(".sliderInvestment__more").on("click", function (event) {
      event.preventDefault();
      $(this).siblings(".sliderInvestment__text").height("auto");
      $(this).addClass("hidden");
      swiper.update();
    });

    if ($(window).width() < 1024) {
      setHeightTeam();
    }
  }

  if ($(".selectric").length > 0) {
    $(".selectric").map(function () {
      $(this).selectric({
        onOpen: function (element) {},
        onChange: function (element) {
          let id = $(element).attr("id");

          if (id === "type1") {
            filterType1 = $(this).val();
            initMap();
          }

          if (id === "type2") {
            filterType2 = $(this).val();
            initMap();
          }
        },
        onClose: function (element) {},
      });
    });
  }

  if ($(".geography-projects").length > 0) {
    $(".filters-mobile__close").on("click", function () {
      $(".filters-mobile").removeClass("opened");
    });

    $(".btn-filter").on("click", function () {
      $(".filters-mobile").addClass("opened");
    });

    initMap();
  }

  if ($(".projects-list").length > 0) {
    setHeightProjectsMobile();

    $(".link-open-projects").on("click", function () {
      $(".projects-list-wrap").addClass("opened");
    });
  }

  if ($(`a[href^="#"]`).length > 0) {
    $('a[href^="#"]').click(function (event) {
      event.preventDefault();
      let target = $(this).attr("href");

      if ($(".burger").hasClass("opened")) {
        $(".burger").removeClass("opened");
        $(".menu").stop().slideUp();
      }

      $("html, body").animate({ scrollTop: $(target).offset().top - 100 }, 150);
      return false;
    });
  }
});

$(window).on("resize", function () {
  if ($(".projects-list").length > 0) {
    setHeightProjectsMobile();
  }

  if ($(".sliderInvestment").length > 0) {
    if ($(window).width() > 1024) {
      $(".sliderInvestment__text").map(function () {
        $(this).height("auto");
      });
      $(".sliderInvestment__more").removeClass("hidden");
    } else {
      setHeightTeam();
    }
  }
});

function setHeightProjectsMobile() {
  let item = $(".projects-list .projects-item");
  let height = item.outerHeight();

  $(".projects-list").height(height);
}

function setHeightTeam() {
  $(".sliderInvestment__text").map(function () {
    let height = $(this).find("p").outerHeight();
    $(this).height(height);
    $(".sliderInvestment__more").removeClass("hidden");
  });
}
