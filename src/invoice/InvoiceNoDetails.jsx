import { StyleSheet, View, Text } from "@react-pdf/renderer";

const invoiceDetails = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-evenly",
    fontSize: 10,
    flexWrap: "wrap",
  },
  invoiceNo: {
    fontSize: 10,
    borderBottom: "1px solid black",
    width: "50%",
    padding: 4,
  },
  invoiceDate: {
    fontSize: 10,
    borderBottom: "1px solid black",
    borderLeft: "1px solid black",
    width: "50%",
    padding: 4,
  },
});

function InvoiceNoDetails() {
  return (
    <View style={invoiceDetails.container}>
      <Text style={invoiceDetails.invoiceNo}>Invoice No: 100</Text>
      <Text style={invoiceDetails.invoiceDate}>Invoice Date: 20-11-2024</Text>
    </View>
  );
}

export default InvoiceNoDetails;
