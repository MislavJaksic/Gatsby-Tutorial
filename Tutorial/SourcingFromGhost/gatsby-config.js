/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

 module.exports = {
   plugins: [
     {
       resolve: `gatsby-source-ghost`,
       options: {
         apiUrl: `https://Admin-Panel-Url`,
         contentApiKey: `Integrations-Key`,
       },
     },
   ],
 }
