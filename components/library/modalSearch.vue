<template>
  <div
      v-if="modal"
      class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="w-4/6 pb-10 -mt-48 bg-white rounded-lg">
        <div class="flex items-center justify-between px-4 bg-primary">
          <h2
            class="py-2 text-lg font-semibold text-white uppercase "
          >
            Busqueda de Clientes
          </h2>
          <div @click="modal = false" class="cursor-pointer ">
            <img class="h-6" src="/images/dashboard/close-repo.svg" alt="close">
          </div>
          
        </div>

        <div class="px-4 py-2">
          <InputLabel
            textLabel="Puede realizar la busqueda por: Nombre/Razón Social, Nit, Sucursal, Nombre Comercila"
            placeholder="Digite "
            width="w-5/6"
          ></InputLabel>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ModalSearch',
  data() {
    return {
      modal: true,
    }
  },

  methods: {
    name() {
      
    }
  },

}
</script>

<style>

</style>