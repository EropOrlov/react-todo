/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      backgroundImage: {
        'todo-icon': "url('../public/todo_icon.png')",
      }
    },
  },
  plugins: [],
}

