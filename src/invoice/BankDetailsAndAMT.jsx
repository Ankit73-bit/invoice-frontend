import { StyleSheet, Text, View } from "@react-pdf/renderer";

function BankDetailsAndAMT() {
  const bankDetailsAndAMTStyle = StyleSheet.create({
    container: {
      width: "50%",
      borderRight: "1px solid black",
    },
    bankDetails: {
      padding: 4,
      lineHeight: 1,
    },
    AMTDetails: {
      padding: 4,
      borderTop: "1px solid black",
      lineHeight: 0.9,
      fontWeight: "extrabold",
    },
  });

  return (
    <View style={bankDetailsAndAMTStyle.container}>
      <View style={bankDetailsAndAMTStyle.bankDetails}>
        <Text>Client Name</Text>
        <Text>Bank Name: ICICI BANK</Text>
        <Text>Account No: 098405500495</Text>
        <Text>IFSC Code: ICIC0000984</Text>
        <Text>Branch Name: BHANDUP WEST</Text>
      </View>
      <View style={bankDetailsAndAMTStyle.AMTDetails}>
        <Text>
          Amount In Words: Rupees Forty Lakh Seventy Eight Thousand One Hundred
          And Forty Eight Only
        </Text>
      </View>
    </View>
  );
}

export default BankDetailsAndAMT;
