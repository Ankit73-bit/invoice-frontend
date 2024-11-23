import { useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import InvoiceForm from "./invoice/InvoiceForm";
import InvoicePDF from "./invoice/InvoicePDF";
import HomePage from "./ui/HomePage";
import "./index.css";

const App = () => {
  const [invoiceData, setInvoiceData] = useState(null);
  return (
    <div>
      {!invoiceData ? (
        <InvoiceForm onSubmit={setInvoiceData} />
      ) : (
        <div className="">
          <PDFViewer style={{ width: "100%", height: "100vh" }}>
            <InvoicePDF data={invoiceData} />
          </PDFViewer>
        </div>
      )}
    </div>
  );
  // return <HomePage />;
};

export default App;
