/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary-black": "#1A232E"
            },
            fontFamily: {
                "eudoxus": "Eudoxus Sans"
            }
        },
    },
    plugins: [],
}

