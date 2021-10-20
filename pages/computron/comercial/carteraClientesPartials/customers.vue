<template>
  <div>
    <div class="px-4 py-2 bg-white">
      <label class="font-semibold text-extra">Buscar :</label>
      <input class="w-5/6 px-2 py-1 ml-2 rounded-lg focus:border-primary focus:outline-none focus:shadow-outline" type="text" v-model="busqueda" placeholder="Buscar Clientes" />
    </div>
    <table class="w-full col-span-2 text-xs text-left">
      <thead class="flex w-full text-white margen">
        <tr class="flex w-full ">
          <th
            class="flex justify-center w-4/6 px-2 py-2 border-t border-b border-l border-gray-400 bg-primary"
          >
            Cliente
          </th>
          <th
            class="flex justify-center w-2/6 px-2 py-2 border-t border-b border-l border-gray-400 bg-primary"
          >
            Cartera
          </th>
        </tr>
      </thead>
      <tbody
        class="flex flex-col w-full overflow-y-scroll text-xs bg-white"
        style="height: 60vh"
      >
        <tr
          v-for="cliente in buscarCliente"
          :key="cliente.nro_identif"
          class="flex w-full bg-white cursor-pointer tr"
          @click="facturasPorCliente( cliente.nro_identif,  cliente.nom_full )"
        >
          <td
            class="w-4/6 px-2 py-1 border-t border-b border-l border-gray-400"
          >
            {{ cliente.nom_full | Capitalize }}
          </td>
          <td class="w-2/6 px-2 py-1 text-right border border-gray-400">
            {{ cliente.vr_saldo | NumeroEntero }}
          </td>
        </tr>
      </tbody>
    </table>
    <table class="w-full mr-6 text-xs">
        <thead class="w-full text-white">
          <tr class="flex mr-4">
            <th
              class="flex justify-center w-1/3 px-4 py-2 bg-gray-700 border-t border-b border-l border-black"
            >
              Total Cartera
            </th>
            <th
              class="flex justify-center w-1/3 px-4 py-2 bg-gray-700 border-t border-b border-l border-black"
            >
              Cartera Vencida
            </th>
            <th
              class="flex justify-center w-1/3 px-4 py-2 bg-gray-700 border-t border-b border-l border-black"
            >
              % Vencido
            </th>
          </tr>
        </thead>
        <tbody class="w-full text-white">
          <tr class="flex mr-4">
            <th
              class="flex justify-center w-1/3 px-4 py-2 bg-gray-700 border-t border-b border-l border-black"
            >
              {{ TotalesVendedor.TotalCartera | NumeroEntero }}
            </th>
            <th
              class="flex justify-center w-1/3 px-4 py-2 bg-gray-700 border-t border-b border-l border-black"
            >
               {{ TotalesVendedor.vencido | NumeroEntero }}
            </th>
            <th
              class="flex justify-center w-1/3 px-4 py-2 bg-gray-700 border-t border-b border-l border-black"
            >
               {{ TotalesVendedor.pctjeCartera | NumeroDecimal }} %
            </th>
          </tr>
        </tbody>
    </table>
  </div>
</template>
<script>
import Terceros from "@/models/Terceros";
export default {
    name: 'customersList',
    props: {
            TotalesVendedor : Object,
    },
    
    
  data: () => ({
    clientes: [],
    busqueda: '',
    Facturas:[],
    
  }),
  mounted() {
      this.carteraClientes();
  },

  methods: {
    carteraClientes() {
        Terceros.carteraClientes( this.$store.state.User.IdTercLogueado  )
        .then( response => {
          this.clientes= response.data;
        })
    },
    facturasPorCliente( nitCliente, nombreCliente) {
        Terceros.carteraFacturasPorCliente( nitCliente)
       .then ( response => {
          this.Facturas = response.data;      
          this.$emit('facturasPorCliente',  this.Facturas, nombreCliente); 
       }) ;

    }
  },

  computed: {
    // pasar el varlo de la busqueda a minuscula
    busquedaMin(){
      return this.busqueda.toUpperCase()
      
    },

    // aplicar un filtro con el valor de la busqueda ya en minuscula
    buscarCliente() {
      return this.clientes.filter((cliente)=> {
        return cliente.nom_full.match(this.busquedaMin);
      })
    }
  },
};
</script>



<style scoped>
.margen {
  /* margin-right: 40px; */
  /* margin-left: 40px; */
  padding-right: 15px;
}

.tr:nth-child(odd){
  background-color: #E5E7EB
}
</style>
