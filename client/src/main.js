import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { clickOutside } from './utils'

const app = createApp(App)

app.directive('click-outside', clickOutside)

app.use(store)
app.use(router)

app.mount('#app')
