const { text } = require("stream/consumers");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/mdx-components.tsx",
        "src/content/**/*.mdx",
    ],

    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        "code::before": {
                            content: '""',
                        },
                        "code::after": {
                            content: '""',
                        },
                    },
                },
                quoteless: {
                    css: {
                        "blockquote p:first-of-type::before": { content: "none" },
                        "blockquote p:first-of-type::after": { content: "none" },
                    },
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
                display: ["var(--font-calsans)"],
            },
            backgroundImage: {
                "gradient-radial":
                    "radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
            },
            animation: {
                "fade-in": "fade-in 3s ease-in-out forwards",
                "title-text": "title-text 3s ease-out forwards",
                "fade-left": "fade-left 3s ease-in-out forwards",
                "fade-right": "fade-right 3s ease-in-out forwards",
                "title-svg": "title-svg 3s ease-out forwards",
				'gradient-change': 'gradient-change 5s infinite',
            },
            keyframes: {
				'gradient-change': {
					'0%': { '--tw-gradient-stops': 'red, orange' },
					'50%': { '--tw-gradient-stops': 'yellow, green' },
					'100%': { '--tw-gradient-stops': 'blue, violet' },
				  },
                "fade-in": {
                    "0%": {
                        opacity: "0%",
                    },
                    "75%": {
                        opacity: "0%",
                    },
                    "100%": {
                        opacity: "100%",
                    },
                },
                "fade-left": {
                    "0%": {
                        transform: "translateX(100%)",
                        opacity: "0%",
                    },

                    "30%": {
                        transform: "translateX(0%)",
                        opacity: "100%",
                    },
                    "100%": {
                        opacity: "0%",
                    },
                },
                "fade-right": {
                    "0%": {
                        transform: "translateX(-100%)",
                        opacity: "0%",
                    },

                    "30%": {
                        transform: "translateX(0%)",
                        opacity: "100%",
                    },
                    "100%": {
                        opacity: "0%",
                    },
                },
				
                "title-text": {
                    "0%": {
                        "line-height": "0%",
                        "letter-spacing": "0.25em",
                        opacity: "0",
                    },
                    "25%": {
                        "line-height": "0%",
                        opacity: "0%",
                    },
                    "80%": {
                        opacity: "100%",
                    },

                    "100%": {
                        "height": "100%",
                        opacity: "100%",
                    },
                },
                "title-svg": {
                    "0%": {
                        opacity: "0",
                        text: "0%",
                    },
                    "25%": {
                        opacity: "0",
                    },
                    "80%": {
                        opacity: "100%",
                    },
                    "100%": {
                        text: "100%",
                        opacity: "100%",
                    },
                },
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("tailwindcss-debug-screens"),
    ],
}