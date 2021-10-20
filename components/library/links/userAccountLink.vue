<template>
      <nuxt-link :to="urlDestino"  class="flex items-center space-x-1 rounded-lg hover:bg-gray-400 hover:text-white"   >
        <img
          class="h-3 ml-2 md:h-4"
          :src="`/images/dashboard/headerDash/${image}`"
          alt=""
        />
        <div class="px-2 py-2 ">
          {{ textMenu }}
        </div>
      </nuxt-link>
</template>
<script>
  export default {
     
      props: {  
                textMenu  : String,
                urlDestino: String,
                image:String
        },
 
  }
</script>
