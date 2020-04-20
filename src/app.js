import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: [
  {task: "Buy shopping", isPriority: false},
  {task: "Clean bathroom", isPriority: true},
  {task: "Car's MOT", isPriority: false},
],
      newTodo: ""
    },
    methods: {
      saveNewTodo: function(){
        const form = document.getElementById("priority");
        const todoToAdd = {
          task: this.newTodo,
          isPriority: form.elements["priority"].value
        }
        this.todos.push(todoToAdd);
        this.newTodo = "";
      }
    }
  });
});
