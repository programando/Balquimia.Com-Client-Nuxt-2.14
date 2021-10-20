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
        :id="id"
        ref="input"
        v-bind="$attrs"
        class="block w-full h-10 px-2 py-2 font-sans leading-normal text-left text-gray-800 bg-white rounded-lg outline-none appearance-none"
        :class="[
          {
            'border-red-400': errors.length,
            'pl-12': withIcon === true
          },
          classes
        ]"
        :type="type"
        :value="value"
        @input="$emit('input', $event.target.value)"
        @keydown="$emit('keydown', $event)"
        @blur="$emit('blur', $event)"
        @keyup="$emit('keyup', $event)"
      />
      <div v-if="errors.length" class="mt-1 text-sm text-red-600">
        {{ errors[0] }}
      </div>

      <svg
        v-if="errors.length"
        class="absolute text-red-600 fill-current"
        style="top: 2px; right: 2px"
        xmlns="http://www.w3.org/2000/svg"
        width="3"
        height="3"
        viewBox="0 0 12 12"
      >
        <path
          d="M11.953,2C6.465,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.493,2,11.953,2z M13,17h-2v-2h2V17z M13,13h-2V7h2V13z"
        />
      </svg>

      <div
        v-if="withIcon"
        class="absolute top-0 bottom-0 left-0 block w-10 ml-2"
      >
        <slot name="icon"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputBasic",

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
    },
    withIcon: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    focus() {
      this.$refs.input.focus();
    },
    select() {
      this.$refs.input.select();
    },
    setSelectionRange(start, end) {
      this.$refs.input.setSelectionRange(start, end);
    }
  },

  computed: {
    classes() {
      return {
        "border-2 focus:border-blue-600 focus:border-blue-600":
          this.bordered === true,
        "border bg-gray-200 focus:bg-white": this.bordered === false
      };
    }
  }
};
</script>
