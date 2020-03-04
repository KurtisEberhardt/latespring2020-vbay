import io from "socket.io-client";

let socket = {};

export const socketStore = {
  actions: {
    initalizeSocket({ commit, dispatch }) {
      //establish connection with socket
      socket = io("//localhost:3000");
      //Handle any on connection events
      socket.on("CONNECTED", data => {
        console.log("Connected to socket, villany may commence");
      });

      //register all listeners
      socket.on("newItem", item => {
        commit("addItem", item);
      });

      //register all listeners
      socket.on("newBid", data => {
        commit("updateItem", data);
      });

      socket.on("deleteItem", data => {
        commit("deleteItem", data);
      });
    },

    joinRoom({ commit, dispatch }, roomName) {
      socket.emit("dispatch", { action: "JoinRoom", data: roomName });
    }
  }
};
