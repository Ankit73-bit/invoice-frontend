// import { StyleSheet, Text, View } from "@react-pdf/renderer";

// const descriptionStyle = StyleSheet.create({
//   container: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "start",
//     alignItems: "center",
//   },
//   description: {
//     flexWrap: "wrap",
//     width: "40%",
//     borderRight: "1px solid black",
//   },
//   hsncode: {
//     width: "15%",
//     borderRight: "1px solid black",
//     textAlign: "center",
//   },
//   qty: {
//     width: "16%",
//     borderRight: "1px solid black",
//     textAlign: "center",
//   },
//   unitPrice: {
//     width: "13%",
//     borderRight: "1px solid black",
//     textAlign: "center",
//   },
//   total: {
//     width: "16%",
//     textAlign: "center",
//   },
//   innerText: {
//     padding: 6,
//     fontWeight: "normal",
//   },
// });

// function Description() {
//   return (
//     <>
//       <View style={descriptionStyle.container}>
//         <View style={descriptionStyle.description}>
//           <Text style={descriptionStyle.innerText}>
//             Post Reimbursment Charges
//           </Text>
//         </View>
//         <View style={descriptionStyle.hsncode}>
//           <Text style={descriptionStyle.innerText}>998012</Text>
//         </View>
//         <View style={descriptionStyle.qty}>
//           <Text style={descriptionStyle.innerText}>100452</Text>
//         </View>
//         <View style={descriptionStyle.unitPrice}>
//           <Text style={descriptionStyle.innerText}>2.25</Text>
//         </View>
//         <View style={descriptionStyle.total}>
//           <Text style={descriptionStyle.innerText}>478148</Text>
//         </View>
//       </View>
//     </>
//   );
// }

// export default Description;

import { StyleSheet, Text, View } from "@react-pdf/renderer";

const descriptionStyle = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    position: "relative",
  },
  description: {
    flexWrap: "wrap",
    width: "40%",
    borderRight: "1px solid black",
    textAlign: "left",
    padding: 4,
  },
  hsncode: {
    width: "15%",
    borderRight: "1px solid black",
    padding: 4,
  },
  qty: {
    width: "16%",
    borderRight: "1px solid black",
    padding: 4,
  },
  unitPrice: {
    width: "13%",
    borderRight: "1px solid black",
    padding: 4,
  },
  total: {
    width: "16%",
    padding: 4,
  },
  innerText: {
    padding: 6,
    fontWeight: "normal",
  },
});

function Description() {
  return (
    <>
      <View style={descriptionStyle.container}>
        <Text style={descriptionStyle.description}>
          Post Reimbursment Charges
        </Text>
        <Text style={descriptionStyle.hsncode}>998012</Text>
        <Text style={descriptionStyle.qty}>100452</Text>
        <Text style={descriptionStyle.unitPrice}>2.25</Text>
        <Text style={descriptionStyle.total}>478148</Text>
      </View>
    </>
  );
}

export default Description;
