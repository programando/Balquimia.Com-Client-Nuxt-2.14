<template>
  <div class="font-latos">
    <div class="min-h-screen px-4 pb-40 bg-gray-100 pt-28">
      <div class="mx-2">
        <p class="mx-10 text-lg font-bold text-center lg:text-xl">Departamento comercial</p>
        <div
          class="grid grid-cols-1 gap-8 mx-6 mt-6 lg:gap-2 lg:mx-0 xl:mx-4 xl:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          <CardLeftImage   
                  text    = "Cartera  clientes"
                  urlImg  = "/images/dashboard/cartera.svg"
                  urlLink = "/computron/comercial/cartera-clientes">
          </CardLeftImage>

          <CardLeftImage   
                text    = "Registro de pedidos"
                urlImg  = "/images/dashboard/web-search.svg"
                urlLink = "/computron/comercial/pedidos-registro" >
          </CardLeftImage>

          <CardLeftImage   
                text    = "Ventas por clientes"
                urlImg  = "/images/dashboard/sales.svg"
                urlLink = "/computron/comercial/ventas-clientes">
          </CardLeftImage>

          <CardLeftImage  
                text    = "Lista de precios"
                urlImg  = "/images/dashboard/lista-precios.svg"
                urlLink = "/computron/comercial/productos-lista-precios" >
          </CardLeftImage>

          <CardLeftImage  
                text    = "Autorización de pedidos"
                urlImg  = "/images/dashboard/autorizacion-cartera.svg"
                urlLink = "#">
          </CardLeftImage>

 

        </div>
        <div class="mx-8 mt-10 ">
          <h2 class="mb-4 text-lg font-bold text-center lg:text-xl">Ventas últimos dos años</h2>
          <LineChart></LineChart>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardLeftImage from "@/components/library/links/cardLeftImage";
import {mapState} from 'vuex';
import LineChart from "@/components/vueChart/lineChart"
export default {
  layout: "layoutComputron",
  name: "index",
  components: {
    CardLeftImage,LineChart
  },
    
  data() {
    return {

    };
  },

  middleware: ['isAuthenticated'],

  computed: {
  ...mapState({
      user    : state => state.User.User,
      logueado: state => state.User.Loguado
  })
}

};
</script>
