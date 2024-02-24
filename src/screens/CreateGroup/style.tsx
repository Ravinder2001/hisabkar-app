import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: "100%"
  },
  label: { fontSize: 20, fontWeight: "bold", marginTop: 10 },
  typeBox: { marginTop: 10, flexDirection: "row", justifyContent: "space-between" },
  imageBox: {
    borderWidth: 2,
    borderColor: "#e3e2e1",
    padding: 8,
    borderRadius: 6,
    width:"22%",
    flexDirection: "column",
    alignItems:"center"
  },
  imageBoxActive:{
    borderWidth: 2,
    padding: 8,
    borderRadius: 6,
    width:"22%",
    flexDirection: "column",
    alignItems:"center",
    borderColor:"black"
  },
  image: {
    width: 50,
    height: 50,
  },
  typeLabel: {
    textAlign: "center",
    marginTop: 5,
  },
});
export default styles;
