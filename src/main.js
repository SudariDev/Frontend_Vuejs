import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router/router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App)
app.use(VueSweetalert2);
app.use(store).use(router).mount('#app')


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')