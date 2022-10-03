import { createApp } from 'vue'
import Cookies from 'js-cookie'
import App from './App.vue'
import router from './router'

const app = createApp(App)
router.beforeEach((to, from, next) => {
  if (to.meta.verifyAuth) {
    const token = Cookies.get('token')
    console.log(token)
    if (token !== undefined) {
      next()
    } else {
      next({ name: 'login' })
    }
  } else {
    next()
  }
})

app.use(router)
app.mount('#app')
