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
import {stateType, storeType} from "../redux/state";

type AppPropsType = {
    store: storeType
}

function App(props: AppPropsType) {

    const state = props.store.getState()

    return (
        <BrowserRouter>
            <div className={'wrapper'}>
                <Header/>
                <Nav state={state.navbar}/>
                <div className={'content-wrapper'}>
                    <Route path="/profile" render={() => <Profile state={state.profilePage}
                                                                  dispatch={props.store.dispatch.bind(props.store)}/>} />
                    <Route path="/dialogs" render={() => {
                        return <Dialogs
                            state={state.dialogsPage} dispatch={props.store.dispatch.bind(props.store)}
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
