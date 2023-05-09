<template>
  <div class="filter-container">
    <label class="filter" v-for="item in options" :key="item.value">
      <input type="radio" name="button" :value="item.value" v-model="filter" />
      <span>{{ item.label }}</span>
    </label>
  </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia";
import useTodosStore from "@/stores/todos";

const store = useTodosStore();
const { filter } = storeToRefs(store);

const options = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Active",
    value: "active",
  },
  {
    label: "Completed",
    value: "completed",
  },
];
</script>
<style lang="scss" scoped>
.filter-container {
  display: flex;
  gap: 1.6rem;
}
.filter {
  position: relative;
  font-size: 1.6rem;
  color: var(--color-text-secondary);
  & input {
    cursor: pointer;
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  & input:checked + span {
    color: var(--color-text);
  }
}
</style>
