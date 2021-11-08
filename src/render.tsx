import ReactDOM from "react-dom";
import React from "react";
import App from "./components/App";
import {stateType} from "./redux/state";

export const rerenderCode = (state: stateType, addPost: (string: string) => void) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}