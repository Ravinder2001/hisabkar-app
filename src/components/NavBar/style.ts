import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    flexDirection: "row", // Set the direction to row
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    // borderWidth: 1,
    // borderColor: "red",
  },
  backBtn: {
    // borderWidth: 1,
    // borderColor: "red",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    // borderWidth: 1,
    // borderColor: "red",
  },
  image: {
    width: 24,
    height: 24,
  },
  profileIcon: {
    // borderWidth: 1,
    // borderColor: "red",
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});

export default styles;
