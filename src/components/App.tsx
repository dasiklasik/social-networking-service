import React, {useEffect} from 'react';
import './App.css';
import {Nav} from "./Nav/Nav";
import {Route} from "react-router-dom";
import News from './News/News';
import Settings from './Settings/Settings'
import Music from './Music/Music'
import UsersContainer from './Users/UsersContainer';
import {Routes} from 'react-router-dom'
import ProfileContainer from './Profile/ProfileContainer'
import HeaderContainer from './Header/HeaderContainer';
import DialogsContainer from './Dialogs/DialogsContainer';
import {LoginContainer} from './Login/LoginContainer';
import {connect} from "react-redux";
import {reduxStoreType} from "../redux/redux-store";
import {initialize} from "../redux/reducers/app-reducer";
import {Preloader} from "./common/Preloader/Preloader";

type AppPropsType = {
    initialized: boolean
    initialize: () => void
}

const App = (props: AppPropsType) => {

    const {
        initialized,
        initialize,
    } = props

    useEffect(() => {
        initialize()
    }, [])

    if (!initialized) return <Preloader/>

    return (
        <div className={'wrapper'}>
            <HeaderContainer/>
            <Nav/>
            <div className={'content-wrapper'}>
                <Routes>
                    <Route path={'/'} element={<ProfileContainer/>}/>
                    <Route path={'/profile'} element={<ProfileContainer/>}>
                        <Route path=":userId" element={<ProfileContainer/>}/>
                    </Route>
                    <Route path="/dialogs/" element={<DialogsContainer/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/users" element={<UsersContainer/>}/>
                    <Route path="/login" element={<LoginContainer/>}/>
                </Routes>
            </div>
        </div>
    )
}

const mapStateToProps = (state: reduxStoreType) => {
    return {
        initialized: state.app.initialized,
    }
}

export default connect(mapStateToProps, {initialize})(App);
