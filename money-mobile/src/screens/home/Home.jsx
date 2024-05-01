import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native"
import { useEffect, useState } from "react"

import icons from "../../constants/icons"
import styles from "./styles"

import CardExpense from "../../components/cardExpense/CardExpense"

const Home = (props) => {
  const [total, setTotal] = useState(0)
  const [expenses, setExpenses] = useState([])

  const handleCreateExpense = (id) => {
    props.navigation.navigate("Expense")
  }

  const handleListExpense = () => {
    const api = [
      {
        id: 1,
        icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-carro.png",
        category: "Carro",
        description: "Pagamento IPVA",
        price: 2500,
      },
      {
        id: 2,
        icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-casa.png",
        category: "Casa",
        description: "Condomínio",
        price: 620,
      },
      {
        id: 3,
        icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-lazer.png",
        category: "Lazer",
        description: "Sorvete no parque",
        price: 17.5,
      },
      {
        id: 4,
        icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-mercado.png",
        category: "Mercado",
        description: "Compras Walmart",
        price: 375,
      },
      {
        id: 5,
        icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-treinamento.png",
        category: "Educação",
        description: "Faculdade",
        price: 490,
      },
      {
        id: 6,
        icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-viagem.png",
        category: "Viagem",
        description: "Passagem Aérea",
        price: 610,
      },
      {
        id: 7,
        icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-mercado.png",
        category: "Mercado",
        description: "Compras Churrasco",
        price: 144.3,
      },
      {
        id: 8,
        icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-viagem.png",
        category: "Viagem",
        description: "Hotel",
        price: 330,
      },
    ]

    const priceTotal = api.reduce((prev, current) => {
      return prev + current.price
    }, 0)

    setTotal(priceTotal)
    setExpenses(api)
  }

  useEffect(() => {
    handleListExpense()
  }, [])

  return (
    <View style={styles.container}>
      <Image source={icons.logo} style={styles.logo} />

      <View style={styles.dashboard}>
        <View style={styles.dashboardText}>
          <Text style={styles.dashboardPrice}>
            R$ {total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </Text>
          <Text style={styles.dashboardDescription}>Total de Gastos</Text>
        </View>

        <Image source={icons.money} style={styles.dashboardImage} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.expenseTitle}>Despesas</Text>

        {expenses.map((item) => {
          return (
            <CardExpense
              key={item.id}
              id={item.id}
              icon={item.icon}
              category={item.category}
              description={item.description}
              price={item.price}
              onClick={handleCreateExpense}
            />
          )
        })}
      </ScrollView>

      <TouchableOpacity style={styles.btnAdd} onPress={handleCreateExpense}>
        <Image source={icons.add} style={styles.btnAddImage} />
      </TouchableOpacity>
    </View>
  )
}

export default Home
