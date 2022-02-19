import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import RecipesList from "../components/RecipesList";

const Contact = ({data}) => {
    const recipes = data.allContentfulRecipes.nodes
    return (
        <Layout>
            <main className="page">
                <section className="contact-page">
                    <article>
                        <h3>Contact Page</h3>
                        <p>Swag taiyaki photo booth bushwick gentrify hexagon. Fanny pack selfies tousled gochujang,
                            everyday carry listicle readymade messenger bag. Truffaut palo santo kitsch, church-key squid 3 wolf moon vice.
                            Vegan copper mug scenester adaptogen pickled tbh normcore chambray butcher humblebrag salvia man braid 3 wolf moon.
                            Four loko raclette irony, truffaut plaid raw denim taiyaki YOLO craft beer kogi meh normcore 90's austin humblebrag.
                            Small batch live-edge trust fund freegan offal, gluten-free XOXO.</p>
                    </article>
                    <article>
                        <form className="form">
                            <div className="form-row">
                                <label htmlFor="name">your name</label>
                                <input type="text" name="name" id="name"></input>
                            </div>
                            <div className="form-row">
                                <label htmlFor="email">your email</label>
                                <input type="text" name="email" id="email"></input>
                            </div>
                            <div className="form-row">
                                <label htmlFor="message">your message</label>
                                <textarea type="textarea" name="message" id="message"></textarea>
                            </div>
                            <button type="submit" className="btn block">Submit</button>
                        </form>
                    </article>
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

export default Contact;