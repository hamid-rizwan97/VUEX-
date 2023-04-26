<template>
  <div class="product_two">
    <h2>Vegetables</h2>
    <ul>
      <li v-for="vegetable in vegetables">
        <span class="name">
          Name:
          {{ vegetable.name }}
        </span>
        <br />
        <span class="price">
          Price: PKR
          {{ vegetable.price }}
        </span>
        <br />
        <span class="quantity">
          Quantity:
          {{ vegetable.quantity }}
        </span>
        <br />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    vegetables() {
      return this.$store.state.vegetables;
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.product_two {
  background: #5ddfa2;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
.product_two ul {
  padding: 0;
}
.product_two li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
  color: #4cf73c;
}
</style>
