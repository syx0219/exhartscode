import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//将app的分支引入进来
import app from './modules/app';
import getters from './getters';
import user from './modules/user';
export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters,
  modules: {
    app,
    user
  }
})
