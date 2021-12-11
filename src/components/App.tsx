import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Nav} from "./Nav/Nav";
import {Profile} from "./Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import News from './News/News';
import Settings from './Settings/Settings'
import Music from './Music/Music'
import {DialogsContainer} from './Dialogs/DialogsContainer';
import {UsersContainer} from "./Users/UsersContainer";


function App() {
    return (
        <BrowserRouter>
            <div className={'wrapper'}>
                <Header/>
                <Nav/>
                <div className={'content-wrapper'}>
                    <Route path="/profile" render={() => <Profile/>}/>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
