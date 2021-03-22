import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/:code/:guest?',
      name: 'index',
      component: Index
    }
  ]
})

export default router;
