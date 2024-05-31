import { StyleSheet } from "react-native"
import { Colors, FontSize } from "../../constants/theme"

export default StyleSheet.create({
  containerCard: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: Colors.gray,
    padding: 12,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },

  iconCard: {
    flex: 2,
    padding: 5,
  },

  icon: {
    width: 35,
    height: 35,
  },

  categoryCard: {
    flex: 9,
  },

  categoryText: {
    fontSize: FontSize.sm,
    color: Colors.dark_gray,
    fontWeight: "bold",
  },

  descriptionText: {
    fontSize: FontSize.sm,
    color: Colors.medium_gray,
  },

  priceCard: {
    flex: 6,
  },

  priceText: {
    fontSize: FontSize.sm,
    color: Colors.dark_gray,
    fontWeight: "bold",
    textAlign: "right",
  },
})
