
//THUNK returns not object but function instead of usual AC: 
export const ACcreateProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const myFireStore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        myFireStore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId,
            createdAt: new Date()
        }).then(() => {
            //asinc request to database here, and .then:
            dispatch ({type: "ADD_PROJECT", project: project})
        }).catch ((err) => {
            dispatch ({type: 'CREATE_PROJECT_ERROR', err})

        })
        
    }
}


