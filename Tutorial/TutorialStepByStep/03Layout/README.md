## [Creating Nested Layout Components](https://www.gatsbyjs.org/tutorial/part-three/)

Gatsby plugins are packages that add functionality.  

Layout components are sections shared across multiple pages.  

### Using plugins

[Gatsby Plugin Library](https://www.gatsbyjs.org/plugins/)

Install [Typography.js](https://kyleamathews.github.io/typography.js/) using the [Gatsby Typography.js Plugin](https://www.gatsbyjs.org/packages/gatsby-plugin-typography/).  

#### Install and configure gatsby-plugin-typography

Install the plugin and its dependencies.  

```
$: npm install --save gatsby-plugin-typography react-typography typography typography-theme-fairy-gates
```

`gatsby-config.js` is where you put your plugins and configuration.  

Create `src/utils/typography.js`.  

#### Make some content and style changes

Create `src/pages/index.js`.  

### Creating layout components

Create `src/pages/about.js`.  

Create `src/pages/contact.js`.  

#### Create your first layout component

Create `src/components/layout.js`.  

Change `src/pages/index.js`, `src/pages/about.js` and `src/pages/contacts.js`.  

#### Add a site title

Change `src/components/layout.js`.  

#### Add navigation links between pages

Change `src/components/layout.js`.  
