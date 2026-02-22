// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: 'https://rusty.huskey.cc',
	vite: {
		// @ts-ignore
		plugins: [tailwindcss()],
	},
});
