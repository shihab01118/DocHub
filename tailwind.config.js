/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#3A4256",
      secondary: "#0FCFEC",
      white: "#FFFFFF",
      "gray-light": "#f3f4f6",
      error: "#E91E63",
      sky: "#03B8D7",
    },
    screens: {
      xs: "320px",
      sm: "445px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        login:
          "url('https://images.unsplash.com/photo-1533283986565-dcb510874ba8')",
        signup:
          "url('https://img.freepik.com/free-photo/beautiful-view-lake-surrounded-by-mountains-with-glowing-sun-background_181624-24090.jpg')",
      },
    },
  },
  plugins: [],
};
