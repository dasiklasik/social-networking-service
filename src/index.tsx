import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

export type dialogsDataType = {
    id: number
    name: string
}

export const dialogsData: Array<dialogsDataType> = [
    {id: 1, name: 'Kate'},
    {id: 2, name: 'Dasha'},
    {id: 3, name: 'Masha'}
]

export type messagesDataType = {
    id: number
    message: string
}

export const messagesData: Array<messagesDataType> = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hello!'}
]

 export type postDataType = {
    id: number
    message: string
    likesCount: string
}

export const postData: Array<postDataType> = [
    {id: 1, message: 'Message', likesCount: '0' },
    {id: 2, message: 'Message 2', likesCount: '2' },
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} postData={postData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
