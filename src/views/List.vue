<template>
    <div class="container">
      <h1>Welcome StrikeOut-App</h1>
        <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Lastname</th>
      <th scope="col">Type</th>
      <th scope="col">Date & Time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>Firts Break</td>
    </tr>
    <tr>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>Lunch</td>
    </tr>
    <tr>
      <td colspan=""></td>
      <td></td>
    </tr>
  </tbody>
</table> 
    <button type="button" class="btn btn-outline-dark">
      <router-link style="text-decoration:none; color: inherit" to="/">Close</router-link>
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