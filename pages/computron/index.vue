<template>
  <div
    class="bg-center bg-no-repeat bg-cover font-latos"
    style="background-image: url('/images/home/slider/investigacion.webp')"
  >
    <div
      class="h-screen py-10 pb-40 bg-no-repeat bg-cover lg:pt-20"
      style="background-image: url('/images/comunes/malla1.webp')"
    >
      <div class="mt-10">
        <div class="flex justify-center text-4xl font-bold text-white">
          <h2>BALQUIMIA S.A.S</h2>
        </div>
        <div
          class="items-center gap-10 mx-10 mt-10 md:mx-20 lg:mx-24 xl:mx-32 lg:grid lg:grid-cols-2"
        >
          <FraseDiaria></FraseDiaria>

          <div
            class="px-6 py-4 mt-6 bg-white border rounded-lg md:py-8 md:px-12 lg:mt-0"
          >
            <!-- label, titulo y descripcion -->
            <LabelTitle
              title="Ingreso al sistema"
              description="Bienvenid@ por favor ingrese su clave y contraseña"
              align="center"
              color="extra"
            >
            </LabelTitle>

              <div class="mt-4">
                <!-- inputText -->
                <InputBasic
                  type="text"
                  text="jhonjamesmg@hotmail.com"
                  width="w-full"
                  img="user-repo.svg"
                  v-model="form.email" 
                  :errors="errors.email"
                  background="gray"
                ></InputBasic>

                <!-- inputPassword -->
                <div class="mt-3">
                  <InputBasic
                  type="password"
                  text="contraseña"
                  width="w-full"
                  img="candado-cerrado.svg"
                  v-model="form.password" 
                   :errors="errors.password"
                  background="gray"
                ></InputBasic>  
                </div>
              </div>

            <div class="sm:grid sm:grid-cols-5">
              <div class="flex items-center justify-center col-span-3 -ml-4">
                <ButtonBasic
                text="Olvidé mi contraseña o es la primera vez que ingreso y quiero asignar una a mi usuario"
                to="/computron/terceros/users-reset-password"
                sizeText="small"
              ></ButtonBasic>
              </div>
              
                <div class="flex items-center justify-center col-span-2">
                  <ButtonLoading 
                    @click.prevent="login" 
                    size="small" 
                    ref="ButtonLoading" 
                    variant="success"
                    variant-type="normal">  Ingresar al sistema 
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
    import LabelTitle from "@/components/library/LabelTitle";
    import InputBasic from "@/components/library/inputs/InputBasic";
    import ButtonBasic from "@/components/library/buttons/buttonBasic";
    import ButtonLoading   from "@/components/library/buttons/ButtonLoading";
    import User            from "@/models/User";

    export default {
      layout: "dashboard",
       
      components: { ButtonBasic,      ButtonLoading,      InputBasic,     LabelTitle ,  },

    data: () => ({
        form: {
          email: "jhonjamesmg@hotmail.com",
          password: "1234567"
        },
        errors: [ ],
        buttonIsDisabled: false
    }),

      
      mounted() {
            if ( this.$store.state.User.Logueado) {
              this.$router.replace({ path: '/computron/dashboard' });
            } 
        }, 

      methods: {
            login(){
                  this.$refs.ButtonLoading.startLoading();
                  User.login( this.form)
                  .then (response => {
                      
                      this.$store.dispatch('User/SetUser', response.data );
                      this.$router.replace({ path: '/computron/dashboard' });
                      this.buttonIsDisabled = true;
                      this.$refs.ButtonLoading.stopLoading();
                  })
                  .catch( error => {
                    if ( error.response.status == 422) {
                      this.errors = error.response.data.errors;  
                      this.$refs.ButtonLoading.stopLoading(); 
                    }
                  });
            },
           clearErrors() { this.errors = [] ; },
      },
    };
</script>
