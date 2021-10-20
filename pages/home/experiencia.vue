<template>
  <div >
     
    <div
      class="bg-center bg-no-repeat bg-cover "
      style="background-image: url(/images/home/experiencia/experiencia.webp)"
    >
      <div
        class="pt-64 pb-10 bg-center bg-no-repeat bg-cover lg lg:pb-32"
        style="background-image: url(/images/comunes/malla1.webp)"
      >
        <div class="px-10 md:px-16">


          <div class="my-8 lg:my-14">
            <h2
              class="px-4 text-3xl font-bold text-center text-white md:text-4xl lg:text-5xl xl:text-6xl"
            >
              Ofrecemos soluciones químicas para todas las industrias
            </h2>
            <p class="pt-6 text-center text-white md:text-lg lg:text-xl lg:px-16 xl:px-20">En BALQUIMIA S.A.S. estamos comprometidos en ofrecer productos que impulsen el desarrollo de las industrias en diversos sectores. </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-6 my-6 bg-black">
      <div class="px-4 py-10 text-center">
        <p class="text-2xl leading-7 text-white">Brindamos garantía en los resultados de limpieza, desenfección y mantenimiento en todas las áreas, equipos y superficies, con productos químicos especializados y comprometidos con el medio ambiente.</p>
      </div>
    </div>
    <div class="mx-6 mt-6 bg-gray-200 lg:mx-10">
      <div>
        <h2 class="text-xl font-bold text-gray-700">Algunos de nuestros clientes</h2>
      </div>
      <div class="grid-cols-2 gap-2 sm:grid lg:grid-cols-3 xl:grid-cols-4">
        <SectoresClientes
          url="/images/home/experiencia/sector0.webp"
        ></SectoresClientes>
        <SectoresClientes
          url="/images/home/experiencia/sector1.webp"
        ></SectoresClientes>
        <SectoresClientes
          url="/images/home/experiencia/sector2.webp"
        ></SectoresClientes>
        <SectoresClientes
          url="/images/home/experiencia/sector3.webp"
        ></SectoresClientes>
        <SectoresClientes
          url="/images/home/experiencia/sector4.webp"
        ></SectoresClientes>
        <SectoresClientes
          url="/images/home/experiencia/sector5.webp"
        ></SectoresClientes>
        <SectoresClientes
          url="/images/home/experiencia/sector6.webp"
        ></SectoresClientes>
        <SectoresClientes
          url="/images/home/experiencia/sector7.webp"
        ></SectoresClientes>
        <SectoresClientes
          url="/images/home/experiencia/sector8.webp"
        ></SectoresClientes>
        <SectoresClientes
          url="/images/home/experiencia/sector9.webp"
        ></SectoresClientes>
        <SectoresClientes
          url="/images/home/experiencia/sector10.webp"
        ></SectoresClientes>
        <SectoresClientes
          url="/images/home/experiencia/sector11.webp"
        ></SectoresClientes> 
      </div>
    </div>
    
    <div class="mx-4 mt-4 bg-gray-200 lg:mx-10">
    <div class="flex justify-between mb-4">
      <h2 class="text-2xl font-bold text-primary ">Productos Destacados</h2>
      <div class="hidden mr-10 lg:inline">
        <img class="inline" src="/images/comunes/arrL.webp" alt="fecha-izquierda">
        <img class="inline" src="/images/comunes/arrR.webp" alt="fecha-derecha">
      </div>
    </div>
    <div class="flex flex-wrap lg:-mx-2 ">
      <CardProductoDestacado></CardProductoDestacado>
      <CardProductoDestacado></CardProductoDestacado>
      <CardProductoDestacado></CardProductoDestacado>
    </div>
    </div>
     
  </div>
</template>
<script>
 
import SectoresClientes from "@/components/home/sectoresClientes";
 
export default {
   layout:'layoutBalquimia',
  components:{
     SectoresClientes
  }
}
</script>
<style>
  
</style>