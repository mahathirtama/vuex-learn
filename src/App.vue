<template>
  <div id="app">
    <div class="container">
      <add-todo-vue></add-todo-vue>
      <filter-todo-vue></filter-todo-vue>
      <todos-vue></todos-vue>
    </div>
  </div>
</template>

<script>
import TodosVue from "./components/Todos.vue"
import AddTodoVue from "./components/AddTodo.vue"
import FilterTodoVue from "./components/FilterTodos.vue"
export default {
  name: 'App',
  components: {
    TodosVue,
    AddTodoVue,
    FilterTodoVue
  }
}
</script>

<style>
body {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}

.container {
  max-width: 800px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
