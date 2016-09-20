import Vue from 'vue';
import VueValidator from 'vue-validator';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import app from './app.vue';

Vue.use(VueValidator);
Vue.use(VueResource);
Vue.use(VueRouter);

var vm = new Vue({
    el:'body',
    components:{
        app
    }
});

window.vm = vm;