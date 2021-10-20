<template>
  <div>
    <label
      v-if="label"
      class="block mb-1 font-semibold text-gray-700 form-label"
      :for="id"
    >
      {{ label }}
    </label>
    <div class="relative">
      <input
        class="w-full px-4 py-1 text-sm text-gray-700 placeholder-gray-700 bg-gray-200 border border-gray-400 rounded outline-none focus:bg-white"
        :id="id"
        ref="input"
        v-bind="$attrs"
        :class="[
          {
            'border-red-400': errors.length
          }
        ]"
        :type="type"
        :value="value"
        @input="$emit('input', $event.target.value)"
        @keydown="$emit('keydown', $event)"
        @blur="$emit('blur', $event)"
        @keyup="$emit('keyup', $event)"
      />
      <div v-if="errors.length" class="mt-1 ml-1 text-xs text-red-600">
        <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
        {{ errors[0] }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputTextBasic",
  inheritAttrs: false,

  props: {
    id: {
      type: String,
      default() {
        return `text-input-${this._uid}`;
      }
    },
    type: {
      type: String,
      default: "text"
    },
    value: String,
    label: String,
    errors: {
      type: Array,
      default: () => []
    }
  }
};
</script>
