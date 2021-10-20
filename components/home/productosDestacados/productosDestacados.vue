<template>
  <div class="pt-56 -mt-4 bg-gray-200">
    <div class="flex justify-between mx-10 mb-4">
      <h2 class="text-2xl font-bold text-primary ">Productos Destacados</h2>
      <div class="hidden mr-10 lg:inline">
        <img class="inline" src="/images/comunes/arrL.webp" alt="fecha-izquierda">
        <img class="inline" src="/images/comunes/arrR.webp" alt="fecha-derecha">
      </div>
    </div>
    <div class="flex flex-wrap mx-10">
      <CardProductoDestacado></CardProductoDestacado>
      <CardProductoDestacado></CardProductoDestacado>
      <CardProductoDestacado></CardProductoDestacado>
    </div>
    
    
  </div>
</template>
<script>
import CardProductoDestacado from '@/components/home/productosDestacados/cardProductoDestacado'
export default {
    components: {CardProductoDestacado }
};
</script>
<style>
.fondo:hover {
  background-color: #D3500A;
}

.fondo:hover > p,
h2 {
  color: white;
}

.fondo:hover > h2 {
  color: white;
}

.fondo:hover > div {
  opacity: 100;
}


</style>
