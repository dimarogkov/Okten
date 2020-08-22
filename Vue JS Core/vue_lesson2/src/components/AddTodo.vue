<template>
  <div>
    <input placeholder="Write Task" v-model="addtask">
    <button @click="add(addtask)">Add</button>
  </div>
</template>

<script>

export default {
  name: 'AddTodo',

  data() {
    return {
        addtask: ''
    }
  },

  methods: {
    add() {
        this.$emit('addtask', this.addtask)
    }
  }
}
</script>

<style>

</style>
