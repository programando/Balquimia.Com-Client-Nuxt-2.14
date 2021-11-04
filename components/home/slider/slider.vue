<template>
  <div>
    <div class="max-h-screen pt-8 contenedor">
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
             <div class="swiper-slide">
              <div
                class="min-h-screen bg-center bg-no-repeat bg-cover contenido-slider slider5"
              ></div>
            </div>
            <div class="swiper-slide">
              <div
                class="min-h-screen bg-center bg-no-repeat bg-cover contenido-slider slider6"
              ></div>
            </div>
            <div class="swiper-slide">
              <div
                class="min-h-screen bg-center bg-no-repeat bg-cover contenido-slider slider7"
              ></div>
            </div>
            <div class="swiper-slide">
              <div
                class="min-h-screen bg-center bg-no-repeat bg-cover contenido-slider slider8"
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
      spaceBetween: 10,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
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
  background-image: url("/images/home/slider/bienvenidos.png");
  background-size: cover;
  background-repeat: no-repeat;
}

.slider2 {
  background-image: url("/images/home/slider/creador.png");
  background-size: cover;
  background-repeat: no-repeat;
}

.slider3 {
  background-image: url("/images/home/slider/creolina.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.slider4 {
  background-image: url("/images/home/slider/cera.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.slider5 {
  background-image: url("/images/home/slider/retrocho.png");
  background-size: cover;
  background-repeat: no-repeat;
}

.slider6 {
  background-image: url("/images/home/slider/tambor.png");
  background-size: cover;
  background-repeat: no-repeat;
}

.slider7 {
  background-image: url("/images/home/slider/tierra.png");
  background-size: cover;
  background-repeat: no-repeat;
}

.slider8 {
  background-image: url("/images/home/slider/elegirnos.png");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>