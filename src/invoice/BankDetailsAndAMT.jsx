import { StyleSheet, View } from "@react-pdf/renderer";
import BankDetails from "./BankDetails";
import Inwords from "./Inwords";

function BankDetailsAndAMT() {
  const bankDetailsAndAMTStyle = StyleSheet.create({
    container: {
      width: "50%",
      borderRight: "1px solid black",
    },
  });

  return (
    <View style={bankDetailsAndAMTStyle.container}>
      <BankDetails />
      <Inwords />
    </View>
  );
}

export default BankDetailsAndAMT;
