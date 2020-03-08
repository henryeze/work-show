import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: null,
    process: false
  },
  mutations: {
    
  },
  actions: {
    uploadUserData({ state}, {form}) {
      console.log(typeof form)
      state.process = false
      alert("Sign Up complete");
    }
  },
  modules: {}
});
