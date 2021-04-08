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
        path: '/about/:id/data/:name',
        name: 'about',
        component: about,
        props: true
    },
    {
        path: '/params',
        name: 'params',
        component: params
    },
    {
        path: '/child',
        name: 'child',
        component: child,
        children: [
            {
                path: '/child/profile',
                component: profile
            },
            {
                path: '/child/userInfo',
                component: userInfo
            }
        ]
    },
    {
        path: '/:catchAll(.*)',
        name: 'notFound',
        component: notFound
    }
];

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
);

export default router;