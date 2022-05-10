import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserProfile from '../views/UserProfile.vue'
import AdminView from '../views/AdminView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/user/:userId',
    name: 'user',
    component: UserProfile
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    meta: {
      requiresAdmin: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async(to, from, next) => {
  const isAdmin = true
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin)
  console.log('isAdmin', isAdmin)
  console.log('requiresAdmin', requiresAdmin)

  if(requiresAdmin && !isAdmin) {
    next({name: 'home'})
  } else {
    next()
  }
})

export default router
