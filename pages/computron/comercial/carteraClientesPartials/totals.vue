<template>
  <div>
    <div class="flex items-center mt-1 text-sm">
      <table class="w-11/12 col-span-2 ">
        <thead class="flex w-full mx-8 text-white">
          <tr class="grid w-full grid-cols-8 ">
            <th class="flex justify-center py-2 bg-white "></th>
            <th
              class="flex justify-center py-2 bg-gray-700 border-t border-b border-l border-black"
            >
              0 - 30 dias
            </th>
            <th
              class="flex justify-center py-2 bg-gray-700 border-t border-b border-l border-black "
            >
              31 - 60 dias
            </th>
            <th
              class="flex justify-center py-2 bg-gray-700 border-t border-b border-l border-black w-1/7"
            >
              61 - 90 dias
            </th>
            <th
              class="flex justify-center py-2 bg-gray-700 border-t border-b border-l border-black w-1/7"
            >
              90 dias o Más
            </th>
            <th
              class="flex justify-center py-2 bg-gray-700 border-t border-b border-l border-black w-1/7"
            >
              Total Cartera
            </th>
            <th
              class="flex justify-center py-2 bg-gray-700 border-t border-b border-l border-black w-1/7"
            >
              Cartera Vencida
            </th>
            <th
              class="flex justify-center py-2 bg-gray-700 border-t border-b border-l border-black w-1/7"
            >
              % Cartera
            </th>
          </tr>
        </thead>
      </table>
    </div>
    <div class="flex items-center text-sm">
      <table class="w-11/12 text-left">
        <thead class="flex w-full mx-8 text-white">
          <tr class="grid w-full grid-cols-8 border">
            <th
              class="px-2 py-2 text-center border-t border-b border-l border-black bg-primary"
            >
              Totales
            </th>
            <th
              class="px-2 py-2 text-right bg-gray-700 border-t border-b border-l border-black"
            >
              {{ Totales["_00_30"] }}
            </th>
            <th
              class="px-2 py-2 text-right bg-gray-700 border-t border-b border-l border-black"
            >
              2143423432
            </th>
            <th
              class="px-2 py-2 text-right bg-gray-700 border-t border-b border-l border-black "
            >
              23424
            </th>
            <th
              class="px-2 py-2 text-right bg-gray-700 border-t border-b border-l border-black"
            >
              23424444
            </th>
            <th
              class="px-2 py-2 text-right bg-gray-700 border-t border-b border-l border-black"
            >
              435345345435
            </th>
            <th
              class="px-2 py-2 text-right bg-gray-700 border-t border-b border-l border-black"
            >
              Cartera Vencida
            </th>
            <th
              class="px-2 py-2 text-right bg-gray-700 border-t border-b border-l border-black"
            >
              % Cartera
            </th>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "tableTotals",
  props: {
    Totales: {
      type: Object,
      default: () => []
    }
  }
};
</script>
