import React from 'react'
import PropTypes from 'prop-types'
<<<<<<< HEAD
// import {Link} from 'react-router-dom'
=======
import {Link} from 'react-router-dom'

>>>>>>> main

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
<<<<<<< HEAD
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
        {/* <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link> */}
      </li>
      <li className="nav-item">
      {/* <a className="nav-link" href="#">About</a> */}
      {/* <Link className="nav-link" to="/about">About</Link> */}
=======
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
>>>>>>> main
      </li>
    </ul>
    <div className={`form-check form-switch text-${props.mode === 'light'? "dark": "light"}`}>
      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkMode</label>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
    title : PropTypes.string
}

Navbar.defaultProps = {
    title : 'Enter a title'
};