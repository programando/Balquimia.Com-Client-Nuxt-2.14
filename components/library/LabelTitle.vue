<template>
  <div>
    <div class="flex" :class="[setAlign]">
      <h2 class="text-base md:text-lg lg:text-xl xl:text-2xl" :class="setColor">
        {{ title }}
      </h2>
    </div>

    <div class="flex" :class="[setAlign]">
      <p class="mt-4 text-sm text-center lg:text-base" :class="setColor">{{ description }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "LabelTitle",

  props: {
    title: String,
    description: String,
    align: String,
    color: String
  },

  computed: {
    setAlign() {
      switch (this.align) {
        case "center":
          return "justify-center";
          break;

        case "start":
          return "justify-start";
          break;

        case "end":
          return "justify-end";
      }
    },

    setColor() {
      switch (this.color) {
        case "primary":
          return "text-primary";
          break;

        case "secondary":
          return "text-secondary";
          break;

        case "extra":
          return "text-extra";
          break;
      }
    }
  }
};
</script>
<style></style>
