<template>
  <div class="font-latos">
    <div class="fixed z-20 w-full">
    <header class="bg-white">
      <!-- Icono de la empresa -->
      <div class="flex justify-between -mt-3 lg:mt:0 lg:py-0">
        
        <div class="flex flex-grow lg:flex-grow-0">
          <div class="">
          <nuxt-link to="">
            <img
              class="h-16 md:h-20 logo lg:ml-10 lg:h-auto"
              src="/images/home/header/balquimia-logo.png"
              alt="logo"
            />
            </nuxt-link>
          </div>
        </div>

        <div class="flex items-center justify-center mt-6 mr-6">
          <div class="mx-1 cursor-pointer md:mx-2">
            <img
              class="h-4 md:h-5"
              src="/images/dashboard/headerDash/notification-repo.svg"
              alt=""
            />
          </div>
          <div class="mx-1 cursor-pointer md:mx-2">
            <img
              class="h-4 md:h-5"
              src="/images/dashboard/headerDash/email-repo.svg"
              alt=""
            />
          </div>

          <!-- user menu -->
            <UserAccount></UserAccount>

        </div>
      </div>
    </header>

    <div class="-ml-1 lg:block lg:ml-4">
      <img
        src="/images/home/header/arr.png"
        alt="arr1"
        class="h-7 lg:h-10 lg:mt-0"
      />
    </div>

  </div>


   <div>
    <Nuxt />
  </div>



  </div>
</template>

<script>
  import UserAccount from "@/components/computron/terceros/userAccount";
export default {
  name: "layoutComputron",
    //middleware: ['isAuthenticated'],
    data() {
      return {
        
      };
    },
    components: { UserAccount},
    
   created()   {
        if ( !this.$store.state.User.Logueado) {
          this.$router.replace({ path: '/computron/' });
        }
    },

};
</script>

<style>
.logo {
  position: relative;
  left: 6px;
  top: 20px;
  z-index: 100;
}

.logo-full {
  left: 0px;
}
</style>