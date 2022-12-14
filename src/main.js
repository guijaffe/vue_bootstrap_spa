import { createApp } from 'vue'
import App from './App.vue'
/* 
Здесь подключил bootstrap, так же делал команду npm
*/
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
/**
 * Подключил роутер для переключения страниц, так же добавил use
 */
import router from './router'

createApp(App).use(router).mount('#app')