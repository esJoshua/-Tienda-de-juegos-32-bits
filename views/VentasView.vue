<template>
  <div class="container mt-5">
    <div class="row flex text-center justify-content-center">
      <h3>Juegos con stock disponible: {{ gameWstock.length }} Títulos</h3>
      <table class="col-md-6 mt-5">
        <thead>
          <tr>
            <th scope="col">Codigo</th>
            <th scope="col">Nombre</th>
            <th scope="col">Stock</th>
            <th scope="col">Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table" v-for="(game, i) in gameWstock" :key="i">
            <th scope="row">{{ game.codigo }}</th>
            <td>{{ game.nombre }}</td>
            <td>{{ game.stock }}</td>
            <td>${{ game.precio.toLocaleString("DE") }}</td>
            <button class="btn btn-secondary btn-sm" @click="click(game)">
              vender
            </button>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "VentasView",
  computed: {
    ...mapGetters(["gameWstock"]),
  },
  methods: {
    ...mapMutations(["SET_STOCK", "PUSH_SALES"]),
    click(game) {
      this.SET_STOCK(game.codigo);
      this.PUSH_SALES({
        codigo: game.codigo,
        nombre: game.nombre,
        precio: game.precio,
      });
    },
  },
};
</script>

<style></style>
