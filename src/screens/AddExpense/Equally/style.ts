import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  box: {
    height: 400,
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  textContainer: {
    marginLeft: 16,
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  phoneText: {
    fontSize: 16,
    color: "#999",
  },
  amount: {
    fontSize: 18,
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
