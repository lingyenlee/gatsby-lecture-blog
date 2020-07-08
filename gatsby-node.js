const path = require('path')

exports.createPages = async({graphql, actions}) => {

    const {createPage} = actions

    const queryResults = await graphql(`
    query MyQuery {
        allMarkdownRemark {
          nodes {
              frontmatter {
                slug
              }
          }
        }
      }
    `)

    queryResults.data.allMarkdownRemark.nodes.forEach(node => {
        createPage({
            path: node.frontmatter.slug,
            component: path.resolve('./src/templates/blog-post.js'),
            context: {
                slug: node.frontmatter.slug
            }
        })
    })
}