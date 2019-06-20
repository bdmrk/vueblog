import ExampleComponent from "./components/ExampleComponent";


require('./bootstrap');

window.Vue = require('vue');

//vue Router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//add router.js
import {routes} from './routes';

const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'history',

});


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-main', require('./components/admin/AdminMaster.vue').default);

//v-form

import { Form, HasError, AlertError } from 'vform'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

//to use form globally

window.Form = Form;


// ES6 Modules or TypeScript

import swal from 'sweetalert2'

const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});


window.toast = toast;


//to use vuex

import Vuex from 'vuex'
Vue.use(Vuex)

// Make sure to call Vue.use(Vuex) first if using a module system

import storeData from './store/index'
const store = new Vuex.Store({
    state: {
        storeData
    }
})



const app = new Vue({
    el: '#app',
    router,

});
