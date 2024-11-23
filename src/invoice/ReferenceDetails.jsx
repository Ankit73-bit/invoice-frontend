import { StyleSheet, View, Text } from "@react-pdf/renderer";

const referenceDetails = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-evenly",
    fontSize: 10,
    flexWrap: "wrap",
  },
  reference: {
    fontSize: 10,
    borderBottom: "1px solid black",
    width: "100%",
    padding: 4,
  },
  otherReferences: {
    fontSize: 10,
    borderBottom: "1px solid black",
    width: "100%",
    padding: 4,
    flexWrap: "wrap",
  },
});

function ReferenceDetails() {
  return (
    <View style={referenceDetails.container}>
      <Text style={referenceDetails.reference}>Reference No: -</Text>
      <Text style={referenceDetails.reference}>Reference Date: -</Text>
      <Text style={referenceDetails.otherReferences}>Other references: -</Text>
    </View>
  );
}

export default ReferenceDetails;
