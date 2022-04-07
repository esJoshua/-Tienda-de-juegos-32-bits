<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <h3>
          <strong>Títulos Vendidos: {{ sales.length }}</strong>
        </h3>
        <h4>Detalle:</h4>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Codigo</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="game in sales" :key="game.codigo">
              <th scope="row">{{ game.codigo }}</th>
              <td>{{ game.nombre }}</td>
              <td>${{ game.precio.toLocaleString("DE") }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-6">
        <h3>
          <strong>Monto total de ventas: </strong>${{
            totalSales.toLocaleString("DE")
          }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "TotalView",
  computed: {
    ...mapGetters(["totalSales"]),
    ...mapState(["sales"]),
  },
};
</script>

<style></style>
