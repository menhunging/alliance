addEventListener("scroll", (event) => {
  currentScroll = $(window).scrollTop();

  if ($(".btn-up").length > 0) {
    if (currentScroll > 1000) {
      $(".btn-up").addClass("visible");
    } else {
      $(".btn-up").removeClass("visible");
    }
  }

  if ($(".header").length > 0) {
    if (currentScroll >= 40) {
      $(".header").addClass("sticky");
    } else {
      $(".header").removeClass("sticky");
    }
  }
});

let sliders = null; // для глобальный слайдер все проектов на карте
let mySwipers = []; // для глобальный слайдер все проектов на карте

let filterType1 = ""; // фильтрация карты по "Тип сделки/проекта desktop"
let filterType2 = ""; // фильтрация карты по "Отпрасль сделки/проекта desktop"

$(document).ready(function () {
  if ($(".btn-up").length > 0) {
    $(".btn-up").on("click", function (event) {
      event.preventDefault();
      $(window).scrollTop(0);
    });
  }

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
        e.preventDefault();
        if ($(this).attr("data-modal")) {
          setTimeout(() => {
            $("body").addClass("modal-open");
          }, 0.1);
        }
      });
    });
  }

  if ($(".sliderInvestment").length > 0) {
    let observer = false; // следим за слайдером
    let autoPlay = true;
    let timer;

    const swiper = new Swiper(".sliderInvestment", {
      slidesPerView: 1,
      autoHeight: true,
      watchSlidesProgress: true,
      loop: false,
      effect: "fade",
      allowTouchMove: false,
      autoplay: {
        delay: 7000,
        pauseOnMouseEnter: true,
      },
      fadeEffect: {
        crossFade: true,
      },
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
    });

    swiper.on("slideChange", function (e) {
      clearTimeout(timer);

      if (!observer) {
        $(".investment-team__list li").removeClass("active");
        $(".investment-team__list li").eq(swiper.realIndex).addClass("active");
      }

      observer = false;
    });

    swiper.on("autoplayPause", function (e) {
      if (autoPlay) {
        swiper.slideTo(Math.floor(Math.random() * 11));
        swiper.autoplay.start();
      }
    });

    if ($(".investment-team__list").length > 0) {
      $(".investment-team__list li").on("click", function () {
        observer = false;

        $(".investment-team__list li").removeClass("active");
        let index = Number($(this).attr("data-index"));
        $(this).addClass("active");

        swiper.slideTo(index);
      });
    }

    // btns swiper

    $(".sliderInvestment .swiper-button-prev").on("click", function () {
      if (swiper.isBeginning) {
        swiper.slideTo(swiper.slides.length - 1);
      } else {
        swiper.slidePrev();
      }
    });

    $(".sliderInvestment .swiper-button-next").on("click", function () {
      if (swiper.isEnd) {
        swiper.slideTo(0);
      } else {
        swiper.slideNext();
      }
    });

    $(".sliderInvestment__arrow--left").on("click", function () {
      if (swiper.isBeginning) {
        swiper.slideTo(swiper.slides.length - 1);
      } else {
        swiper.slidePrev();
      }
    });

    $(".sliderInvestment__arrow--right").on("click", function () {
      if (swiper.isEnd) {
        swiper.slideTo(0);
      } else {
        swiper.slideNext();
      }
    });

    // /btns swiper

    $(".sliderInvestment__more").on("click", function (event) {
      event.preventDefault();
      $(this).siblings(".sliderInvestment__text").height("auto");
      $(this).addClass("hidden");
      swiper.update();
    });

    $(".investment-team").on("mouseover", function () {
      autoPlay = false;
      swiper.autoplay.stop();
    });

    $(".investment-team").on("mouseout", function () {
      autoPlay = true;
      swiper.autoplay.start();
    });

    if ($(window).width() < 1024) {
      setHeightTeam();
    }
  }

  if ($(".slider-projects").length > 0) {
    sliders = document.querySelectorAll(".slider-projects");

    function sliderinit() {
      sliders.forEach((slider, index) => {
        if (!slider.swiper) {
          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 1,
            autoHeight: true,
            watchSlidesProgress: true,
            loop: true,
            effect: "fade",
            fadeEffect: {
              crossFade: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });

          mySwipers[index].self = $(slider).parents(".modal").attr("id");
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($(".selectric").length > 0) {
    $(".selectric").map(function () {
      $(this).selectric({
        onOpen: function (element) {},
        onChange: function (element) {
          let id = $(element).attr("id");

          if (id === "type1") {
            filterType1 = $(this).val();
          }

          if (id === "type2") {
            filterType2 = $(this).val();
          }
        },
        onClose: function (element) {},
      });
    });
  }

  if ($(".code").length > 0) {
    $(".code-input").inputmask({
      mask: "(999) 999 99 99",
      placeholder: "_",
      clearMaskOnLostFocus: false, // маска всегда видна
    });

    $(".code").selectric({
      optionsItemBuilder: function (itemData) {
        return (
          '<span class="ico ico-' + itemData.value + '"></span>' + itemData.text
        );
      },
      labelBuilder: function (currItem) {
        let code = currItem.text.split(" ")[0];

        return '<span class="ico ico-' + currItem.value + '"></span>' + code;
      },
      disableOnMobile: false,

      onOpen: function () {
        $(".input-item__phone").addClass("opened");
      },

      onClose: function () {
        $(".input-item__phone").removeClass("opened");
      },

      onChange: function (element) {
        let selectedCode = $(".code option:selected").val();

        $(".code-input").inputmask("remove");

        switch (selectedCode) {
          case "azerbaijan": {
            setMask("999999999");
            break;
          }
          case "armenia": {
            setMask("99 999999");
            break;
          }
          case "belarus": {
            setMask("(99) 999 99 99");
            break;
          }
          case "kazakhstan": {
            setMask("(99) 999 99 99");
            break;
          }
          case "kyrgyzstan": {
            setMask("999999999");
            break;
          }
          case "moldova": {
            setMask("(99) 999 99 99");
            break;
          }
          case "russia": {
            setMask("(999) 999 99 99");
            break;
          }
          case "tajikistan": {
            setMask("999999999");
            break;
          }
          case "uzbekistan": {
            setMask("999999999");
            break;
          }
        }
      },
    });

    function setMask(mask) {
      $(".code-input").inputmask({
        mask: mask,
        placeholder: "_",
        clearMaskOnLostFocus: false, // маска всегда видна
      });
    }
  }

  if ($(".btn-settings").length > 0) {
    $(".btn-settings").on("click", function () {
      initMap();
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

  if ($(`.menu-link`).length > 0) {
    $(".menu-link").on("click", function (event) {
      event.preventDefault();
      menuAnhor($(this).attr("href"));
    });

    $(".footer-menu li a").on("click", function (event) {
      event.preventDefault();
      menuAnhor($(this).attr("href"));
    });

    $(".btn-anhor").on("click", function (event) {
      event.preventDefault();
      menuAnhor($(this).attr("href"));
    });

    function menuAnhor(target) {
      if ($(".burger").hasClass("opened")) {
        $(".burger").removeClass("opened");
        $(".menu").stop().slideUp();
      }

      $("html, body").animate({ scrollTop: $(target).offset().top - 100 }, 150);
    }
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
