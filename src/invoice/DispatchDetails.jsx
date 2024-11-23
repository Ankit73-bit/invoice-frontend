import { StyleSheet, View, Text } from "@react-pdf/renderer";

const dispatchDetails = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-evenly",
    fontSize: 10,
    flexWrap: "wrap",
  },
  dispatch: {
    fontSize: 10,
    borderBottom: "1px solid black",
    width: "100%",
    padding: 4,
  },
  dispatchflex: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-evenly",
    fontSize: 10,
    flexWrap: "wrap",
  },
  dispatchNo: {
    fontSize: 10,
    borderBottom: "1px solid black",
    width: "50%",
    padding: 4,
  },
  dispatchDate: {
    fontSize: 10,
    borderBottom: "1px solid black",
    borderLeft: "1px solid black",
    width: "50%",
    padding: 4,
  },
});

function DispatchDetails() {
  return (
    <View style={dispatchDetails.container}>
      <View style={dispatchDetails.dispatchflex}>
        <Text style={dispatchDetails.dispatchNo}>Dispatch No: 100</Text>
        <Text style={dispatchDetails.dispatchDate}>
          Dispatch Date: 20-11-2024
        </Text>
      </View>
      <Text style={dispatchDetails.dispatch}>Dispatch Through: -</Text>
      <Text style={dispatchDetails.dispatch}>Dispatch Destination: -</Text>
    </View>
  );
}

export default DispatchDetails;
