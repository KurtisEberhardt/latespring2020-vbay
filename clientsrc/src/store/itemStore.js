import { api } from "../services/AxiosService";

export const itemStore = {
  actions: {
    async getItems({ commit }) {
      let res = await api.get("items");
      commit("setItems", res.data);
    },
    async createItem({ commit }, item) {
      await api.post("items", item);
    },
    async bid({ commit }, item) {
      await api.put("items/" + item.id + "/bid", { bid: item.price });
    }
  }
};
