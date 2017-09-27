import Home from './pages/home/Home.vue'
import Login from './pages/login/Login.vue'
import Area from './pages/area/Area.vue'
import Post from './pages/post/Post.vue'
import Sigup from './pages/sigup/Sigup.vue'
import Acesso from './pages/acesso/Acesso.vue'
export const routes = [

    { path: '', name : 'home', component: Home },
    { path: '/login', name : 'login', component: Login },
    { path: '/dica/:id', name : 'dica', component: Post },
    { path: '/sigup', name : 'sigup', component: Sigup },
    { path: '/area', name : 'area', component: Area },
    { path: '/acesso', name : 'acesso', component: Acesso },
    { path: '*', component: Home }

];