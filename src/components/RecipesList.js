import React from "react";
import { Link } from "gatsby";
import { GatsbyImage , getImage} from "gatsby-plugin-image";
import slugify from 'slugify'

const RecipesList = ({ recipes = []  }) => {
    return (
        <div className="recipes-list">
            {recipes.map((recipe) => {
                const {title, id, prepTime, image, cookTime} = recipe
                const theRecipeImage = getImage(image)
                const slug = slugify(title, {lower: true})
                    return (
                        <Link key={id} to={`/${slug}`} className="recipe">
                                    {<GatsbyImage image={theRecipeImage} alt={title} className="recipe-img"/>}
                                    <h5>{title}</h5>
                                    <p>Prep: {prepTime}min | Cook Time: {cookTime}min</p>
                                </Link>
                    )
            })}
        </div>
     );
}

export default RecipesList;