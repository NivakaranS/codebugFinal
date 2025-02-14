/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        overlayBlack: 'rgba(0, 0, 0, 0.5)',
        overlayWhite: 'rgba(255, 255, 255, 0.7)',
        customGray: '#808080'
      },
    },
  },
  plugins: [],
};
