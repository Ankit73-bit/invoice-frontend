import { StyleSheet, View } from "@react-pdf/renderer";
import InvoiceNoDetails from "./InvoiceNoDetails";
import ReferenceDetails from "./ReferenceDetails";

const invoiceDetails = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    borderBottom: "1px solid black",
    borderTop: "1px solid black",
    borderRight: "1px solid black",
    width: "40%",
  },
});

function InvoiceDetails() {
  return (
    <View style={invoiceDetails.container}>
      <InvoiceNoDetails />
      <ReferenceDetails />
    </View>
  );
}

export default InvoiceDetails;
