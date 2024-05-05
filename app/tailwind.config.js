/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "var(--primary-100)",
        "primary-300": "var(--primary-300)",
        "primary-500": "var(--primary-500)",
        "primary-700": "var(--primary-700)",
        "primary-900": "var(--primary-900)",
        "secondary-100": "var(--secondary-100)",
        "secondary-300": "var(--secondary-300)",
        "secondary-500": "var(--secondary-500)",
        "secondary-700": "var(--secondary-700)",
        "secondary-900": "var(--secondary-900)",
      },
      fontFamily: {
        "font-large": "var(--font-large-font-family)",
        "font-medium": "var(--font-medium-font-family)",
        "font-small": "var(--font-small-font-family)",
      },
    },
  },
  plugins: [],
};
