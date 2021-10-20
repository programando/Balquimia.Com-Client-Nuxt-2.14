<template>
  <div>
    <label class="block text-xs">{{ textLabel }}</label>
    <input
      type="text"
      class="px-4 py-1 text-xs bg-gray-100 border rounded-lg focus:outline-none focus:shadow-outline focus:border-primary"
        @blur      = "$emit('blur', $event)"
        @input     = "$emit('input', $event.target.value)"
        @keydown   = "$emit('keydown', $event)"
        @keyup     = "$emit('keyup', $event)"
      :class       = [width,setUpperCase]
      :id          = "id"
      :placeholder = "placeholder"
      :value       = "value"
      :disabled="isdisabled"       
    />
  </div>
</template>

<script>
export default {
  name: "InputLabel",
  props: {
    placeholder: String,
    textLabel: String,
    width: String,
    value: String,
    isdisabled: {
          type:Boolean,
          default() { return false;}
    },
    isUpperCase: {
          type:Boolean,
          default() { return '';}
    },
    id: { type: String,
          default() { return `text-inputLab-${this._uid}`; }
        },
  },
  data() {
    return {
       
    };
  },

  computed: {
      setUpperCase() {
         return  { 'uppercase': this.isUpperCase==true, }
      }
  },

 
};
</script>

<style>
</style>