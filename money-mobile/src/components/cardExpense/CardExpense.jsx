import { View, Text, Image, TouchableOpacity } from "react-native"
import styles from "./styles"

const CardExpense = (props) => {
  const handle = (id) => {
    props.onClick(0)
  }

  return (
    <TouchableOpacity onPress={handle}>
      <View style={styles.containerCard}>
        <View style={styles.iconCard}>
          <Image
            style={styles.icon}
            source={{
              uri: props.icon,
            }}
          />
        </View>

        <View style={styles.categoryCard}>
          <Text style={styles.categoryText}>{props.category}</Text>
          <Text style={styles.descriptionText}>{props.description}</Text>
        </View>

        <View style={styles.priceCard}>
          <Text style={styles.priceText}>
            R${" "}
            {props.price.toLocaleString("pt-br", { minimumFractionDigits: 2 })}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default CardExpense
