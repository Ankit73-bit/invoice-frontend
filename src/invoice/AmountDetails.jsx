import { StyleSheet, View } from "@react-pdf/renderer";
import AmountCalculations from "./AmountCalculations";
import BankDetailsAndAMT from "./BankDetailsAndAMT";

function AmountDetails({ bankDetails }) {
  const amountStyles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
    },
  });
  return (
    <View style={amountStyles.container}>
      <BankDetailsAndAMT bankDetails={bankDetails} />
      <AmountCalculations />
    </View>
  );
}

export default AmountDetails;
