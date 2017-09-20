import Home from './pages/home/Home.vue'
import Login from './pages/login/Login.vue'
import Gerenciador from './pages/gerenciador/Gerenciador.vue'
import Post from './pages/post/Post.vue'
export const routes = [

    { path: '', name : 'home', component: Home },
    { path: '/login', name : 'login', component: Login },
    { path: '/dica/:id', name : 'dica', component: Post },
    { path: '/area', name : 'area', component: Gerenciador },
    { path: '*', component: Home }

];