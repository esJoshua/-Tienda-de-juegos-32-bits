import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    dataGames: [],
    filter: "",
  },
  getters: {
    stockTotal(state) {
      return state.dataGames.reduce((accumulator, dataGames) => {
        console.log("acumulator:" + accumulator);
        console.log("dataGames:" + dataGames.stock);
        return accumulator + dataGames.stock;
      }, 0);
    },
    /* asi lo hice originalmente, rama master (opcion1)
    findGame: (state) => (codigo) => {
      return state.dataGames.filter((game) => {
        console.log(codigo);
        return game.codigo == codigo;
      });
    }, */
    filterData(state) {
      return state.dataGames.filter((fil) => fil.codigo.includes(state.filter) || fil.nombre.includes(state.filter));
    },
  },
  mutations: {
    SET_DATA(state, payload) {
      state.dataGames = payload;
      console.log(payload);
    },
    SET_FILTER(state, payload) {
      state.filter = payload;
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
    /* asi se hace con axios teniendo la data en .json en el public
    async getData({ commit }) {
      try {
        const request = await axios("data.json");
        commit("SET_DATA", request.data);
      } catch (error) {
        console.error(error);
      }
    }, */
  },
});

export default store;
