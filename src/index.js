import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
    reduxFirestore,
    getFirestore,
    createFirestoreInstance
    } from "redux-firestore";
import { ReactReduxFirebaseProvider, 
    // reactReduxFirebase, 
    // getFirebase 
    } from "react-redux-firebase";
import fbConfig from "./config/fbConfig";
import firebase from "firebase/app";

const store = createStore (rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ fbConfig, getFirestore })),
        reduxFirestore(fbConfig),
        // reactReduxFirebase(fbConfig),
    )
);

const rrfConfig = {
    userProfile: "users",
    useFirestoreForProfile: true
};

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
}

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();
