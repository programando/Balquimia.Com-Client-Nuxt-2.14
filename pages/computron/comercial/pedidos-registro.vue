<template>
  <div class="font-latos">
    <div class="min-h-screen px-4 pt-24 pb-40 bg-gray-100">
      <div class="pb-10 mx-2 bg-white border-2 rounded-lg">
        <h2
          class="py-1 text-lg font-semibold text-center text-white bg-primary"
        >
          Registro de Pedidos
        </h2>
        <!-- Formulario -->
        <div class="grid gap-2 lg:gap-6 md:grid-cols-2 lg:grid-cols-4">
         
          <div class="mx-12 mt-2 sm:ml-16 lg:ml-4 lg:mr-2">
             <label class="block text-xs"> Cliente</label>
            <InputSearch
              @terceroSeleccionado = "terceroSeleccionado"
              labelTitle           = 'Puede realizar la búsqueda por: Nombre/Razón social, Nit, Sucursal, Nombre Comercial'
              placeholder          = "Nombre del Cliente"
              v-model              ="pedidoH.nom_full"
              width                = "w-full"
               
              >
              <template slot='ModalTitle'>Búsqueda de Clientes</template>
            </InputSearch>
          </div>

          <div class="mx-12 mt-2 sm:ml-16 lg:ml-2 lg:mr-4">
            <InputLabel
              :isdisabled   = "true"
                placeholder = "Sucursal"
                textLabel   = "Sucursal"
                v-model     = "pedidoH.nom_suc"
                width       = "w-full"
            ></InputLabel>
          </div>

          <div class="mx-12 mt-2 sm:ml-16 md:ml-15 lg:ml-4 lg:mr-4">
            <InputLabel
              disabled    = "disabled"
              textLabel="Vendedor"
              placeholder="Vendedor"
              width="w-full"
              v-model="pedidoH.nom_vendedor"
            ></InputLabel>
          </div>
            <div class="mx-12 mt-2 sm:ml-16 md:ml-15 lg:ml-4 lg:mr-4">    
            <label class="text-xs">Fecha despacho</label>
            <InputDate 
             v-model="pedidoH.fecha_despacho"
            />
          </div>  
        </div>
        <div class="grid gap-2 lg:gap-6 md:grid-cols-2 lg:grid-cols-5 ">
          <div class="mx-12 mt-2 sm:ml-16 lg:ml-4 lg:mr-2 lg:col-span-1">
            <InputLabel
              textLabel="Orden de Compra"
              placeholder="Numero orden de compra"
              width="w-full"
              v-model="pedidoH.num_ord_cpra"
            ></InputLabel>
          </div>
          <div class="mx-12 mt-2 sm:ml-16 lg:ml-4 lg:mr-4 lg:col-span-4">
            <InputLabel
              textLabel="Observaciones del pedido"
              placeholder="Observaciones del pedido"
              width="w-full"
              v-model="pedidoH.observ_ped"
            ></InputLabel>
          </div>
        </div>
        <!-- Fin Formulario -->

        <!-- Navegacion -->
        <div class="mt-4 text-sm">
          <NavTabsOptions :IdTercero="pedidoH.id_terc"></NavTabsOptions>
        </div>      
      </div>
    </div>
  </div>
</template>
<script>
import InputSearch from "@/components/library/inputs/InputSearch";
import InputLabel from "@/components/library/inputs/InputLabel";
import InputDate from "@/components/library/inputs/InputDate";
import ButtonIcon from "@/components/library/buttons/buttonIcon";
import NavTabsOptions from "../comercial/pedidosPartials/navTabsOptions"
import Calendario from "@/components/computron/terceros/calendario"

export default {
  layout: "layoutComputron",
  name: "PedidosRegistro",
  components: {
    InputSearch,
    InputLabel,
    InputDate,
    ButtonIcon,
    NavTabsOptions,
    Calendario
    
  },
  data() {
    return {
      isOpen: false,
      registro: false,
      fecha: "",
      value: "",
         pedidoH: {
          cod_vendedor     : '',
          id_terc          : 0,    // IdCliente,
          id_terc_vend_ppal: 0,
          nom_full         : '',
          nom_suc          : '',
          nom_vendedor     : '',
          num_ord_cpra     : '',
          observ_ped       : '',
          fecha_despacho: '2021-06-15',
      },
    }
  },
  
  

  methods: {
        terceroSeleccionado ( tercero ) {
          this.pedidoH.nom_full          = tercero.nom_full;
          this.pedidoH.nom_suc           = tercero.nom_suc;
          this.pedidoH.id_terc           = tercero.id_terc;
          this.pedidoH.id_terc_vend_ppal = tercero.id_terc_vend_ppal;
          this.pedidoH.nom_vendedor      = tercero.nom_vendedor;

        }
  },  

  
}
</script>

<style scoped>

</style>
