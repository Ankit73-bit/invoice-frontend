import { StyleSheet, View } from "@react-pdf/renderer";
import AmountCalculations from "./AmountCalculations";
import BankDetailsAndAMT from "./BankDetailsAndAMT";

function AmountDetails() {
  const amountStyles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
    },
  });
  return (
    <View style={amountStyles.container}>
      <BankDetailsAndAMT />
      <AmountCalculations />
    </View>
  );
}

export default AmountDetails;
