import ExampleComponent from "./components/ExampleComponent";


require('./bootstrap');

window.Vue = require('vue');

//vue Router
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import {routes} from './routes';

const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'history',

});


Vue.component('example-component', require('./components/ExampleComponent.vue').default);


const app = new Vue({
    el: '#app',
    router,
});
