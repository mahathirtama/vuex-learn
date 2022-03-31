<template>
  <div>
    <h3>Todo</h3>
    <div class="legend">
      <span>Double click to mark as complite</span>
      <span> <span class="incomplete-box"></span> = Incomplete </span>
      <span> <span class="complete-box"></span> = Complete </span>
    </div>
    <div class="todos">
      <div
        @dblclick="onDblClick(todo)"
        class="todo"
        v-for="todo in allTodos"
        :key="todo.id"
        v-bind:class="{'is-complete' : todo.completed}"
      >
        {{ todo.title }}
        <i @click="deleteTodo(todo.id)">Hapus</i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "TodosVue",
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    onDblClick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };

      this.updateTodo(updTodo);
    },
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  },
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  background-color: #b8419e;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

i {
  position: absolute;
  bottom: 3px;
  right: 9px;
  color: #fff;
  cursor: pointer;
}

.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}

.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #333a37;
}

.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}

.is-complete {
    background: #333a37;
    color: #fff;
}

@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>