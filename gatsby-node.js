
const path = require('path')

exports.createPages = async({graphql, actions}) => {
    const {createPage} = actions;

    const result = await graphql(`
    query MyQuery {
        allContentfulRecipes {
          nodes {
            content {
              tags
            }
          }
        }
      }

    `)

    result.data.allContentfulRecipes.nodes.forEach((recipe) => {
        recipe.content.tags.forEach((tag) => {
            createPage({
                path:`/tags/${tag}`,
                component: path.resolve(`src/templates/tag-templates.js`),
                context: {
                  tag: tag,
                }
            })
        })
    })
}