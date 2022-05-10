<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
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
import { users } from "./assets/users"

export default {
  name: 'App',
  setup () {
    return {
      users
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
