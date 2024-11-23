import { StyleSheet, View } from "@react-pdf/renderer";
import CompanyDetails from "./CompanyDetails";
import ConsigneeDetails from "./ConsgineeDetails";
import ClientDetails from "./ClientDetails";

const addressDetails = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    borderRight: "1px solid black",
    width: "50%",
  },
});

function AddressDetails() {
  return (
    <View style={addressDetails.container}>
      <CompanyDetails />
      <ConsigneeDetails />
      <ClientDetails />
    </View>
  );
}

export default AddressDetails;
