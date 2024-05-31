import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import './CardExpense.css'

const CardExpense = () => {
  const { idUrl } = useParams()
  const navigate = useNavigate()

  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  

  const handleClose = () => {
    navigate('/')
  }

  const handleSaveData = () => {
    navigate('/')
  }

  const handleGetDataExpense = (id) => {
    setPrice(150)
    setDescription('Compras de mercado')
    setCategory('Mercado')
  }

  useEffect(() => {
    if (idUrl != 'add') {
      handleGetDataExpense(idUrl)
    }
  }, [])

  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="container-cardExpense">
        <div className="box-cadEpense">
          {idUrl == 'add' ? <h1>Nova Despesa</h1> : <h1>Editar Despesa</h1>}

          <div className="input-group">
            <p>Valor</p>
            <input
              className="input-lg w100"
              type="text"
              id="price"
              value={price.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
              })}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="input-group">
            <p>Descrição</p>
            <input
              className="w100"
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="input-group">
            <p>Categoria</p>
            <select
              className="w100"
              name="category"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Carro">Carro</option>
              <option value="Casa">Casa</option>
              <option value="Lazer">Lazer</option>
              <option value="Mercado">Mercado</option>
              <option value="Educação">Educação</option>
              <option value="Viagem">Viagem</option>
            </select>
          </div>

          <div className="btn-group text-right">
            <button className="btn btn-red-outline" onClick={handleClose}>
              Cancelar
            </button>
            <button className="btn btn-green ml-20" onClick={handleSaveData}>
              Salvar
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardExpense
