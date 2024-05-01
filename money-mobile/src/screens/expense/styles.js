import { StyleSheet } from "react-native"
import { Colors, FontSize } from "../../constants/theme"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 20,
    marginTop: 20,
  },

  containerField: {
    marginBottom: 40,
  },

  inputLabel: {
    fontSize: FontSize.sm,
    color: Colors.medium_gray,
  },

  inputPrice: {
    fontSize: FontSize.xl,
    borderBottomColor: Colors.gray,
    borderBottomWidth: 2,
    padding: 5,
    fontWeight: "bold",
  },

  inputText: {
    fontSize: FontSize.md,
    borderBottomColor: Colors.gray,
    borderBottomWidth: 2,
    padding: 5,
  },

  inputPicker: {
     fontSize: FontSize.md,
    borderBottomColor: Colors.gray,
    borderBottomWidth: 2,
  },

  containerButton: {
    alignItems: "flex-end",
  },

  button: {
    width: 150,
    backgroundColor: Colors.blue,
    padding: 10,
    borderRadius: 6,
  },

  buttonText: {
    color: Colors.white,
    fontSize: FontSize.md,
    textAlign: "center",
  },

  containerDelete: {
    alignItems: "center",
    marginTop: 50,
  },

  buttonDelete: {
    width: 50,
    height: 50,
  },
})
