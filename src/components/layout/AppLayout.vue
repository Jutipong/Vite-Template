<template>
  <div>Msg: {{ msg }}</div>
  <div>Object: {{ obj }}</div>
  <div>Objdec:{{ obj2 }}</div>
  <br />
  <hr />
   <slot />
</template> 

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  setup() {
    const msg = ref("Test");
    const obj = reactive({ id: 1, name: "name", last: "last" });
    const obj2 = reactive({ id: 1, name: "name", last: "last" });
    return { msg, obj, obj2 };
  },
});
</script>

<style scoped>
</style>