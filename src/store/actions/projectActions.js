// export const createProject = (project) => {
//     return {
//         type: "ADD_PROJECT",
//         project: project
//     }
// }

//THUNK returns not object but function: 
export const ACcreateProject = (project) => {
    return (dispatch, getState) => {
        //asinc request to database here, and .then:
        dispatch ({type: "ADD_PROJECT", project: project})
    }
}