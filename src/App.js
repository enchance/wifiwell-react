import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Core/redux/store";
import Site from "./Components/Site";
import 'semantic-ui-css/semantic.min.css'
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <BrowserRouter>
                    <Site />
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;
