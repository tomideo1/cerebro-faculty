import Vue from "vue";
import Router from "vue-router";

//Admin Routes
import Home from "./views/Home.vue";
import Single from "./views/single.vue";

Vue.use(Router);

//   base: process.env.BASE_URL,
const routes = [
    {
    path: "/",
    name: "home",
    component: Home,
    },
    {
        path: "/member",
        name: "single",
        props: true,
        component: Single,
    },
];

const router = new Router({
    mode: "history",
    routes,
    scrollBehavior: function(to) {
        if (to.hash) {
            return {
                selector: to.hash,
            };
        } else {
            return { x: 0, y: 0 };
        }
    },
});

export default router;