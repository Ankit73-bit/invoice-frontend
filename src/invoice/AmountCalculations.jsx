import { View, Text, StyleSheet } from "@react-pdf/renderer";

function AmountCalculations() {
  const amountCalculationStyle = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      width: "50%",
      flexWrap: "wrap",
    },
    text: {
      width: "50%",
      padding: 6,
      borderBottom: "1px solid black",
      borderRight: "1px solid black",
      textAlign: "center",
    },
    amount: {
      width: "50%",
      padding: 6,
      borderBottom: "1px solid black",
      textAlign: "center",
    },
    lasttext: {
      width: "50%",
      padding: 6,
      borderRight: "1px solid black",
      textAlign: "center",
    },
    lastamount: {
      width: "50%",
      padding: 6,
      textAlign: "center",
    },
  });
  return (
    <View style={amountCalculationStyle.container}>
      <Text style={amountCalculationStyle.text}>Total Before GST</Text>
      <Text style={amountCalculationStyle.amount}>0</Text>
      <Text style={amountCalculationStyle.text}>CGST</Text>
      <Text style={amountCalculationStyle.amount}>0</Text>
      <Text style={amountCalculationStyle.text}>SGST</Text>
      <Text style={amountCalculationStyle.amount}>0</Text>
      <Text style={amountCalculationStyle.text}>Total Amount</Text>
      <Text style={amountCalculationStyle.amount}>0</Text>
      <Text style={amountCalculationStyle.text}>Rounding Off</Text>
      <Text style={amountCalculationStyle.amount}>0</Text>
      <Text style={amountCalculationStyle.lasttext}>Gross Amount</Text>
      <Text style={amountCalculationStyle.lastamount}>0</Text>
    </View>
  );
}

export default AmountCalculations;
