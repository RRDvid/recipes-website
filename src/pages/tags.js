import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import setupTags from "../utils/setupTags";


const Tags = ({data}) => {
    const newTags = setupTags(data.allContentfulRecipes.nodes)
    return (
        <Layout>
            <main className="page">
                <section className="tags-page">
                    {newTags.map((tag, index) => {
                        const [text, value] = tag
                        return <Link to={`${text}`} key={index} className="tag">{text} ({value})</Link>
                    })}
                </section>
            </main>
        </Layout>
     );
}

export const query = graphql`
  {
    allContentfulRecipes {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags;