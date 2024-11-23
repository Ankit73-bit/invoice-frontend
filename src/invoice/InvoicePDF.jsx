import { Page, Document, StyleSheet, View } from "@react-pdf/renderer";

import InvoiceDetails from "./InvoiceDetails";
import AddressDetails from "./AddressDetails";

const styles = StyleSheet.create({
  page: { padding: 20 },
  section1: {
    border: "1px solid black",
    display: "flex",
    flexDirection: "row",
  },
  text: { fontSize: 12 },
});

const InvoicePDF = () => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section1}>
        <AddressDetails />
        <InvoiceDetails />
      </View>
    </Page>
  </Document>
);

export default InvoicePDF;
