<template>
  <!-- Navbar en pantallas pequeñas y medianas -->
  <nav class="px-4 py-3 bg-white">
    <ul class="pt-4 text-base">
      <InocuidadAlimentaria></InocuidadAlimentaria>
      <ArtesGraficas></ArtesGraficas>
      <Automotriz></Automotriz>
      <Hotelera></Hotelera>
      <MantenimientoIndustrial></MantenimientoIndustrial>
      <MateriasPrimas></MateriasPrimas>
      <SanidadPortatil></SanidadPortatil>
    </ul>
    <ul class="mt-4">
      
      <Carrito :responsive="true"> </Carrito>
       
    </ul>
  </nav>
</template>

<script>
import InocuidadAlimentaria from "@/components/productos/menu/inocuidadAlimentaria";
import ArtesGraficas from "@/components/productos/menu/artesGraficas"
import Automotriz from "@/components/productos/menu/automotriz"
import Hotelera from "@/components/productos/menu/hotelera"
import MantenimientoIndustrial from "@/components/productos/menu/mantenimientoIndustrial"
import MateriasPrimas from "@/components/productos/menu/materiasPrimas"
import SanidadPortatil from "@/components/productos/menu/sanidadPortatil"
import Carrito from "@/components/home/navOptions/carrito";
 

export default {
  data: () => ({}),
  components: {
    InocuidadAlimentaria,
    ArtesGraficas,
    Automotriz,
    Hotelera,
    MantenimientoIndustrial,
    MateriasPrimas,
    SanidadPortatil,
    Carrito,
     
  }
};
</script>