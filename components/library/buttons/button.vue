<template>
  <div :class="[divClass]">
    <nuxt-link :to="to" class="flex items-center justify-center">
      <p class="mr-4 text-base font-medium lg:text-lg ">
        <slot />
      </p>
      <span>
        <img
          class="inline ml-4 mr-2"
          src="/images/comunes/icono-flecha.png"
          alt=""
        />
      </span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "appButton",
  props: {
    to: { type: String },
    inlineBlock: { type: Boolean },
    center: { type: Boolean }
  },
  data() {
    return {};
  },
  computed: {
    divClass() {
      return {
        "inline-block": this.inlineBlock === true,
        "mt-4 text-white transition duration-700 ease-in-out  bg-primary hover:bg-indigo-900": true,
        "mx-auto": this.center === true
      };
    }
  }
};
</script>
