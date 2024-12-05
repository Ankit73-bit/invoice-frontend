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

function CompanyDetails({ company }) {
  return (
    <View style={companyStyles.container}>
      <Text style={companyStyles.companyName}>
        {company?.clientCompanyName}
      </Text>
      <Text>{company?.add1}</Text>
      <Text>{company?.add2}</Text>
      <Text>{company?.add3}</Text>
      <Text>{company?.pinCode}</Text>
      <Text>{company?.contact}</Text>
      <Text>{company?.mail}</Text>
      <Text>{company?.gstno}</Text>
    </View>
  );
}

export default CompanyDetails;
