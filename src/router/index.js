import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home";
import Blog from "@/views/Blog/index";
import Login from "@/views/User/login";
import Admin from "@/views/Admin/index";

const routes = [
    {
        path: '/',
        alias: '/home',
        name: 'home',
        component: Home,
    },
    {
        path: '/blog',
        name: 'blog.index',
        component: Blog,
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/admin',
        name: 'admin',
        component: Admin
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router