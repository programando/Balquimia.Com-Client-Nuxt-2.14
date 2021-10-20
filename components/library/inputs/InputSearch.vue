<template>
  <div>
    <label class="block"> {{ textLabel }}</label>
    <div @click="modal = !modal" class="relative z-10 inline cursor-pointer">
      <img
        class="inline h-6 -mr-8"
        src="/images/dashboard/search-repo.svg"
        alt=""
      />
    </div>
            <input 
             class="py-1 pl-8 text-xs bg-gray-100 border rounded-lg focus:border-primary focus:outline-none focus:shadow-outline"           
                :id="id"    
                :class="width"
                type    = "text"
                :value   = "value"
                @input   = "$emit('input', $event.target.value)"
                @keydown = "$emit('keydown', $event)"
                @blur    = "$emit('blur', $event)"
                @keyup   = "$emit('keyup', $event)"
                :placeholder="placeholder" 
                disabled="disabled"
            />

    <!-- Modal -->
    <transition
      enter-active-class="duration-300 ease-out"
      enter-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
      enter-to-class="translate-y-0 opacity-100 sm:scale-10"
      leave-active-class="duration-200 ease-in"
      leave-class="translate-y-0 opacity-100 sm:scale-100"
      leave-to-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
    >
      <div
        v-if="modal"
        class="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50 max-h-lg "
      >
        <transition
          enter-active-class="duration-300 ease-out"
          enter-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
          enter-to-class="translate-y-0 opacity-100 sm:scale-10"
          leave-active-class="duration-200 ease-in"
          leave-class="translate-y-0 opacity-100 sm:scale-100"
          leave-to-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
        >
          <div class="w-4/6 mt-10 bg-white rounded-lg">
            <div class="flex items-center justify-between px-4 bg-primary">
              <h2 class="py-2 text-lg font-semibold text-white ">
                <strong><slot name="ModalTitle">Búsqueda</slot></strong>
              </h2>
              <div @click="modal = false" class="cursor-pointer ">
                <img
                  class="h-6"
                  src="/images/dashboard/close-repo.svg"
                  alt="close"
                />
              </div>
            </div>

            <div class="px-4 py-1 text-xs ">
              <InputLabel
                @change="clientesActivosPorVendedor()"
                @input="clientesActivosPorVendedor()"
                :textLabel="labelTitle"
                placeholder="Digite para iniciar la búsqueda..."
                width="w-5/6"
                v-model="form.filtroBusqueda"
                :isUpperCase="true"
              ></InputLabel>
            </div>

            <div class="h-90">
              <div class="w-full col-span-2 px-4 py-1 border-2">
                <table class="w-full text-left">
                  <thead class="flex w-full text-xs text-white border margen">
                    <tr class="flex w-full">
                      <th class="flex justify-center w-1/6 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary">Nit</th>
                      <th class="flex justify-center w-2/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary">Nombre/Razón Soc.</th>
                      <th class="flex justify-center w-2/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary">Sucursal</th>
                      <th class="flex justify-center w-1/6 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"></th>
                    </tr>
                  </thead>
                  <tbody
                    class="flex flex-col w-full overflow-y-scroll text-xs bg-white"
                    style="height: 40vh"
                  >
                    <tr class="flex w-full bg-white tr"
                      v-for="Tercero in tercerosEncontrados"
                      :key="Tercero.id_terc"
                    >
                      <td class="flex items-center w-1/6 px-2 py-1 border-t border-b border-l border-gray-400 ">{{ Tercero.nro_identif }}</td>
                      <td class="flex items-center w-2/4 px-2 py-1 border-t border-b border-l border-gray-400">{{ Tercero.nom_full }}</td>
                      <td class="flex items-center w-2/4 px-2 py-1 border-t border-b border-l border-gray-400">{{ Tercero.nom_suc }}</td>
                      <td
                        class="flex items-center w-1/6 px-2 py-1 border-t border-b border-l border-gray-400"
                      >
                        <div class="flex items-center w-3/6 cursor-pointer ">
                          <img src="/images/dashboard/elegir.svg"  class="block h-6 justify-items-center" alt="Click para seleccionar cliente..."
                          @click="terceroSeleccionado(Tercero)"
                          >
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import InputLabel from "@/components/library/inputs/InputLabel";
import ButtonIcon from "@/components/library/buttons/buttonIcon";
import Terceros from "@/models/Terceros";

export default {
  name: "InputSearch",
  components: {
    InputLabel,
    ButtonIcon
  },
  props: {
    labelTitle: String,
    placeholder: String,
    width: String,
    value: String,
            id: {
                type: String,
                default() {
                    return `text-input-${this._uid}`;
                }
            },    
  },

  data() {
    return {
      modal: false,
      textLabel: "",
 
      form: {
        filtroBusqueda: "",
        idTercVendedor: ""
      },
      tercerosEncontrados: [
      ]
    };
  },

  methods: {
    clientesActivosPorVendedor() {
      this.form.idTercVendedor = this.$store.state.User.IdTercLogueado;
      Terceros.clientesActivosPorVendedor(this.form)
      .then(response => {
        this.tercerosEncontrados = response.data;
      });
    },
    terceroSeleccionado( tercero ) {
        this.modal  = false;
        this.$emit('terceroSeleccionado', tercero);
    }
  },
 
    
};
</script>

<style>
 .margen {
    padding-right: 16px;
  }
  
  .tr:nth-child(odd){
  background-color: #E5E7EB
}
</style>
