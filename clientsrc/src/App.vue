<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import { onAuth } from "@bcwdev/auth0-vue";
export default {
  name: "App",
  async beforeCreate() {
    this.$store.dispatch("initalizeSocket");
    await onAuth();
    if (this.$auth.isAuthenticated) {
      this.$store.dispatch("setBearer", this.$auth.bearer);
      this.$store.dispatch("getProfile");
      // this.$tore.dispatch("authorizeSocket", this.$auth.bearer)
    }
  },
  components: {
    Navbar
  }
};
</script>

<style></style>
