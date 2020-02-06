const initState = {
    projects: [
        {id: "1", title: "ToDo App", content: "Create it, using MUI, class and dummy components"},
        {id: "1", title: "The Global Storage", content: "Keep all data into Redux storage. Use React-Redux"},
        {id: "1", title: "Firebase", content: "Download data from here to server and back. Learn more"},
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_PROJECT":
            console.log('created pro ', action.project)
    }
    return state
}

export default projectReducer
