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
  }

  // if ($(".about").length > 0) {
  //   let show = true;
  //   let countbox = ".about";
  //   $(window).on("scroll load resize", function () {
  //     if (!show) return false;
  //     let w_top = $(window).scrollTop();
  //     let e_top = $(countbox).offset().top;
  //     let w_height = $(window).height();
  //     let d_height = $(document).height();
  //     let e_height = $(countbox).outerHeight();
  //     if (
  //       w_top + 500 >= e_top ||
  //       w_height + w_top == d_height ||
  //       e_height + e_top < w_height
  //     ) {
  //       $(".about-numbers .num").css("opacity", "1");
  //       $(".about-numbers .num").spincrement({
  //         thousandSeparator: "",
  //         duration: 5000,
  //       });

  //       show = false;
  //     }
  //   });
  // }
});

$(window).on("resize", function () {
  if ($(".projects-list").length > 0) {
    setHeightProjectsMobile();
  }
});

function setHeightProjectsMobile() {
  let item = $(".projects-list .projects-item");
  let height = item.outerHeight();

  $(".projects-list").height(height);
}
