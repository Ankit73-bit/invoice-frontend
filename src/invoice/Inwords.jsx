import { StyleSheet, Text, View } from "@react-pdf/renderer";

function Inwords() {
  const inwordsStyle = StyleSheet.create({
    AMTDetails: {
      padding: 4,
      borderTop: "1px solid black",
      lineHeight: 0.9,
      fontWeight: "extrabold",
    },
  });

  return (
    <View style={inwordsStyle.AMTDetails}>
      <Text>
        Amount In Words: Rupees Forty Lakh Seventy Eight Thousand One Hundred
        And Forty Eight Only
      </Text>
    </View>
  );
}

export default Inwords;
