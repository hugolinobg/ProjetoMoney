import { View, Text, Image, ScrollView } from "react-native"
import icons from "../../constants/icons"
import styles from "./styles"

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={icons.logo} style={styles.logo} />
      <View style={styles.dashboard}>
        <View style={styles.dashboardText}>
          <Text style={styles.dashboardPrice}>R$ 1.250,00</Text>
          <Text style={styles.dashboardDescription}>Total de Gasto</Text>
        </View>
        <Image source={icons.money} style={styles.dashboardImage}/>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} >
        <Text style={styles.expenseTitle}>Despesas</Text>
      </ScrollView>
    </View>
  )
}

export default Home
