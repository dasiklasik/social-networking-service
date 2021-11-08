import ReactDOM from "react-dom";
import React from "react";
import App from "./components/App";
import {changeTypedMessage, stateType} from "./redux/state";

export const rerenderCode = (state: stateType, addPost: (string: string) => void, typedMessage: string, changeTypedMessage: (message: string) => void) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} typedMessage={typedMessage} changeTypedMessage={changeTypedMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}