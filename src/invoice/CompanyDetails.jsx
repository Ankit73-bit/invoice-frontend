import { StyleSheet, Text, View } from "@react-pdf/renderer";

const companyStyles = StyleSheet.create({
  container: {
    fontSize: 10,
    borderBottom: "1px solid black",
    padding: 4,
    width: "100%",
  },
  companyName: {
    fontWeight: "semibold",
    fontSize: 12,
  },
});

function CompanyDetails() {
  return (
    <View style={companyStyles.container}>
      <Text style={companyStyles.companyName}>Company Name</Text>
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

export default CompanyDetails;
