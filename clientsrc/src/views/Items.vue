<template>
  <div class="items container-fluid">
    <div class="row text-center">
      <div class="col">
        <h1>Welcome to V-Bay</h1>
        <h3>Let Villany Commence</h3>
      </div>
    </div>
    <div class="row">
      <create-item v-if="$auth.isAuthenticated" />
    </div>
    <div class="row">
      <item
        class="col-3"
        v-for="item in items"
        :key="item._id"
        :itemData="item"
      />
    </div>
  </div>
</template>

<script>
import Item from "@/components/Item";
import CreateItem from "@/components/CreateItem";
export default {
  name: "Items",
  mounted() {
    this.$store.dispatch("getItems");
    this.$store.dispatch("joinRoom", "items");
  },
  beforeDestroy() {
    this.$store.dispatch("leaveRoom", "items");
  },
  data() {
    return {
      page: 0,
      maxPrice: 0
    };
  },
  computed: {
    items() {
      return this.$store.state.items;
    }
  },
  components: {
    Item,
    CreateItem
  }
};
</script>
