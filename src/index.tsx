import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {rerenderCode} from "./render";
import {addPost, state, typedMessage, changeTypedMessage} from './redux/state';



rerenderCode(state, addPost, typedMessage, changeTypedMessage)






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
