<template>
  <div>
    <h1>Todo List</h1>
    <h3>Vue Js - Lesson Two</h3>
    <p>Create by Dima Rogkov</p>
    <hr>
    <AddTodo
      @addtask = "addtask"
    />
    <TodoList 
      :tasks="tasks" 
    />
  </div>
</template>

<script>

import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";

export default {
  name: 'App',

  components: {
    AddTodo,
    TodoList
  },

  data() {
    return {
      tasks: ['Repai car', 'Go for a walk', 'Read book']
    }
  },

  methods: {
    addtask(event) {
      this.tasks.push(event);
    }
  }
}
</script>

<style>

</style>
