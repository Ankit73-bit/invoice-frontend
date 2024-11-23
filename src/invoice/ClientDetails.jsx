import { StyleSheet, Text, View } from "@react-pdf/renderer";

const clientStyles = StyleSheet.create({
  container: {
    fontSize: 10,
    borderBottom: "1px solid black",
    borderLeft: "1px solid black",
    borderRight: "1px solid black",
    padding: 4,
    width: "60%",
  },
  clientName: {
    fontWeight: "semibold",
    fontSize: 12,
  },
});

function ClientDetails() {
  return (
    <View style={clientStyles.container}>
      <Text style={clientStyles.clientName}>Client Name</Text>
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

export default ClientDetails;
