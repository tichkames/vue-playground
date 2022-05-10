export const UserModule = {
    namespaced: true,
    state: {
        user: null
      },

      getters: {
      },

      // Mutations are functions that effect the STATE
      mutations: {
        SET_USER(state, user) {
          state.user = user
        }
      },

      // Actions are functions that you call to trigger mutations
      actions: {
        setUser({ commit }, user) {
          commit('SET_USER', user)
        }
      },
}