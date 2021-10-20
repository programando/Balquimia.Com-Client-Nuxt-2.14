<template>
  <div>
    <HeaderProductos></HeaderProductos>

    <div class="pb-8 bg-gray-200 ">
      <div class="grid-cols-4 gap-4 lg:grid lg:mx-0 ">
        <div class="col-start-2 col-end-5 mx-4 lg:-ml-2 lg:mx-0 ">
          <div class="pt-20 bg-gray-200">
            <div class="my-10 ml-2 mr-4 bg-white border lg:ml-2 lg:mr-4">
              <div
                class="bg-center bg-no-repeat bg-cover"
                style="background-image: url(/images/comunes/malla2.webp)"
              >
                <div class="flex">
                  <div class="mx-4 my-6 md:mx-8">
                    <h2
                      class="px-4 mt-4 text-2xl font-bold leading-5 text-primary md:leading-none md:text-3xl lg:text-4xl "
                    >
                      Productos para el sector Inocuidad de Alimentos
                    </h2>
                    <div class="mx-4 my-4 border"></div>
                    <p class="px-4 text-lg leading-6 text-gray-700">
                      Sistema de limpieza, desinfección y mantenimiento
                      preventivo
                    </p>
                  </div>
                  <div class="relative flex mr-16 -ml-10 lg:ml-4">
                    <img
                      class="h-64 pico"
                      src="/images/comunes/eu.webp"
                      alt=""
                    />
                    <img
                      class="h-64"
                      src="/images/comunes/linea0.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-between mx-10 mb-4">
            <h2 class="text-2xl font-bold text-primary ">
              Lista de Productos
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

          <div class="my-10 sm:grid sm:grid-cols-3 xl:grid-cols-4 sm:gap-1">
            <CardProductoDestacado></CardProductoDestacado>
            <CardProductoDestacado></CardProductoDestacado>
            <CardProductoDestacado></CardProductoDestacado>
            <CardProductoDestacado></CardProductoDestacado>
            <CardProductoDestacado></CardProductoDestacado>
            <CardProductoDestacado></CardProductoDestacado>
          </div>
        </div>

        <div class="px-4 mx-4 mb-4 lg:mt-12 xl:mt-16 lg:py-5 lg:mx-0 xl:ml-10 lg:fixed">
          <div class="flex justify-center bg-black border lg:pt-10 xl:pt-6">
            <h3 class="px-3 py-2 text-xl font-bold text-white lg:py-5">
              Por Sectores
            </h3>
          </div>
          <div
            class="flex justify-start px-3 py-2 text-gray-700 bg-white border hover:bg-gray-300"
          >
            <nuxt-link to="/"> Inocuidad Alimentaria</nuxt-link>
          </div>
          <div
            class="flex justify-start px-3 py-2 text-gray-700 bg-white border hover:bg-gray-300"
          >
            <nuxt-link to="/"> Artes gráficas</nuxt-link>
          </div>
          <div
            class="flex justify-start px-3 py-2 text-gray-700 bg-white border hover:bg-gray-300"
          >
            <nuxt-link to="/"> Automotriz</nuxt-link>
          </div>
 
          <div
            class="flex justify-start px-3 py-2 text-gray-700 bg-white border hover:bg-gray-300"
          >
            <nuxt-link to="/"> Mantenimiento Industrial</nuxt-link>
          </div>
          <div
            class="flex justify-start px-3 py-2 text-gray-700 bg-white border hover:bg-gray-300"
          >
            <nuxt-link to="/"> Materias Primas</nuxt-link>
          </div>
          <div
            class="flex justify-start px-3 py-2 text-gray-700 bg-white border hover:bg-gray-300"
          >
            <nuxt-link to="/"> Sanidad Portatil</nuxt-link>
          </div>

        </div>

        <!-- footer -->
<!--         <div class="order-last col-start-2 col-end-5 lg:mx-0">
          <div class="pb-10 bg-white">
            <div
              class="bg-center bg-no-repeat bg-cover lg:py-20 "
              style="background-image:url(/images/home/footer/footer-contact.webp)"
            >
              <div
                class="bg-center bg-no-repeat bg-cover "
                style="background-image:url(/images/comunes/malla1.webp)"
              >
                <div class="py-20">
                  <div class="mx-10">
                    <h2 class="text-2xl font-bold text-center">
                      Estamos listos, ¿Que necesidad tienes en tu empresa?
                    </h2>
                    
                    <div
                      class="w-56 px-3 py-2 mx-auto mt-4 text-white transition duration-700 ease-in-out bg-primary hover:bg-indigo-900 "
                    >
                      <nuxt-link
                        to="/"
                        class="flex items-center justify-center"
                      >
                        <p
                          class="mr-4 text-base font-medium md:text-lg lg:text-xl md:px-6"
                        >
                          Contáctenos
                        </p>
                        <img
                          class="h-5"
                          src="/images/comunes/icono-flecha.png"
                          alt="bandera"
                        />
                      </nuxt-link>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div class="-mt-10 ">
              <img
                class="mx-auto "
                src="/images/home/footer/arr2.webp"
                alt=""
              />
            </div>
            <div class="relative">
              <img
                class="mx-auto logo"
                src="/images/home/footer/balquimia-logo.webp"
                alt=""
              />
            </div>
            <div
              class="sm:grid sm:grid-cols-2 lg:grid-cols-2 lg:mx-4 lg:mr-8 xl:grid-cols-4"
            >
              <div class="text-gray-700 sm:mt-4">
                <div class="flex justify-center mt-2">
                  <h3 class="font-bold uppercase">Explorar</h3>
                </div>
                <div class="flex justify-center mt-2">
                  <nuxt-link to="/">Inicio</nuxt-link>
                </div>
                <div class="flex justify-center">
                  <nuxt-link to="/">Productos</nuxt-link>
                </div>
                <div class="flex justify-center">
                  <nuxt-link to="/">Servicios</nuxt-link>
                </div>
                <div class="flex justify-center">
                  <nuxt-link to="/">Experiencia</nuxt-link>
                </div>
                <div class="flex justify-center">
                  <nuxt-link to="/">Contacto</nuxt-link>
                </div>
              </div>
              <div class="mt-10 text-gray-700 sm:mt-4 ">
                <div class="flex justify-center">
                  <h3 class="font-bold uppercase">Productos</h3>
                </div>
                <div class="flex justify-center mt-2">
                  <nuxt-link to="/">Linea Inocuidad Alimentaria</nuxt-link>
                </div>
                <div class="flex justify-center">
                  <nuxt-link to="/">Linea Artes gráficas</nuxt-link>
                </div>
                <div class="flex justify-center">
                  <nuxt-link to="/">Linea Automotriz</nuxt-link>
                </div>
                <div class="flex justify-center">
                  <nuxt-link to="/">Linea Hotelera</nuxt-link>
                </div>
                <div class="flex justify-center">
                  <nuxt-link to="/">Linea Mantenimiento Industrial</nuxt-link>
                </div>
                <div class="flex justify-center">
                  <nuxt-link to="/">Linea Materias Primas</nuxt-link>
                </div>
                <div class="flex justify-center">
                  <nuxt-link to="/">Linea Sanidad Portatil</nuxt-link>
                </div>
              </div>
              <div class="mt-10 text-gray-700 sm:mt-8 lg:mt-4 ">
                <div class="flex justify-center">
                  <h3 class="font-bold uppercase">Legal</h3>
                </div>
                <div class="flex justify-center mt-2">
                  <nuxt-link to="/">Términos y condiciones</nuxt-link>
                </div>
                <div class="flex justify-center">
                  <nuxt-link to="/">Politicas de privacidad</nuxt-link>
                </div>
              </div>
              <div class="mt-10 text-gray-700 sm:mt-8 lg:mt-4">
                <div class="flex justify-center">
                  <h3 class="font-bold uppercase">Contáctenos</h3>
                </div>
                <div class="flex justify-center">
                  <p class="font-bold">Balquimia Chemical Solutions</p>
                </div>
                <div class="flex justify-center">
                  <p>Linea de atencion al cliente</p>
                </div>
                <div class="flex justify-center">
                  <p class="font-bold">01 8000 18 TRON (8766)</p>
                </div>
                <div class="flex justify-center">
                  <p>Dirección: Cll 35 #4-31</p>
                </div>
                <div class="flex justify-center">
                  <p>Cali - Colombia</p>
                </div>
              </div>
            </div>
            <div class="flex justify-center mt-20">
              <nuxt-link to="/">
                <img
                  class="h-6 mx-1"
                  src="/images/home/footer/facebook.svg"
                  alt=""
                />
              </nuxt-link>
              <nuxt-link to="/">
                <img
                  class="h-6 mx-1"
                  src="/images/home/footer/instagram.svg"
                  alt=""
                />
              </nuxt-link>
              <nuxt-link to="/">
                <img
                  class="h-6 mx-1"
                  src="/images/home/footer/twitter.svg"
                  alt=""
                />
              </nuxt-link>
              <nuxt-link to="/">
                <img
                  class="h-6 mx-1"
                  src="/images/home/footer/linkedin.svg"
                  alt=""
                />
              </nuxt-link>
              <nuxt-link to="/">
                <img
                  class="h-6 mx-1"
                  src="/images/home/footer/youtube.svg"
                  alt=""
                />
              </nuxt-link>
            </div>
            <div class="flex justify-center">
              <p class="text-xs text-gray-700">
                © Balquimia Chemical Solutions 2021
              </p>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import HeaderProductos from "@/components/productos/headerProductos";
import Footer from "@/components/home/footer/footer";
import CardProductoDestacado from "@/components/home/productosDestacados/cardProductoDestacado";
export default {
  
  components: {
    HeaderProductos,
    Footer,
    CardProductoDestacado
  }
};
</script>
<style>
.pico {
  position: relative;
  left: 73px;
}

.prueba {
  position: fixed;
}

/* footer */
.logo {
  position: relative;
  bottom: 30px;
  right: 30px;
}
</style>
