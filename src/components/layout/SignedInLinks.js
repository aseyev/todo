import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="right">
        <li><NavLink to="/todo/create" >New Project</NavLink> </li>
        <li><NavLink to="/todo/" >Log Out</NavLink> </li>
        <li><NavLink to="/todo/" className="btn btn-floating indigo lighten-1">AvA</NavLink> </li>

        </ul>
    )
}

export default SignedInLinks
