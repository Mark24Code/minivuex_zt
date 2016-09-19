import Vue from 'vue';
import VueValidator from 'vue-validator';
import VueResource from 'vue-resource';
import app from './app.vue';

Vue.use(VueValidator);
Vue.use(VueResource);
var vm = new Vue({
    el:'body',
    components:{
        app
    }
});

window.vm = vm;