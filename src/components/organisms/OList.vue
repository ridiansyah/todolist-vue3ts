<template>
  <div class="todo-list">
    <Draggable v-if="todos.length" :list="todos" item-key="id">
      <template #item="{ element }">
        <MItem :key="element.id" :todo="element" />
      </template>
    </Draggable>

    <section v-else class="todo-list__placeholder">No Items</section>
    <div class="todo-list__footer">
      <div class="todo-list__item">
        {{ todosActiveCnt }} item{{ todosActiveCnt > 1 ? "s" : "" }}
        left
      </div>
      <MFilters v-if="breakpoint !== 'sm'" />
      <div
        role="button"
        class="todo-list__item todo-list__btn"
        :disabled="todosCompletedCnt === 0 || null"
        @click="handleClearCompleted"
      >
        Clear Completed
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia";
import Draggable from "vuedraggable";
import useTodosStore from "@/stores/todos";
import useBreakpoints from "@/utils/useBreakpoints";
import MItem from "../molecules/MItem.vue";
import MFilters from "../molecules/MFilters.vue";

const store = useTodosStore();
const {
  todosDisplayed: todos,
  todosActiveCnt,
  todosCompletedCnt,
} = storeToRefs(store);

const { breakpoint } = useBreakpoints();

const handleClearCompleted = () => {
  store.removeDoneTodos();
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.todo-list {
  width: 100%;
  margin: 4.8rem 0;
  box-shadow: var(--box-shadow);
  border-radius: 0.5rem;
  @media only screen and (max-width: $breakpoint-sm) {
    margin: 2rem 0;
  }

  &__placeholder {
    border-radius: 0.5rem 0.5rem 0 0;
    border-bottom: 1px solid var(--color-border);
    background-color: var(--color-element);
    color: var(--color-text-secondary);
    height: 12.8rem;
    font-size: 1.6rem;
    display: grid;
    place-items: center;
  }

  &__footer {
    background-color: var(--color-element);
    height: 6.4rem;
    padding: 0 2.4rem;
    border-radius: 0 0 0.5rem 0.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__item {
    font-size: 1.6rem;
    color: var(--color-text-secondary);
  }

  &__btn {
    cursor: pointer;
    user-select: none;

    &:hover {
      color: var(--color-text);
    }

    &[disabled="true"] {
      cursor: default;
      color: var(--color-text-secondary);
    }
  }
}
</style>
