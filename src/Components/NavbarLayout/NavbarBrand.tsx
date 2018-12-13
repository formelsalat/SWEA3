import * as React from 'react'
import { Link } from 'react-router-dom'

export default function Brand() {
    return (
        <Link to="home">
            <i  className="fas fa-home fa-2x "
                style ={{color: "whitesmoke"}}
            />
        </Link>
    )
}