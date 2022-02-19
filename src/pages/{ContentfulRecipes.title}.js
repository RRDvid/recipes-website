import React from 'react';
import { graphql , Link } from 'gatsby';
import Layout from "../components/Layout";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {BsClockHistory, BsClock, BsPeople} from 'react-icons/bs'

const RecipeTemplate = ({data}) => {
    const {image, title, cookTime, content, prepTime, servings, description} = data.contentfulRecipes
    const theImage = getImage(image);
    const {tags, ingredients, instructions, tools} = content
    return (
        <Layout>
            <main className="page">
                <div className="recipe-page">
                    <section className="recipe-hero">
                        <GatsbyImage image = {theImage} alt = {title} className="about-img" />
                        <article className="recipe-info">
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <div className="recipe-icons">
                                <article>
                                    <BsClock />
                                    <h5>prep time:</h5>
                                    <p>{prepTime}min</p>
                                </article>
                                <article>
                                    <BsClockHistory />
                                    <h5>cook time:</h5>
                                    <p>{cookTime}min</p>
                                </article>
                                <article>
                                    <BsPeople />
                                    <h5>servings:</h5>
                                    <p>{servings} people</p>
                                </article>
                            </div>
                            <p className="recipe-tags">
                                Tags: {tags.map((tag, index) => {
                                    return <Link to={`/${tag}`} key={index}>{tag}</Link>
                                })}
                            </p>
                        </article>
                    </section>
                    <section className="recipe-content">
                        <article>
                            <h4>Instructions</h4>
                            {instructions.map((item, index) => {
                                return <div key={index} className="single-instruction">
                                    <header>
                                        <p>Step {index + 1}</p>
                                        <div></div>
                                    </header>
                                        <p>{item}</p>
                                </div>
                            })}
                        </article>
                        <article className="second-column">
                            <div>
                                <h4>Ingredients</h4>
                                {ingredients.map((item, index) => {
                                    return <p key={index} className="single-ingredient">
                                        {item}
                                    </p>
                                })}
                            </div>
                            <div>
                                <h4>Tools</h4>
                                {tools.map((item, index) => {
                                    return <p key={index} className="single-tool">
                                        {item}
                                    </p>
                                })}
                            </div>
                        </article>
                    </section>
                </div>
            </main>
        </Layout>
     );
}

export const query = graphql`
    query getSingleRecipe($title: String) {
        contentfulRecipes(title: {eq: $title}) {
        title
        content {
            ingredients
            instructions
            tools
            tags
        }
        cookTime
        description
        prepTime
        servings
        image {
            gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        }
    }
`

export default RecipeTemplate;