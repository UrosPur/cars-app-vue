import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AppCars from './pages/AppCars.vue'
import AddCar from './pages/AddCar.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)


const routes = [

    {path:'/',redirect:'/cars'},
    { path:'/cars', component: AppCars, name:'cars'},
    { path:'/add', component: AddCar, name:'add'},
    { path: '/edit/:id', component: AddCar, name: 'edit'}

]


const router = new VueRouter({
    routes,
    mode:'history'
});

new Vue({
    router,
  render: h => h(App)
}).$mount('#app')
