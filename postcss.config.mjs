const config = {
  plugins: ["@tailwindcss/postcss"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Ensure all relevant files are included
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  
};

export default config;
