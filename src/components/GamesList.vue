<template>
  <div>
    <hr />
    <ul>
      <!--   <li
        v-for="(game, i) in dataGames"
        :key="i"
        :style="`background-color: ${game.color}`"
      > OPCION 1-->
      <li
        v-for="game in productos"
        :key="game.codigo"
        :style="`background-color: ${game.color}`"
      >
        {{ game.codigo }} | {{ game.nombre }} | {{ game.stock }} |
        ${{ game.precio.toLocaleString("DE") }}
      </li>
    </ul>
    <hr />
  </div>
</template>
<script>
/* import { mapState } from "vuex"; OPCION 1*/
export default {
  name: "GamesList",
  /* computed: {
    ...mapState(["dataGames"]),
  }, OPCION 1*/
  props: {
    productos: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
