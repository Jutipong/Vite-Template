<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const { currentRoute } = useRouter();
    const defaultLayout = "default";

    const layout = computed(() => {
      let result = `${currentRoute.value.meta.layout || defaultLayout}-layout`;
      return result;
    });
    

    return {
      layout,
    };
  },
});
</script>
