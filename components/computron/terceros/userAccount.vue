<template>
  <div class="relative flex flex-col">
    <div
      @click="userBoton"
      class="flex items-center mx-1 cursor-pointer md:mx-2"
    >
      <img
        class="h-8 md:h-12"
        src="/images/dashboard/headerDash/user-repo.svg"
        alt=""
      />
    </div>
    
    <div v-if="menuUser" class="absolute flex flex-col p-2 pt-1 bg-gray-100 border rounded-lg w-44 top-10 md:top-14 lg:top-16 right-1 border-primary" >

        <UserLink textMenu="Mis Datos"      image="user-blank.svg"      urlDestino='/' >          </UserLink>
        <UserLink textMenu="Tareas"         image="task-repo.svg"       urlDestino='/' >          </UserLink>
        <div class="my-2 -mx-2 border-b-2 border-gray-200"></div>
        <UserLink textMenu="Cerrar Sistema"  image="close-repo.svg"     urlDestino='/computron/terceros/user-logout' > </UserLink>
        

    </div>
  </div>
</template>

<script>
import UserLink from "@/components/library/links/userAccountLink";
export default {
  name: "userAccounts",
  data() {
    return {
      menuUser: false
    };
  },
 components : { UserLink },

  methods: {
    userBoton() {
      this.menuUser = !this.menuUser;
    }
  }
};
</script>

<style></style>
