<template>
  <div>
    <h3>All my tasks</h3>
    <div v-for="(task, index) in tasks" :key="index">
        <TodoItem
            :task="task"
            @remove = "remove"
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

  methods: {
      remove(event){
          this.tasks.splice(event, 1);
      }
  },

  components: {
    TodoItem
  }
}
</script>

<style>

</style>
