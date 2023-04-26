import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        fruits: [
            {
              name: "Apple",
              price: "250",
              quantity: "24",
            },
            {
              name: "Banana",
              price: "150",
              quantity: "10",
            },
            {
              name: "Pineapple",
              price: "440",
              quantity: "14",
            },
          ],
          vegetables: [
            {
              name: "Cocumber",
              price: "40",
              quantity: "4",
            },
            {
              name: "Bittergourd",
              price: "60",
              quantity: "11",
            },
            {
              name: "Tomatoes",
              price: "90",
              quantity: "8",
            },
          ],
    },
    getters:{
        salefruits:state=>
        {
          let  salefruits = state.fruits.map(fruit =>{
            return{
                name:'**' + fruit.name + '**',
                price : fruit.price/2,
                quantity:fruit.quantity
            }
          });
          return salefruits;
        },
        salevegetable:state=>
        {
          let  salevegetable = state.vegetables.map(vegetable =>{
            return{
                name:'**' + vegetable.name + '**',
                price : vegetable.price/2,
                quantity:vegetable.quantity
            }
          });
          return salevegetable;
        },
    }
})