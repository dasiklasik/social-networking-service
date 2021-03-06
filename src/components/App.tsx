import React from 'react';
import './App.css';
import {Nav} from "./Nav/Nav";
import {Route} from "react-router-dom";
import News from './News/News';
import Settings from './Settings/Settings'
import Music from './Music/Music'
import UsersContainer from './Users/UsersContainer';
import {Routes} from 'react-router-dom'
import ProfileContainerWithUrl from './Profile/ProfileContainer'
import HeaderContainer from './Header/HeaderContainer';
import {Login} from "./Login/Login";
import DialogsContainer from './Dialogs/DialogsContainer';


function App() {
    return (

        <div className={'wrapper'}>
            <HeaderContainer/>
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
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </div>

        </div>

    );
}

export default App;
