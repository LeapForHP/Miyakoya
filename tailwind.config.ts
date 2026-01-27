/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'mincho': [
            '"Noto Serif JP"',
            '"游明朝"',
            '"Yu Mincho"',
            '"Hiragino Mincho ProN"',
            '"Hiragino Mincho Pro"',
            '"HGS明朝E"',
            '"MS PMincho"',
            'serif'
          ],
          'songti': [
            '"Noto Serif SC"',
            '"Songti SC"',
            '"STSong"',
            '"SimSun"',
            'serif'
          ],
        },
      },
    },
    plugins: [],
  }