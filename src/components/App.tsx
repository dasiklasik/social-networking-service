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
import {stateType} from "../redux/state";

type AppPropsType = {
    state: stateType
    addPost: (postMessage: string) => void
    typedMessage: string
    changeTypedMessage: (message: string) => void
}

function App({state, addPost, ...props}: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={'wrapper'}>
                <Header/>
                <Nav state={state.navbar}/>
                <div className={'content-wrapper'}>
                    <Route path="/profile" render={() => <Profile state={state.profilePage} addPost={addPost} typedMessage={props.typedMessage} changeTypedMessage={props.changeTypedMessage}/>} />
                    <Route path="/dialogs" render={() => {
                        return <Dialogs
                            state={state.dialogsPage}
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
