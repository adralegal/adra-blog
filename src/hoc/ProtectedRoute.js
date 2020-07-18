import React, { useContext, useState, useEffect } from "react"
import { Route } from "react-router-dom";
import { StyledFirebaseAuth } from "react-firebaseui";
import firebase from "firebase";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import _ from "lodash";

import { FirebaseContext } from "../components/firebase"
import Button from "../components/ui/button/button";

import { setUser } from "../store/userReducer";

const ProtectedRoute = ({ component: Component, path: path, ...rest }) => {

    const stateUser = useSelector(state => state);
    const dispatch = useDispatch();

    const fb = useContext(FirebaseContext);
    const [isAuthenticated, setAuthenticated] = useState(false);
    const uiConfig = {
        signInFlow: "popup",
        signInSuccessUrl: path,
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ]
    }


    useEffect(() => {
        const unsubscribe = fb.auth.onAuthStateChanged(user => {
            if (user) {
                setAuthenticated(true);
                if (_.isEmpty(stateUser.default)) {
                    dispatch(setUser({name: user.displayName}));
                    console.log(stateUser);

                }
            }
            else
                setAuthenticated(false);
            console.log(isAuthenticated);
        })

        return () => {
            unsubscribe();
        }
    });
    const logoutHandler = () => {
        fb.auth.signOut();
    }

    const render = props =>
        isAuthenticated === true ? <>
            <Button onClick={logoutHandler}>Logout</Button>
            <Component {...props} />
        </> : <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={fb.auth} />;
    return <Route path={path} render={render} {...rest} />;
}

export default ProtectedRoute;
