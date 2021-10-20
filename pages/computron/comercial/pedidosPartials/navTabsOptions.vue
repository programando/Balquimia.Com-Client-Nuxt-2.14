<template>
  <div class="flex flex-wrap mx-4 font-latos">
    <div class="w-full">
      <ul class="flex flex-row flex-wrap pt-1 pb-2 mb-0 list-none">
        <li class="flex-auto -mb-px text-center cursor-pointer last:mr-0">
          <div class="block px-5 py-2 font-bold rounded-sm shadow-lg"
                @click="toggleTabs(1)"
                :class="{
                    'text-primary bg-white border-b border-extra': openTab !== 1,
                    'text-white bg-primary border border-extra': openTab === 1
                }"
          >
            Ultimas Ventas
          </div>
        </li>
       
        <li class="flex-auto -mb-px text-center cursor-pointer last:mr-0">
          <div class="block px-5 py-2 font-bold rounded-sm shadow-lg"
                @click="toggleTabs(2)"
                :class="{
                    'text-primary bg-white border-b border-extra': openTab !== 2,
                    'text-white bg-primary border border-extra': openTab === 2
                }"
          >
            Pedido Generado
          </div>
        </li>

        <li class="flex-auto -mb-px text-center cursor-pointer last:mr-0">
          <div class="block px-5 py-2 font-bold rounded-sm shadow-lg"
                @click="toggleTabs(3)"
                :class="{
                    'text-primary bg-white border-b border-extra': openTab !== 3,
                    'text-white bg-primary border border-extra': openTab === 3
                }"
          >
            Estado de Cuenta
          </div>
        </li>
        <li class="flex-auto -mb-px text-center cursor-pointer last:mr-0">
          <div class="block px-5 py-2 font-bold rounded-sm shadow-lg"
                @click="toggleTabs(4)"
                :class="{
                    'text-primary bg-white border-b border-extra': openTab !== 4,
                    'text-white bg-primary border border-extra': openTab === 4
                }"
          >
            Observaciones de Ventas
          </div>
        </li>
        <li class="flex-auto -mb-px text-center cursor-pointer last:mr-0">
          <div class="block px-5 py-2 font-bold rounded-sm shadow-lg"
                @click="toggleTabs(5)"
                :class="{
                    'text-primary bg-white border-b border-extra': openTab !== 5,
                    'text-white bg-primary border border-extra': openTab === 5
                }"
          >
            Notas Cartera
          </div>
        </li>
        <li class="flex-auto -mb-px text-center cursor-pointer last:mr-0">
          <div class="block px-5 py-2 font-bold rounded-sm shadow-lg"
                @click="toggleTabs(6)"
                :class="{
                    'text-primary bg-white border-b border-extra': openTab !== 6,
                    'text-white bg-primary border border-extra': openTab === 6
                }"
          >
            Contactos
          </div>
        </li>
      </ul>

      <div
        class="relative flex flex-col w-full min-w-0 mb-2 break-words bg-white rounded shadow-lg"
      >
        <div class="flex-auto">
          <div class="tab-content tab-space">
            <div :class="{ hidden: openTab !== 1, block: openTab === 1 }">
              <ClienteUltimasVentas :IdTercero="IdTercero"> </ClienteUltimasVentas>
            </div>
            <div :class="{ hidden: openTab !== 2, block: openTab === 2 }">
              <ClientePedidosGenerados></ClientePedidosGenerados>
            </div>
            <div :class="{ hidden: openTab !== 3, block: openTab === 3 }">
              <p>
                Efficiently unleash cross-media information without cross-media
                value. Quickly maximize timely deliverables for real-time
                schemas.
                <br />
                <br />
                Dramatically maintain clicks-and-mortar solutions without
                functional solutions.
              </p>
            </div>
            <div :class="{ hidden: openTab !== 4, block: openTab === 4 }">
              <p>
                Efficiently unleash cross-media information without cross-media
                value. Quickly maximize timely deliverables for real-time
                schemas.
                <br />
                <br />
                Dramatically maintain clicks-and-mortar solutions without
                functional solutions.
              </p>
            </div>
            <div :class="{ hidden: openTab !== 5, block: openTab === 5}">
              <p>
                Efficiently unleash cross-media information without cross-media
                value. Quickly maximize timely deliverables for real-time
                schemas.
                <br />
                <br />
                Dramatically maintain clicks-and-mortar solutions without
                functional solutions.
              </p>
            </div>
            <div :class="{ hidden: openTab !== 6, block: openTab === 6}">
              <p>
                Efficiently unleash cross-media information without cross-media
                value. Quickly maximize timely deliverables for real-time
                schemas.
                <br />
                <br />
                Dramatically maintain clicks-and-mortar solutions without
                functional solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClienteUltimasVentas from '@/components/computron/terceros/clienteUltimasVentas'
import ClientePedidosGenerados from '@/components/computron/terceros/clientePedidosGenerados'
export default {
  name: "DataTable",
  props: [ 'IdTercero'],
  components: {
    ClienteUltimasVentas,
    ClientePedidosGenerados
  },

  data() {
    return {
      openTab: 1,
      
    };
  },

  methods: {
    toggleTabs: function(tabNumber) {
      this.openTab = tabNumber;
    }
  }
};
</script>

<style>

</style>
