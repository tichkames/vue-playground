<template>
  <div @click="favouriteTweet(tweet.id)">
    {{ tweet.content }}
  </div>
</template>

<script>
export default {
  name: 'App',
    props: {
        username: {
            type: String,
            required: true
        },
        tweet: {
            type: Object,
            required: true
        }
    },
    methods: {
        favouriteTweet(id) {
            this.$emit('favourite', id)
        }
    }
}
</script>

<style scoped>
.user-profile-admin {
background: rebeccapurple;
color: white;
border-radius: 5px;
}
</style>
