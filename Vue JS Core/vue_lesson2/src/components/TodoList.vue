<template>
  <div>
    <h3>All my tasks</h3>
    <div v-for="(task, index) in tasks" :key="index">
        <TodoItem
            :task="task"
        />
    </div>
  </div>
</template>

<script>

import TodoItem from "@/components/TodoItem";

export default {
  name: 'TodoList',

  props: {
      tasks: {
          type:Array,
          required: true
      }
  },

  components: {
    TodoItem
  }
}
</script>

<style>

</style>
