import React from 'react';
import './App.css';
import {Header} from "./Header";
import {Nav} from "./Nav";
import {Profile} from "./Profile";

function App() {
    return (
        <div className={'wrapper'}>
            <Header/>
            <Nav/>
            <Profile/>
        </div>
    );
}

export default App;
