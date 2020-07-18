/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

const React = require("react");
const { configureStore } = require("@reduxjs/toolkit");
const { Provider } = require("react-redux");
const { Router } = require("react-router-dom");
const {createBrowserHistory} = require("history");

const history = require("./src/utils/history");
const userReducer = require("./src/store/userReducer");
const { FirebaseContext, default: Firebase } = require("./src/components/firebase");

const store = configureStore({
    reducer: userReducer
})

exports.wrapRootElement = ({ element }) => {
    return (
        <Router basename="/" history={createBrowserHistory()}>
            <Provider store={store}>
                <FirebaseContext.Provider value={new Firebase()}>
                    {element}
                </FirebaseContext.Provider>
            </Provider>
        </Router>
    )
}


