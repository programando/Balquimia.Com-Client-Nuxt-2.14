<template>
  <div class="fixed z-20 w-full ">
    <header class="bg-white">
      <!-- Icono de la empresa -->
      <div
        class="flex justify-center -mt-3 lg:flex lg:justify-between lg:mt:0 lg:py-0"
      >
        <nuxt-link class="flex justify-center flex-grow lg:flex-grow-0" to="/">
          <div class="">
            <img
              class="h-20 logo lg:ml-10 lg:h-auto"
              src="/images/home/header/balquimia-logo.png"
              alt="logo"
            />
          </div>
        </nuxt-link>

        <!-- Navbar en pantalla completa, en pantalla pequeña esta oculto -->
        <div class="hidden bg-white lg:flex">
          <NavFullScreen></NavFullScreen>
        </div>

        <!-- Icono svg del menu hamburguesa -->
        <div class="pt-6 lg:hidden ">
          <HamburguerIcon></HamburguerIcon>
        </div>
      </div>

      <!-- un checkbox para detectar mediante CSS cuando ocultar o desplegar el menu hambueguesa -->
      <input type="checkbox" class="hidden" id="menu-togle" />

      <!-- Navbar en pantallas pequeñas y medianas -->
      <div class="fixed hidden w-full lg:hidden " id="menu">
        <NavResponsiveProductos></NavResponsiveProductos>
      </div>
    </header>
    <div class="flex justify-center lg:block lg:ml-4">
      <img
        src="/images/home/header/arr.png"
        alt="arr1"
        class="h-10 lg:mt-0 "
      />
    </div>
  </div>
</template>

<script>
import NavFullScreen from "@/components/home/header/navFullScreen";
import NavResponsive from "@/components/home/header/navResponsive";
import HamburguerIcon from "@/components/home/navOptions/hamburguerIcon";
import NavResponsiveProductos from "@/components/productos/navResponsiveProductos"
export default {
  data: () => ({}),
  components: { NavFullScreen, HamburguerIcon, NavResponsiveProductos }
};
</script>

<style scoped>
.logo {
  position: relative;
  left: 6px;
  top: 20px;
  z-index: 100;
}

.logo-full {
  left: 0px;
}
</style>
