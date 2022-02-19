import React from "react"
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import AllRecipes from "../components/AllRecipes";


const Index = () => {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/horizon.jpg"
            layout="fullWidth"
            className="hero-img"
            alt="horizon"
            placeholder="blurred"
          />
          <div className="hero-container">
            <div className="hero-text">
                <h1>Testing Text</h1>
                <h4>Yes this is the test</h4>
            </div>
          </div>
        </header>

        <AllRecipes />
      </main>
    </Layout>
  );
}

export default Index;
