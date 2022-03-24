<template>
  <div>
    <hr />
    <ul>
      <li
        v-for="(game, i) in dataGames"
        :key="i"
        :style="`background-color: ${game.color}`"
      >
        {{ game.codigo }} | {{ game.nombre }} | {{ game.stock }} |
        {{ game.precio }}
      </li>
    </ul>
    <hr />
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "GamesList",
  computed: {
    ...mapState(["dataGames"]),
  },
};
</script>
