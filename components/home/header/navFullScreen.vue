<template>
  <!-- Navbar en pantalla completa, en pantalla pequeña esta oculto -->
  <nav class="flex ">
    <ul class="flex items-center justify-center pt-5 xl:mr-40">
      <SimpleLink  textMenu='Inicio'      urlDestino='/'    :responisve = "false"></SimpleLink>    <!-- / -->
      <!-- <SimpleLink  textMenu='Productos'   urlDestino='/store/productos'  :responisve = "false"></SimpleLink>  -->   <!-- "/store/productos" -->
      <SimpleLink  textMenu='Servicios'   urlDestino='/home/servicios'   :responisve = "false"></SimpleLink>    <!-- "/home/servicios" -->
      <SimpleLink  textMenu='Experiencia' urlDestino='/home/experiencia' :responisve = "false"></SimpleLink>    <!-- "/home/experiencia" -->
      <SimpleLink  textMenu='Contacto'    urlDestino='/home/contacto'    :responisve = "false"></SimpleLink>    <!-- "/home/contacto" -->

      
    </ul>

    <ul class="flex items-center justify-center">
 <!--      <Computron></Computron>
      <Carrito></Carrito> -->
       
    </ul>
  </nav>
</template>

<script>
 
import SimpleLink     from "@/components/library/links/simple";
import Carrito        from "@/components/home/navOptions/carrito";
import Idioma         from "@/components/home/navOptions/idioma";
import Computron         from "@/components/home/navOptions/computron";

  
export default {
  data: () => ({}),
  components: {
    
    Idioma,
    Carrito,
    SimpleLink,Computron
     
  }
};
</script>
