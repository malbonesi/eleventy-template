const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    require('tailwindcss'),
    purgecss({
      content: [
        'src/**/*.njk'
      ]
    })
  ]
}
