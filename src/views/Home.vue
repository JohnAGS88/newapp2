<template>
  <div class="home">
      <h1>Bienvenidos a StrikeOut-App</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <div>
            <div id="formContent">
              <form id="app">
                <input  type="text" placeholder="Nombre">
                <input v-model="apellido" type="text" placeholder="Apellido">
              </form>
              <div class="datetime">
            <label for="example-datepicker">Calendario</label>
              <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
              <p>La Fecha de Hoy: {{ value }}</p>
              <button type="button" href="/about" @click.capture="showMessage" class="btn btn-outline-dark">
                <router-link to="/about">Registrate</router-link>
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
      alert("Hola! Gracias por Registrarte!");
    }
  }
}
</script>
