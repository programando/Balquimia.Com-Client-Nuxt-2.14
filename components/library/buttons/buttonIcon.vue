<template>
  <div class="px-2 py-1 rounded-lg cursor-pointer " :class="[setVariant]">
    <img class="h-5 " :src="urlIcon" alt="" :disabled="isdisabled"/>
  </div>
</template>

<script>
export default {
  name: "ButtonIcon",
  props: {
    urlIcon: String,
    variant: String,
    isdisabled: {
          type:Boolean,
          default() { return false;}
    },
  },

  computed: {
    setVariant() {
      switch (this.variant) {
        case "success":
          return "bg-green-400 hover:bg-green-800";
          break;
        case "primary":
          return "bg-primary hover:bg-red-900";
      }
    }
  }
};
</script>

<style></style>
