import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className={'wrapper'}>
      <header className={'main-header'}>
        <img src={'https://fs.getcourse.ru/fileservice/file/download/a/33058/sc/207/h/14f49ae4d692824ba22fbf13a797ed88.png'} alt={'logo'} />
      </header>
        <nav className={'main-menu'}>
            <ul>
                <li>Profile</li>
                <li>Messages</li>
                <li>News</li>
                <li>Music</li>
                <li>Setting</li>
            </ul>
        </nav>
        <main className={'main-content'}>
            Main content
        </main>
    </div>
  );
}

export default App;
