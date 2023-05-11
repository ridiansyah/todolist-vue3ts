<template>
  <MInput />
  <OList v-if="todosAll" />
  <section v-else class="todo__placeholder">No Items</section>
  <div class="todo__filters" v-if="todosAll && breakpoint === 'sm'">
    <MFilters />
  </div>
</template>
<script lang="ts" setup>
import MInput from "../molecules/MInput.vue";
import OList from "./OList.vue";
import MFilters from "../molecules/MFilters.vue";

import { storeToRefs } from "pinia";
import useTodosStore from "@/stores/todos";
import useBreakpoints from "@/utils/useBreakpoints";

const todosStore = useTodosStore();

const { todosAll } = storeToRefs(todosStore);

const { breakpoint } = useBreakpoints();
</script>
<style scoped lang="scss">
@import "@/assets/styles/_variables.scss";
.todo {
  &__filters {
    z-index: 1;
    width: 100%;
    height: 6.4rem;
    border-radius: 0.5rem;
    background-color: var(--color-element);
    box-shadow: var(--box-shadow);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 4rem;
  }

  &__placeholder {
    z-index: 1;
    width: 100%;
    height: 19.2rem;
    margin: 4.8rem 0;
    border-radius: 0.5rem;
    font-size: 1.6rem;
    color: var(--color-text-secondary);
    background-color: var(--color-element);
    box-shadow: var(--box-shadow);

    display: grid;
    place-items: center;
  }
}
</style>
