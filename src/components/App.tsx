import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Nav} from "./Nav/Nav";
import {Profile} from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from './News/News';
import Settings from './Settings/Settings'
import Music from './Music/Music'
import {dialogsDataType, postDataType, messagesDataType} from "../index";

type AppPropsType = {
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
    postData: Array<postDataType>
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={'wrapper'}>
                <Header/>
                <Nav/>
                <div className={'content-wrapper'}>
                    <Route path="/profile" render={() => <Profile postData={props.postData}/>} />
                    <Route path="/dialogs" render={() => {
                        return <Dialogs
                            dialogsData={props.dialogsData}
                            messagesData={props.messagesData}
                        />
                    }}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
