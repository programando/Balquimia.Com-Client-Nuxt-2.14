<template>
  <div>
    <textarea name="" id="" :cols="cols" :rows="rows" :placeholder="text"
            class="w-5/6 px-4 py-2 -ml-2 rounded-lg focus:border-inputsBorder focus:outline-none "
            v-bind     ="$attrs"
            ref        ="textarea"
          @blur      ="$emit('blur'     , $event)"
          @input     ="$emit('input'    , $event.target.value)"
          @keydown   ="$emit('keydown'  , $event)"
          @keyup     ="$emit('keyup'    , $event)"
    >

    </textarea>
    
    <div class="flex items-center" v-if="errors.length">
      <img
        class="inline h-5 mr-1 "
        src="/images/inputs/acceso-negado.svg"
        alt=""
      />
      <p class="inline text-xs text-primary">
        {{ errors[0] }}
      </p>
    </div>

  </div>
</template>

<script>
    export default {
        name: 'InputArea',
        inheritAttrs: false,
        props:{
          text: String,
          width: String,
          cols: String,
          rows: String ,

        },
        data: () => ({
              errors : [],
        }),

    }
</script>

<style>

</style>