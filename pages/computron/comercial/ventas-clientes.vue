<template>
<div class="font-latos">
  <div class="min-h-screen px-4 pt-24 pb-40 bg-gray-100">
      <div class="pb-10 mx-2 bg-white border-2 rounded-lg">
        <h2
          class="py-2 text-lg font-semibold text-center text-white bg-primary"
        >
          Ventas Clientes
        </h2>
        <!-- Formulario -->
        <div class="grid lg:gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div class="mx-12 mt-2 sm:ml-16 lg:ml-4 lg:mr-2">
            <label>Consultar ventas para el año</label>
            <Calendario/>
          </div>
          <div class="mx-12 mt-2 sm:ml-16 lg:ml-4 lg:mr-2 lg:col-span-2">
            <InputSearch
              textLabel="Cliente"
              placeholder="Nombre del Cliente"
              width="w-full"
            ></InputSearch>
          </div>
          <div class="flex items-center justify-center mx-12 mt-6 sm:ml-16 lg:ml-4 lg:mr-2 ">
            <ButtonBasic
              text="Consultar Ventas"
              to="/"
              borderColor="primary"
              width="w-5/6"
              sizeText="small"
              bgColor="primary"
            ></ButtonBasic>
          </div>

        </div>
        <!-- Fin Formulario -->

        <!-- Navegacion -->
        <div class="mt-4 text-sm">
          <Navegacion />
        </div>  
      </div>
    </div>
</div>
  
</template>

<script>
import InputSearch from "@/components/library/inputs/InputSearch";
import Calendario from "@/components/computron/terceros/calendario"
import ButtonBasic from "@/components/library/buttons/buttonBasic"
import Navegacion from "@/components/computron/terceros/navegacion"

export default {
  layout: "layoutComputron",
  name: "index",
  components: {
    InputSearch,
    Calendario,
    ButtonBasic,
    Navegacion
  }
}
</script>

<style>

</style>