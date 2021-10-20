<template>
  <div class="pt-40 bg-gray-200 pb-36">
    <div class="px-4 py-2 mx-10 lg:mx-20">
      <label class="font-semibold text-extra">Buscar Producto :</label>
      <input
        class="inline w-5/6 px-2 py-1 ml-2 border rounded-lg focus:border-primary focus:outline-none focus:shadow-outline"
        type="text"
        v-model="busqueda"
        placeholder="Buscar"
      />
    </div>
    <div class="mx-20">
      <table class="w-full">
        <thead class="flex w-full text-sm text-white">
          <tr class="flex w-full ">
            <th
              class="flex justify-center w-7/12 px-2 py-2 border-t border-b border-l border-gray-400 bg-primary"
            >
              Producto
            </th>
            <th
              class="flex justify-center w-2/12 px-2 py-2 border-t border-b border-l border-gray-400 bg-primary"
            >
              Presentación
            </th>
            <th
              class="flex justify-center w-2/12 px-2 py-2 border-t border-b border-l border-gray-400 bg-primary"
            >
              Precio
            </th>
            <th
              class="flex justify-center w-1/12 px-2 py-2 border-t border-b border-l border-gray-400 bg-primary"
            >
              % Iva
            </th>
          </tr>
        </thead>  
        <tbody
          class="flex flex-col w-full text-xs bg-grey-light"
          style="height: 50vh"
        >
          <tr
            v-for="producto in buscarProductos"   :key="producto.id_prdcto"
            class="flex w-full text-sm bg-white cursor-pointer tr"
          >
            <td
              class="w-7/12 px-2 py-1 border-t border-b border-l border-gray-400"
            >
              {{ producto.nom_prdcto | Capitalize }}
            </td>
            <td class="w-2/12 px-2 py-1 text-right border border-gray-400">
              {{ producto.nom_prsntcion }}
            </td>
            <td class="w-2/12 px-2 py-1 text-right border border-gray-400">
              {{ producto.vr_vta | NumeroEntero}}
            </td>
            <td class="w-1/12 px-2 py-1 text-right border border-gray-400">
              {{ producto.prcntje_iva  | NumeroDecimal }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

 

<script>
  import Productos from "@/models/Prdcto";
export default {
  layout: "layoutComputron",
  name: "index",

  data: () => ({
    busqueda: "",
    productos: [    {
          
        "id_prdcto_ppal": 11945,
        "clave": "F11945",
        "nom_prdcto": "ACEITE SINTETICO GRADO ALIMENTICIO FG ELITE 46",
        "id_prdcto": 16792,
        "nom_prsntcion": "galones                                 ",
        "en_lista_precios": 1,
        "vr_vta": "299,912",
        "vr_vta_web": "0.0000",
        "cant": 1,
        "dscrpcion": "Incluye tambor metalico                 ",
        "prcntje_iva": "19.0000",
        "id_fact_dt": 0
    },
    {
        "id_prdcto_ppal": 5187,
        "clave": "F5187",
        "nom_prdcto": "BIO RETROCHO 2111-E",
        "id_prdcto": 6068,
        "nom_prsntcion": "4 lts.                                  ",
        "en_lista_precios": 1,
        "vr_vta": "46,350",
        "vr_vta_web": "0.0000",
        "cant": 1,
        "dscrpcion": "Galon blanco cuadrado + caja x 6        ",
        "prcntje_iva": "0.0000",
        "id_fact_dt": 0
    },
    {
        "id_prdcto_ppal": 10722,
        "clave": "ME10722",
        "nom_prdcto": "BOMBA ESPUMADORA 40MM - LAVALOZA",
        "id_prdcto": 10730,
        "nom_prsntcion": "Unidad                                  ",
        "en_lista_precios": 1,
        "vr_vta": "606",
        "vr_vta_web": "700.0000",
        "cant": 1,
        "dscrpcion": "                                        ",
        "prcntje_iva": "19.0000",
        "id_fact_dt": 0
    },
    {
        "id_prdcto_ppal": 5145,
        "clave": "F5145",
        "nom_prdcto": "BOMBA SZ 28/410",
        "id_prdcto": 5202,
        "nom_prsntcion": "unid.                                   ",
        "en_lista_precios": 1,
        "vr_vta": "857",
        "vr_vta_web": "0.0000",
        "cant": 1,
        "dscrpcion": "Granel                                  ",
        "prcntje_iva": "19.0000",
        "id_fact_dt": 0
    },
    {
        "id_prdcto_ppal": 373,
        "clave": "E64",
        "nom_prdcto": "BOTELLA BALA 1000 TAPA FLIPTOP",
        "id_prdcto": 45,
        "nom_prsntcion": "unid.                                   ",
        "en_lista_precios": 1,
        "vr_vta": "857",
        "vr_vta_web": "0.0000",
        "cant": 1,
        "dscrpcion": "Granel                                  ",
        "prcntje_iva": "19.0000",
        "id_fact_dt": 0
    },
    {
        "id_prdcto_ppal": 10485,
        "clave": "E44",
        "nom_prdcto": "BOTELLA DOSIFICADORA 500 mL",
        "id_prdcto": 10488,
        "nom_prsntcion": "                                        ",
        "en_lista_precios": 1,
        "vr_vta": "1,385",
        "vr_vta_web": "0.0000",
        "cant": 1,
        "dscrpcion": "                                        ",
        "prcntje_iva": "19.0000",
        "id_fact_dt": 0
    },
    {
        "id_prdcto_ppal": 10595,
        "clave": "ME 5099",
        "nom_prdcto": "CAJA 6 x 4 lts. galones cuadrados CARTONE AMERICA",
        "id_prdcto": 10598,
        "nom_prsntcion": "Unidad                                  ",
        "en_lista_precios": 1,
        "vr_vta": "2,266",
        "vr_vta_web": "0.0000",
        "cant": 1,
        "dscrpcion": "                                        ",
        "prcntje_iva": "19.0000",
        "id_fact_dt": 0
    },
    {
        "id_prdcto_ppal": 31,
        "clave": "BB1",
        "nom_prdcto": "CAR MOTOR RAX",
        "id_prdcto": 10770,
        "nom_prsntcion": "55 gal. P                               ",
        "en_lista_precios": 1,
        "vr_vta": "1,694,393",
        "vr_vta_web": "0.0000",
        "cant": 1,
        "dscrpcion": "PLASTICO BOCA ANGOSTA                   ",
        "prcntje_iva": "19.0000",
        "id_fact_dt": 0
    },
    {
        "id_prdcto_ppal": 39,
        "clave": "BV1",
        "nom_prdcto": "CERA TAWAX B/BROWN/TERROZA",
        "id_prdcto": 103,
        "nom_prsntcion": "1/4 gal.                                ",
        "en_lista_precios": 1,
        "vr_vta": "16,902",
        "vr_vta_web": "0.0000",
        "cant": 1,
        "dscrpcion": "1/4 galon metalico + caja cera brown    ",
        "prcntje_iva": "19.0000",
        "id_fact_dt": 0
    },
    {
        "id_prdcto_ppal": 40,
        "clave": "401",
        "nom_prdcto": "CERA TAWAX C.E.2000",
        "id_prdcto": 10823,
        "nom_prsntcion": "5 gal.BA                                ",
        "en_lista_precios": 1,
        "vr_vta": "541,780",
        "vr_vta_web": "0.0000",
        "cant": 1,
        "dscrpcion": "CuÃ±ete x 5 galones boca ancha           ",
        "prcntje_iva": "19.0000",
        "id_fact_dt": 0
    },
    {
        "id_prdcto_ppal": 40,
        "clave": "401",
        "nom_prdcto": "CERA TAWAX C.E.2000",
        "id_prdcto": 17293,
        "nom_prsntcion": "Kilo                                    ",
        "en_lista_precios": 1,
        "vr_vta": "26,780",
        "vr_vta_web": "0.0000",
        "cant": 1,
        "dscrpcion": "kilo cera TAWAX CE 2000                 ",
        "prcntje_iva": "19.0000",
        "id_fact_dt": 0
    },
    {
        "id_prdcto_ppal": 47,
        "clave": "791",
        "nom_prdcto": "CERA TRON Amarilla en solv.",
        "id_prdcto": 120,
        "nom_prsntcion": "1 gal.                                  ",
        "en_lista_precios": 1,
        "vr_vta": "27,241",
        "vr_vta_web": "0.0000",
        "cant": 1,
        "dscrpcion": "GALON BOCA ANCHA CREMA Y CAJA           ",
        "prcntje_iva": "19.0000",
        "id_fact_dt": 0
    },
    {
        "id_prdcto_ppal": 47,
        "clave": "791",
        "nom_prdcto": "CERA TRON Amarilla en solv.",
        "id_prdcto": 121,
        "nom_prsntcion": "100 mL.                                 ",
        "en_lista_precios": 1,
        "vr_vta": "1,611",
        "vr_vta_web": "0.0000",
        "cant": 1,
        "dscrpcion": "Pote boca ancha x 100 mL                ",
        "prcntje_iva": "19.0000",
        "id_fact_dt": 0
    },
    {
        "id_prdcto_ppal": 47,
        "clave": "791",
        "nom_prdcto": "CERA TRON Amarilla en solv.",
        "id_prdcto": 119,
        "nom_prsntcion": "5 gal.BA                                ",
        "en_lista_precios": 1,
        "vr_vta": "120,233",
        "vr_vta_web": "0.0000",
        "cant": 1,
        "dscrpcion": "CuÃ±ete x 5 galones boca ancha           ",
        "prcntje_iva": "19.0000",
        "id_fact_dt": 0
    },
    
    ]
  }),
  
/*   mounted() {
      Productos.listaPrecios()
          .then ( response => {
             this.productos =response.data ;
          })  
  },
  */

  computed: {

    // pasar el varlo de la busqueda a minuscula
    busquedaMin(){
      return this.busqueda.toLowerCase()
      
    },

    // aplicar un filtro con el valor de la busqueda ya en minuscula
    buscarProductos() {
      return this.productos.filter((producto)=> {
        return producto.nom_prdcto.match(this.busquedaMin);
      })
    }
  },
};
</script>

<style>
.tr:nth-child(odd){
  background-color: #E5E7EB
}
</style>
