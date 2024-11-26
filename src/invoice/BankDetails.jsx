import { StyleSheet, Text, View } from "@react-pdf/renderer";

function BankDetails() {
  const bankDetailsStyle = StyleSheet.create({
    bankDetails: {
      padding: 4,
      lineHeight: 1,
    },
  });

  return (
    <View style={bankDetailsStyle.bankDetails}>
      <Text>Client Name</Text>
      <Text>Bank Name: ICICI BANK</Text>
      <Text>Account No: 098405500495</Text>
      <Text>IFSC Code: ICIC0000984</Text>
      <Text>Branch Name: BHANDUP WEST</Text>
    </View>
  );
}

export default BankDetails;
