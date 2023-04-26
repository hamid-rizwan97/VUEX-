import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        fruits: [
            {
              name: "Apple",
              price: "240",
              quantity: "24",
            },
            {
              name: "Banana",
              price: "240",
              quantity: "10",
            },
            {
              name: "Pineapple",
              price: "240",
              quantity: "14",
            },
          ],
          vegetables: [
            {
              name: "Cocumber",
              price: "140",
              quantity: "4",
            },
            {
              name: "Bittergourd",
              price: "240",
              quantity: "11",
            },
            {
              name: "Tomatoes",
              price: "240",
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
                price : fruit.price/2
            }
          });
          return salefruits;
        },
        salevegetable:state=>
        {
          let  salevegetable = state.vegetables.map(vegetable =>{
            return{
                name:'**' + vegetable.name + '**',
                price : vegetable.price/2
            }
          });
          return salevegetable;
        },
    }
})