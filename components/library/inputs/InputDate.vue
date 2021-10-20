<template>
  <div>
    <label class="block text-xs">{{ textLabel }}</label>

    <input
        class       = "px-4 py-1 text-xs bg-gray-100 border rounded-lg focus:outline-none focus:shadow-outline focus:border-primary"
        placeholder = "Sucursal"
        type        = "date"
        v-model     = "recordSource"
      :class        = "width"
      
    />
  </div>
</template>

<script>
export default {
  name: 'InputDate',
  props: {
    textLabel: String,
    vmodel   : String,
    width    : String,
  },
    data () {
      return {
        recordSource: this.vmodel
      }
    },
    watch :{
      recordSource ( newDate ){
          this.$emit('input', newDate);
      },
      vmodel ( newDate ) {
          this.recordSource = newDate;
      },
    },


};
</script>
