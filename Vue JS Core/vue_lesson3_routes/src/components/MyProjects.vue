<template>
  <div>
    <div class="container">
        <h1>Vue Lesson 3</h1>

        <input type="text" placeholder="Write Name of Task" v-model="task.name">
        <input type="text" placeholder="Write Comment" v-model="task.comment">
        <button @click="add" v-if="tasks.length <= 5">Додати</button>

      
        <div v-for="(item, index) in tasks" :key="index">
            <ul>
                <li>
                    {{ item.name }} - {{ item.comment }}
                    <button @click="remove(item.id)">Remove</button>
                </li>
            </ul>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  
  data() {
    return {
      task: {
        name: '',
        comment: ''
      },
      tasks: []
    }
  },
  methods: {
    async add() {
      try {
        await this.$http.post('tasks.json', {name: this.task.name, comment: this.task.comment});
            this.task.name = '';
            this.task.comment = '';
      } catch(e) {
        console.log(e);
      } finally {
        this.tasks = [];
        this.get();
      }
    },
    get() {
      this.$http.get('tasks.json')
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          for (let id in res) {
            this.tasks.push({id, name: res[id].name, comment: res[id].comment});
          }
        })
    },
    async remove(id) {
      try {
        await this.$http.delete(`tasks/${id}.json`);
      } catch(e) {
        console.log(e);
      } finally {
        this.tasks = []
        this.get();
      }
    }
  },
  beforeMount() {
    this.get();
  }
}
</script>

<style>
  .container {
    width: 90%;
    margin: 0 auto;
  }
  .line {
    border-top: 1px solid grey;
  }
</style>