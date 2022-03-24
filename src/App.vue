<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link active" to="/">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/busqueda"
                >Búsquedas</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/ventas">Ventas</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="total">Total</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <transition name="vista">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  created() {
    this.getData();
  },
  methods: {
    ...mapActions(["getData"]),
  },
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.vista-enter-active,
.vista-leave-active {
  transition: opacity 0.1s;
}
.vista-enter,
.vista-leave-to {
  opacity: 0;
}
</style>
