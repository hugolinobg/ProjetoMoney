import "./Navbar.css"

import icons from "../../constants/icons"

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={icons.logo} alt="Logo Money" />

      <div>
        <input type="text" />
        <button className="btn btn-blue">Buscar</button>
      </div>
       
      <div className="dashboard">
        <p>Total Gasto</p>
        <span>R$ 1.200,50</span>
      </div>
    </div>
  )
}

export default Navbar
