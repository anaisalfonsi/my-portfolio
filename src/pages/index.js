import * as React from "react";
import Layout from "../components/layout";

import Home from "./sections/home";
import About from "./sections/about";
import Work from "./sections/work";
import Contact from "./sections/contact";

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Home />
        <About />
        <Work />
        <Contact />
      </Layout>
    </>
  );
}

export default IndexPage;
