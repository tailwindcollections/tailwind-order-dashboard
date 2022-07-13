<script setup>
  import { ref } from "vue";
  import Dashhboard from "./components/Dashhboard.vue";
  import Login from "./components/Login.vue";
  import { useUser } from "./composables/user";

  const { user } = useUser();
</script>
<template>
  <Login v-if="!user"></Login>
  <Dashhboard v-else></Dashhboard>
</template>
