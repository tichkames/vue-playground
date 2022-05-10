<template>
  <div id="app">
    <p v-if="user">Logged In user: {{ user.username }}</p>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/admin">Admin</router-link>
      <hr/>
      <router-link
        class="user-link"
        v-for="user in users"
        :key="user.id"
        :to="{ name: 'user', params: { userId: user.id } }"> {{ user.username }} </router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { users } from "./assets/users"

export default {
  name: 'App',
  setup () {
    const store = useStore()
    const user = computed(() => store.state.user.user)
    return {
      users,
      user
    }
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  .user-link {
    margin-right: 1rem;
  }
</style>
