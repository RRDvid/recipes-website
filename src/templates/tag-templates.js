import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import RecipesList from '../components/RecipesList';

const TagTemplates = ({data, pageContext}) => {
    const recipe = data.allContentfulRecipes.nodes

    return (
        <Layout>
            <main className="page">
                <h3>{pageContext.tag}</h3>
                <div className="tag-recipes">
                  <RecipesList recipes={recipe}/>
                </div>
            </main>
        </Layout>
     );
}

export const query = graphql`
    query singleTag($tag: String) {
        allContentfulRecipes(
        sort: {fields: title, order: ASC}
        filter: {content: {tags: {eq: $tag}}}
        ) {
        nodes {
            id
            cookTime
            prepTime
            image {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
            title
        }
        }
    }
`

export default TagTemplates;