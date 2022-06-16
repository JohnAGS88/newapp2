<template>
  <div class="home">
      <h1>Welcome StrikeOut-App</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <div>
            <div id="formContent">
              <form id="app">
                <input  type="text" placeholder="Name">
                <input v-model="apellido" type="text" placeholder="Lastname">
              </form>
              <div class="datetime">
            <label for="example-datepicker">Calendar</label>
              <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
              <p>Today Is: {{ value }}</p>
              <button type="button" href="/profile" @click.capture="showMessage" class="btn btn-outline-dark">
                <router-link style="text-decoration:none; color: inherit" to="/profile">Go To</router-link>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  margin-top: 3%;
}

.datetime {
  margin-top: 10%;
  padding: 1%;
}

</style>

<script>
export default {
  data() {
    return {
      event: "click"
    }
  },
  methods: {
    showMessage() {
      alert("Hi! Thank you for registering!");
    }
  }
}
</script>
