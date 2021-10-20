<template>
  <div>
    <div class="max-h-screen pt-20 contenedor">
      <div class="">
        <div class="swiper-container">
          <div class="pt-2 swiper-wrapper">
            <div class="swiper-slide">
              <div
                class="min-h-screen bg-center bg-no-repeat bg-cover contenido-slider slider1"
              ></div>
            </div>
            <div class="swiper-slide">
              <div class="min-h-screen bg-center bg-no-repeat bg-cover contenido-slider slider2"></div>
            </div>
            <div class="swiper-slide">
              <div
                class="min-h-screen bg-center bg-no-repeat bg-cover contenido-slider slider3"
              ></div>
            </div>
            <div class="swiper-slide">
              <div
                class="min-h-screen bg-center bg-no-repeat bg-cover contenido-slider slider4"
              ></div>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
          <!-- Add Arrows -->
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
export default {
  name: "Slider",

  mounted() {
    const swiper = new Swiper(".swiper-container", {
      // Optional parameters
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
};
</script>

<style>
.contenedor {
  overflow: hidden;
}

.slider1 {
  background-image: url("/images/home/slider/1-slider.png");
  background-size: cover;
  background-repeat: no-repeat;
}

.slider2 {
  background-image: url("/images/home/slider/ambiente.webp");
  background-size: cover;
  background-repeat: no-repeat;
}

.slider3 {
  background-image: url("/images/home/slider/equipo.webp");
  background-size: cover;
  background-repeat: no-repeat;
}
.slider4 {
  background-image: url("/images/home/slider/investigacion.webp");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
