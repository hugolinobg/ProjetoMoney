import { StyleSheet } from "react-native"
import { Colors, FontSize } from "../../constants/theme"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    padding: 20,
  },

  logo: {
    width: 150,
    height: 40,
    marginTop: 20,
  },

  dashboard: {
    backgroundColor: Colors.blue,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderRadius: 20,
    marginTop: 10,
  },

  dashboardText: {
    flex: 1,
    justifyContent: "center",
  },

  dashboardPrice: {
    color: Colors.white,
    fontSize: FontSize.xl,
    fontWeight: "bold",
  },

  dashboardDescription: {
    fontSize: FontSize.sm,
    color: Colors.white,
  },

  dashboardImage: {
    width: 35,
    height: 60,
  },

  expenseTitle: {
    fontSize: FontSize.sm,
    color: Colors.dark_gray,
    fontWeight: "bold",
    marginTop: 15,
  },
})
