<template>
  <div id="app" class="light">
    <OHeader />
    <main class="todo__container">
      <OBody />
    </main>
  </div>
</template>
<script setup lang="ts">
import OHeader from "./components/organisms/OHeader.vue";
import OBody from "./components/organisms/OBody.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.todo {
  &__container {
    z-index: 1;
    width: var(--app-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: $breakpoint-sm) {
      width: 32rem;
      margin: 0 auto;
    }
  }
}
</style>
