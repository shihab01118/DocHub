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
      ash: "#888888",
    },
    screens: {
      xs: "0px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
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
        carousel1: "url('https://i.ibb.co/mR0CXTB/doctor-1.jpg')",
        carousel2: "url('https://i.ibb.co/YdZYv6H/doctor-2.jpg')",
        carousel3: "url('https://i.ibb.co/4tQBpr7/doctor-3.jpg')",
        reliableHands: "url('https://i.ibb.co/Z18VL95/Reliable-Hands.jpg')",
      },
    },
  },
  plugins: [],
};
