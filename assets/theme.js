"use-strict";

class SlideSection extends HTMLElement {
  constructor() {
    super();
    this.init()
  }

  init() {
    this.initSlide();
  }

  initSlide() {
    const _this = this;
    var sliderGlobal;
    var autoplaying = _this?.dataset.autoplay === "true";
    const loop = _this?.dataset.loop === "true";
    const itemDesktop = _this?.dataset.desktop ? _this?.dataset.desktop : 4;
    const itemTablet = _this?.dataset.tablet ? _this?.dataset.tablet : 2;
    const itemMobile = _this?.dataset.mobile ? _this?.dataset.mobile : 1;
    var autoplaySpeed = _this?.dataset.autoplaySpeed
      ? _this?.dataset.autoplaySpeed
      : 3000;
    var speed = _this?.dataset.speed ? _this?.dataset.speed : 400;
    const effect = _this?.dataset.effect ? _this?.dataset.effect : "slide";
    const row = _this?.dataset.row ? _this?.dataset.row : 1;
    var spacing = _this?.dataset.spacing ? _this?.dataset.spacing : 0;
    const progressbar = _this?.dataset.paginationProgressbar === "true";
    const autoItem = _this?.dataset.itemMobile === "true";
    spacing = Number(spacing);
    autoplaySpeed = Number(autoplaySpeed);
    speed = Number(speed);
    if (autoplaying) {
      autoplaying = { delay: autoplaySpeed };
    }
    sliderGlobal = new Swiper(_this, {
      slidesPerView: autoItem ? "auto" : itemMobile,
      spaceBetween: spacing >= 15 ? 15 : spacing,
      autoplay: autoplaying,
      loop: loop,
      effect: effect,
      speed: speed,
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      grid: {
        rows: row,
        fill: "row",
      },
      navigation: {
        nextEl: _this.querySelector(".swiper-button-next"),
        prevEl: _this.querySelector(".swiper-button-prev"),
      },
      pagination: {
        clickable: true,
        el: _this.querySelector(".swiper-pagination"),
        type: progressbar ? "progressbar" : "bullets",
      },
      breakpoints: {
        768: {
          slidesPerView: itemTablet,
          spaceBetween: spacing >= 30 ? 30 : spacing,
        },
        1200: {
          slidesPerView: itemDesktop,
          spaceBetween: spacing,
        }
      }
    });
  }
}
customElements.define('slide-section', SlideSection);