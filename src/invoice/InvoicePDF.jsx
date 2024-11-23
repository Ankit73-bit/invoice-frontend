import { Page, Document, StyleSheet, View } from "@react-pdf/renderer";
import CompanyDetails from "./CompanyDetails";
import ClientDetails from "./ClientDetails";
import ConsigneeDetails from "./ConsgineeDetails";
import InvoiceDetails from "./InvoiceDetails";

const styles = StyleSheet.create({
  page: { padding: 20 },
  section1: { display: "flex", flexDirection: "row" },
  heading: { fontSize: 20, marginBottom: 10 },
  text: { fontSize: 12 },
});

const InvoicePDF = () => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section1}>
        <CompanyDetails />
        <InvoiceDetails />
      </View>
      <ConsigneeDetails />
      <ClientDetails />
    </Page>
  </Document>
);

export default InvoicePDF;
