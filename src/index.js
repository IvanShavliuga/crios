import Vue from 'vue';
import appindex from './appindex';

Vue.config.devtools = true;

new Vue({
    el: '#app',
    data: {
    	Hello:"Hello world" 
    },
    components: {
      appindex: appindex    
    }
});
