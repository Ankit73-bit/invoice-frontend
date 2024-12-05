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

function AddressDetails({ company, consignee, client }) {
  return (
    <View style={addressDetails.container}>
      <CompanyDetails company={company} />
      <ConsigneeDetails consignee={consignee} />
      <ClientDetails client={client} />
    </View>
  );
}

export default AddressDetails;
