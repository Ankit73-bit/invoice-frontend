import { Page, Document, StyleSheet, View } from "@react-pdf/renderer";
import InvoiceDetails from "./InvoiceDetails";
import AddressDetails from "./AddressDetails";
import DescriptionHead from "./DescriptionHead";
import Description from "./Description";
import Note from "./Note";
import Declaration from "./Declaration";
import AmountDetails from "./AmountDetails";

const styles = StyleSheet.create({
  page: { padding: 20, fontSize: 10 },
  section1: {
    border: "1px solid black",
    display: "flex",
    flexDirection: "row",
  },
  section2: {
    // border: "1px solid black",
    borderBottom: "1px solid black",
    borderLeft: "1px solid black",
    borderRight: "1px solid black",
  },
  section3: {
    // border: "1px solid black",
    borderBottom: "1px solid black",
    borderLeft: "1px solid black",
    borderRight: "1px solid black",
  },
  section4: {
    // border: "1px solid black",
    borderBottom: "1px solid black",
    borderLeft: "1px solid black",
    borderRight: "1px solid black",
  },
  text: { fontSize: 12 },
});

const InvoicePDF = () => (
  <Document>
    <Page style={styles.page} wrap={true}>
      <View style={styles.section1}>
        <AddressDetails />
        <InvoiceDetails />
      </View>
      <View style={styles.section2}>
        <DescriptionHead />
        <Description />
        <Description />
        <Description />
        <Description />
        <Description />
        <Description />
        <Note />
      </View>
      <View style={styles.section3}>
        <AmountDetails />
      </View>
      <View style={styles.section4}>
        <Declaration /> {/* Signature is inside the Declaration component */}
      </View>
    </Page>
  </Document>
);

export default InvoicePDF;
