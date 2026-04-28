/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#00A8FF",
          cyan: "#00D4FF",
          green: "#00FF9D",
          dark: "#060D1F",
          darker: "#040B18",
          card: "#0A1628",
          border: "#1A2A45",
          muted: "#8899BB",
        },
      },

      fontFamily: {
        heading: ["'Syne'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },

      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse at 70% 50%, rgba(0,168,255,0.08) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(0,212,255,0.05) 0%, transparent 50%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(0,168,255,0.08) 0%, rgba(0,212,255,0.03) 100%)",
        "cta-gradient":
          "linear-gradient(90deg, #00A8FF 0%, #00D4FF 50%, #00FF9D 100%)",
      },

      animation: {
        marquee: "marquee 5s linear infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        float: "float 6s ease-in-out infinite",
        pulse2: "pulse2 2s ease-in-out infinite",
      },

      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },

        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },

        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },

        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },

        pulse2: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
    },
  },

  plugins: [],
};