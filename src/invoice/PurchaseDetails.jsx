import { StyleSheet, View, Text } from "@react-pdf/renderer";

const purchaseDetails = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-evenly",
    fontSize: 10,
    flexWrap: "wrap",
  },
  purchase: {
    fontSize: 10,
    borderBottom: "1px solid black",
    width: "100%",
    padding: 4,
  },
});

function PurchaseDetails() {
  return (
    <View style={purchaseDetails.container}>
      <Text style={purchaseDetails.purchase}>Purchase No: 100</Text>
      <Text style={purchaseDetails.purchase}>Purchase Date: 20-11-2024</Text>
    </View>
  );
}

export default PurchaseDetails;
