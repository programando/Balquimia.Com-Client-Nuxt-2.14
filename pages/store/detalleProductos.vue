<template>
  <div class="bg-gray-200">
    <Header></Header>
    <div class="pt-20 lg:pt-40">
      <div class="lg:flex justify-between lg:mx-20">
        <div class="pt-10 mx-6 lg:w-1/2 ">
          <img class="" src="/images/comunes/producto.jpg" alt="" />
        </div>
        <div class="py-4 px-6 lg:w-1/2 ">
          <span class="text-xs lg:text-sm bg-gray-500 p-1 rounded-lg transition duration-700 ease-in-out hover:bg-indigo-900 hover:text-white"
            >Linea alimentaria</span
          >
          <h2
            class="text-primary text-3xl lg:text-5xl font-bold my-4 border-b border-gray-500"
          >
            Clorotron
          </h2>
          <p class="text-gray-900">Linea: Industria alimentaria</p>
          <p class="text-gray-900 pb-4 mb-4 border-b border-gray-500">
            Aplicación: Detergente desinfectante clorado
          </p>
          <p class="text-gray-700">
            Ofrece todos los beneficios del cloro, por su elevada actividad
            antimicrobiana complementado con un detergente concentrado, que lo
            hace ideal para el lavado y desinfección de maquinaria, equipo e
            instalaciones en general de la industria alimenticia
          </p>
          <div class="py-2 my-6">
            <p class="text-center">Presentaciones</p>
            <div class="flex justify-center">
              <button
                class="py-2 mx-1 px-8 border bg-red-600 text-white border-gray-400 font-semibold"
              >
                4 Lts.
              </button>
              <button
                class="py-2 mx-1 px-8 border bg-white border-gray-400 font-semibold text-gray-900"
              >
                20 Lts.
              </button>
              <button
                class="py-2 mx-1 px-8 border bg-white border-gray-400 font-semibold text-gray-900"
              >
                200 Lts.
              </button>
            </div>
            <div>
              <p class="text-center mt-6 text-red-600 text-xl font-bold">
                $ 1'381.157
              </p>
              <div>
                <p class="flex justify-between">
                  <button class="bg-gray-400 py-2 px-4">-</button>
                  <input
                    class="py-2 px-4 w-full text-center"
                    type="text"
                    placeholder="1"
                  />
                  <button class="bg-gray-400 py-2 px-4">+</button>
                </p>
                <button
                  class="w-full mt-2 py-2 px-4 bg-green-600 text-white transition duration-700 ease-in-out hover:bg-indigo-900 font-bold"
                >
                  Agregar al carrito
                  <img
                    class="inline ml-2"
                    src="/images/comunes/icono-flecha.png"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="py-10 mx-8 lg:mx-20">
        <div class=" py-4 border border-gray-600 lg:bg-white">
          <ul class="flex justify-center lg:justify-start ">
            <li>
              <nuxt-link
                class="py-4 px-10 text-lg font-bold text-red-600 bg-white text-center"
                to="/"
                >Informacion Adicional</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                class="py-4 px-20 text-lg font-bold text-center hover:bg-gray-600"
                to="/"
                >Recursos</nuxt-link
              >
            </li>
          </ul>
        </div>
        <div>
          <div class=" px-8 py-8 border-l border-r border-gray-600 lg:flex">
            <p class="font-bold lg:w-1/5 ">Modo de uso</p>
            <p class="lg:w-4/5 text-gray-800">
              <span class="font-bold"
                >Para la limpieza de cualquier tipo de superficie:</span
              >
              Diluya en un recipiente con agua, una cantidad equivalente entre
              el 1% y el 5% de CLOROTRON dependiendo de la labor a realizar, y
              agite suavemente hasta homogenizar la mezcla. Por ningún motivo
              utilice la mano u otro implemento para agitarlo si este no esta
              muy limpio, ya que puede contaminar la solución. COn la ayuda de
              esponjillas, diversos tipos de cepillos, wipes u otras
              herramientas en buen estado, restriegue sobre la superficie hasta
              hacer abundante espuma, luego retire con agua limpia.
            </p>
          </div>
          <div class="px-8 py-8 border border-gray-600 lg:flex ">
            <p class="font-bold lg:w-1/5">Enfoque comercial</p>
            <p class="lg:w-4/5 text-gray-800">
              <span class="font-bold">CLOROTRON:</span>
              le ofrece todos los beneficios del cloro, el cual tiene una
              elevada actividad antimicrobiana complementado con un detergente
              concentrado que lo hace ideal para el lavado y desinfección de
              maquinaria, equipo e instalaciones en generalde la industria
              alimenticia.
            </p>
          </div>
          <div
            class="px-8 py-8  border-l border-r border-b border-gray-600 lg:flex "
          >
            <p class="font-bold lg:w-1/5 ">Recomendaciones</p>
            <p class="lg:w-4/5 text-gray-800 ">
              <span class="font-bold">CLOROTRON</span>
              es un producto seguro, no ofrece peligro de incendio ni de
              intoxicaciones en condiciones normales de uso. En caso de
              ingestión consultar al médico para tratamiento sintomático
            </p>
          </div>
        </div>
      </div>

      <div class="flex justify-between mx-8 lg:mx-20 mb-4">
        <h2 class="text-2xl font-bold text-primary ">
          Productos Relacionados
        </h2>
        <div class="hidden mr-10 lg:inline">
          <img
            class="inline"
            src="/images/comunes/arrL.webp"
            alt="fecha-izquierda"
          />
          <img
            class="inline"
            src="/images/comunes/arrR.webp"
            alt="fecha-derecha"
          />
        </div>
      </div>
      <div class="my-10 mx-6 lg:mx-16 sm:grid sm:grid-cols-3 xl:grid-cols-4 sm:gap-1">
        <CardProductoDestacado></CardProductoDestacado>
        <CardProductoDestacado></CardProductoDestacado>
        <CardProductoDestacado></CardProductoDestacado>
        <CardProductoDestacado></CardProductoDestacado>
        
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "@/components/home/header/indexHeader";
import CardProductoDestacado from "@/components/home/productosDestacados/cardProductoDestacado";
import Footer from "@/components/home/footer/footer";
export default {
  components: {
    Header,
    CardProductoDestacado,
    Footer
  }
};
</script>
<style></style>
