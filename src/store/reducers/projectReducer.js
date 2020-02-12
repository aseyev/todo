const initState = {
    projects: []
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_PROJECT":
            console.log('created pro ', action.project);
            return state;
        case "CREATE_PROJECT_ERROR":
            console.log('create project ERROR: ', action.err);
            return state;
        default: return state;
    }
}

export default projectReducer
