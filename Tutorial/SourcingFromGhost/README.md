## [Sourcing from Ghost](https://www.gatsbyjs.org/docs/sourcing-from-ghost/)

`Ghost` is a headless Content Management System (CMS).  

### Quick start

`Gatsby Starter Ghost` repository has queries and templates.  

[Repository](https://github.com/tryghost/gatsby-starter-ghost)  
[Demo](https://gatsby.ghost.org/)  

### Install and setup

```
$: npm install --save gatsby-source-ghost
```

#### Configuration

Create `gatsby-config.js`.  

### Generating pages

Use the `createPages` API in `gatsby-node.js`.  
`createPages` gets `Ghost` data with `GraphQL`.  

Create `gatsby-node.js`.  

### Outputting data

Create `templates/post.js`.  
