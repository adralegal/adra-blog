import firebase from "firebase";
import * as vars from "./env";

const config = {
    apiKey: vars.REACT_APP_API_KEY,
    authDomain: vars.REACT_APP_AUTH_DOMAIN,
    databaseURL: vars.REACT_APP_DATABASE_URL,
    projectId: vars.REACT_APP_PROJECT_ID,
    storageBucket: vars.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: vars.REACT_APP_MESSAGING_SENDER_ID,
};

type FBInstanceType = {
    auth: firebase.auth.Auth,
};

class Firebase {
    auth: firebase.auth.Auth;
    constructor() {
        firebase.initializeApp(config);
        this.auth = firebase.auth();
    }
}





export default Firebase;
export {FBInstanceType};