// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-04-21',
	devtools: {enabled: true},
	css: ['vuetify/styles'],
	modules: [
		'@pinia/nuxt'
	],
	build: {
		transpile: ['vuetify', '@mdi/font/css/materialdesignicons.css'],
	},
	// Setting SSR to true or false
	ssr: true,
	vite: {
		define: {
			'process.env.DEBUG': false,
		},
		ssr: {
			noExternal: ['vuetify'],
		},
	},
	app: {
		head: {
			title: 'Bootstrapped project',
			titleTemplate: '%s - Giving you a basic project to get started with',

			link: [
				{
					rel: 'icon',
					type: 'image/jpeg',
					href: '/AI.jpg',
					sizes: '1024x1024'
				}
			],
			meta: [
				{name: 'getting started', content: 'A basic getting started project'}
			]
		}
	},

	runtimeConfig: {
		apiBaseUrl:"getting-started-backend:8000"
		// apiBaseUrl:"localhost:8000"
	},


})