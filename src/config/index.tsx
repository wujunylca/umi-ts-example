
const routes = [
  {
    path:'/login',
    component:'./login/index'
  },
  {
    path:'/',
    component:'../layouts/index',
    Routes:['./src/config/authorizedRouter'],
    routes:[
      {
        path:'/',
        redirect:'/home'
      },
      {
        path:'/home',
        component:'./home/index'
      }
    ]
  }
]

// export default {
//   routes
// }
module.exports = {
  routes
}
