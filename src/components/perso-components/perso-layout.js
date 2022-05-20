import * as React from "react";
import "@fontsource/work-sans/700.css";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/500.css";
import "../layout.css";
import "./perso-layout.css";

import Header from "./perso-header";
import Footer from "./perso-footer";

export default function PersoLayout({ children }) {
  return (
    <div className="perso__body">
      <Header />
        <main>{children}</main>
      <Footer />
    </div>
  );
};
