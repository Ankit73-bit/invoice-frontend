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

function InvoiceDetails({
  invoiceNo,
  invoiceDate,
  referenceNo,
  referenceDate,
}) {
  return (
    <View style={invoiceDetails.container}>
      <InvoiceNoDetails invoiceNo={invoiceNo} invoiceDate={invoiceDate} />
      <ReferenceDetails
        referenceNo={referenceNo}
        referenceDate={referenceDate}
      />
      <PurchaseDetails />
      <DispatchDetails />
      <TermsOfDelivery />
    </View>
  );
}

export default InvoiceDetails;
