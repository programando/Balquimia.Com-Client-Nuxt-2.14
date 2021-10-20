<template>
  <div>
     
    
    <div class="bg-gray-900 ">
      <div
        class="pb-10 bg-center bg-no-repeat bg-cover pt-36 lg lg:pb-20"
        style="background-image: url(/images/comunes/malla2.webp)"
      >
        <div class="px-10 md:px-16">


          <div class="my-8 lg:my-14">
            <h2
              class="px-4 text-3xl font-bold text-center text-white md:text-4xl lg:text-5xl xl:text-6xl"
            >
              Contáctenos
            </h2>
            <p
              class="px-4 pt-4 text-center text-white lg:pt-6 md:text-lg lg:text-xl lg:px-20 xl:px-40 xl:text-2xl"
            >
              En BALQUIMIA S.A.S. estamos comprometidos con el mejoramiento continuo de nuestros procesos. 
              Actualmemnte nuestro sitio está siendo mejorado para brindarle el mejor servicio. Escríbanos, nos contactéremos con usted.
            </p>
          </div>
        </div>
      </div>
    </div>
   
    <div class="justify-center mt-4 lg:flex lg:mx-10 ">
      <div class="px-4 py-10 mx-4 lg:w-3/5 lg:ml-16">
        <h2 class="text-2xl text-gray-700 lg:text-3xl">En dónde nos encuentra?</h2>
        <div class="mt-4">
          <p class="text-xs lg:text-sm">Dirección</p>
          <p class="text-lg text-primary lg:text-xl ">CLL 35 N° 4-31</p>
          <p class="text-xs text-gray-700 lg:text-sm">Cali, Valle del Cauca - Colombia</p>
        </div>
        <div class="mt-4">
          <p class="text-xs lg:text-sm">Línea gratuita servicio al cliente</p>
          <p class="text-lg text-primary lg:text-xl">01 8000 18 87 66 </p>
        </div>
        <div class="mt-4">
          <p class="text-xs lg:text-sm">PBX</p>
          <p class="text-lg text-primary lg:text-xl ">(+57) 2 488 1616</p>
        </div>
        <div class="mt-4">
          <p class="text-xs lg:text-sm">Email</p>
          <p class="text-lg text-primary lg:text-xl">ventas@balquimia.com</p>
        </div>
        <div class="mt-6">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15930.173410412854!2d-76.51313999999999!3d3.46053000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9fbbbe887df4bb2d!2sBALQUIMIA%20S.A.S.!5e0!3m2!1ses!2sco!4v1608775033961!5m2!1ses!2sco" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
      </div>
      <div class="col-span-3 col-start-2 px-4 mx-4 mb-20 lg:mt-10">
        <h2 class="text-2xl text-gray-700 lg:text-4xl">Escríbanos</h2>
        <p class="w-2/3 mt-2 text-gray-600 lg:text-lg lg:w-4/5">
          Si tiene alguna solicitud o sugerencia por favor diligencie este
          formulario y uno de nuestros ejecutivos se pondrá en contacto a la mayor brevedad posible.
        </p>

        <form class="mt-6">
          <input
            class="w-2/3 px-6 py-3 bg-white border border-gray-500 lg:w-4/5 focus:ring-2 focus:ring-gray-200"
            type="text"
            placeholder="Nombre"
          />
          <input
            class="w-2/3 px-6 py-3 mt-2 bg-white border border-gray-500 lg:w-4/5 focus:ring-2 focus:ring-gray-200"
            type="text"
            placeholder="Empresa"
          />
          <input
            class="w-2/3 px-6 py-3 mt-2 bg-white border border-gray-500 lg:w-4/5 focus:ring-2 focus:ring-gray-200"
            type="text"
            placeholder="Ciudad"
          />
          <input
            class="w-2/3 px-6 py-3 mt-2 bg-white border border-gray-500 lg:w-4/5 focus:ring-2 focus:ring-gray-200"
            type="text"
            placeholder="E-mail"
          />
          <input
            class="w-2/3 px-6 py-3 mt-2 bg-white border border-gray-500 lg:w-4/5 focus:ring-2 focus:ring-gray-200"
            type="text"
            placeholder="Telefono"
          />
          <input
            class="w-2/3 px-6 py-3 mt-2 bg-white border border-gray-500 lg:w-4/5 focus:ring-2 focus:ring-gray-200"
            type="text"
            placeholder="Celular"
          />
          <textarea
            class="w-2/3 px-6 pt-8 mt-2 border border-gray-500 lg:w-4/5"
            name=""
            id=""
            cols="22"
            rows="5"
            placeholder="¿En que podemos ayudarte?"
          ></textarea>
          <p class="w-2/3 mt-2 text-xs text-gray-700 ">
            Al diligenciar y enviar este formulario, acepto   de BALQUIMIA S.A.S.
          </p>
          <input
            class="px-6 py-2 mt-4 text-white bg-primary hover:bg-indigo-900"
            type="submit"
            value="Enviar mensaje"
          />
        </form>
      </div>
    </div>
     
  </div>
</template>
<script>
 import PoliticaTratamientoDatos from "@/components/comun/politicaDatos";
 
export default {
  layout:'layoutBalquimia',
  components:{PoliticaTratamientoDatos }
 
};
</script>
<style></style>
