import type { CapacitorConfig } from '@capacitor/cli';


const config: CapacitorConfig = {
	appId  : 'com.example.app',
	appName: 'ionic-angular-multi-locale-ssr',
	webDir : 'dist/browser',
	plugins: {
		EdgeToEdge: {
			backgroundColor: '#ffffff',
		},
		StatusBar: {
			overlaysWebView: true,
		},
	},
};

export default config;
