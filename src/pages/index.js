import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import ProductList from "../components/ProductList";

const products = [
    {
        title: <>Geocortex Web</>,
        imageUrl: "img/web-viewer-product-icon.svg",
        description: (
            <>
                Combine the 3D and 2D capabilities of Esri’s latest JavaScript API to deliver
                cutting-edge mapping applications.
            </>
        ),
        link: "docs/web/overview",
    },
    {
        title: <>Geocortex Mobile</>,
        imageUrl: "img/mobile-viewer-product-icon.svg",
        description: <>Develop field data collection apps and run them online or offline.</>,
        link: "docs/mobile/overview",
    },
    {
        title: <>Geocortex Workflow</>,
        imageUrl: "img/workflow-product-icon.svg",
        description: (
            <>
                Extend your Geocortex and Web AppBuilder for ArcGIS® applications by turning
                sophisticated business processes into a set of simple, guided end-user interactions.
            </>
        ),
        link: "docs/workflow/overview",
    },
];

function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Description will go into a meta tag in <head />"
        >
            <header className={classnames("hero hero--primary", styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">Geocortex Developer Center</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                </div>
            </header>
            <main>
                <ProductList products={products}></ProductList>
            </main>
        </Layout>
    );
}

export default Home;