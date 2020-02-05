import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <ul className="right">
        <li><NavLink to="/todo/signup" >Signup</NavLink> </li>
        <li><NavLink to="/todo/signin" >Login</NavLink> </li>
        </ul>
    )
}

export default SignedOutLinks
