<template>
   <div>
      
   </div>
</template>

<script>
import User from '@/models/User';
export default {
   data: () => ({

   }),
   mounted() {
         User.logout();
         this.$store.dispatch('User/UserLogout');
         this.$router.replace({ path: '/' });
   }
}
</script>