/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(27,34%,59%)",
        secondary: "hsl(52,13%,34%)",
        "title-color": "hsl(0 , 0% , 100%)",
        "text-color": "hsl(0 , 0% , 67%)",
        "bg-color": "hsl(0 , 0% , 8%)",
        "container-bg-color": "hsl(0 , 0% , 6%)",
        "bg-transparent": "hsl(0 , 0% , 0% , 0.75)",
      },
      backgroundImage: {
        home: "url('/images/home-bg.png')",
        body: "url('/images/bg.jpg')",
      },
    },
  },
  plugins: [],
};
