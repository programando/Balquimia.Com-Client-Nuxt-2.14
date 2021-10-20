<template>
  <div class="flex justify-center">
    
    <div class="flex justify-center w-full">
      <img class="z-10 h-12 px-4 py-4 -mr-10 " src="/images/inputs/user-repo.svg" alt="">
      <Password class="w-full " :toggle="true" :placeholder="text" v-model="recordSource"></Password>
    </div>
  </div>
</template>

<script>
    import Password from 'vue-password-strength-meter';
    export default {
      name: "ButtonPassword",
      props: {
        text: String,
        vmodel   : String,
      },
      components:{
        Password
      },
    data () {
      return {
        recordSource: this.vmodel,
        errors : [],
      }
    },
    watch :{
      recordSource ( newDate ){
          this.$emit('input', newDate);
      },
      vmodel ( newDate ) {
          this.recordSource = newDate;
      },
    },

    };
</script>

<style>
    input.Password__field {
      padding-left: 35px;
      
    }
    .Password.w-full {
        max-width: 100%;
    }
</style>
