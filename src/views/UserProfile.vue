<template>
  <div>
    <p>@{{ fullname }}</p>
    <p>User ID {{ userId }}</p>
    <p class="user-profile-admin" v-if="state.user.isAdmin">Admin</p>
    <strong>Followers {{ state.followers }}</strong>
    <button @click="followUser">Follow</button>
    <div v-for="(tweet, index) in state.user.tweets" :key="index">
        <TweetItem
            :username="state.user.username"
            :tweet="tweet"
            @favourite="toggleFavourite" />
    </div>
    <form class="tweet-form" @submit.prevent="createNewTweet">
        <label for="newTweet"><strong>New Tweet</strong></label>
        <textarea id="newTweet" rows="4" v-model="state.newTweet.content"></textarea>

        <div>
            <label for="newTweetType"><strong>Type: </strong></label>
            <select id="newTweetType" v-model="state.newTweet.type">
                <option
                    :value="option.value"
                    v-for="(option, index) in state.tweetTypes"
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
import { reactive, computed } from "vue"
import TweetItem from "@/components/TweetItem.vue"
import { useRoute } from "vue-router"
import { users } from "@/assets/users"

export default {
    name: "UserProfile",
    setup() {
        const route = useRoute();
        const userId = computed(() => route.params.userId)

        const state = reactive({
            newTweet: { type: 'instant', content: '' },
            tweetTypes: [
                { value: 'draft', name: 'Draft' },
                { value: 'instant', name: 'Instant' }
            ],
            followers: 0,
            user: users[userId.value - 1] || users[0]
        })

        const fullname = computed(() => {
            return `${state.user.firstName} ${state.user.lastName}`
        })

        const followUser = () => state.followers++

        function toggleFavourite(id) {
            console.log('id', id)
        }

        function createNewTweet() {
            if(state.newTweet.content){
                console.log('tweet type', state.newTweet.type)
                console.log('tweet content', state.newTweet.content)
                this.state.user.tweets.unshift({
                    id: state.newTweet.content.length,
                    content: state.newTweet.content
                    }
                )
            }
        }

        return {
            state,
            fullname,
            followUser,
            toggleFavourite,
            createNewTweet,
            userId
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
