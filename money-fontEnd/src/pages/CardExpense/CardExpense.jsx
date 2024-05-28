import './CardExpense.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'

const CardExpense = () => {

  const handleClose = () => {}
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="container-cardExpense">
        <div className="box-cadEpense">
          <h1>Nova Despesa</h1>

          <div className="input-group">
            <p>Valor</p>
            <input className="input-lg w100" type="text" id="price" />
          </div>

          <div className="input-group">
            <p>Descrição</p>
            <input className="w100" type="text" id="description" />
          </div>

          <div className="input-group">
            <p>Categoria</p>
            <select className="w100" id="category">
              <option value="Carro">Carro</option>
              <option value="Casa">Casa</option>
              <option value="Lazer">Lazer</option>
              <option value="Mercado">Mercado</option>
              <option value="Educação">Educação</option>
              <option value="Viagem">Viagem</option>
            </select>
          </div>

          <div className="btn-group text-right">
            <button className="btn btn-red-outline" onClick={handleClose}>Cancelar</button>
            <button className="btn btn-green ml-20">Salvar</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardExpense
