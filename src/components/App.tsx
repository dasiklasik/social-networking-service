import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Nav} from "./Nav/Nav";
import {Navigate, Route} from "react-router-dom";
import News from './News/News';
import Settings from './Settings/Settings'
import Music from './Music/Music'
import {DialogsContainer} from './Dialogs/DialogsContainer';
import UsersContainer from './Users/UsersContainer';
import {Routes} from 'react-router-dom'
import ProfileContainerWithUrl from './Profile/ProfileContainer'


function App() {
    debugger
    return (

        <div className={'wrapper'}>
            <Header/>
            <Nav/>
            <div className={'content-wrapper'}>
                <Routes>
                    <Route path={'/'} element={<ProfileContainerWithUrl/>}/>
                    <Route path={'/profile'} element={<ProfileContainerWithUrl/>}>
                        <Route path=":userId" element={<ProfileContainerWithUrl/>}/>
                    </Route>
                    <Route path="/dialogs/" element={<DialogsContainer/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/users" element={<UsersContainer/>}/>
                </Routes>
            </div>

        </div>

    );
}

export default App;
