import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../views/Tabs.vue'
import store from '../store/index.js'

const routes = [
  {
    path: '/',
    redirect: '/tabs/start'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/start'
      },
      {
        path: 'start',
        component: () => import('@/views/Start.vue')
      },
      {
        path: '/tabs/things',
        component: () => import('@/views/things/Things.vue'),
        meta: { auth: true },
        children: [
          {
            path: '/tabs/things/add',
            component: () => import('@/views/things/AddThing.vue')
          },
          {
            path: '/tabs/things/lamps',
            component: () => import('@/views/things/LampsList.vue')
          },
          {
            path: '/tabs/things/lamps/:id',
            component: () => import('@/views/things/LampDetails.vue')
          },
          {
            path: '/tabs/things/lamps/:id/edit',
            component: () => import('@/views/things/EditThing.vue')
          }
        ]
      },
      { path: '/login', component: () => import('@/views/auth/LoginPage.vue'), meta: { notAuth: true } },
      {
        path: 'user',
        component: () => import('@/views/User.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(function(to, _, next) {
  if(to.meta.auth  && !store.state.auth.token) {
    next('/login')
  } else if (to.meta.notAuth && store.state.auth.token) {
    next('/things')
  } else {
    next();
  }
})

export default router
