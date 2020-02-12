const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS": 
            console.log("Login successed")
            return {...state,
                authError: null
            }
        case "LOGIN_ERROR": 
            console.log("action")
            return {...state,
                authError: "Login failed"
            }
        case "SIGNOUT_SUCCESS": 
            console.log("Logout success")
            return {...state}
        case "SIGNUP_SUCCESS": 
            console.log("signup success")
            return {...state,
                authError: null
            }
        case "SIGNUP_ERROR": 
            console.log("signup failed")
            return {...state,
                authError: action.err.message
            }

        default:
            return state;
    }
}

export default authReducer