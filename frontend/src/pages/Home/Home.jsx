import { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import icons from '../../constants/icons'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const [expenses, setExpenses] = useState([])
  const [total, setTotal] = useState(0)

  let api = [
    {
      id: 1,
      icon: 'https://jornadajs-devpoint.s3.amazonaws.com/icon-carro.png',
      category: 'Carro',
      description: 'Pagamento IPVA',
      price: 2500,
    },
    {
      id: 2,
      icon: 'https://jornadajs-devpoint.s3.amazonaws.com/icon-casa.png',
      category: 'Casa',
      description: 'Condomínio',
      price: 620,
    },
    {
      id: 3,
      icon: 'https://jornadajs-devpoint.s3.amazonaws.com/icon-lazer.png',
      category: 'Lazer',
      description: 'Sorvete no parque',
      price: 17.5,
    },
    {
      id: 4,
      icon: 'https://jornadajs-devpoint.s3.amazonaws.com/icon-mercado.png',
      category: 'Mercado',
      description: 'Compras Walmart',
      price: 375,
    },
    {
      id: 5,
      icon: 'https://jornadajs-devpoint.s3.amazonaws.com/icon-treinamento.png',
      category: 'Educação',
      description: 'Faculdade',
      price: 490,
    },
    {
      id: 6,
      icon: 'https://jornadajs-devpoint.s3.amazonaws.com/icon-viagem.png',
      category: 'Viagem',
      description: 'Passagem Aérea',
      price: 610,
    },
    {
      id: 7,
      icon: 'https://jornadajs-devpoint.s3.amazonaws.com/icon-mercado.png',
      category: 'Mercado',
      description: 'Compras Churrasco',
      price: 144.3,
    },
    {
      id: 8,
      icon: 'https://jornadajs-devpoint.s3.amazonaws.com/icon-viagem.png',
      category: 'Viagem',
      description: 'Hotel',
      price: 330,
    },
  ]

  let dataFilters = [
    {
      id: 1,
      icon: 'https://jornadajs-devpoint.s3.amazonaws.com/icon-carro.png',
      category: 'Carro',
      description: 'Pagamento IPVA',
      price: 2500,
    },
  ]

  const handleListExpense = (filters) => {
    if (filters) {
      api = setExpenses(dataFilters)
    }

    const priceTotal = api.reduce((prev, current) => {
      return prev + current.price
    }, 0)

    setTotal(priceTotal)
    setExpenses(api)
  }

  useEffect(() => {
    handleListExpense()
  }, [])

  const handleNewExpense = () => {
    navigate('/expense/add')
  }

  const handleEditExpense = (id) => {
    navigate(`/expense/${id}`)
  }

  const handleDeleteExpense = (id) => {
    alert(`${id}`)
  }

  return (
    <>
      <Sidebar />
      <Navbar onClickSearch={handleListExpense} total={total} search={true} />
      <div className="container-home">
        <div className="title-home">
          <h1>Despesas</h1>
          <button className="btn btn-green" onClick={handleNewExpense}>
            Adicionar Despesa
          </button>
        </div>
        <div className="box-expense">
          <table>
            <thead>
              <tr>
                <th>Id. Despesa</th>
                <th>Descrição</th>
                <th>Categoria</th>
                <th className="text-right">Valor</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.description}</td>
                    <td>{item.category}</td>
                    <td className="text-right">
                      R${' '}
                      {item.price.toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td className="text-right">
                      <button
                        className="btn btn-blue"
                        onClick={() => handleEditExpense(item.id)}
                      >
                        <img className="icons-sm" src={icons.edit} />
                      </button>

                      <button
                        className="btn btn-red ml-10"
                        onClick={() => handleDeleteExpense(item.id)}
                      >
                        <img className="icons-sm" src={icons.remove} />
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Home
