import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    dataGames: [],
    sales: [],
  },
  getters: {
    stockTotal(state) {
      return state.dataGames.reduce((accumulator, dataGames) => {
        return accumulator + dataGames.stock;
      }, 0);
    },
    findGame: (state) => (codigo) => {
      return state.dataGames.filter((game) => game.codigo === codigo);
    },
    gameWstock(state) {
      return state.dataGames.filter((game) => game.stock > 0);
    },
    totalSales(state) {
      return state.sales.reduce((accumulator, sales) => {
        return accumulator + sales.precio;
      }, 0);
    },
  },
  mutations: {
    SET_DATA(state, payload) {
      state.dataGames = payload;
    },
    SET_STOCK(state, payload) {
      setTimeout(() => {
        state.dataGames.map((games) => {
          if (games.codigo === payload) games.stock--;
        });
      }, 1000);
    },
    PUSH_SALES(state, payload) {
      setTimeout(() => {
        state.sales.push(payload);
      }, 2000);
      setTimeout(() => {
        alert("Venta Procesada");
      }, 3000);
    },
  },
  actions: {
    getData({ commit }) {
      const data = [
        {
          codigo: "0001",
          nombre: "Sekiro",
          stock: 100,
          precio: 30000,
          color: "red",
          destacado: "true",
        },
        {
          codigo: "0002",
          nombre: "Fifa 21",
          stock: 100,
          precio: 25000,
          color: "blue",
          destacado: "false",
        },
        {
          codigo: "0003",
          nombre: "Gears of War 4",
          stock: 100,
          precio: 15000,
          color: "green",
          destacado: "true",
        },
        {
          codigo: "0004",
          nombre: "Mario Tennis Aces",
          stock: 100,
          precio: 35000,
          color: "yellow",
          destacado: "false",
        },
        {
          codigo: "0005",
          nombre: "Bloodborne",
          stock: 100,
          precio: 10000,
          color: "blue",
          destacado: "false",
        },
        {
          codigo: "0006",
          nombre: "Forza Horizon 4",
          stock: 100,
          precio: 20000,
          color: "red",
          destacado: "true",
        },
      ];
      console.log(data);
      commit("SET_DATA", data);
    },
  },
});

export default store;
