import { Link } from "react-router-dom"
import "./SideBar.css"
import icons from "../../constants/icons"

const SideBar = () => {
  return (
    <div className="container">
      <Link to="/">
        <img src={icons.home} alt="" />
      </Link>
      <Link to="/despesa">
        <img src={icons.add} alt="" />
      </Link>
      <Link to="/despesa">
        <img src={icons.config} alt="" />
      </Link>
      <Link to="/despesa">
        <img src={icons.logout} alt="" />
      </Link>
    </div>
  )
}

export default SideBar
