/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        // Keep the wave exactly as in Step 1
        waveFront: "waveFront 5s infinite ease-in-out",
        // Keep the “propeller” style rotation from Step 1
        rotatePropeller: "rotatePropeller 10s infinite linear",
      },
      keyframes: {
        // The “propeller” animation from Step 1
        rotatePropeller: {
          "0%": {
            transform: "rotate(0deg) scale(1.2)",
            backgroundPosition: "0% 50%",
          },
          "50%": {
            transform: "rotate(180deg) scale(1.2)",
            backgroundPosition: "50% 50%",
          },
          "100%": {
            transform: "rotate(360deg) scale(1.2)",
            backgroundPosition: "100% 50%",
          },
        },
        // The wave keyframes from Step 1
        waveFront: {
          "0%": {
            clipPath: "path('M-50 60 C10 30, 40 90, 550 60 L550 120 L-50 120 Z')",
          },
          "25%": {
            clipPath: "path('M-50 55 C20 100, 50 20, 550 55 L550 120 L-50 120 Z')",
          },
          "50%": {
            clipPath: "path('M-50 65 C30 10, 60 110, 550 65 L550 120 L-50 120 Z')",
          },
          "75%": {
            clipPath: "path('M-50 50 C15 80, 45 35, 550 50 L550 120 L-50 120 Z')",
          },
          "100%": {
            clipPath: "path('M-50 60 C10 30, 40 90, 550 60 L550 120 L-50 120 Z')",
          },
        },
      },
    },
  },
  plugins: [],
};
