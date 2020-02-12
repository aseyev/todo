import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { ACSignOut } from '../../store/actions/authActions'



const SignedInLinks = (props) => {
    return (
        <ul className="right">
        <li><NavLink to="/todo/create" >New Project</NavLink> </li>
        <li><a onClick={props.signOut} >Log Out</a> </li>
        <li><NavLink to="/todo/" className="btn btn-floating indigo lighten-1">{props.profile.initials}</NavLink> </li>

        </ul>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch (ACSignOut())
    }
}


export default connect (null, mapDispatchToProps) (SignedInLinks)
