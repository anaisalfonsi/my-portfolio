import * as React from "react";
import PersoLayout from "../components/perso-components/perso-layout";

import PersoHome from "./sections/perso-sections/perso-home";
import PersoAbout from "./sections/perso-sections/perso-about";
import PersoPassions from "./sections/perso-sections/perso-passions";
import PersoContact from "./sections/perso-sections/perso-contact";
import "../components/import.css";

const PersoIndex = () => {
  return (
    <>
      <PersoLayout>
        <PersoHome />
        <PersoAbout />
        <PersoPassions />
        <PersoContact />
      </PersoLayout>
    </>
  );
};

export default PersoIndex;
