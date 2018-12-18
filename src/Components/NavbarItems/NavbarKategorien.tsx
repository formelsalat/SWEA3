import * as React from 'react'
import {NavLink} from 'react-router-dom'
import Fachliteratur from './Kategorien/Fachliteratur'
// import Horror from './Kategorien/Horror'
// import Romane from './Kategorien/Romane'
import './NavbarItems.css'

export default function Kategorien() {
    return(
        <li className="nav-item dropdown">
            <div
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                <span className="Bezeichner ml-1">Kategorien</span>
            </div>

            <div className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
            >
                <Fachliteratur/>
                <Horror/>
                <Romane/>
            </div>
        </li>
    )
}

// function Fachliteratur() {
//     return (
//         <NavLink to="/fachliteratur" className="dropdown-item">
//             <span className="ml-1">Fachliteratur</span>
//         </NavLink>
//     )
// }

function Horror() {
    return (
        <NavLink to="/horror" className="dropdown-item">
            <span className="ml-1">Horror</span>
        </NavLink>
    )
}

function Romane() {
    return (
        <NavLink to="/romane" className="dropdown-item">
            <span className="ml-1">Romane</span>
        </NavLink>
    )
}