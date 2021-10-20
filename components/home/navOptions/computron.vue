<template>
  <li :class="[cssResponsiveLi, cssNotResponsiveLi]">
    <div :class="[cssResponsiveDiv, cssNotResponsiveDiv]">
      <nuxt-link
        to="/computron/"
        :class="[cssResponsiveLink, cssNotResponsiveLink]"
      >
        <img
          class="w-10 h-8 ml-2 "
          src="/images/servicios/ser2.webp"
          alt="computron"
        />
        <span :class="[cssResponsiveSpan, cssNotResponsiveSpan]">
          Computron
        </span>
      </nuxt-link>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    responsive: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({}),

  computed: {
    cssResponsiveLi() {
      return { "p-2 hover:bg-gray-200": this.responsive === true };
    },
    cssNotResponsiveLi() {
      return { "": this.responsive === false };
    },
    cssResponsiveDiv() {
      return {
        "grid grid-cols-5 border transition duration-700 ease-in-out hover:bg-extra hover:text-white py-1":
          this.responsive === true
      };
    },
    cssNotResponsiveDiv() {
      return {
        " py-2 px-3 mx-2  transition duration-700 ease-in-out hover:text-white hover:bg-yellow-500 rounded-lg":
          this.responsive === false
      };
    },
    cssResponsiveLink() {
      return { "col-start-3 col-end-4 px-4 ml-6": this.responsive === true };
    },
    cssNotResponsiveLink() {
      return { "": this.responsive === false };
    },
    cssResponsiveSpan() {
      return { "text-xs text-gray-900": this.responsive === true };
    },
    cssNotResponsiveSpan() {
      return { "text-xs text-gray-900 font-semibold": this.responsive === false };
    }
  }
};
</script>

<style>






</style>
