import { StyleSheet, Text, View } from "@react-pdf/renderer";

const consigneeStyles = StyleSheet.create({
  container: {
    fontSize: 10,
    borderBottom: "1px solid black",
    borderLeft: "1px solid black",
    borderRight: "1px solid black",
    padding: 4,
    width: "60%",
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
      <Text>Add3</Text>
      <Text>Pincode</Text>
      <Text>Contact</Text>
      <Text>Email</Text>
      <Text>GST</Text>
    </View>
  );
}

export default ConsigneeDetails;
