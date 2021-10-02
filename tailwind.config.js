module.exports = {
  purge: {
    enabled: true,
    content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {

    fontFamily: {
      'primary': 'DM Sans, sans-serif',
      'secondary': 'Mulish, sans-serif'
    },

    colors: {
      orange: "#ff7143",
      darkOrange: "#9F3919",
      darkblue: "#5454d4",
      smoothPurple: "#F7F7FB",
      black: "#19191b",
      cardTextBlack: "#1D293F",
      gray: "#696871",
      grayCard: "#F8F8F8",
      grayButton: "#EAE9F2",
      white: "#fff",
      transparent: "transparent",
    },

    extend: {
      padding: {
        30: '30px',
      },
      margin: {
        30: '30px',
      },
      spacing: {
        1.5: '150%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui'),
  ],

  daisyui: {
    styled: true,
    themes: false,
    rtl: false,
  },
}
