import { defineStore } from "pinia";
import { ref, computed } from "vue";

interface Todo {
  id?: string;
  text: string;
  done: boolean;
}

export const useTodosStore = defineStore('todos', () => {
  const todos = ref<Todo[]>([]);
  const filter = ref<string>("all");

  const todosDisplayed = computed<Todo[]>(() => {
    if (filter.value === "active") {
      return todos.value.filter((t) => !t.done);
    } else if (filter.value === "completed") {
      return todos.value.filter((t) => t.done);
    }
    return todos.value;
  });

  const todosActiveCnt = computed<number>(() => {
    const actives = todos.value.filter((t) => !t.done);
    return actives.length;
  });

  const todosCompletedCnt = computed<number>(() => {
    const cmps = todos.value.filter((t) => t.done);
    return cmps.length;
  });

  const todosAllCnt = computed<number>(() => {
    return todos.value.length;
  });

  function addTodo(todo: Todo): void {
    const id =
      Date.now().toString(36) + Math.random().toString(36).substr(2);
    todos.value.unshift({ ...todo, id });
  }

  function removeTodo(todoId: string | undefined): void {
    if (!todoId) {
      return;
    }
    const index = todos.value.findIndex((t) => t.id === todoId);
    if (index !== -1) {
      todos.value.splice(index, 1);
    }
  }

  function removeDoneTodos(): void {
    const dones = todos.value.filter((t) => t.done);
    dones.forEach((t: Todo) => {
      removeTodo(t.id);
    });
  }

  function updateTodo(todoId: string, todo: Todo): void {
    const index = todos.value.findIndex((t) => t.id === todoId);
    if (index !== -1) {
      todos.value.splice(index, 1, { ...todo, ...todos.value[index] });
    }
  }

  function setFilter(filter: string): void {
    filter = filter;
  }

  return {
    todos,
    filter,
    todosDisplayed,
    todosActiveCnt,
    todosCompletedCnt,
    todosAllCnt,
    addTodo,
    removeTodo,
    removeDoneTodos,
    updateTodo,
    setFilter,
  };
})

export default useTodosStore;