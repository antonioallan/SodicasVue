import Home from './pages/home/Home.vue'
import Login from './pages/login/Login.vue'
import Post from './pages/post/Post.vue'
export const routes = [

    { path: '', name : 'home', component: Home },
    { path: '/login', name : 'login', component: Login },
    { path: '/dica/:id', name : 'dica', component: Post },
    { path: '*', component: Home }

];