<template>
  <div class="col text-center create-item">
    <form @submit.prevent="createItem">
      <input
        type="text"
        name="title"
        placeholder="Title..."
        v-model="newItem.title"
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Description..."
        v-model="newItem.description"
        required
      />
      <input
        type="number"
        name="price"
        placeholder="price..."
        v-model="newItem.price"
        required
      />
      <input
        type="text"
        name="imgUrl"
        placeholder="imgUrl..."
        v-model="newItem.imgUrl"
        required
      />
      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateItem",
  data() {
    return {
      newItem: {}
    };
  },
  methods: {
    createItem() {
      this.$store.dispatch("createItem", this.newItem);
    }
  }
};
</script>
