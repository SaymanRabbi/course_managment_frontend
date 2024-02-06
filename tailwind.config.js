/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        error: "#DC2626",
        success: "#059669",
        bgPrimary: "#322A58",
        bgSecondary: "#170F38",
        link: "#1976d2",
        textPrimary: "#FFFFFF",
        textSecondary: "#eee0ff",
        rgbFrom: "#384fde",
        rgbTo: "#985cf0",
      },
    },
  },
  plugins: [],
};
