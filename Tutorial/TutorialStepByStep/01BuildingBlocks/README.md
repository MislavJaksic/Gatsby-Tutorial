## [Get to Know Gatsby Building Blocks](https://www.gatsbyjs.org/tutorial/part-one/)

### Using Gatsby starters

`Starter` is a partially built site.  

### Familiarizing with Gatsby pages

Create `src/pages/index.js`.  

`gatsby develop` has hot reloading.  

#### Wait… HTML in our JavaScript?

`JSX` is `HTML-in-JS`, an extension of `JavaScript` for `React`.  

```
JSX:                                JS:
import React from "react"           import React from "react"
export default function Home() {    export default function Home() {
  return <div>Hello world!</div>      return React.createElement("div", null, "Hello world!")
}                                   }
```

### Building with components

Gatsby is built on `React`.  
Gatsby components are `React` components.  
CSS, HTML and JavaScript live in the same file.

#### Using page components

`React` component defined in `src/pages/*.js` will become a page.  

Create `src/pages/index.js`.  

```
http://localhost:8000/about/
```

#### Using sub-components

Break components into reusable pieces.  
Put them into `src/componenets`.  

```
/src/components/Comp-File-Name.js:            src//pages/Page-File-Name.js:
export default function Comp-Name(props) {    import Comp-Name from "../components/Comp-File-Name.js"
  return <h1>{props.Prop-Key}</h1>            export default function Main-Func() {
}                                               return (
                                                  <Comp-Name Prop-Key="Prop-Value-1" />
                                                  <Comp-Name Prop-Key="Prop-Value-2" />
                                                )
                                              }
```

#### What are “props”?

Props are properties, data, arguments, supplied to `React` components.

#### Using layout components

Layout components are for sections of a site that you want to share across multiple pages.   
Layouts include header, footer, navigation and many other.  

### Linking between pages

Use the `<Link to="/Link-Path/">Link-Content</Link>` component to link to Gatsby components.  
For links external to Gatsby, use `<a>`.  

#### Using the <Link /> component

Create `src/pages/contact.js`.  

### Deploying a Gatsby site

Gatsby has no server or database.  
Gatsby produces a directory of static HTML and JavaScript files.  
To deploy use a static site hosting service.  

```
$: gatsby build
```
