import * as React from "react";
import "@fontsource/work-sans/700.css";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/500.css";
import "../assets/css/layout.css";

import Header from "./header";
import Footer from "./footer";

export default function Layout({ children, isShown, openCloseNav }) {

  return (
    <div className="dev__body">
      <Header isShown={isShown} openCloseNav={openCloseNav} />
        <main>{children}</main>
      <Footer />
    </div>
  );
};
