import { StyleSheet, Text, View } from "@react-pdf/renderer";
import Signature from "./Signature";

const declarationStyle = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  declaration: {
    width: "50%",
    borderRight: "1px solid black",
  },
  innerText: {
    paddingTop: 4,
    paddingRight: 4,
    paddingLeft: 4,
    paddingBottom: 40,
    textAlign: "justify",
  },
});

function Declaration() {
  return (
    <View style={declarationStyle.container}>
      <View style={declarationStyle.declaration}>
        <Text style={declarationStyle.innerText}>
          <Text>Declaration: </Text>We declare that this Invoice shows the
          actual price of the Goods described and that all particulars are true
          and correct.
        </Text>
      </View>
      <Signature />
    </View>
  );
}

export default Declaration;
