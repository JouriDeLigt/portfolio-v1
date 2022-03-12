module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Space Grotesk", "Lato"],
    },
    extend: {
      colors: {
        jl_red: "#ee1b49",
        jl_black: "#08080F",
      },
    },
  },
  plugins: [],
};
