<template>
  <div>
    <h1>Todo List</h1>
    <h3>Vue Js - Lesson Two</h3>
    <p>Create by Dima Rogkov</p>
    <hr>
    <AddTodo/>
    <TodoList 
      :tasks="tasks"
      @add = "addtask" 
    />
  </div>
</template>

<script>

import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";

export default {
  name: 'Todo',

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
      console.log(event)
      // this.tasks.push(event);
    }
  }
}
</script>

<style>

</style>
