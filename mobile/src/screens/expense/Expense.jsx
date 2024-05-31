import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useState } from "react"
import { Picker } from "@react-native-picker/picker"
import styles from "./styles"
import icons from "../../constants/icons"

const Expense = (props) => {
  const [id, setId] = useState(0)
  const [price, setPrice] = useState(0)
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")

  const handleSave = () => {
    props.navigation.navigate("Home")
  }

  const handleDelete = () => {
    props.navigation.navigate("Home")
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerField}>
        <Text style={styles.inputLabel}>Valor</Text>
        <TextInput
          style={styles.inputPrice}
          placeholder="0,00"
          keyboardType="decimal-pad"
          defaultValue={price.toString()}
        />
      </View>

      <View style={styles.containerField}>
        <Text style={styles.inputLabel}>Descrição</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Ex: Aluguel"
          defaultValue={description}
        />
      </View>

      <View style={styles.containerField}>
        <Text style={styles.inputLabel}>Categoria</Text>
        <View style={styles.inputPicker}>
          <Picker
            selectedValue={"Casa"}
            onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
          >
            <Picker.Item label="Casa" value="Casa" />
            <Picker.Item label="Carro" value="Carro" />
            <Picker.Item label="Lazer" value="Lazer" />
            <Picker.Item label="Mercado" value="Mercado" />
            <Picker.Item label="Educação" value="Educação" />
            <Picker.Item label="Viagem" value="Viagem" />
          </Picker>
        </View>
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerDelete}>
        <TouchableOpacity onPress={handleDelete}>
          <Image source={icons.remove} style={styles.buttonDelete} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Expense
