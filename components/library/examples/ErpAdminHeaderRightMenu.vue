<template>
            <div class="barra">
              <div class="menu-izquierdo" @click="toggleMenu($event)">
                   <i class="fa fa-arrow-left" aria-hidden="true"></i>
                   <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </div>
              
              <div class="menu-derecho">
                <div class="caja mensaje">
                  <a href="#">
                    <i class="fa fa-commenting-o" aria-hidden="true"></i>
                    Mensajes
                    <span>20</span>
                  </a>
                </div>
                
                <div class="caja alerta">
                  <a href="#">
                    <i class="fa fa-bell-o" aria-hidden="true"></i>
                    Alertas
                    <span>15</span>
                  </a>                
                </div>
                
                <div class="caja cerrar">
                  <a href="#" @click="logout()"> Cerrar sesión</a>
                </div>

              </div>
            </div>  
</template>

<script>
import User from "@/models/User";

 export default {

  layout : 'admin-layout',
  data() {
    return {
      isOpen: false
    }
  },

 


  methods: {
    toggleMenu ( e) {
      this.isOpen = !this.isOpen
      const claseMenu = e.target.classList;
      const contenedor = document.querySelector('.pagina'),
            flechaIzq = document.querySelector('.fa-arrow-left'),
            flechaDer = document.querySelector('.fa-arrow-right');
            if ( claseMenu.contains('fa-arrow-left')  ) {
                flechaIzq.style.display ='none';
                flechaDer.style.display ='block';
                contenedor.classList.add('no-menu');
            } else if (claseMenu.contains('fa-arrow-right') ) {
                flechaIzq.style.display ='block';
                flechaDer.style.display ='none';
                contenedor.classList.remove('no-menu');
            }

            },
        logout(){
                User.logout().then( response => {
                this.$store.commit('USER_LOGOUT', null);
                this.$router.replace({ path: '/' });    
            });
        },

    
      
    }
  }
</script>