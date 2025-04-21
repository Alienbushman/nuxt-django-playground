import {defineNuxtPlugin} from '#app';
import {createVuetify} from 'vuetify';
import 'vuetify/styles';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labsComponents from 'vuetify/labs/components'

import {aliases, mdi} from "vuetify/iconsets/mdi";
import '@mdi/font/css/materialdesignicons.css'

export default defineNuxtPlugin((nuxtApp) => {
	const vuetify = createVuetify({
		components: {
			...components,
			...labsComponents

		},
		directives,
		theme: {
			defaultTheme: 'dark',
			themes: {
				dark: {
					dark: true,
					colors: {
						primary: '#2196F3',   // Bright Blue
						secondary: '#424242', // Dark Grey
						accent: '#FF4081',    // Pink
						error: '#FF5252',     // Red
						info: '#2196F3',      // Blue
						success: '#4CAF50',   // Green
						warning: '#FFC107',   // Amber
						background: '#121212', // Dark background
						surface: '#212121',    // Slightly lighter dark
						'on-surface': '#FFFFFF', // White text for dark theme
						'primary-darken-1': '#1976D2',
						'secondary-darken-1': '#323232',
					}
				},
				light: {
					dark: false,
					colors: {
						primary: '#1976D2',   // Slightly darker blue
						secondary: '#424242', // Grey
						accent: '#E91E63',    // Pink
						error: '#F44336',     // Red
						info: '#2196F3',      // Blue
						success: '#4CAF50',   // Green
						warning: '#FB8C00',   // Orange
						background: '#FFFFFF', // White background
						surface: '#F5F5F5',    // Light grey surface
						'on-surface': '#212121', // Dark text for light theme
						'primary-darken-1': '#1565C0',
						'secondary-darken-1': '#323232',
					}
				}
			}
		},
		icons: {
			defaultSet: 'mdi',
			aliases,
			sets: {
				mdi,
			},
		},
	});

	nuxtApp.vueApp.use(vuetify);
});
