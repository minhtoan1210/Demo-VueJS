<template>
  <div>loginForm</div>
</template>

<script setup>
import { useloginStore } from "../stores/login.ts";

const loginStore = useloginStore();

const loginResult = await loginStore.login("vvip1", "cccccc");
</script>
