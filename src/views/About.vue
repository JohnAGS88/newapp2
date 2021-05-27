<template>
  <div class="dos">
    <h1>Bienvenidos a StrikeOut-App</h1>
      <b-form class="form" @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-2" label="Tu Nombre:" label-for="input-2">
            <b-form-input id="input-2" v-model="form.name" placeholder="" required></b-form-input>
          </b-form-group>
            <b-form-group id="input-group-3" label="Tu Break:" label-for="input-3">
            <b-form-select id="input-3" v-model="form.food" :options="foods" required></b-form-select>
          </b-form-group>
          <button type="button" class="btn btn-outline-dark">
            <router-link to="/profile">Selecciona</router-link>
          </button>
      </b-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          break: null,
          checked: []
        },
        foods: [{ text: 'Selecciona Uno', value: null }, 'Primer Break', 'Almuerzo o Comida', 'Segundo Break', 'Salida'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        this.form.name = ''
        this.form.break = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>


<style scoped>
.dos{
  
  margin-top: 10%;

}

.form {

  padding: 1%;
  width: 25%;
  margin-left: 37%;
  border: 2px solid #f6f6f6;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
}

h1 {
  margin-bottom: 5%;
}

.btn {
  margin-top: 8%;
}

</style>

/* <button type="button" class="btn btn-outline-dark">
            <router-link to="/profile">Selecciona</router-link>
          </button> */
