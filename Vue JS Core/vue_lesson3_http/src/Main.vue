<template>
  <div>
    <div class="container">
      <h1>Vue Lesson 3</h1>
      <md-field>
        <label>Write Name of Task</label>
        <md-textarea md-autogrow v-model="task.name"></md-textarea>
      </md-field>
      <md-field>
        <label>Write Comment</label>
        <md-textarea md-autogrow v-model="task.comment"></md-textarea>
      </md-field>
      <md-button class="md-raised md-primary" @click="add" v-if="tasks.length <= 5">Додати</md-button>

      <div class="task">
        <div v-for="(item, index) in tasks" :key="index" class="task__item">
          <md-card md-with-hover>
            <md-ripple>
              <md-card-header>
                <div class="md-title">{{ item.name }}</div>
                <div class="md-subhead">{{ item.comment }}</div>
              </md-card-header>

              <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
              </md-card-content>

              <md-card-actions>
                <md-button @click="remove(item.id)">Remove</md-button>
              </md-card-actions>
            </md-ripple>
          </md-card>
        </div>
      </div>

      <md-dialog-alert
        :md-active.sync="error"
        md-title="Error!"
        md-content="Write you <strong>task</strong> and Add again" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'Main',
  
  data() {
    return {
      task: {
        name: '',
        comment: ''
      },
      tasks: [],
      error: false
    }
  },

  methods: {
    async add() {
      try {
        if(this.task.name.length > 0 && this.task.comment.length > 0) {
          await this.$http.post('tasks.json', {name: this.task.name, comment: this.task.comment});
                this.task.name = '';
                this.task.comment = '';
        } else {
          this.error = true
        }
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
  .task {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
  }
  .task__item {
    flex: 0 0 32%;
    margin: 0 5px;
    margin-bottom: 10px;
  }
</style>
