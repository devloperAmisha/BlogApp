import React, { useContext } from 'react'
import BrightnessAutoIcon from '@mui/icons-material/BrightnessAuto';
import { AuthContext } from '../Context/AuthenticationContext';
import { useNavigate } from 'react-router-dom';
import AddBoxIcon from '@mui/icons-material/AddBox';

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext)
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login")
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><BrightnessAutoIcon /> </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Blog</a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Gallery</a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Videos</a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">

            {
              currentUser ?
                <>
                  <li className="nav-item">
                  <a className="nav-link btn btn-success" aria-current="page" href="/blog/create"><AddBoxIcon />Create Blog</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {currentUser.name}
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="#">Profile</a>
                      <a className="dropdown-item" href="#">Settings</a>
                      <div className="dropdown-divider"></div>
                      <button type="button" className="dropdown-item" onClick={handleLogout}>Logout</button>

                    </div>
                  </li>
                </>

                :
                <>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/login">Login</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/register">Register</a>
                  </li>
                </>
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar