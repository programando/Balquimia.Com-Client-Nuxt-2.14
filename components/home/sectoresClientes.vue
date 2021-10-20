<template>
  <div class="my-6">
    <img class="w-full" :src="url" alt="" />
    <p class="uppercase text-gray-700 mt-2">Sector Avícola</p>
  </div>
</template>
<script>
export default {
  props: {
    url: String
  }
};
</script>
<style>
</style>