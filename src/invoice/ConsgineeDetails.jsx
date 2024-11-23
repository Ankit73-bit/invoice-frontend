import { StyleSheet, Text, View } from "@react-pdf/renderer";

const consigneeStyles = StyleSheet.create({
  container: {
    fontSize: 10,
    padding: 4,
    width: "100%",
  },
  consigneeName: {
    fontWeight: "semibold",
    fontSize: 12,
  },
});

function ConsigneeDetails() {
  return (
    <View style={consigneeStyles.container}>
      <Text style={consigneeStyles.consigneeName}>Consignee Name</Text>
      <Text>Add1</Text>
      <Text>Add2</Text>
      <Text>Pincode</Text>
      <Text>PanNo</Text>
      <Text>GST</Text>
      <Text>GST</Text>
    </View>
  );
}

export default ConsigneeDetails;
