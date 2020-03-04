import Vue from "vue";
import Vuex from "vuex";
import { itemStore } from "./itemStore";
import { socketStore } from "./socketStore";
import { api } from "../services/AxiosService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    items: []
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setItems(state, data) {
      state.items = data;
    },
    addItem(state, data) {
      state.items.push(data);
    },
    updateItem(state, data) {
      let index = state.items.findIndex(c => c.id == data.id);
      if (index > -1) {
        state.items.splice(index, 1, data);
      }
    }
  },
  actions: {
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    }
  },
  modules: {
    itemStore,
    socketStore
  }
});
