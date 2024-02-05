const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
    mode: "jit",
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                trueGray: colors.neutral,
            },
            fontFamily: {
                montserrat: ["Montserrat", 'sans-serif'],
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
                stock: [defaultTheme.fontFamily.sans],
            },
            keyframes: {
                popOut: {
                    '0%, 100%': { transform: 'scale(1)', opacity: 1 },
                    '50%': { transform: 'scale(1.05)', opacity: 1 },
                },
            },
            animation: {
                popOut: 'popOut 1s ease-in-out forwards',
            },
        },
    },
    variants: {
        extend: {
            transform: ['hover'],
        },
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
};
