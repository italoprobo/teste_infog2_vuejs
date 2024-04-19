import { createWebHistory, createRouter } from 'vue-router'
import { Auth } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginPage.vue')
    },
    {
      path: '/utility',
      name: 'utility',
      component: () => import('../views/UtilityPage.vue'),
      meta: {
        auth: true
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta?.auth) {
    const auth = Auth()
    if(auth.token && auth.user) {
      if (auth.token === auth.user.token) {
        next()
      }
    } else {
      next({name: 'login'})
    }
    console.log(to.name);
  } else {
    next()
  }
})

export default router