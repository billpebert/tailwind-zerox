module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {

    fontFamily: {
      'sans': 'DM Sans, sans-serif'
    },

    colors: {
      orange: "#ff7143",
      darkblue: "#5454d4",
      black: "#19191b",
      gray: "#696871",
      white: "#fff",
      transparent: "transparent",
    },

    extend: {
      padding: {
        30: '30px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
