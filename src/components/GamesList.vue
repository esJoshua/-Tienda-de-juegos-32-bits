<template>
  <div>
    <hr />
    <ul>
      <li
        v-for="(game, i) in gameListProps"
        :key="i"
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
