/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sa_bg: "#f5f2ee",
        sa_ink: "#1f1f1f",
        sa_muted: "#666666",
        sa_accent: "#b48a5a",   // pick from your logo brown
        sa_line: "#ded4c6",
      },
      // fontFamily: {
      //   sans: ["Inter", "system-ui", "sans-serif"],
      //   display: ["DM Serif Display", "serif"],
      // },
  
  fontFamily: {
    sans: ["General Sans", "system-ui", "sans-serif"],
    display: ["Fraunces", "serif"]
  }


    },
  },
  plugins: [],
};
  