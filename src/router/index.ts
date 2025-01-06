import { createRouter , createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import ViewPage from '@/pages/ViewPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'

const router = createRouter( {
    history: createWebHistory( import.meta.env.BASE_URL ),
    routes: [
        {
            path: '/',
            name: 'home-page',
            component: HomePage,
            meta: { title: 'vuejs app' }
        },
        {
            path: '/view',
            name: 'view-page',
            component: ViewPage,
            meta: { title: 'vuejs app | view' }
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found-page',
            meta: { title: '404 Page Not Found' },
            component: NotFoundPage
        }
    ]
} )

// for dynamic meta
router.beforeEach( ( to , from , next ) => {
    document.title = to.meta.title as string
    next()
} )

export default router
