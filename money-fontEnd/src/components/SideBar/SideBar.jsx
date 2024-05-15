import { Link } from "react-router-dom"
import "./Sidebar.css"
import icons from "../../constants/icons"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <img
          src={icons.home}
          alt="icone de uma sinal de mais"
          className="icons"
        />
      </Link>
      <Link to="/despesa">
        <img src={icons.add} alt="icone de uma Engrenagem" className="icons" />
      </Link>
      <Link to="#">
        <img
          src={icons.config}
          alt="icone de uma seta para Sair"
          className="icons"
        />
      </Link>
      <Link to="#">
        <img src={icons.logout} alt="" className="icons" />
      </Link>
    </div>
  )
}

export default Sidebar
