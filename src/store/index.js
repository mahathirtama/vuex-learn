import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
    allTodos: (state) => state.todos
  },
  mutations: {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    updateTodo: (state, updTodo) => {
      const index = state.todos.findIndex(todo => todo.id === updTodo.id)
      if (index !== -1) {
        state.todos.splice(index, 1, updTodo)
      }
    }
  },
  actions: {
    async fetchTodos({ commit }) {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
      commit('setTodos', response.data)
    },
    async addTodo({commit}, title) {
      const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, complited: false })
      commit('newTodo', response.data)
    },
    async deleteTodo({ commit }, id) {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      commit('removeTodo', id)
    },
    async filterTodos({ commit }, e) {
      const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText)
      const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
      commit('setTodos', response.data)
    },
    async updateTodo({commit}, updTodo) {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`, updTodo)
      commit('updateTodo', response.data)
    }
  },
  modules: {
  }
})
