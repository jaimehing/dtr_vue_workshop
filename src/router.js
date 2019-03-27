import Vue from 'vue';
import Router from 'vue-router';

import TimeRecords from './views/TimeRecords.vue';
import UserDashboard from './views/UserDashboard.vue';
import UserLeaves from './views/UserLeaves.vue';
import CreateTimeRecord from './views/CreateTimeRecord.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: UserDashboard,
    },
    {
      path: '/time-records',
      name: 'time-records',
      component: TimeRecords,
    },
    {
      name: 'create-time-record',
      path: '/time-records/create',
      component: CreateTimeRecord,
    },
    {
      path: '/leaves',
      name: 'leaves',
      component: UserLeaves,
    },
  ],
});
