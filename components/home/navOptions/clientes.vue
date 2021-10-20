<template>
    <li>
      <div :class="[cssResponsiveDiv,  cssNotResponsiveDiv]"
      >
         <nuxt-link to="/" :class="[cssResponsiveLink, cssNotResponsiveLink ]">
              
          <p :class="[ cssResponsiveP,cssNotResponsiveP ]">Acceso clientes</p>
          <img
            class=""
            src="/images/comunes/icono-flecha.png"
            alt="bandera"
          />
        </nuxt-link>
      </div>

     
      
    </li>
</template>


<script>
           
  export default {
    name:'clientesMenu',
    props : {
        responsive: {
            type: Boolean,
            default: false,
        },
    },
    data: () => ({

    }),

    computed: {

        cssResponsiveDiv     () { return { "" : this.responsive === true } },
        cssNotResponsiveDiv  () { return { "bg-primary transition duration-700 ease-in-out hover:bg-indigo-900 text-white py-10 px-6" : this.responsive === false } },
        cssResponsiveLink    () { return { "flex p-2 items-center bg-primary hover:bg-indigo-900 text-white" : this.responsive === true } },
        cssNotResponsiveLink () { return { "flex justify-center items-center" : this.responsive === false } },
        cssResponsiveP       () { return { "text-sm" : this.responsive===true}}, 
        cssNotResponsiveP    () { return { "text-sm mr-4" : this.responsive===false}}, 
    }
    
  }

</script>