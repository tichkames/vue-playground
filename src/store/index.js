import { createStore } from 'vuex'
import { UserModule } from './user'

export default createStore({
  state: {
  },

  getters: {
  },

  // Mutations are functions that effect the STATE
  mutations: {
  },

  // Actions are functions that you call to trigger mutations
  actions: {
  },

  modules: {
    user: UserModule
  }
})
