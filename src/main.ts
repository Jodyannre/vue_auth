import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'
import './firebase/firebaseConfig'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(App)

app.use(router).use(VueCookies,{expires: '1d'}).mount('#app')



// Cookies
/*
    $cookies.set(key, value)
    $cookies.get(key)
    $cookies.remove(key)
    $cookies.keys()
    $cookies.isKey(key)
*/

// Sessuibs
/*
    $session.start()
    $session.set(key, value)
    $session.get(key)
    $session.remove(key)
    $session.id()
    $session.renew()
    $session.destroy()
*/