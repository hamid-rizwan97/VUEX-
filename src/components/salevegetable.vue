<template>
    <div class="product_two">
      <h1 v-local-highlight:foreground.delayed.blink="{initialColor:'green' , secondarycolor:'lightgreen' , delay:700 }">Vegetable Sale</h1>
      <ul>
        <li v-for="vegetable in salevegetable">
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
      vegetables() {
          return this.$store.state.vegetables
      },
      salevegetable()
      {
         return this.$store.getters.salevegetable
      }
    },
    data() {
      return {};
    },
  };
  </script>
  <style scoped>
  .product_two {
    background: #98c7ab;
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
    color: #36f805;
  }
  h1{
    text-align: center;
    font-weight: bolder;
    font-size: 100px;
  }
  </style>