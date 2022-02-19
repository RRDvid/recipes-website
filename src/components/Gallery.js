import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage , getImage} from "gatsby-plugin-image";
import styled from "styled-components";

const query = graphql`
{
  allFile {
    nodes {
      name
      childImageSharp {
        gatsbyImageData(
          width: 200
          height: 200
          layout: CONSTRAINED
          placeholder: BLURRED
        )
      }
    }
  }
}
`

const Gallery = () => {
    const data = useStaticQuery(query);
    const nodes = data.allFile.nodes
    return (
        <Wrapper>
            {nodes.map((images, index) => {
                 const { name } = images
                 const theImage = getImage(images)
                 console.log(theImage)
                return <article key={index} className="item">
                    <GatsbyImage
                    className="picture"
                    image = {theImage}/>
                    <p>{ name }</p>
                </article>
            })}
        </Wrapper>
     );
}

const Wrapper = styled.a`
    display:flex;
    flex-wrap:wrap;
    justify-content: center;

    .item {
        margin-right: 2rem;
    }

    .picture {
        border-radius: 2rem;
    }
`

export default Gallery;