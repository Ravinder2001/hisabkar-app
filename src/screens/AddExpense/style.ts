import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  inputBox: {
    width: "100%",
    marginTop: 20,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#d9d9d9",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 5,
  },
  sign: {
    fontSize: 24,
    width: 100,
    textAlign: "right",
  },
  input: {
    width: 200,
    marginLeft: 10,
    fontSize: 40,
    // borderWidth:1,
    borderColor: "red",
  },
  label: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  text: {
    fontSize: 20,
  },
  you: {
    fontSize: 20,
    marginLeft: 5,
    color: "blue",
    fontWeight: "bold",
  },
  tab:{
    marginTop:20,
  },
  submitBtn: {
    marginTop:20,
    width: "100%",
    height: "auto",
    backgroundColor: "#32a8a8",
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
