import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Core/redux/store";
import Site from "./Components/Site";
import 'semantic-ui-css/semantic.min.css'
import './App.css';

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
    uri: 'https://cors-anywhere.herokuapp.com/https://anilist.co/graphiql',
})

function App() {
    return (
        <ApolloProvider client={client}>
            <Provider store={store}>
                <div className="App">
                    <BrowserRouter>
                        <Site />
                    </BrowserRouter>
                </div>
            </Provider>
        </ApolloProvider>
    );
}

export default App;
