import ReactivityTransform from "@vue-macros/reactivity-transform/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxtjs/tailwindcss", "nuxt-primevue"],
	app: {
		head: {
			meta: [
				// 防止移动设备点击输入框放大页面
				{
					name: "viewport",
					content:
						"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
				},
			],
		},
	},
	css: [
		// 默认 css 配置
		"@/assets/scss/global.scss",
		// 主题 css
		"primevue/resources/themes/aura-light-teal/theme.css",
	],
	vite: {
		plugins: [
			// $ref 支持
			ReactivityTransform(),
		],
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import '@/assets/scss/additional.scss';`,
				},
			},
		},
	},
	primevue: {
		cssLayerOrder: "default, tailwind-base, primevue, tailwind-utilities",
	},
	devtools: { enabled: true },
	// 开发配置
	$development: {
		devtools: { enabled: true },
		tailwindcss: {
			exposeConfig: true,
			// 开放 url/_tailwind
			viewer: true,
		},
	},
	// 生产配置
	$production: {
		devtools: { enabled: false },
		tailwindcss: {
			exposeConfig: true,
			// 开放 url/_tailwind
			viewer: false,
		},
	},
});
