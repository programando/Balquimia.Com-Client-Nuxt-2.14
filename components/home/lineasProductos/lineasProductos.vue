<template>
  <section class="pt-10">
    
      <div class="mb-8">
        <h2
          class="mx-auto mt-20 text-3xl font-bold text-center md:mb-4 lg:text-5xl text-primary"
        >
          Desinfectantes Especializados
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <CardIndustrias
            v-for    = "linea in lineas"
          :key       = "linea.id_linea"
          :imagen    = "linea.imagen"
          :slogan    = "linea.slogan"
          :nom_linea = "linea.nom_linea"
          
        >
        </CardIndustrias>-->
      </div>
    
  </section>
</template>
<script>
import CardIndustrias from "@/components/home/lineasProductos/lineaProductoCard";
import LineasProductos from "@/models/MstroLinea";

export default {
  components: { CardIndustrias },
  data: () => ({
    lineas: [
      {
       // id_linea: 3,
       // cod_linea: "03  ",
       // nom_linea: "INOCUIDAD ALIMENTARIA",
        orden_local: 1,
        orden_web: 1,
        imagen: "/images/home/industrias/boton1.png",
        slogan:
          "Texto alusivo a la linea Texto alusivo a la linea Texto alusivo a la linea",
        //inactivo: 0,
      },
      {
        id_linea: 7,
        cod_linea: "07  ",
        nom_linea: "ARTES GRAFICAS",
        orden_local: 2,
        orden_web: 2,
        imagen: "/images/home/industrias/boton2.png",
        slogan:
          "Texto alusivo a la linea Texto alusivo a la linea Texto alusivo a la linea",
        inactivo: 0,
      },
      {
        id_linea: 5,
        cod_linea: "MP  ",
        nom_linea: "MATERIAS PRIMAS",
        orden_local: 3,
        orden_web: 3,
        imagen: "/images/home/industrias/boton3.png",
        slogan:
          "Texto alusivo a la linea Texto alusivo a la linea Texto alusivo a la linea",
        inactivo: 0,
      },
      {
        id_linea: 4,
        cod_linea: "04  ",
        nom_linea: "MANTENIMIENTO INDUSTRIAL",  
        orden_local: 4,
        orden_web: 4,
        imagen: "/images/home/industrias/mantenimiento_industrial.jpg",
        slogan:
          "Texto alusivo a la linea Texto alusivo a la linea Texto alusivo a la linea",
        inactivo: 0,
      },
      {
        id_linea: 11,
        cod_linea: "AUT ",
        nom_linea: "AUTOMOTRIZ",
        orden_local: 93,
        orden_web: 93,
        imagen: "/images/home/industrias/automotriz.jpg",
        slogan:
          "Texto alusivo a la linea Texto alusivo a la linea Texto alusivo a la linea",
        inactivo: 0,
      },
      {
        id_linea: 12,
        cod_linea: "CON ",
        nom_linea: "CONSTRUCCIÓN Y OBRAS CIVILES",
        orden_local: 94,
        orden_web: 94,
        imagen: "/images/home/industrias/sin_imagen_disponible.jpg",
        slogan:
          "Texto alusivo a la linea Texto alusivo a la linea Texto alusivo a la linea",
        inactivo: 0,
      },
      {
        id_linea: 13,
        cod_linea: "SAN ",
        nom_linea: "SANIDAD PORTÁTIL",
        orden_local: 95,
        orden_web: 95,
        imagen: "/images/home/industrias/sanidad.jpg",
        slogan:
          "Texto alusivo a la linea Texto alusivo a la linea Texto alusivo a la linea",
        inactivo: 0,
      },
    ],
  }),

  mounted() {
    /*      this.lineas = LineasProductos.activas()
      .then ( response => {
          this.lineas = response.data ;
      }) */
  },
};
</script>
<style></style>
