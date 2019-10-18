import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: "project-template",
  storage: window.localStorage
});

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    todos: [
      {
        id: 1,
        done: false,
        title: "Test Todo1"
      },
      {
        id: 2,
        done: false,
        title: "Test Todo2"
      }
    ]
  },
  mutations: {
    addToDo(state, todo) {
      state.todos = [...state.todos, {...todo, done: false, id: state.todos.length+1}];
    },
    updateTodo(state, newTodo) {
      console.log("updating");
      state.todos = state.todos.map((currentTodo) => {
        if (currentTodo.id === newTodo.id) {
          return newTodo;
        }
        return currentTodo;
      });
    },
    deleteTodo(state, newTodo) {
      console.log("updating");
      state.todos = state.todos.filter((currentTodo) => {
        return currentTodo.id !== newTodo.id
      });
    }
  },
  actions: {
    addToDo({ commit }, toDo) {
      debugger;
      commit("addToDo", toDo);
    }
  }
});
