import { createRouter, createWebHistory, routerKey, useRoute} from "vue-router";
import Home from '../views/home.vue';
import About from '../views/about.vue';
import User from '../views/user.vue';
import notFound from '../views/notFound.vue';
import getRequest from '../views/getRequest.vue';
import getRequestAsync from '../views/getRequestAsync.vue';
import getRequestHeaders from '../views/getRequestHeaders.vue';
import getRequestHandle from '../views/getRequestHandle.vue';
import getRequestPost from '../views/getRequestPost.vue';

const routes = [
    {
        name:'Home',
        path:'/',
        alias:'/home',
        component: Home
    },
    {
        name:'About',
        path:'/about',
        alias:'/abou',
        component: About,
        meta:{
            title:"AboutUs"
        }
    },
    {
        name:'User',
        path:'/user/:id',
        component: User,
        props:true
    },
    {
        name:'getRequest',
        path:'/testApi',
        component: getRequest,
        meta:{
            title:"getAPI"
        }
    },
    {
        name:'getRequestAsync',
        path:'/testApiAsync',
        component: getRequestAsync,
        meta:{
            title:"getAPIAsync"
        }
    },
    {
        name:'getRequestHeaders',
        path:'/testApiHeaders',
        component: getRequestHeaders,
        meta:{
            title:"getAPIHeaders"
        }
    },
    {
        name:'getRequestHandle',
        path:'/testApiHandle',
        component: getRequestHandle,
        meta:{
            title:"getAPIHandle"
        }
    },
    {
        name:'getRequestPost',
        path:'/testApiPost',
        component: getRequestPost,
        meta:{
            title:"getAPIPost"
        }
    },
    {
        name:'NotFound',

        // path pour tout les autres possibilites
        path:'/:pathMatch(.*)',
        component:notFound
    }
];

const router = createRouter({
    history: createWebHistory(), routes
});

router.afterEach((to,from)=>{
    console.log(from,to);
    document.title = to.meta.title 
})

export default router; 