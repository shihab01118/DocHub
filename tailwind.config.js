/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#01B2B7",
      dark: "#2C2D3F",
      white: "#FFFFFF",
      "gray-light": "#f3f4f6",
      error: "#E91E63",
      sky: "#03B8D7",
    },
    screens: {
      xs: "0px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px"
    },
    fontFamily: {
      poppins: "'Poppins', sans-serif",
    },
    extend: {
      backgroundImage: {
        login:
          "url('https://images.unsplash.com/photo-1533283986565-dcb510874ba8')",
        signup:
          "url('https://img.freepik.com/free-photo/beautiful-view-lake-surrounded-by-mountains-with-glowing-sun-background_181624-24090.jpg')",
        carousel1:
          "url('https://mediplus-nextjs.vercel.app/_next/static/media/slider2.25fad811.jpg')",
        carousel2:
          "url('https://mediplus-nextjs.vercel.app/_next/static/media/slider.f76040ee.jpg')",
        carousel3:
          "url('https://mediplus-nextjs.vercel.app/_next/static/media/slider3.5dc7b668.jpg')",
      },
    },
  },
  plugins: [],
};
