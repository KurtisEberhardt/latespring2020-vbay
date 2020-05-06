<template>
  <div class="item col-3">
    <div class="card">
      <img :src="itemData.imgUrl" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ itemData.title }}</h5>
        <p>{{ itemData.description }} - ${{ itemData.price }}</p>
      </div>
      <button @click="bid" v-if="$auth.isAuthenticated" class="btn btn-primary">Bid + $5</button>
      <button class="btn btn-danger" @click="delortItem">Delort</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: ["itemData"],
  methods: {
    bid() {
      this.itemData.price += 5;
      this.$store.dispatch("bid", this.itemData);
    },
    delortItem() {
      this.$store.dispatch("delortItem", this.itemData.id);
    }
  }
};
</script>

<style scoped>
.item {
  cursor: pointer;
}
</style>
