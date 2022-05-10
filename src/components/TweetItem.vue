<template>
  <div @click="favouriteTweet(tweet.id)">
    {{ tweet.content }}
  </div>
</template>

<script>
export default {
  name: 'TweetItem',
  setup(props, ctx) {
        function favouriteTweet(id) {
            ctx.emit('favourite', id)
        }
      return {
          favouriteTweet
      }
  },
    props: {
        username: {
            type: String,
            required: true
        },
        tweet: {
            type: Object,
            required: true
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
