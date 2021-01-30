## [Introduction to Styling in Gatsby](https://www.gatsbyjs.org/tutorial/part-two/)

### Using global styles

The site’s typography and background colors.  

### Creating global styles with standard CSS files

Use a global `.css` stylesheet.  

#### Create a new Gatsby site

Create `/src/styles/global.css`.  
`/gatsby-browser.js` is where you define a global style among other things.  

A better way to add global styles is with a shared layout component.  

### Using component-scoped CSS

#### CSS Modules

A CSS Module is a CSS file in which all class names and animation names are scoped locally by default.  
There are no selector name collisions.  

##### Build a new page using CSS Modules

Create `src/components/container.js`.  
Create `src/components/container.module.css`.  
Create `about-css-modules.js`.  

##### Style a component using CSS Modules

Create `src/pages/about-css-modules.module.css`.  

#### CSS-in-JS

CSS-in-JS is a component-oriented styling approach.
There are many different CSS-in-JS libraries.  
See [Emotion](https://www.gatsbyjs.org/docs/emotion/) and [Styled Components](https://www.gatsbyjs.org/docs/styled-components/).  

### Other CSS options

You can use many other styling options.  
