<template>
  <div class="todo">
    <input
      :class="{ todo__input: true, done: props.todo.done }"
      type="text"
      v-model="props.todo.text"
    />
    <div class="todo__overlay todo__checkbox">
      <ACheckbox v-model:checked="props.todo.done" />
    </div>
    <span class="todo__overlay todo__hover-show todo__dragger">||</span>
    <div
      class="todo__overlay todo__hover-show todo__cross"
      @click="handleDelete"
    >
      <img :src="DeleteIcon" alt="icon-delete" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import useTodosStore from "@/stores/todos";
import ACheckbox from "../atoms/ACheckbox.vue";
import DeleteIcon from "@/assets/images/icon-cross.svg";

const store = useTodosStore();

const props = defineProps({
  todo: {
    type: Object,
    default: () => ({
      text: "",
      done: false,
    }),
  },
});

const handleDelete = () => {
  store.removeTodo(props.todo.id);
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.todo {
  width: 100%;
  border-bottom: 1px solid var(--color-border);
  position: relative;

  &:first-of-type > &__input {
    border-radius: 0.5rem 0.5rem 0 0;
  }

  & &__hover-show {
    display: none;
  }

  &:hover &__hover-show {
    display: flex;
  }

  &__overlay {
    position: absolute;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
  }

  &__dragger {
    left: 0;
    margin: 0 1rem;
    color: var(--color-text-secondary);
    cursor: grab;
  }

  &__checkbox {
    left: 0;
    margin: 0 2.4rem;
  }

  &__cross {
    right: 0;
    margin: 0 2.4rem;
    & img {
      height: 2.4rem;
      width: 2.4rem;
    }
    cursor: pointer;
    @media only screen and (max-width: $breakpoint-sm) {
      margin: 0 1.6rem;

      & img {
        height: 1.6rem;
        width: 1.6rem;
      }
    }
  }

  &__input {
    width: 100%;
    height: 6.4rem;
    border: none;
    // border-radius: 0.5rem;

    background-color: var(--color-element);
    color: var(--color-text);
    // font-size: 1.8rem;

    padding: 0 4rem 0 6.8rem;
    // margin-right: -100%;

    &.done {
      text-decoration: line-through;
      color: var(--color-text-secondary);
    }

    &:focus-visible {
      outline: none;
    }
  }
}
</style>
