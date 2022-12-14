import * as React from "react";
import type { HeadFC } from "gatsby";
import {
  CardanoWallet,
  MeshBadge,
  MeshProvider,
} from "@martifylabs/mesh-react";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  return (
    <MeshProvider>
      <Helmet>
        <link
          rel="icon"
          href="https://mesh.martify.io/favicon/favicon-32x32.png"
        />
        <link
          href="https://mesh.martify.io/css/template.css"
          rel="stylesheet"
          key="mesh-demo"
        />
      </Helmet>
      <div className="container">
        <main className="main">
          <h1 className="title">
            <a href="https://mesh.martify.io/">Mesh</a> Gatsby
          </h1>

          <div className="demo">
            <CardanoWallet />
          </div>

          <div className="grid">
            <a href="https://mesh.martify.io/apis" className="card">
              <h2>Documentation</h2>
              <p>
                Our documentation provide live demos and code samples; great
                educational tool for learning how Cardano works.
              </p>
            </a>

            <a href="https://mesh.martify.io/guides" className="card">
              <h2>Guides</h2>
              <p>
                Whether you are launching a new NFT project or ecommerce store,
                these guides will help you get started.
              </p>
            </a>

            <a href="https://mesh.martify.io/react" className="card">
              <h2>React components</h2>
              <p>
                Useful React UI components and hooks, seamlessly integrate them
                into your app, and bring the user interface to life.
              </p>
            </a>
          </div>
        </main>

        <footer className="footer">
          <MeshBadge dark={true} />
        </footer>
      </div>
    </MeshProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Mesh App on Cardano</title>;
