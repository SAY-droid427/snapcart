import Vue from "vue";
import Vuex from "vuex";
import products from "./modules/products";

//Load store
Vue.use(Vuex);

//Create store
export default new Vuex.Store({
    modules:{
        products
    }
})