//This is a react function based component(rfc)
//props --> properties ( read only in the component )
//Components file name --> Capital
import React from 'react'

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
//impt

//rfc --> React function based component
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form> */}
                    <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                        <label className ="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

//prop types
//so that you do not enter a wrong type of value for the prop
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
}

//default props-->if i do not pass values to the props then use these as the default values
Navbar.defaultProps = {
    title: 'Set your title here',
    aboutText: 'About text here',
}

