import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  label: { fontSize: 20, fontWeight: "bold", marginTop: 10 },
  typeBox: { marginTop: 10, width: "100%" },
  imageBox: {
    borderWidth: 2,
    borderColor: "#e3e2e1",
    padding: 10,
    borderRadius: 6,
    width: 80,
    flexDirection: "column",
    alignItems: "center",
    marginRight: 10,
  },
  imageBoxActive: {
    borderWidth: 2,
    borderColor: "black",
    padding: 10,
    borderRadius: 6,
    width: 80,
    flexDirection: "column",
    alignItems: "center",
    marginRight: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  typeLabel: {
    textAlign: "center",
    marginTop: 5,
  },
  submitBtn: {
    width: "100%",
    height: "auto",
    backgroundColor: "black",
    padding: 10,
    borderRadius: 6,
  },
  submitBtnText: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
});
export default styles;
