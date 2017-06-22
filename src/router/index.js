import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/Home';
import ComponentView from '@/components/ComponentView';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/:category/:slug',
      component: ComponentView,
    },
  ],
});
