<template>
  <div>
    <client-only class="h-2">
      <date-picker v-model="time" valueType="format" ></date-picker>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'Calendario',
  data() {
    return {
      time: ''
    }
  },
};
</script>

<style></style>
