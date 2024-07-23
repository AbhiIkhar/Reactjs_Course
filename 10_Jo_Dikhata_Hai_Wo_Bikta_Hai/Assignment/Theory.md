# All ways of writing css ?

- Vainila Css, scss , sass
- framework like bootstrap , material UI, chakra UI
- styled component and Tailwind css

# How do we configure TailWind?

- for parcel
- run npm install -D tailwindcss npx tailwindcss init
- content: ["./src/**/*.{html,js}"],(add all the your template )
- create .postcssrc put below code :

```
{
  "plugins": {
    "tailwindcss": {}
  }
}
```

- Add to index.css below code

```@tailwind base;
@tailwind components;
@tailwind utilities;
```

- run ur app

# In tailwind.config.js, what does all the keys mean (content, theme, extend plugins)?

- content : The content section is where you configure the paths to all of your HTML templates, JS components, and any other files that contain Tailwind class names.
- theme : To change the default theme provided by tailwind css , we can write our own custom theme like borderRadius{

}

- extend : In extend if we want preserve default value for the theme but also want's to add new value then we can put it in extend.

- plugin : It let's u add new styles in tailwinds instead inject in ur userstyle using js instead of css.

```
const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    plugin(function({ addUtilities, addComponents, e, config }) {
      // Add your custom styles here
    }),
  ]
}

first you have to import tailwindcss/plugin in your file.
```

# Why do we have .postcssrc file?

- The .postcssrc file, often named postcss.config.js, is a
  configuration file for PostCSS. PostCSS is a tool for
  transforming styles with JavaScript plugins, and it is commonly
  used in conjunction with build tools like webpack or parcel for
  processing and optimizing CSS.
