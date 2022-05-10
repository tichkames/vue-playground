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
    <form class="tweet-form" @submit.prevent="createNewTweet">
        <label for="newTweet"><strong>New Tweet</strong></label>
        <textarea id="newTweet" rows="4" v-model="newTweet.content"></textarea>

        <div>
            <label for="newTweetType"><strong>Type: </strong></label>
            <select id="newTweetType" v-model="newTweet.type">
                <option
                    :value="option.value"
                    v-for="(option, index) in tweetTypes"
                    :key="index" >
                    {{ option.name }}
                </option>
            </select>
        </div>
        <button>Tweet!</button>
    </form>
  </div>
</template>

<script>
import TweetItem from "./TweetItem.vue"

export default {
    name: "UserProfile",
    data() {
        return {
            newTweet: { type: 'instant', content: '' },
            tweetTypes: [
                { value: 'draft', name: 'Draft' },
                { value: 'instant', name: 'Instant' }
            ],
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
        },
        createNewTweet() {
            if(this.newTweet.content){
                console.log('tweet type', this.newTweet.type)
                console.log('tweet content', this.newTweet.content)
                this.user.tweets.unshift({
                    id: this.newTweet.content.length,
                    content: this.newTweet.content
                    }
                )
            }
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

.tweet-form {
    display: flex;
    flex-direction: column;
}
</style>
