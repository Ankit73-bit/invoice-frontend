import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { COMPANY_DETAILS } from "../../utils/constant";

// Create a Context for Invoice Data
const InvoiceContext = createContext();

// InvoiceContextProvider component to wrap the app or part of the component tree
const InvoiceContextProvider = ({ children }) => {
  const defaultCompany = COMPANY_DETAILS.find(
    (company) => company.clientCompanyName === "Paras Print"
  );
  const [invoiceData, setInvoiceData] = useState(null);
  const [invoiceNo, setInvoiceNo] = useState("");
  const [selectedCompany, setSelectedCompany] = useState(defaultCompany);
  const [selectedBank, setSelectedBank] = useState(null);
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedConsignee, setSelectedConsignee] = useState(null);

  const value = {
    invoiceData,
    setInvoiceData,
    invoiceNo,
    setInvoiceNo,
    selectedCompany,
    setSelectedCompany,
    selectedBank,
    setSelectedBank,
    selectedClient,
    setSelectedClient,
    selectedConsignee,
    setSelectedConsignee,
  };

  return (
    <InvoiceContext.Provider value={value}>{children}</InvoiceContext.Provider>
  );
};

function useInvoiceData() {
  const context = useContext(InvoiceContext);
  if (context === undefined)
    throw new Error(
      "InvoiceContext was used outside of InvoiceContextProvider"
    );
  return context;
}

InvoiceContextProvider.propTypes = {
  children: PropTypes.node, // Allows any valid React node
};

export { InvoiceContextProvider, useInvoiceData };
