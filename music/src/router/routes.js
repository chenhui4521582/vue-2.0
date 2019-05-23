const routes = [
  { path: '/', redirect: '/recommend' },
  { path: '/ranking', name: 'ranking', component: () => import('../pages/ranking/ranking') },
  { path: '/recommend', name: 'recommend', component: () => import('../pages/recommend/recommend') },
  { path: '/singer', name: 'singer', component: () => import('../pages/singer/singer') },
  { path: '/search', name: 'search', component: () => import('../pages/search/search') }
];

export default routes
