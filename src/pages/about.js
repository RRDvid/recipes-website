import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
import RecipesList from "../components/RecipesList";


const About = ({data: {allContentfulRecipes: {nodes:recipes}}}) => {
    return (
        <Layout>
            <main className="page">
                <section className="about-page">
                    <article>
                        <h2>Tae na mabaho</h2>
                        <p>Lorem gentrify roof party vexillologist, locavore 90's helvetica YOLO qui copper mug marfa af culpa. Vinyl keytar air plant everyday carry, quis mixtape duis. Literally selvage subway tile, nisi fugiat gastropub shoreditch craft beer fixie.</p>
                        <p>Asymmetrical shaman twee ullamco affogato aliqua occaecat beard fingerstache etsy eiusmod id semiotics before they sold out venmo.</p>
                        <Link to="/contact" className="btn">Contact</Link>
                    </article>
                        <StaticImage
                        alt="office"
                        placeholder="blurred"
                        className="about-img"
                        src="../assets/images/below.jpg"
                        />
                </section>
                <section className="featured-recipes">
                    <h5>Featured</h5>
                    <RecipesList recipes={recipes}/>
                </section>
            </main>
        </Layout>
     );
}

export const query = graphql`
  {
    allContentfulRecipes(
      sort: {fields: title, order: ASC}
      filter: {featured: {eq: true}}
    ) {
      nodes {
        prepTime
        cookTime
        title
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        id
      }
    }
  }
`

export default About;