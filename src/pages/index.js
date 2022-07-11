import * as React from "react";
import { useState } from "react";
import Layout from "../components/layout";

import Home from "./sections/home";
import About from "./sections/about";
import Work from "./sections/work";
import Contact from "./sections/contact";

const IndexPage = () => {
  const [isShown, setIsShown] = useState(true);

  const openCloseNav = () => {
    setIsShown((current) => !current);
  };
  
  return (
    <>
      <Layout isShown={isShown}>
        <Home openCloseNav={openCloseNav} />
        <About />
        <Work />
        <Contact />
      </Layout>
    </>
  );
}

export default IndexPage;
