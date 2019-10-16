import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Site from "./Components/Site";
import './App.css';

function App() {
    return (
        <div className="App">

            <BrowserRouter>
                <Site />
            </BrowserRouter>

        </div>
    );
}

export default App;
