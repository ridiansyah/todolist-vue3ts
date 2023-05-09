<template>
  <label class="checkbox">
    <input type="checkbox" :checked="props.checked" @input="handleCheck" />
    <div class="checkbox__background-wrap">
      <div :class="{ checkbox__background: true, checked: props.checked }">
        <img :src="CheckIcon" alt="icon-check" />
      </div>
    </div>
  </label>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";
import CheckIcon from "@/assets/images/icon-check.svg";
const props = defineProps({
  checked: {
    type: Boolean,
    default: true,
  },
});
const emit = defineEmits(["update:checked"]);

const handleCheck = (e: Event) => {
  if (e.target instanceof HTMLInputElement) {
    emit("update:checked", e.target.checked);
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.checkbox {
  position: relative;
  & input {
    opacity: 0;
    cursor: pointer;
    height: 2.4rem;
    width: 2.4rem;
    position: absolute;

    @media only screen and (max-width: $breakpoint-sm) {
      width: 2rem;
      height: 2rem;
    }
  }

  &__background-wrap {
    height: 2.4rem;
    width: 2.4rem;
    border-radius: 1.2rem;
    padding: 1px;
    background-color: var(--color-border);

    @media only screen and (max-width: $breakpoint-sm) {
      width: 2rem;
      height: 2rem;
    }
  }

  &__background {
    background-color: var(--color-element);
    display: grid;
    place-content: center;
    width: 100%;
    height: 100%;
    border-radius: 50%;

    & img {
      display: none;
      height: 1.2rem;
      width: 1.2rem;
      @media only screen and (max-width: $breakpoint-sm) {
        width: 1rem;
        height: 1rem;
      }
    }
    &.checked {
      background-color: transparent;
      & img {
        display: inline;
      }
    }
  }

  & input:hover + &__background-wrap {
    background: var(--color-checkbox);
    background: var(--color-checkbox);
  }

  & input:checked + &__background-wrap {
    background: var(--color-checkbox);
    background: var(--color-checkbox);
  }
}
</style>
