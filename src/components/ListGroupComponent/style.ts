import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 40,
    
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  searchInput: {
    height: 40,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#A9A9A9",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  card: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 5,
  },
  cardDates: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  cardDate: {
    color: "#888",
  },
  cardContent: {
    justifyContent: "space-between",
    paddingTop: 10,
  },
  attendeesContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  attendeeImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: -10,
    borderWidth: 0.5,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  actionButton: {
    marginTop: 15,
    backgroundColor: "#DCDCDC",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonText: {
    color: "#00008B",
  },
});
export default styles;
