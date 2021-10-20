<template>
  <div>
    <div>
      <table class="w-full text-left">
        <thead class="flex w-full text-xs text-white border margen">
          <tr class="flex w-full">
            <th
              class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
            >
              Fecha Factura
            </th>
            <th
              class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
            >
              Pref
            </th>
            <th
              class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
            >
              Nro. Factura
            </th>
            <th
              class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
            >
              Vr. Factura
            </th>
            <th
              class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
            >
              Plazo
            </th>
            <th
              class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
            >
              Dias Hoy
            </th>
            <th
              class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
            >
              Acum. Vencido
            </th>
          </tr>
        </thead>
        <tbody
          class="flex flex-col w-full overflow-y-scroll text-xs bg-white"
          style="height: 64vh;"
        >
          <tr class="flex w-full bg-white tr">
            <td
              class="w-1/4 px-2 py-1 border-t border-b border-l border-gray-400 border-l-t "
            >
              1
            </td>
            <td
              class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400"
            >
              2
            </td>
            <td
              class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400"
            >
              3
            </td>
            <td
              class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400 "
            >
              4
            </td>
            <td
              class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400 "
            >
              5
            </td>
            <td
              class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400 "
            >
              6
            </td>
            <td
              class="w-1/4 px-2 py-1 text-right border border-gray-400 "
            >
              7
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "EstadoCuenta"
};
</script>

<style>
.margen {
  padding-right: 14px;
}

.tr:nth-child(odd){
  background-color: #E5E7EB
}
</style>
