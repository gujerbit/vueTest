import {createWebHistory, createRouter} from 'vue-router';
import home from '../components/A01.Home.vue';
import about from '../components/A02.About.vue';
import params from '../components/A03.Params.vue';
import child from '../components/A04.Child.vue';
import notFound from '../components/A05.NotFound.vue';
import profile from '../components/childComponent/Profile.vue';
import userInfo from '../components/childComponent/UserInfo.vue';

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: home
    },
    {
        path: '/about',
        name: 'about',
        component: about
    },
    {
        path: '/params',
        name: 'params',
        component: params
    },
    {
        path: '/child',
        name: 'child',
        component: child
    },
    {
        path: '/notFound',
        name: 'notFound',
        component: notFound
    },
    {
        path: '/child/profile',
        name: 'profile',
        component: profile
    },
    {
        path: '/child/userInfo',
        name: 'userInfo',
        component: userInfo
    }
];

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
);

export default router;