import * as React from "react";
import "@fontsource/work-sans/700.css";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/500.css";

import "./layout.css";

const Layout = () => {
  return (
    <main>
      <h1>Font pairing made simple</h1>
      <h3>Generate font combinations with deep learning</h3>
      <p>
        Click (Generate) to create a new font pairing, (Lock) to lock fonts that
        you want to keep, and (Edit) to choose a font manually. The text is
        editable, try replacing it with your company name or other copy. The
        goal of font pairing is to select fonts that share an overarching theme
        yet have a pleasing contrast. Which fonts work together is largely a
        matter of intuition, but we approach this problem with a neural net. See
        Github for more technical details.
      </p>
    </main>
  );
};

export default Layout;
