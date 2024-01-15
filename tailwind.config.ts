import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			//bg-
			backgroundColor: {
				twitter: "#1e9bf0",
				line: "#06c252",
			},
			//text-
			fontSize: {
				"1em": "1em",
				"1.1em": "1.1em",
				"1.2em": "1.2em",
				"1.3em": "1.3em",
				"1.4em": "1.4em",
				"1.5em": "1.5em",
				"1.6em": "1.6em",
				"1.7em": "1.7em",
				"1.8em": "1.8em",
				"1.9em": "1.9em",
				"2em": "2em",
				"3vw": "3vw",
				"3.5vw": "3.5vw",
				"4vw": "4vw",
				"4.5vw": "4.5vw",
				"5vw": "5vw",
				"5.5vw": "5.5vw",
				"6vw": "6vw",
				"6.5vw": "6.5vw",
				"7vw": "7vw",
				"7.5vw": "7.5vw",
				"8vw": "8vw",
				"8.5vw": "8.5vw",
				"9vw": "9vw",
				"9.5vw": "9.5vw",
				"10vw": "10vw",
			},
			//leading
			lineHeight: {
				"1em": "1em",
				"1.25em": "1.25em",
				"1.5em": "1.5em",
			},
		},
	},
	plugins: [],
};
export default config;
