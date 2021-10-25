<template>
  <div class="bg-gray-900">
    <div
      class="bg-center bg-no-repeat bg-cover"
      style="background-image: url(/images/comunes/malla2.webp)"
    >
      <div class="px-10 pt-20 md:px-16 lg:px-0 lg:pl-16 ">

        <div class="lg:flex lg:mt-10">
          <div class="lg:w-2/3 lg:px-10 xl:px-20">
            <div class="mt-8 lg:mb-2">
              <h2 class="mb-4 -mt-10 text-2xl font-bold text-center lg:pr-24 lg:text-4xl text-primary ">¿Quénes somos?</h2>
              <h3 class="text-sm text-white sm:text-base md:text-xl xl:text-xl ">
                BALQUIMIA S.A.S. empresa colombiana fabricante de productos químicos especializados enfocados a la limpieza, desinfección y mantenimiento en todas las áreas, equipos y superficies.  Innovamos y desarrollamos nuestros productos con énfasis al cuidado del medio ambiente y con altos estándares de calidad para satisfacer los requerimientos de todos los sectores industriales nacionales e internacionales.
              </h3>
            </div>
            <div class="mt-2 sm:flex seccion-1">
              <div class="hidden sm:block ">
                <img
                  class="w-full h-full mr-40 "
                  src="/images/home/experiencia/lab1.webp"
                  alt="imagen-lab"
                />
              </div>
              <div class="px-5 py-5 text-white transition duration-700 ease-in-out bg-primary hover:bg-indigo-900 hover:text-white">
                <nuxt-link to="/home/experiencia">
                  <p class="mr-20">
                    Aplicamos calidad, eficiencia y durabilidad en nuestros
                    servicios para superar los objetivos de nuestros clientes.
                  </p>
                  <p class="mt-4 ml-16 sm:ml-20 md:ml-24 lg:ml-28 xl:ml-40">
                    Ver servicios
                    <span
                      ><img
                        class="inline ml-4"
                        src="/images/comunes/arrR.webp"
                        alt=""
                    /></span>
                  </p>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="relative hidden w-1/3 mt-20 lg:flex xl:px-1 xl:-mt-3">
            <div class="relative">
              <img
                class="h-auto seccion-2"
                src="/images/home/experiencia/hexa1.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
 

export default {
   
 
};
</script>

<style scoped>
.seccion-1 {
  position: relative;
  top: 50px;
}

.seccion-2 {
  position: relative;
  top: 60px;
}

@media (min-width: 1200px) {
  .seccion-2 {
    top: 33px;
  }
}
</style>
