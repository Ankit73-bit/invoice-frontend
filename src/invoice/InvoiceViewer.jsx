import { PDFViewer } from "@react-pdf/renderer";
import InvoicePDF from "./InvoicePDF";
import Button from "../ui/Button";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

function InvoiceViewer({
  invoiceDate,
  invoiceNo,
  referenceNo,
  referenceDate,
  selectedCompany,
  selectedClient,
  selectedConsignee,
  selectedBank,
}) {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, right: open });
  };

  const list = () => (
    <Box
      sx={{ width: 1000 }} // Set the width of the drawer
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <PDFViewer style={{ width: "100%", height: "100vh" }}>
        <InvoicePDF
          referenceNo={referenceNo}
          referenceDate={referenceDate}
          invoiceDate={invoiceDate}
          invoiceNo={invoiceNo}
          selectedCompany={selectedCompany}
          selectedClient={selectedClient}
          selectedConsignee={selectedConsignee}
          selectedBank={selectedBank}
        />
      </PDFViewer>
    </Box>
  );

  return (
    <>
      <Button onClick={toggleDrawer(true)}>View Invoice</Button>
      <Drawer
        anchor="right" // Set the drawer anchor to the right
        open={state.right}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </>
  );
}

export default InvoiceViewer;
