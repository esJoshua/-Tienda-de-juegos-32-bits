<template>
  <div>
    <hr />
    <ul>
      <li
        v-for="game in gameListProps"
        :key="game.codigo"
        :style="`background-color: ${game.color}`"
      >
        {{ game.codigo }} | {{ game.nombre }} | {{ game.stock }} | ${{
          game.precio.toLocaleString("DE")
        }}
      </li>
    </ul>
    <hr />
  </div>
</template>
<script>
export default {
  name: "GamesList",
  props: {
    gameListProps: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style scoped>
li {
  color: white;
}
li:nth-child(4),
::marker {  color: black;
}
</style>
