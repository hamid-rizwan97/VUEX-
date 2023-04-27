<template>
  <div class="product_two">
    <h1
      v-local-highlight:foreground.delayed.blink="{
        initialColor: 'red',
        secondarycolor: 'salmon',
        delay: 700,
      }"
    >
      Fruit Sale
    </h1>
    <ul>
      <li v-for="fruit in salefruits">
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
    <button @click="reducePricefruits">Reduce Prices</button>
  </div>
</template>
<script>
export default {
  directives: {
    "local-highlight": {
      bind(el, binding, vnode) {
        var delay = 0;
        if (binding.modifiers["delayed"]) {
          delay = 1000;
        }
        if (binding.modifiers["blink"]) {
          let initialColor = binding.value.initialColor;
          let secondarycolor = binding.value.secondarycolor;
          let currentcolor = initialColor;
          setTimeout(() => {
            setInterval(() => {
              currentcolor == secondarycolor
                ? (currentcolor = initialColor)
                : (currentcolor = secondarycolor);
              if (binding.arg == "foreground") {
                el.style.color = currentcolor;
              } else {
                el.style.color = binding.value.initialColor;
              }
            }, 1000);
          }, binding.value.delay);
        }
      },
    },
  },
  computed: {
    fruits() {
      return this.$store.state.fruits;
    },
    salefruits() {
      return this.$store.getters.salefruits;
    },
  },
  methods: {
    reducePricefruits() {
      this.$store.commit("reducePricefruits");
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.product_two {
  background: #f0cfd1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
.product_two ul {
  text-align: center;
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
  color: #f80505;
}
h1 {
  text-align: center;
  font-weight: bolder;
  font-size: 40px;
}
</style>
