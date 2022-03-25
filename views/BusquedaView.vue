<template>
  <div class="container mt-5">
    <div class="row">
      <div class="input-group mb-3 col-12 text-center justify-content-evenly">
        <div>
          <span class="input-group-text">Escribe el codigo del juego</span>
          <!-- OPCION 1 <input
            type="text"
            class="form-control text-center"
            v-model="findGameVmodel"
          /> -->
          <input
            type="text"
            class="form-control text-center"
            v-model="filterProduct"
          />
        </div>
        <div class="col-6">
          <!-- <table
            class="table"
            v-for="(game, i) in findGameSet"
            :key="i"
            :style="`background-color: ${game.color}`"
          > OPCION 1-->
          <table
            class="table"
            v-for="(game) in filterData"
            :key="game.codigo"
            :style="`background-color: ${game.color}`"
          >
            <thead>
              <tr>
                <th scope="col">Codigo</th>
                <th scope="col">Nombre</th>
                <th scope="col">Stock</th>
                <th scope="col">Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{{ game.codigo }}</th>
                <td>{{ game.nombre }}</td>
                <td>{{ game.stock }}</td>
                <td>${{ game.precio.toLocaleString("DE") }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="row justify-content-center ">
      <div class="col-md-6 d-inline-flex justify-content-evenly">
        <h3><strong>Juegos Registrados: </strong>{{ dataGames.length }}</h3>
        <h3><strong>Stock Total: </strong>{{ stockTotal }}</h3>
      </div>
    </div>
    <div class="row  justify-content-center">
      <div class="col-md-6">
        <GamesList :productos="dataGames" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
import GamesList from "@/components/GamesList.vue";
export default {
  name: "BusquedaView",
  data() {
    return {
      /*  findGameVmodel: "", OPCION 1*/
    };
  },
  components: {
    GamesList,
  },
  computed: {
    ...mapGetters(["stockTotal", "filterData"]),
    /* ...mapGetters(["stockTotal", "findGame"]), OPCION 1 */
    /*  Probando otra forma, mismo resultado linea de arriba
      stockTotal() {
      return this.$store.getters.stockTotal;
    }, */
    /*  findGameSet() {
      return this.findGame(this.findGameVmodel);
    }, OPCION 1*/
    /* Probando otra forma, mismo resultado linea de arriba
    findGame() {
      return this.$store.getters.findGame(this.findGameVmodel);
    }, */
    ...mapState(["filter", "dataGames"]),
    /* ...mapState(["dataGames"]),  OPCION 1*/
    /*Probando otra forma, mismo resultado linea de arriba
       stockGames() {
      return this.$store.state.dataGames.length;
    }, */
    filterProduct: {
      get() {
        return this.filter;
      },
      set(val) {
        this.SET_FILTER(val);
      },
    },
  },
  methods: {
    ...mapMutations(["SET_FILTER"]),
  },
};
</script>

<style></style>
