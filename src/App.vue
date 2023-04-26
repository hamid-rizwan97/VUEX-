<template>
  <div id="app">
    <productOne></productOne>
    <productTwo></productTwo>
    <saleProducts></saleProducts>
    <salevegetable></salevegetable>
  </div>
</template>

<script>
import productOne from "./components/productOne.vue";
import productTwo from "./components/productTwo.vue";
import saleProducts from "./components/saleProducts.vue";
import salevegetable from "./components/salevegetable.vue";
export default {
  components: {
    productOne: productOne,
    productTwo: productTwo,
    saleProducts:saleProducts,
    salevegetable:salevegetable
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
body {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: grey;
}
</style>
