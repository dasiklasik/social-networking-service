import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Nav} from "./Nav/Nav";
import {Profile} from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";

function App() {
    return (
        <div className={'wrapper'}>
            <Header/>
            <Nav/>
            {/*<Profile/>*/}
            <Dialogs />
        </div>
    );
}

export default App;
