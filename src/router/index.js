import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/scan",
        name: "Home",
        component: Home,
    },
    {
        path: "/",
        name: "Login",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Login.vue"),
    },
    {
        path: "/audience",
        name: "Audience",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Audience.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
