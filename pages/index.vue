<template>
  <div >
     
    <!-- sliderss -->
    <Slider></Slider>

    <!-- aside -->
    <Experiencia></Experiencia>

    <!-- section -->
    <LineasProductos></LineasProductos>

    <Diferenciadores></Diferenciadores>

    <ProductosDestacados></ProductosDestacados>

    <Clientes></Clientes>

    <Whatsapp></Whatsapp>

     
  </div>
</template>

<script>
 
import Experiencia          from "@/components/home/experiencias";
import LineasProductos      from "@/components/home/lineasProductos/lineasProductos";
import Slider               from "@/components/home/slider/slider";
import Diferenciadores      from "@/components/home/diferenciadores.vue";
import ProductosDestacados  from "@/components/home/productosDestacados/productosDestacados.vue";
import Clientes             from "@/components/home/clientesList.vue";
 
 
export default {
  layout:'layoutBalquimia',
  components: {
    Slider,
    Experiencia,
    LineasProductos,
    Diferenciadores,
    ProductosDestacados,
    Clientes,

  },

  data: () => ({}),
 
  methods: {
    },

};
</script>
