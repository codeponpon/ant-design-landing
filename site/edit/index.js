module.exports = {
  routes: {
    path: '/',
    component: './template/index',
    childRoutes: [
      {
        path: 'index-th',
        component: './template/index',
      },
    ],
  },
};
