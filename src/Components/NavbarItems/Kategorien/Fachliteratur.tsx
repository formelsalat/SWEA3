import * as React from 'react'
import {NavLink} from 'react-router-dom'

export default function Fachliteratur() {
    return (
        <div>
<NavLink to="/fachliteratur" className="dropdown-item">
                    <span className="ml-1">Fachliteratur</span>
                </NavLink>

        </div>        
    )
}