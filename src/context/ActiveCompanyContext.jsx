import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const ActiveCompanyContext = createContext();

function ActiveCompanyProvider({ children }) {
  const [activeCompany, setActiveCompany] = useState("");

  return (
    <ActiveCompanyContext.Provider value={{ activeCompany, setActiveCompany }}>
      {children}
    </ActiveCompanyContext.Provider>
  );
}

function useActiveCompany() {
  const context = useContext(ActiveCompanyContext);
  if (context === undefined)
    throw new Error(
      "ActiveCompanyContext was used outside of ActiveCompanyProvider"
    );
  return context;
}

ActiveCompanyProvider.propTypes = {
  children: PropTypes.node, // Allows any valid React node
};

export { ActiveCompanyProvider, useActiveCompany };
