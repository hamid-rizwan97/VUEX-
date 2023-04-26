<template>
  <div class="product_one">
    <h2>Fruits</h2>
    <ul>
      <li v-for="fruit in fruits">
        <span class="name">
          Name:
          {{ fruit.name }}
        </span>
        <br />
        <span class="price">
          Price: PKR
          {{ fruit.price }}
        </span>
        <br />
        <span class="quantity">
          Quantity:
          {{ fruit.quantity }}
        </span>
        <br />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    fruits() {
      return this.$store.state.fruits;
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.product_one {
  background: #fff8b1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
.product_one ul {
  padding: 0;
}
.product_one li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
  color: #e8800c;
}

</style>
