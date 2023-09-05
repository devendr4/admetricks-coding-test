/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        '5%': '5%',
        '10%': '10%',
        '20%': '20%',
        '35%': '35%',
        '30%': '30%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
        '65%': '65%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%',
        '95%': '95%',
        '100%': '100%'
      },
      colors: {
        background: '#0A2540',
        cyan: '#00D4FF'
      }
    }
  },
  plugins: []
}
