/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")

module.exports = {
  content: ["./src/**/*.tsx", "./*.html"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"]
    },

    extend: {
      backgroundImage: {
        background: "url('/background.png')",
        "nlw-gradient":
          "linear-gradient(69.86deg, #9572FC 25.08%, #43E7AD 40.94%, #E1D55D 90.57%)",
        "game-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)"
      }
    }
  },
  plugins: [
    plugin(function (helpers) {
      dataStateVariant("checked", helpers)
      dataStateVariant("unchecked", helpers)
      dataStateVariant("on", helpers)
      dataStateVariant("off", helpers)
      dataVariant("placeholder", helpers)
    })
  ]
}

function dataStateVariant(state, { addVariant, e }) {
  addVariant(`data-state-${state}`, ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(
        `data-state-${state}${separator}${className}`
      )}[data-state='${state}']`
    })
  })
}

function dataVariant(attribute, { addVariant, e }) {
  addVariant(`data-${attribute}`, ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(
        `data-${attribute}${separator}${className}`
      )}[data-${attribute}]`
    })
  })
}
