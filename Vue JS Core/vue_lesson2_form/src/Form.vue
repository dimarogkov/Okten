<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-8 offset-2">
          <h1>Form</h1>
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp"
              v-model="info.email"
            >
          </div>
          <div class="form-group">
            <label for="pass">Password</label>
            <input type="password" class="form-control" id="pass"
              v-model="info.pass"
            >
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-8 offset-2"> 
          <label for="male">
            <input
              id="male"
              type="radio"
              value="Male"
              v-model="info.gender"  
            > 
            Male
          </label>
          <label for="female">
            <input
              id="female"
              type="radio"
              value="Female"
              v-model="info.gender"
            >
            Female
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col-8 offset-2">
          <button type="submit" class="btn btn-primary" 
            @click.prevent="click"
          >Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Form',

  data() {
    return {
      info: {
        email: '',
        pass: '',
        gender: ''
      }
    }
  },

  methods: {
    click() {
      console.log(this.info);
    }
  }
}
</script>

<style>

</style>
