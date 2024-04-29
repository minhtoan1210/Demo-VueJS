<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "default",
});
</script>

<template>
  <v-layout>
    <v-main>
      <slot></slot>
    </v-main>
  </v-layout>
</template>
