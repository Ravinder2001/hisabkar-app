import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  btn: {
    marginTop: 20,
  },
  box: {
    marginTop: 20,
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "space-between",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 10,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default styles;
