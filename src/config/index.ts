
const routes = [
  {
    path:'/login',
    component:'./login/index'
  },
  {
    path:'/',
    component:'../layouts/index',
    // Routes:['./src/config/authorizedRouter'],
    routes:[
      {
        path:'/',
        redirect:'/home',
        // authority:201
      },
      {
        path:'/home',
        component:'./home/index',
        authority:202
      },
      {
        path:'/color',
        component:'./color/index',
        authority:203
      },
      {
        path:'/compass',
        component:'./compass/index',
        authority:204
      },
      {
        path:'/hospital',
        component:'./hospital/index',
        authority:205
      },
      {
        path:'/404',
        component:'./404',
      },
      {
        path:'/alert',
        component:'./alert',
      },
    ]
  },
]

module.exports = {
  routes
}
