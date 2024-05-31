import './Navbar.css'

import icons from '../../constants/icons'
import { useState } from 'react'

const Navbar = (PropTypes) => {
  const [filters, setFilters] = useState('')

  return (
    <div className="navbar">
      <img src={icons.logo} alt="Logo Money" />

      <div>
        {PropTypes.search && (
          <>
            <input
              type="text"
              id=""
              onChange={(e) => setFilters(e.target.value)}
            />
            <button
              onClick={() => PropTypes.onClickSearch(filters)}
              className="btn btn-blue"
            >
              Buscar
            </button>
          </>
        )}
      </div>

      <div className="dashboard">
        {PropTypes.search && (
          <>
            <p>Total Gasto</p>
            <span>
              R${' '}
              {PropTypes.total.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
              })}
            </span>
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar
