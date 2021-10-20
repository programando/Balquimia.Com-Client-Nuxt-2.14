<template>
  <div
    class="bg-center bg-no-repeat bg-cover"
    style="background-image: url('/images/home/slider/investigacion.webp')"
  >
    <div
      class="h-screen py-10 pb-40 bg-no-repeat bg-cover lg:pt-20"
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
              description="Enviaremos un correo electrónico a la cuentra registrada en nuestro sistema con las instrucciones para que cambie los datos de acceso"
              align="center"
              color="extra"
            >
            </LabelTitle>

            <div class="px-4 mt-4 lg:px-8 xl:px-10">
              <!-- inputGmail -->
                <InputBasic
                  type="email"
                  text="Email o correo electrónico"
                  width="w-full"
                  img="user-repo.svg"
                  borderColor='extra'
                  v-model="form.email" 
                  :errors="errors.email"
                ></InputBasic>

              <div class="flex justify-center mt-4">
                <ButtonLoading
                      @click.prevent="userResetPasswordSendMail" 
                        size="small" 
                        ref="ButtonLoading" 
                        variant="danger"
                        variant-type="normal">  Enviar correo
                </ButtonLoading>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LabelTitle       from "@/components/library/LabelTitle";
import InputBasic       from "@/components/library/inputs/InputBasic";
import ButtonLoading    from "@/components/library/buttons/ButtonLoading";
import Terceros         from "@/models/User";
import Messages from "@/mixins/toastrMessages";
export default {
  name: "resetPassword",
  components: {
    LabelTitle,
    InputBasic,
    ButtonLoading,
  },
  data: () => ({
      form : { email:'' },
      errors : [],
  }),
   mixins: [Messages],

  methods: {
        userResetPasswordSendMail() {
          this.errors              = [];
          this.$refs.ButtonLoading.startLoading();
          Terceros.userResetPassword ( this.form)
          .then (response => {
              this.$refs.ButtonLoading.stopLoading();
              this.MsgSuccess('Correo Enviado','Hemos enviado correo electrónico a la cuenta indicada. Siga las instrucciones. No olvide revisar la carpeta de Spam', 10);
              this.routeRedirect();
          })   
          .catch( error => {
            if ( error.response.status == 422 || error.response.status == 419) {
              this.errors = error.response.data.errors; 
              this.$refs.ButtonLoading.stopLoading();  
            }
          })    
        },

        routeRedirect() {
            this.errors              = [];
            this.form = {};
            this.$router.replace({ path: '/' });
        },
  },  
};
</script>
<style >
</style>