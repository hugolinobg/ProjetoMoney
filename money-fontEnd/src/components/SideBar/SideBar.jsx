import { Link } from "react-router-dom"
import "./Sidebar.css"
import icons from "../../constants/icons"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <img src={icons.home} alt="" className="icons" />
      </Link>
      <Link to="/despesa">
        <img src={icons.add} alt="" className="icons" />
      </Link>
      <Link to="#">
        <img src={icons.config} alt="" className="icons" />
      </Link>
      <Link to="#">
        <img src={icons.logout} alt="" className="icons" />
      </Link>
    </div>
  )
}

export default Sidebar
