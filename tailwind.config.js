/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                background_color: "#F8F8F8",
                text_color: "#333333",
                accent_color: "#FFA500",
            },
            backgroundImage: {
                "hero-image":
                    "url('./assets/mike-kenneally-tNALoIZhqVM-unsplash.jpg')",
            },
            scale: {
                "-100": "-1",
            },
            fontFamily: {
                poppins: ['"Poppins"', "sans-serif"],
                roboto: ['"Roboto"', "sans-serif"],
            },
        },
    },
    plugins: [],
};
