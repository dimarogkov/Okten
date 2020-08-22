<template>
  <div>
    <ul>
        <li>
            {{task}}
            <button @click="remove(index)">Remove</button>
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
  }
}
</script>

<style>

</style>
