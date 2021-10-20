<template>
      
    <div class="inline cursor-pointer" @click="openPdf">
      Politicas tratamiento de la información
    </div>
   
</template>


<script>

export default {
 

  data: () => ({}),

  methods: {
    openPdf() {
      let fileName = "/files/Politica.pdf";
      window.open(fileName, "_blank");
    }
  }
};
</script>