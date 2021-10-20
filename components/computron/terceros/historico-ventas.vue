<template>
  <div>
    <table class="w-full text-left">
    <thead class="flex w-full text-xs text-white margen">
      <tr class="flex w-full">
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          Lote
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          Ord.Cpra
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          Factura
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          Plazo
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          fecha
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          Producto
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          Present.
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          Cant.
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          Prec.Base
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          Flete
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          Financ.
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          My.Valor
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          Dscto.
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          Vr.unit
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          Nota Cred
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          Sub Total
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border border-gray-700 bg-primary"
        >
          Vr. Factura
        </th>
      </tr>
    </thead>
    <tbody
      class="flex flex-col w-full overflow-y-scroll text-xs bg-white"
      style="height: 64vh;"
    >
      <tr class="flex w-full bg-white tr">
        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400 border-l-t ">
          1 
        </td>
        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400">
          2
        </td>
        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400">
          3
        </td>
        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400 ">
          4
        </td>
        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400 ">
          5
        </td>
        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400 ">
          6
        </td>
        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400 ">
          7
        </td>
        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400 ">
          8
        </td>
        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400 ">
          9
        </td>
        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400 ">
          10
        </td>
        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400 ">
          11
        </td>
        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400 ">
          12
        </td>
        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400 ">
          13
        </td>
        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400 ">
          14
        </td>
        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400 ">
          15
        </td>
        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400 ">
          16
        </td>
        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-r border-gray-400 " >
          17
        </td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
export default {
  name: 'HistoricoVentas'
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