<template>
      <div class="text-white">
        <p class="lg:text-lg">
          {{ fraseDiaria}}
        </p>
        <h3 class="flex justify-end mt-1 mr-10 font-semibold lg:text-lg ">
          -{{ autor}}
        </h3>
    </div>

</template>
<script>
  import Frase from '@/models/Frase';
    export default {
      
      data: () => ({
            fraseDiaria:'',
            autor:''
      }),

      mounted() {
            Frase.delDia()
            .then ( response =>{
                  this.autor       = response.data[0].autor ;
                  this.fraseDiaria = response.data[0].nom_frase ;
            })
      },  


    }
</script>