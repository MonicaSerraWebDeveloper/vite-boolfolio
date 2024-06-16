import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import PortfolioCard from './pages/PortfolioCard.vue';

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        }, 
        {
            path: '/portfolio',
            name: 'portfolio',
            component: PortfolioCard
        }

    ]
})

export { router };