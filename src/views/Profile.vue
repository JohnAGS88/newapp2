<template>
    <div class="container">
      <h1>Bienvenidos a StrikeOut-App</h1>
        <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Tipo</th>
      <th scope="col">Fecha y Hora</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>Primer Break</td>
    </tr>
    <tr>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>Almuerzo o Comida</td>
    </tr>
    <tr>
      <td colspan=""></td>
      <td></td>
    </tr>
  </tbody>
</table> 
    <button type="button" class="btn btn-outline-dark">
      <router-link to="/">Cerrar</router-link>
    </button>
  </div>
</template>

<script>
  
</script>

<style>
.table {

  padding: 1%;
  width: 15%;
  margin-top: 5%;
  border: 2px solid #f6f6f6;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
}

.container {
  margin-top: 10%;
}
</style>