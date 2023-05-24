import { createStore } from 'vuex'
import listStore from './modules/list-store'


const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    listStore,
  },
})

export default store
