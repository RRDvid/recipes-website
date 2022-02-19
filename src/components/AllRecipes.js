import React from "react";
import RecipesList from "./RecipesList";
import Tagslist from "./Tagslist";
import { useStaticQuery, graphql } from "gatsby";

const AllRecipes = () => {
    const data = useStaticQuery(query);
    const recipes = data.allContentfulRecipes.nodes
    return (
        <div className="recipes-container">
                <Tagslist recipes= { recipes }/>
                <RecipesList recipes= { recipes }/>
        </div>
     );
    }

    const query = graphql`
    {
      allContentfulRecipes(sort: {fields: title, order: ASC}) {
        nodes {
          prepTime
          cookTime
          title
          image {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
          content {
            tags
          }
          id
        }
      }
    }
    `

    export default AllRecipes;