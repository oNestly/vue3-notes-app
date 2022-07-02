import { createRouter, createWebHistory } from 'vue-router';

const routerHistory = createWebHistory('/notes/');

import HomePage from '@/pages/home.vue';
import AboutPage from '@/pages/about.vue';
import NotFoundPage from '@/pages/notFound.vue';

const router = createRouter({
	history: routerHistory,
	routes: [
		{
			path: '/',
			name: 'HomePage',
			component: HomePage,
		},
		{
			path: '/about',
			name: 'AboutPage',
			component: AboutPage,
		},
		{
			path: '/:catchAll(.*)',
			name: 'NotFoundPage',
			component: NotFoundPage,
		},
	],
});

export default router;
