<template>
  <div>
    <p>@{{ fullname }}</p>
    <p class="user-profile-admin" v-if="user.isAdmin">Admin</p>
    <strong>Followers {{ followers }}</strong>
    <button @click="followUser">Follow</button>
    <div v-for="(tweet, index) in user.tweets" :key="index">
        <TweetItem
            :username="user.username"
            :tweet="tweet"
            @favourite="toggleFavourite" />
    </div>
  </div>
</template>

<script>
import TweetItem from "./TweetItem.vue"
export default {
    name: "App",
    data() {
        return {
            followers: 0,
            user: {
                id: 1,
                username: "tichkames",
                firstName: "Tich",
                lastName: "Kames",
                isAdmin: true,
                tweets: [
                    { id: 1, content: "First Tweet" },
                    { id: 2, content: "Second Tweet" },
                    { id: 3, content: "Third Tweet" }
                ]
            }
        };
    },
    computed: {
        fullname() {
            return `${this.user.firstName} ${this.user.lastName}`;
        }
    },
    methods: {
        followUser() {
            this.followers++;
        },
        toggleFavourite(id) {
            console.log('id', id)
        }
    },
    mounted() {
        this.followUser();
    },
    watch: {
        followers(newCount, oldCount) {
            console.log("newCount", newCount);
            console.log("oldCount", oldCount);
        }
    },
    components: { TweetItem }
}
</script>

<style scoped>
.user-profile-admin {
background: rebeccapurple;
color: white;
border-radius: 5px;
}
</style>
