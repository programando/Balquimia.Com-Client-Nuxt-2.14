<template>
  <div
    class="bg-center bg-no-repeat bg-cover"
    style="background-image: url('/images/home/slider/investigacion.webp')"
  >
    <div
      class="h-screen py-10 pb-40 bg-no-repeat bg-cover lg:pt-16"
      style="background-image: url('/images/comunes/malla1.webp')"
    >
      <div class="mt-40 lg:mx-20 xl:mx-56">
        <div class="mx-16 mt-10 md:mx-24 lg:mx-32 xl:mx-40">
          <div
            class="px-10 py-6 mt-6 bg-white border rounded-lg md:py-8 md:px-16 lg:mt-0"
          >
            <!-- label, titulo y descripcion -->

            <LabelTitle
              title="BALQUIMIA S.A.S"
              description="Por favor registra los nuevos datos de la contraseña con la que ingresastes a nuestro sistema"
              color="extra"
              align="center"
            >
            </LabelTitle>

                            
            <form  @submit.prevent="userpasswordUpdate">

                <div class="mt-4 ">
                  <InputPassword
                      text="Nueva Contraseña"
                      v-model="formUser.password"
                      :errors="errors"
                    ></InputPassword>
                    
                    <div class="flex items-center mb-3" v-if="errors.length">
                      <img class="inline h-5 mr-1"  src="/images/inputs/acceso-negado.svg" alt="" />
                      <p class="inline text-xs text-primary">  {{ errors}}  </p>
                    </div>

                    <InputPassword
                      text="Repetir Contraseña"
                      v-model="formUser.password_confirmation"
                    ></InputPassword>
                  
    
                    <div class="flex justify-center mt-4">
                      <ButtonLoading
                              size="small" 
                              ref="ButtonLoading" 
                              variant="success"
                              variant-type="normal">  Actualizar password
                      </ButtonLoading>
                  </div>

                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LabelTitle from "@/components/library/LabelTitle";
import InputBasic from "@/components/library/inputs/InputBasic";
import ButtonLoading from "@/components/library/buttons/ButtonLoading";
import InputPassword from "@/components/library/inputs/inputPassword";

import Terceros         from "@/models/User";


export default {
  name: "cambioPassword",
  components: {  LabelTitle, InputBasic, ButtonLoading,  InputPassword },
    data: () => ({
        formUser :{
            password             : null,
            password_confirmation: null,
            token                : '',
        },
        errors : [],
    }),
      mounted() {  
        this.formUser.token = this.$route.params.users_token; 
        },
      methods: {
            userpasswordUpdate() {
                this.errors=[];
                this.$refs.ButtonLoading.startLoading();
                Terceros.userUpdatePassword ( this.formUser )
                .then ( response =>  {
                  this.$refs.ButtonLoading.stopLoading();
                  this.$router.replace({ path: '/' });
                })
                .catch ( error => {
                    if ( error.response.status == 422 || error.response.status == 419) {
                      this.errors = error.response.data.errors.password[0];
                      this.$refs.ButtonLoading.stopLoading();  
                    }
                })
            },
      },  

};
</script>
<style >
</style>