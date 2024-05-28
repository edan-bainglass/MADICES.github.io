import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Index from "../../../docs/2022/index.mdx";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout>
      <header className="hero">
        <div className="container">
          <img className="homepage-img" src="img/svg/c_no_bg.svg" />
          <h1 className="hero__title">
            Machine actionable data for chemical sciences
          </h1>
          <h2 className="hero__subtitle">CECAM workshop February 7-9 2022</h2>
          <h3>
            <a
              href="https://www.youtube.com/playlist?list=PLI0jkoDO64_g0R--1QAGDKanujEOpg5J_"
              target="_blank"
            >
              Virtual event
            </a>
          </h3>
        </div>
      </header>
      <main className="main-container">
        <section className="features">
          <div className="container">
            <Index />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
