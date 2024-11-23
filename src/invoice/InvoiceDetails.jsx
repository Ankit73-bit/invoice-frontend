import { StyleSheet, View } from "@react-pdf/renderer";
import InvoiceNoDetails from "./InvoiceNoDetails";
import ReferenceDetails from "./ReferenceDetails";
import PurchaseDetails from "./PurchaseDetails";
import DispatchDetails from "./DispatchDetails";
import TermsOfDelivery from "./TermsOfDelivery";

const invoiceDetails = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    width: "50%",
  },
});

function InvoiceDetails() {
  return (
    <View style={invoiceDetails.container}>
      <InvoiceNoDetails />
      <ReferenceDetails />
      <PurchaseDetails />
      <DispatchDetails />
      <TermsOfDelivery />
    </View>
  );
}

export default InvoiceDetails;
