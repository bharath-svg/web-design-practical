/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        fade: "fade 9s infinite",
        "fade-slow": "fade 9s 3s infinite",
        "fade-slower": "fade 9s 6s infinite",
        slideText: "slideText 8s linear infinite",
        "slideText-slow": "slideText 8s 3.5s linear infinite",
        "slideText-slower": "slideText 8s 5.5s linear infinite",
        "slideText-slowest": "slideText 8s 8.5s linear infinite",
        "slideText-turtle": "slideText 10s 9.2s linear infinite",
        "slideText-turtle-slow": "slideText 14s 11.6s linear infinite",
      },
      keyframes: {
        fade: {
          "20%, 40%": { opacity: 1 },
          "60%, 80%, 100%": { opacity: 0 },
        },
        slideText: {
          "10%, 20%, 30%, 100%": {
            opacity: 0,
            visibility: "hidden",
          },
          "0%": {
            width: 0,
            opacity: 0,
            visibility: "hidden",
          },
          "5%, 8%": {
            width: "100%",
            opacity: 1,
            visibility: "visible",
          },
        },
      },
      colors: {
        "zeksta-red": "#cb020c",
        "zeksta-black": "#0f1727",
        "zeksta-black-200": "rgba(22 22 23 / var(--tw-bg-opacity))",
        "gray-50": "rgba(102, 112, 133, 1)",
      },
    },
  },
  plugins: [],
};
