import { useState } from "react";
import Ppui from "./Ppui";
import Psui from "./Psui";

function HomePage() {
  const [activeCompany, setActiveCompany] = useState("");
  console.log(activeCompany);

  return (
    <>
      <Ppui activeCompany={activeCompany} setActiveCompany={setActiveCompany} />
      <Psui activeCompany={activeCompany} setActiveCompany={setActiveCompany} />
    </>
  );
}

export default HomePage;
