<template>
  <div>
    <h1>Msg:{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const msg = ref("TEST");

    return { msg };
  },
});
</script>