<template>
  <div class="mt-2">
    <div class="flex items-center">
      <div class="z-10 -mr-8">
        <img class="inline h-5" :src="`/images/inputs/${img}`" alt="" />
      </div>
      <input
          @blur      ="$emit('blur'     , $event)"
          @input     ="$emit('input'    , $event.target.value)"
          @keydown   ="$emit('keydown'  , $event)"
          @keyup     ="$emit('keyup'    , $event)"
          class      ="px-10 py-2 rounded-lg focus:border-inputsBorder focus:outline-none "
          ref        ="input"
          v-bind     ="$attrs"
        :class       ="[width, setBorderColor, hasErrors, setBackground]"
        :placeholder ="text"
        :type        ="type"
      />
    </div>

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
      inheritAttrs: false,
      name: "InputText",
      props: {
        type       : String,
        text       : String,
        width      : String,
        borderColor: String,
        background: String,
        img        : String,
        errors     : {
            type: Array,
            default: () => []
        }

      },

      computed: {
        setBorderColor() {
          switch (this.borderColor) {
            case "primary":
              return "border border-primary";
              break;

            case "secondary":
              return "border border-secondary";
              break;

            case "extra":
              return "border border-extra";
              break;
          }
        },
        hasErrors (){
            return {
                'border-red-400': this.errors.length
            }
        },

        setBackground(){
          switch (this.background) {
            case "primary":
              return "bg-primary";
              break;

            case "secondary":
              return "bg-secondary";
              break;

            case "extra":
              return "bg-extra";
              break;
            
            case "white":
              return "bg-white"
              break;
            
            case "gray":
              return "bg-gray-200"
              break;
          }
        }

      },
      methods: {
        clearErrors() {
          this.errors = [];
          
      },
      },
    };
</script>
<style></style>
