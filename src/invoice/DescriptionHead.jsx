import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  item: {
    display: "flex",
    border: "1px solid black",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 5,
  },
});

function DescriptionHead() {
  return <div>DescriptionHead</div>;
}

export default DescriptionHead;
