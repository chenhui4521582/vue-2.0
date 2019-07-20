const routes = [
  { path: '/', redirect: '/recommend' },
  { path: '/ranking', component: () => import('../pages/ranking/ranking') },
  { path: '/recommend', component: () => import('../pages/recommend/recommend') },
  {
    path: '/singer',
    component: () => import('../pages/singer/singer'),
    children: [
      {
        path: ':id',
        component: () => import('../pages/singer/singer-detail')
      }

    ]
  },
  { path: '/search', name: 'search', component: () => import('../pages/search/search') }
];

export default routes
