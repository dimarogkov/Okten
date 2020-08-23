<template>
  <div class="container">
    <h1>Todo</h1>
    <p v-if="info">You dont wrtite text. Please write your text</p>
    <p v-if="limit">You can add only 5 task on Once. Please do it to add new</p>
    <input v-model="task">
    <a class="waves-effect waves-light btn" @click="add(task)" v-if="btn">button</a>
    <h4>My Todo List</h4>
    <p v-if="infoTasks">your tasklist is empty</p>
    <div v-for="(task,index) in tasks" :key="index">
      <ul>
        <li>
          {{task}}
          <a class="waves-effect waves-light btn" @click="remove">Remove</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Todo',

  data() {
    return {
      task: '',
      tasks: ['read book'],
      info: false,
      infoTasks: false,
      btn: true,
      limit: false
    }
  },

  methods: {
    add() {
      if(this.task.length > 0) {
        this.tasks.push(this.task)
        this.info = false
      }
      if(this.task.length === 0) {
        this.info = true
      }
      if(this.tasks.length > 0 ) {
        this.infoTasks = false
      }
      if(this.tasks.length === 5 ) {
        this.btn = false
        this.limit = true
      }
    },
    remove(index) {
      this.tasks.splice(index, 1)
      if(this.tasks.length === 0 ) {
        this.infoTasks = true
      }
      if(this.tasks.length < 5 ) {
        this.btn = true
        this.limit = false
      }
    }
  }
    
}
</script>

<style>

</style>
