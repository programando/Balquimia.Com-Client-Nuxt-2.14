<template>
<div>
  <table class="w-full text-left">
    <thead class="flex w-full text-xs text-white border margen">
      <tr class="flex w-full">
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          Fecha
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          Factura
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          Valor
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          Plazo
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          Días
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          0 - 30
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          31 - 60
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          61 - 90
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border border-gray-700 bg-primary"
        >
          90 o Más
        </th>
      </tr>
    </thead>
    <tbody
      class="flex flex-col w-full overflow-y-scroll text-xs bg-white"
      style="height: 64vh;"
    >
      <tr v-for="Factura in Facturas" :key="Factura.id" class="flex w-full bg-white tr">
        <td class="w-1/4 px-2 py-1 border-t border-b border-l border-gray-400 ">
           {{ Factura.fcha_fact | FechaCorta }}
        </td>
        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400">
          {{ Factura.prfjo }} - {{ Factura.id_fact}}
        </td>
        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400">
          {{ Factura.vr_saldo | NoShowZero}} 
        </td>

        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400 ">
          {{ Factura.plazo_fact }}
        </td>
        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400 ">
          {{ Factura.dias_hoy }}
        </td>
        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400 ">
          {{ Factura._00_30  | NoShowZero }}
        </td>
        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400 ">
          {{ Factura._31_60 | NoShowZero }}
        </td>
        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400 ">
          {{ Factura._61_90 | NoShowZero }}
        </td>
        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-r border-gray-400 " >
          {{ Factura._91_180 | NoShowZero }}
        </td>
      </tr>
    </tbody>
  </table>
  <table class="w-full text-xs text-left">
    <thead class="flex w-full text-white bg-white margen">
      <tr class="flex w-full">
        <th
          class="flex justify-center w-1/4 px-2 py-2 "
        >

        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 "
        >
          
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2"
        >
          
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2"
        >
        
        </th>
        <th
          class="flex w-1/4 px-2 py-2 bg-gray-700 border-t border-b border-l border-black"
        >
          Total cliente
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 bg-gray-700 border-t border-b border-l border-black"
        >
           {{ TotalesCliente._00_30 | NoShowZero }}
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 bg-gray-700 border-t border-b border-l border-black"
        >
           {{ TotalesCliente._31_60 | NoShowZero }}
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 bg-gray-700 border-t border-b border-l border-black"
        >
           {{ TotalesCliente._61_90 | NoShowZero }}
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 bg-gray-700 border border-black"
        >
           {{ TotalesCliente._91_180 | NoShowZero }}
        </th>
      </tr>
    </thead>
    <tbody class="flex w-full text-white bg-white margen">
      <tr class="flex w-full">
        <th
          class="flex justify-center w-1/4 px-2 py-2 "
        >
         
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 "
        >
          
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2"
        >
          
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2"
        >
        
        </th>
        <th
          class="flex w-1/4 px-2 py-2 bg-gray-700 border-t border-b border-l border-black"
         
        >
          Total vendedor
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 bg-gray-700 border-t border-b border-l border-black"
        >
          {{ TotalesVendedor._00_30 | NoShowZero }}
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 bg-gray-700 border-t border-b border-l border-black"
        >
          {{ TotalesVendedor._31_60 | NoShowZero }}
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 bg-gray-700 border-t border-b border-l border-black"
        >
         {{ TotalesVendedor._61_90 | NoShowZero }}
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 bg-gray-700 border border-black"
        >
          {{ TotalesVendedor._91_180 | NoShowZero }}
        </th>
      </tr>
    </tbody>
  </table>
</div>
  
</template>

<script>

export default {
  name: 'TableList',
  props : { 
           Facturas: {
                type: Array,
                default: () => []
        },
            TotalesCliente: {
                type: Object,
                default: () => []
        },
            TotalesVendedor: {
                type: Object,
                default: () => []
        },
  },

  data() {
    return { }
  },

}
</script>

<style>
  .margen {
    padding-right: 10px;
  }
  
  .tr:nth-child(odd){
  background-color: #E5E7EB
}
</style>
