<template>
  <li>
    <nuxt-link to="/productos"
        :class="[ cssResponve, cssNotResponisve ]">
            Línea Materias Primas
    </nuxt-link>


<!-- class= -->

  </li>
</template>
<script>
  export default {
      props: {
          responsive: {
            type: Boolean,
            default: false
        }
      },
      data: ()=> ({

      }),

      computed: {
        cssResponve() {
            return {
                "py-2 px-2 block text-gray-500 hover:bg-gray-200 text-sm":    this.responsive === true,           
            };
        },
        cssNotResponisve () {
            return {
                "px-4 py-2 px-0 block text-gray-500 hover:text-indigo-900": this.responsive === false
            };
        },

    }


  }
</script>