<template>
  <div class="flex flex-wrap mx-4 font-latos">
    <div class="w-full">
      <ul class="flex flex-row flex-wrap pt-1 pb-2 mb-0 list-none">
        <li class="flex-auto -mb-px text-center cursor-pointer last:mr-0">
          <div
            class="block px-5 py-3 font-bold rounded-sm shadow-lg"
            @click="toggleTabs(1)"
            :class="{
              'text-primary bg-white border-b border-extra': openTab !== 1,
              'text-white bg-primary border border-extra': openTab === 1
            }"
          >
            Historico de Ventas
          </div>
        </li>

        <li class="flex-auto -mb-px text-center cursor-pointer last:mr-0">
          <div
            class="block px-5 py-3 font-bold rounded-sm shadow-lg"
            @click="toggleTabs(2)"
            :class="{
              'text-primary bg-white border-b border-extra': openTab !== 2,
              'text-white bg-primary border border-extra': openTab === 2
            }"
          >
            Estado de Cuenta
          </div>
        </li>
      </ul>

      <div
        class="relative flex flex-col w-full min-w-0 mb-2 break-words bg-white rounded shadow-lg"
      >
        <div class="flex-auto">
          <div class="tab-content tab-space">
            <div :class="{ hidden: openTab !== 1, block: openTab === 1 }">
              <HistoricoVentas></HistoricoVentas>
            </div>
            <div :class="{ hidden: openTab !== 2, block: openTab === 2 }">
              <EstadoCuenta></EstadoCuenta>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HistoricoVentas from "@/components/computron/terceros/historico-ventas";
import EstadoCuenta from "@/components/computron/terceros/estado-cuenta";

export default {
  name: "DataTable",
  components: {
    HistoricoVentas,
    EstadoCuenta
  },

  data() {
    return {
      openTab: 1
    };
  },

  methods: {
    toggleTabs: function(tabNumber) {
      this.openTab = tabNumber;
    }
  }
};
</script>

<style></style>
