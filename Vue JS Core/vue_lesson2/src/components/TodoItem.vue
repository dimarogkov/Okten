<template>
  <div>
    <ul>
        <li>
            {{task}}
            <button @click="remove">Remove</button>
        </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'TodoItem',

  props: {
      task: {
          Type: String,
          required: true
      }
  },
  
  methods: {
      remove() {
        this.$emit('remove', this.task)
      }
  }
}
</script>

<style>

</style>
