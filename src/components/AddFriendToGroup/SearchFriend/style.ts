import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    height: "100%",
  },
  box: {
    width: "100%",
    height: "80%",
    // borderWidth: 1,
    // borderColor: "red",
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  leftContainer:{
    flexDirection: "row"
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
});
export default styles;
