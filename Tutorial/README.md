## [GatsbyJS](https://www.gatsbyjs.org/)

### Install

Install `Node.js`.  

```
# Note: npm comes with Node.js
$: npm install -g gatsby-cli
$: gatsby telemetry --disable
```

[Installation](Tutorial/TutorialStepByStep/00Setup)  

### Create

View [Starters](Starters), partially built sites.  
View [Plugins](Plugins) for your site.  

```
$: gatsby new Project-Name Starter-Url
$: cd Project-Name
$: gatsby develop
# Note: visit http://localhost:8000
```

[QuickStart](Tutorial/TutorialStepByStep/00Setup)  

### Publish and deploy

Site files are built in the `/public` directory.  

```
$: gatsby build

$: gatsby serve
```

Deploy on:
* [GitHub Pages](Tutorial/Docs/DeployingAndHosting/DeployOnGitHubPages)
* [Netlify](Tutorial/Docs/DeployingAndHosting/DeployOnNetlify)

### Ghost CMS and Gatsby

You will need to fill `.ghost.json` with:
* API URL
* `Content API` key found under Ghost `Integration`s

TODO

### Discoveries

Gatsby functions can only return one element. If you try to return more, it silently fails.  

Pages invoke components and layouts.  
Components invoke layouts and CSS modules.  
Layouts can reference themselves and components and CSS modules.  
