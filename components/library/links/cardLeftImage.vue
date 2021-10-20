<template>
  <div>
    <nuxt-link :to="urlLink">
      <div
        class="p-4 mx-4 transition-shadow bg-white border rounded-lg shadow cursor-pointer hover:shadow-xl"
      >
        <div class="flex items-center justify-start ">
          <div class="w-2/5 pl-8 rounded-md sm:pl-0">
            <img class="h-12" :src="urlImg" alt="" />
          </div>
          <div class="w-3/5 px-2">
            <span class="text-gray-900"> {{ text }} </span>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'CardDash',
  props: {
    text: String,
    urlImg: String,
    urlLink: String
  }

};
</script>

<style>
</style>